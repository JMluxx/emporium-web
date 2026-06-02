'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'

const FORMSPREE_ID = 'mnjjqdvo'

const SECTORS = [
  { label: 'Inmobiliario', emoji: '🏠' },
  { label: 'Hostelería', emoji: '🍽️' },
  { label: 'Retail', emoji: '🛍️' },
  { label: 'Clínicas y Salud', emoji: '🩺' },
  { label: 'Asesorías', emoji: '📊' },
  { label: 'E-commerce', emoji: '🛒' },
  { label: 'Otro', emoji: '💼' },
]

const PROBLEMS = [
  'Gestión de clientes y leads',
  'Tareas repetitivas que consumen tiempo',
  'Atención al cliente fuera de horario',
  'Facturación y administración',
  'Reportes y análisis de datos',
  'Otro',
]

interface FormData {
  sector: string
  problem: string
  name: string
  email: string
}

const STEP_LABELS = ['Sector', 'Reto', 'Tus datos']

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
}

export default function ContactoPage() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [form, setForm] = useState<FormData>({ sector: '', problem: '', name: '', email: '' })
  const [errors, setErrors] = useState<Partial<Pick<FormData, 'name' | 'email'>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const go = (next: number) => {
    setDir(next > step ? 1 : -1)
    setStep(next)
  }

  const validateStep2 = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'El nombre es obligatorio'
    if (!form.email.trim()) {
      e.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Introduce un email válido'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validateStep2()) return
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          sector: form.sector,
          message: `Sector: ${form.sector}\nReto principal: ${form.problem}`,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        go(3)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof typeof errors) =>
    `w-full bg-[#0d0f14] border rounded-xl px-4 py-3 text-ei-text text-sm placeholder:text-[#8892a4]/50 outline-none transition-all duration-200 focus:ring-2 ${
      errors[field]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-[rgba(0,194,203,0.15)] focus:border-[#00c2cb] focus:ring-[rgba(0,194,203,0.2)]'
    }`

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">Contacto</p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Cuéntanos tu caso
          </h1>
          <p className="text-ei-muted text-xl max-w-xl mx-auto">
            15 minutos. Sin coste. Sin compromiso. Solo soluciones.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-2xl font-black text-ei-text mb-4">Hablemos directamente</h2>
                <p className="text-ei-muted leading-relaxed">
                  No hay formularios infinitos ni comerciales que no saben de lo que hablan. Llegas directamente a los fundadores.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <a href="mailto:contacto@emporium-ia.es" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,194,203,0.2)] transition-colors">
                    <Mail size={18} className="text-ei-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-ei-muted mb-0.5">Email</p>
                    <p className="text-ei-text text-sm font-medium group-hover:text-ei-accent transition-colors">contacto@emporium-ia.es</p>
                  </div>
                </a>

                <a href="tel:+34604380891" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,194,203,0.2)] transition-colors">
                    <Phone size={18} className="text-ei-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-ei-muted mb-0.5">Teléfono</p>
                    <p className="text-ei-text text-sm font-medium group-hover:text-ei-accent transition-colors">+34 604 38 08 91</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-ei-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-ei-muted mb-0.5">Ubicación</p>
                    <p className="text-ei-text text-sm font-medium">Salamanca, Castilla y León</p>
                    <p className="text-ei-muted text-xs">Trabajamos con PYMEs en toda España</p>
                  </div>
                </div>
              </div>

              <div className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.1)]">
                <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-4">Qué ocurre después</p>
                <ol className="flex flex-col gap-3">
                  {[
                    'Te respondemos en menos de 24 horas',
                    'Agenda una llamada de 15 min sin compromiso',
                    'Te presentamos un plan a medida con ROI estimado',
                    'Si te convence, arrancamos en días',
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ei-muted">
                      <span className="w-5 h-5 rounded-full bg-[rgba(0,194,203,0.15)] text-ei-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Multi-step form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-ei-card rounded-2xl p-8 md:p-10 border border-[rgba(0,194,203,0.12)] overflow-hidden">
                {/* Progress bar */}
                {step < 3 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      {STEP_LABELS.map((label, i) => (
                        <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-colors duration-300 ${
                              i < step
                                ? 'bg-ei-accent text-[#0a0c10]'
                                : i === step
                                ? 'bg-[rgba(0,194,203,0.2)] border border-ei-accent text-ei-accent'
                                : 'bg-[rgba(255,255,255,0.05)] text-ei-muted'
                            }`}
                          >
                            {i < step ? '✓' : i + 1}
                          </div>
                          <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-ei-text' : 'text-ei-muted'}`}>
                            {label}
                          </span>
                          {i < STEP_LABELS.length - 1 && (
                            <div className={`flex-1 h-px mx-1 transition-colors duration-300 ${i < step ? 'bg-ei-accent' : 'bg-[rgba(255,255,255,0.08)]'}`} />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="h-1 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-ei-accent to-[#0089a3] rounded-full"
                        animate={{ width: `${(step / 2) * 100}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait" custom={dir}>
                  {/* Step 0: Sector */}
                  {step === 0 && (
                    <motion.div key="step0" custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                      <h2 className="text-xl font-black text-ei-text mb-2">¿En qué sector opera tu empresa?</h2>
                      <p className="text-ei-muted text-sm mb-6">Elige el que mejor te describa.</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {SECTORS.map(({ label, emoji }) => (
                          <button
                            key={label}
                            onClick={() => {
                              setForm((p) => ({ ...p, sector: label }))
                              setTimeout(() => go(1), 120)
                            }}
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                              form.sector === label
                                ? 'border-ei-accent bg-[rgba(0,194,203,0.1)] text-ei-accent'
                                : 'border-[rgba(0,194,203,0.12)] text-ei-muted hover:border-[rgba(0,194,203,0.3)] hover:text-ei-text'
                            }`}
                          >
                            <span className="text-2xl">{emoji}</span>
                            {label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: Problem */}
                  {step === 1 && (
                    <motion.div key="step1" custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                      <h2 className="text-xl font-black text-ei-text mb-2">¿Cuál es tu mayor problema operativo?</h2>
                      <p className="text-ei-muted text-sm mb-6">
                        Sector: <span className="text-ei-accent font-semibold">{form.sector}</span>
                      </p>
                      <div className="flex flex-col gap-3">
                        {PROBLEMS.map((p) => (
                          <button
                            key={p}
                            onClick={() => {
                              setForm((prev) => ({ ...prev, problem: p }))
                              setTimeout(() => go(2), 120)
                            }}
                            className={`text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                              form.problem === p
                                ? 'border-ei-accent bg-[rgba(0,194,203,0.1)] text-ei-accent'
                                : 'border-[rgba(0,194,203,0.12)] text-ei-muted hover:border-[rgba(0,194,203,0.3)] hover:text-ei-text'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                      <button onClick={() => go(0)} className="mt-5 flex items-center gap-1 text-xs text-ei-muted hover:text-ei-text transition-colors">
                        <ArrowLeft size={12} /> Volver
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Contact data */}
                  {step === 2 && (
                    <motion.div key="step2" custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                      <h2 className="text-xl font-black text-ei-text mb-2">Ya casi está</h2>
                      <p className="text-ei-muted text-sm mb-6">
                        {form.sector} · <span className="text-ei-accent">{form.problem}</span>
                      </p>

                      <div className="flex flex-col gap-5 mb-6">
                        <div>
                          <label className="block text-xs font-semibold text-ei-muted mb-2 uppercase tracking-wider">Nombre *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, name: e.target.value }))
                              if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                            }}
                            placeholder="Tu nombre"
                            className={inputClass('name')}
                          />
                          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-ei-muted mb-2 uppercase tracking-wider">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, email: e.target.value }))
                              if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                            }}
                            placeholder="tu@empresa.com"
                            className={inputClass('email')}
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                        </div>
                      </div>

                      {status === 'error' && (
                        <p className="mb-4 text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-3">
                          Algo ha fallado. Escríbenos a contacto@emporium-ia.es
                        </p>
                      )}

                      <button
                        onClick={handleSubmit}
                        disabled={status === 'sending'}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-[#00dde7] hover:shadow-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#0a0c10]/30 border-t-[#0a0c10] rounded-full animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>Solicitar consultoría gratuita <ArrowRight size={16} /></>
                        )}
                      </button>

                      <button onClick={() => go(1)} className="mt-4 flex items-center gap-1 text-xs text-ei-muted hover:text-ei-text transition-colors">
                        <ArrowLeft size={12} /> Volver
                      </button>

                      <p className="mt-4 text-center text-xs text-ei-muted">
                        Al enviar aceptas nuestra{' '}
                        <a href="/privacidad" className="text-ei-accent hover:underline">política de privacidad</a>.
                      </p>
                    </motion.div>
                  )}

                  {/* Step 3: Success */}
                  {step === 3 && (
                    <motion.div key="step3" custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }} className="flex flex-col items-center justify-center text-center py-12">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                        <CheckCircle2 size={56} className="text-ei-accent mb-5" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-ei-text mb-2">¡Mensaje enviado!</h3>
                      <p className="text-ei-muted max-w-xs">
                        Te respondemos en menos de 24h con un análisis de lo que podemos automatizar en tu negocio.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
