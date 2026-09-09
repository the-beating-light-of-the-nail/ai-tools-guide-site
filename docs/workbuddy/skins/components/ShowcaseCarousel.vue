<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { SHOWCASE_IMAGES } from './skins-data'

const current = ref(0)
const total = SHOWCASE_IMAGES.length

const carousel = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)

let timer: ReturnType<typeof setInterval> | null = null
let startX = 0

function goTo(i: number) {
  current.value = (i + total) % total
  resetAuto()
}

function next() {
  goTo(current.value + 1)
}

function prev() {
  goTo(current.value - 1)
}

function startAuto() {
  if (timer !== null) return
  timer = setInterval(() => {
    goTo(current.value + 1)
  }, 5000)
}

function stopAuto() {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
}

function resetAuto() {
  stopAuto()
  startAuto()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

function onTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  const diff = startX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 40) {
    if (diff > 0) next()
    else prev()
  }
}

onMounted(() => {
  if (carousel.value) {
    carousel.value.addEventListener('mouseenter', stopAuto)
    carousel.value.addEventListener('mouseleave', startAuto)
    carousel.value.addEventListener('focusin', stopAuto)
    carousel.value.addEventListener('focusout', startAuto)
    carousel.value.addEventListener('keydown', onKeydown)
  }
  if (track.value) {
    track.value.addEventListener('touchstart', onTouchStart, { passive: true })
    track.value.addEventListener('touchend', onTouchEnd, { passive: true })
  }
  startAuto()
})

onUnmounted(() => {
  stopAuto()
  if (carousel.value) {
    carousel.value.removeEventListener('mouseenter', stopAuto)
    carousel.value.removeEventListener('mouseleave', startAuto)
    carousel.value.removeEventListener('focusin', stopAuto)
    carousel.value.removeEventListener('focusout', startAuto)
    carousel.value.removeEventListener('keydown', onKeydown)
  }
  if (track.value) {
    track.value.removeEventListener('touchstart', onTouchStart)
    track.value.removeEventListener('touchend', onTouchEnd)
  }
})
</script>

<template>
  <section id="showcase" class="section section--showcase">
    <div class="section-head">
      <span class="kicker">SHOWCASE</span>
      <h2>看看换上皮肤后的 WorkBuddy</h2>
      <p>真实应用截图，滑动查看不同皮肤效果。</p>
    </div>
    <div
      ref="carousel"
      class="showcase-carousel"
      aria-label="皮肤效果轮播"
      tabindex="0"
    >
      <button class="showcase-arrow prev" aria-label="上一张" @click="prev">‹</button>
      <div class="showcase-viewport">
        <div
          ref="track"
          class="showcase-track"
          :style="{ transform: `translateX(-${current * 100}%)` }"
        >
          <div v-for="(img, i) in SHOWCASE_IMAGES" :key="i" class="showcase-slide">
            <img :src="img" :alt="'WorkBuddy 皮肤效果 ' + (i + 1)" loading="lazy" />
          </div>
        </div>
      </div>
      <button class="showcase-arrow next" aria-label="下一张" @click="next">›</button>
      <div class="showcase-dots">
        <button
          v-for="(img, i) in SHOWCASE_IMAGES"
          :key="'dot' + i"
          class="showcase-dot"
          :class="{ active: i === current }"
          :aria-label="'第 ' + (i + 1) + ' 张'"
          @click="goTo(i)"
        ></button>
      </div>
    </div>
  </section>
</template>
