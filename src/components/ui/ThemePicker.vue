<script setup>
import AppIcon from './AppIcon.vue'
import { useTheme } from '../../composables/useTheme.js'

const { themes, current, setTheme, dark, toggleDark } = useTheme()
</script>

<template>
  <div class="flex items-center gap-2 rounded-full bg-white/90 p-1.5 shadow-lg ring-1 ring-black/5 backdrop-blur">
    <!-- Paletas -->
    <div role="radiogroup" aria-label="Paleta de cores" class="flex items-center gap-2">
      <button
        v-for="t in themes"
        :key="t.id"
        type="button"
        role="radio"
        :aria-checked="current === t.id"
        :aria-label="t.label"
        :title="t.label"
        class="relative size-7 cursor-pointer overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-white transition hover:scale-110 focus-visible:outline-none"
        :class="current === t.id ? 'ring-ink-dark' : 'ring-transparent hover:ring-black/20 focus-visible:ring-black/40'"
        :style="{ background: `linear-gradient(135deg, ${t.ink} 0 50%, ${t.accent} 50% 100%)` }"
        @click="setTheme(t.id)"
      />
    </div>

    <span class="h-5 w-px bg-black/15" aria-hidden="true" />

    <!-- Modo claro/escuro -->
    <button
      type="button"
      :aria-pressed="dark"
      aria-label="Modo escuro"
      :title="dark ? 'Mudar para o modo claro' : 'Mudar para o modo escuro'"
      class="grid size-7 cursor-pointer place-items-center rounded-full text-neutral-700 transition hover:scale-110 hover:text-black focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:outline-none"
      :class="dark ? 'bg-neutral-900 text-amber-300! hover:text-amber-200!' : ''"
      @click="toggleDark"
    >
      <AppIcon :name="dark ? 'sun' : 'moon'" class="size-4.5" />
    </button>
  </div>
</template>
