// 内容检查任务（只读，零依赖，失败退出码 1）
// 用途：npm run check / npm run build 前自动执行（prebuild），防止引流文案回潮、章节缺失。
//
// 检查项：
// 1. 引流域名黑名单 —— 不允许出现导向外部指南/评价站的链接
// 2. 引流措辞黑名单 —— 不允许出现"想看完整内容？去别处读完整版"式文案（简繁/英）
// 3. 代码块外裸写占位死链 —— 如 https://36kr.com/p/xxxxx（代码块内的示例模板不算）
// 4. 章节结构完整性 —— 各语言各板块导览页（含首页）列出的站内链接必须有对应页面且非空壳
// 5. config.ts —— 不得挂指向 github.com 根域的 socialLinks 占位
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "docs");

const BANNED_DOMAINS = ["workbuddy.homes", "doubaowork.homes", "watcha.cn"];
const BANNED_PHRASES = ["想看完整", "Want the Full Content", "Want the Full Version"];
const EMPTY_SHELL_BYTES = 200;

const errors = [];
const error = (msg) => errors.push(msg);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".vitepress" || name === "public" || name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

// ---------- 1/2/3：全文扫描 ----------
const mdFiles = walk(DOCS);
const configFiles = [
  join(DOCS, ".vitepress", "config.ts"),
  ...readdirSync(join(DOCS, ".vitepress", "i18n"))
    .filter((f) => f.endsWith(".ts"))
    .map((f) => join(DOCS, ".vitepress", "i18n", f)),
];

let scanned = 0;
for (const file of mdFiles) {
  scanned++;
  const rel = file.slice(ROOT.length + 1).replace(/\\/g, "/");
  scanLines(file, rel);
}
for (const file of configFiles) {
  if (existsSync(file)) scanLines(file, file.slice(ROOT.length + 1).replace(/\\/g, "/"));
}

function scanLines(file, rel) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  let inFence = false;
  lines.forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    for (const d of BANNED_DOMAINS) if (line.includes(d)) error(`${rel}:${i + 1} 引流域名 ${d}`);
    for (const p of BANNED_PHRASES) if (line.includes(p)) error(`${rel}:${i + 1} 引流措辞「${p}」`);
    if (!inFence) {
      // 去掉行内代码段后再查裸写的占位 URL，避免误伤提示词模板
      const bare = line.replace(/`[^`]*`/g, "");
      if (/(https?:\/\/[^\s)`<>"']*[xX]{5})/.test(bare)) error(`${rel}:${i + 1} 代码块外裸写占位链接`);
    }
  });
}

// ---------- 4：章节结构完整性 ----------
const langs = ["", "en/", "zh-tw/", "de/", "fr/"];
const sections = ["workbuddy", "traework", "qoderwork", "doubaowork", "qwenwork"];

function resolvePage(link) {
  const p = link.replace(/^\//, "");
  const candidates = p.endsWith("/")
    ? [join(DOCS, p, "index.md"), join(DOCS, `${p.slice(0, -1)}.md`)]
    : [join(DOCS, `${p}.md`), join(DOCS, p, "index.md")];
  for (const c of candidates) if (existsSync(c)) return c;
  if (existsSync(join(DOCS, "public", p))) return null; // 静态资产，不算页面
  return false;
}

let navLinks = 0;
for (const lang of langs) {
  const navPages = [
    join(DOCS, lang, "index.md"),
    ...sections.map((s) => join(DOCS, lang, s, "index.md")),
  ];
  for (const nav of navPages) {
    if (!existsSync(nav)) {
      error(`缺少导览页 ${nav.slice(ROOT.length + 1).replace(/\\/g, "/")}`);
      continue;
    }
    const rel = nav.slice(ROOT.length + 1).replace(/\\/g, "/");
    const content = readFileSync(nav, "utf8");
    const links = [...content.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1].split("#")[0]).filter(Boolean);
    for (const link of links) {
      if (/^(https?:|mailto:|tel:)/.test(link)) continue;
      navLinks++;
      const resolved = resolvePage(link);
      if (resolved === false) {
        error(`${rel}: 站内链接无对应页面 ${link}`);
      } else if (resolved && statSync(resolved).size < EMPTY_SHELL_BYTES) {
        error(`${rel}: 链接目标疑似空壳（<${EMPTY_SHELL_BYTES} 字节）${link}`);
      }
    }
  }
}

// ---------- 5：config.ts socialLinks 占位 ----------
const configTs = readFileSync(join(DOCS, ".vitepress", "config.ts"), "utf8");
configTs.split(/\r?\n/).forEach((line, i) => {
  if (line.includes("socialLinks") && line.includes('github.com/"')) {
    error(`docs/.vitepress/config.ts:${i + 1} socialLinks 指向 github.com 根域占位`);
  }
});

// ---------- 汇总 ----------
console.log(`扫描 ${scanned} 个 Markdown、${configFiles.length} 个配置文件，校验 ${navLinks} 个导览页站内链接`);
if (errors.length) {
  console.error(`\n内容检查未通过（${errors.length} 处）：`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("内容检查通过：无引流文案残留，章节结构完整");
