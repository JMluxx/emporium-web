'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const dotX = useSpring(mx, { stiffness: 600, damping: 40 })
  const dotY = useSpring(my, { stiffness: 600, damping: 40 })
  const ringX = useSpring(mx, { stiffness: 100, damping: 22 })
  const ringY = useSpring(my, { stiffness: 100, damping: 22 })

  useEffect(() => {
    if (typeof window === 'undefined' || 'ontouchstart' in window) return

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
      const el = e.target as HTMLElement
      setIsPointer(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') !== null ||
        el.closest('button') !== null ||
        window.getComputedStyle(el).cursor === 'pointer'
      )
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mx, my])

  if (!visible) return null

  return (
    <>
      {/* Dot — follows instantly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-ei-accent"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 6 : 5,
          height: isPointer ? 6 : 5,
        }}
      />
      {/* Ring — follows with lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-ei-accent"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          opacity: isPointer ? 0.5 : 0.25,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      />
    </>
  )
}
