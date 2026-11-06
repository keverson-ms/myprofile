<script setup>
import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  label: { type: String, default: 'Galeria' },
})

const current = ref(null)
const dialog = ref(null)
let lastFocus = null

const item = computed(() => (current.value === null ? null : props.items[current.value]))

const open = (i) => {
  lastFocus = document.activeElement
  current.value = i
}
const close = () => {
  current.value = null
  lastFocus?.focus?.()
}
const step = (dir) => {
  const n = props.items.length
  current.value = (current.value + dir + n) % n
}

const onKey = (e) => {
  if (current.value === null) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}

watch(current, async (value, old) => {
  if (value !== null && old === null) {
    window.addEventListener('keydown', onKey)
    await nextTick()
    dialog.value?.focus()
  } else if (value === null) {
    window.removeEventListener('keydown', onKey)
  }
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div>
    <ul :aria-label="label" class="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <li v-for="(m, i) in items" :key="m.src">
        <button
          type="button"
          class="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-fg/10 bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          :aria-label="`Ampliar: ${m.caption || m.alt || 'mídia ' + (i + 1)}`"
          @click="open(i)"
        >
          <img
            :src="m.type === 'video' ? m.poster : m.src"
            :alt="m.alt || ''"
            decoding="async"
            class="size-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span
            v-if="m.type === 'video'"
            class="absolute inset-0 grid place-items-center bg-black/35 transition group-hover:bg-black/20"
            aria-hidden="true"
          >
            <span class="grid size-12 place-items-center rounded-full bg-gold text-ink shadow-lg transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" class="ml-0.5 size-6" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
          <span
            v-if="m.caption"
            class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-3 pt-6 pb-2 text-left text-xs font-medium text-white"
          >
            {{ m.caption }}
          </span>
        </button>
      </li>
    </ul>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition duration-150"
        leave-to-class="opacity-0"
      >
        <div
          v-if="item"
          ref="dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="item.caption || item.alt || label"
          tabindex="-1"
          class="fixed inset-0 z-70 flex flex-col items-center justify-center bg-black/90 p-4 outline-none sm:p-10"
          @click.self="close"
        >
          <button
            type="button"
            class="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Fechar"
            @click="close"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <template v-if="items.length > 1">
            <button
              type="button"
              class="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              aria-label="Anterior"
              @click="step(-1)"
            >
              <svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              class="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
              aria-label="Próxima"
              @click="step(1)"
            >
              <svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </template>

          <figure class="flex max-h-full max-w-5xl flex-col items-center">
            <video
              v-if="item.type === 'video'"
              :key="item.src"
              :src="item.src"
              :poster="item.poster"
              controls
              autoplay
              playsinline
              preload="metadata"
              class="max-h-[78vh] max-w-full rounded-lg shadow-2xl"
            />
            <img
              v-else
              :key="item.src"
              :src="item.src"
              :alt="item.alt || ''"
              class="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption v-if="item.caption" class="mt-3 text-center text-sm text-white/85">
              {{ item.caption }}
              <span v-if="items.length > 1" class="ml-2 text-white/50">{{ current + 1 }} / {{ items.length }}</span>
            </figcaption>
          </figure>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
