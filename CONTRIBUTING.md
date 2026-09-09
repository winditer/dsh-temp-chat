# Contributing to dsh-temp-chat

Thanks for helping with the elf! The plugin is small on purpose, so the bar for
contributions is low but real.

## Getting started

```sh
git clone https://github.com/winditer/dsh-temp-chat.git && cd dsh-temp-chat
npm install          # esbuild is the only dependency
npm run build        # src/client.js -> dist/client.js (__ModuleLoader__ bundle)
```

Install into a DSH profile to try it:

```sh
dsh plugin --profile desktop add .
```

## Checks that must pass

```sh
npm run check   # node --check on src/client.js and src/host.js
npm test        # node --test: host JSON API contract + client bundle guards
npm run build   # esbuild bundle; must succeed
```

CI runs all three on Node 22 and 24 for every push and PR.

## Architecture at a glance

- `src/host.js` — Node host half (also shipped as `lib/index.js`): registers the
  `/dsh-temp-chat/api` JSON route and streams session-default chats via `llm.stream`.
- `src/client.js` — browser half, bundled to `dist/client.js`: renders into the
  `shell.overlay` slot, talks to the host with `fetch` POSTs.
- `scripts/build.mjs` — esbuild + the `__ModuleLoader__` wrapper.

## Gotchas (learned the hard way)

- **The bundle `load` id must equal the package name.** `scripts/build.mjs`
  derives it from `package.json` and fails the build on drift, so never hardcode
  it elsewhere or rename the package casually.
- **Profile bundles get no cordis `timer` service.** Use plain browser
  `setInterval`/`setTimeout` in the client and dispose them from effect cleanup.
- **`dist/client.js` is committed, and must stay fresh.** Profile installs done
  as git dependencies download a codeload tarball of the commit — if the bundle
  were gitignored (as it once was), those installs shipped no `dist/client.js`
  and DSH tore down the whole plugin tree at launch (`client bundles not found;
  run pnpm run build before launch`). So when you change `src/client.js`, run
  `npm run build` and commit the rebuilt `dist/client.js` in the same commit.
  Neither half needs this for registry/npm installs only, but the repo policy is:
  the tree must always be installable from git. `npm test` enforces both sides
  of the contract — a fresh `git archive HEAD` must contain `dist/client.js`,
  and rebuilding from `src/client.js` must reproduce the committed bundle
  byte-for-byte (esbuild is pinned to an exact version so this is reproducible).
- **Client changes go live on page refresh;** host changes need a full DSH
  restart.

## Submitting changes

- Keep commits small and focused; describe *why* in the message.
- Prefer adding a regression test over documenting a fixed symptom.
- PRs go to `main` and must keep `check`, `test` and `build` green on both
  Node versions in CI.