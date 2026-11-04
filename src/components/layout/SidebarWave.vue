<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// A lateral tem largura relativa (25%), então a onda é recalculada pela largura real dela.
const svg = ref(null)
const width = ref(300) // largura da lateral (px)
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

// Altura total da onda — mantenha em sincronia com lg:pt-[278px] / top-[278px] em AppSidebar.vue
const HEIGHT = 278

// Foto: canto em (40, 18), 176px → centro (128, 106), raio externo 88.
// A área escura contorna a foto com um arco concêntrico de raio R (margem de ~14px no anel).
const CX = 128
const CY = 106
const R = 102
const BAND_TOP = CY + R // 208: início da faixa clara abaixo da foto
const BAND_BOTTOM = BAND_TOP + 32 // 240: fim da faixa clara
const BAND_LEFT = 90 // ponta arredondada da faixa clara: começa embaixo da foto, puxada para a direita

// Ponto do topo onde a curva começa a descer em direção à foto (abre suavemente no topo)
const top = computed(() => Math.min(width.value, 300))

// Topo → desce colado à foto (arco) → faixa clara abaixo dela → canto arredondado
// exatamente na borda direita da lateral (que acompanha os 25% da tela).
const path = computed(() => {
  const w = width.value
  const t = top.value
  const right = CX + R // 230: lado direito do arco
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

<!-- Onda do topo (desktop): área escura envolvendo a foto, com a faixa clara abaixo.
     Fica inteira dentro da coluna da lateral (que recorta o que passar da borda). -->
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
