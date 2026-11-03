<!-- Conteúdo principal: no desktop tem rolagem própria (a lateral fica fixa) -->
<template>
  <main
    class="relative flex-1 px-6 py-10 sm:px-10 lg:h-screen lg:overflow-y-auto lg:px-16 lg:pt-12 lg:pb-24 xl:px-24 print:h-auto print:overflow-visible"
  >
    <div class="mx-auto max-w-5xl">
      <slot />
    </div>
  </main>
</template>
