<script setup>
// Cartão de projeto. highlight: função que diz se uma etiqueta corresponde à tecnologia selecionada.
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
  <article class="flex h-full flex-col rounded-2xl border border-fg/10 bg-fg/3 p-5 transition hover:border-gold/50">
    <header class="mb-2">
      <h3 class="text-lg leading-snug font-bold">{{ project.name }}</h3>
      <p class="text-sm text-fg/60">
        {{ [project.org, project.period, project.commits && `${project.commits} commits`].filter(Boolean).join(' · ') }}
      </p>
    </header>

    <p class="text-[15px] leading-relaxed text-fg/80">{{ project.summary }}</p>

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
