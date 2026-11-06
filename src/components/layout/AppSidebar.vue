<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
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

const scroller = ref(null)
const { canScrollUp, canScrollDown, update, scrollStep } = useScrollHints(scroller)

const hovered = ref(false)
const onHover = (e, value) => {
  if (e.pointerType !== 'touch') hovered.value = value
}

const printing = ref(false)
const onBeforePrint = () => (printing.value = true)
const onAfterPrint = () => (printing.value = false)
onMounted(() => {
  window.addEventListener('beforeprint', onBeforePrint)
  window.addEventListener('afterprint', onAfterPrint)
})
onBeforeUnmount(() => {
  window.removeEventListener('beforeprint', onBeforePrint)
  window.removeEventListener('afterprint', onAfterPrint)
})

const photoInHeader = computed(() => !open.value && isDesktop.value && !printing.value)
</script>

<template>
  <aside
    id="sidebar"
    class="relative bg-ink pb-10 lg:col-start-1 lg:h-screen lg:overflow-hidden lg:bg-transparent lg:pb-0 print:mb-5 print:h-auto print:border-b print:border-fg/15 print:bg-transparent print:pb-4"
    :inert="!open && isDesktop ? true : undefined"
    @pointerenter="onHover($event, true)"
    @pointerleave="onHover($event, false)"
  >
   <div class="relative lg:flex lg:h-full lg:w-[25vw] lg:flex-col lg:pt-[278px] print:w-auto">
    <SidebarWave />

    <div class="absolute inset-x-0 top-[278px] bottom-0 hidden bg-ink lg:block" />

    <div class="flex flex-col items-center px-6 pt-10 pb-8 lg:p-0 print:flex-row print:gap-6 print:px-0 print:pt-0 print:pb-4">
      <Teleport defer to="#header-photo" :disabled="!photoInHeader">
        <div
          :class="
            photoInHeader ? 'size-full' : 'size-44 lg:absolute lg:top-4.5 lg:left-10 lg:z-10 print:size-28 print:shrink-0'
          "
        >
          <ProfilePhoto
            :src="resume.photo"
            :hover-src="resume.photoHover"
            :swapped="hovered"
            :swap-on-hover="photoInHeader"
            :alt="`${resume.firstName} ${resume.lastName}`"
          />
        </div>
      </Teleport>
      <ResumeHeader
        compact
        class="mt-5 lg:hidden print:mt-0"
        :first-name="resume.firstName"
        :last-name="resume.lastName"
        :role="resume.role"
      />
    </div>

    <div class="relative lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <div
        ref="scroller"
        class="relative grid gap-8 sm:grid-cols-2 sm:px-8 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:overflow-y-auto lg:overscroll-contain lg:px-0 lg:pt-1 lg:pb-10 lg:scrollbar-none print:grid! print:grid-cols-3 print:gap-6 print:overflow-visible print:px-0"
        :class="{ 'max-lg:hidden': !open }"
        @scroll.passive="update"
      >
        <slot />
      </div>

      <SidebarScrollHints :up="canScrollUp" :down="canScrollDown" @scroll="scrollStep" />
    </div>
   </div>
  </aside>
</template>
