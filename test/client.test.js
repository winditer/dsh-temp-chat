import test from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync, mkdtempSync, rmSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { tmpdir } from 'node:os'

const ROOT = resolve(import.meta.dirname, '..')
const client = readFileSync(resolve(ROOT, 'src/client.js'), 'utf8')
const clientBundle = readFileSync(resolve(ROOT, 'dist/client.js'), 'utf8')

test('client half uses plain browser timers, not the bundle-unavailable cordis timer service', () => {
  // The `timer` service is only installed for dynamic cordis-runner packages; a
  // profile-bundle client like dsh-temp-chat gets ctx.get('timer') === undefined, which
  // silently killed both the orb drift and the chat poll loop. Regression guard.
  assert.doesNotMatch(client, /ctx\.get\('timer'\)/, 'must not depend on the cordis timer service')
  assert.match(client, /window\.setInterval\(/, 'drift/chat timers must use plain browser setInterval')
  assert.match(client, /window\.setTimeout\(pollOnce, 0\)/, 'chat poll must kick off with a browser timeout')
  assert.match(client, /window\.clearInterval\(/, 'timers must be disposed on effect cleanup')
  assert.match(client, /window\.clearTimeout\(first\)/, 'poll first-fire timeout must be cleared')
})

test('client half styles the "follow session default" checkbox explicitly', () => {
  // `.dsh-temp-chat-configrow input { flex:1; min-width:0; }` used to also match the
  // checkbox, squeezing it to zero width so the toggle was invisible. Regression guard.
  assert.match(client, /input\[type='checkbox'\]/, 'checkbox needs its own explicit rule')
  assert.match(client, /min-width: 14px/, 'checkbox must not shrink below 14px')
  assert.match(client, /\.dsh-temp-chat-configrow label\.dsh-temp-chat-check \{ width: auto/, 'follow label must not inherit the 84px column width')
  assert.match(client, /input\[type='text'\], \.dsh-temp-chat-configrow input\[type='password'\]/, 'generic input styling must exclude the checkbox')
})
test('client half follows the DSH locale service with zh/en dictionaries', () => {
  assert.match(client, /inject: \['slots', 'locale'\]/, 'client must inject the locale service')
  assert.match(client, /React\.useSyncExternalStore\(/, 'locale changes must re-render via useSyncExternalStore')
  assert.match(client, /startsWith\('zh'\)/, 'zh must be detected by language prefix')
  assert.match(client, /navigator\.language/, 'must fall back to navigator.language when the locale service is absent')
  assert.match(client, /register\(NS, \{ zh, en \}\)/, 'dictionaries must be registered under the dsh-temp-chat namespace')
})

test('client half no longer hardcodes user-visible Chinese literals', () => {
  for (const literal of ['问小精灵点什么', '跟随会话默认', '清空聊天', '请先填写 API 地址', '暂时聊几句']) {
    assert.doesNotMatch(client, new RegExp(literal), `literal must move to the dictionary: ${literal}`)
  }
})

test('client half paints accumulating text while a message is still streaming', () => {
  // Regression guard: a pending assistant message carried the growing streamed
  // text in `m.text`, but the render branch only drew the typing dots until
  // `pending` flipped to false — the whole answer then appeared at once, so
  // streaming was invisible (users saw spinning dots, then the full reply).
  assert.match(client, /m\.pending \? \(m\.text \|\| typing\)/, 'pending bubble must show m.text once any token arrived')
  assert.match(client, /const typing = React\.createElement\('span', \{ className: 'dsh-temp-chat-typing' \}/, 'typing dots must be the fallback, not the only pending render')
})

test('a fresh git archive of HEAD ships dist/client.js so git-based installs work', (t) => {
  // Regression guard: installing dsh-temp-chat as a git dependency (e.g.
  // `github:winditer/dsh-temp-chat` in a profile's package.json) makes pnpm download
  // the codeload tarball, which is `git archive` of the pinned commit. When
  // dist/client.js was gitignored the tarball had no bundle and
  // @deepseek-ai/dsh-client-modules tore down the whole plugin tree at launch:
  // "client bundles not found; run `pnpm run build` before launch".
  let insideWorkTree
  try {
    execFileSync('git', ['rev-parse', '--is-inside-work-tree'], { stdio: 'ignore' })
    insideWorkTree = true
  } catch {
    insideWorkTree = false
  }
  if (!insideWorkTree) {
    t.skip('not a git worktree; nothing to archive')
    return
  }
  const dir = mkdtempSync(join(tmpdir(), 'dsh-temp-chat-archive-'))
  try {
    const archive = join(dir, 'tree.tar')
    execFileSync('git', ['archive', '--format=tar', '-o', archive, 'HEAD'], { stdio: 'ignore' })
    const listed = execFileSync('tar', ['tf', archive], { encoding: 'utf8' }).split('\n')
    assert.ok(
      listed.includes('dist/client.js'),
      'dist/client.js must be present in a fresh git archive of HEAD (it is gitignored and was missing)'
    )
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test('the committed dist/client.js is byte-fresh: rebuilding from src/client.js reproduces it', async () => {
  // The bundle is now committed (so git-based installs work); this guard keeps
  // that committed artifact from silently rotting when src/client.js changes.
  // It runs the same pipeline as `npm run build`, not a copy of the config.
  // The check must build into dist/ itself: the inline sourcemap records
  // `sources` relative to the output file's directory, so building into a temp
  // dir would produce different bytes even when nothing changed.
  const { buildClientBundle } = await import('../scripts/build.mjs')
  const freshOut = resolve(ROOT, 'dist', `.client-fresh-${process.pid}.js`)
  try {
    const fresh = await buildClientBundle({ outFile: freshOut })
    assert.equal(
      fresh,
      clientBundle,
      'dist/client.js is stale — run `npm run build` and commit the rebuild together with src/client.js'
    )
  } finally {
    rmSync(freshOut, { force: true })
  }
})
