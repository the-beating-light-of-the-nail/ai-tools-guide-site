<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const menuOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)

function onScroll() {
  if (!navRef.value) return
  navRef.value.style.boxShadow =
    window.scrollY > 12 ? '0 8px 30px -16px rgba(0,0,0,0.8)' : 'none'
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header id="nav" ref="navRef" class="nav">
    <div class="nav-inner">
      <a class="brand" href="#top">
        <img
          class="brand-mark"
          src="/sites/skin-studio/logo.svg"
          alt="WorkBuddy 皮肤工坊"
          width="36"
          height="36"
        />
        <span>WorkBuddy 皮肤工坊</span>
      </a>
      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#gallery" @click="menuOpen = false">皮肤画廊</a>
        <a href="#steps" @click="menuOpen = false">使用步骤</a>
        <a href="#make" @click="menuOpen = false">学习制作</a>
        <a href="#faq" @click="menuOpen = false">常见问题</a>
      </nav>
      <button class="nav-toggle" aria-label="菜单" @click="menuOpen = !menuOpen">☰</button>
    </div>
  </header>
</template>
