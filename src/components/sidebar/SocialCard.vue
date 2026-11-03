<script setup>
import AppIcon from '../ui/AppIcon.vue'
import SidebarCard from '../ui/SidebarCard.vue'

// items: [{ icon, label, handle, href }] | owner: usado no texto para leitores de tela
defineProps({
  items: { type: Array, required: true },
  owner: { type: String, default: '' },
})
</script>

<template>
  <SidebarCard title="Redes Sociais" icon="share">
    <ul class="space-y-3">
      <li v-for="s in items" :key="s.href">
        <a
          :href="s.href"
          target="_blank"
          rel="noopener"
          :aria-label="owner ? `${s.label} de ${owner}` : s.label"
          class="group flex items-center gap-3 text-[13px] font-medium"
        >
          <span
            class="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:scale-110 group-hover:bg-gold"
          >
            <AppIcon :name="s.icon" class="size-4" />
          </span>
          <span class="min-w-0">
            <span class="block text-[11px] font-semibold tracking-wide text-fg/60 uppercase">{{ s.label }}</span>
            <span class="block truncate underline-offset-2 group-hover:text-gold group-hover:underline">{{ s.handle }}</span>
          </span>
        </a>
      </li>
    </ul>
  </SidebarCard>
</template>
