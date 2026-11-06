import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollHints(target) {
  const canScrollUp = ref(false)
  const canScrollDown = ref(false)

  const update = () => {
    const el = target.value
    if (!el) return
    canScrollUp.value = el.scrollTop > 4
    canScrollDown.value = el.scrollTop + el.clientHeight < el.scrollHeight - 4
  }

  const scrollStep = (direction) => {
    const el = target.value
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ top: direction * el.clientHeight * 0.6, behavior: reduce ? 'auto' : 'smooth' })
  }

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
