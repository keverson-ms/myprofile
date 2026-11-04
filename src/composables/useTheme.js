import { ref } from 'vue'

// Mantenha em sincronia com src/style.css e com o script inline do index.html
export const STORAGE_KEY = 'myprofile-theme'
// Chave renomeada quando o padrão virou o modo escuro: escolhas antigas de "claro" são descartadas
export const MODE_STORAGE_KEY = 'myprofile-color-mode'

export const themes = [
  { id: 'classic', label: 'Clássico', ink: '#3d3d3d', accent: '#b39a6b' },
  { id: 'navy', label: 'Azul-marinho', ink: '#1f3a5f', accent: '#d1a54a' },
  { id: 'emerald', label: 'Esmeralda', ink: '#2d4a42', accent: '#c4875a' },
]

const DEFAULT = themes[0].id
const isValid = (id) => themes.some((t) => t.id === id)

// localStorage pode lançar erro (modo privado, cookies bloqueados etc.)
function read(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* sem armazenamento: a escolha vale só para esta visita */
  }
}

const root = document.documentElement

function applyTheme(id) {
  if (id === DEFAULT) root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', id)
}

function applyMode(isDark) {
  if (isDark) root.setAttribute('data-mode', 'dark')
  else root.removeAttribute('data-mode')
}

// Troca com transição suave de cores
function withTransition(fn) {
  root.classList.add('theme-transition')
  fn()
  setTimeout(() => root.classList.remove('theme-transition'), 450)
}

// Estado compartilhado por todos os componentes
const storedTheme = read(STORAGE_KEY)
const current = ref(isValid(storedTheme) ? storedTheme : DEFAULT)
// Padrão: modo escuro. Só fica claro se a pessoa escolheu o claro antes.
const dark = ref(read(MODE_STORAGE_KEY) !== 'light')
applyTheme(current.value)
applyMode(dark.value)

// Sincroniza entre abas abertas
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) {
    current.value = isValid(e.newValue) ? e.newValue : DEFAULT
    applyTheme(current.value)
  } else if (e.key === MODE_STORAGE_KEY) {
    dark.value = e.newValue !== 'light'
    applyMode(dark.value)
  }
})

// Impressão/PDF sempre no modo claro (economiza tinta e fica legível no papel)
window.addEventListener('beforeprint', () => applyMode(false))
window.addEventListener('afterprint', () => applyMode(dark.value))

export function useTheme() {
  const setTheme = (id) => {
    if (!isValid(id) || id === current.value) return
    withTransition(() => {
      current.value = id
      applyTheme(id)
    })
    write(STORAGE_KEY, id)
  }

  const toggleDark = () => {
    withTransition(() => {
      dark.value = !dark.value
      applyMode(dark.value)
    })
    write(MODE_STORAGE_KEY, dark.value ? 'dark' : 'light')
  }

  return { themes, current, setTheme, dark, toggleDark }
}
