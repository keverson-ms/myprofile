<script setup>
import { ref } from 'vue'
import TypedName from './TypedName.vue'

// Nome (com efeito de digitação) e cargo.
// compact: versão sobre fundo escuro (topo da lateral no celular/tablet)
// condensed: versão reduzida do cabeçalho fixo, usada enquanto o conteúdo está rolado
defineProps({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, default: '' },
  compact: { type: Boolean, default: false },
  condensed: { type: Boolean, default: false },
})

// O cargo aparece (fade) quando o nome termina de ser digitado pela primeira vez
// e continua visível nos ciclos seguintes (o nome apaga e redigita a cada 5s).
const nameDone = ref(false)
</script>

<template>
  <header v-if="compact" class="text-center">
    <h1 class="text-3xl font-extrabold tracking-wide uppercase">
      <TypedName :first-name="firstName" :last-name="lastName" last-class="text-white" @done="nameDone = true" />
    </h1>
    <p
      class="mt-2 text-xs font-semibold tracking-[0.3em] text-white/80 uppercase transition-opacity duration-700"
      :class="nameDone ? 'opacity-100' : 'opacity-0'"
    >
      {{ role }}
    </p>
  </header>

  <!-- Fixo no topo do <main> ao rolar. O fundo se estende até as bordas do <main>
       (sombra larga + clip-path) para o conteúdo passar por baixo sem aparecer nas laterais. -->
  <header
    v-else
    class="sticky top-0 z-10 bg-paper/85 text-center shadow-[0_0_0_100vmax_color-mix(in_srgb,var(--color-paper)_85%,transparent)] backdrop-blur-md transition-[padding] duration-300 ease-out [clip-path:inset(0_-100vmax)] print:static"
    :class="condensed ? 'border-b border-fg/10 py-3' : 'border-b border-transparent py-0'"
  >
    <h1
      class="leading-none font-extrabold tracking-wide uppercase transition-[font-size] duration-300 ease-out"
      :class="condensed ? 'text-3xl' : 'text-5xl xl:text-6xl'"
    >
      <TypedName :first-name="firstName" :last-name="lastName" last-class="text-fg" @done="nameDone = true" />
    </h1>
    <!-- Linha decorativa: some na versão reduzida (deixa só nome + cargo, sem colidir com o seletor de paleta) -->
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
  </header>
</template>
