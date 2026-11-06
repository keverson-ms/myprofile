<script setup>
import { ref, computed } from 'vue'
import MainSection from '../ui/MainSection.vue'
import ExperienceItem from './ExperienceItem.vue'

const props = defineProps({
  items: { type: Array, required: true },
})

const hasDetails = (job) =>
  [].concat(job.description ?? []).length > 0 || job.highlights?.length > 0 || Boolean(job.closing)
const withDetails = computed(() => props.items.map(hasDetails))
const anyDetails = computed(() => withDetails.value.some(Boolean))

const open = ref(props.items.map(() => false))
const toggle = (i) => (open.value[i] = !open.value[i])

const allOpen = computed(() => open.value.every((value, i) => value || !withDetails.value[i]))
const toggleAll = () => {
  const value = !allOpen.value
  open.value = props.items.map(() => value)
}

const isCurrent = (job) => /atual/i.test(job.period)
</script>

<template>
  <MainSection title="Experiência Profissional" icon="briefcase">
    <div v-if="anyDetails" class="-mt-4 mb-6 flex justify-end print:hidden">
      <button
        type="button"
        class="cursor-pointer rounded-full border border-fg/20 px-3 py-1 text-xs font-semibold tracking-wide text-fg/70 uppercase transition hover:border-gold hover:text-gold"
        @click="toggleAll"
      >
        {{ allOpen ? 'Recolher detalhes' : 'Expandir detalhes' }}
      </button>
    </div>

    <ol class="relative ml-2 space-y-12 border-l-2 border-fg/15 pl-8 print:space-y-4">
      <li v-for="(job, i) in items" :key="i">
        <ExperienceItem :job="job" :current="isCurrent(job)" :open="open[i]" @toggle="toggle(i)" />
      </li>
    </ol>
  </MainSection>
</template>
