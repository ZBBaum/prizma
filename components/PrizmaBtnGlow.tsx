'use client'

import { useEffect } from 'react'

export default function PrizmaBtnGlow() {
  useEffect(() => {
    function onMove(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return
      const btn = target.closest('.prizma-btn') as HTMLElement | null
      if (!btn) return
      const r = btn.getBoundingClientRect()
      btn.style.setProperty('--mx', `${e.clientX - r.left}px`)
      btn.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('mousemove', onMove, { passive: true })
    return () => document.removeEventListener('mousemove', onMove)
  }, [])
  return null
}
