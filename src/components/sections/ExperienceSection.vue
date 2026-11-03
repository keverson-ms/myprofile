<script setup>
import MainSection from '../ui/MainSection.vue'
import ExperienceItem from './ExperienceItem.vue'

// items: experiências, da mais recente para a mais antiga
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <MainSection title="Experiência Profissional" icon="briefcase">
    <!-- Experiências separadas por uma linha sutil -->
    <div class="divide-y divide-fg/15">
      <ExperienceItem
        v-for="(job, i) in items"
        :key="i"
        :job="job"
        class="py-10 first:pt-0 last:pb-0"
      />
    </div>
  </MainSection>
</template>
