window.__ModuleLoader__.load({
  id: "dsh-elf",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var import_react = __toESM(require("react"), 1);

// src/locales.js
var NS = "dsh-elf";
var zh = {
  name: "DeepSeek \u5C0F\u7CBE\u7075",
  title: "DeepSeek \u7CBE\u7075",
  modelBadgeTitle: "\u5F53\u524D\u6A21\u578B",
  cfgBtn: "\u6A21\u578B\u914D\u7F6E",
  mini: "\u6700\u5C0F\u5316\u5230\u5C0F\u7CBE\u7075",
  clearTitle: "\u6E05\u7A7A\u804A\u5929",
  clear: "\u6E05\u7A7A",
  modelFollow: "\u8DDF\u968F\u9ED8\u8BA4",
  modelSource: "\u6A21\u578B\u6765\u6E90",
  follow: "\u8DDF\u968F\u4F1A\u8BDD\u9ED8\u8BA4",
  provider: "\u63D0\u4F9B\u65B9",
  apiBase: "API \u5730\u5740",
  apiKey: "API Key",
  model: "\u6A21\u578B",
  reasoning: "reasoning",
  modelPh: "\u4F8B\u5982 deepseek-chat",
  effortPh: "\u53EF\u9009\uFF1Ahigh / medium / low",
  cfgHint: '\u81EA\u5B9A\u4E49\u6A21\u5F0F\u4E0B\u5C0F\u7CBE\u7075\u76F4\u63A5\u8C03\u7528\u8BE5 API \u5730\u5740\uFF08OpenAI \u517C\u5BB9 /chat/completions \u6D41\u5F0F\u63A5\u53E3\uFF09\u3002\u53D6\u6D88\u52FE\u9009"\u8DDF\u968F\u4F1A\u8BDD\u9ED8\u8BA4"\u540E\u751F\u6548\u3002',
  inputPh: "\u95EE\u5C0F\u7CBE\u7075\u70B9\u4EC0\u4E48\u2026",
  empty: "\u5728\u5C0F\u7CBE\u7075\u91CC\u4E34\u65F6\u804A\u51E0\u53E5\u5427 \u2728\uFF08\u4E0D\u4F1A\u5199\u5165\u4F1A\u8BDD\u8BB0\u5F55\uFF09",
  copy: "\u590D\u5236",
  needCustomCfg: "\u8BF7\u5148\u586B\u5199 API \u5730\u5740\u3001API Key \u548C\u6A21\u578B\u540D",
  hostFail: "\u5C0F\u7CBE\u7075 Host \u8BF7\u6C42\u5931\u8D25 ({0})",
  reqFailed: "\u8BF7\u6C42\u5931\u8D25",
  chatEnded: "\u5BF9\u8BDD\u7ED3\u675F",
  presetDeepseek: "DeepSeek",
  presetOpenai: "OpenAI",
  presetMoonshot: "Moonshot Kimi",
  presetZhipu: "\u667A\u8C31 GLM",
  presetQwen: "\u901A\u4E49\u5343\u95EE",
  presetCustom: "\u81EA\u5B9A\u4E49"
};
var en = {
  name: "DeepSeek Elf",
  title: "DeepSeek Elf",
  modelBadgeTitle: "Current model",
  cfgBtn: "Model config",
  mini: "Minimize to elf",
  clearTitle: "Clear chat",
  clear: "Clear",
  modelFollow: "Following default",
  modelSource: "Model source",
  follow: "Follow session default",
  provider: "Provider",
  apiBase: "API base URL",
  apiKey: "API Key",
  model: "Model",
  reasoning: "reasoning",
  modelPh: "e.g. deepseek-chat",
  effortPh: "Optional: high / medium / low",
  cfgHint: 'In custom mode the elf calls this API directly (an OpenAI-compatible /chat/completions streaming endpoint). Takes effect after unchecking "Follow session default".',
  inputPh: "Ask the elf something\u2026",
  empty: "Have a quick chat with the elf \u2728 (not saved to session history)",
  copy: "Copy",
  needCustomCfg: "Fill in the API base URL, API Key and model first",
  hostFail: "Elf host request failed ({0})",
  reqFailed: "Request failed",
  chatEnded: "Chat ended",
  presetDeepseek: "DeepSeek",
  presetOpenai: "OpenAI",
  presetMoonshot: "Moonshot Kimi",
  presetZhipu: "Zhipu GLM",
  presetQwen: "Qwen",
  presetCustom: "Custom"
};

// src/client.js
var API_PREFIX = "/dsh-elf/api";
async function callHost(method, args) {
  const response = await fetch(`${API_PREFIX}/${encodeURIComponent(method)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(args || {})
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload || !payload.ok) {
    throw new Error(payload && payload.error || zh.hostFail.replace("{0}", String(response.status)));
  }
  return payload.value;
}
var plugin = {
  inject: ["slots", "locale"],
  apply(ctx) {
    const locale = ctx.locale;
    const t = locale ? locale.bind(NS) : null;
    if (locale) {
      ctx.effect(() => locale.register(NS, { zh, en }), "dsh-elf: dictionaries");
    }
    function currentLang() {
      const active = locale ? String(locale.getSnapshot().active) : String(document.documentElement.lang || navigator.language || "zh");
      return active.toLowerCase().startsWith("zh") ? "zh" : "en";
    }
    const styles = {
      insert(css) {
        const selector = 'style[data-plugin-css="dsh-elf"]';
        if (document.querySelector(selector)) return;
        const tag = document.createElement("style");
        tag.dataset.plugin = "dsh-elf";
        tag.dataset.pluginCss = "dsh-elf";
        tag.textContent = css;
        document.head.appendChild(tag);
        ctx.effect(() => () => tag.remove(), "dsh-elf: styles");
      }
    };
    const WHALE_SEGS = [
      "M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 ",
      "34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9",
      ".22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 2",
      "1.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.",
      "7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1",
      "152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.016",
      "1 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z"
    ];
    const WHALE_D = WHALE_SEGS.join("");
    const WHALE_VB = "0 0 50 50";
    const PRESETS = [
      { id: "deepseek", labelKey: "presetDeepseek", base: "https://api.deepseek.com/v1" },
      { id: "openai", labelKey: "presetOpenai", base: "https://api.openai.com/v1" },
      { id: "moonshot", labelKey: "presetMoonshot", base: "https://api.moonshot.cn/v1" },
      { id: "zhipu", labelKey: "presetZhipu", base: "https://open.bigmodel.cn/api/paas/v4" },
      { id: "qwen", labelKey: "presetQwen", base: "https://dashscope.aliyuncs.com/compatible-mode/v1" },
      { id: "custom", labelKey: "presetCustom", base: "" }
    ];
    styles.insert(`
.dsh-elf-root { position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; }
.dsh-elf-root * { box-sizing: border-box; }
.dsh-elf-orb { position: fixed; pointer-events: auto; cursor: pointer; user-select: none; -webkit-user-select: none; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; animation: dsh-elf-bob 4.2s ease-in-out infinite; transition: transform .15s ease; touch-action: none; }
.dsh-elf-orb:hover { transform: scale(1.08); }
.dsh-elf-orb svg { width: 40px; height: 40px; filter: drop-shadow(0 2px 5px rgba(77,107,254,.35)); }
@keyframes dsh-elf-bob { 0%,100% { transform: translateY(0) rotate(-1.5deg); } 50% { transform: translateY(-5px) rotate(1.5deg); } }
@keyframes dsh-elf-in { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }

.dsh-elf-win { position: fixed; pointer-events: auto; display: flex; flex-direction: column; width: 400px; max-width: calc(100vw - 24px); height: 540px; max-height: calc(100vh - 24px); border-radius: 16px; overflow: hidden; background: rgba(255,255,255,.92); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(139,92,246,.28); box-shadow: 0 18px 50px rgba(30,41,99,.28), 0 2px 10px rgba(30,41,99,.14); animation: dsh-elf-in .18s ease-out; z-index: 1; }
.dsh-elf-head { display: flex; align-items: center; gap: 8px; padding: 10px 12px; cursor: move; user-select: none; -webkit-user-select: none; background: linear-gradient(135deg, rgba(77,107,254,.16), rgba(139,92,246,.13) 55%, rgba(52,211,153,.16)); border-bottom: 1px solid rgba(139,92,246,.18); touch-action: none; }
.dsh-elf-head svg { width: 24px; height: 24px; flex: none; }
.dsh-elf-title { font-size: 13px; font-weight: 600; color: #1e293b; white-space: nowrap; }
.dsh-elf-model { font-size: 11px; color: #64748b; background: rgba(139,92,246,.12); padding: 2px 8px; border-radius: 999px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 150px; }
.dsh-elf-headbtn { border: none; background: transparent; cursor: pointer; color: #475569; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 13px; padding: 0; flex: none; }
.dsh-elf-headbtn:hover { background: rgba(139,92,246,.16); }
.dsh-elf-headbtn:disabled { opacity: .4; cursor: default; }
.dsh-elf-clear { border: 1px solid rgba(239,68,68,.35); background: rgba(239,68,68,.06); color: #dc2626; cursor: pointer; font-size: 11px; line-height: 1; padding: 4px 9px; border-radius: 999px; flex: none; }
.dsh-elf-clear:hover { background: rgba(239,68,68,.14); }
.dsh-elf-clear:disabled { opacity: .4; cursor: default; }
.dsh-elf-spacer { flex: 1; }

.dsh-elf-config { padding: 10px 12px; border-bottom: 1px solid rgba(139,92,246,.16); background: rgba(148,163,184,.07); font-size: 12px; color: #334155; display: none; max-height: 250px; overflow-y: auto; }
.dsh-elf-config.open { display: block; }
.dsh-elf-configrow { display: flex; align-items: center; gap: 8px; margin: 6px 0; }
.dsh-elf-configrow label { width: 84px; flex: none; color: #475569; }
.dsh-elf-configrow input[type='text'], .dsh-elf-configrow input[type='password'], .dsh-elf-configrow select { flex: 1; border: 1px solid rgba(139,92,246,.3); border-radius: 6px; padding: 4px 8px; font-size: 12px; background: rgba(255,255,255,.85); color: #1e293b; outline: none; min-width: 0; }
.dsh-elf-configrow input[type='text']:focus, .dsh-elf-configrow input[type='password']:focus, .dsh-elf-configrow select:focus { border-color: #8b5cf6; }
.dsh-elf-check { display: flex; align-items: center; gap: 6px; cursor: pointer; white-space: nowrap; }
.dsh-elf-configrow label.dsh-elf-check { width: auto; flex: none; }
.dsh-elf-configrow input[type='checkbox'] { flex: none; width: 14px; height: 14px; min-width: 14px; min-height: 14px; margin: 0; padding: 0; border: none; background: transparent; accent-color: #8b5cf6; cursor: pointer; }
.dsh-elf-hint { font-size: 11px; color: #64748b; margin: 4px 0 2px; }

.dsh-elf-msgs { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 10px; background: transparent; }
.dsh-elf-msg { max-width: 86%; padding: 8px 11px; border-radius: 12px; font-size: 13px; line-height: 1.55; white-space: pre-wrap; word-break: break-word; position: relative; }
.dsh-elf-msg.user { align-self: flex-end; background: linear-gradient(135deg, #4d6bfe, #8b5cf6); color: #fff; border-bottom-right-radius: 4px; }
.dsh-elf-msg.assistant { align-self: flex-start; background: rgba(139,92,246,.1); color: #1e293b; border: 1px solid rgba(139,92,246,.18); border-bottom-left-radius: 4px; }
.dsh-elf-msg.error { border-color: rgba(239,68,68,.5); color: #b91c1c; background: rgba(239,68,68,.08); }
.dsh-elf-msg .copy { position: absolute; top: 4px; right: 6px; border: none; background: transparent; cursor: pointer; font-size: 12px; color: #94a3b8; opacity: 0; transition: opacity .12s; padding: 2px 4px; border-radius: 4px; }
.dsh-elf-msg:hover .copy { opacity: 1; }
.dsh-elf-msg .copy:hover { color: #8b5cf6; background: rgba(139,92,246,.1); }
.dsh-elf-msg.user .copy { color: rgba(255,255,255,.75); }
.dsh-elf-typing { display: inline-flex; gap: 4px; align-items: center; height: 18px; }
.dsh-elf-typing i { width: 5px; height: 5px; border-radius: 50%; background: #8b5cf6; animation: dsh-elf-bounce 1s ease-in-out infinite; }
.dsh-elf-typing i:nth-child(2) { animation-delay: .15s; }
.dsh-elf-typing i:nth-child(3) { animation-delay: .3s; }
@keyframes dsh-elf-bounce { 0%,100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-5px); opacity: 1; } }

.dsh-elf-inputrow { display: flex; align-items: flex-end; gap: 8px; padding: 10px 12px; border-top: 1px solid rgba(139,92,246,.16); background: rgba(255,255,255,.6); }
.dsh-elf-input { flex: 1; border: 1px solid rgba(139,92,246,.28); border-radius: 10px; padding: 8px 10px; font-size: 13px; line-height: 1.4; resize: none; outline: none; background: rgba(255,255,255,.9); color: #1e293b; max-height: 96px; font-family: inherit; }
.dsh-elf-input:focus { border-color: #8b5cf6; box-shadow: 0 0 0 3px rgba(139,92,246,.15); }
.dsh-elf-send { border: none; cursor: pointer; background: linear-gradient(135deg, #4d6bfe, #8b5cf6); color: #fff; width: 34px; height: 34px; border-radius: 10px; font-size: 15px; display: flex; align-items: center; justify-content: center; flex: none; }
.dsh-elf-send:hover { filter: brightness(1.08); }
.dsh-elf-send:disabled { opacity: .5; cursor: default; }

@media (prefers-color-scheme: dark) {
  .dsh-elf-win { background: rgba(15,23,42,.9); border-color: rgba(139,92,246,.4); }
  .dsh-elf-title { color: #e2e8f0; }
  .dsh-elf-msg.assistant { color: #e2e8f0; background: rgba(139,92,246,.18); border-color: rgba(139,92,246,.3); }
  .dsh-elf-msg.error { color: #fca5a5; }
  .dsh-elf-model { color: #cbd5e1; background: rgba(139,92,246,.2); }
  .dsh-elf-headbtn { color: #cbd5e1; }
  .dsh-elf-config { color: #cbd5e1; background: rgba(148,163,184,.08); }
  .dsh-elf-configrow label { color: #cbd5e1; }
  .dsh-elf-configrow input[type='text'], .dsh-elf-configrow input[type='password'], .dsh-elf-configrow select { background: rgba(30,41,59,.8); color: #e2e8f0; border-color: rgba(139,92,246,.4); }
  .dsh-elf-hint { color: #94a3b8; }
  .dsh-elf-inputrow { background: rgba(15,23,42,.55); }
  .dsh-elf-input { background: rgba(30,41,59,.85); color: #e2e8f0; border-color: rgba(139,92,246,.4); }
}
`);
    function WhaleIcon(props) {
      const white = props.white;
      const gid = props.gid || "dsh-elf-grad";
      const defs = [];
      if (!white) {
        defs.push(import_react.default.createElement(
          "defs",
          { key: "defs" },
          import_react.default.createElement(
            "linearGradient",
            { id: gid, x1: "0", y1: "0", x2: "1", y2: "1" },
            import_react.default.createElement("stop", { offset: "0%", stopColor: "#4D6BFE" }),
            import_react.default.createElement("stop", { offset: "50%", stopColor: "#8B5CF6" }),
            import_react.default.createElement("stop", { offset: "100%", stopColor: "#34D399" })
          )
        ));
      }
      const cls = "dsh-elf-whale" + (props.cls ? " " + props.cls : "");
      return import_react.default.createElement(
        "svg",
        {
          viewBox: WHALE_VB,
          width: props.size || 46,
          height: props.size || 46,
          preserveAspectRatio: "xMidYMid meet",
          "aria-hidden": true,
          className: cls
        },
        defs,
        import_react.default.createElement("path", {
          d: WHALE_D,
          fill: white ? "#ffffff" : "url(#" + gid + ")",
          fillOpacity: white ? props.opacity != null ? props.opacity : 0.97 : 1
        })
      );
    }
    function lastOf(arr) {
      return arr[arr.length - 1];
    }
    function clamp(v, lo, hi) {
      return v < lo ? lo : v > hi ? hi : v;
    }
    let lastDragMoved = false;
    function ElfApp() {
      const lang = import_react.default.useSyncExternalStore(
        (cb) => locale ? locale.subscribe(cb) : () => {
        },
        () => currentLang()
      );
      const T = lang === "zh" ? zh : en;
      const [mode, setMode] = import_react.default.useState("orb");
      const [msgs, setMsgs] = import_react.default.useState([]);
      const [input, setInput] = import_react.default.useState("");
      const [busy, setBusy] = import_react.default.useState(false);
      const [cfgOpen, setCfgOpen] = import_react.default.useState(false);
      const [cfg, setCfg] = import_react.default.useState(null);
      const [session, setSession] = import_react.default.useState(null);
      const [orbPos, setOrbPos] = import_react.default.useState(null);
      const [winPos, setWinPos] = import_react.default.useState(null);
      const [drag, setDrag] = import_react.default.useState(null);
      const [chatId, setChatId] = import_react.default.useState(null);
      import_react.default.useEffect(() => {
        try {
          const raw = localStorage.getItem("dsh-elf:chat");
          if (raw) {
            const saved = JSON.parse(raw);
            if (Array.isArray(saved)) setMsgs(saved.filter((m) => !m.pending));
          }
        } catch (e) {
        }
        try {
          const raw = localStorage.getItem("dsh-elf:cfg");
          const def = { follow: true, provider: "deepseek", base: PRESETS[0].base, apiKey: "", model: "", effort: "" };
          if (raw) {
            const saved = JSON.parse(raw);
            setCfg(Object.assign(def, saved));
          } else setCfg(def);
        } catch (e) {
          setCfg({ follow: true, provider: "deepseek", base: PRESETS[0].base, apiKey: "", model: "", effort: "" });
        }
        try {
          const raw = localStorage.getItem("dsh-elf:orb");
          if (raw) setOrbPos(JSON.parse(raw));
        } catch (e) {
        }
        try {
          const raw = localStorage.getItem("dsh-elf:win");
          if (raw) setWinPos(JSON.parse(raw));
        } catch (e) {
        }
        try {
          const raw = localStorage.getItem("dsh-elf:mode");
          if (raw) setMode(raw);
        } catch (e) {
        }
        callHost("elf.sessionModel", {}).then((r) => {
          if (r && r.available) setSession(r);
        }).catch(() => {
        });
      }, []);
      import_react.default.useEffect(() => {
        try {
          localStorage.setItem("dsh-elf:chat", JSON.stringify(msgs));
        } catch (e) {
        }
      }, [msgs]);
      import_react.default.useEffect(() => {
        if (cfg) {
          try {
            localStorage.setItem("dsh-elf:cfg", JSON.stringify(cfg));
          } catch (e) {
          }
        }
      }, [cfg]);
      import_react.default.useEffect(() => {
        try {
          localStorage.setItem("dsh-elf:mode", mode);
        } catch (e) {
        }
      }, [mode]);
      let effModel = "\u2026";
      if (cfg) {
        if (!cfg.follow && cfg.model) effModel = (cfg.base || "custom").replace(/^https?:\/\//, "").split("/")[0] + "/" + cfg.model + (cfg.effort ? " \xB7 " + cfg.effort : "");
        else if (session) effModel = session.provider + "/" + session.model;
        else effModel = T.modelFollow;
      }
      import_react.default.useEffect(() => {
        if (mode !== "orb") return void 0;
        let t2 = Math.random() * 10;
        const id = window.setInterval(() => {
          if (drag) return;
          t2 += 0.02;
          const vw = window.innerWidth || 1200;
          const vh = window.innerHeight || 800;
          const size = 48;
          const ax = orbPos ? orbPos.x : vw - size - 22;
          const ay = orbPos ? orbPos.y : vh - size - 22;
          const rx = Math.min(46, vw / 12);
          const ry = Math.min(30, vh / 16);
          const x = clamp(ax + Math.sin(t2) * rx, 6, vw - size - 6);
          const y = clamp(ay + Math.cos(t2 * 1.4) * ry, 6, vh - size - 6);
          setOrbPos({ x, y });
        }, 100);
        return () => window.clearInterval(id);
      }, [mode, !!drag]);
      import_react.default.useEffect(() => {
        if (!drag) return void 0;
        const onMove = (e) => {
          lastDragMoved = true;
          const vw = window.innerWidth || 1200;
          const vh = window.innerHeight || 800;
          if (drag.kind === "orb") {
            const size = 48;
            setOrbPos({
              x: clamp(e.clientX - drag.dx, 6, vw - size - 6),
              y: clamp(e.clientY - drag.dy, 6, vh - size - 6)
            });
          } else {
            const w = 400;
            const h = 540;
            setWinPos({
              x: clamp(e.clientX - drag.dx, 6, vw - w - 6),
              y: clamp(e.clientY - drag.dy, 6, vh - h - 6)
            });
          }
        };
        const onUp = (e) => {
          setDrag(null);
          const vw = window.innerWidth || 1200;
          const vh = window.innerHeight || 800;
          if (drag.kind === "orb") {
            const size = 48;
            const x = clamp(e.clientX - drag.dx, 6, vw - size - 6);
            const y = clamp(e.clientY - drag.dy, 6, vh - size - 6);
            setOrbPos({ x, y });
            try {
              localStorage.setItem("dsh-elf:orb", JSON.stringify({ x, y }));
            } catch (err) {
            }
          } else {
            const w = 400;
            const h = 540;
            const x = clamp(e.clientX - drag.dx, 6, vw - w - 6);
            const y = clamp(e.clientY - drag.dy, 6, vh - h - 6);
            setWinPos({ x, y });
            try {
              localStorage.setItem("dsh-elf:win", JSON.stringify({ x, y }));
            } catch (err) {
            }
          }
        };
        if (window.addEventListener) {
          window.addEventListener("pointermove", onMove);
          window.addEventListener("pointerup", onUp);
          return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
          };
        }
        return void 0;
      }, [drag]);
      const startOrbDrag = (e) => {
        if (mode !== "orb") return;
        if (e.button !== void 0 && e.button !== 0) return;
        lastDragMoved = false;
        const rect = e.currentTarget.getBoundingClientRect();
        setDrag({ kind: "orb", dx: e.clientX - rect.left, dy: e.clientY - rect.top });
        if (e.preventDefault) e.preventDefault();
      };
      const startWinDrag = (e) => {
        if (e.target && e.target.closest && e.target.closest(".dsh-elf-headbtn, .dsh-elf-clear")) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setDrag({ kind: "win", dx: e.clientX - rect.left, dy: e.clientY - rect.top });
        if (e.preventDefault) e.preventDefault();
      };
      import_react.default.useEffect(() => {
        if (!chatId) return void 0;
        let stopped = false;
        const pollOnce = async () => {
          if (stopped) return;
          try {
            const r = await callHost("elf.chat.poll", { chatId });
            if (stopped) return;
            if (r && r.ok) {
              setMsgs((prev) => {
                const copy = prev.slice();
                const last = lastOf(copy);
                if (last && last.role === "assistant" && last.pending) {
                  if (r.error) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: r.error };
                  else copy[copy.length - 1] = { role: "assistant", text: r.text, pending: !r.done };
                }
                return copy;
              });
              if (r.done) {
                stopped = true;
                setBusy(false);
                setChatId(null);
                try {
                  callHost("elf.chat.close", { chatId });
                } catch (e) {
                }
              }
            } else {
              stopped = true;
              setBusy(false);
              setChatId(null);
              setMsgs((prev) => {
                const copy = prev.slice();
                const last = lastOf(copy);
                if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: r && r.error || T.chatEnded };
                return copy;
              });
            }
          } catch (err) {
            if (!stopped) {
              stopped = true;
              setBusy(false);
              setChatId(null);
              setMsgs((prev) => {
                const copy = prev.slice();
                const last = lastOf(copy);
                if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: String(err && err.message || err) };
                return copy;
              });
            }
          }
        };
        const first = window.setTimeout(pollOnce, 0);
        const interval = window.setInterval(pollOnce, 55);
        return () => {
          stopped = true;
          window.clearTimeout(first);
          window.clearInterval(interval);
        };
      }, [chatId]);
      const send = () => {
        const text = input.trim();
        if (!text || busy) return;
        const next = msgs.concat([{ role: "user", text }, { role: "assistant", text: "", pending: true }]);
        setMsgs(next);
        setInput("");
        setBusy(true);
        const wire = next.filter((m) => !m.pending).map((m) => ({ role: m.role, text: m.text }));
        if (cfg && !cfg.follow) {
          const base = (cfg.base || "").trim().replace(/\/+$/, "");
          const model = (cfg.model || "").trim();
          if (!base || !model || !cfg.apiKey) {
            setBusy(false);
            setMsgs((prev) => {
              const copy = prev.slice();
              const last = lastOf(copy);
              if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: T.needCustomCfg };
              return copy;
            });
            return;
          }
          const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
          const url = base + "/chat/completions";
          const body = { model, messages: wire.map((m) => ({ role: m.role, content: m.text })), stream: true };
          if (cfg.effort) body.reasoning_effort = cfg.effort;
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + (cfg.apiKey || "").trim()
            },
            body: JSON.stringify(body),
            signal: controller ? controller.signal : void 0
          }).then(async (res) => {
            if (!res.ok) {
              let msg = "HTTP " + res.status;
              try {
                const j = await res.json();
                if (j && j.error && j.error.message) msg = j.error.message;
              } catch (e) {
              }
              throw new Error(msg);
            }
            if (!res.body || !res.body.getReader) {
              const j = await res.json();
              const t2 = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content || "";
              setMsgs((prev) => {
                const copy = prev.slice();
                const last = lastOf(copy);
                if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: t2, pending: false };
                return copy;
              });
              return;
            }
            const reader = res.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";
            let acc = "";
            for (; ; ) {
              const { done, value } = await reader.read();
              if (done) break;
              buffer += decoder.decode(value, { stream: true });
              let nl;
              while ((nl = buffer.indexOf("\n")) >= 0) {
                const line = buffer.slice(0, nl).trim();
                buffer = buffer.slice(nl + 1);
                if (!line || line[0] !== "d") continue;
                if (!line.startsWith("data:")) continue;
                const data = line.slice(5).trim();
                if (data === "[DONE]") {
                  buffer = "";
                  break;
                }
                try {
                  const j = JSON.parse(data);
                  const piece = j && j.choices && j.choices[0] && j.choices[0].delta && j.choices[0].delta.content;
                  if (typeof piece === "string" && piece) {
                    acc += piece;
                    setMsgs((prev) => {
                      const copy = prev.slice();
                      const last = lastOf(copy);
                      if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: acc, pending: true };
                      return copy;
                    });
                  }
                } catch (e) {
                }
              }
            }
            setMsgs((prev) => {
              const copy = prev.slice();
              const last = lastOf(copy);
              if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: acc, pending: false };
              return copy;
            });
          }).catch((err) => {
            setBusy(false);
            setMsgs((prev) => {
              const copy = prev.slice();
              const last = lastOf(copy);
              if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: String(err && err.message || err) };
              return copy;
            });
          }).then(() => {
            setBusy(false);
          });
          return;
        }
        const payload = { messages: wire, lang: lang === "zh" ? "zh" : "en" };
        callHost("elf.chat.start", payload).then((r) => {
          if (r && r.ok) {
            setChatId(r.chatId);
          } else {
            setBusy(false);
            setMsgs((prev) => {
              const copy = prev.slice();
              const last = lastOf(copy);
              if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: r && r.error || T.reqFailed };
              return copy;
            });
          }
        }).catch((err) => {
          setBusy(false);
          setMsgs((prev) => {
            const copy = prev.slice();
            const last = lastOf(copy);
            if (last && last.role === "assistant" && last.pending) copy[copy.length - 1] = { role: "assistant", text: "", pending: false, error: String(err && err.message || err) };
            return copy;
          });
        });
      };
      const clearChat = () => {
        setMsgs([]);
        setBusy(false);
        setChatId(null);
      };
      const copyMsg = (text, ev) => {
        const done = () => {
          if (ev && ev.currentTarget) {
            const old = ev.currentTarget.textContent;
            ev.currentTarget.textContent = "\u2713";
            setTimeout(() => {
              if (ev.currentTarget) ev.currentTarget.textContent = old;
            }, 900);
          }
        };
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
        } else {
          fallbackCopy(text, done);
        }
      };
      const fallbackCopy = (text, done) => {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          done();
        } catch (e) {
          done();
        }
      };
      const onInputKey = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          send();
        }
      };
      const onProviderChange = (e) => {
        const id = e.target.value;
        const preset = PRESETS.find((p) => p.id === id) || PRESETS[PRESETS.length - 1];
        setCfg(Object.assign({}, cfg, { provider: id, base: preset.base }));
      };
      const orbStyle = orbPos ? { left: orbPos.x + "px", top: orbPos.y + "px", right: "auto", bottom: "auto" } : { right: "22px", bottom: "22px" };
      const winStyle = winPos ? { left: winPos.x + "px", top: winPos.y + "px", right: "auto", bottom: "auto" } : { right: "22px", bottom: "22px" };
      const children = [];
      if (mode === "orb") {
        children.push(
          import_react.default.createElement(
            "div",
            {
              key: "orb",
              className: "dsh-elf-orb",
              style: orbStyle,
              onPointerDown: startOrbDrag,
              onClick: (e) => {
                const moved = lastDragMoved;
                lastDragMoved = false;
                if (!moved) {
                  setMode("chat");
                }
              },
              title: T.name
            },
            import_react.default.createElement(WhaleIcon, { key: "whale", size: 40, gid: "dsh-elf-grad-orb" })
          )
        );
      } else {
        const headChildren = [
          import_react.default.createElement(WhaleIcon, { key: "whale", size: 24, gid: "dsh-elf-grad-head" }),
          import_react.default.createElement("span", { key: "title", className: "dsh-elf-title" }, T.title),
          import_react.default.createElement("span", { key: "model", className: "dsh-elf-model", title: T.modelBadgeTitle }, effModel),
          import_react.default.createElement("span", { key: "sp", className: "dsh-elf-spacer" }),
          import_react.default.createElement("button", { key: "cfg", className: "dsh-elf-headbtn", title: T.cfgBtn, onClick: () => setCfgOpen(!cfgOpen) }, "\u2699"),
          import_react.default.createElement("button", { key: "min", className: "dsh-elf-headbtn", title: T.mini, onClick: () => setMode("orb") }, "\u2014"),
          import_react.default.createElement("button", { key: "clear", className: "dsh-elf-clear", title: T.clearTitle, onClick: clearChat, disabled: !msgs.length }, T.clear)
        ];
        const cfgChildren = [];
        if (cfg) {
          const presetOptions = PRESETS.map((p) => import_react.default.createElement("option", { key: p.id, value: p.id }, T[p.labelKey]));
          cfgChildren.push(
            import_react.default.createElement(
              "div",
              { key: "r0", className: "dsh-elf-configrow" },
              import_react.default.createElement("label", null, T.modelSource),
              import_react.default.createElement(
                "label",
                { className: "dsh-elf-check", key: "follow" },
                import_react.default.createElement("input", {
                  type: "checkbox",
                  checked: !!cfg.follow,
                  onChange: (e) => setCfg(Object.assign({}, cfg, { follow: e.target.checked }))
                }),
                T.follow
              )
            ),
            import_react.default.createElement(
              "div",
              { key: "r1", className: "dsh-elf-configrow" },
              import_react.default.createElement("label", { htmlFor: "dsh-elf-provider" }, T.provider),
              import_react.default.createElement("select", {
                id: "dsh-elf-provider",
                value: cfg.provider,
                disabled: cfg.follow,
                onChange: onProviderChange
              }, presetOptions)
            ),
            import_react.default.createElement(
              "div",
              { key: "r2", className: "dsh-elf-configrow" },
              import_react.default.createElement("label", { htmlFor: "dsh-elf-base" }, T.apiBase),
              import_react.default.createElement("input", {
                id: "dsh-elf-base",
                type: "text",
                placeholder: "https://api.deepseek.com/v1",
                value: cfg.base,
                disabled: cfg.follow,
                onChange: (e) => setCfg(Object.assign({}, cfg, { base: e.target.value }))
              })
            ),
            import_react.default.createElement(
              "div",
              { key: "r3", className: "dsh-elf-configrow" },
              import_react.default.createElement("label", { htmlFor: "dsh-elf-key" }, T.apiKey),
              import_react.default.createElement("input", {
                id: "dsh-elf-key",
                type: "password",
                placeholder: "sk-\u2026",
                value: cfg.apiKey,
                disabled: cfg.follow,
                onChange: (e) => setCfg(Object.assign({}, cfg, { apiKey: e.target.value }))
              })
            ),
            import_react.default.createElement(
              "div",
              { key: "r4", className: "dsh-elf-configrow" },
              import_react.default.createElement("label", { htmlFor: "dsh-elf-model" }, T.model),
              import_react.default.createElement("input", {
                id: "dsh-elf-model",
                type: "text",
                placeholder: T.modelPh,
                value: cfg.model,
                disabled: cfg.follow,
                onChange: (e) => setCfg(Object.assign({}, cfg, { model: e.target.value }))
              })
            ),
            import_react.default.createElement(
              "div",
              { key: "r5", className: "dsh-elf-configrow" },
              import_react.default.createElement("label", { htmlFor: "dsh-elf-effort" }, T.reasoning),
              import_react.default.createElement("input", {
                id: "dsh-elf-effort",
                type: "text",
                placeholder: T.effortPh,
                value: cfg.effort,
                disabled: cfg.follow,
                onChange: (e) => setCfg(Object.assign({}, cfg, { effort: e.target.value }))
              })
            ),
            import_react.default.createElement(
              "div",
              { key: "hint", className: "dsh-elf-hint" },
              T.cfgHint
            )
          );
        }
        const msgChildren = msgs.map((m, i) => {
          const cls = "dsh-elf-msg " + (m.role === "user" ? "user" : "assistant") + (m.error ? " error" : "");
          const typing = import_react.default.createElement(
            "span",
            { className: "dsh-elf-typing" },
            import_react.default.createElement("i", null),
            import_react.default.createElement("i", null),
            import_react.default.createElement("i", null)
          );
          const inner = m.pending ? m.text || typing : m.text || (m.error ? m.error : "");
          return import_react.default.createElement(
            "div",
            { key: "m" + i, className: cls },
            inner,
            !m.pending && m.text ? import_react.default.createElement("button", {
              className: "copy",
              onClick: (e) => copyMsg(m.text, e),
              title: T.copy
            }, "\u{1F4CB}") : null
          );
        });
        if (!msgs.length) {
          msgChildren.push(import_react.default.createElement("div", { key: "empty", className: "dsh-elf-msg assistant", style: { opacity: ".72" } }, T.empty));
        }
        children.push(
          import_react.default.createElement(
            "div",
            { key: "win", className: "dsh-elf-win", style: winStyle },
            import_react.default.createElement(
              "div",
              { key: "head", className: "dsh-elf-head", onPointerDown: startWinDrag },
              headChildren
            ),
            import_react.default.createElement("div", { key: "cfg", className: "dsh-elf-config" + (cfgOpen ? " open" : "") }, cfgChildren),
            import_react.default.createElement("div", { key: "msgs", className: "dsh-elf-msgs" }, msgChildren),
            import_react.default.createElement(
              "div",
              { key: "in", className: "dsh-elf-inputrow" },
              import_react.default.createElement("textarea", {
                className: "dsh-elf-input",
                rows: 1,
                placeholder: T.inputPh,
                value: input,
                onChange: (e) => setInput(e.target.value),
                onKeyDown: onInputKey
              }),
              import_react.default.createElement("button", { className: "dsh-elf-send", onClick: send, disabled: busy || !input.trim() || !cfg }, "\u27A4")
            )
          )
        );
      }
      return import_react.default.createElement("div", { className: "dsh-elf-root" }, children);
    }
    ctx.slots.inject("shell.overlay", () => ctx.slots.register(
      { name: "shell.overlay", id: "dsh-elf", order: 500, label: () => t ? t("name") : currentLang() === "zh" ? zh.name : en.name, locale: NS },
      () => import_react.default.createElement(ElfApp, null)
    ));
  }
};
var inject = plugin.inject;
var apply = plugin.apply;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NsaWVudC5qcyIsICIuLi9zcmMvbG9jYWxlcy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZHNoLWVsZiBcdTIwMTQgQ2xpZW50IGhhbGZcbi8vIFNsb3dseSBkcmlmdGluZyBEZWVwU2VlayB3aGFsZSBlbGYgcG93ZXJlZCBieSB0aGUgb2ZmaWNpYWwgZmF2aWNvbi5zdmcgd2hhbGVcbi8vIChodHRwczovL3d3dy5kZWVwc2Vlay5jb20vaGFybmVzcy9mYXZpY29uLnN2ZyksIHRyYW5zbHVjZW50IGJsdWUtcHVycGxlLWdyZWVuXG4vLyBncmFkaWVudCB0aWxlOyBjbGljayB0byBvcGVuIGEgZHJhZ2dhYmxlIGZsb2F0aW5nIGNoYXQ7IG1pbmltaXplIHJldHVybnMgdG9cbi8vIGVsZiBtb2RlLiBTdXBwb3J0cyBmb2xsb3dpbmcgdGhlIHNlc3Npb24gZGVmYXVsdCBtb2RlbCwgb3IgYSBjdXN0b21cbi8vIE9wZW5BSS1jb21wYXRpYmxlIGVuZHBvaW50IChiYXNlIFVSTCArIEFQSSBrZXkgKyBtb2RlbCksIHN0cmVhbWVkIGRpcmVjdGx5XG4vLyBmcm9tIHRoZSBicm93c2VyIGZvciB0cnVlIHRva2VuLWJ5LXRva2VuIHJlc3BvbnNlcy5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlbiwgemgsIE5TIH0gZnJvbSAnLi9sb2NhbGVzLmpzJztcblxuY29uc3QgQVBJX1BSRUZJWCA9ICcvZHNoLWVsZi9hcGknO1xuXG5hc3luYyBmdW5jdGlvbiBjYWxsSG9zdChtZXRob2QsIGFyZ3MpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfUFJFRklYfS8ke2VuY29kZVVSSUNvbXBvbmVudChtZXRob2QpfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhcmdzIHx8IHt9KSxcbiAgfSk7XG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gbnVsbCk7XG4gIGlmICghcmVzcG9uc2Uub2sgfHwgIXBheWxvYWQgfHwgIXBheWxvYWQub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKHBheWxvYWQgJiYgcGF5bG9hZC5lcnJvcikgfHwgemguaG9zdEZhaWwucmVwbGFjZSgnezB9JywgU3RyaW5nKHJlc3BvbnNlLnN0YXR1cykpKTtcbiAgfVxuICByZXR1cm4gcGF5bG9hZC52YWx1ZTtcbn1cblxuY29uc3QgcGx1Z2luID0ge1xuICBpbmplY3Q6IFsnc2xvdHMnLCAnbG9jYWxlJ10sXG4gIGFwcGx5KGN0eCkge1xuICAgIGNvbnN0IGxvY2FsZSA9IGN0eC5sb2NhbGU7XG4gICAgY29uc3QgdCA9IGxvY2FsZSA/IGxvY2FsZS5iaW5kKE5TKSA6IG51bGw7XG4gICAgaWYgKGxvY2FsZSkge1xuICAgICAgY3R4LmVmZmVjdCgoKSA9PiBsb2NhbGUucmVnaXN0ZXIoTlMsIHsgemgsIGVuIH0pLCAnZHNoLWVsZjogZGljdGlvbmFyaWVzJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGN1cnJlbnRMYW5nKCkge1xuICAgICAgY29uc3QgYWN0aXZlID0gbG9jYWxlID8gU3RyaW5nKGxvY2FsZS5nZXRTbmFwc2hvdCgpLmFjdGl2ZSkgOiBTdHJpbmcoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlIHx8ICd6aCcpO1xuICAgICAgcmV0dXJuIGFjdGl2ZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ3poJykgPyAnemgnIDogJ2VuJztcbiAgICB9XG5cbiAgICAvLyBOT1RFOiB0aGlzIGlzIGEgcHJvZmlsZS1idW5kbGUgY2xpZW50IHBsdWdpbiwgc28gY29yZGlzJ3MgYHRpbWVyYCBzZXJ2aWNlIGlzXG4gICAgLy8gTk9UIGF2YWlsYWJsZSBvbiB0aGUgYnVuZGxlIGN0eCAodGhhdCBzZXJ2aWNlIGlzIG9ubHkgaW5zdGFsbGVkIGZvciBkeW5hbWljXG4gICAgLy8gY29yZGlzLXJ1bm5lciBwYWNrYWdlcykuIFVzZSBwbGFpbiBicm93c2VyIHRpbWVycyBpbnN0ZWFkIFx1MjAxNCB0aGUgc2FtZSBwYXR0ZXJuXG4gICAgLy8gZHNobWFya2V0IGFuZCBvdGhlciBidW5kbGUgcGx1Z2lucyB1c2UgXHUyMDE0IGFuZCBkaXNwb3NlIHRoZW0gZnJvbSBSZWFjdCBlZmZlY3RcbiAgICAvLyBjbGVhbnVwLlxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGluc2VydChjc3MpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnc3R5bGVbZGF0YS1wbHVnaW4tY3NzPVwiZHNoLWVsZlwiXSc7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICB0YWcuZGF0YXNldC5wbHVnaW4gPSAnZHNoLWVsZic7XG4gICAgICAgIHRhZy5kYXRhc2V0LnBsdWdpbkNzcyA9ICdkc2gtZWxmJztcbiAgICAgICAgdGFnLnRleHRDb250ZW50ID0gY3NzO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgICAgIGN0eC5lZmZlY3QoKCkgPT4gKCkgPT4gdGFnLnJlbW92ZSgpLCAnZHNoLWVsZjogc3R5bGVzJyk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyAtLS0tIE9mZmljaWFsIGZhdmljb24gd2hhbGUgcGF0aCAodmlld0JveCAwIDAgNTAgNTApLCBzcGxpdCBpbnRvIHNob3J0XG4gICAgLy8gY2h1bmtzIHNvIHRoZSBkZWZpbml0aW9uIHN0YXlzIHJvYnVzdDsgam9pbmVkIGJlbG93IGludG8gV0hBTEVfRC4gLS0tLVxuICAgIGNvbnN0IFdIQUxFX1NFR1MgPSBbXG4gICAgICAnTTQ4LjgzNTQgMTAuMDQ3OUM0OC4zMjMyIDkuNzkxOTkgNDguMTAyNSAxMC4yNzk4IDQ3LjgwMzIgMTAuNTI3OEM0Ny43MDA3IDEwLjYwNzkgNDcuNjE0MyAxMC43MTE5IDQ3LjUyNzMgMTAuODA3NkM0Ni43NzkzIDExLjYyNCA0NS45MDQ4IDEyLjE1OTcgNDQuNzYyMiAxMi4wOTU3QzQzLjA5MjMgMTIgNDEuNjY2IDEyLjUzNTYgNDAuNDA1OCAxMy44Mzk4QzQwLjEzNzcgMTIuMjMxOSAzOS4yNDc2IDExLjI3MiAzNy44OTI2IDEwLjY1NThDMzcuMTgzNiAxMC4zMzU5IDM2LjQ2NjggMTAuMDE1NiAzNS45NzAyIDkuMzE5ODJDMzUuNjIzNSA4LjgyMzczIDM1LjUyOTMgOC4yNzE5NyAzNS4zNTYgNy43Mjc1NEMzNS4yNDU2IDcuMzk5OSAzNS4xMzUzIDcuMDYzOTYgMzQuNzY1MSA3LjAwNzgxQzM0LjM2MzMgNi45NDM4NSAzNC4yMDU2IDcuMjg3NiAzNC4wNDc5IDcuNTc1NjhDMzMuNDE4IDguNzUxOTUgMzMuMTczMyAxMC4wNDc5IDMzLjE5NzMgMTEuMzU5OUMzMy4yNTI0IDE0LjMxMiAnLFxuICAgICAgJzM0LjQ3MzYgMTYuNjY0MSAzNi44OTk5IDE4LjMzNTlDMzcuMTc1OCAxOC41Mjc4IDM3LjI0NjYgMTguNzE5NyAzNy4xNTk3IDE5QzM2Ljk5NDYgMTkuNTc1NyAzNi43OTc0IDIwLjEzNTcgMzYuNjI0IDIwLjcxMTlDMzYuNTEzNyAyMS4wODAxIDM2LjM0ODYgMjEuMTU5NyAzNS45NjI0IDIxQzM0LjYzMDkgMjAuNDMyMSAzMy40ODEgMTkuNTkxOCAzMi40NjQ0IDE4LjU3NTdDMzAuNzM5MyAxNi44NzIxIDI5LjE3OTIgMTQuOTkxNyAyNy4yMzM0IDEzLjUyQzI2Ljc3NjQgMTMuMTc1OCAyNi4zMTkzIDEyLjg1NiAyNS44NDY3IDEyLjU1MThDMjMuODYxOCAxMC41ODQgMjYuMTA2OSA4Ljk2Nzc3IDI2LjYyNyA4Ljc3NTg4QzI3LjE3MDQgOC41NzU2OCAyNi44MTU5IDcuODg3NyAyNS4wNTkxIDcuODk2QzIzLjMwMjIgNy45MDM4MSAyMS42OTUzIDguNTAzOTEgMTkuNjQ3IDkuMzAzNzFDMTkuMzQ3NyA5LjQyMzgzIDE5LjAzMjIgOS41MTE3MiAxOC43MDk1IDkuNTgzOThDMTYuODUwMSA5JyxcbiAgICAgICcuMjIzNjMgMTQuOTE5OSA5LjE0MzU1IDEyLjkwMzMgOS4zNzU5OEM5LjEwNTk2IDkuODA3NjIgNi4wNzI3NSAxMS42Mzk2IDMuODQzMjYgMTQuNzY4MUMxLjE2NDU1IDE4LjUyNzggMC41MzQxOCAyMi43OTk4IDEuMzA2NjQgMjcuMjU1OUMyLjExNzY4IDMxLjk1MjEgNC40NjU4MiAzNS44Mzk4IDguMDczNzMgMzguODc5OUMxMS44MTU5IDQyLjAzMjIgMTYuMTI1NSA0My41NzYyIDIxLjA0MSA0My4yODAzQzI0LjAyNjkgNDMuMTA0IDI3LjM1MTYgNDIuNjk2MyAzMS4xMDE2IDM5LjQ1NjFDMzIuMDQ2OSAzOS45MzYgMzMuMDM5NiA0MC4xMjc5IDM0LjY4NiA0MC4yNzJDMzUuOTU0NiA0MC4zOTIxIDM3LjE3NTggNDAuMjA4IDM4LjEyMTEgNDAuMDA3OEMzOS42MDIxIDM5LjY4OCAzOS40OTk1IDM4LjI4ODEgMzguOTYzOSAzOC4wMzIyQzM0LjYyMyAzNS45Njc4IDM1LjU3NjIgMzYuODA4MSAzNC43MSAzNi4xMjc5QzM2LjkxNTUgMzMuNDYzOSA0MC4yNDAyIDMwLjY5NTggNDEuNTQgMicsXG4gICAgICAnMS43MjhDNDEuNjQyNiAyMS4wMTYxIDQxLjU1NTcgMjAuNTY3OSA0MS41NCAxOS45OTE3QzQxLjUzMjIgMTkuNjM5NiA0MS42MTA4IDE5LjUwMzkgNDIuMDA0OSAxOS40NjM5QzQzLjA5MjMgMTkuMzM1OSA0NC4xNDc5IDE5LjAzMTcgNDUuMTE2NyAxOC40ODc4QzQ3LjkyOTIgMTYuOTE5OSA0OS4wNjQgMTQuMzQzOCA0OS4zMzE1IDExLjI1NTlDNDkuMzcxMSAxMC43ODM3IDQ5LjMyMzcgMTAuMjk1OSA0OC44MzU0IDEwLjA0NzlaTTI0LjMyNjIgMzcuODM5OEMyMC4xMTk2IDM0LjQ2MzkgMTguMDc5MSAzMy4zNTIxIDE3LjIzNTggMzMuMzk5OUMxNi40NDgyIDMzLjQ0ODIgMTYuNTg5OCAzNC4zNjgyIDE2Ljc2MzIgMzQuOTY3OEMxNi45NDQzIDM1LjU2MDEgMTcuMTgxMiAzNS45NjgzIDE3LjUxMTcgMzYuNDg3OEMxNy43NDAyIDM2LjgzMiAxNy44OTc5IDM3LjM0NDIgMTcuMjgzMiAzNy43MjhDMTUuOTI4MiAzOC41ODQgMTMuNTcyOCAzNy40Mzk5IDEzLjQ2MjQgMzcuMzgzOEMxMC4nLFxuICAgICAgJzcyMDcgMzUuNzM1OCA4LjQyODIyIDMzLjU2MDEgNi44MTM0OCAzMC41ODRDNS4yNTM0MiAyNy43MTk3IDQuMzQ3NjYgMjQuNjQ3OSA0LjE5Nzc1IDIxLjM2NzdDNC4xNTgyIDIwLjU3NTcgNC4zODY3MiAyMC4yOTU5IDUuMTU4NjkgMjAuMTUxOUM2LjE3NTI5IDE5Ljk2IDcuMjIzMTQgMTkuOTE5OSA4LjIzOTI2IDIwLjA3MThDMTIuNTMyNyAyMC43MTE5IDE2LjE4ODUgMjIuNjcxOSAxOS4yNTI5IDI1Ljc3NTlDMjEuMDAyIDI3LjU0MzkgMjIuMzI1MiAyOS42NTU4IDIzLjY4ODUgMzEuNzIwMkMyNS4xMzc3IDMzLjkxMjEgMjYuNjk3OCAzNiAyOC42ODMxIDM3LjcxMTlDMjkuMzg0MyAzOC4zMTIgMjkuOTQzNCAzOC43NjgxIDMwLjQ3OSAzOS4xMDRDMjguODY0MyAzOS4yODgxIDI2LjE2OTkgMzkuMzI4MSAyNC4zMjYyIDM3LjgzOThaTTI2LjM0MzMgMjQuNjAwMUMyNi4zNDMzIDI0LjI0OCAyNi42MTkxIDIzLjk2NzggMjYuOTY1OCAyMy45Njc4QzI3LjA0NDQgMjMuOTY3OCAyNy4xJyxcbiAgICAgICcxNTIgMjMuOTgzOSAyNy4xNzgyIDI0LjAwNzhDMjcuMjY1MSAyNC4wNCAyNy4zNDM4IDI0LjA4NzkgMjcuNDA2NyAyNC4xNjAyQzI3LjUxNzEgMjQuMjcyIDI3LjU4MDEgMjQuNDMyMSAyNy41ODAxIDI0LjYwMDFDMjcuNTgwMSAyNC45NTIxIDI3LjMwNDIgMjUuMjMxOSAyNi45NTc1IDI1LjIzMTlDMjYuNjEwOCAyNS4yMzE5IDI2LjM0MzMgMjQuOTUyMSAyNi4zNDMzIDI0LjYwMDFaTTMyLjYwNjQgMjcuODc5OUMzMi4yMDQ2IDI4LjA0NzkgMzEuODAyNyAyOC4xOTE5IDMxLjQxNjUgMjguMjA4QzMwLjgxNzkgMjguMjM5NyAzMC4xNjQxIDI3Ljk5MjIgMjkuODA5NiAyNy42ODhDMjkuMjU4MyAyNy4yMTU4IDI4Ljg2NDMgMjYuOTUyMSAyOC42OTg3IDI2LjEyNzlDMjguNjI3OSAyNS43NzU5IDI4LjY2NzUgMjUuMjMxOSAyOC43MzA1IDI0LjkxOTlDMjguODcyMSAyNC4yNDggMjguNzE0NCAyMy44MTU5IDI4LjI0OTUgMjMuNDIzOEMyNy44NzE2IDIzLjEwNCAyNy4zOTExIDIzLjAxNicsXG4gICAgICAnMSAyNi44NjMzIDIzLjAxNjFDMjYuNjY2IDIzLjAxNjEgMjYuNDg0OSAyMi45Mjc3IDI2LjM1MTEgMjIuODU2QzI2LjEzMDQgMjIuNzQ0MSAyNS45NDkyIDIyLjQ2MzkgMjYuMTIyNiAyMi4xMjAxQzI2LjE3NzcgMjIuMDA3OCAyNi40NDU4IDIxLjczNTggMjYuNTA4OCAyMS42ODhDMjcuMjI1NiAyMS4yNzIgMjguMDUyNyAyMS40MDc3IDI4LjgxNjkgMjEuNzE5N0MyOS41MjU5IDIyLjAxNjEgMzAuMDYxNSAyMi41NjAxIDMwLjgzNCAyMy4zMjgxQzMxLjYyMTYgMjQuMjU1OSAzMS43NjMyIDI0LjUxMTcgMzIuMjEyNCAyNS4yMDhDMzIuNTY2OSAyNS43NTIgMzIuODkwMSAyNi4zMTIgMzMuMTEwNCAyNi45NTIxQzMzLjI0NDYgMjcuMzUyMSAzMy4wNzEzIDI3LjY4MDIgMzIuNjA2NCAyNy44Nzk5WicsXG4gICAgXTtcbiAgICBjb25zdCBXSEFMRV9EID0gV0hBTEVfU0VHUy5qb2luKCcnKTtcbiAgICBjb25zdCBXSEFMRV9WQiA9ICcwIDAgNTAgNTAnO1xuXG4gICAgLy8gLS0tLSBQcmVzZXQgcHJvdmlkZXJzIChpZCwgbGFiZWwsIGRlZmF1bHQgT3BlbkFJLWNvbXBhdGlibGUgYmFzZSBVUkwpIC0tLS1cbiAgICBjb25zdCBQUkVTRVRTID0gW1xuICAgICAgeyBpZDogJ2RlZXBzZWVrJywgbGFiZWxLZXk6ICdwcmVzZXREZWVwc2VlaycsIGJhc2U6ICdodHRwczovL2FwaS5kZWVwc2Vlay5jb20vdjEnIH0sXG4gICAgICB7IGlkOiAnb3BlbmFpJywgbGFiZWxLZXk6ICdwcmVzZXRPcGVuYWknLCBiYXNlOiAnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MScgfSxcbiAgICAgIHsgaWQ6ICdtb29uc2hvdCcsIGxhYmVsS2V5OiAncHJlc2V0TW9vbnNob3QnLCBiYXNlOiAnaHR0cHM6Ly9hcGkubW9vbnNob3QuY24vdjEnIH0sXG4gICAgICB7IGlkOiAnemhpcHUnLCBsYWJlbEtleTogJ3ByZXNldFpoaXB1JywgYmFzZTogJ2h0dHBzOi8vb3Blbi5iaWdtb2RlbC5jbi9hcGkvcGFhcy92NCcgfSxcbiAgICAgIHsgaWQ6ICdxd2VuJywgbGFiZWxLZXk6ICdwcmVzZXRRd2VuJywgYmFzZTogJ2h0dHBzOi8vZGFzaHNjb3BlLmFsaXl1bmNzLmNvbS9jb21wYXRpYmxlLW1vZGUvdjEnIH0sXG4gICAgICB7IGlkOiAnY3VzdG9tJywgbGFiZWxLZXk6ICdwcmVzZXRDdXN0b20nLCBiYXNlOiAnJyB9LFxuICAgIF07XG5cbiAgICAvLyAtLS0tIFN0eWxlcyAtLS0tXG4gICAgc3R5bGVzLmluc2VydChgXG4uZHNoLWVsZi1yb290IHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IDIxNDc0ODMwMDA7IGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBzYW5zLXNlcmlmOyB9XG4uZHNoLWVsZi1yb290ICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4uZHNoLWVsZi1vcmIgeyBwb3NpdGlvbjogZml4ZWQ7IHBvaW50ZXItZXZlbnRzOiBhdXRvOyBjdXJzb3I6IHBvaW50ZXI7IHVzZXItc2VsZWN0OiBub25lOyAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYW5pbWF0aW9uOiBkc2gtZWxmLWJvYiA0LjJzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlOyB0b3VjaC1hY3Rpb246IG5vbmU7IH1cbi5kc2gtZWxmLW9yYjpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IH1cbi5kc2gtZWxmLW9yYiBzdmcgeyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDVweCByZ2JhKDc3LDEwNywyNTQsLjM1KSk7IH1cbkBrZXlmcmFtZXMgZHNoLWVsZi1ib2IgeyAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMS41ZGVnKTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgcm90YXRlKDEuNWRlZyk7IH0gfVxuQGtleWZyYW1lcyBkc2gtZWxmLWluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSBzY2FsZSguOTYpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9IH1cblxuLmRzaC1lbGYtd2luIHsgcG9zaXRpb246IGZpeGVkOyBwb2ludGVyLWV2ZW50czogYXV0bzsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgd2lkdGg6IDQwMHB4OyBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyNHB4KTsgaGVpZ2h0OiA1NDBweDsgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0cHgpOyBib3JkZXItcmFkaXVzOiAxNnB4OyBvdmVyZmxvdzogaGlkZGVuOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC45Mik7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMThweCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM5LDkyLDI0NiwuMjgpOyBib3gtc2hhZG93OiAwIDE4cHggNTBweCByZ2JhKDMwLDQxLDk5LC4yOCksIDAgMnB4IDEwcHggcmdiYSgzMCw0MSw5OSwuMTQpOyBhbmltYXRpb246IGRzaC1lbGYtaW4gLjE4cyBlYXNlLW91dDsgei1pbmRleDogMTsgfVxuLmRzaC1lbGYtaGVhZCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBwYWRkaW5nOiAxMHB4IDEycHg7IGN1cnNvcjogbW92ZTsgdXNlci1zZWxlY3Q6IG5vbmU7IC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzcsMTA3LDI1NCwuMTYpLCByZ2JhKDEzOSw5MiwyNDYsLjEzKSA1NSUsIHJnYmEoNTIsMjExLDE1MywuMTYpKTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTM5LDkyLDI0NiwuMTgpOyB0b3VjaC1hY3Rpb246IG5vbmU7IH1cbi5kc2gtZWxmLWhlYWQgc3ZnIHsgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgZmxleDogbm9uZTsgfVxuLmRzaC1lbGYtdGl0bGUgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWUyOTNiOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uZHNoLWVsZi1tb2RlbCB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwuMTIpOyBwYWRkaW5nOiAycHggOHB4OyBib3JkZXItcmFkaXVzOiA5OTlweDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG1heC13aWR0aDogMTUwcHg7IH1cbi5kc2gtZWxmLWhlYWRidG4geyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjNDc1NTY5OyB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEzcHg7IHBhZGRpbmc6IDA7IGZsZXg6IG5vbmU7IH1cbi5kc2gtZWxmLWhlYWRidG46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDEzOSw5MiwyNDYsLjE2KTsgfVxuLmRzaC1lbGYtaGVhZGJ0bjpkaXNhYmxlZCB7IG9wYWNpdHk6IC40OyBjdXJzb3I6IGRlZmF1bHQ7IH1cbi5kc2gtZWxmLWNsZWFyIHsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsLjM1KTsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjA2KTsgY29sb3I6ICNkYzI2MjY7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxMXB4OyBsaW5lLWhlaWdodDogMTsgcGFkZGluZzogNHB4IDlweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZsZXg6IG5vbmU7IH1cbi5kc2gtZWxmLWNsZWFyOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjE0KTsgfVxuLmRzaC1lbGYtY2xlYXI6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDsgY3Vyc29yOiBkZWZhdWx0OyB9XG4uZHNoLWVsZi1zcGFjZXIgeyBmbGV4OiAxOyB9XG5cbi5kc2gtZWxmLWNvbmZpZyB7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTM5LDkyLDI0NiwuMTYpOyBiYWNrZ3JvdW5kOiByZ2JhKDE0OCwxNjMsMTg0LC4wNyk7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMzMzQxNTU7IGRpc3BsYXk6IG5vbmU7IG1heC1oZWlnaHQ6IDI1MHB4OyBvdmVyZmxvdy15OiBhdXRvOyB9XG4uZHNoLWVsZi1jb25maWcub3BlbiB7IGRpc3BsYXk6IGJsb2NrOyB9XG4uZHNoLWVsZi1jb25maWdyb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgbWFyZ2luOiA2cHggMDsgfVxuLmRzaC1lbGYtY29uZmlncm93IGxhYmVsIHsgd2lkdGg6IDg0cHg7IGZsZXg6IG5vbmU7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZHNoLWVsZi1jb25maWdyb3cgaW5wdXRbdHlwZT0ndGV4dCddLCAuZHNoLWVsZi1jb25maWdyb3cgaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSwgLmRzaC1lbGYtY29uZmlncm93IHNlbGVjdCB7IGZsZXg6IDE7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM5LDkyLDI0NiwuMyk7IGJvcmRlci1yYWRpdXM6IDZweDsgcGFkZGluZzogNHB4IDhweDsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7IGNvbG9yOiAjMWUyOTNiOyBvdXRsaW5lOiBub25lOyBtaW4td2lkdGg6IDA7IH1cbi5kc2gtZWxmLWNvbmZpZ3JvdyBpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMsIC5kc2gtZWxmLWNvbmZpZ3JvdyBpbnB1dFt0eXBlPSdwYXNzd29yZCddOmZvY3VzLCAuZHNoLWVsZi1jb25maWdyb3cgc2VsZWN0OmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjOGI1Y2Y2OyB9XG4uZHNoLWVsZi1jaGVjayB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbi5kc2gtZWxmLWNvbmZpZ3JvdyBsYWJlbC5kc2gtZWxmLWNoZWNrIHsgd2lkdGg6IGF1dG87IGZsZXg6IG5vbmU7IH1cbi5kc2gtZWxmLWNvbmZpZ3JvdyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHsgZmxleDogbm9uZTsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgbWluLXdpZHRoOiAxNHB4OyBtaW4taGVpZ2h0OiAxNHB4OyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGFjY2VudC1jb2xvcjogIzhiNWNmNjsgY3Vyc29yOiBwb2ludGVyOyB9XG4uZHNoLWVsZi1oaW50IHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiA0cHggMCAycHg7IH1cblxuLmRzaC1lbGYtbXNncyB7IGZsZXg6IDE7IG92ZXJmbG93LXk6IGF1dG87IHBhZGRpbmc6IDEycHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5kc2gtZWxmLW1zZyB7IG1heC13aWR0aDogODYlOyBwYWRkaW5nOiA4cHggMTFweDsgYm9yZGVyLXJhZGl1czogMTJweDsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMS41NTsgd2hpdGUtc3BhY2U6IHByZS13cmFwOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5kc2gtZWxmLW1zZy51c2VyIHsgYWxpZ24tc2VsZjogZmxleC1lbmQ7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZDZiZmUsICM4YjVjZjYpOyBjb2xvcjogI2ZmZjsgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxuLmRzaC1lbGYtbXNnLmFzc2lzdGFudCB7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwuMSk7IGNvbG9yOiAjMWUyOTNiOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOSw5MiwyNDYsLjE4KTsgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4OyB9XG4uZHNoLWVsZi1tc2cuZXJyb3IgeyBib3JkZXItY29sb3I6IHJnYmEoMjM5LDY4LDY4LC41KTsgY29sb3I6ICNiOTFjMWM7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LC4wOCk7IH1cbi5kc2gtZWxmLW1zZyAuY29weSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA0cHg7IHJpZ2h0OiA2cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzk0YTNiODsgb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTJzOyBwYWRkaW5nOiAycHggNHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbi5kc2gtZWxmLW1zZzpob3ZlciAuY29weSB7IG9wYWNpdHk6IDE7IH1cbi5kc2gtZWxmLW1zZyAuY29weTpob3ZlciB7IGNvbG9yOiAjOGI1Y2Y2OyBiYWNrZ3JvdW5kOiByZ2JhKDEzOSw5MiwyNDYsLjEpOyB9XG4uZHNoLWVsZi1tc2cudXNlciAuY29weSB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7IH1cbi5kc2gtZWxmLXR5cGluZyB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBnYXA6IDRweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiAxOHB4OyB9XG4uZHNoLWVsZi10eXBpbmcgaSB7IHdpZHRoOiA1cHg7IGhlaWdodDogNXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICM4YjVjZjY7IGFuaW1hdGlvbjogZHNoLWVsZi1ib3VuY2UgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cbi5kc2gtZWxmLXR5cGluZyBpOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLjE1czsgfVxuLmRzaC1lbGYtdHlwaW5nIGk6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAuM3M7IH1cbkBrZXlmcmFtZXMgZHNoLWVsZi1ib3VuY2UgeyAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAuNTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IG9wYWNpdHk6IDE7IH0gfVxuXG4uZHNoLWVsZi1pbnB1dHJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgZ2FwOiA4cHg7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTM5LDkyLDI0NiwuMTYpOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC42KTsgfVxuLmRzaC1lbGYtaW5wdXQgeyBmbGV4OiAxOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOSw5MiwyNDYsLjI4KTsgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogOHB4IDEwcHg7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDEuNDsgcmVzaXplOiBub25lOyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC45KTsgY29sb3I6ICMxZTI5M2I7IG1heC1oZWlnaHQ6IDk2cHg7IGZvbnQtZmFtaWx5OiBpbmhlcml0OyB9XG4uZHNoLWVsZi1pbnB1dDpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzhiNWNmNjsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTM5LDkyLDI0NiwuMTUpOyB9XG4uZHNoLWVsZi1zZW5kIHsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZDZiZmUsICM4YjVjZjYpOyBjb2xvcjogI2ZmZjsgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgYm9yZGVyLXJhZGl1czogMTBweDsgZm9udC1zaXplOiAxNXB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleDogbm9uZTsgfVxuLmRzaC1lbGYtc2VuZDpob3ZlciB7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjA4KTsgfVxuLmRzaC1lbGYtc2VuZDpkaXNhYmxlZCB7IG9wYWNpdHk6IC41OyBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAuZHNoLWVsZi13aW4geyBiYWNrZ3JvdW5kOiByZ2JhKDE1LDIzLDQyLC45KTsgYm9yZGVyLWNvbG9yOiByZ2JhKDEzOSw5MiwyNDYsLjQpOyB9XG4gIC5kc2gtZWxmLXRpdGxlIHsgY29sb3I6ICNlMmU4ZjA7IH1cbiAgLmRzaC1lbGYtbXNnLmFzc2lzdGFudCB7IGNvbG9yOiAjZTJlOGYwOyBiYWNrZ3JvdW5kOiByZ2JhKDEzOSw5MiwyNDYsLjE4KTsgYm9yZGVyLWNvbG9yOiByZ2JhKDEzOSw5MiwyNDYsLjMpOyB9XG4gIC5kc2gtZWxmLW1zZy5lcnJvciB7IGNvbG9yOiAjZmNhNWE1OyB9XG4gIC5kc2gtZWxmLW1vZGVsIHsgY29sb3I6ICNjYmQ1ZTE7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwuMik7IH1cbiAgLmRzaC1lbGYtaGVhZGJ0biB7IGNvbG9yOiAjY2JkNWUxOyB9XG4gIC5kc2gtZWxmLWNvbmZpZyB7IGNvbG9yOiAjY2JkNWUxOyBiYWNrZ3JvdW5kOiByZ2JhKDE0OCwxNjMsMTg0LC4wOCk7IH1cbiAgLmRzaC1lbGYtY29uZmlncm93IGxhYmVsIHsgY29sb3I6ICNjYmQ1ZTE7IH1cbiAgLmRzaC1lbGYtY29uZmlncm93IGlucHV0W3R5cGU9J3RleHQnXSwgLmRzaC1lbGYtY29uZmlncm93IGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sIC5kc2gtZWxmLWNvbmZpZ3JvdyBzZWxlY3QgeyBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LC44KTsgY29sb3I6ICNlMmU4ZjA7IGJvcmRlci1jb2xvcjogcmdiYSgxMzksOTIsMjQ2LC40KTsgfVxuICAuZHNoLWVsZi1oaW50IHsgY29sb3I6ICM5NGEzYjg7IH1cbiAgLmRzaC1lbGYtaW5wdXRyb3cgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1LDIzLDQyLC41NSk7IH1cbiAgLmRzaC1lbGYtaW5wdXQgeyBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LC44NSk7IGNvbG9yOiAjZTJlOGYwOyBib3JkZXItY29sb3I6IHJnYmEoMTM5LDkyLDI0NiwuNCk7IH1cbn1cbmApO1xuXG4gICAgLy8gLS0tLSBXaGFsZSBpY29uIC0tLS1cbiAgICAvLyB3aGl0ZTogd2hpdGUgd2hhbGUgb24gdGhlIHRyYW5zbHVjZW50IGdyYWRpZW50IHRpbGUgKHBob3RvcyBvZiB0aGUgb3JiKS5cbiAgICAvLyBkZWZhdWx0OiBncmFkaWVudCB3aGFsZSAodXNlZCBpbiB0aGUgY2hhdCB3aW5kb3cgaGVhZCkuXG4gICAgZnVuY3Rpb24gV2hhbGVJY29uKHByb3BzKSB7XG4gICAgICBjb25zdCB3aGl0ZSA9IHByb3BzLndoaXRlO1xuICAgICAgY29uc3QgZ2lkID0gcHJvcHMuZ2lkIHx8ICdkc2gtZWxmLWdyYWQnO1xuICAgICAgY29uc3QgZGVmcyA9IFtdO1xuICAgICAgaWYgKCF3aGl0ZSkge1xuICAgICAgICBkZWZzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudCgnZGVmcycsIHsga2V5OiAnZGVmcycgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaW5lYXJHcmFkaWVudCcsIHsgaWQ6IGdpZCwgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcxJywgeTI6ICcxJyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3RvcCcsIHsgb2Zmc2V0OiAnMCUnLCBzdG9wQ29sb3I6ICcjNEQ2QkZFJyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N0b3AnLCB7IG9mZnNldDogJzUwJScsIHN0b3BDb2xvcjogJyM4QjVDRjYnIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3RvcCcsIHsgb2Zmc2V0OiAnMTAwJScsIHN0b3BDb2xvcjogJyMzNEQzOTknIH0pLFxuICAgICAgICAgICksXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xzID0gJ2RzaC1lbGYtd2hhbGUnICsgKHByb3BzLmNscyA/ICcgJyArIHByb3BzLmNscyA6ICcnKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICAgIHZpZXdCb3g6IFdIQUxFX1ZCLFxuICAgICAgICB3aWR0aDogcHJvcHMuc2l6ZSB8fCA0NixcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5zaXplIHx8IDQ2LFxuICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gICAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xzLFxuICAgICAgfSwgZGVmcyxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgICBkOiBXSEFMRV9ELFxuICAgICAgICAgIGZpbGw6IHdoaXRlID8gJyNmZmZmZmYnIDogJ3VybCgjJyArIGdpZCArICcpJyxcbiAgICAgICAgICBmaWxsT3BhY2l0eTogd2hpdGUgPyAocHJvcHMub3BhY2l0eSAhPSBudWxsID8gcHJvcHMub3BhY2l0eSA6IDAuOTcpIDogMSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIC0tLS0gU21hbGwgaGVscGVycyAtLS0tXG4gICAgZnVuY3Rpb24gbGFzdE9mKGFycikgeyByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTsgfVxuICAgIGZ1bmN0aW9uIGNsYW1wKHYsIGxvLCBoaSkgeyByZXR1cm4gdiA8IGxvID8gbG8gOiB2ID4gaGkgPyBoaSA6IHY7IH1cblxuICAgIC8vIE1vZHVsZS1sZXZlbCBmbGFnOiB3aGV0aGVyIHRoZSBsYXN0IHBvaW50ZXIgZHJhZyBhY3R1YWxseSBtb3ZlZC5cbiAgICBsZXQgbGFzdERyYWdNb3ZlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gRWxmQXBwKCkge1xuICAgICAgY29uc3QgbGFuZyA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAoY2IpID0+IChsb2NhbGUgPyBsb2NhbGUuc3Vic2NyaWJlKGNiKSA6ICgpID0+IHt9KSxcbiAgICAgICAgKCkgPT4gY3VycmVudExhbmcoKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBUID0gbGFuZyA9PT0gJ3poJyA/IHpoIDogZW47XG4gICAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZSgnb3JiJyk7IC8vICdvcmInIHwgJ2NoYXQnXG4gICAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgICAgIGNvbnN0IFtidXN5LCBzZXRCdXN5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICAgIGNvbnN0IFtjZmdPcGVuLCBzZXRDZmdPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICAgIC8vIGNmZzogeyBmb2xsb3csIHByb3ZpZGVyLCBiYXNlLCBhcGlLZXksIG1vZGVsLCBlZmZvcnQgfVxuICAgICAgY29uc3QgW2NmZywgc2V0Q2ZnXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICAgICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gICAgICBjb25zdCBbb3JiUG9zLCBzZXRPcmJQb3NdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7IC8vIGFuY2hvciB7eCx5fVxuICAgICAgY29uc3QgW3dpblBvcywgc2V0V2luUG9zXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICAgICAgY29uc3QgW2RyYWcsIHNldERyYWddID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gICAgICBjb25zdCBbY2hhdElkLCBzZXRDaGF0SWRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgICAgIC8vIC0tLS0gcGVyc2lzdGVuY2UgLS0tLVxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZHNoLWVsZjpjaGF0Jyk7XG4gICAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzYXZlZCkpIHNldE1zZ3Moc2F2ZWQuZmlsdGVyKChtKSA9PiAhbS5wZW5kaW5nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RzaC1lbGY6Y2ZnJyk7XG4gICAgICAgICAgY29uc3QgZGVmID0geyBmb2xsb3c6IHRydWUsIHByb3ZpZGVyOiAnZGVlcHNlZWsnLCBiYXNlOiBQUkVTRVRTWzBdLmJhc2UsIGFwaUtleTogJycsIG1vZGVsOiAnJywgZWZmb3J0OiAnJyB9O1xuICAgICAgICAgIGlmIChyYXcpIHsgY29uc3Qgc2F2ZWQgPSBKU09OLnBhcnNlKHJhdyk7IHNldENmZyhPYmplY3QuYXNzaWduKGRlZiwgc2F2ZWQpKTsgfVxuICAgICAgICAgIGVsc2Ugc2V0Q2ZnKGRlZik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgc2V0Q2ZnKHsgZm9sbG93OiB0cnVlLCBwcm92aWRlcjogJ2RlZXBzZWVrJywgYmFzZTogUFJFU0VUU1swXS5iYXNlLCBhcGlLZXk6ICcnLCBtb2RlbDogJycsIGVmZm9ydDogJycgfSk7IH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZHNoLWVsZjpvcmInKTtcbiAgICAgICAgICBpZiAocmF3KSBzZXRPcmJQb3MoSlNPTi5wYXJzZShyYXcpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkc2gtZWxmOndpbicpO1xuICAgICAgICAgIGlmIChyYXcpIHNldFdpblBvcyhKU09OLnBhcnNlKHJhdykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RzaC1lbGY6bW9kZScpO1xuICAgICAgICAgIGlmIChyYXcpIHNldE1vZGUocmF3KTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICBjYWxsSG9zdCgnZWxmLnNlc3Npb25Nb2RlbCcsIHt9KS50aGVuKChyKSA9PiB7IGlmIChyICYmIHIuYXZhaWxhYmxlKSBzZXRTZXNzaW9uKHIpOyB9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7IHRyeSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkc2gtZWxmOmNoYXQnLCBKU09OLnN0cmluZ2lmeShtc2dzKSk7IH0gY2F0Y2ggKGUpIHt9IH0sIFttc2dzXSk7XG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBpZiAoY2ZnKSB7IHRyeSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkc2gtZWxmOmNmZycsIEpTT04uc3RyaW5naWZ5KGNmZykpOyB9IGNhdGNoIChlKSB7fSB9IH0sIFtjZmddKTtcbiAgICAgIC8vIE9yYi93aW4gcG9zaXRpb25zIGFyZSBwZXJzaXN0ZWQgb25seSB3aGVuIGEgbWFudWFsIGRyYWcgZW5kcyAoc2VlIG9uVXApLFxuICAgICAgLy8gc28gdGhlIGRyaWZ0IGFuaW1hdGlvbiBuZXZlciB0aHJhc2hlcyBsb2NhbFN0b3JhZ2UuXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyB0cnkgeyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZHNoLWVsZjptb2RlJywgbW9kZSk7IH0gY2F0Y2ggKGUpIHt9IH0sIFttb2RlXSk7XG5cbiAgICAgIC8vIC0tLS0gZWZmZWN0aXZlIG1vZGVsIGxhYmVsIC0tLS1cbiAgICAgIGxldCBlZmZNb2RlbCA9ICdcdTIwMjYnO1xuICAgICAgaWYgKGNmZykge1xuICAgICAgICBpZiAoIWNmZy5mb2xsb3cgJiYgY2ZnLm1vZGVsKSBlZmZNb2RlbCA9IChjZmcuYmFzZSB8fCAnY3VzdG9tJykucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJykuc3BsaXQoJy8nKVswXSArICcvJyArIGNmZy5tb2RlbCArIChjZmcuZWZmb3J0ID8gJyBcdTAwQjcgJyArIGNmZy5lZmZvcnQgOiAnJyk7XG4gICAgICAgIGVsc2UgaWYgKHNlc3Npb24pIGVmZk1vZGVsID0gc2Vzc2lvbi5wcm92aWRlciArICcvJyArIHNlc3Npb24ubW9kZWw7XG4gICAgICAgIGVsc2UgZWZmTW9kZWwgPSBULm1vZGVsRm9sbG93O1xuICAgICAgfVxuXG4gICAgICAvLyAtLS0tIG9yYiBkcmlmdDogc2xvdyB3YW5kZXJpbmcsIGNsYW1wZWQgdG8gdGhlIHZpZXdwb3J0IC0tLS1cbiAgICAgIC8vIERyaWZ0cyBhcm91bmQgaXRzIGFuY2hvciBwb2ludCB3aGlsZSBpZGxlOyBzdG9wcyB3aGlsZSBiZWluZyBkcmFnZ2VkLlxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG1vZGUgIT09ICdvcmInKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgdCA9IE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICAgICAgY29uc3QgaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChkcmFnKSByZXR1cm47IC8vIHBhdXNlZCB3aGlsZSBkcmFnZ2luZ1xuICAgICAgICAgIHQgKz0gMC4wMjtcbiAgICAgICAgICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDEyMDA7XG4gICAgICAgICAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgODAwO1xuICAgICAgICAgIGNvbnN0IHNpemUgPSA0ODtcbiAgICAgICAgICAvLyBhbmNob3I6IGN1cnJlbnQgb3JiUG9zIChvciBkZWZhdWx0IGJvdHRvbS1yaWdodCB3aGVuIG5vbmUpXG4gICAgICAgICAgY29uc3QgYXggPSBvcmJQb3MgPyBvcmJQb3MueCA6ICh2dyAtIHNpemUgLSAyMik7XG4gICAgICAgICAgY29uc3QgYXkgPSBvcmJQb3MgPyBvcmJQb3MueSA6ICh2aCAtIHNpemUgLSAyMik7XG4gICAgICAgICAgY29uc3QgcnggPSBNYXRoLm1pbig0NiwgdncgLyAxMik7XG4gICAgICAgICAgY29uc3QgcnkgPSBNYXRoLm1pbigzMCwgdmggLyAxNik7XG4gICAgICAgICAgY29uc3QgeCA9IGNsYW1wKGF4ICsgTWF0aC5zaW4odCkgKiByeCwgNiwgdncgLSBzaXplIC0gNik7XG4gICAgICAgICAgY29uc3QgeSA9IGNsYW1wKGF5ICsgTWF0aC5jb3ModCAqIDEuNCkgKiByeSwgNiwgdmggLSBzaXplIC0gNik7XG4gICAgICAgICAgc2V0T3JiUG9zKHsgeCwgeSB9KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgfSwgW21vZGUsICEhZHJhZ10pO1xuXG4gICAgICAvLyAtLS0tIGRyYWcgaGFuZGxpbmcgKGNsYW1wZWQgaW5zaWRlIHRoZSB2aWV3cG9ydCkgLS0tLVxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFkcmFnKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBvbk1vdmUgPSAoZSkgPT4ge1xuICAgICAgICAgIGxhc3REcmFnTW92ZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGggfHwgMTIwMDtcbiAgICAgICAgICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCA4MDA7XG4gICAgICAgICAgaWYgKGRyYWcua2luZCA9PT0gJ29yYicpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSA0ODtcbiAgICAgICAgICAgIHNldE9yYlBvcyh7XG4gICAgICAgICAgICAgIHg6IGNsYW1wKGUuY2xpZW50WCAtIGRyYWcuZHgsIDYsIHZ3IC0gc2l6ZSAtIDYpLFxuICAgICAgICAgICAgICB5OiBjbGFtcChlLmNsaWVudFkgLSBkcmFnLmR5LCA2LCB2aCAtIHNpemUgLSA2KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gNDAwO1xuICAgICAgICAgICAgY29uc3QgaCA9IDU0MDtcbiAgICAgICAgICAgIHNldFdpblBvcyh7XG4gICAgICAgICAgICAgIHg6IGNsYW1wKGUuY2xpZW50WCAtIGRyYWcuZHgsIDYsIHZ3IC0gdyAtIDYpLFxuICAgICAgICAgICAgICB5OiBjbGFtcChlLmNsaWVudFkgLSBkcmFnLmR5LCA2LCB2aCAtIGggLSA2KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25VcCA9IChlKSA9PiB7XG4gICAgICAgICAgc2V0RHJhZyhudWxsKTtcbiAgICAgICAgICAvLyBQZXJzaXN0IHRoZSBkcm9wIHBvc2l0aW9uIGNvbXB1dGVkIGZyb20gdGhlIGZpbmFsIHBvaW50ZXIgZXZlbnQuXG4gICAgICAgICAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxMjAwO1xuICAgICAgICAgIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0IHx8IDgwMDtcbiAgICAgICAgICBpZiAoZHJhZy5raW5kID09PSAnb3JiJykge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IDQ4O1xuICAgICAgICAgICAgY29uc3QgeCA9IGNsYW1wKGUuY2xpZW50WCAtIGRyYWcuZHgsIDYsIHZ3IC0gc2l6ZSAtIDYpO1xuICAgICAgICAgICAgY29uc3QgeSA9IGNsYW1wKGUuY2xpZW50WSAtIGRyYWcuZHksIDYsIHZoIC0gc2l6ZSAtIDYpO1xuICAgICAgICAgICAgc2V0T3JiUG9zKHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHRyeSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkc2gtZWxmOm9yYicsIEpTT04uc3RyaW5naWZ5KHsgeCwgeSB9KSk7IH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdyA9IDQwMDtcbiAgICAgICAgICAgIGNvbnN0IGggPSA1NDA7XG4gICAgICAgICAgICBjb25zdCB4ID0gY2xhbXAoZS5jbGllbnRYIC0gZHJhZy5keCwgNiwgdncgLSB3IC0gNik7XG4gICAgICAgICAgICBjb25zdCB5ID0gY2xhbXAoZS5jbGllbnRZIC0gZHJhZy5keSwgNiwgdmggLSBoIC0gNik7XG4gICAgICAgICAgICBzZXRXaW5Qb3MoeyB4LCB5IH0pO1xuICAgICAgICAgICAgdHJ5IHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RzaC1lbGY6d2luJywgSlNPTi5zdHJpbmdpZnkoeyB4LCB5IH0pKTsgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Nb3ZlKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25VcCk7XG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25VcCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICB9LCBbZHJhZ10pO1xuXG4gICAgICBjb25zdCBzdGFydE9yYkRyYWcgPSAoZSkgPT4ge1xuICAgICAgICBpZiAobW9kZSAhPT0gJ29yYicpIHJldHVybjtcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b24gIT09IDApIHJldHVybjtcbiAgICAgICAgbGFzdERyYWdNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCByZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBzZXREcmFnKHsga2luZDogJ29yYicsIGR4OiBlLmNsaWVudFggLSByZWN0LmxlZnQsIGR5OiBlLmNsaWVudFkgLSByZWN0LnRvcCB9KTtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzdGFydFdpbkRyYWcgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcuZHNoLWVsZi1oZWFkYnRuLCAuZHNoLWVsZi1jbGVhcicpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHNldERyYWcoeyBraW5kOiAnd2luJywgZHg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZHk6IGUuY2xpZW50WSAtIHJlY3QudG9wIH0pO1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgLy8gLS0tLSBzdHJlYW1pbmc6IGhvc3Qgcm91dGUgKGZvbGxvdyBzZXNzaW9uIGRlZmF1bHQpIC0tLS1cbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghY2hhdElkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwb2xsT25jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAoc3RvcHBlZCkgcmV0dXJuO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByID0gYXdhaXQgY2FsbEhvc3QoJ2VsZi5jaGF0LnBvbGwnLCB7IGNoYXRJZCB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAociAmJiByLm9rKSB7XG4gICAgICAgICAgICAgIHNldE1zZ3MoKHByZXYpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gcHJldi5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBsYXN0T2YoY29weSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QgJiYgbGFzdC5yb2xlID09PSAnYXNzaXN0YW50JyAmJiBsYXN0LnBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyLmVycm9yKSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiAnJywgcGVuZGluZzogZmFsc2UsIGVycm9yOiByLmVycm9yIH07XG4gICAgICAgICAgICAgICAgICBlbHNlIGNvcHlbY29weS5sZW5ndGggLSAxXSA9IHsgcm9sZTogJ2Fzc2lzdGFudCcsIHRleHQ6IHIudGV4dCwgcGVuZGluZzogIXIuZG9uZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChyLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRDaGF0SWQobnVsbCk7XG4gICAgICAgICAgICAgICAgdHJ5IHsgY2FsbEhvc3QoJ2VsZi5jaGF0LmNsb3NlJywgeyBjaGF0SWQgfSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0Q2hhdElkKG51bGwpO1xuICAgICAgICAgICAgICBzZXRNc2dzKChwcmV2KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHByZXYuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gbGFzdE9mKGNvcHkpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3Qucm9sZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5wZW5kaW5nKSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiAnJywgcGVuZGluZzogZmFsc2UsIGVycm9yOiAociAmJiByLmVycm9yKSB8fCBULmNoYXRFbmRlZCB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmICghc3RvcHBlZCkge1xuICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0QnVzeShmYWxzZSk7XG4gICAgICAgICAgICAgIHNldENoYXRJZChudWxsKTtcbiAgICAgICAgICAgICAgc2V0TXNncygocHJldikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBwcmV2LnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IGxhc3RPZihjb3B5KTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCAmJiBsYXN0LnJvbGUgPT09ICdhc3Npc3RhbnQnICYmIGxhc3QucGVuZGluZykgY29weVtjb3B5Lmxlbmd0aCAtIDFdID0geyByb2xlOiAnYXNzaXN0YW50JywgdGV4dDogJycsIHBlbmRpbmc6IGZhbHNlLCBlcnJvcjogU3RyaW5nKChlcnIgJiYgZXJyLm1lc3NhZ2UpIHx8IGVycikgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBQb2xsIGltbWVkaWF0ZWx5IGZvciB0aGUgZmlyc3QgdG9rZW4sIHRoZW4gb24gYSB0aWdodCBpbnRlcnZhbC5cbiAgICAgICAgY29uc3QgZmlyc3QgPSB3aW5kb3cuc2V0VGltZW91dChwb2xsT25jZSwgMCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHBvbGxPbmNlLCA1NSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IHN0b3BwZWQgPSB0cnVlOyB3aW5kb3cuY2xlYXJUaW1lb3V0KGZpcnN0KTsgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyB9O1xuICAgICAgfSwgW2NoYXRJZF0pO1xuXG4gICAgICAvLyAtLS0tIGFjdGlvbnMgLS0tLVxuICAgICAgY29uc3Qgc2VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGlucHV0LnRyaW0oKTtcbiAgICAgICAgaWYgKCF0ZXh0IHx8IGJ1c3kpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV4dCA9IG1zZ3MuY29uY2F0KFt7IHJvbGU6ICd1c2VyJywgdGV4dCB9LCB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiAnJywgcGVuZGluZzogdHJ1ZSB9XSk7XG4gICAgICAgIHNldE1zZ3MobmV4dCk7XG4gICAgICAgIHNldElucHV0KCcnKTtcbiAgICAgICAgc2V0QnVzeSh0cnVlKTtcblxuICAgICAgICBjb25zdCB3aXJlID0gbmV4dC5maWx0ZXIoKG0pID0+ICFtLnBlbmRpbmcpLm1hcCgobSkgPT4gKHsgcm9sZTogbS5yb2xlLCB0ZXh0OiBtLnRleHQgfSkpO1xuXG4gICAgICAgIGlmIChjZmcgJiYgIWNmZy5mb2xsb3cpIHtcbiAgICAgICAgICAvLyBDdXN0b20gT3BlbkFJLWNvbXBhdGlibGUgcm91dGU6IHN0cmVhbSBkaXJlY3RseSBmcm9tIHRoZSBicm93c2VyLlxuICAgICAgICAgIGNvbnN0IGJhc2UgPSAoY2ZnLmJhc2UgfHwgJycpLnRyaW0oKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICAgICAgICBjb25zdCBtb2RlbCA9IChjZmcubW9kZWwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgICBpZiAoIWJhc2UgfHwgIW1vZGVsIHx8ICFjZmcuYXBpS2V5KSB7XG4gICAgICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgICAgIHNldE1zZ3MoKHByZXYpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29weSA9IHByZXYuc2xpY2UoKTtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IGxhc3RPZihjb3B5KTtcbiAgICAgICAgICAgICAgaWYgKGxhc3QgJiYgbGFzdC5yb2xlID09PSAnYXNzaXN0YW50JyAmJiBsYXN0LnBlbmRpbmcpIGNvcHlbY29weS5sZW5ndGggLSAxXSA9IHsgcm9sZTogJ2Fzc2lzdGFudCcsIHRleHQ6ICcnLCBwZW5kaW5nOiBmYWxzZSwgZXJyb3I6IFQubmVlZEN1c3RvbUNmZyB9O1xuICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gdHlwZW9mIEFib3J0Q29udHJvbGxlciAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgQWJvcnRDb250cm9sbGVyKCkgOiBudWxsO1xuICAgICAgICAgIGNvbnN0IHVybCA9IGJhc2UgKyAnL2NoYXQvY29tcGxldGlvbnMnO1xuICAgICAgICAgIGNvbnN0IGJvZHkgPSB7IG1vZGVsLCBtZXNzYWdlczogd2lyZS5tYXAoKG0pID0+ICh7IHJvbGU6IG0ucm9sZSwgY29udGVudDogbS50ZXh0IH0pKSwgc3RyZWFtOiB0cnVlIH07XG4gICAgICAgICAgaWYgKGNmZy5lZmZvcnQpIGJvZHkucmVhc29uaW5nX2VmZm9ydCA9IGNmZy5lZmZvcnQ7XG5cbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIChjZmcuYXBpS2V5IHx8ICcnKS50cmltKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIgPyBjb250cm9sbGVyLnNpZ25hbCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgIGxldCBtc2cgPSAnSFRUUCAnICsgcmVzLnN0YXR1cztcbiAgICAgICAgICAgICAgdHJ5IHsgY29uc3QgaiA9IGF3YWl0IHJlcy5qc29uKCk7IGlmIChqICYmIGouZXJyb3IgJiYgai5lcnJvci5tZXNzYWdlKSBtc2cgPSBqLmVycm9yLm1lc3NhZ2U7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXMuYm9keSB8fCAhcmVzLmJvZHkuZ2V0UmVhZGVyKSB7XG4gICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiB3aG9sZS1ib2R5IEpTT04gKG5vbi1zdHJlYW1pbmcgZW5kcG9pbnQpXG4gICAgICAgICAgICAgIGNvbnN0IGogPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICBjb25zdCB0ID0gKGogJiYgai5jaG9pY2VzICYmIGouY2hvaWNlc1swXSAmJiBqLmNob2ljZXNbMF0ubWVzc2FnZSAmJiBqLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50KSB8fCAnJztcbiAgICAgICAgICAgICAgc2V0TXNncygocHJldikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBwcmV2LnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IGxhc3RPZihjb3B5KTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCAmJiBsYXN0LnJvbGUgPT09ICdhc3Npc3RhbnQnICYmIGxhc3QucGVuZGluZykgY29weVtjb3B5Lmxlbmd0aCAtIDFdID0geyByb2xlOiAnYXNzaXN0YW50JywgdGV4dDogdCwgcGVuZGluZzogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IHJlcy5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSAnJztcbiAgICAgICAgICAgIGxldCBhY2MgPSAnJztcbiAgICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgICAgICAgaWYgKGRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgICAgICAgICAgICBsZXQgbmw7XG4gICAgICAgICAgICAgIHdoaWxlICgobmwgPSBidWZmZXIuaW5kZXhPZignXFxuJykpID49IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gYnVmZmVyLnNsaWNlKDAsIG5sKS50cmltKCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKG5sICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lIHx8IGxpbmVbMF0gIT09ICdkJykgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBsaW5lLnNsaWNlKDUpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gJ1tET05FXScpIHsgYnVmZmVyID0gJyc7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGllY2UgPSBqICYmIGouY2hvaWNlcyAmJiBqLmNob2ljZXNbMF0gJiYgai5jaG9pY2VzWzBdLmRlbHRhICYmIGouY2hvaWNlc1swXS5kZWx0YS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwaWVjZSA9PT0gJ3N0cmluZycgJiYgcGllY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IHBpZWNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRNc2dzKChwcmV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHByZXYuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gbGFzdE9mKGNvcHkpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3Qucm9sZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5wZW5kaW5nKSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiBhY2MsIHBlbmRpbmc6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBwYXJ0aWFsIGpzb24gbGluZXMgYXJlIHNraXBwZWQgKi8gfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRNc2dzKChwcmV2KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBwcmV2LnNsaWNlKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBsYXN0T2YoY29weSk7XG4gICAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3Qucm9sZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5wZW5kaW5nKSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiBhY2MsIHBlbmRpbmc6IGZhbHNlIH07XG4gICAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0QnVzeShmYWxzZSk7XG4gICAgICAgICAgICBzZXRNc2dzKChwcmV2KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBwcmV2LnNsaWNlKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBsYXN0T2YoY29weSk7XG4gICAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3Qucm9sZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5wZW5kaW5nKSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiAnJywgcGVuZGluZzogZmFsc2UsIGVycm9yOiBTdHJpbmcoKGVyciAmJiBlcnIubWVzc2FnZSkgfHwgZXJyKSB9O1xuICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0QnVzeShmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2Vzc2lvbi1kZWZhdWx0IHJvdXRlIHZpYSB0aGUgaG9zdCAodGhlIGhhcm5lc3MncyBjb25maWd1cmVkIHByb3ZpZGVyKS5cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHsgbWVzc2FnZXM6IHdpcmUsIGxhbmc6IGxhbmcgPT09ICd6aCcgPyAnemgnIDogJ2VuJyB9O1xuICAgICAgICBjYWxsSG9zdCgnZWxmLmNoYXQuc3RhcnQnLCBwYXlsb2FkKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgaWYgKHIgJiYgci5vaykge1xuICAgICAgICAgICAgc2V0Q2hhdElkKHIuY2hhdElkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QnVzeShmYWxzZSk7XG4gICAgICAgICAgICBzZXRNc2dzKChwcmV2KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBwcmV2LnNsaWNlKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBsYXN0T2YoY29weSk7XG4gICAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3Qucm9sZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5wZW5kaW5nKSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSB7IHJvbGU6ICdhc3Npc3RhbnQnLCB0ZXh0OiAnJywgcGVuZGluZzogZmFsc2UsIGVycm9yOiAociAmJiByLmVycm9yKSB8fCBULnJlcUZhaWxlZCB9O1xuICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICAgIHNldE1zZ3MoKHByZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBwcmV2LnNsaWNlKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gbGFzdE9mKGNvcHkpO1xuICAgICAgICAgICAgaWYgKGxhc3QgJiYgbGFzdC5yb2xlID09PSAnYXNzaXN0YW50JyAmJiBsYXN0LnBlbmRpbmcpIGNvcHlbY29weS5sZW5ndGggLSAxXSA9IHsgcm9sZTogJ2Fzc2lzdGFudCcsIHRleHQ6ICcnLCBwZW5kaW5nOiBmYWxzZSwgZXJyb3I6IFN0cmluZygoZXJyICYmIGVyci5tZXNzYWdlKSB8fCBlcnIpIH07XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbGVhckNoYXQgPSAoKSA9PiB7XG4gICAgICAgIHNldE1zZ3MoW10pO1xuICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgc2V0Q2hhdElkKG51bGwpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29weU1zZyA9ICh0ZXh0LCBldikgPT4ge1xuICAgICAgICBjb25zdCBkb25lID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChldiAmJiBldi5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBvbGQgPSBldi5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgZXYuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCA9ICdcdTI3MTMnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGlmIChldi5jdXJyZW50VGFyZ2V0KSBldi5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50ID0gb2xkOyB9LCA5MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KSB7XG4gICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkudGhlbihkb25lKS5jYXRjaCgoKSA9PiBmYWxsYmFja0NvcHkodGV4dCwgZG9uZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhbGxiYWNrQ29weSh0ZXh0LCBkb25lKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGZhbGxiYWNrQ29weSA9ICh0ZXh0LCBkb25lKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgIHRhLnZhbHVlID0gdGV4dDtcbiAgICAgICAgICB0YS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgdGEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhKTtcbiAgICAgICAgICB0YS5zZWxlY3QoKTtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGEpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBkb25lKCk7IH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9uSW5wdXRLZXkgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VuZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvblByb3ZpZGVyQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJlc2V0ID0gUFJFU0VUUy5maW5kKChwKSA9PiBwLmlkID09PSBpZCkgfHwgUFJFU0VUU1tQUkVTRVRTLmxlbmd0aCAtIDFdO1xuICAgICAgICBzZXRDZmcoT2JqZWN0LmFzc2lnbih7fSwgY2ZnLCB7IHByb3ZpZGVyOiBpZCwgYmFzZTogcHJlc2V0LmJhc2UgfSkpO1xuICAgICAgfTtcblxuICAgICAgLy8gLS0tLSByZW5kZXIgLS0tLVxuICAgICAgY29uc3Qgb3JiU3R5bGUgPSBvcmJQb3MgPyB7IGxlZnQ6IG9yYlBvcy54ICsgJ3B4JywgdG9wOiBvcmJQb3MueSArICdweCcsIHJpZ2h0OiAnYXV0bycsIGJvdHRvbTogJ2F1dG8nIH0gOiB7IHJpZ2h0OiAnMjJweCcsIGJvdHRvbTogJzIycHgnIH07XG4gICAgICBjb25zdCB3aW5TdHlsZSA9IHdpblBvcyA/IHsgbGVmdDogd2luUG9zLnggKyAncHgnLCB0b3A6IHdpblBvcy55ICsgJ3B4JywgcmlnaHQ6ICdhdXRvJywgYm90dG9tOiAnYXV0bycgfSA6IHsgcmlnaHQ6ICcyMnB4JywgYm90dG9tOiAnMjJweCcgfTtcblxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdvcmInKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3JiJyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZHNoLWVsZi1vcmInLFxuICAgICAgICAgICAgICBzdHlsZTogb3JiU3R5bGUsXG4gICAgICAgICAgICAgIG9uUG9pbnRlckRvd246IHN0YXJ0T3JiRHJhZyxcbiAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHsgY29uc3QgbW92ZWQgPSBsYXN0RHJhZ01vdmVkOyBsYXN0RHJhZ01vdmVkID0gZmFsc2U7IGlmICghbW92ZWQpIHsgc2V0TW9kZSgnY2hhdCcpOyB9IH0sXG4gICAgICAgICAgICAgIHRpdGxlOiBULm5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdoYWxlSWNvbiwgeyBrZXk6ICd3aGFsZScsIHNpemU6IDQwLCBnaWQ6ICdkc2gtZWxmLWdyYWQtb3JiJyB9KSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBoZWFkQ2hpbGRyZW4gPSBbXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdoYWxlSWNvbiwgeyBrZXk6ICd3aGFsZScsIHNpemU6IDI0LCBnaWQ6ICdkc2gtZWxmLWdyYWQtaGVhZCcgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBrZXk6ICd0aXRsZScsIGNsYXNzTmFtZTogJ2RzaC1lbGYtdGl0bGUnIH0sIFQudGl0bGUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsga2V5OiAnbW9kZWwnLCBjbGFzc05hbWU6ICdkc2gtZWxmLW1vZGVsJywgdGl0bGU6IFQubW9kZWxCYWRnZVRpdGxlIH0sIGVmZk1vZGVsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGtleTogJ3NwJywgY2xhc3NOYW1lOiAnZHNoLWVsZi1zcGFjZXInIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBrZXk6ICdjZmcnLCBjbGFzc05hbWU6ICdkc2gtZWxmLWhlYWRidG4nLCB0aXRsZTogVC5jZmdCdG4sIG9uQ2xpY2s6ICgpID0+IHNldENmZ09wZW4oIWNmZ09wZW4pIH0sICdcdTI2OTknKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsga2V5OiAnbWluJywgY2xhc3NOYW1lOiAnZHNoLWVsZi1oZWFkYnRuJywgdGl0bGU6IFQubWluaSwgb25DbGljazogKCkgPT4gc2V0TW9kZSgnb3JiJykgfSwgJ1x1MjAxNCcpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBrZXk6ICdjbGVhcicsIGNsYXNzTmFtZTogJ2RzaC1lbGYtY2xlYXInLCB0aXRsZTogVC5jbGVhclRpdGxlLCBvbkNsaWNrOiBjbGVhckNoYXQsIGRpc2FibGVkOiAhbXNncy5sZW5ndGggfSwgVC5jbGVhciksXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGNvbnN0IGNmZ0NoaWxkcmVuID0gW107XG4gICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgY29uc3QgcHJlc2V0T3B0aW9ucyA9IFBSRVNFVFMubWFwKChwKSA9PlxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7IGtleTogcC5pZCwgdmFsdWU6IHAuaWQgfSwgVFtwLmxhYmVsS2V5XSkpO1xuICAgICAgICAgICAgY2ZnQ2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBrZXk6ICdyMCcsIGNsYXNzTmFtZTogJ2RzaC1lbGYtY29uZmlncm93JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgbnVsbCwgVC5tb2RlbFNvdXJjZSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7IGNsYXNzTmFtZTogJ2RzaC1lbGYtY2hlY2snLCBrZXk6ICdmb2xsb3cnIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogISFjZmcuZm9sbG93LFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHNldENmZyhPYmplY3QuYXNzaWduKHt9LCBjZmcsIHsgZm9sbG93OiBlLnRhcmdldC5jaGVja2VkIH0pKSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgVC5mb2xsb3csXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBrZXk6ICdyMScsIGNsYXNzTmFtZTogJ2RzaC1lbGYtY29uZmlncm93JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyBodG1sRm9yOiAnZHNoLWVsZi1wcm92aWRlcicgfSwgVC5wcm92aWRlciksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgICAgaWQ6ICdkc2gtZWxmLXByb3ZpZGVyJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBjZmcucHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2ZnLmZvbGxvdyxcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvblByb3ZpZGVyQ2hhbmdlLFxuICAgICAgICAgICAgICAgIH0sIHByZXNldE9wdGlvbnMpLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGtleTogJ3IyJywgY2xhc3NOYW1lOiAnZHNoLWVsZi1jb25maWdyb3cnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7IGh0bWxGb3I6ICdkc2gtZWxmLWJhc2UnIH0sIFQuYXBpQmFzZSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2RzaC1lbGYtYmFzZScsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICdodHRwczovL2FwaS5kZWVwc2Vlay5jb20vdjEnLCB2YWx1ZTogY2ZnLmJhc2UsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2ZnLmZvbGxvdyxcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Q2ZnKE9iamVjdC5hc3NpZ24oe30sIGNmZywgeyBiYXNlOiBlLnRhcmdldC52YWx1ZSB9KSksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiAncjMnLCBjbGFzc05hbWU6ICdkc2gtZWxmLWNvbmZpZ3JvdycgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgaHRtbEZvcjogJ2RzaC1lbGYta2V5JyB9LCBULmFwaUtleSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2RzaC1lbGYta2V5JywgdHlwZTogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6ICdzay1cdTIwMjYnLCB2YWx1ZTogY2ZnLmFwaUtleSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjZmcuZm9sbG93LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRDZmcoT2JqZWN0LmFzc2lnbih7fSwgY2ZnLCB7IGFwaUtleTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGtleTogJ3I0JywgY2xhc3NOYW1lOiAnZHNoLWVsZi1jb25maWdyb3cnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7IGh0bWxGb3I6ICdkc2gtZWxmLW1vZGVsJyB9LCBULm1vZGVsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgIGlkOiAnZHNoLWVsZi1tb2RlbCcsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6IFQubW9kZWxQaCwgdmFsdWU6IGNmZy5tb2RlbCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjZmcuZm9sbG93LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRDZmcoT2JqZWN0LmFzc2lnbih7fSwgY2ZnLCB7IG1vZGVsOiBlLnRhcmdldC52YWx1ZSB9KSksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiAncjUnLCBjbGFzc05hbWU6ICdkc2gtZWxmLWNvbmZpZ3JvdycgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgaHRtbEZvcjogJ2RzaC1lbGYtZWZmb3J0JyB9LCBULnJlYXNvbmluZyksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBpZDogJ2RzaC1lbGYtZWZmb3J0JywgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogVC5lZmZvcnRQaCwgdmFsdWU6IGNmZy5lZmZvcnQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2ZnLmZvbGxvdyxcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Q2ZnKE9iamVjdC5hc3NpZ24oe30sIGNmZywgeyBlZmZvcnQ6IGUudGFyZ2V0LnZhbHVlIH0pKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBrZXk6ICdoaW50JywgY2xhc3NOYW1lOiAnZHNoLWVsZi1oaW50JyB9LFxuICAgICAgICAgICAgICAgIFQuY2ZnSGludCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbXNnQ2hpbGRyZW4gPSBtc2dzLm1hcCgobSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xzID0gJ2RzaC1lbGYtbXNnICcgKyAobS5yb2xlID09PSAndXNlcicgPyAndXNlcicgOiAnYXNzaXN0YW50JykgKyAobS5lcnJvciA/ICcgZXJyb3InIDogJycpO1xuICAgICAgICAgICAgY29uc3QgdHlwaW5nID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnZHNoLWVsZi10eXBpbmcnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgbnVsbCkpO1xuICAgICAgICAgICAgY29uc3QgaW5uZXIgPSBtLnBlbmRpbmcgPyAobS50ZXh0IHx8IHR5cGluZykgOiAobS50ZXh0IHx8IChtLmVycm9yID8gbS5lcnJvciA6ICcnKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBrZXk6ICdtJyArIGksIGNsYXNzTmFtZTogY2xzIH0sXG4gICAgICAgICAgICAgIGlubmVyLFxuICAgICAgICAgICAgICAoIW0ucGVuZGluZyAmJiBtLnRleHQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY29weScsXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IGNvcHlNc2cobS50ZXh0LCBlKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogVC5jb3B5LFxuICAgICAgICAgICAgICB9LCAnXHVEODNEXHVEQ0NCJykgOiBudWxsKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFtc2dzLmxlbmd0aCkge1xuICAgICAgICAgICAgbXNnQ2hpbGRyZW4ucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGtleTogJ2VtcHR5JywgY2xhc3NOYW1lOiAnZHNoLWVsZi1tc2cgYXNzaXN0YW50Jywgc3R5bGU6IHsgb3BhY2l0eTogJy43MicgfSB9LCBULmVtcHR5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiAnd2luJywgY2xhc3NOYW1lOiAnZHNoLWVsZi13aW4nLCBzdHlsZTogd2luU3R5bGUgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBrZXk6ICdoZWFkJywgY2xhc3NOYW1lOiAnZHNoLWVsZi1oZWFkJywgb25Qb2ludGVyRG93bjogc3RhcnRXaW5EcmFnIH0sXG4gICAgICAgICAgICAgICAgaGVhZENoaWxkcmVuLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGtleTogJ2NmZycsIGNsYXNzTmFtZTogJ2RzaC1lbGYtY29uZmlnJyArIChjZmdPcGVuID8gJyBvcGVuJyA6ICcnKSB9LCBjZmdDaGlsZHJlbiksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiAnbXNncycsIGNsYXNzTmFtZTogJ2RzaC1lbGYtbXNncycgfSwgbXNnQ2hpbGRyZW4pLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGtleTogJ2luJywgY2xhc3NOYW1lOiAnZHNoLWVsZi1pbnB1dHJvdycgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RzaC1lbGYtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBULmlucHV0UGgsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaW5wdXQsXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogb25JbnB1dEtleSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzTmFtZTogJ2RzaC1lbGYtc2VuZCcsIG9uQ2xpY2s6IHNlbmQsIGRpc2FibGVkOiBidXN5IHx8ICFpbnB1dC50cmltKCkgfHwgIWNmZyB9LCAnXHUyN0E0JyksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdkc2gtZWxmLXJvb3QnIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tIFNsb3QgcmVnaXN0cmF0aW9uIC0tLS1cbiAgICBjdHguc2xvdHMuaW5qZWN0KCdzaGVsbC5vdmVybGF5JywgKCkgPT4gY3R4LnNsb3RzLnJlZ2lzdGVyKFxuICAgICAgeyBuYW1lOiAnc2hlbGwub3ZlcmxheScsIGlkOiAnZHNoLWVsZicsIG9yZGVyOiA1MDAsIGxhYmVsOiAoKSA9PiAodCA/IHQoJ25hbWUnKSA6IChjdXJyZW50TGFuZygpID09PSAnemgnID8gemgubmFtZSA6IGVuLm5hbWUpKSwgbG9jYWxlOiBOUyB9LFxuICAgICAgKCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChFbGZBcHAsIG51bGwpLFxuICAgICkpO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGluamVjdCA9IHBsdWdpbi5pbmplY3Q7XG5leHBvcnQgY29uc3QgYXBwbHkgPSBwbHVnaW4uYXBwbHk7XG4iLCAiLy8gZHNoLWVsZiBcdTIwMTQgemgvZW4gZGljdGlvbmFyaWVzLiB6aCBpcyB0aGUgc291cmNlIG9mIHRydXRoOyBlbiBtaXJyb3JzIGl0IDE6MS5cblxuZXhwb3J0IGNvbnN0IE5TID0gJ2RzaC1lbGYnO1xuXG5leHBvcnQgY29uc3QgemggPSB7XG4gIG5hbWU6ICdEZWVwU2VlayBcdTVDMEZcdTdDQkVcdTcwNzUnLFxuICB0aXRsZTogJ0RlZXBTZWVrIFx1N0NCRVx1NzA3NScsXG4gIG1vZGVsQmFkZ2VUaXRsZTogJ1x1NUY1M1x1NTI0RFx1NkEyMVx1NTc4QicsXG4gIGNmZ0J0bjogJ1x1NkEyMVx1NTc4Qlx1OTE0RFx1N0Y2RScsXG4gIG1pbmk6ICdcdTY3MDBcdTVDMEZcdTUzMTZcdTUyMzBcdTVDMEZcdTdDQkVcdTcwNzUnLFxuICBjbGVhclRpdGxlOiAnXHU2RTA1XHU3QTdBXHU4MDRBXHU1OTI5JyxcbiAgY2xlYXI6ICdcdTZFMDVcdTdBN0EnLFxuICBtb2RlbEZvbGxvdzogJ1x1OERERlx1OTY4Rlx1OUVEOFx1OEJBNCcsXG4gIG1vZGVsU291cmNlOiAnXHU2QTIxXHU1NzhCXHU2NzY1XHU2RTkwJyxcbiAgZm9sbG93OiAnXHU4RERGXHU5NjhGXHU0RjFBXHU4QkREXHU5RUQ4XHU4QkE0JyxcbiAgcHJvdmlkZXI6ICdcdTYzRDBcdTRGOUJcdTY1QjknLFxuICBhcGlCYXNlOiAnQVBJIFx1NTczMFx1NTc0MCcsXG4gIGFwaUtleTogJ0FQSSBLZXknLFxuICBtb2RlbDogJ1x1NkEyMVx1NTc4QicsXG4gIHJlYXNvbmluZzogJ3JlYXNvbmluZycsXG4gIG1vZGVsUGg6ICdcdTRGOEJcdTU5ODIgZGVlcHNlZWstY2hhdCcsXG4gIGVmZm9ydFBoOiAnXHU1M0VGXHU5MDA5XHVGRjFBaGlnaCAvIG1lZGl1bSAvIGxvdycsXG4gIGNmZ0hpbnQ6ICdcdTgxRUFcdTVCOUFcdTRFNDlcdTZBMjFcdTVGMEZcdTRFMEJcdTVDMEZcdTdDQkVcdTcwNzVcdTc2RjRcdTYzQTVcdThDMDNcdTc1MjhcdThCRTUgQVBJIFx1NTczMFx1NTc0MFx1RkYwOE9wZW5BSSBcdTUxN0NcdTVCQjkgL2NoYXQvY29tcGxldGlvbnMgXHU2RDQxXHU1RjBGXHU2M0E1XHU1M0UzXHVGRjA5XHUzMDAyXHU1M0Q2XHU2RDg4XHU1MkZFXHU5MDA5XCJcdThEREZcdTk2OEZcdTRGMUFcdThCRERcdTlFRDhcdThCQTRcIlx1NTQwRVx1NzUxRlx1NjU0OFx1MzAwMicsXG4gIGlucHV0UGg6ICdcdTk1RUVcdTVDMEZcdTdDQkVcdTcwNzVcdTcwQjlcdTRFQzBcdTRFNDhcdTIwMjYnLFxuICBlbXB0eTogJ1x1NTcyOFx1NUMwRlx1N0NCRVx1NzA3NVx1OTFDQ1x1NEUzNFx1NjVGNlx1ODA0QVx1NTFFMFx1NTNFNVx1NTQyNyBcdTI3MjhcdUZGMDhcdTRFMERcdTRGMUFcdTUxOTlcdTUxNjVcdTRGMUFcdThCRERcdThCQjBcdTVGNTVcdUZGMDknLFxuICBjb3B5OiAnXHU1OTBEXHU1MjM2JyxcbiAgbmVlZEN1c3RvbUNmZzogJ1x1OEJGN1x1NTE0OFx1NTg2Qlx1NTE5OSBBUEkgXHU1NzMwXHU1NzQwXHUzMDAxQVBJIEtleSBcdTU0OENcdTZBMjFcdTU3OEJcdTU0MEQnLFxuICBob3N0RmFpbDogJ1x1NUMwRlx1N0NCRVx1NzA3NSBIb3N0IFx1OEJGN1x1NkM0Mlx1NTkzMVx1OEQyNSAoezB9KScsXG4gIHJlcUZhaWxlZDogJ1x1OEJGN1x1NkM0Mlx1NTkzMVx1OEQyNScsXG4gIGNoYXRFbmRlZDogJ1x1NUJGOVx1OEJERFx1N0VEM1x1Njc1RicsXG4gIHByZXNldERlZXBzZWVrOiAnRGVlcFNlZWsnLFxuICBwcmVzZXRPcGVuYWk6ICdPcGVuQUknLFxuICBwcmVzZXRNb29uc2hvdDogJ01vb25zaG90IEtpbWknLFxuICBwcmVzZXRaaGlwdTogJ1x1NjY3QVx1OEMzMSBHTE0nLFxuICBwcmVzZXRRd2VuOiAnXHU5MDFBXHU0RTQ5XHU1MzQzXHU5NUVFJyxcbiAgcHJlc2V0Q3VzdG9tOiAnXHU4MUVBXHU1QjlBXHU0RTQ5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBlbiA9IHtcbiAgbmFtZTogJ0RlZXBTZWVrIEVsZicsXG4gIHRpdGxlOiAnRGVlcFNlZWsgRWxmJyxcbiAgbW9kZWxCYWRnZVRpdGxlOiAnQ3VycmVudCBtb2RlbCcsXG4gIGNmZ0J0bjogJ01vZGVsIGNvbmZpZycsXG4gIG1pbmk6ICdNaW5pbWl6ZSB0byBlbGYnLFxuICBjbGVhclRpdGxlOiAnQ2xlYXIgY2hhdCcsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb2RlbEZvbGxvdzogJ0ZvbGxvd2luZyBkZWZhdWx0JyxcbiAgbW9kZWxTb3VyY2U6ICdNb2RlbCBzb3VyY2UnLFxuICBmb2xsb3c6ICdGb2xsb3cgc2Vzc2lvbiBkZWZhdWx0JyxcbiAgcHJvdmlkZXI6ICdQcm92aWRlcicsXG4gIGFwaUJhc2U6ICdBUEkgYmFzZSBVUkwnLFxuICBhcGlLZXk6ICdBUEkgS2V5JyxcbiAgbW9kZWw6ICdNb2RlbCcsXG4gIHJlYXNvbmluZzogJ3JlYXNvbmluZycsXG4gIG1vZGVsUGg6ICdlLmcuIGRlZXBzZWVrLWNoYXQnLFxuICBlZmZvcnRQaDogJ09wdGlvbmFsOiBoaWdoIC8gbWVkaXVtIC8gbG93JyxcbiAgY2ZnSGludDogJ0luIGN1c3RvbSBtb2RlIHRoZSBlbGYgY2FsbHMgdGhpcyBBUEkgZGlyZWN0bHkgKGFuIE9wZW5BSS1jb21wYXRpYmxlIC9jaGF0L2NvbXBsZXRpb25zIHN0cmVhbWluZyBlbmRwb2ludCkuIFRha2VzIGVmZmVjdCBhZnRlciB1bmNoZWNraW5nIFwiRm9sbG93IHNlc3Npb24gZGVmYXVsdFwiLicsXG4gIGlucHV0UGg6ICdBc2sgdGhlIGVsZiBzb21ldGhpbmdcdTIwMjYnLFxuICBlbXB0eTogJ0hhdmUgYSBxdWljayBjaGF0IHdpdGggdGhlIGVsZiBcdTI3MjggKG5vdCBzYXZlZCB0byBzZXNzaW9uIGhpc3RvcnkpJyxcbiAgY29weTogJ0NvcHknLFxuICBuZWVkQ3VzdG9tQ2ZnOiAnRmlsbCBpbiB0aGUgQVBJIGJhc2UgVVJMLCBBUEkgS2V5IGFuZCBtb2RlbCBmaXJzdCcsXG4gIGhvc3RGYWlsOiAnRWxmIGhvc3QgcmVxdWVzdCBmYWlsZWQgKHswfSknLFxuICByZXFGYWlsZWQ6ICdSZXF1ZXN0IGZhaWxlZCcsXG4gIGNoYXRFbmRlZDogJ0NoYXQgZW5kZWQnLFxuICBwcmVzZXREZWVwc2VlazogJ0RlZXBTZWVrJyxcbiAgcHJlc2V0T3BlbmFpOiAnT3BlbkFJJyxcbiAgcHJlc2V0TW9vbnNob3Q6ICdNb29uc2hvdCBLaW1pJyxcbiAgcHJlc2V0WmhpcHU6ICdaaGlwdSBHTE0nLFxuICBwcmVzZXRRd2VuOiAnUXdlbicsXG4gIHByZXNldEN1c3RvbTogJ0N1c3RvbScsXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsbUJBQWtCOzs7QUNMWCxJQUFNLEtBQUs7QUFFWCxJQUFNLEtBQUs7QUFBQSxFQUNoQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxpQkFBaUI7QUFBQSxFQUNqQixRQUFRO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixlQUFlO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxnQkFBZ0I7QUFBQSxFQUNoQixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQ2hCO0FBRU8sSUFBTSxLQUFLO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsaUJBQWlCO0FBQUEsRUFDakIsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsZ0JBQWdCO0FBQUEsRUFDaEIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUNoQjs7O0FENURBLElBQU0sYUFBYTtBQUVuQixlQUFlLFNBQVMsUUFBUSxNQUFNO0FBQ3BDLFFBQU0sV0FBVyxNQUFNLE1BQU0sR0FBRyxVQUFVLElBQUksbUJBQW1CLE1BQU0sQ0FBQyxJQUFJO0FBQUEsSUFDMUUsUUFBUTtBQUFBLElBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxJQUM5QyxNQUFNLEtBQUssVUFBVSxRQUFRLENBQUMsQ0FBQztBQUFBLEVBQ2pDLENBQUM7QUFDRCxRQUFNLFVBQVUsTUFBTSxTQUFTLEtBQUssRUFBRSxNQUFNLE1BQU0sSUFBSTtBQUN0RCxNQUFJLENBQUMsU0FBUyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSTtBQUMzQyxVQUFNLElBQUksTUFBTyxXQUFXLFFBQVEsU0FBVSxHQUFHLFNBQVMsUUFBUSxPQUFPLE9BQU8sU0FBUyxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQ25HO0FBQ0EsU0FBTyxRQUFRO0FBQ2pCO0FBRUEsSUFBTSxTQUFTO0FBQUEsRUFDYixRQUFRLENBQUMsU0FBUyxRQUFRO0FBQUEsRUFDMUIsTUFBTSxLQUFLO0FBQ1QsVUFBTSxTQUFTLElBQUk7QUFDbkIsVUFBTSxJQUFJLFNBQVMsT0FBTyxLQUFLLEVBQUUsSUFBSTtBQUNyQyxRQUFJLFFBQVE7QUFDVixVQUFJLE9BQU8sTUFBTSxPQUFPLFNBQVMsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsdUJBQXVCO0FBQUEsSUFDM0U7QUFDQSxhQUFTLGNBQWM7QUFDckIsWUFBTSxTQUFTLFNBQVMsT0FBTyxPQUFPLFlBQVksRUFBRSxNQUFNLElBQUksT0FBTyxTQUFTLGdCQUFnQixRQUFRLFVBQVUsWUFBWSxJQUFJO0FBQ2hJLGFBQU8sT0FBTyxZQUFZLEVBQUUsV0FBVyxJQUFJLElBQUksT0FBTztBQUFBLElBQ3hEO0FBT0EsVUFBTSxTQUFTO0FBQUEsTUFDYixPQUFPLEtBQUs7QUFDVixjQUFNLFdBQVc7QUFDakIsWUFBSSxTQUFTLGNBQWMsUUFBUSxFQUFHO0FBQ3RDLGNBQU0sTUFBTSxTQUFTLGNBQWMsT0FBTztBQUMxQyxZQUFJLFFBQVEsU0FBUztBQUNyQixZQUFJLFFBQVEsWUFBWTtBQUN4QixZQUFJLGNBQWM7QUFDbEIsaUJBQVMsS0FBSyxZQUFZLEdBQUc7QUFDN0IsWUFBSSxPQUFPLE1BQU0sTUFBTSxJQUFJLE9BQU8sR0FBRyxpQkFBaUI7QUFBQSxNQUN4RDtBQUFBLElBQ0Y7QUFJQSxVQUFNLGFBQWE7QUFBQSxNQUNqQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFDQSxVQUFNLFVBQVUsV0FBVyxLQUFLLEVBQUU7QUFDbEMsVUFBTSxXQUFXO0FBR2pCLFVBQU0sVUFBVTtBQUFBLE1BQ2QsRUFBRSxJQUFJLFlBQVksVUFBVSxrQkFBa0IsTUFBTSw4QkFBOEI7QUFBQSxNQUNsRixFQUFFLElBQUksVUFBVSxVQUFVLGdCQUFnQixNQUFNLDRCQUE0QjtBQUFBLE1BQzVFLEVBQUUsSUFBSSxZQUFZLFVBQVUsa0JBQWtCLE1BQU0sNkJBQTZCO0FBQUEsTUFDakYsRUFBRSxJQUFJLFNBQVMsVUFBVSxlQUFlLE1BQU0sdUNBQXVDO0FBQUEsTUFDckYsRUFBRSxJQUFJLFFBQVEsVUFBVSxjQUFjLE1BQU0sb0RBQW9EO0FBQUEsTUFDaEcsRUFBRSxJQUFJLFVBQVUsVUFBVSxnQkFBZ0IsTUFBTSxHQUFHO0FBQUEsSUFDckQ7QUFHQSxXQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FxRWpCO0FBS0csYUFBUyxVQUFVLE9BQU87QUFDeEIsWUFBTSxRQUFRLE1BQU07QUFDcEIsWUFBTSxNQUFNLE1BQU0sT0FBTztBQUN6QixZQUFNLE9BQU8sQ0FBQztBQUNkLFVBQUksQ0FBQyxPQUFPO0FBQ1YsYUFBSyxLQUFLLGFBQUFBLFFBQU07QUFBQSxVQUFjO0FBQUEsVUFBUSxFQUFFLEtBQUssT0FBTztBQUFBLFVBQ2xELGFBQUFBLFFBQU07QUFBQSxZQUFjO0FBQUEsWUFBa0IsRUFBRSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJO0FBQUEsWUFDbEYsYUFBQUEsUUFBTSxjQUFjLFFBQVEsRUFBRSxRQUFRLE1BQU0sV0FBVyxVQUFVLENBQUM7QUFBQSxZQUNsRSxhQUFBQSxRQUFNLGNBQWMsUUFBUSxFQUFFLFFBQVEsT0FBTyxXQUFXLFVBQVUsQ0FBQztBQUFBLFlBQ25FLGFBQUFBLFFBQU0sY0FBYyxRQUFRLEVBQUUsUUFBUSxRQUFRLFdBQVcsVUFBVSxDQUFDO0FBQUEsVUFDdEU7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQ0EsWUFBTSxNQUFNLG1CQUFtQixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFDN0QsYUFBTyxhQUFBQSxRQUFNO0FBQUEsUUFBYztBQUFBLFFBQU87QUFBQSxVQUNoQyxTQUFTO0FBQUEsVUFDVCxPQUFPLE1BQU0sUUFBUTtBQUFBLFVBQ3JCLFFBQVEsTUFBTSxRQUFRO0FBQUEsVUFDdEIscUJBQXFCO0FBQUEsVUFDckIsZUFBZTtBQUFBLFVBQ2YsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUFHO0FBQUEsUUFDRCxhQUFBQSxRQUFNLGNBQWMsUUFBUTtBQUFBLFVBQzFCLEdBQUc7QUFBQSxVQUNILE1BQU0sUUFBUSxZQUFZLFVBQVUsTUFBTTtBQUFBLFVBQzFDLGFBQWEsUUFBUyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBUTtBQUFBLFFBQ3hFLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUdBLGFBQVMsT0FBTyxLQUFLO0FBQUUsYUFBTyxJQUFJLElBQUksU0FBUyxDQUFDO0FBQUEsSUFBRztBQUNuRCxhQUFTLE1BQU0sR0FBRyxJQUFJLElBQUk7QUFBRSxhQUFPLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLO0FBQUEsSUFBRztBQUdsRSxRQUFJLGdCQUFnQjtBQUVwQixhQUFTLFNBQVM7QUFDaEIsWUFBTSxPQUFPLGFBQUFBLFFBQU07QUFBQSxRQUNqQixDQUFDLE9BQVEsU0FBUyxPQUFPLFVBQVUsRUFBRSxJQUFJLE1BQU07QUFBQSxRQUFDO0FBQUEsUUFDaEQsTUFBTSxZQUFZO0FBQUEsTUFDcEI7QUFDQSxZQUFNLElBQUksU0FBUyxPQUFPLEtBQUs7QUFDL0IsWUFBTSxDQUFDLE1BQU0sT0FBTyxJQUFJLGFBQUFBLFFBQU0sU0FBUyxLQUFLO0FBQzVDLFlBQU0sQ0FBQyxNQUFNLE9BQU8sSUFBSSxhQUFBQSxRQUFNLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLFlBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSSxhQUFBQSxRQUFNLFNBQVMsRUFBRTtBQUMzQyxZQUFNLENBQUMsTUFBTSxPQUFPLElBQUksYUFBQUEsUUFBTSxTQUFTLEtBQUs7QUFDNUMsWUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJLGFBQUFBLFFBQU0sU0FBUyxLQUFLO0FBRWxELFlBQU0sQ0FBQyxLQUFLLE1BQU0sSUFBSSxhQUFBQSxRQUFNLFNBQVMsSUFBSTtBQUN6QyxZQUFNLENBQUMsU0FBUyxVQUFVLElBQUksYUFBQUEsUUFBTSxTQUFTLElBQUk7QUFDakQsWUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJLGFBQUFBLFFBQU0sU0FBUyxJQUFJO0FBQy9DLFlBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSSxhQUFBQSxRQUFNLFNBQVMsSUFBSTtBQUMvQyxZQUFNLENBQUMsTUFBTSxPQUFPLElBQUksYUFBQUEsUUFBTSxTQUFTLElBQUk7QUFDM0MsWUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJLGFBQUFBLFFBQU0sU0FBUyxJQUFJO0FBRy9DLG1CQUFBQSxRQUFNLFVBQVUsTUFBTTtBQUNwQixZQUFJO0FBQ0YsZ0JBQU0sTUFBTSxhQUFhLFFBQVEsY0FBYztBQUMvQyxjQUFJLEtBQUs7QUFDUCxrQkFBTSxRQUFRLEtBQUssTUFBTSxHQUFHO0FBQzVCLGdCQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUcsU0FBUSxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUM7QUFBQSxVQUNuRTtBQUFBLFFBQ0YsU0FBUyxHQUFHO0FBQUEsUUFBZTtBQUMzQixZQUFJO0FBQ0YsZ0JBQU0sTUFBTSxhQUFhLFFBQVEsYUFBYTtBQUM5QyxnQkFBTSxNQUFNLEVBQUUsUUFBUSxNQUFNLFVBQVUsWUFBWSxNQUFNLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxJQUFJLE9BQU8sSUFBSSxRQUFRLEdBQUc7QUFDM0csY0FBSSxLQUFLO0FBQUUsa0JBQU0sUUFBUSxLQUFLLE1BQU0sR0FBRztBQUFHLG1CQUFPLE9BQU8sT0FBTyxLQUFLLEtBQUssQ0FBQztBQUFBLFVBQUcsTUFDeEUsUUFBTyxHQUFHO0FBQUEsUUFDakIsU0FBUyxHQUFHO0FBQUUsaUJBQU8sRUFBRSxRQUFRLE1BQU0sVUFBVSxZQUFZLE1BQU0sUUFBUSxDQUFDLEVBQUUsTUFBTSxRQUFRLElBQUksT0FBTyxJQUFJLFFBQVEsR0FBRyxDQUFDO0FBQUEsUUFBRztBQUN4SCxZQUFJO0FBQ0YsZ0JBQU0sTUFBTSxhQUFhLFFBQVEsYUFBYTtBQUM5QyxjQUFJLElBQUssV0FBVSxLQUFLLE1BQU0sR0FBRyxDQUFDO0FBQUEsUUFDcEMsU0FBUyxHQUFHO0FBQUEsUUFBZTtBQUMzQixZQUFJO0FBQ0YsZ0JBQU0sTUFBTSxhQUFhLFFBQVEsYUFBYTtBQUM5QyxjQUFJLElBQUssV0FBVSxLQUFLLE1BQU0sR0FBRyxDQUFDO0FBQUEsUUFDcEMsU0FBUyxHQUFHO0FBQUEsUUFBZTtBQUMzQixZQUFJO0FBQ0YsZ0JBQU0sTUFBTSxhQUFhLFFBQVEsY0FBYztBQUMvQyxjQUFJLElBQUssU0FBUSxHQUFHO0FBQUEsUUFDdEIsU0FBUyxHQUFHO0FBQUEsUUFBZTtBQUMzQixpQkFBUyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU07QUFBRSxjQUFJLEtBQUssRUFBRSxVQUFXLFlBQVcsQ0FBQztBQUFBLFFBQUcsQ0FBQyxFQUFFLE1BQU0sTUFBTTtBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQ3ZHLEdBQUcsQ0FBQyxDQUFDO0FBRUwsbUJBQUFBLFFBQU0sVUFBVSxNQUFNO0FBQUUsWUFBSTtBQUFFLHVCQUFhLFFBQVEsZ0JBQWdCLEtBQUssVUFBVSxJQUFJLENBQUM7QUFBQSxRQUFHLFNBQVMsR0FBRztBQUFBLFFBQUM7QUFBQSxNQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDbEgsbUJBQUFBLFFBQU0sVUFBVSxNQUFNO0FBQUUsWUFBSSxLQUFLO0FBQUUsY0FBSTtBQUFFLHlCQUFhLFFBQVEsZUFBZSxLQUFLLFVBQVUsR0FBRyxDQUFDO0FBQUEsVUFBRyxTQUFTLEdBQUc7QUFBQSxVQUFDO0FBQUEsUUFBRTtBQUFBLE1BQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUc1SCxtQkFBQUEsUUFBTSxVQUFVLE1BQU07QUFBRSxZQUFJO0FBQUUsdUJBQWEsUUFBUSxnQkFBZ0IsSUFBSTtBQUFBLFFBQUcsU0FBUyxHQUFHO0FBQUEsUUFBQztBQUFBLE1BQUUsR0FBRyxDQUFDLElBQUksQ0FBQztBQUdsRyxVQUFJLFdBQVc7QUFDZixVQUFJLEtBQUs7QUFDUCxZQUFJLENBQUMsSUFBSSxVQUFVLElBQUksTUFBTyxhQUFZLElBQUksUUFBUSxVQUFVLFFBQVEsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxTQUFTLFdBQVEsSUFBSSxTQUFTO0FBQUEsaUJBQ3hKLFFBQVMsWUFBVyxRQUFRLFdBQVcsTUFBTSxRQUFRO0FBQUEsWUFDekQsWUFBVyxFQUFFO0FBQUEsTUFDcEI7QUFJQSxtQkFBQUEsUUFBTSxVQUFVLE1BQU07QUFDcEIsWUFBSSxTQUFTLE1BQU8sUUFBTztBQUMzQixZQUFJQyxLQUFJLEtBQUssT0FBTyxJQUFJO0FBQ3hCLGNBQU0sS0FBSyxPQUFPLFlBQVksTUFBTTtBQUNsQyxjQUFJLEtBQU07QUFDVixVQUFBQSxNQUFLO0FBQ0wsZ0JBQU0sS0FBSyxPQUFPLGNBQWM7QUFDaEMsZ0JBQU0sS0FBSyxPQUFPLGVBQWU7QUFDakMsZ0JBQU0sT0FBTztBQUViLGdCQUFNLEtBQUssU0FBUyxPQUFPLElBQUssS0FBSyxPQUFPO0FBQzVDLGdCQUFNLEtBQUssU0FBUyxPQUFPLElBQUssS0FBSyxPQUFPO0FBQzVDLGdCQUFNLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO0FBQy9CLGdCQUFNLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO0FBQy9CLGdCQUFNLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSUEsRUFBQyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sQ0FBQztBQUN2RCxnQkFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUlBLEtBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sQ0FBQztBQUM3RCxvQkFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQUEsUUFDcEIsR0FBRyxHQUFHO0FBQ04sZUFBTyxNQUFNLE9BQU8sY0FBYyxFQUFFO0FBQUEsTUFFdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUdqQixtQkFBQUQsUUFBTSxVQUFVLE1BQU07QUFDcEIsWUFBSSxDQUFDLEtBQU0sUUFBTztBQUNsQixjQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ3BCLDBCQUFnQjtBQUNoQixnQkFBTSxLQUFLLE9BQU8sY0FBYztBQUNoQyxnQkFBTSxLQUFLLE9BQU8sZUFBZTtBQUNqQyxjQUFJLEtBQUssU0FBUyxPQUFPO0FBQ3ZCLGtCQUFNLE9BQU87QUFDYixzQkFBVTtBQUFBLGNBQ1IsR0FBRyxNQUFNLEVBQUUsVUFBVSxLQUFLLElBQUksR0FBRyxLQUFLLE9BQU8sQ0FBQztBQUFBLGNBQzlDLEdBQUcsTUFBTSxFQUFFLFVBQVUsS0FBSyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUM7QUFBQSxZQUNoRCxDQUFDO0FBQUEsVUFDSCxPQUFPO0FBQ0wsa0JBQU0sSUFBSTtBQUNWLGtCQUFNLElBQUk7QUFDVixzQkFBVTtBQUFBLGNBQ1IsR0FBRyxNQUFNLEVBQUUsVUFBVSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLGNBQzNDLEdBQUcsTUFBTSxFQUFFLFVBQVUsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFBQSxZQUM3QyxDQUFDO0FBQUEsVUFDSDtBQUFBLFFBQ0Y7QUFDQSxjQUFNLE9BQU8sQ0FBQyxNQUFNO0FBQ2xCLGtCQUFRLElBQUk7QUFFWixnQkFBTSxLQUFLLE9BQU8sY0FBYztBQUNoQyxnQkFBTSxLQUFLLE9BQU8sZUFBZTtBQUNqQyxjQUFJLEtBQUssU0FBUyxPQUFPO0FBQ3ZCLGtCQUFNLE9BQU87QUFDYixrQkFBTSxJQUFJLE1BQU0sRUFBRSxVQUFVLEtBQUssSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDO0FBQ3JELGtCQUFNLElBQUksTUFBTSxFQUFFLFVBQVUsS0FBSyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUM7QUFDckQsc0JBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNsQixnQkFBSTtBQUFFLDJCQUFhLFFBQVEsZUFBZSxLQUFLLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsWUFBRyxTQUFTLEtBQUs7QUFBQSxZQUFDO0FBQUEsVUFDdEYsT0FBTztBQUNMLGtCQUFNLElBQUk7QUFDVixrQkFBTSxJQUFJO0FBQ1Ysa0JBQU0sSUFBSSxNQUFNLEVBQUUsVUFBVSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUNsRCxrQkFBTSxJQUFJLE1BQU0sRUFBRSxVQUFVLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQ2xELHNCQUFVLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDbEIsZ0JBQUk7QUFBRSwyQkFBYSxRQUFRLGVBQWUsS0FBSyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLFlBQUcsU0FBUyxLQUFLO0FBQUEsWUFBQztBQUFBLFVBQ3RGO0FBQUEsUUFDRjtBQUNBLFlBQUksT0FBTyxrQkFBa0I7QUFDM0IsaUJBQU8saUJBQWlCLGVBQWUsTUFBTTtBQUM3QyxpQkFBTyxpQkFBaUIsYUFBYSxJQUFJO0FBQ3pDLGlCQUFPLE1BQU07QUFDWCxtQkFBTyxvQkFBb0IsZUFBZSxNQUFNO0FBQ2hELG1CQUFPLG9CQUFvQixhQUFhLElBQUk7QUFBQSxVQUM5QztBQUFBLFFBQ0Y7QUFDQSxlQUFPO0FBQUEsTUFFVCxHQUFHLENBQUMsSUFBSSxDQUFDO0FBRVQsWUFBTSxlQUFlLENBQUMsTUFBTTtBQUMxQixZQUFJLFNBQVMsTUFBTztBQUNwQixZQUFJLEVBQUUsV0FBVyxVQUFhLEVBQUUsV0FBVyxFQUFHO0FBQzlDLHdCQUFnQjtBQUNoQixjQUFNLE9BQU8sRUFBRSxjQUFjLHNCQUFzQjtBQUNuRCxnQkFBUSxFQUFFLE1BQU0sT0FBTyxJQUFJLEVBQUUsVUFBVSxLQUFLLE1BQU0sSUFBSSxFQUFFLFVBQVUsS0FBSyxJQUFJLENBQUM7QUFDNUUsWUFBSSxFQUFFLGVBQWdCLEdBQUUsZUFBZTtBQUFBLE1BQ3pDO0FBQ0EsWUFBTSxlQUFlLENBQUMsTUFBTTtBQUMxQixZQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sV0FBVyxFQUFFLE9BQU8sUUFBUSxrQ0FBa0MsRUFBRztBQUMxRixjQUFNLE9BQU8sRUFBRSxjQUFjLHNCQUFzQjtBQUNuRCxnQkFBUSxFQUFFLE1BQU0sT0FBTyxJQUFJLEVBQUUsVUFBVSxLQUFLLE1BQU0sSUFBSSxFQUFFLFVBQVUsS0FBSyxJQUFJLENBQUM7QUFDNUUsWUFBSSxFQUFFLGVBQWdCLEdBQUUsZUFBZTtBQUFBLE1BQ3pDO0FBR0EsbUJBQUFBLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLFlBQUksQ0FBQyxPQUFRLFFBQU87QUFDcEIsWUFBSSxVQUFVO0FBQ2QsY0FBTSxXQUFXLFlBQVk7QUFDM0IsY0FBSSxRQUFTO0FBQ2IsY0FBSTtBQUNGLGtCQUFNLElBQUksTUFBTSxTQUFTLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztBQUNwRCxnQkFBSSxRQUFTO0FBQ2IsZ0JBQUksS0FBSyxFQUFFLElBQUk7QUFDYixzQkFBUSxDQUFDLFNBQVM7QUFDaEIsc0JBQU0sT0FBTyxLQUFLLE1BQU07QUFDeEIsc0JBQU0sT0FBTyxPQUFPLElBQUk7QUFDeEIsb0JBQUksUUFBUSxLQUFLLFNBQVMsZUFBZSxLQUFLLFNBQVM7QUFDckQsc0JBQUksRUFBRSxNQUFPLE1BQUssS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sYUFBYSxNQUFNLElBQUksU0FBUyxPQUFPLE9BQU8sRUFBRSxNQUFNO0FBQUEsc0JBQzlGLE1BQUssS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sYUFBYSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUMsRUFBRSxLQUFLO0FBQUEsZ0JBQ25GO0FBQ0EsdUJBQU87QUFBQSxjQUNULENBQUM7QUFDRCxrQkFBSSxFQUFFLE1BQU07QUFDViwwQkFBVTtBQUNWLHdCQUFRLEtBQUs7QUFDYiwwQkFBVSxJQUFJO0FBQ2Qsb0JBQUk7QUFBRSwyQkFBUyxrQkFBa0IsRUFBRSxPQUFPLENBQUM7QUFBQSxnQkFBRyxTQUFTLEdBQUc7QUFBQSxnQkFBQztBQUFBLGNBQzdEO0FBQUEsWUFDRixPQUFPO0FBQ0wsd0JBQVU7QUFDVixzQkFBUSxLQUFLO0FBQ2Isd0JBQVUsSUFBSTtBQUNkLHNCQUFRLENBQUMsU0FBUztBQUNoQixzQkFBTSxPQUFPLEtBQUssTUFBTTtBQUN4QixzQkFBTSxPQUFPLE9BQU8sSUFBSTtBQUN4QixvQkFBSSxRQUFRLEtBQUssU0FBUyxlQUFlLEtBQUssUUFBUyxNQUFLLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLGFBQWEsTUFBTSxJQUFJLFNBQVMsT0FBTyxPQUFRLEtBQUssRUFBRSxTQUFVLEVBQUUsVUFBVTtBQUNuSyx1QkFBTztBQUFBLGNBQ1QsQ0FBQztBQUFBLFlBQ0g7QUFBQSxVQUNGLFNBQVMsS0FBSztBQUNaLGdCQUFJLENBQUMsU0FBUztBQUNaLHdCQUFVO0FBQ1Ysc0JBQVEsS0FBSztBQUNiLHdCQUFVLElBQUk7QUFDZCxzQkFBUSxDQUFDLFNBQVM7QUFDaEIsc0JBQU0sT0FBTyxLQUFLLE1BQU07QUFDeEIsc0JBQU0sT0FBTyxPQUFPLElBQUk7QUFDeEIsb0JBQUksUUFBUSxLQUFLLFNBQVMsZUFBZSxLQUFLLFFBQVMsTUFBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxhQUFhLE1BQU0sSUFBSSxTQUFTLE9BQU8sT0FBTyxPQUFRLE9BQU8sSUFBSSxXQUFZLEdBQUcsRUFBRTtBQUN6Syx1QkFBTztBQUFBLGNBQ1QsQ0FBQztBQUFBLFlBQ0g7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUVBLGNBQU0sUUFBUSxPQUFPLFdBQVcsVUFBVSxDQUFDO0FBQzNDLGNBQU0sV0FBVyxPQUFPLFlBQVksVUFBVSxFQUFFO0FBQ2hELGVBQU8sTUFBTTtBQUFFLG9CQUFVO0FBQU0saUJBQU8sYUFBYSxLQUFLO0FBQUcsaUJBQU8sY0FBYyxRQUFRO0FBQUEsUUFBRztBQUFBLE1BQzdGLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFHWCxZQUFNLE9BQU8sTUFBTTtBQUNqQixjQUFNLE9BQU8sTUFBTSxLQUFLO0FBQ3hCLFlBQUksQ0FBQyxRQUFRLEtBQU07QUFDbkIsY0FBTSxPQUFPLEtBQUssT0FBTyxDQUFDLEVBQUUsTUFBTSxRQUFRLEtBQUssR0FBRyxFQUFFLE1BQU0sYUFBYSxNQUFNLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQztBQUNqRyxnQkFBUSxJQUFJO0FBQ1osaUJBQVMsRUFBRTtBQUNYLGdCQUFRLElBQUk7QUFFWixjQUFNLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxFQUFFLEtBQUssRUFBRTtBQUV2RixZQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVE7QUFFdEIsZ0JBQU0sUUFBUSxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUUsUUFBUSxRQUFRLEVBQUU7QUFDdkQsZ0JBQU0sU0FBUyxJQUFJLFNBQVMsSUFBSSxLQUFLO0FBQ3JDLGNBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUTtBQUNsQyxvQkFBUSxLQUFLO0FBQ2Isb0JBQVEsQ0FBQyxTQUFTO0FBQ2hCLG9CQUFNLE9BQU8sS0FBSyxNQUFNO0FBQ3hCLG9CQUFNLE9BQU8sT0FBTyxJQUFJO0FBQ3hCLGtCQUFJLFFBQVEsS0FBSyxTQUFTLGVBQWUsS0FBSyxRQUFTLE1BQUssS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sYUFBYSxNQUFNLElBQUksU0FBUyxPQUFPLE9BQU8sRUFBRSxjQUFjO0FBQ3JKLHFCQUFPO0FBQUEsWUFDVCxDQUFDO0FBQ0Q7QUFBQSxVQUNGO0FBQ0EsZ0JBQU0sYUFBYSxPQUFPLG9CQUFvQixjQUFjLElBQUksZ0JBQWdCLElBQUk7QUFDcEYsZ0JBQU0sTUFBTSxPQUFPO0FBQ25CLGdCQUFNLE9BQU8sRUFBRSxPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxRQUFRLEtBQUs7QUFDbkcsY0FBSSxJQUFJLE9BQVEsTUFBSyxtQkFBbUIsSUFBSTtBQUU1QyxnQkFBTSxLQUFLO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixTQUFTO0FBQUEsY0FDUCxnQkFBZ0I7QUFBQSxjQUNoQixpQkFBaUIsYUFBYSxJQUFJLFVBQVUsSUFBSSxLQUFLO0FBQUEsWUFDdkQ7QUFBQSxZQUNBLE1BQU0sS0FBSyxVQUFVLElBQUk7QUFBQSxZQUN6QixRQUFRLGFBQWEsV0FBVyxTQUFTO0FBQUEsVUFDM0MsQ0FBQyxFQUFFLEtBQUssT0FBTyxRQUFRO0FBQ3JCLGdCQUFJLENBQUMsSUFBSSxJQUFJO0FBQ1gsa0JBQUksTUFBTSxVQUFVLElBQUk7QUFDeEIsa0JBQUk7QUFBRSxzQkFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLO0FBQUcsb0JBQUksS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVMsT0FBTSxFQUFFLE1BQU07QUFBQSxjQUFTLFNBQVMsR0FBRztBQUFBLGNBQUM7QUFDM0csb0JBQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxZQUNyQjtBQUNBLGdCQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVc7QUFFcEMsb0JBQU0sSUFBSSxNQUFNLElBQUksS0FBSztBQUN6QixvQkFBTUMsS0FBSyxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFFBQVEsV0FBWTtBQUN0RyxzQkFBUSxDQUFDLFNBQVM7QUFDaEIsc0JBQU0sT0FBTyxLQUFLLE1BQU07QUFDeEIsc0JBQU0sT0FBTyxPQUFPLElBQUk7QUFDeEIsb0JBQUksUUFBUSxLQUFLLFNBQVMsZUFBZSxLQUFLLFFBQVMsTUFBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxhQUFhLE1BQU1BLElBQUcsU0FBUyxNQUFNO0FBQzVILHVCQUFPO0FBQUEsY0FDVCxDQUFDO0FBQ0Q7QUFBQSxZQUNGO0FBQ0Esa0JBQU0sU0FBUyxJQUFJLEtBQUssVUFBVTtBQUNsQyxrQkFBTSxVQUFVLElBQUksWUFBWSxPQUFPO0FBQ3ZDLGdCQUFJLFNBQVM7QUFDYixnQkFBSSxNQUFNO0FBQ1YsdUJBQVM7QUFDUCxvQkFBTSxFQUFFLE1BQU0sTUFBTSxJQUFJLE1BQU0sT0FBTyxLQUFLO0FBQzFDLGtCQUFJLEtBQU07QUFDVix3QkFBVSxRQUFRLE9BQU8sT0FBTyxFQUFFLFFBQVEsS0FBSyxDQUFDO0FBQ2hELGtCQUFJO0FBQ0osc0JBQVEsS0FBSyxPQUFPLFFBQVEsSUFBSSxNQUFNLEdBQUc7QUFDdkMsc0JBQU0sT0FBTyxPQUFPLE1BQU0sR0FBRyxFQUFFLEVBQUUsS0FBSztBQUN0Qyx5QkFBUyxPQUFPLE1BQU0sS0FBSyxDQUFDO0FBQzVCLG9CQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsTUFBTSxJQUFLO0FBQzlCLG9CQUFJLENBQUMsS0FBSyxXQUFXLE9BQU8sRUFBRztBQUMvQixzQkFBTSxPQUFPLEtBQUssTUFBTSxDQUFDLEVBQUUsS0FBSztBQUNoQyxvQkFBSSxTQUFTLFVBQVU7QUFBRSwyQkFBUztBQUFJO0FBQUEsZ0JBQU87QUFDN0Msb0JBQUk7QUFDRix3QkFBTSxJQUFJLEtBQUssTUFBTSxJQUFJO0FBQ3pCLHdCQUFNLFFBQVEsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRSxNQUFNO0FBQ3pGLHNCQUFJLE9BQU8sVUFBVSxZQUFZLE9BQU87QUFDdEMsMkJBQU87QUFDUCw0QkFBUSxDQUFDLFNBQVM7QUFDaEIsNEJBQU0sT0FBTyxLQUFLLE1BQU07QUFDeEIsNEJBQU0sT0FBTyxPQUFPLElBQUk7QUFDeEIsMEJBQUksUUFBUSxLQUFLLFNBQVMsZUFBZSxLQUFLLFFBQVMsTUFBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxhQUFhLE1BQU0sS0FBSyxTQUFTLEtBQUs7QUFDN0gsNkJBQU87QUFBQSxvQkFDVCxDQUFDO0FBQUEsa0JBQ0g7QUFBQSxnQkFDRixTQUFTLEdBQUc7QUFBQSxnQkFBdUM7QUFBQSxjQUNyRDtBQUFBLFlBQ0Y7QUFDQSxvQkFBUSxDQUFDLFNBQVM7QUFDaEIsb0JBQU0sT0FBTyxLQUFLLE1BQU07QUFDeEIsb0JBQU0sT0FBTyxPQUFPLElBQUk7QUFDeEIsa0JBQUksUUFBUSxLQUFLLFNBQVMsZUFBZSxLQUFLLFFBQVMsTUFBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxhQUFhLE1BQU0sS0FBSyxTQUFTLE1BQU07QUFDOUgscUJBQU87QUFBQSxZQUNULENBQUM7QUFBQSxVQUNILENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUTtBQUNoQixvQkFBUSxLQUFLO0FBQ2Isb0JBQVEsQ0FBQyxTQUFTO0FBQ2hCLG9CQUFNLE9BQU8sS0FBSyxNQUFNO0FBQ3hCLG9CQUFNLE9BQU8sT0FBTyxJQUFJO0FBQ3hCLGtCQUFJLFFBQVEsS0FBSyxTQUFTLGVBQWUsS0FBSyxRQUFTLE1BQUssS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sYUFBYSxNQUFNLElBQUksU0FBUyxPQUFPLE9BQU8sT0FBUSxPQUFPLElBQUksV0FBWSxHQUFHLEVBQUU7QUFDeksscUJBQU87QUFBQSxZQUNULENBQUM7QUFBQSxVQUNILENBQUMsRUFBRSxLQUFLLE1BQU07QUFDWixvQkFBUSxLQUFLO0FBQUEsVUFDZixDQUFDO0FBQ0Q7QUFBQSxRQUNGO0FBR0EsY0FBTSxVQUFVLEVBQUUsVUFBVSxNQUFNLE1BQU0sU0FBUyxPQUFPLE9BQU8sS0FBSztBQUNwRSxpQkFBUyxrQkFBa0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQzlDLGNBQUksS0FBSyxFQUFFLElBQUk7QUFDYixzQkFBVSxFQUFFLE1BQU07QUFBQSxVQUNwQixPQUFPO0FBQ0wsb0JBQVEsS0FBSztBQUNiLG9CQUFRLENBQUMsU0FBUztBQUNoQixvQkFBTSxPQUFPLEtBQUssTUFBTTtBQUN4QixvQkFBTSxPQUFPLE9BQU8sSUFBSTtBQUN4QixrQkFBSSxRQUFRLEtBQUssU0FBUyxlQUFlLEtBQUssUUFBUyxNQUFLLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLGFBQWEsTUFBTSxJQUFJLFNBQVMsT0FBTyxPQUFRLEtBQUssRUFBRSxTQUFVLEVBQUUsVUFBVTtBQUNuSyxxQkFBTztBQUFBLFlBQ1QsQ0FBQztBQUFBLFVBQ0g7QUFBQSxRQUNGLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUTtBQUNoQixrQkFBUSxLQUFLO0FBQ2Isa0JBQVEsQ0FBQyxTQUFTO0FBQ2hCLGtCQUFNLE9BQU8sS0FBSyxNQUFNO0FBQ3hCLGtCQUFNLE9BQU8sT0FBTyxJQUFJO0FBQ3hCLGdCQUFJLFFBQVEsS0FBSyxTQUFTLGVBQWUsS0FBSyxRQUFTLE1BQUssS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sYUFBYSxNQUFNLElBQUksU0FBUyxPQUFPLE9BQU8sT0FBUSxPQUFPLElBQUksV0FBWSxHQUFHLEVBQUU7QUFDekssbUJBQU87QUFBQSxVQUNULENBQUM7QUFBQSxRQUNILENBQUM7QUFBQSxNQUNIO0FBRUEsWUFBTSxZQUFZLE1BQU07QUFDdEIsZ0JBQVEsQ0FBQyxDQUFDO0FBQ1YsZ0JBQVEsS0FBSztBQUNiLGtCQUFVLElBQUk7QUFBQSxNQUNoQjtBQUVBLFlBQU0sVUFBVSxDQUFDLE1BQU0sT0FBTztBQUM1QixjQUFNLE9BQU8sTUFBTTtBQUNqQixjQUFJLE1BQU0sR0FBRyxlQUFlO0FBQzFCLGtCQUFNLE1BQU0sR0FBRyxjQUFjO0FBQzdCLGVBQUcsY0FBYyxjQUFjO0FBQy9CLHVCQUFXLE1BQU07QUFBRSxrQkFBSSxHQUFHLGNBQWUsSUFBRyxjQUFjLGNBQWM7QUFBQSxZQUFLLEdBQUcsR0FBRztBQUFBLFVBQ3JGO0FBQUEsUUFDRjtBQUNBLFlBQUksYUFBYSxVQUFVLGFBQWEsVUFBVSxVQUFVLFdBQVc7QUFDckUsb0JBQVUsVUFBVSxVQUFVLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxNQUFNLE1BQU0sYUFBYSxNQUFNLElBQUksQ0FBQztBQUFBLFFBQ3JGLE9BQU87QUFDTCx1QkFBYSxNQUFNLElBQUk7QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFDQSxZQUFNLGVBQWUsQ0FBQyxNQUFNLFNBQVM7QUFDbkMsWUFBSTtBQUNGLGdCQUFNLEtBQUssU0FBUyxjQUFjLFVBQVU7QUFDNUMsYUFBRyxRQUFRO0FBQ1gsYUFBRyxNQUFNLFdBQVc7QUFDcEIsYUFBRyxNQUFNLFVBQVU7QUFDbkIsbUJBQVMsS0FBSyxZQUFZLEVBQUU7QUFDNUIsYUFBRyxPQUFPO0FBQ1YsbUJBQVMsWUFBWSxNQUFNO0FBQzNCLG1CQUFTLEtBQUssWUFBWSxFQUFFO0FBQzVCLGVBQUs7QUFBQSxRQUNQLFNBQVMsR0FBRztBQUFFLGVBQUs7QUFBQSxRQUFHO0FBQUEsTUFDeEI7QUFFQSxZQUFNLGFBQWEsQ0FBQyxNQUFNO0FBQ3hCLFlBQUksRUFBRSxRQUFRLFdBQVcsQ0FBQyxFQUFFLFVBQVU7QUFDcEMsWUFBRSxlQUFlO0FBQ2pCLGVBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUVBLFlBQU0sbUJBQW1CLENBQUMsTUFBTTtBQUM5QixjQUFNLEtBQUssRUFBRSxPQUFPO0FBQ3BCLGNBQU0sU0FBUyxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssUUFBUSxRQUFRLFNBQVMsQ0FBQztBQUM3RSxlQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLFVBQVUsSUFBSSxNQUFNLE9BQU8sS0FBSyxDQUFDLENBQUM7QUFBQSxNQUNwRTtBQUdBLFlBQU0sV0FBVyxTQUFTLEVBQUUsTUFBTSxPQUFPLElBQUksTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLE9BQU8sUUFBUSxRQUFRLE9BQU8sSUFBSSxFQUFFLE9BQU8sUUFBUSxRQUFRLE9BQU87QUFDM0ksWUFBTSxXQUFXLFNBQVMsRUFBRSxNQUFNLE9BQU8sSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLE1BQU0sT0FBTyxRQUFRLFFBQVEsT0FBTyxJQUFJLEVBQUUsT0FBTyxRQUFRLFFBQVEsT0FBTztBQUUzSSxZQUFNLFdBQVcsQ0FBQztBQUNoQixVQUFJLFNBQVMsT0FBTztBQUNsQixpQkFBUztBQUFBLFVBQ1AsYUFBQUQsUUFBTTtBQUFBLFlBQWM7QUFBQSxZQUFPO0FBQUEsY0FDekIsS0FBSztBQUFBLGNBQ0wsV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGNBQ1AsZUFBZTtBQUFBLGNBQ2YsU0FBUyxDQUFDLE1BQU07QUFBRSxzQkFBTSxRQUFRO0FBQWUsZ0NBQWdCO0FBQU8sb0JBQUksQ0FBQyxPQUFPO0FBQUUsMEJBQVEsTUFBTTtBQUFBLGdCQUFHO0FBQUEsY0FBRTtBQUFBLGNBQ3ZHLE9BQU8sRUFBRTtBQUFBLFlBQ1g7QUFBQSxZQUNFLGFBQUFBLFFBQU0sY0FBYyxXQUFXLEVBQUUsS0FBSyxTQUFTLE1BQU0sSUFBSSxLQUFLLG1CQUFtQixDQUFDO0FBQUEsVUFDcEY7QUFBQSxRQUNGO0FBQUEsTUFDRixPQUFPO0FBQ0wsY0FBTSxlQUFlO0FBQUEsVUFDbkIsYUFBQUEsUUFBTSxjQUFjLFdBQVcsRUFBRSxLQUFLLFNBQVMsTUFBTSxJQUFJLEtBQUssb0JBQW9CLENBQUM7QUFBQSxVQUNuRixhQUFBQSxRQUFNLGNBQWMsUUFBUSxFQUFFLEtBQUssU0FBUyxXQUFXLGdCQUFnQixHQUFHLEVBQUUsS0FBSztBQUFBLFVBQ2pGLGFBQUFBLFFBQU0sY0FBYyxRQUFRLEVBQUUsS0FBSyxTQUFTLFdBQVcsaUJBQWlCLE9BQU8sRUFBRSxnQkFBZ0IsR0FBRyxRQUFRO0FBQUEsVUFDNUcsYUFBQUEsUUFBTSxjQUFjLFFBQVEsRUFBRSxLQUFLLE1BQU0sV0FBVyxpQkFBaUIsQ0FBQztBQUFBLFVBQ3RFLGFBQUFBLFFBQU0sY0FBYyxVQUFVLEVBQUUsS0FBSyxPQUFPLFdBQVcsbUJBQW1CLE9BQU8sRUFBRSxRQUFRLFNBQVMsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsUUFBRztBQUFBLFVBQ3JJLGFBQUFBLFFBQU0sY0FBYyxVQUFVLEVBQUUsS0FBSyxPQUFPLFdBQVcsbUJBQW1CLE9BQU8sRUFBRSxNQUFNLFNBQVMsTUFBTSxRQUFRLEtBQUssRUFBRSxHQUFHLFFBQUc7QUFBQSxVQUM3SCxhQUFBQSxRQUFNLGNBQWMsVUFBVSxFQUFFLEtBQUssU0FBUyxXQUFXLGlCQUFpQixPQUFPLEVBQUUsWUFBWSxTQUFTLFdBQVcsVUFBVSxDQUFDLEtBQUssT0FBTyxHQUFHLEVBQUUsS0FBSztBQUFBLFFBQ3RKO0FBRUEsY0FBTSxjQUFjLENBQUM7QUFDckIsWUFBSSxLQUFLO0FBQ1AsZ0JBQU0sZ0JBQWdCLFFBQVEsSUFBSSxDQUFDLE1BQ2pDLGFBQUFBLFFBQU0sY0FBYyxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksT0FBTyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUUsc0JBQVk7QUFBQSxZQUNWLGFBQUFBLFFBQU07QUFBQSxjQUFjO0FBQUEsY0FBTyxFQUFFLEtBQUssTUFBTSxXQUFXLG9CQUFvQjtBQUFBLGNBQ3JFLGFBQUFBLFFBQU0sY0FBYyxTQUFTLE1BQU0sRUFBRSxXQUFXO0FBQUEsY0FDaEQsYUFBQUEsUUFBTTtBQUFBLGdCQUFjO0FBQUEsZ0JBQVMsRUFBRSxXQUFXLGlCQUFpQixLQUFLLFNBQVM7QUFBQSxnQkFDdkUsYUFBQUEsUUFBTSxjQUFjLFNBQVM7QUFBQSxrQkFDM0IsTUFBTTtBQUFBLGtCQUNOLFNBQVMsQ0FBQyxDQUFDLElBQUk7QUFBQSxrQkFDZixVQUFVLENBQUMsTUFBTSxPQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLFFBQVEsQ0FBQyxDQUFDO0FBQUEsZ0JBQzlFLENBQUM7QUFBQSxnQkFDRCxFQUFFO0FBQUEsY0FDSjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLGFBQUFBLFFBQU07QUFBQSxjQUFjO0FBQUEsY0FBTyxFQUFFLEtBQUssTUFBTSxXQUFXLG9CQUFvQjtBQUFBLGNBQ3JFLGFBQUFBLFFBQU0sY0FBYyxTQUFTLEVBQUUsU0FBUyxtQkFBbUIsR0FBRyxFQUFFLFFBQVE7QUFBQSxjQUN4RSxhQUFBQSxRQUFNLGNBQWMsVUFBVTtBQUFBLGdCQUM1QixJQUFJO0FBQUEsZ0JBQ0osT0FBTyxJQUFJO0FBQUEsZ0JBQ1gsVUFBVSxJQUFJO0FBQUEsZ0JBQ2QsVUFBVTtBQUFBLGNBQ1osR0FBRyxhQUFhO0FBQUEsWUFDbEI7QUFBQSxZQUNBLGFBQUFBLFFBQU07QUFBQSxjQUFjO0FBQUEsY0FBTyxFQUFFLEtBQUssTUFBTSxXQUFXLG9CQUFvQjtBQUFBLGNBQ3JFLGFBQUFBLFFBQU0sY0FBYyxTQUFTLEVBQUUsU0FBUyxlQUFlLEdBQUcsRUFBRSxPQUFPO0FBQUEsY0FDbkUsYUFBQUEsUUFBTSxjQUFjLFNBQVM7QUFBQSxnQkFDM0IsSUFBSTtBQUFBLGdCQUFnQixNQUFNO0FBQUEsZ0JBQVEsYUFBYTtBQUFBLGdCQUErQixPQUFPLElBQUk7QUFBQSxnQkFDekYsVUFBVSxJQUFJO0FBQUEsZ0JBQ2QsVUFBVSxDQUFDLE1BQU0sT0FBTyxPQUFPLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxNQUFNLENBQUMsQ0FBQztBQUFBLGNBQzFFLENBQUM7QUFBQSxZQUNIO0FBQUEsWUFDQSxhQUFBQSxRQUFNO0FBQUEsY0FBYztBQUFBLGNBQU8sRUFBRSxLQUFLLE1BQU0sV0FBVyxvQkFBb0I7QUFBQSxjQUNyRSxhQUFBQSxRQUFNLGNBQWMsU0FBUyxFQUFFLFNBQVMsY0FBYyxHQUFHLEVBQUUsTUFBTTtBQUFBLGNBQ2pFLGFBQUFBLFFBQU0sY0FBYyxTQUFTO0FBQUEsZ0JBQzNCLElBQUk7QUFBQSxnQkFBZSxNQUFNO0FBQUEsZ0JBQVksYUFBYTtBQUFBLGdCQUFRLE9BQU8sSUFBSTtBQUFBLGdCQUNyRSxVQUFVLElBQUk7QUFBQSxnQkFDZCxVQUFVLENBQUMsTUFBTSxPQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLE1BQU0sQ0FBQyxDQUFDO0FBQUEsY0FDNUUsQ0FBQztBQUFBLFlBQ0g7QUFBQSxZQUNBLGFBQUFBLFFBQU07QUFBQSxjQUFjO0FBQUEsY0FBTyxFQUFFLEtBQUssTUFBTSxXQUFXLG9CQUFvQjtBQUFBLGNBQ3JFLGFBQUFBLFFBQU0sY0FBYyxTQUFTLEVBQUUsU0FBUyxnQkFBZ0IsR0FBRyxFQUFFLEtBQUs7QUFBQSxjQUNsRSxhQUFBQSxRQUFNLGNBQWMsU0FBUztBQUFBLGdCQUMzQixJQUFJO0FBQUEsZ0JBQWlCLE1BQU07QUFBQSxnQkFBUSxhQUFhLEVBQUU7QUFBQSxnQkFBUyxPQUFPLElBQUk7QUFBQSxnQkFDdEUsVUFBVSxJQUFJO0FBQUEsZ0JBQ2QsVUFBVSxDQUFDLE1BQU0sT0FBTyxPQUFPLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUMsQ0FBQztBQUFBLGNBQzNFLENBQUM7QUFBQSxZQUNIO0FBQUEsWUFDQSxhQUFBQSxRQUFNO0FBQUEsY0FBYztBQUFBLGNBQU8sRUFBRSxLQUFLLE1BQU0sV0FBVyxvQkFBb0I7QUFBQSxjQUNyRSxhQUFBQSxRQUFNLGNBQWMsU0FBUyxFQUFFLFNBQVMsaUJBQWlCLEdBQUcsRUFBRSxTQUFTO0FBQUEsY0FDdkUsYUFBQUEsUUFBTSxjQUFjLFNBQVM7QUFBQSxnQkFDM0IsSUFBSTtBQUFBLGdCQUFrQixNQUFNO0FBQUEsZ0JBQVEsYUFBYSxFQUFFO0FBQUEsZ0JBQVUsT0FBTyxJQUFJO0FBQUEsZ0JBQ3hFLFVBQVUsSUFBSTtBQUFBLGdCQUNkLFVBQVUsQ0FBQyxNQUFNLE9BQU8sT0FBTyxPQUFPLENBQUMsR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sTUFBTSxDQUFDLENBQUM7QUFBQSxjQUM1RSxDQUFDO0FBQUEsWUFDSDtBQUFBLFlBQ0EsYUFBQUEsUUFBTTtBQUFBLGNBQWM7QUFBQSxjQUFPLEVBQUUsS0FBSyxRQUFRLFdBQVcsZUFBZTtBQUFBLGNBQ2xFLEVBQUU7QUFBQSxZQUNKO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLGNBQWMsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNO0FBQ3JDLGdCQUFNLE1BQU0sa0JBQWtCLEVBQUUsU0FBUyxTQUFTLFNBQVMsZ0JBQWdCLEVBQUUsUUFBUSxXQUFXO0FBQ2hHLGdCQUFNLFNBQVMsYUFBQUEsUUFBTTtBQUFBLFlBQWM7QUFBQSxZQUFRLEVBQUUsV0FBVyxpQkFBaUI7QUFBQSxZQUN2RSxhQUFBQSxRQUFNLGNBQWMsS0FBSyxJQUFJO0FBQUEsWUFBRyxhQUFBQSxRQUFNLGNBQWMsS0FBSyxJQUFJO0FBQUEsWUFBRyxhQUFBQSxRQUFNLGNBQWMsS0FBSyxJQUFJO0FBQUEsVUFBQztBQUNoRyxnQkFBTSxRQUFRLEVBQUUsVUFBVyxFQUFFLFFBQVEsU0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUTtBQUMvRSxpQkFBTyxhQUFBQSxRQUFNO0FBQUEsWUFBYztBQUFBLFlBQU8sRUFBRSxLQUFLLE1BQU0sR0FBRyxXQUFXLElBQUk7QUFBQSxZQUMvRDtBQUFBLFlBQ0MsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLGFBQUFBLFFBQU0sY0FBYyxVQUFVO0FBQUEsY0FDcEQsV0FBVztBQUFBLGNBQ1gsU0FBUyxDQUFDLE1BQU0sUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUFBLGNBQ2pDLE9BQU8sRUFBRTtBQUFBLFlBQ1gsR0FBRyxXQUFJLElBQUk7QUFBQSxVQUNiO0FBQUEsUUFDRixDQUFDO0FBQ0QsWUFBSSxDQUFDLEtBQUssUUFBUTtBQUNoQixzQkFBWSxLQUFLLGFBQUFBLFFBQU0sY0FBYyxPQUFPLEVBQUUsS0FBSyxTQUFTLFdBQVcseUJBQXlCLE9BQU8sRUFBRSxTQUFTLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUEsUUFDdkk7QUFFQSxpQkFBUztBQUFBLFVBQ1AsYUFBQUEsUUFBTTtBQUFBLFlBQWM7QUFBQSxZQUFPLEVBQUUsS0FBSyxPQUFPLFdBQVcsZUFBZSxPQUFPLFNBQVM7QUFBQSxZQUNqRixhQUFBQSxRQUFNO0FBQUEsY0FBYztBQUFBLGNBQU8sRUFBRSxLQUFLLFFBQVEsV0FBVyxnQkFBZ0IsZUFBZSxhQUFhO0FBQUEsY0FDL0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxhQUFBQSxRQUFNLGNBQWMsT0FBTyxFQUFFLEtBQUssT0FBTyxXQUFXLG9CQUFvQixVQUFVLFVBQVUsSUFBSSxHQUFHLFdBQVc7QUFBQSxZQUM5RyxhQUFBQSxRQUFNLGNBQWMsT0FBTyxFQUFFLEtBQUssUUFBUSxXQUFXLGVBQWUsR0FBRyxXQUFXO0FBQUEsWUFDbEYsYUFBQUEsUUFBTTtBQUFBLGNBQWM7QUFBQSxjQUFPLEVBQUUsS0FBSyxNQUFNLFdBQVcsbUJBQW1CO0FBQUEsY0FDcEUsYUFBQUEsUUFBTSxjQUFjLFlBQVk7QUFBQSxnQkFDOUIsV0FBVztBQUFBLGdCQUNYLE1BQU07QUFBQSxnQkFDTixhQUFhLEVBQUU7QUFBQSxnQkFDZixPQUFPO0FBQUEsZ0JBQ1AsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU8sS0FBSztBQUFBLGdCQUN4QyxXQUFXO0FBQUEsY0FDYixDQUFDO0FBQUEsY0FDRCxhQUFBQSxRQUFNLGNBQWMsVUFBVSxFQUFFLFdBQVcsZ0JBQWdCLFNBQVMsTUFBTSxVQUFVLFFBQVEsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxRQUFHO0FBQUEsWUFDMUg7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFFQSxhQUFPLGFBQUFBLFFBQU0sY0FBYyxPQUFPLEVBQUUsV0FBVyxlQUFlLEdBQUcsUUFBUTtBQUFBLElBQzdFO0FBR0EsUUFBSSxNQUFNLE9BQU8saUJBQWlCLE1BQU0sSUFBSSxNQUFNO0FBQUEsTUFDaEQsRUFBRSxNQUFNLGlCQUFpQixJQUFJLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTyxJQUFJLEVBQUUsTUFBTSxJQUFLLFlBQVksTUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQVEsUUFBUSxHQUFHO0FBQUEsTUFDNUksTUFBTSxhQUFBQSxRQUFNLGNBQWMsUUFBUSxJQUFJO0FBQUEsSUFDeEMsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVPLElBQU0sU0FBUyxPQUFPO0FBQ3RCLElBQU0sUUFBUSxPQUFPOyIsCiAgIm5hbWVzIjogWyJSZWFjdCIsICJ0Il0KfQo=

    return module.exports;
  }
});
