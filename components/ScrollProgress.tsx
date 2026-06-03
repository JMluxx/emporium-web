'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const [show, setShow] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40 })

  useEffect(() => {
    // Solo mostrar en desktop — en móvil el scroll listener no merece la pena
    setShow(window.matchMedia('(hover: hover)').matches)
  }, [])

  if (!show) return null

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[9997] pointer-events-none"
      aria-hidden
    >
      <div className="h-full bg-gradient-to-r from-ei-accent via-[#00dde7] to-[#7dd3fc]" />
    </motion.div>
  )
}
