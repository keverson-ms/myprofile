<script setup>
import MainSection from '../ui/MainSection.vue'

// paragraphs: lista de parágrafos
defineProps({
  paragraphs: { type: Array, required: true },
})
</script>

<template>
  <MainSection title="Perfil" icon="user">
    <div class="space-y-3">
      <p
        v-for="(paragraph, i) in paragraphs"
        :key="i"
        class="text-[15px] leading-relaxed text-fg/80 sm:text-justify"
      >
        {{ paragraph }}
      </p>
    </div>
  </MainSection>
</template>
