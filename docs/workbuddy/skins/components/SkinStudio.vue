<script setup lang="ts">
// WorkBuddy 皮肤工坊 · 克隆页总装（对应原站 index.html 的 body 内容顺序）
import './skin-studio.css'
import SiteNav from './SiteNav.vue'
import HeroSection from './HeroSection.vue'
import ShowcaseCarousel from './ShowcaseCarousel.vue'
import StepsSection from './StepsSection.vue'
import GalleryGrid from './GalleryGrid.vue'
import MakeSection from './MakeSection.vue'
import FaqSection from './FaqSection.vue'
import SiteFooter from './SiteFooter.vue'
</script>

<template>
  <div class="skin-studio-root">
    <SiteNav />
    <HeroSection />
    <ShowcaseCarousel />
    <StepsSection />
    <GalleryGrid />
    <MakeSection />
    <FaqSection />
    <SiteFooter />
  </div>
</template>
