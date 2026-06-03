'use client'

import { useRef, useState, type MouseEvent, type ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    setTilt({ x: ((py - cy) / cy) * -7, y: ((px - cx) / cx) * 7 })
    setSpot({ x: px, y: py, visible: true })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setSpot(prev => ({ ...prev, visible: false }))
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${spot.visible ? 1.02 : 1}, ${spot.visible ? 1.02 : 1}, 1)`,
        transition: spot.visible ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        willChange: 'transform',
      }}
    >
      {/* Luz que sigue el cursor */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] z-10"
        style={{
          background: spot.visible
            ? `radial-gradient(180px circle at ${spot.x}px ${spot.y}px, rgba(0,194,203,0.13), transparent 70%)`
            : 'none',
          transition: 'opacity 0.25s ease',
          opacity: spot.visible ? 1 : 0,
        }}
      />
      {children}
    </div>
  )
}
