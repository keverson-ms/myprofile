<script setup>
import AppIcon from '../ui/AppIcon.vue'
import SidebarCard from '../ui/SidebarCard.vue'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <SidebarCard title="Interesses" icon="heart">
    <ul class="flex justify-between">
      <li
        v-for="p in items"
        :key="p.label"
        :title="p.label"
        class="grid size-11 place-items-center rounded-full bg-ink text-white ring-2 ring-ink ring-offset-2 ring-offset-paper"
      >
        <AppIcon :name="p.icon" class="size-5" />
        <span class="sr-only">{{ p.label }}</span>
      </li>
    </ul>
  </SidebarCard>
</template>
