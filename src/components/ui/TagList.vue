<script setup>
defineProps({
  tags: { type: Array, required: true },
})
</script>

<template>
  <ul class="print-keep flex flex-wrap gap-2 print:gap-1.5">
    <li
      v-for="tag in tags"
      :key="tag"
      class="rounded-full bg-ink px-3 py-1 text-xs font-semibold tracking-wide text-white print:border print:border-fg/30 print:bg-transparent print:px-2 print:py-0.5 print:text-[11px] print:text-fg"
    >
      {{ tag }}
    </li>
  </ul>
</template>
