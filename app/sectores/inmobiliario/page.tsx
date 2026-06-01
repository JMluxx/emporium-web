import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, ExternalLink, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para Inmobiliarias',
  description:
    'Captura leads de todos tus portales, cualifícalos con IA y contacta al cliente en menos de 5 minutos. Automatización completa para agencias inmobiliarias.',
}

const benefits = [
  'Respuesta al lead en menos de 5 minutos',
  'Cualificación automática por zona, presupuesto y urgencia',
  'Asignación automática al agente correcto',
  'Seguimiento escalonado hasta la cita',
  'Informes semanales de pipeline y conversión',
]

const pain_points = [
  {
    problem: 'Leads que se enfrían',
    solution: 'Primer contacto automático en menos de 5 minutos tras cada solicitud, sin importar la hora.',
  },
  {
    problem: 'CRM siempre desactualizado',
    solution: 'Sincronización en tiempo real desde Idealista, Fotocasa y portales propios directo al CRM.',
  },
  {
    problem: 'Agentes haciendo seguimiento manual',
    solution: 'Secuencias de seguimiento automáticas por WhatsApp y email hasta confirmar cita.',
  },
  {
    problem: 'Sin visibilidad del pipeline',
    solution: 'Dashboard de conversión, tiempo medio hasta cita y leads por fuente actualizado en tiempo real.',
  },
]

export default function InmobiliarioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/sectores" className="text-ei-muted text-sm hover:text-ei-text transition-colors">
              Sectores
            </Link>
            <span className="text-ei-muted/40">/</span>
            <span className="text-ei-accent text-sm font-medium">Inmobiliario</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
                  <Building2 size={24} />
                </div>
                <p className="text-ei-accent text-sm font-bold uppercase tracking-widest">Sector Inmobiliario</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-5">
                Del portal al cliente cualificado,{' '}
                <span className="text-gradient">en automático</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-8">
                Captás leads de portales distintos, los metes a mano en el CRM, haces seguimiento manual y muchos se enfrían antes de que puedas llamarles. Lo automatizamos de principio a fin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
                >
                  Solicita consultoría gratuita <ArrowRight size={18} />
                </Link>
                <a
                  href="https://jmluxx.github.io/inmobiliarias-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
                >
                  Ver demo interactiva <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.15)]">
              <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">
                Qué incluye
              </p>
              <ul className="flex flex-col gap-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ei-muted">
                    <CheckCircle2 size={16} className="text-ei-accent flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-ei-text mb-4">Problemas que resolvemos</h2>
            <p className="text-ei-muted max-w-lg mx-auto">
              Conocemos el día a día de las agencias. Cada automatización ataca un problema concreto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pain_points.map((item, i) => (
              <div key={i} className="bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.1)]">
                <p className="text-xs font-bold uppercase tracking-widest text-ei-muted mb-1">Problema</p>
                <p className="text-ei-text font-bold mb-3">{item.problem}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-1">Solución</p>
                <p className="text-ei-muted text-sm leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-ei-card rounded-2xl p-10 border border-[rgba(0,194,203,0.2)]">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">Demo disponible</p>
            <h2 className="text-2xl font-black text-ei-text mb-3">
              Prueba el agente IA para inmobiliarias
            </h2>
            <p className="text-ei-muted mb-6">
              Hemos construido una demo interactiva para que veas exactamente cómo funciona el agente con un cliente real.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://jmluxx.github.io/inmobiliarias-demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.3)] text-ei-accent font-bold hover:bg-[rgba(0,194,203,0.08)] transition-all duration-200"
              >
                Abrir demo <ExternalLink size={16} />
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Hablar con nosotros <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
