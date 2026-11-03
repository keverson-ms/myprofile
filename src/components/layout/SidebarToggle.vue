<script setup>
import AppIcon from '../ui/AppIcon.vue'
import { useSidebar } from '../../composables/useSidebar.js'

const { open, toggle } = useSidebar()
</script>

<template>
  <button
    type="button"
    class="fixed top-3 left-3 z-50 grid size-9 cursor-pointer place-items-center rounded-full bg-white/90 text-ink-dark shadow-lg ring-1 ring-black/5 backdrop-blur transition hover:scale-110 hover:text-gold print:hidden"
    :aria-expanded="open"
    aria-controls="sidebar"
    :aria-label="open ? 'Fechar barra lateral' : 'Abrir barra lateral'"
    :title="open ? 'Fechar barra lateral' : 'Abrir barra lateral'"
    @click="toggle"
  >
    <AppIcon :name="open ? 'panel-close' : 'panel-open'" class="size-5" />
  </button>
</template>
