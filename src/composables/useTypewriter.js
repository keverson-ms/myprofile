import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useTypewriter(
  length,
  { speed = 110, deleteSpeed = 55, startDelay = 500, holdTime = 5000, restartDelay = 600, loop = true } = {},
) {
  const count = ref(0)
  const done = ref(false)
  let timer

  const jitter = (ms) => ms * (0.7 + Math.random() * 0.6)

  const type = () => {
    count.value++
    if (count.value < length) {
      timer = setTimeout(type, jitter(speed))
      return
    }
    done.value = true
    if (loop) timer = setTimeout(erase, holdTime)
  }

  const erase = () => {
    done.value = false
    count.value--
    if (count.value > 0) {
      timer = setTimeout(erase, jitter(deleteSpeed))
      return
    }
    timer = setTimeout(type, restartDelay)
  }

  onMounted(() => {
    timer = setTimeout(type, startDelay)
  })
  onBeforeUnmount(() => clearTimeout(timer))

  return { count, done }
}
