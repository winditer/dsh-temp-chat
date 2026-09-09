/** dsh-temp-chat 构建脚本 — esbuild 打包 Client half 为官方 client.js 格式 */

import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const entry = resolve(ROOT, 'src/client.js');
const outDir = resolve(ROOT, 'dist');
const outFinal = resolve(outDir, 'client.js');

/**
 * esbuild 打包 pipeline（CLI 与测试共用同一份，避免两侧配置漂移）。
 * 把 src/client.js 打成 __ModuleLoader__ bundle 并写 outFile，返回最终 bundle 字符串。
 * 纯函数式：不 import 时不会自动构建（由底部 isMain guard 触发 CLI 行为）。
 */
export async function buildClientBundle({ outFile = outFinal } = {}) {
  const outRaw = resolve(dirname(outFile), '_bundle.js');
  mkdirSync(dirname(outFile), { recursive: true });
  try {
    await esbuild.build({
      entryPoints: [entry],
      bundle: true,
      format: 'cjs',
      platform: 'browser',
      target: 'es2020',
      jsx: 'automatic',
      jsxImportSource: 'react',
      external: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@deepseek-ai/*',
        'clsx',
      ],
      outfile: outRaw,
      sourcemap: 'inline',
    });

    const bundle = readFileSync(outRaw, 'utf8');

    // 运行时约束（与 dsh-prompt-optimizer 同源）：bundle 的 load id 必须等于安装包名 dsh-temp-chat，
    // 否则 arrive() 抛出 "bundle loaded without registering <id>"。从 package.json 派生 id，
    // 一旦包名（或这段逻辑）漂移就在构建期立刻失败，而不是等运行时才爆。
    const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
    const id = String(pkg.name || '').trim();
    if (!/^[a-z0-9][a-z0-9-]*$/i.test(id)) {
      throw new Error(`bundle load id must be a valid package name, got: ${JSON.stringify(pkg.name)}`);
    }
    const wrapped = `window.__ModuleLoader__.load({
  id: "${id}",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
${bundle}
    return module.exports;
  }
});
`;

    writeFileSync(outFile, wrapped, 'utf8');
    return wrapped;
  } finally {
    rmSync(outRaw, { force: true });
  }
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const wrapped = await buildClientBundle();
  console.log(`✓ Built: ${outFinal} (${(wrapped.length / 1024).toFixed(1)} KB)`);
}