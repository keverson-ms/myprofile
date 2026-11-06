<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const svg = ref(null)
const width = ref(300)
let observer

onMounted(() => {
  const parent = svg.value?.parentElement
  if (!parent) return
  observer = new ResizeObserver(([entry]) => {
    width.value = Math.round(entry.contentRect.width) || 300
  })
  observer.observe(parent)
})
onBeforeUnmount(() => observer?.disconnect())

const HEIGHT = 278

const CX = 128
const CY = 106
const R = 102
const BAND_TOP = CY + R
const BAND_BOTTOM = BAND_TOP + 32
const BAND_LEFT = 90

const top = computed(() => Math.min(width.value, 300))

const path = computed(() => {
  const w = width.value
  const t = top.value
  const right = CX + R
  const c1 = Math.max(t - 50, right + 6)
  return [
    `M0 0 H${t}`,
    `C${c1} 0 ${right} ${CY - 60} ${right} ${CY}`,
    `A${R} ${R} 0 0 1 ${CX} ${BAND_TOP}`,
    `H${BAND_LEFT + 38}`,
    `C${BAND_LEFT + 16} ${BAND_TOP} ${BAND_LEFT} ${BAND_TOP + 6} ${BAND_LEFT} ${BAND_TOP + 16}`,
    `C${BAND_LEFT} ${BAND_BOTTOM - 6} ${BAND_LEFT + 16} ${BAND_BOTTOM} ${BAND_LEFT + 38} ${BAND_BOTTOM}`,
    `H${w - 38}`,
    `C${w - 14} ${BAND_BOTTOM} ${w} ${BAND_BOTTOM + 14} ${w} ${HEIGHT}`,
    'H0 Z',
  ].join(' ')
})
</script>

<template>
  <svg
    ref="svg"
    class="pointer-events-none absolute top-0 left-0 hidden lg:block"
    :width="width"
    :height="HEIGHT"
    :viewBox="`0 0 ${width} ${HEIGHT}`"
    aria-hidden="true"
  >
    <rect :width="width" :height="HEIGHT" class="fill-paper" />
    <path class="fill-ink" :d="path" />
  </svg>
</template>
