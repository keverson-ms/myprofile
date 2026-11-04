<script setup>
import { ref, computed } from 'vue'
import MainSection from '../ui/MainSection.vue'
import ExperienceItem from './ExperienceItem.vue'

// items: experiências, da mais recente para a mais antiga
const props = defineProps({
  items: { type: Array, required: true },
})

// Itens com muito texto viram recolhíveis (prévia + "Ver detalhes"); os curtos ficam sempre abertos
const COLLAPSE_MIN_CHARS = 500
const textLength = (job) =>
  [
    ...[].concat(job.description ?? []),
    ...(job.highlights ?? []).map((h) => `${h.title ?? ''} ${h.text}`),
    job.closing ?? '',
  ].join(' ').length

const collapsible = computed(() => props.items.map((job) => textLength(job) > COLLAPSE_MIN_CHARS))
const hasCollapsible = computed(() => collapsible.value.some(Boolean))

// Começam todos recolhidos
const open = ref(props.items.map(() => false))
const toggle = (i) => (open.value[i] = !open.value[i])

const allOpen = computed(() => open.value.every((value, i) => value || !collapsible.value[i]))
const toggleAll = () => {
  const value = !allOpen.value
  open.value = props.items.map(() => value)
}

const isCurrent = (job) => /atual/i.test(job.period)
</script>

<template>
  <MainSection title="Experiência Profissional" icon="briefcase">
    <div v-if="hasCollapsible" class="-mt-4 mb-6 flex justify-end print:hidden">
      <button
        type="button"
        class="cursor-pointer rounded-full border border-fg/20 px-3 py-1 text-xs font-semibold tracking-wide text-fg/70 uppercase transition hover:border-gold hover:text-gold"
        @click="toggleAll"
      >
        {{ allOpen ? 'Recolher tudo' : 'Expandir tudo' }}
      </button>
    </div>

    <!-- Linha do tempo -->
    <ol class="relative ml-2 space-y-12 border-l-2 border-fg/15 pl-8 print:space-y-7">
      <li v-for="(job, i) in items" :key="i">
        <ExperienceItem
          :job="job"
          :current="isCurrent(job)"
          :collapsible="collapsible[i]"
          :open="open[i]"
          @toggle="toggle(i)"
        />
      </li>
    </ol>
  </MainSection>
</template>
