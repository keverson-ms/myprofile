<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  src: { type: String, required: true },

  hoverSrc: { type: String, default: '' },
  swapped: { type: Boolean, default: false },
  swapOnHover: { type: Boolean, default: false },
  alt: { type: String, default: '' },
})

const MAX_TILT = 14
const PARALLAX = 6

const el = ref(null)
const tilt = ref({ x: 0, y: 0 })
const hovered = ref(false)
let enabled = false
let frame = 0

const onPointerMove = (e) => {
  if (!el.value || frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const r = el.value.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    const clamp = (v) => Math.max(-1, Math.min(1, v))
    tilt.value = {
      x: clamp(dx / (window.innerWidth / 2)),
      y: clamp(dy / (window.innerHeight / 2)),
    }
  })
}

const reset = () => (tilt.value = { x: 0, y: 0 })

onMounted(() => {
  enabled =
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!enabled) return
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', reset)
})

onBeforeUnmount(() => {
  if (!enabled) return
  window.removeEventListener('pointermove', onPointerMove)
  document.documentElement.removeEventListener('pointerleave', reset)
  cancelAnimationFrame(frame)
})

const frameStyle = computed(() => ({
  transform:
    `perspective(700px) rotateX(${-tilt.value.y * MAX_TILT}deg) rotateY(${tilt.value.x * MAX_TILT}deg)` +
    ` scale(${hovered.value ? 1.06 : 1})`,
}))

const imageStyle = computed(() => ({
  transform:
    `translate(${tilt.value.x * PARALLAX}px, ${tilt.value.y * PARALLAX}px)` +
    ` scale(${hovered.value ? 1.18 : 1.1})`,
}))

const onEnter = (e) => {
  if (e.pointerType !== 'touch') hovered.value = true
}
const onLeave = (e) => {
  if (e.pointerType !== 'touch') hovered.value = false
}
const tapped = ref(false)
const onTap = (e) => {
  if (e.pointerType === 'touch') tapped.value = !tapped.value
}

const showAlt = computed(
  () => Boolean(props.hoverSrc) && (props.swapped || tapped.value || (props.swapOnHover && hovered.value)),
)

const shineStyle = computed(() => ({
  background: `radial-gradient(circle at ${50 + tilt.value.x * 40}% ${50 + tilt.value.y * 40}%, rgb(255 255 255 / 0.35), transparent 60%)`,
}))
</script>

<template>
  <div
    ref="el"
    class="group relative size-full rounded-full bg-gold p-[7px] shadow-lg transition-[transform,box-shadow] duration-300 ease-out will-change-transform print:p-1 print:shadow-none! print:transform-none!"
    :class="hovered ? 'shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-gold)_35%,transparent),0_18px_40px_rgb(0_0_0/0.45)]' : ''"
    :style="frameStyle"
    @pointerenter="onEnter"
    @pointerleave="onLeave"
    @pointerup="onTap"
  >
    <div class="relative size-full overflow-hidden rounded-full border-4 border-ink bg-ink">
      <img
        :src="src"
        :alt="alt"
        class="size-full object-cover transition-[transform,opacity] duration-700 ease-out print:transform-none! print:opacity-100!"
        :class="showAlt ? 'opacity-0' : 'opacity-100'"
        :style="imageStyle"
      />
      <img
        v-if="hoverSrc"
        :src="hoverSrc"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 size-full object-cover transition-[transform,opacity] duration-700 ease-out print:hidden"
        :class="showAlt ? 'opacity-100' : 'opacity-0'"
        :style="imageStyle"
      />
    </div>
    <div
      class="pointer-events-none absolute inset-[7px] rounded-full mix-blend-soft-light transition-opacity duration-300 print:hidden"
      :class="hovered ? 'opacity-100' : 'opacity-0'"
      :style="shineStyle"
    />
  </div>
</template>
