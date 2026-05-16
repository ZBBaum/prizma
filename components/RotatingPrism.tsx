'use client'

import { useEffect, useRef, useState } from 'react'

export default function RotatingPrism() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none select-none"
      style={{
        right: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
      }}
      aria-hidden="true"
    >
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        style={{ animation: 'prismSpin 28s linear infinite', opacity: 0.08 }}
      >
        <defs>
          <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--prizma-violet)" />
            <stop offset="33%" stopColor="var(--prizma-blue)" />
            <stop offset="66%" stopColor="var(--prizma-green)" />
            <stop offset="100%" stopColor="var(--prizma-red)" />
          </linearGradient>
        </defs>
        <polygon points="250,30 470,440 30,440" fill="url(#prismGrad)" />
      </svg>
    </div>
  )
}
