<script setup>
import { useTheme } from '../../composables/useTheme.js'

// Céu estrelado de fundo, visível apenas no modo escuro.
// Fica fixo atrás do conteúdo (que rola por cima) e não captura cliques.
const { dark } = useTheme()

// Gerador pseudoaleatório com semente: as estrelas ficam sempre nas mesmas posições
function mulberry32(seed) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const random = mulberry32(2026)
const STAR_COUNT = 140

const stars = Array.from({ length: STAR_COUNT }, () => {
  const big = random() > 0.9
  return {
    x: `${(random() * 100).toFixed(2)}%`,
    y: `${(random() * 100).toFixed(2)}%`,
    r: big ? 1.3 + random() * 0.8 : 0.4 + random() * 0.8,
    accent: random() > 0.88, // algumas na cor de destaque da paleta
    delay: `${(random() * 6).toFixed(2)}s`,
    duration: `${(2.5 + random() * 4).toFixed(2)}s`,
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-700"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-if="dark" class="pointer-events-none fixed inset-0 overflow-hidden print:hidden" aria-hidden="true">
      <svg class="absolute inset-0 size-full">
        <circle
          v-for="(s, i) in stars"
          :key="i"
          :cx="s.x"
          :cy="s.y"
          :r="s.r"
          class="star"
          :class="s.accent ? 'fill-gold' : 'fill-white'"
          :style="{ animationDelay: s.delay, animationDuration: s.duration }"
        />
      </svg>

      <!-- Estrelas cadentes ocasionais -->
      <span class="shooting-star" style="top: 12%; left: 55%; animation-delay: 3s" />
      <span class="shooting-star" style="top: 38%; left: 85%; animation-delay: 11s" />
    </div>
  </Transition>
</template>

<style scoped>
.star {
  opacity: 0.6;
  animation: twinkle ease-in-out infinite alternate;
}
@keyframes twinkle {
  from { opacity: 0.15; }
  to { opacity: 0.9; }
}

/* Risco de luz que atravessa o céu na diagonal, a cada ~16s */
.shooting-star {
  position: absolute;
  width: 110px;
  height: 1.5px;
  border-radius: 9999px;
  background: linear-gradient(90deg, rgb(255 255 255 / 0.9), transparent);
  opacity: 0;
  transform: rotate(-35deg);
  transform-origin: left center;
  animation: shoot 16s linear infinite;
}
@keyframes shoot {
  0% { opacity: 0; translate: 0 0; }
  1% { opacity: 1; }
  6% { opacity: 0; translate: -320px 225px; }
  100% { opacity: 0; translate: -320px 225px; }
}

@media (prefers-reduced-motion: reduce) {
  .star { animation: none; }
  .shooting-star { display: none; }
}
</style>
