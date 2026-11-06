<script setup>
import { ref } from 'vue'

const scrolled = ref(false)

const onScroll = (e) => {
  const top = e.target.scrollTop
  if (!scrolled.value && top > 80) scrolled.value = true
  else if (scrolled.value && top < 16) scrolled.value = false
}
</script>

<template>
  <main
    class="relative min-w-0 flex-1 px-6 lg:col-start-2 py-5 sm:px-5 lg:h-screen lg:overflow-y-auto lg:px-16 lg:pt-0 lg:pb-24 print:h-auto print:overflow-visible print:p-0"
    @scroll.passive="onScroll"
  >
    <div class="mx-auto lg:pt-12 print:pt-0">
      <slot :scrolled="scrolled" />
    </div>
  </main>
</template>
