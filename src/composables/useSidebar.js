import { ref, watch } from 'vue'

// Lateral aberta/fechada, lembrada entre visitas.
// localStorage pode lançar erro (modo privado, cookies bloqueados etc.).
const STORAGE_KEY = 'myprofile-sidebar'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'closed'
  } catch {
    return true
  }
}

// Estado compartilhado entre o botão e a lateral
const open = ref(readStored())

watch(open, (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value ? 'open' : 'closed')
  } catch {
    /* sem armazenamento: vale só para esta visita */
  }
})

export function useSidebar() {
  const toggle = () => (open.value = !open.value)
  return { open, toggle }
}
