<script setup>
import { useInstallPrompt } from '../../composables/useInstallPrompt.js'

const { canInstall, install } = useInstallPrompt()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-2 opacity-0"
    @leave="(el, done) => done()"
  >
    <button
      v-if="canInstall"
      type="button"
      class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold tracking-normal text-ink normal-case shadow-lg transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold print:hidden"
      @click="install"
    >
      <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
      Instalar app
    </button>
  </Transition>
</template>
