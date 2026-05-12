"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: any
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;
      uniform float isDark;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = clamp(0.05 / abs(p.y + sin((rx + time) * xScale) * yScale), 0.0, 1.0);
        float g = clamp(0.05 / abs(p.y + sin((gx + time) * xScale) * yScale), 0.0, 1.0);
        float b = clamp(0.05 / abs(p.y + sin((bx + time) * xScale) * yScale), 0.0, 1.0);

        float lightR = 1.0 - max(0.0, g - r) - max(0.0, b - r);
        float lightG = 1.0 - max(0.0, r - g) - max(0.0, b - g);
        float lightB = 1.0 - max(0.0, r - b) - max(0.0, g - b);

        float finalR = mix(lightR, r, isDark);
        float finalG = mix(lightG, g, isDark);
        float finalB = mix(lightB, b, isDark);

        gl_FragColor = vec4(clamp(finalR, 0.0, 1.0), clamp(finalG, 0.0, 1.0), clamp(finalB, 0.0, 1.0), 1.0);
      }
    `

    let rafId: number
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      if (refs.uniforms) {
        refs.uniforms.time.value = (timestamp - startTime) * 0.001
      }
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      rafId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      const width = window.innerWidth
      const height = window.innerHeight
      refs.renderer.setSize(width, height, false)
      refs.uniforms.resolution.value = [width, height]
    }

    const darkObserver = new MutationObserver(() => {
      if (refs.uniforms) {
        refs.uniforms.isDark.value = document.documentElement.classList.contains("dark") ? 1.0 : 0.0
      }
    })

    // Init
    refs.scene    = new THREE.Scene()
    refs.renderer = new THREE.WebGLRenderer({ canvas })
    refs.renderer.setPixelRatio(window.devicePixelRatio)
    refs.renderer.setClearColor(new THREE.Color(0x000000))
    refs.camera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

    refs.uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time:       { value: 0.0 },
      xScale:     { value: 1.0 },
      yScale:     { value: 0.5 },
      distortion: { value: 0.05 },
      isDark:     { value: document.documentElement.classList.contains("dark") ? 1.0 : 0.0 },
    }

    const positions = new THREE.BufferAttribute(
      new Float32Array([-1, -1, 0,  1, -1, 0,  -1, 1, 0,  1, -1, 0,  -1, 1, 0,  1, 1, 0]),
      3
    )
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", positions)

    refs.mesh = new THREE.Mesh(
      geometry,
      new THREE.RawShaderMaterial({ vertexShader, fragmentShader, uniforms: refs.uniforms, side: THREE.DoubleSide })
    )
    refs.scene.add(refs.mesh)

    handleResize()
    rafId = requestAnimationFrame(animate)

    window.addEventListener("resize", handleResize)
    darkObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      darkObserver.disconnect()
      refs.mesh?.geometry.dispose()
      if (refs.mesh?.material instanceof THREE.Material) refs.mesh.material.dispose()
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full block -z-10"
    />
  )
}
