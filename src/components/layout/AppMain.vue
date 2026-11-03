<script setup>
import { ref } from 'vue'

// Conteúdo principal: no desktop tem rolagem própria (a lateral fica fixa).
// Expõe `scrolled` no slot para o cabeçalho fixo se compactar ao rolar.
const scrolled = ref(false)

// Histerese: compacta após 80px e só volta perto do topo (evita "piscar" no limite)
const onScroll = (e) => {
  const top = e.target.scrollTop
  if (!scrolled.value && top > 80) scrolled.value = true
  else if (scrolled.value && top < 16) scrolled.value = false
}
</script>

<template>
  <main
    class="relative flex-1 px-6 py-10 sm:px-10 lg:h-screen lg:overflow-y-auto lg:px-16 lg:pt-0 lg:pb-24 xl:px-24 print:h-auto print:overflow-visible"
    @scroll.passive="onScroll"
  >
    <!-- O espaço do topo fica aqui (e não no <main>) para o cabeçalho fixo grudar exatamente no topo -->
    <div class="mx-auto max-w-5xl lg:pt-12">
      <slot :scrolled="scrolled" />
    </div>
  </main>
</template>
