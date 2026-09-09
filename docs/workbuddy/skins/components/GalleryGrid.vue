<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { SKINS, SKIN_DL_BASE, type Skin } from './skins-data'

const lbOpen = ref(false)
const lbSrc = ref('')
const lbCaption = ref('')

const thumbUrl = (s: Skin) => `/sites/skin-studio/skins/${s.file.replace(/\.wbskin$/i, '')}.jpg`
const bgUrl = (s: Skin) => `/sites/skin-studio/skins-bg/${s.bg}`

const openLightbox = (s: Skin) => {
  lbSrc.value = bgUrl(s)
  lbCaption.value = `${s.name} · 背景大图`
  lbOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lbOpen.value = false
  document.body.style.overflow = ''
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && lbOpen.value) closeLightbox()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section id="gallery" class="section section--alt">
    <div class="section-head">
      <span class="kicker">SKIN GALLERY</span>
      <h2>🎨 皮肤画廊</h2>
      <p>下面都是已经生成好的真实 <code>.wbskin</code> 皮肤，每张都来自一张参考图。挑喜欢的，点卡片即可下载试用。</p>
    </div>
    <div class="skins-grid">
      <article v-for="(s, i) in SKINS" :key="s.file" class="skin-card">
        <div class="skin-thumb" :title="'查看大图'" @click="openLightbox(s)">
          <img :src="thumbUrl(s)" :alt="s.name + ' 皮肤预览'" loading="lazy" />
          <span class="tag" :class="s.theme === 'light' ? 'light' : 'dark'">{{ s.theme === 'light' ? '亮色' : '暗色' }}</span>
          <div class="skin-thumb-overlay" aria-hidden="true">
            <div class="skin-thumb-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></div>
            <span class="skin-thumb-hint">查看大图</span>
          </div>
        </div>
        <div class="skin-body">
          <div class="skin-name">
            <span class="dot" :style="{ background: s.accent }"></span>{{ s.name }}
          </div>
          <div class="skin-desc">{{ s.desc }}</div>
          <div class="skin-foot">
            <a class="skin-dl-btn" :href="`${SKIN_DL_BASE}/${s.file}`" download>下载 .wbskin</a>
          </div>
        </div>
        <div class="skin-accent-bar" :style="{ background: `linear-gradient(90deg,${s.accent},transparent)` }"></div>
      </article>
    </div>
    <div class="skin-lightbox" :class="{ open: lbOpen }" :aria-hidden="!lbOpen">
      <div class="lightbox-backdrop" @click="closeLightbox"></div>
      <button class="lightbox-close" aria-label="关闭" @click="closeLightbox">×</button>
      <img class="lightbox-img" :src="lbSrc" alt="皮肤背景大图" />
      <div class="lightbox-caption">{{ lbCaption }}</div>
    </div>
  </section>
</template>
