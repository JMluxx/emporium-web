import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, UtensilsCrossed, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para Hostelería',
  description:
    'Reservas, recordatorios, reseñas y fidelización automatizados para restaurantes, hoteles y bares. Menos no-shows, más ocupación.',
}

const benefits = [
  'Gestión de reservas 24/7 sin intervención humana',
  'Recordatorios automáticos por WhatsApp que reducen no-shows',
  'Respuesta a reseñas en tono personalizado',
  'Campañas de fidelización automáticas por temporada',
  'Panel de ocupación y ticket medio en tiempo real',
]

const pain_points = [
  {
    problem: 'No-shows que dejan mesas vacías',
    solution: 'Recordatorio automático 24h y 2h antes de la reserva. Confirmación requerida. Si no confirman, la mesa se libera para lista de espera.',
  },
  {
    problem: 'Reseñas de Google sin responder',
    solution: 'Respuesta automática a reseñas en menos de 1 hora, en el tono de tu marca. Las negativas se escalan para respuesta manual inmediata.',
  },
  {
    problem: 'Clientes que vienen una vez y no vuelven',
    solution: 'Campañas de fidelización por WhatsApp: oferta de cumpleaños, descuento en temporada baja, newsletter mensual con novedades del menú.',
  },
  {
    problem: 'Sin datos de ocupación ni rendimiento',
    solution: 'Dashboard diario con ocupación por franja horaria, ticket medio, platos más pedidos y comparativa con la semana anterior.',
  },
]

export default function HosteleriaPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/sectores" className="text-ei-muted text-sm hover:text-ei-text transition-colors">
              Sectores
            </Link>
            <span className="text-ei-muted/40">/</span>
            <span className="text-ei-accent text-sm font-medium">Hostelería</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
                  <UtensilsCrossed size={24} />
                </div>
                <p className="text-ei-accent text-sm font-bold uppercase tracking-widest">Hostelería</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-5">
                Reservas, reseñas y fidelización{' '}
                <span className="text-gradient">sin levantar el teléfono</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-8">
                Tu equipo pasa horas gestionando reservas, respondiendo reseñas y enviando newsletters que nunca se escriben. Mientras tanto, las mesas se quedan vacías entre semana.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Solicita consultoría gratuita <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.15)]">
              <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">Qué incluye</p>
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

      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-ei-text mb-4">Problemas que resolvemos</h2>
            <p className="text-ei-muted max-w-lg mx-auto">
              Restaurantes, hoteles, bares y cafeterías. Cada automatización ataca un problema concreto del sector.
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

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">¿Listo para llenar más mesas?</h2>
          <p className="text-ei-muted mb-8">
            15 minutos de llamada. Te contamos exactamente qué automatizaríamos en tu negocio y el impacto esperado.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
          >
            Solicita consultoría gratuita <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
