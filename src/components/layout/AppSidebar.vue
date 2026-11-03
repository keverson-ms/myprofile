<script setup>
import { ref } from 'vue'
import ProfilePhoto from '../ui/ProfilePhoto.vue'
import ResumeHeader from './ResumeHeader.vue'
import SidebarWave from './SidebarWave.vue'
import SidebarScrollHints from './SidebarScrollHints.vue'
import { useSidebar } from '../../composables/useSidebar.js'
import { useMediaQuery } from '../../composables/useMediaQuery.js'
import { useScrollHints } from '../../composables/useScrollHints.js'

defineProps({
  resume: { type: Object, required: true },
})

const { open } = useSidebar()
const isDesktop = useMediaQuery('(min-width: 1024px)')

// Cartões roláveis (desktop) e seus indicadores
const scroller = ref(null)
const { canScrollUp, canScrollDown, update, scrollStep } = useScrollHints(scroller)

// Mouse sobre a lateral: a foto vira a imagem alternativa (toque é tratado na própria foto)
const hovered = ref(false)
const onHover = (e, value) => {
  if (e.pointerType !== 'touch') hovered.value = value
}
</script>

<template>
  <!-- Desktop fechado: margem negativa empurra a lateral para fora e o conteúdo ocupa a largura toda -->
  <aside
    id="sidebar"
    class="relative shrink-0 bg-ink pb-10 transition-[margin] duration-500 ease-in-out lg:flex lg:h-screen lg:w-75 lg:flex-col lg:bg-transparent lg:pt-67 lg:pb-0 print:ml-0! print:h-auto"
    :class="open ? 'lg:ml-0' : 'lg:-ml-75'"
    :inert="!open && isDesktop ? true : undefined"
    @pointerenter="onHover($event, true)"
    @pointerleave="onHover($event, false)"
  >
    <SidebarWave />

    <!-- Fundo escuro da lateral abaixo da onda -->
    <div class="absolute inset-x-0 top-67 bottom-0 hidden bg-ink lg:block" />

    <!-- Foto (+ nome no celular/tablet) -->
    <div class="flex flex-col items-center px-6 pt-10 pb-8 lg:p-0">
      <div class="size-44 lg:absolute lg:top-4.5 lg:left-10 lg:z-10">
        <ProfilePhoto
          :src="resume.photo"
          :hover-src="resume.photoHover"
          :swapped="hovered"
          :alt="`${resume.firstName} ${resume.lastName}`"
        />
      </div>
      <ResumeHeader
        compact
        class="mt-5 lg:hidden"
        :first-name="resume.firstName"
        :last-name="resume.lastName"
        :role="resume.role"
      />
    </div>

    <div class="relative lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <!-- Celular/tablet fechado: recolhe só os cartões (foto e nome continuam visíveis) -->
      <div
        ref="scroller"
        class="relative grid gap-8 sm:grid-cols-2 sm:px-8 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:overflow-y-auto lg:overscroll-contain lg:px-0 lg:pt-6 lg:pb-10 lg:scrollbar-none print:grid! print:overflow-visible"
        :class="{ 'max-lg:hidden': !open }"
        @scroll.passive="update"
      >
        <slot />
      </div>

      <SidebarScrollHints :up="canScrollUp" :down="canScrollDown" @scroll="scrollStep" />
    </div>
  </aside>
</template>
