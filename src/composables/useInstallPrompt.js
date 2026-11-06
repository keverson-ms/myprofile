import { ref } from 'vue'

const canInstall = ref(false)
let deferredPrompt = null

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  if (isStandalone()) return
  deferredPrompt = e
  canInstall.value = true
})

window.addEventListener('appinstalled', () => {
  deferredPrompt = null
  canInstall.value = false
})

export function useInstallPrompt() {
  const install = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    try {
      await deferredPrompt.userChoice
    } finally {
      deferredPrompt = null
      canInstall.value = false
    }
  }

  return { canInstall, install }
}
