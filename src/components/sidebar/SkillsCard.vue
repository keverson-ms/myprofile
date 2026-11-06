<script setup>
import SidebarCard from '../ui/SidebarCard.vue'

defineProps({
  skills: { type: Array, required: true },
})
</script>

<template>
  <SidebarCard title="Habilidades" icon="tools">
    <ul class="space-y-2.5">
      <li v-for="skill in skills" :key="skill.name" class="flex items-center justify-between gap-3">
        <span class="text-[11px] font-semibold tracking-wide uppercase">{{ skill.name }}</span>
        <span class="flex gap-1" role="img" :aria-label="`${skill.level} de 5`">
          <svg
            v-for="n in 5"
            :key="n"
            viewBox="0 0 24 24"
            class="size-3.5"
            :class="n <= skill.level ? 'fill-fg' : 'fill-fg/20'"
            aria-hidden="true"
          >
            <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z" />
          </svg>
        </span>
      </li>
    </ul>
  </SidebarCard>
</template>
