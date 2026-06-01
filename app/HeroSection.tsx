'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { NeuralAnimation } from '@/components/NeuralAnimation'
import { useRef } from 'react'

const proofPoints = [
  'Sin necesidad de equipo técnico propio',
  'Transparencia total en cada proyecto',
  'Soporte directo con los fundadores',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const orbY1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), { stiffness: 80, damping: 20 })
  const orbY2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), { stiffness: 60, damping: 20 })
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 60]), { stiffness: 80, damping: 20 })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-ei-dark">
      {/* Parallax background layers */}
      <motion.div
        className="absolute inset-0 bg-hero-gradient pointer-events-none"
        style={{ y: bgY, opacity: bgOpacity }}
      />
      <motion.div
        className="absolute inset-0 dot-pattern opacity-20 pointer-events-none"
        style={{ backgroundSize: '40px 40px', y: bgY }}
      />

      {/* Animated ambient orbs */}
      <motion.div
        className="glow-orb w-[700px] h-[700px] top-[-250px] right-[-150px]"
        style={{ background: 'rgba(0,194,203,0.07)', y: orbY1 }}
      />
      <motion.div
        className="glow-orb w-[500px] h-[500px] bottom-[-150px] left-[-150px]"
        style={{ background: 'rgba(0,100,200,0.05)', y: orbY2 }}
      />

      {/* Animated border glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,203,0.3)] to-transparent" />

      <motion.div
        style={{ y: contentY }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
      >
        {/* Left: Text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,194,203,0.25)] bg-[rgba(0,194,203,0.08)] text-ei-accent text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ei-accent animate-pulse" />
              Agencia de automatización IA · Salamanca
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-ei-text leading-[1.05] tracking-tight mb-6"
          >
            Tu PYME no necesita más empleados.{' '}
            <span className="text-gradient">
              Necesita inteligencia artificial.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-ei-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            Automatizamos los procesos que te roban horas cada día. Menos errores, más resultados, sin necesidad de equipo técnico.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black text-base hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Solicita tu consultoría gratuita <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/soluciones"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold text-base hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
              >
                Ver soluciones
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            {proofPoints.map((point, i) => (
              <motion.span
                key={i}
                className="flex items-center gap-1.5 text-sm text-ei-muted"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              >
                <CheckCircle2 size={14} className="text-ei-accent flex-shrink-0" />
                {point}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Neural network animation */}
        <motion.div
          className="relative h-[400px] lg:h-[600px] w-full"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <NeuralAnimation className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: bgOpacity }}
      >
        <span className="text-ei-muted text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-ei-accent to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
