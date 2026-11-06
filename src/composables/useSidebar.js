import { ref, watch } from 'vue'

const STORAGE_KEY = 'myprofile-sidebar'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'closed'
  } catch {
    return true
  }
}

const open = ref(readStored())

watch(open, (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value ? 'open' : 'closed')
  } catch {
  }
})

export function useSidebar() {
  const toggle = () => (open.value = !open.value)
  return { open, toggle }
}
