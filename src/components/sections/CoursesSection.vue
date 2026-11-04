<script setup>
import MainSection from '../ui/MainSection.vue'
import AppIcon from '../ui/AppIcon.vue'

// items: [{ name, institution, year?, hours?, url? }]
defineProps({
  items: { type: Array, required: true },
})

// Linha de detalhes: "Instituição · 2024 · 40h"
const details = (course) =>
  [course.institution, course.year, course.hours && `${course.hours}h`].filter(Boolean).join(' · ')
</script>

<template>
  <MainSection title="Cursos" icon="award">
    <ul class="grid gap-4 sm:grid-cols-2">
      <li
        v-for="(course, i) in items"
        :key="i"
        class="print-keep flex gap-4 rounded-2xl border border-fg/10 bg-fg/[0.03] p-4 transition hover:border-gold/50 print:gap-3 print:p-3"
      >
        <span class="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-gold print:size-7 print:bg-transparent print:text-fg/70">
          <AppIcon name="award" class="size-5" />
        </span>
        <div class="min-w-0">
          <h3 class="font-bold leading-snug">{{ course.name }}</h3>
          <p v-if="details(course)" class="mt-0.5 text-sm text-fg/60">{{ details(course) }}</p>
          <a
            v-if="course.url"
            :href="course.url"
            target="_blank"
            rel="noopener"
            class="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-2 hover:underline print:hidden"
          >
            Ver certificado
            <svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </li>
    </ul>
  </MainSection>
</template>
