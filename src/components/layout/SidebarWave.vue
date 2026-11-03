<script setup>
import { useSidebar } from '../../composables/useSidebar.js'

const { open } = useSidebar()
</script>

<!-- Onda do topo (desktop): área escura envolvendo a foto, com a faixa clara abaixo.
     Fica dentro da lateral (300px) e acompanha a animação de abrir/fechar; como tem 340px,
     desloca os 40px extras quando a lateral fecha. -->
<template>
  <svg
    class="pointer-events-none absolute top-0 left-0 hidden transition-transform duration-500 ease-in-out lg:block print:translate-x-0!"
    :class="open ? 'translate-x-0' : '-translate-x-10'"
    width="340" height="268" viewBox="0 0 340 268" aria-hidden="true"
  >
    <rect width="340" height="268" class="fill-paper" />
    <!-- Faixa clara abaixo da foto: de y=198 a y=230 (32px) -->
    <path
      class="fill-ink"
      d="M0 0 H340 C292 0 264 30 260 80 C252 160 180 192 60 198 C38 199 22 204 22 214
         C22 224 38 230 60 230 H262 C286 230 300 244 300 268 H0 Z"
    />
  </svg>
</template>
