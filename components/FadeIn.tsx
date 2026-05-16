'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const getTargets = (el: HTMLElement) => {
    const grandchildren = Array.from(
      el.querySelectorAll(':scope > * > *:not([class*="grid"]):not([class*="flex"]), :scope > * > [class*="grid"] > *, :scope > * > [class*="flex"] > *')
    ) as HTMLElement[]
    if (grandchildren.length > 0) return grandchildren
    return Array.from(el.querySelectorAll(':scope > *')) as HTMLElement[]
  }

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return
    const targets = getTargets(el)
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
    if (prefersReducedMotion()) return
    const targets = getTargets(el)

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
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [])

  return <div ref={ref}>{children}</div>
}
