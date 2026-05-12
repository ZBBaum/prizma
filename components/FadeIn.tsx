'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = Array.from(
      el.querySelectorAll(':scope > * > *:not([class*="grid"]):not([class*="flex"]), :scope > * > [class*="grid"] > *, :scope > * > [class*="flex"] > *')
    ) as HTMLElement[]
    targets.forEach((t) => {
      t.style.opacity = '0'
      t.style.transform = 'translateY(20px)'
      t.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
      t.style.willChange = 'opacity, transform'
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = Array.from(
      el.querySelectorAll(':scope > * > *:not([class*="grid"]):not([class*="flex"]), :scope > * > [class*="grid"] > *, :scope > * > [class*="flex"] > *')
    ) as HTMLElement[]

    const reveal = () => {
      targets.forEach((t, i) => {
        t.style.transitionDelay = `${i * 100}ms`
        t.style.opacity = '1'
        t.style.transform = 'translateY(0)'
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px 50px 0px' }
    )

    observer.observe(el)

    // Fallback: reveal after 1.2s in case observer never fires
    const fallback = setTimeout(reveal, 1200)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return <div ref={ref}>{children}</div>
}
