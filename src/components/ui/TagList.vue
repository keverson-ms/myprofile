<script setup>
defineProps({
  tags: { type: Array, required: true },
})
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li
      v-for="tag in tags"
      :key="tag"
      class="rounded-full bg-ink px-3 py-1 text-xs font-semibold tracking-wide text-white"
    >
      {{ tag }}
    </li>
  </ul>
</template>
