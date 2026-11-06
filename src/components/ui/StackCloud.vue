<script setup>
import { computed } from 'vue'

// Nuvem de palavras clicável. words: ['Texto', ...] ou [{ name, weight (1 a 5), match? }, ...]
// selected: palavra selecionada | counts: { nome: nº de projetos } (palavras sem projetos não são clicáveis)
const props = defineProps({
  words: { type: Array, required: true },
  label: { type: String, default: 'Principais tecnologias' },
  selected: { type: String, default: null },
  counts: { type: Object, default: null },
})
const emit = defineEmits(['select'])

const countOf = (word) => (props.counts ? (props.counts[word.name] ?? 0) : null)
const isClickable = (word) => countOf(word) === null || countOf(word) > 0

const DEFAULT_WEIGHT = 2

// Tamanho e cor por peso (1 = discreto … 5 = principal; 6 = destaque máximo, fica no centro da nuvem)
const STYLES = {
  1: 'text-sm font-medium text-fg/50',
  2: 'text-base font-medium text-fg/65',
  3: 'text-lg font-semibold text-fg/80 sm:text-xl',
  4: 'text-xl font-bold text-fg sm:text-2xl',
  5: 'text-2xl font-extrabold text-gold sm:text-4xl',
  6: 'text-4xl font-black tracking-wide text-gold uppercase drop-shadow-[0_0_18px_color-mix(in_srgb,var(--color-gold)_45%,transparent)] sm:text-6xl',
}

const normalize = (w) => {
  const item = typeof w === 'string' ? { name: w } : w
  const weight = Math.min(6, Math.max(1, Math.round(item.weight ?? DEFAULT_WEIGHT)))
  return { ...item, name: item.name, weight }
}

// Distribuição "do centro para fora": as mais importantes ficam no meio,
// as demais vão se alternando à esquerda e à direita.
const cloud = computed(() => {
  const sorted = props.words.map(normalize).sort((a, b) => b.weight - a.weight)
  const arranged = []
  sorted.forEach((word, i) => (i % 2 === 0 ? arranged.push(word) : arranged.unshift(word)))
  return arranged
})

// Movimento: cada palavra flutua no próprio ritmo (valores determinísticos, sem "pulos" a cada render).
// Palavras maiores se movem um pouco menos, para a nuvem continuar legível.
const motion = (word, i) => {
  const seed = (i * 37 + word.name.length * 13) % 100
  return {
    '--float-duration': `${3.2 + (seed % 7) * 0.45}s`,
    '--float-delay': `-${(seed % 10) * 0.4}s`,
    '--float-distance': `${word.weight >= 5 ? 2 : 4}px`,
    '--float-tilt': `${seed % 2 ? 1.2 : -1.2}deg`,
    '--appear-delay': `${i * 45}ms`,
  }
}
</script>

<template>
  <div class="relative">
    <!-- Contorno em formato de nuvem: estica com o conteúdo (preserveAspectRatio="none");
         vector-effect mantém a espessura da linha constante mesmo esticado. -->
    <svg
      class="cloud-shape pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 800 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        class="fill-fg/4 stroke-fg/15"
        stroke-width="1.5"
        vector-effect="non-scaling-stroke"
        d="M110 262
           C58 262 22 232 30 192
           C2 176 4 120 48 106
           C44 62 92 34 140 50
           C162 10 238 2 272 38
           C302 6 374 0 404 34
           C434 4 512 8 534 44
           C568 16 646 22 662 66
           C710 56 768 90 758 138
           C796 160 790 222 744 236
           C732 268 690 276 656 262
           C618 290 556 286 534 266
           C496 292 430 292 402 270
           C364 292 302 292 272 270
           C238 292 172 290 148 264
           C136 266 122 264 110 262 Z"
      />
    </svg>

    <!-- Palavras (com folga para não encostar nas ondulações da nuvem) -->
    <ul
      :aria-label="label"
      class="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-12 pt-14 pb-12 sm:gap-x-7 sm:px-20 sm:pt-16 sm:pb-14"
    >
      <li v-for="(word, i) in cloud" :key="word.name" class="cloud-word leading-tight" :style="motion(word, i)">
        <button
          type="button"
          class="rounded-md leading-tight transition-[scale,color,opacity] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          :class="[
            STYLES[word.weight],
            isClickable(word) ? 'cursor-pointer hover:scale-115 hover:text-gold' : 'cursor-default opacity-50',
            selected === word.name && 'scale-115 text-gold! underline decoration-2 underline-offset-4',
            selected && selected !== word.name && 'opacity-55',
          ]"
          :disabled="!isClickable(word)"
          :aria-pressed="selected === word.name"
          :title="countOf(word) !== null ? `${countOf(word)} ${countOf(word) === 1 ? 'projeto' : 'projetos'}` : undefined"
          @click="emit('select', selected === word.name ? null : word.name)"
        >
          {{ word.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Entrada em sequência + flutuação contínua (usa `translate`/`rotate`, então o zoom do hover,
   que usa `scale`, continua funcionando junto) */
.cloud-word {
  animation:
    cloud-appear 0.6s ease-out var(--appear-delay) backwards,
    cloud-float var(--float-duration) ease-in-out var(--float-delay) infinite alternate;
}

@keyframes cloud-appear {
  from {
    opacity: 0;
    scale: 0.6;
  }
}

@keyframes cloud-float {
  from {
    translate: 0 calc(var(--float-distance) * -1);
    rotate: calc(var(--float-tilt) * -1);
  }
  to {
    translate: 0 var(--float-distance);
    rotate: var(--float-tilt);
  }
}

/* A nuvem "respira" devagar */
.cloud-shape {
  transform-origin: center;
  animation: cloud-breathe 7s ease-in-out infinite alternate;
}
@keyframes cloud-breathe {
  from { scale: 1 1; }
  to { scale: 1.012 1.03; }
}

@media (prefers-reduced-motion: reduce) {
  .cloud-word,
  .cloud-shape { animation: none; }
}
</style>
