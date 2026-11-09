import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number }

const LINK_DIST = 170
const MAX_NODES = 60
const FRAME_MS = 1000 / 30 // 30fps is plenty for slow drift and halves the CPU cost

// Drifting nodes connected by faint lines (network topology). Fixed canvas behind the page.
export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let w = 0
    let h = 0
    let nodes: Node[] = []
    let color = '122, 62, 157'
    let raf = 0
    let last = 0
    const pointer = { x: -9999, y: -9999 }

    const readColor = () => {
      const hex = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
      const m = /^#([0-9a-f]{6})$/i.exec(hex)
      if (m) {
        const n = parseInt(m[1], 16)
        color = `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
      }
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(MAX_NODES, Math.round((w * h) / 28000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw)
      if (t - last < FRAME_MS) return
      last = t
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      ctx.lineWidth = 1.2
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            ctx.strokeStyle = `rgba(${color}, ${(1 - Math.sqrt(d2) / LINK_DIST) * 0.6})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // link to the cursor so the network reacts to the visitor
        const px = a.x - pointer.x
        const py = a.y - pointer.y
        const pd2 = px * px + py * py
        if (pd2 < 180 * 180) {
          ctx.strokeStyle = `rgba(${color}, ${(1 - Math.sqrt(pd2) / 180) * 0.75})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.stroke()
        }
      }

      ctx.fillStyle = `rgba(${color}, 0.85)`
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const start = () => {
      if (!raf && !reduced) raf = requestAnimationFrame(draw)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }
    const onVisibility = () => (document.hidden ? stop() : start())
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    readColor()
    resize()
    if (reduced) draw(FRAME_MS + 1) // one static frame
    start()

    const themeObserver = new MutationObserver(readColor)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')
    scheme.addEventListener('change', readColor)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      stop()
      themeObserver.disconnect()
      scheme.removeEventListener('change', readColor)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-bg" aria-hidden="true" />
}
