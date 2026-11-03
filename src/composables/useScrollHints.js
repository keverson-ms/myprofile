import { ref, onMounted, onBeforeUnmount } from 'vue'

// Indica se um elemento rolável tem conteúdo escondido acima/abaixo e permite rolá-lo por etapas.
export function useScrollHints(target) {
  const canScrollUp = ref(false)
  const canScrollDown = ref(false)

  const update = () => {
    const el = target.value
    if (!el) return
    canScrollUp.value = el.scrollTop > 4
    canScrollDown.value = el.scrollTop + el.clientHeight < el.scrollHeight - 4
  }

  // direction: -1 (cima) | 1 (baixo); rola 60% da área visível
  const scrollStep = (direction) => {
    const el = target.value
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ top: direction * el.clientHeight * 0.6, behavior: reduce ? 'auto' : 'smooth' })
  }

  // Recalcula quando a área ou o conteúdo mudam de tamanho (janela, fontes carregando, troca de layout)
  let observer
  onMounted(() => {
    const el = target.value
    if (!el) return
    observer = new ResizeObserver(update)
    observer.observe(el)
    for (const child of el.children) observer.observe(child)
    update()
  })
  onBeforeUnmount(() => observer?.disconnect())

  return { canScrollUp, canScrollDown, update, scrollStep }
}
