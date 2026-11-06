import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useMediaQuery(query) {
  const mql = window.matchMedia(query)
  const matches = ref(mql.matches)
  const onChange = (e) => (matches.value = e.matches)

  onMounted(() => mql.addEventListener('change', onChange))
  onBeforeUnmount(() => mql.removeEventListener('change', onChange))

  return matches
}
