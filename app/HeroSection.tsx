'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { NeuralAnimation } from '@/components/NeuralAnimation'

const proofPoints = [
  'Sin contratos largos',
  'ROI medible desde el mes 1',
  'Implementación en días, no meses',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ei-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div
        className="absolute inset-0 dot-pattern opacity-30 pointer-events-none"
        style={{ backgroundSize: '40px 40px' }}
      />
      <div className="glow-orb w-[600px] h-[600px] bg-[rgba(0,194,203,0.06)] top-[-200px] right-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-[rgba(0,100,200,0.04)] bottom-[-100px] left-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,194,203,0.25)] bg-[rgba(0,194,203,0.08)] text-ei-accent text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ei-accent animate-pulse" />
              Agencia de automatización IA · Salamanca
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-ei-text leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tu PYME no necesita más empleados.{' '}
            <span className="text-gradient">
              Necesita inteligencia artificial.
            </span>
          </motion.h1>

          <motion.p
            className="text-ei-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Automatizamos los procesos que te roban horas cada día. Menos errores, más resultados, sin necesidad de equipo técnico.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black text-base hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
            >
              Solicita tu consultoría gratuita <ArrowRight size={18} />
            </Link>
            <Link
              href="/soluciones"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold text-base hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
            >
              Ver soluciones
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {proofPoints.map((point, i) => (
              <span key={i} className="flex items-center gap-1.5 text-sm text-ei-muted">
                <CheckCircle2 size={14} className="text-ei-accent flex-shrink-0" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Neural network animation */}
        <motion.div
          className="relative h-[400px] lg:h-[600px] w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <NeuralAnimation className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  )
}