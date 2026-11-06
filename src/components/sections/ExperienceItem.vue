<script setup>
import { computed, useId } from 'vue'
import TagList from '../ui/TagList.vue'

// job: { company, period, position, summary?, tags?, description?, highlights?, closing? }
// Versão enxuta (sempre visível e no PDF): summary + tags.
// Detalhes (botão "Ver detalhes", fora do PDF): description + highlights + closing.
const props = defineProps({
  job: { type: Object, required: true },
  open: { type: Boolean, default: false },
  current: { type: Boolean, default: false },
})
const emit = defineEmits(['toggle'])

const detailsId = useId()

// description aceita texto único ou lista de parágrafos
const paragraphs = computed(() => [].concat(props.job.description ?? []))
const hasDetails = computed(
  () => paragraphs.value.length > 0 || props.job.highlights?.length > 0 || Boolean(props.job.closing),
)

defineExpose({ hasDetails })
</script>

<template>
  <!-- print-keep: a versão enxuta é curta, então cada experiência fica inteira na mesma página do PDF -->
  <article class="print-keep relative">
    <!-- Marcador na linha do tempo (o emprego atual em destaque) -->
    <span
      class="absolute top-1.5 -left-[2.4rem] size-4 rounded-full border-4 border-paper ring-2"
      :class="current ? 'bg-gold ring-gold/40 shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-gold)_20%,transparent)]' : 'bg-fg/40 ring-fg/15'"
      aria-hidden="true"
    />

    <!-- Cabeçalho do item: não se separa do início do texto na quebra de página -->
    <div class="break-after-avoid">
      <p class="text-sm text-fg/60">{{ job.company }} / {{ job.period }}</p>
      <h3 class="text-lg font-bold">{{ job.position }}</h3>
    </div>

    <!-- Resumo (versão enxuta) -->
    <ul v-if="job.summary?.length" class="mt-2 space-y-1.5 text-[15px] leading-relaxed text-fg/80">
      <li v-for="(item, i) in job.summary" :key="i" class="print-keep flex gap-3">
        <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
        <span>{{ item }}</span>
      </li>
    </ul>

    <TagList v-if="job.tags?.length" :tags="job.tags" class="mt-4" />

    <template v-if="hasDetails">
      <!-- Detalhes completos (animação via grid-template-rows 0fr → 1fr). Fora do PDF. -->
      <div
        :id="detailsId"
        class="grid transition-[grid-template-rows] duration-500 ease-in-out print:hidden"
        :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        :inert="!open ? true : undefined"
      >
        <div class="min-h-0 overflow-hidden">
          <div class="mt-5 space-y-3 border-l-2 border-gold/40 pl-4 text-[15px] leading-relaxed text-fg/75">
            <p v-for="(paragraph, i) in paragraphs" :key="i" class="sm:text-justify">
              {{ paragraph }}
            </p>

            <ul v-if="job.highlights?.length" class="space-y-2 pl-1">
              <li v-for="(h, i) in job.highlights" :key="i" class="flex gap-3">
                <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                <span class="sm:text-justify">
                  <strong v-if="h.title" class="font-semibold text-fg">{{ h.title }}:</strong> {{ h.text }}
                </span>
              </li>
            </ul>

            <p v-if="job.closing" class="sm:text-justify">{{ job.closing }}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="group mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-gold transition hover:opacity-80 print:hidden"
        :aria-expanded="open"
        :aria-controls="detailsId"
        @click="emit('toggle')"
      >
        {{ open ? 'Ver menos' : 'Ver detalhes' }}
        <svg
          viewBox="0 0 24 24"
          class="size-4 transition-transform duration-300"
          :class="{ 'rotate-180': open }"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </template>
  </article>
</template>
