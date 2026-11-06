<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Em construção' },
  message: { type: String, default: 'O lançamento está quase pronto. Volte em breve!' },
  dismissible: { type: Boolean, default: true },
})
const emit = defineEmits(['close'])

const closeButton = ref(null)
const close = () => props.dismissible && emit('close')
const onKey = (e) => e.key === 'Escape' && close()

onMounted(() => {
  window.addEventListener('keydown', onKey)
  closeButton.value?.focus()
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

const stars = [
  [24, 30, 1.4], [62, 70, 1], [96, 22, 1.6], [140, 48, 1], [176, 18, 1.2], [118, 96, 0.9],
  [30, 120, 1.1], [300, 90, 1.2], [250, 112, 0.9], [292, 150, 1.3], [44, 170, 0.9], [150, 130, 1],
]
</script>

<template>
  <div
    class="fixed inset-0 z-60 grid place-items-center bg-black/60 p-4 backdrop-blur-sm print:hidden"
    role="dialog"
    aria-modal="true"
    aria-labelledby="uc-title"
    aria-describedby="uc-message"
    @click.self="close"
  >
    <div class="relative w-full max-w-72 overflow-hidden rounded-2xl bg-paper text-fg shadow-2xl">
      <button
        v-if="dismissible"
        ref="closeButton"
        type="button"
        class="absolute top-2 right-2 z-10 grid size-7 cursor-pointer place-items-center rounded-full bg-white/90 text-ink-dark shadow-lg transition hover:scale-110 hover:text-gold"
        aria-label="Fechar aviso"
        title="Fechar"
        @click="close"
      >
        <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <svg viewBox="0 0 320 280" class="block w-full" role="img" aria-label="Foguete pousando de ré enquanto um homem olha para cima e aponta para ele">
        <defs>
          <linearGradient id="uc-soot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#7a7a7a" stop-opacity="0" />
            <stop offset="1" stop-color="#5a5a5a" stop-opacity="0.75" />
          </linearGradient>
        </defs>

        <rect width="320" height="280" class="fill-ink" />
        <circle v-for="(s, i) in stars" :key="i" :cx="s[0]" :cy="s[1]" :r="s[2]" fill="#fff" class="uc-star" :style="{ animationDelay: `${i * 0.37}s` }" />
        <circle cx="270" cy="40" r="15" fill="#ececec" opacity="0.9" />
        <circle cx="264" cy="36" r="3" class="fill-ink" opacity="0.12" />
        <circle cx="275" cy="46" r="2" class="fill-ink" opacity="0.12" />

        <path d="M0 250 Q160 236 320 250 V280 H0 Z" class="fill-ink-dark" />
        <ellipse cx="215" cy="247" rx="48" ry="8" class="fill-gold" opacity="0.45" />
        <path d="M203 243 L227 251 M227 243 L203 251" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.8" />

        <g class="uc-smoke">
          <circle cx="188" cy="242" r="10" fill="#fff" opacity="0.5" />
          <circle cx="242" cy="242" r="10" fill="#fff" opacity="0.5" />
          <circle cx="174" cy="246" r="7" fill="#fff" opacity="0.4" />
          <circle cx="256" cy="246" r="7" fill="#fff" opacity="0.4" />
        </g>

        <g transform="translate(215 0)">
          <g class="uc-rocket">
            <g class="uc-flame">
              <path d="M-8 126 Q0 178 8 126 Z" class="fill-gold" />
              <path d="M-4 126 Q0 156 4 126 Z" fill="#fff6c8" />
            </g>
            <path d="M-8 100 L-25 134 M8 100 L25 134" stroke="#d9d9d9" stroke-width="3" stroke-linecap="round" />
            <path d="M-29 134 H-21 M21 134 H29" stroke="#d9d9d9" stroke-width="3" stroke-linecap="round" />
            <path d="M-7 118 H7 L10 126 H-10 Z" fill="#444" />
            <rect x="-9" y="14" width="18" height="104" fill="#f4f4f4" />
            <rect x="-9" y="88" width="18" height="30" fill="url(#uc-soot)" />
            <rect x="-9" y="32" width="18" height="3" class="fill-gold" />
            <rect x="-9" y="0" width="18" height="14" rx="2" fill="#2b2b2b" />
            <rect x="-17" y="4" width="8" height="6" rx="1" fill="#5c5c5c" />
            <rect x="9" y="4" width="8" height="6" rx="1" fill="#5c5c5c" />
          </g>
        </g>

        <g transform="translate(18 0)">
          <path d="M30 280 C32 248 58 236 85 234 C112 236 138 248 140 280 Z" fill="#2c2c2c" />
          <path d="M68 237 Q86 248 104 237 L110 280 H62 Z" fill="#0f0f0f" />
          <path d="M68 237 L76 262 M104 237 L96 262" stroke="#1c1c1c" stroke-width="2" />
          <path d="M124 248 L148 226" stroke="#2c2c2c" stroke-width="13" stroke-linecap="round" />
          <path d="M148 226 L165 200" stroke="#e8b796" stroke-width="9" stroke-linecap="round" />
          <g fill="none" stroke="#e8b796" stroke-linecap="round">
            <path d="M163.5 189 L162.5 180.5 M167 188 L167 178.5 M170.5 188.5 L171.5 179.5 M173.5 190.5 L175.5 183" stroke-width="3.2" />
            <path d="M161 196 L155.5 191" stroke-width="3.4" />
          </g>
          <ellipse cx="167.5" cy="194" rx="6.5" ry="7" fill="#e8b796" />
          <path d="M75 240 V214 H97 V240 Z" fill="#dca988" />

          <g transform="rotate(-18 86 214)">
          <g class="uc-head">
            <ellipse cx="59" cy="196" rx="5" ry="9" fill="#e3b08e" />
            <ellipse cx="113" cy="196" rx="5" ry="9" fill="#e3b08e" />
            <path
              d="M60 182 C60 160 72 149 86 149 C100 149 112 160 112 182 V200 C112 215 104 225 93 228 H79 C68 225 60 215 60 200 Z"
              fill="#e8b796"
            />
            <path d="M62 205 C64 218 72 226 80 228 H92 C100 226 108 218 110 205 C104 216 96 222 86 222 C76 222 68 216 62 205 Z" fill="#8a6a55" opacity="0.18" />
            <path d="M86 222 v4" stroke="#c98f70" stroke-width="1.2" stroke-linecap="round" />
            <path
              d="M58 184 C54 156 68 138 90 138 C110 139 120 154 114 182 C113 172 110 166 105 162 C98 157 76 156 68 161 C62 165 59 173 58 184 Z"
              fill="#3a2a1f"
            />
            <path d="M70 152 C80 145 96 144 108 152 M66 158 C78 150 98 149 111 158" stroke="#5a4433" stroke-width="1.4" stroke-linecap="round" fill="none" />
            <path d="M68 177 q7 -3 14 -0.5 M91 176.5 q7 -2.5 14 0.5" stroke="#3a2a1f" stroke-width="2.4" stroke-linecap="round" fill="none" />
            <ellipse cx="75" cy="186" rx="4.8" ry="4" fill="#fff" />
            <ellipse cx="97" cy="185.5" rx="4.8" ry="4" fill="#fff" />
            <circle cx="76.6" cy="184" r="2.3" fill="#5b7a94" />
            <circle cx="98.6" cy="183.5" r="2.3" fill="#5b7a94" />
            <circle cx="76.8" cy="183.8" r="1" fill="#1d1d1d" />
            <circle cx="98.8" cy="183.3" r="1" fill="#1d1d1d" />
            <path d="M87 186 L88.5 200 Q87 203 83 202" stroke="#c98f70" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <path d="M72 208 Q86 223 101 207 Q86 212 72 208 Z" fill="#5a1f1f" />
            <path d="M75 209 Q86 213 98 208.5 L97 211.5 Q86 216 76.5 212 Z" fill="#fff" />
            <path d="M68 203 q-2 6 2.5 10 M104 202 q2 6 -2.5 10" stroke="#c98f70" stroke-width="1.3" stroke-linecap="round" fill="none" />
          </g>
          </g>
        </g>
      </svg>

      <div class="px-4 pt-3.5 pb-4 text-center">
        <h2 id="uc-title" class="text-lg font-extrabold tracking-wide uppercase">
          {{ title }}<span class="text-gold" aria-hidden="true"><span class="uc-dot">.</span><span class="uc-dot">.</span><span class="uc-dot">.</span></span>
        </h2>
        <p id="uc-message" class="mt-1 text-xs text-fg/70">{{ message }}</p>
      </div>

      <div
        class="h-2 bg-[repeating-linear-gradient(45deg,var(--color-gold)_0_10px,var(--color-ink-dark)_10px_20px)]"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<style scoped>
.uc-rocket {
  animation: uc-land 4s ease-in-out infinite alternate;
}
@keyframes uc-land {
  from { transform: translateY(8px); }
  to { transform: translateY(104px); }
}

.uc-flame {
  transform-box: fill-box;
  transform-origin: top center;
  animation: uc-flicker 0.12s ease-in-out infinite alternate;
}
@keyframes uc-flicker {
  from { transform: scaleY(0.82) scaleX(0.95); }
  to { transform: scaleY(1.12) scaleX(1.05); }
}

.uc-smoke {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation: uc-smoke 4s ease-in-out infinite alternate;
}
@keyframes uc-smoke {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1.25); }
}

.uc-head {
  transform-box: view-box;
  transform-origin: 86px 214px; 
  animation: uc-follow 4s ease-in-out infinite alternate;
}
@keyframes uc-follow {
  from { rotate: -6deg; }
  to { rotate: 4deg; }
}

.uc-star {
  animation: uc-twinkle 2.4s ease-in-out infinite alternate;
}
@keyframes uc-twinkle {
  from { opacity: 0.25; }
  to { opacity: 1; }
}

.uc-dot {
  animation: uc-dot 1.4s infinite;
}
.uc-dot:nth-child(2) { animation-delay: 0.2s; }
.uc-dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes uc-dot {
  0%, 60%, 100% { opacity: 0.2; }
  30% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .uc-rocket, .uc-flame, .uc-smoke, .uc-head, .uc-star, .uc-dot { animation: none; }
  .uc-rocket { transform: translateY(70px); }
}
</style>
