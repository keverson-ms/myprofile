<script setup>
import { computed, watch } from 'vue'
import { useTypewriter } from '../../composables/useTypewriter.js'

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

watch(done, (value) => value && emit('done'), { immediate: true })
</script>

<template>
  <span class="relative inline-block max-w-full text-left" :aria-label="full">
    <span class="invisible print:visible" aria-hidden="true"><span class="print:text-gold">{{ firstName }}</span> <span
      :class="lastClass"
    >{{ lastName }}</span></span>

    <span class="absolute inset-0 print:hidden" aria-hidden="true">
      <span class="text-gold">{{ typedFirst }}</span>{{ typedSpace }}<span :class="lastClass">{{ typedLast }}</span><span
        class="typed-cursor ml-1 inline-block w-[0.08em] translate-y-[0.08em] bg-gold align-baseline"
      >&#8203;</span>
    </span>
  </span>
</template>

<style scoped>
.typed-cursor {
  height: 0.9em;
  margin-right: calc(-0.25rem - 0.08em);
  animation: blink 0.9s steps(1) infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .typed-cursor { display: none; }
}
</style>
