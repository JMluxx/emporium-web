'use client'

import { useRef, useState, useEffect, type MouseEvent, type ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** lift: sin inclinación — solo luz + elevación + sombra */
  lift?: boolean
}

export function TiltCard({ children, className = '', lift = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false, radius: 160 })
  const isTouch = useRef(false)

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouch.current) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const radius = Math.max(120, Math.min(260, Math.min(rect.width, rect.height) * 0.42))

    if (!lift) {
      const cx = rect.width / 2
      const cy = rect.height / 2
      setTilt({ x: ((py - cy) / cy) * -7, y: ((px - cx) / cx) * 7 })
    }
    setSpot({ x: px, y: py, visible: true, radius })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setSpot(prev => ({ ...prev, visible: false }))
  }

  const transform = lift
    ? `translateY(${spot.visible ? -5 : 0}px) scale(${spot.visible ? 1.01 : 1})`
    : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${spot.visible ? 1.02 : 1}, ${spot.visible ? 1.02 : 1}, 1)`

  const boxShadow = spot.visible
    ? lift
      ? '0 20px 50px rgba(0,0,0,0.45), 0 8px 20px rgba(0,194,203,0.12), inset 0 0 0 1px rgba(0,194,203,0.22)'
      : 'inset 0 0 0 1px rgba(0,194,203,0.22)'
    : 'none'

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform,
        boxShadow,
        transition: spot.visible
          ? 'transform 0.12s ease-out, box-shadow 0.2s ease'
          : 'transform 0.5s ease-out, box-shadow 0.4s ease',
        willChange: 'transform',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] z-10"
        style={{
          background: spot.visible
            ? `radial-gradient(${spot.radius}px circle at ${spot.x}px ${spot.y}px, rgba(0,194,203,0.13), transparent 70%)`
            : 'none',
          opacity: spot.visible ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
      {children}
    </div>
  )
}
