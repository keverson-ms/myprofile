<script setup>
import { ref, computed, nextTick } from 'vue'
import MainSection from '../ui/MainSection.vue'
import StackCloud from '../ui/StackCloud.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projectMatches, tagMatches } from '../../composables/useProjectMatcher.js'

// paragraphs: parágrafos do perfil | stack: palavras da nuvem | projects: projetos (filtrados pela nuvem)
const props = defineProps({
  paragraphs: { type: Array, required: true },
  stack: { type: Array, default: () => [] },
  projects: { type: Array, default: () => [] },
})

const ALL = '__all__'
const selected = ref(null)
const panel = ref(null)

const words = computed(() => props.stack.map((w) => (typeof w === 'string' ? { name: w } : w)))
const selectedWord = computed(() => words.value.find((w) => w.name === selected.value) ?? null)

// Quantos projetos cada palavra encontra (palavras sem projetos ficam não clicáveis)
const counts = computed(() =>
  props.projects.length
    ? Object.fromEntries(words.value.map((w) => [w.name, props.projects.filter((p) => projectMatches(p, w)).length]))
    : null,
)

const visibleProjects = computed(() => {
  if (selected.value === ALL) return props.projects
  if (!selectedWord.value) return []
  return props.projects.filter((p) => projectMatches(p, selectedWord.value))
})

const highlight = (tag) => (selectedWord.value ? tagMatches(tag, selectedWord.value) : false)

const select = async (name) => {
  selected.value = name
  if (!name) return
  // Leva o painel de projetos para a vista
  await nextTick()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  panel.value?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' })
}
</script>

<template>
  <MainSection title="Perfil" icon="user">
    <div class="space-y-3">
      <p
        v-for="(paragraph, i) in paragraphs"
        :key="i"
        class="text-[15px] leading-relaxed text-fg/80 sm:text-justify"
      >
        {{ paragraph }}
      </p>
    </div>

    <!-- Nuvem de tecnologias + projetos (fora do PDF: as stacks já aparecem em cada experiência) -->
    <div v-if="stack.length" class="mt-8 print:hidden">
      <StackCloud :words="stack" :selected="selected === ALL ? null : selected" :counts="counts" @select="select" />

      <div v-if="projects.length" ref="panel" class="mt-6 scroll-mt-28">
        <!-- Barra de status / ações -->
        <div class="mb-5 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-fg/70" aria-live="polite">
          <template v-if="selected === ALL">
            <span>
              Todos os <strong class="text-fg">{{ projects.length }} projetos</strong>
            </span>
          </template>
          <template v-else-if="selected">
            <span>
              <strong class="text-fg">{{ visibleProjects.length }}</strong>
              {{ visibleProjects.length === 1 ? 'projeto' : 'projetos' }} com
              <strong class="text-gold">{{ selected }}</strong>
            </span>
          </template>
          <span v-else>Clique em uma tecnologia da nuvem para ver os projetos em que atuei com ela.</span>

          <button
            v-if="selected !== ALL"
            type="button"
            class="cursor-pointer rounded-full border border-fg/20 px-3 py-1 text-xs font-semibold tracking-wide uppercase transition hover:border-gold hover:text-gold"
            @click="select(ALL)"
          >
            Ver todos os projetos
          </button>
          <button
            v-if="selected"
            type="button"
            class="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-gold uppercase underline-offset-2 hover:underline"
            @click="select(null)"
          >
            Limpar
          </button>
        </div>

        <!-- Projetos -->
        <TransitionGroup
          tag="ul"
          class="relative grid gap-5 md:grid-cols-2"
          enter-active-class="transition duration-300"
          enter-from-class="opacity-0 translate-y-2"
          leave-active-class="transition duration-150 absolute opacity-0"
          move-class="transition duration-300"
        >
          <!-- O projeto em destaque (featured) ocupa a largura toda -->
          <li v-for="project in visibleProjects" :key="project.name" :class="{ 'md:col-span-2': project.featured }">
            <ProjectCard :project="project" :highlight="highlight" />
          </li>
        </TransitionGroup>

        <!-- Nota sobre a contagem de commits, com um ponto dourado pulsando para chamar a atenção -->
        <p v-if="visibleProjects.length" class="mt-5 flex justify-center">
          <span
            class="commits-note inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium text-fg/80"
          >
            <span class="relative flex size-2.5" aria-hidden="true">
              <span class="absolute inline-flex size-full rounded-full bg-gold opacity-75 motion-safe:animate-ping" />
              <span class="relative inline-flex size-2.5 rounded-full bg-gold" />
            </span>
            Commits próprios nos últimos 3 anos, sem contar merges.
          </span>
        </p>
      </div>
    </div>
  </MainSection>
</template>

<style scoped>
/* A borda da nota "respira" com um brilho dourado */
.commits-note {
  animation: note-glow 2.4s ease-in-out infinite;
}
@keyframes note-glow {
  0%,
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-gold) 0%, transparent);
  }
  50% {
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-gold) 18%, transparent);
  }
}
@media (prefers-reduced-motion: reduce) {
  .commits-note { animation: none; }
}
</style>
