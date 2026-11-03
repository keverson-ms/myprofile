<script setup>
import MainSection from '../ui/MainSection.vue'

// items: [{ institution, period, course, description? }]
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <MainSection title="Formação" icon="graduation">
    <div class="space-y-8">
      <article v-for="(edu, i) in items" :key="i">
        <p class="text-sm text-fg/60">{{ edu.institution }} / {{ edu.period }}</p>
        <h3 class="text-lg font-bold">{{ edu.course }}</h3>
        <p v-if="edu.description" class="text-[15px] leading-relaxed text-fg/80 sm:text-justify">
          {{ edu.description }}
        </p>
      </article>
    </div>
  </MainSection>
</template>
