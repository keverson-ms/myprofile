<script setup>
import { computed, watch } from 'vue'
import { useTypewriter } from '../../composables/useTypewriter.js'

// Nome com efeito de digitação: o primeiro nome em destaque (dourado) e o sobrenome com `lastClass`.
// O nome completo invisível reserva o espaço final, então o texto não "anda" enquanto é digitado.
const props = defineProps({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  lastClass: { type: String, default: 'text-fg' },
})
const emit = defineEmits(['done'])

const full = computed(() => `${props.firstName} ${props.lastName}`)
const { count, done } = useTypewriter(full.value.length)

const typedFirst = computed(() => props.firstName.slice(0, count.value))
const typedSpace = computed(() => (count.value > props.firstName.length ? ' ' : ''))
const typedLast = computed(() => props.lastName.slice(0, Math.max(0, count.value - props.firstName.length - 1)))

// Avisa quando o nome fica completo (o cabeçalho revela o cargo na primeira vez)
watch(done, (value) => value && emit('done'), { immediate: true })
</script>

<template>
  <span class="relative inline-block whitespace-nowrap" :aria-label="full">
    <!-- Reserva o espaço do nome completo -->
    <span class="invisible" aria-hidden="true">{{ firstName }} {{ lastName }}</span>

    <!-- Texto digitado + cursor -->
    <span class="absolute inset-y-0 left-0" aria-hidden="true">
      <span class="text-gold">{{ typedFirst }}</span>{{ typedSpace }}<span :class="lastClass">{{ typedLast }}</span><span
        class="typed-cursor ml-1 inline-block w-[0.08em] translate-y-[0.08em] bg-gold align-baseline"
      >&#8203;</span>
    </span>
  </span>
</template>

<style scoped>
/* Cursor sempre piscando (digitando, apagando ou parado) */
.typed-cursor {
  height: 0.9em;
  animation: blink 0.9s steps(1) infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .typed-cursor { display: none; }
}
</style>
