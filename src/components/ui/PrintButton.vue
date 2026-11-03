<script setup>
const printPage = () => window.print()
</script>

<template>
  <button
    type="button"
    class="fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-ink-dark px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-gold print:hidden"
    @click="printPage"
  >
    Imprimir / PDF
  </button>
</template>
