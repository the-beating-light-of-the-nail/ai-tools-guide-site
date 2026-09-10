<script setup lang="ts">
// 首页门户：布局与交互参考门户设计稿（摘要条 + 实时过滤 + 侧栏目录 + 分区卡片墙 + 内容溯源）。
// 数据全部来自 ./home-portal/data.ts（5 语言同构），语言按路由前缀自动识别；
// 仅首页挂载本组件，故页面级覆盖（导航渐变、页面底色）用 html:has(.home-portal) 限定作用域。
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vitepress";
import { homePortalData, type HpCard, type HpSection } from "./home-portal/data";

const route = useRoute();

const loc = computed<"zh" | "zh-tw" | "en" | "de" | "fr">(() => {
  const p = route.path;
  if (p.startsWith("/en/")) return "en";
  if (p.startsWith("/zh-tw/")) return "zh-tw";
  if (p.startsWith("/de/")) return "de";
  if (p.startsWith("/fr/")) return "fr";
  return "zh";
});

const d = computed(() => homePortalData[loc.value]);

const prefix = (link: string) => (loc.value === "zh" ? link : `/${loc.value}${link === "/" ? "/" : link}`);

/* ---------- 实时过滤 ---------- */
const query = ref("");
const q = computed(() => query.value.trim().toLowerCase());
const matches = (c: HpCard) =>
  !q.value || `${c.title} ${c.desc} ${c.badge ?? ""}`.toLowerCase().includes(q.value);
const visCount = (s: HpSection) => s.cards.filter(matches).length;
const hitCount = computed(() => d.value.sections.reduce((n, s) => n + visCount(s), 0));

/* ---------- 摘要条 chips（计数从数据推导，保持真实） ---------- */
const chips = computed(() => {
  const secs = d.value.sections;
  const platforms = secs.find((s) => s.id === "s-platforms")?.cards.length ?? 0;
  const total = secs.reduce((n, s) => n + s.cards.length, 0);
  const [c1, c2, c3, c4] = d.value.chips;
  return [c1, c2, c3, c4].map((c, i) =>
    c.replace("{n}", String(i === 0 ? platforms : i === 1 ? secs.length : total)),
  );
});

const filterNoteText = computed(() =>
  d.value.filterNote.replace("{q}", query.value.trim()).replace("{n}", String(hitCount.value)),
);

/* ---------- 侧栏目录 ---------- */
const sectionCount = (id: string) => d.value.sections.find((s) => s.id === id)?.cards.length ?? 0;
const sideHref = (id: string) => (id === "about" ? prefix("/about") : `#${id}`);

/* ---------- 滚动高亮（scrollspy：scroll 事件 + rAF 节流，兼容性优于 IntersectionObserver） ---------- */
const activeId = ref("s-platforms");
let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const anchor = window.scrollY + window.innerHeight * 0.3;
    let current = "s-platforms";
    document.querySelectorAll(".home-portal .hp-sec[id]").forEach((el) => {
      if (el.getBoundingClientRect().top + window.scrollY <= anchor) current = el.id;
    });
    activeId.value = current;
  });
};
onMounted(() => {
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
onBeforeUnmount(() => removeEventListener("scroll", onScroll));
</script>

<template>
  <div class="home-portal">
    <div class="hp-container">
      <h1 class="hp-sr-only">{{ d.h1 }}</h1>

      <!-- 摘要条：定位语 + 统计 chips + 过滤输入 -->
      <div class="hp-strip">
        <div class="hp-strip-copy">
          <p><b>{{ d.stripLead }}</b><span class="hp-dash"> — </span>{{ d.stripSub }}</p>
          <div class="hp-chips">
            <span v-for="c in chips" :key="c" class="hp-chip">{{ c }}</span>
            <span v-if="q" class="hp-filter-note">
              {{ filterNoteText }}
              <button
                type="button"
                class="hp-filter-clear"
                :aria-label="d.clearAria"
                title="✕"
                @click="query = ''"
              >✕</button>
            </span>
          </div>
        </div>
        <label class="hp-search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input v-model="query" type="search" :placeholder="d.searchPlaceholder" :aria-label="d.searchAria" />
        </label>
      </div>

      <div class="hp-layout">
        <!-- 侧栏目录 -->
        <aside class="hp-side" :aria-label="d.sideTitle">
          <div class="hp-side-title"><span aria-hidden="true">≡</span> {{ d.sideTitle }}</div>
          <template v-for="g in d.sideGroups" :key="g.label">
            <div class="hp-side-group">{{ g.label }}</div>
            <a
              v-for="it in g.items"
              :key="it.id"
              class="hp-side-link"
              :class="{ active: activeId === it.id }"
              :href="sideHref(it.id)"
            >
              {{ it.text }}
              <span v-if="it.id !== 'about' && it.id !== 's-sources'" class="n">{{ sectionCount(it.id) }}</span>
            </a>
          </template>
        </aside>

        <!-- 主区：分区卡片墙 -->
        <main class="hp-main">
          <section
            v-for="s in d.sections"
            :id="s.id"
            :key="s.id"
            v-show="!q || visCount(s) > 0"
            class="hp-sec"
            :style="{ '--ac': s.ac, '--ac2': s.ac2 }"
          >
            <div class="hp-sec-head">
              <span class="hp-sec-ico" :class="{ grad: s.icon.length === 1 }">{{ s.icon }}</span>
              <h2>{{ s.title }}</h2>
              <span class="hp-count">{{ s.cards.length }} {{ d.guidesUnit }}</span>
              <a v-if="s.allLink" class="hp-all" :href="prefix(s.allLink)">{{ d.allText }}</a>
            </div>
            <div class="hp-grid">
              <a
                v-for="c in s.cards"
                :key="c.link"
                v-show="!q || matches(c)"
                class="hp-card"
                :href="prefix(c.link)"
              >
                <span class="hp-ticon" :class="{ em: c.icon.length > 1 }">{{ c.icon }}</span>
                <span class="hp-tbody">
                  <span class="hp-ttitle">{{ c.title }}<em v-if="c.badge">{{ c.badge }}</em></span>
                  <span class="hp-tdesc">{{ c.desc }}</span>
                </span>
              </a>
            </div>
          </section>

          <div v-show="q && hitCount === 0" class="hp-empty">{{ d.emptyText }}</div>

          <!-- 内容溯源（不参与过滤） -->
          <section id="s-sources" class="hp-sec hp-sources" style="--ac: #16a34a; --ac2: #4ade80">
            <div class="hp-sec-head">
              <span class="hp-sec-ico">{{ d.sources.icon }}</span>
              <h2>{{ d.sources.title }}</h2>
              <span class="hp-count">{{ d.sources.badge }}</span>
              <a class="hp-all" :href="prefix(d.sources.link)">{{ d.sources.linkText }}</a>
            </div>
            <div class="hp-src-grid">
              <div v-for="b in d.sources.blocks" :key="b.title" class="hp-src">
                <h3>{{ b.title }}</h3>
                <ul>
                  <li v-for="i in b.items" :key="i">{{ i }}</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-portal {
  --hp-bg: #f4f5f9;
  --hp-card: #fff;
  --hp-text: #141a26;
  --hp-muted: #667085;
  --hp-border: #e3e6ee;
  --hp-primary: #2563eb;
  --hp-primary-2: #7c3aed;
  --hp-ring: rgba(37, 99, 235, 0.25);
  --hp-shadow: 0 6px 20px rgba(16, 24, 40, 0.08);
  font-size: 14px;
  line-height: 1.65;
  color: var(--hp-text);
  background: var(--hp-bg);
  padding: 18px 0 64px;
  min-height: calc(100vh - var(--vp-nav-height, 64px));
}
.dark .home-portal {
  --hp-bg: #0b1020;
  --hp-card: #121a30;
  --hp-text: #e7eaf3;
  --hp-muted: #94a0b8;
  --hp-border: rgba(255, 255, 255, 0.09);
  --hp-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}

.home-portal a { color: inherit; text-decoration: none; }
.hp-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
.home-portal :focus-visible { outline: 2px solid var(--hp-primary); outline-offset: 2px; border-radius: 6px; }
.hp-sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}

/* ===== 摘要条 ===== */
.hp-strip {
  display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px;
  background: var(--hp-card); border: 1px solid var(--hp-border); border-radius: 12px;
  padding: 14px 16px; margin-bottom: 20px;
}
.hp-strip-copy { flex: 1 1 460px; min-width: 0; }
.hp-strip-copy p { font-size: 13px; color: var(--hp-muted); margin: 0; }
.hp-strip-copy b { color: var(--hp-text); font-weight: 700; }
.hp-dash { color: var(--hp-muted); }
.hp-chips { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.hp-chip {
  font-size: 12px; font-weight: 700; color: var(--hp-primary); white-space: nowrap;
  background: color-mix(in srgb, var(--hp-primary) 9%, transparent);
  border: 1px solid color-mix(in srgb, var(--hp-primary) 22%, transparent);
  border-radius: 999px; padding: 3px 11px;
}
.hp-filter-note {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12.5px; font-weight: 700; color: #b45309;
  background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: 999px; padding: 3px 6px 3px 12px;
}
.hp-filter-clear {
  border: 0; cursor: pointer; font: inherit; font-weight: 800; color: #b45309;
  background: rgba(245, 158, 11, 0.2); border-radius: 99px; padding: 0 8px;
}
.hp-search {
  flex: 0 1 340px; min-width: 220px; display: flex; align-items: center; gap: 9px;
  height: 40px; padding: 0 12px; background: var(--hp-bg);
  border: 1px solid var(--hp-border); border-radius: 10px; color: var(--hp-muted); transition: 0.2s;
}
.hp-search:focus-within { border-color: var(--hp-primary); box-shadow: 0 0 0 3px var(--hp-ring); }
.hp-search input {
  flex: 1; min-width: 0; border: 0; outline: 0; background: transparent;
  color: var(--hp-text); font: inherit; font-size: 13.5px;
}
.hp-search input::placeholder { color: var(--hp-muted); opacity: 1; }
.hp-search input::-webkit-search-cancel-button { cursor: pointer; }

/* ===== 布局：侧栏 + 主区 ===== */
.hp-layout { display: grid; grid-template-columns: 216px 1fr; gap: 20px; }
.hp-side {
  position: sticky; top: calc(var(--vp-nav-height, 64px) + 14px); align-self: start;
  max-height: calc(100vh - var(--vp-nav-height, 64px) - 30px); overflow: auto;
  background: var(--hp-card); border: 1px solid var(--hp-border); border-radius: 12px;
  padding: 10px; scrollbar-width: thin;
}
.hp-side-title {
  display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 800;
  padding: 8px 10px 10px; border-bottom: 1px solid var(--hp-border); margin-bottom: 8px;
}
.hp-side-title span { color: var(--hp-primary); font-weight: 900; }
.hp-side-group { font-size: 11px; font-weight: 800; letter-spacing: 1.5px; color: var(--hp-muted); padding: 10px 10px 4px; text-transform: none; }
.hp-side-link {
  display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px;
  font-size: 13px; color: var(--hp-muted); transition: 0.15s;
}
.hp-side-link:hover { background: color-mix(in srgb, var(--hp-text) 5%, transparent); color: var(--hp-text); }
.hp-side-link.active { background: color-mix(in srgb, var(--hp-primary) 10%, transparent); color: var(--hp-primary); font-weight: 700; }
.hp-side-link .n {
  margin-left: auto; font-size: 11px; font-weight: 700; color: var(--hp-muted);
  background: var(--hp-bg); border-radius: 99px; padding: 1px 7px;
}
.hp-side-link.active .n { background: color-mix(in srgb, var(--hp-primary) 14%, transparent); color: var(--hp-primary); }

/* ===== 分区与卡片墙 ===== */
.hp-sec { margin-bottom: 26px; scroll-margin-top: calc(var(--vp-nav-height, 64px) + 12px); }
.hp-sec-head {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 2px 10px; border-bottom: 2px solid var(--hp-border); margin-bottom: 13px;
}
.hp-sec-ico {
  width: 27px; height: 27px; flex: none; border-radius: 7px; display: grid; place-items: center;
  font-size: 14px; font-weight: 800;
  background: color-mix(in srgb, var(--ac) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
}
.hp-sec-ico.grad { color: #fff; background: linear-gradient(135deg, var(--ac), var(--ac2)); border-color: transparent; }
.hp-sec-head h2 { margin: 0; font-size: 16px; font-weight: 800; letter-spacing: -0.2px; color: var(--hp-text); }
.hp-count {
  font-size: 11.5px; font-weight: 700; white-space: nowrap;
  color: var(--ac); background: color-mix(in srgb, var(--ac) 9%, transparent);
  border-radius: 99px; padding: 2px 9px;
}
.hp-all { margin-left: auto; font-size: 12.5px; font-weight: 700; color: var(--hp-muted); transition: 0.15s; white-space: nowrap; }
.hp-all:hover { color: var(--ac); }
.hp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
.hp-card {
  display: flex; gap: 10px; align-items: flex-start; padding: 12px 13px;
  background: var(--hp-card); border: 1px solid var(--hp-border); border-radius: 10px; transition: 0.16s;
}
.hp-card:hover {
  transform: translateY(-2px); box-shadow: var(--hp-shadow);
  border-color: color-mix(in srgb, var(--ac) 45%, var(--hp-border));
}
.hp-ticon {
  flex: none; width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center;
  font-size: 15px; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--ac), var(--ac2));
}
.hp-ticon.em {
  color: var(--hp-text); font-size: 16px;
  background: color-mix(in srgb, var(--ac) 11%, transparent);
  border: 1px solid color-mix(in srgb, var(--ac) 24%, transparent);
}
.hp-tbody { min-width: 0; display: flex; flex-direction: column; }
.hp-ttitle { display: flex; align-items: center; gap: 7px; font-size: 13.5px; font-weight: 700; line-height: 1.4; }
.hp-ttitle em {
  font-style: normal; flex: none; font-size: 10.5px; font-weight: 700;
  color: var(--ac); background: color-mix(in srgb, var(--ac) 9%, transparent);
  border-radius: 5px; padding: 1px 6px;
}
.hp-tdesc {
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  font-size: 12px; color: var(--hp-muted); margin-top: 3px;
}
.hp-empty {
  border: 1.5px dashed var(--hp-border); border-radius: 12px; padding: 44px 20px;
  text-align: center; color: var(--hp-muted); font-size: 13.5px; margin-bottom: 26px;
}

/* ===== 溯源（紧凑双栏） ===== */
.hp-src-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.hp-src { background: var(--hp-card); border: 1px solid var(--hp-border); border-radius: 10px; padding: 16px 18px; }
.hp-src h3 { margin: 0 0 8px; font-size: 14px; font-weight: 800; color: var(--hp-text); }
.hp-src ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 5px; }
.hp-src li { font-size: 12.5px; color: var(--hp-muted); padding-left: 20px; position: relative; }
.hp-src li::before { content: "✓"; position: absolute; left: 0; color: #16a34a; font-weight: 800; }

/* ===== 响应式 ===== */
@media (max-width: 920px) {
  .hp-layout { grid-template-columns: 1fr; gap: 14px; }
  .hp-search { flex-basis: 100%; }
  .hp-side {
    position: static; max-height: none; display: flex; align-items: center; gap: 6px;
    overflow-x: auto; padding: 8px; scrollbar-width: none;
  }
  .hp-side::-webkit-scrollbar { display: none; }
  .hp-side-title, .hp-side-group { display: none; }
  .hp-side-link { white-space: nowrap; border: 1px solid var(--hp-border); border-radius: 999px; padding: 6px 13px; flex: none; }
  .hp-side-link .n { margin-left: 2px; }
  .hp-src-grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .hp-grid { grid-template-columns: 1fr; }
}
</style>

<style>
/* ===== 首页专属页面级覆盖（不进 scoped，作用于默认主题骨架） ===== */
/* 锚点跳转平滑滚动 */
html:has(.home-portal) { scroll-behavior: smooth; }

/* 导航条：蓝紫渐变（参考稿的彩色导航），仅首页生效 */
html:has(.home-portal) .VPNavBar {
  --vp-nav-bg-color: transparent;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-bottom-color: transparent;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
html:has(.home-portal) .VPNavBar .divider-line { background-color: transparent; }
html:has(.home-portal) .VPNavBarTitle,
html:has(.home-portal) .VPNavBarTitle .title,
html:has(.home-portal) .VPNavBarMenuLink,
html:has(.home-portal) .VPNavBarHamburger { color: #fff; }
html:has(.home-portal) .VPNavBarMenuLink:hover,
html:has(.home-portal) .VPNavBarMenuLink.active {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.16);
}
html:has(.home-portal) .VPNavBarTitle:hover .title {
  color: rgba(255, 255, 255, 0.85);
  border-bottom-color: transparent;
}
html:has(.home-portal) .VPNavBar .VPFlyout .button,
html:has(.home-portal) .VPNavBar .VPFlyout .text,
html:has(.home-portal) .VPNavBar .VPFlyout:hover .text,
html:has(.home-portal) .VPNavBar .VPFlyout.active .text { color: #fff; }

/* 站内搜索按钮：白色半透明浮层样式 */
html:has(.home-portal) .VPNavBar .DocSearch-Button {
  background-color: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.32);
}
html:has(.home-portal) .VPNavBar .DocSearch-Button:hover {
  background-color: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.55);
}
html:has(.home-portal) .VPNavBar .DocSearch-Button .DocSearch-Search-Icon,
html:has(.home-portal) .VPNavBar .DocSearch-Button .DocSearch-Button-Placeholder { color: #fff; }
html:has(.home-portal) .VPNavBar .DocSearch-Button .DocSearch-Button-Key { border-color: rgba(255, 255, 255, 0.4); }
html:has(.home-portal) .VPNavBar .DocSearch-Button .DocSearch-Button-Key:first-child:after { color: #fff; }

/* 主题切换开关与汉堡按钮：白色描边 */
html:has(.home-portal) .VPNavBar .VPSwitch {
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.18);
}
</style>
