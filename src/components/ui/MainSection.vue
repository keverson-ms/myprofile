<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <section>
    <header class="mb-8 border-b-2 border-fg pb-3">
      <h2 class="flex items-center gap-3 text-2xl font-bold text-fg lg:text-3xl">
        <AppIcon :name="icon" class="size-8 text-fg" />
        {{ title }}
      </h2>
    </header>
    <slot />
  </section>
</template>
