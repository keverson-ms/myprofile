<script setup>
import { computed } from 'vue'
import TagList from '../ui/TagList.vue'

// job: { company, period, position, description?, highlights?, closing?, tags? }
const props = defineProps({
  job: { type: Object, required: true },
})

// description aceita texto único ou lista de parágrafos
const paragraphs = computed(() => [].concat(props.job.description ?? []))
</script>

<template>
  <article>
    <p class="text-sm text-fg/60">{{ job.company }} / {{ job.period }}</p>
    <h3 class="text-lg font-bold">{{ job.position }}</h3>

    <div class="mt-2 space-y-3 text-[15px] leading-relaxed text-fg/80">
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

    <TagList v-if="job.tags?.length" :tags="job.tags" class="mt-4" />
  </article>
</template>
