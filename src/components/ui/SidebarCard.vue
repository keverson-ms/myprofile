<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <!-- Celular e desktop: preso à borda esquerda. Tablet (grade): cartão solto e arredondado. -->
  <section class="relative flex flex-col pr-6 sm:pr-0 lg:pr-6">
    <!-- Cabeçalho em pílula escura com ícone circular -->
    <div class="relative z-10 flex items-center justify-between rounded-r-full bg-ink-dark py-1 pl-8 pr-1 shadow-md sm:rounded-full sm:pl-6 lg:rounded-l-none lg:pl-8">
      <h3 class="text-sm font-bold tracking-wide text-white">{{ title }}</h3>
      <span class="grid size-7 place-items-center rounded-full bg-white text-ink-dark">
        <AppIcon :name="icon" class="size-4" />
      </span>
    </div>
    <!-- Corpo claro -->
    <div class="-mt-3 flex-1 rounded-r-3xl bg-paper px-6 pt-6 pb-4 text-fg shadow-lg shadow-black/40 sm:rounded-3xl lg:rounded-l-none">
      <slot />
    </div>
  </section>
</template>
