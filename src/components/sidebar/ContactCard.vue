<script setup>
import AppIcon from '../ui/AppIcon.vue'
import SidebarCard from '../ui/SidebarCard.vue'

// items: [{ icon, text, href? }]
defineProps({
  items: { type: Array, required: true },
})

// Links externos abrem em nova aba; mailto:/tel: abrem direto
const isExternal = (href) => href.startsWith('http')
</script>

<template>
  <SidebarCard title="Contato" icon="contact">
    <ul class="space-y-3 print:space-y-1.5">
      <li v-for="item in items" :key="item.text" class="flex items-center gap-3 text-[13px] font-medium print:gap-2">
        <span class="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-white print:size-4 print:bg-transparent print:text-fg/70">
          <AppIcon :name="item.icon" class="size-4" />
        </span>
        <a
          v-if="item.href"
          :href="item.href"
          :target="isExternal(item.href) ? '_blank' : undefined"
          rel="noopener"
          class="wrap-break-word underline-offset-2 hover:text-gold hover:underline"
        >
          <!-- E-mail: permite quebrar a linha logo após o @ -->
          <template v-if="item.text.includes('@')">{{ item.text.split('@')[0] }}@<wbr />{{ item.text.split('@')[1] }}</template>
          <template v-else>{{ item.text }}</template>
        </a>
        <span v-else class="break-all">{{ item.text }}</span>
      </li>
    </ul>
  </SidebarCard>
</template>
