<script setup>
import { computed } from 'vue'
import AppIcon from '../ui/AppIcon.vue'

// Degradê + seta (desktop), visíveis só quando há conteúdo escondido naquela direção
const props = defineProps({
  up: { type: Boolean, default: false },
  down: { type: Boolean, default: false },
})
const emit = defineEmits(['scroll'])

const hints = computed(() => [
  { dir: -1, show: props.up, pos: 'top-0 bg-linear-to-b', icon: 'chevron-up', label: 'Rolar para cima' },
  { dir: 1, show: props.down, pos: 'bottom-0 bg-linear-to-t', icon: 'chevron-down', label: 'Rolar para baixo' },
])
</script>

<template>
  <div
    v-for="hint in hints"
    :key="hint.dir"
    class="pointer-events-none absolute inset-x-0 z-20 hidden h-16 items-center justify-center from-ink via-ink/80 to-transparent transition-opacity duration-300 lg:flex print:hidden!"
    :class="[hint.pos, hint.show ? 'opacity-100' : 'opacity-0']"
  >
    <button
      type="button"
      class="grid size-8 cursor-pointer place-items-center rounded-full bg-white/90 text-ink-dark shadow-lg transition hover:scale-110 hover:text-gold"
      :class="hint.show ? 'pointer-events-auto' : 'pointer-events-none'"
      :tabindex="hint.show ? 0 : -1"
      :aria-hidden="!hint.show"
      :aria-label="hint.label"
      :title="hint.label"
      @click="emit('scroll', hint.dir)"
    >
      <AppIcon :name="hint.icon" class="size-5" :class="{ 'motion-safe:animate-bounce': hint.dir === 1 }" />
    </button>
  </div>
</template>
