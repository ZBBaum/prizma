'use client'

import { useEffect, useRef } from 'react'

export default function NoiseOverlay() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 200
    const ctx = canvas.getContext('2d')!
    const imageData = ctx.createImageData(200, 200)
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.floor(Math.random() * 255)
      imageData.data[i] = v
      imageData.data[i + 1] = v
      imageData.data[i + 2] = v
      imageData.data[i + 3] = Math.floor(0.15 * 255)
    }
    ctx.putImageData(imageData, 0, 0)
    if (divRef.current) {
      divRef.current.style.backgroundImage = `url(${canvas.toDataURL()})`
    }
  }, [])

  return (
    <div
      ref={divRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        mixBlendMode: 'overlay',
        opacity: 0.1,
      }}
    />
  )
}
