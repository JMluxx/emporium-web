'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { type ReactNode, useRef } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-60, 60], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-60, 60], [-6, 6]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, [-60, 60], [0, 100])
  const glowY = useTransform(y, [-60, 60], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 25 } }}
        className="group relative bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.12)] hover:border-[rgba(0,194,203,0.35)] hover:bg-ei-card-hover hover:shadow-card-hover cursor-default overflow-hidden"
      >
        {/* Dynamic spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(120px circle at ${gx}% ${gy}%, rgba(0,194,203,0.08), transparent 80%)`
            ),
          }}
        />

        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(0,194,203,0.18)] transition-colors"
          style={{ translateZ: 20 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <div className="text-ei-accent">{icon}</div>
        </motion.div>

        {/* Content */}
        <h3 className="font-bold text-ei-text text-lg mb-2 leading-tight">{title}</h3>
        <p className="text-ei-muted text-sm leading-relaxed">{description}</p>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-ei-accent to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          whileHover={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
