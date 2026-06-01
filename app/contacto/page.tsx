'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const FORMSPREE_ID = 'mnjjqdvo'

const sectors = [
  'Inmobiliario',
  'Hostelería',
  'Retail',
  'Clínicas y Salud',
  'Asesorías',
  'E-commerce',
  'Otro',
]

interface FormState {
  name: string
  email: string
  sector: string
  message: string
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    sector: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!form.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Introduce un email válido'
    }
    if (!form.sector) newErrors.sector = 'Selecciona tu sector'
    if (!form.message.trim()) newErrors.message = 'Cuéntanos tu caso'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', sector: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-[#0d0f14] border rounded-xl px-4 py-3 text-ei-text text-sm placeholder:text-[#8892a4]/50 outline-none transition-all duration-200 focus:ring-2 ${
      errors[field]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-[rgba(0,194,203,0.15)] focus:border-[#00c2cb] focus:ring-[rgba(0,194,203,0.2)]'
    }`

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
            Contacto
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Cuéntanos tu caso
          </h1>
          <p className="text-ei-muted text-xl max-w-xl mx-auto">
            15 minutos. Sin coste. Sin compromiso. Solo soluciones.
          </p>
        </div>
      </section>

      {/* Content */}
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
                <h2 className="text-2xl font-black text-ei-text mb-4">
                  Hablemos directamente
                </h2>
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
                    <p className="text-ei-text text-sm font-medium group-hover:text-ei-accent transition-colors">
                      contacto@emporium-ia.es
                    </p>
                  </div>
                </a>

                <a href="tel:+34604380891" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,194,203,0.2)] transition-colors">
                    <Phone size={18} className="text-ei-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-ei-muted mb-0.5">Teléfono</p>
                    <p className="text-ei-text text-sm font-medium group-hover:text-ei-accent transition-colors">
                      +34 604 38 08 91
                    </p>
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
                <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-4">
                  Qué ocurre después
                </p>
                <ol className="flex flex-col gap-3">
                  {[
                    'Te respondemos en menos de 24 horas',
                    'Agenda una llamada de 15 min sin compromiso',
                    'Te presentamos un plan a medida con ROI estimado',
                    'Si te convence, arrancamos en días',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ei-muted">
                      <span className="w-5 h-5 rounded-full bg-[rgba(0,194,203,0.15)] text-ei-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {status === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.2)]">
                  <CheckCircle2 size={48} className="text-ei-accent mb-4" />
                  <h3 className="text-2xl font-black text-ei-text mb-2">¡Mensaje enviado!</h3>
                  <p className="text-ei-muted max-w-xs">
                    Te respondemos en menos de 24 horas. Revisa también tu carpeta de spam.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-ei-card rounded-2xl p-8 md:p-10 border border-[rgba(0,194,203,0.12)]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-ei-muted mb-2 uppercase tracking-wider">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={inputClass('name')}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ei-muted mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@empresa.com"
                        className={inputClass('email')}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-ei-muted mb-2 uppercase tracking-wider">
                      Sector *
                    </label>
                    <select
                      name="sector"
                      value={form.sector}
                      onChange={handleChange}
                      className={`${inputClass('sector')} cursor-pointer`}
                    >
                      <option value="">Selecciona tu sector</option>
                      {sectors.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.sector && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.sector}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-ei-muted mb-2 uppercase tracking-wider">
                      Cuéntanos tu caso *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="¿Qué procesos quieres automatizar? ¿Cuál es tu mayor problema operativo?"
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <p className="mb-4 text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-3">
                      Algo ha fallado. Escríbenos directamente a contacto@emporium-ia.es
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-[#00dde7] hover:shadow-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0a0c10]/30 border-t-[#0a0c10] rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar consultoría gratuita <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs text-ei-muted">
                    Sin spam. Solo te contactamos para ayudarte.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}