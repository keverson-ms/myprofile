<script setup>
import MediaGallery from './MediaGallery.vue'

// Cartão de projeto. Campos opcionais: award (premiação), media (fotos/vídeos), links (externos).
// highlight: função que diz se uma etiqueta corresponde à tecnologia selecionada.
// featured: projeto em destaque (borda dourada, selo "Projeto principal"; o pai o faz ocupar a largura toda).
defineProps({
  project: { type: Object, required: true },
  highlight: { type: Function, default: () => false },
})

const GROUPS = [
  { key: 'stack', label: 'Stack' },
  { key: 'integrations', label: 'Integrações' },
  { key: 'infra', label: 'Infra' },
]
</script>

<template>
  <article
    class="relative flex h-full flex-col rounded-2xl border p-5 transition"
    :class="
      project.featured
        ? 'border-gold/60 bg-gold/5 shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-gold)_10%,transparent)] sm:p-7'
        : 'border-fg/10 bg-fg/3 hover:border-gold/50'
    "
  >
    <header class="mb-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
      <div class="min-w-0">
        <p
          v-if="project.featured"
          class="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-ink uppercase"
        >
          <svg viewBox="0 0 24 24" class="size-3.5" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z" />
          </svg>
          Projeto principal
        </p>
        <h3 class="leading-snug font-bold" :class="project.featured ? 'text-xl sm:text-2xl' : 'text-lg'">
          {{ project.name }}
        </h3>
        <p class="text-sm text-fg/60">{{ [project.org, project.period].filter(Boolean).join(' · ') }}</p>
      </div>

      <!-- Commits próprios no período (sem merges) -->
      <span
        v-if="project.commits"
        class="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold"
        :class="project.featured ? 'border-gold/50 text-gold' : 'border-fg/15 text-fg/70'"
        :title="`${project.commits} commits próprios nos últimos 3 anos (sem merges)`"
      >
        <svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M3 12h5.5M15.5 12H21" />
        </svg>
        {{ project.commits.toLocaleString('pt-BR') }} commits
      </span>
    </header>

    <!-- Premiação -->
    <div
      v-if="project.award"
      class="mb-4 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3"
    >
      <span class="grid size-10 shrink-0 place-items-center rounded-full bg-gold text-ink shadow" aria-hidden="true">
        <!-- Troféu -->
        <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
        </svg>
      </span>
      <div class="min-w-0 text-sm leading-snug">
        <p class="font-extrabold tracking-wide text-gold uppercase">{{ project.award.title }}</p>
        <p class="text-fg/85">
          {{ project.award.event }}<template v-if="project.award.place"> · {{ project.award.place }}</template>
        </p>
        <p v-if="project.award.detail" class="text-fg/60">{{ project.award.detail }}</p>
      </div>
    </div>

    <p class="leading-relaxed text-fg/80" :class="project.featured ? 'text-base sm:text-justify' : 'text-[15px]'">
      {{ project.summary }}
    </p>

    <!-- Fotos e vídeos -->
    <MediaGallery
      v-if="project.media?.length"
      :items="project.media"
      :label="`Fotos e vídeos: ${project.name}`"
      class="mt-5"
    />

    <!-- Links externos -->
    <ul v-if="project.links?.length" class="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
      <li v-for="link in project.links" :key="link.href">
        <a
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-2 hover:underline"
        >
          {{ link.label }}
          <svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </li>
    </ul>

    <dl class="mt-4 space-y-2">
      <template v-for="g in GROUPS" :key="g.key">
        <div v-if="project[g.key]?.length" class="flex flex-wrap items-center gap-1.5">
          <dt class="mr-1 text-[11px] font-semibold tracking-wide text-fg/50 uppercase">{{ g.label }}</dt>
          <dd
            v-for="tag in project[g.key]"
            :key="tag"
            class="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            :class="highlight(tag) ? 'bg-gold text-ink' : 'bg-ink text-white'"
          >
            {{ tag }}
          </dd>
        </div>
      </template>
    </dl>
  </article>
</template>
