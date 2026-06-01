import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Stethoscope, ExternalLink, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para Clínicas y Salud',
  description:
    'Gestión de agenda, recordatorios de cita, listas de espera y seguimiento post-consulta automatizados. Menos ausencias, más pacientes atendidos.',
}

const benefits = [
  'Reserva de citas online 24/7',
  'Recordatorios automáticos que reducen un 30% las ausencias',
  'Listas de espera inteligentes para cubrir cancelaciones',
  'Mensajes de seguimiento post-consulta personalizados',
  'Gestión de historiales sin duplicidades ni errores',
]

const pain_points = [
  {
    problem: 'Recepcionista al teléfono todo el día',
    solution: 'Sistema de reservas online activo 24/7 integrado con tu agenda. El paciente reserva, modifica y cancela sin llamar.',
  },
  {
    problem: 'Cancelaciones de última hora sin cubrir',
    solution: 'Lista de espera inteligente: cuando hay una cancelación, el sistema contacta automáticamente al siguiente paciente.',
  },
  {
    problem: 'Pacientes que no aparecen (no-shows)',
    solution: 'Recordatorios escalonados por WhatsApp y SMS: 48h antes, 24h antes y 2h antes. Los no-shows caen un 30% de media.',
  },
  {
    problem: 'Sin seguimiento post-consulta',
    solution: 'Mensajes automáticos post-visita con indicaciones, encuesta de satisfacción y recordatorio de próxima cita si procede.',
  },
]

export default function ClinicasPage() {
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
            <span className="text-ei-accent text-sm font-medium">Clínicas y Salud</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
                  <Stethoscope size={24} />
                </div>
                <p className="text-ei-accent text-sm font-bold uppercase tracking-widest">Clínicas y Salud</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-5">
                Citas, recordatorios y seguimiento{' '}
                <span className="text-gradient">sin intervención manual</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-8">
                Tu recepcionista pasa el día al teléfono gestionando citas, tienes cancelaciones de última hora sin cubrir y los pacientes no reciben seguimiento post-visita. Todo eso tiene solución.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
                >
                  Solicita consultoría gratuita <ArrowRight size={18} />
                </Link>
                <a
                  href="https://jmluxx.github.io/clinicas-demos/"
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
              Trabajamos con clínicas dentales, psicólogos, fisioterapeutas y centros de estética. Conocemos sus puntos de dolor.
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
              Prueba el agente IA para clínicas
            </h2>
            <p className="text-ei-muted mb-6">
              Demo interactiva del asistente de gestión de citas. Comprueba tú mismo cómo responde, cualifica y gestiona pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://jmluxx.github.io/clinicas-demos/"
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
