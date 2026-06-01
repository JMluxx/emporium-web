'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto cuesta una automatización?',
    a: 'Depende de la complejidad. Workflows concretos pueden arrancar desde 500-800€. Las implementaciones más completas con integraciones múltiples, entre 1.500 y 4.000€. Siempre con presupuesto cerrado antes de empezar, sin sorpresas.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar operativo?',
    a: 'Las primeras automatizaciones suelen estar funcionando en 1-2 semanas. No hay proyectos de 6 meses. Arrancamos rápido, medimos resultados desde el día uno y seguimos mejorando.',
  },
  {
    q: '¿Necesito tener equipo técnico propio?',
    a: 'No. Nos encargamos de todo: diseño, implementación y mantenimiento. Solo necesitas contarnos el problema y darnos acceso a las herramientas que ya usas.',
  },
  {
    q: '¿Funciona con las herramientas que ya tengo?',
    a: 'Casi seguro que sí. Trabajamos con más de 200 integraciones: CRMs, ERPs, Google Workspace, WhatsApp Business, Outlook, HubSpot, Holded, Factorial y muchas más. Si lo usas, probablemente podemos conectarlo.',
  },
  {
    q: '¿Qué pasa si algo falla en producción?',
    a: 'Tenemos monitorización activa en todos los workflows. Si algo deja de funcionar, nos enteramos antes que tú y lo solucionamos. El soporte está incluido, no es un extra.',
  },
  {
    q: '¿Puedo ver cómo funciona antes de contratar?',
    a: 'Sí. Tenemos demos interactivas por sector que puedes probar ahora mismo. Y la consultoría de 15 minutos es gratuita y sin compromiso: te contamos exactamente qué haríamos en tu caso y el ROI estimado.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-[rgba(0,194,203,0.1)] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-ei-text font-semibold text-base group-hover:text-ei-accent transition-colors duration-200">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[rgba(0,194,203,0.2)] flex items-center justify-center text-ei-accent group-hover:border-[rgba(0,194,203,0.5)] transition-colors"
        >
          <Plus size={14} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ei-muted text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl font-black text-ei-text mb-4">Preguntas frecuentes</h2>
          <p className="text-ei-muted">Lo que nos preguntan antes de empezar.</p>
        </div>
        <div className="bg-ei-card rounded-2xl px-8 border border-[rgba(0,194,203,0.12)]">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
