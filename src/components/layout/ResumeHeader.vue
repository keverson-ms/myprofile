<script setup>
// Nome e cargo. compact: versão sobre fundo escuro (topo da lateral no celular/tablet)
defineProps({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <header v-if="compact" class="text-center">
    <h1 class="text-3xl font-extrabold tracking-wide uppercase">
      <span class="text-gold">{{ firstName }}</span>
      {{ ' ' }}
      <span class="text-white">{{ lastName }}</span>
    </h1>
    <p class="mt-2 text-xs font-semibold tracking-[0.3em] text-white/80 uppercase">{{ role }}</p>
  </header>

  <header v-else class="text-center">
    <h1 class="text-5xl leading-none font-extrabold tracking-wide uppercase xl:text-6xl">
      <span class="text-gold">{{ firstName }}</span>
      {{ ' ' }}
      <span class="text-fg">{{ lastName }}</span>
    </h1>
    <div class="my-4 flex items-center">
      <span class="size-2.5 rounded-full bg-fg" />
      <span class="h-0.5 flex-1 bg-fg" />
      <span class="size-2.5 rounded-full bg-fg" />
    </div>
    <p class="text-base font-semibold tracking-[0.35em] uppercase">{{ role }}</p>
  </header>
</template>
