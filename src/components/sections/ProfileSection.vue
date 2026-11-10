<script setup>
import { ref, computed, nextTick } from 'vue'
import MainSection from '../ui/MainSection.vue'
import StackCloud from '../ui/StackCloud.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projectMatches, tagMatches } from '../../composables/useProjectMatcher.js'

const props = defineProps({
  paragraphs: { type: Array, required: true },
  stack: { type: Array, default: () => [] },
  projects: { type: Array, default: () => [] },
})

const ALL = '__all__'
const selected = ref(null)
const panel = ref(null)
const featuredEl = ref(null)

const words = computed(() => props.stack.map((w) => (typeof w === 'string' ? { name: w } : w)))
const selectedWord = computed(() => words.value.find((w) => w.name === selected.value) ?? null)

const featured = computed(() => props.projects.find((p) => p.featured) ?? null)
const others = computed(() => props.projects.filter((p) => !p.featured))

const counts = computed(() =>
  props.projects.length
    ? Object.fromEntries(words.value.map((w) => [w.name, props.projects.filter((p) => projectMatches(p, w)).length]))
    : null,
)

const visibleProjects = computed(() => {
  if (selected.value === ALL) return others.value
  if (!selectedWord.value) return []
  return others.value.filter((p) => projectMatches(p, selectedWord.value))
})

const featuredMatches = computed(
  () => Boolean(featured.value && selectedWord.value && projectMatches(featured.value, selectedWord.value)),
)

const highlight = (tag) => (selectedWord.value ? tagMatches(tag, selectedWord.value) : false)

const scrollTo = (el) => {
  el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

const select = async (name) => {
  selected.value = name
  if (!name) return
  await nextTick()

  if (featuredMatches.value && !visibleProjects.value.length) scrollTo(featuredEl.value)
  else scrollTo(panel.value)
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

    <div v-if="featured" ref="featuredEl" class="mt-8 scroll-mt-28 print:hidden">
      <ProjectCard
        :project="featured"
        :highlight="highlight"
        class="transition-shadow duration-300"
        :class="{ 'ring-2 ring-gold': featuredMatches }"
      />
    </div>

    <div v-if="stack.length" class="mt-10 print:hidden">
      <StackCloud :words="stack" :selected="selected === ALL ? null : selected" :counts="counts" @select="select" />

      <div v-if="projects.length" ref="panel" class="mt-6 scroll-mt-28">
        <div class="mb-5 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-fg/70" aria-live="polite">
          <template v-if="selected === ALL">
            <span>
              Todos os <strong class="text-fg">{{ others.length }} projetos</strong>
              <template v-if="featured"> (além do {{ featured.name.split(' — ')[0] }}, em destaque acima)</template>
            </span>
          </template>
          <template v-else-if="selected">
            <span v-if="!visibleProjects.length && featuredMatches">
              Somente o <strong class="text-gold">{{ featured.name.split(' — ')[0] }}</strong>, em destaque acima, usa
              <strong class="text-gold">{{ selected }}</strong>
            </span>
            <span v-else>
              <strong class="text-fg">{{ visibleProjects.length }}</strong>
              {{ visibleProjects.length === 1 ? 'projeto' : 'projetos' }} com
              <strong class="text-gold">{{ selected }}</strong>
              <template v-if="featuredMatches"> + {{ featured.name.split(' — ')[0] }}, em destaque acima</template>
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

        <TransitionGroup
          tag="ul"
          class="relative grid gap-5 md:grid-cols-2"
          enter-active-class="transition duration-300"
          enter-from-class="opacity-0 translate-y-2"
          leave-active-class="transition duration-150 absolute opacity-0"
          move-class="transition duration-300"
        >
          <li v-for="project in visibleProjects" :key="project.name">
            <ProjectCard :project="project" :highlight="highlight" />
          </li>
        </TransitionGroup>

        <p class="mt-5 flex justify-center">
          <span
            class="commits-note inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium text-fg/80"
          >
            <span class="relative flex size-2.5" aria-hidden="true">
              <span class="absolute inline-flex size-full rounded-full bg-gold opacity-75 animate-ping" />
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
</style>
