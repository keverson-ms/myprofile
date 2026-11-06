<script setup>
import { ref } from 'vue'
import TypedName from './TypedName.vue'
import InstallButton from '../ui/InstallButton.vue'
import { useSidebar } from '../../composables/useSidebar.js'

defineProps({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, default: '' },
  compact: { type: Boolean, default: false },
  condensed: { type: Boolean, default: false },
})

const nameDone = ref(false)
const { open: sidebarOpen } = useSidebar()
</script>

<template>
  <header v-if="compact" class="text-center print:text-left">
    <h1 class="text-3xl font-extrabold tracking-wide uppercase print:text-4xl">
      <TypedName
        :first-name="firstName"
        :last-name="lastName"
        last-class="text-white print:text-fg"
        @done="nameDone = true"
      />
    </h1>
    <p
      class="mt-2 text-xs font-semibold tracking-[0.3em] text-white/80 uppercase transition-opacity duration-700 print:text-sm print:text-fg/70 print:opacity-100!"
      :class="nameDone ? 'opacity-100' : 'opacity-0'"
    >
      {{ role }}
    </p>
    <div class="mt-4 empty:hidden">
      <InstallButton />
    </div>
  </header>

  <header
    v-else
    class="sticky top-0 z-10 bg-paper/85 text-center shadow-[0_0_0_100vmax_color-mix(in_srgb,var(--color-paper)_85%,transparent)] backdrop-blur-md transition-[padding] duration-300 ease-out [clip-path:inset(0_-100vmax)] print:static"
    :class="condensed ? 'border-b border-fg/10 py-3' : 'border-b border-transparent py-0'"
  >
    <div class="flex items-center justify-center">
      <div
        id="header-photo"
        class="shrink-0 transition-all duration-500 ease-out print:hidden"
        :class="
          sidebarOpen
            ? 'mr-0 size-0 opacity-0'
            : condensed
              ? 'mr-4 size-14 opacity-100'
              : 'mr-8 size-32 opacity-100 xl:size-36'
        "
      />

      <div class="min-w-0 flex-1">
        <h1
          class="leading-none font-extrabold tracking-wide uppercase transition-[font-size] duration-300 ease-out"
          :class="condensed ? 'text-3xl' : 'text-[clamp(2.25rem,3.4vw,3.75rem)]'"
        >
          <TypedName :first-name="firstName" :last-name="lastName" last-class="text-fg" @done="nameDone = true" />
        </h1>
        <div
          class="flex items-center overflow-hidden transition-[margin,max-height,opacity] duration-300 ease-out"
          :class="condensed ? 'my-1.5 max-h-0 opacity-0' : 'my-4 max-h-4 opacity-100'"
        >
          <span class="size-2.5 rounded-full bg-fg" />
          <span class="h-0.5 flex-1 bg-fg" />
          <span class="size-2.5 rounded-full bg-fg" />
        </div>
        <p
          class="font-semibold uppercase transition-[font-size,letter-spacing,opacity] duration-700 ease-out"
          :class="[
            condensed ? 'text-xs tracking-[0.3em]' : 'text-base tracking-[0.35em]',
            nameDone ? 'opacity-100' : 'opacity-0',
          ]"
        >
          {{ role }}
        </p>
        <div v-if="!condensed" class="mt-5 empty:hidden">
          <InstallButton />
        </div>
      </div>
    </div>
  </header>
</template>
