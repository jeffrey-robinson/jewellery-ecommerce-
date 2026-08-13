import { useRef, useCallback } from 'react'

/**
 * useTilt — lightweight mouse-tracking 3D tilt.
 *
 * Attach the returned ref + handlers to any element with the `.tilt-card`
 * class (see index.css) to get a real, cursor-following perspective tilt
 * with a glare sheen — used for the Necklace / Kada / Chain Bracelet cards.
 *
 * Pure CSS custom properties are used so there is no per-frame React
 * re-render; we just mutate the DOM node directly for buttery motion.
 */
export default function useTilt({ max = 10, glare = true } = {}) {
  const ref = useRef(null)

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = x / rect.width
      const py = y / rect.height

      const ry = (px - 0.5) * (max * 2) // left/right tilt
      const rx = (0.5 - py) * (max * 2) // up/down tilt

      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      if (glare) {
        el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
        el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
      }
      el.classList.remove('tilt-idle')
    },
    [max, glare]
  )

  const onMouseEnter = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.classList.remove('tilt-idle')
  }, [])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('tilt-idle')
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--mx', '50%')
    el.style.setProperty('--my', '50%')
  }, [])

  return { ref, onMouseMove, onMouseEnter, onMouseLeave }
}
