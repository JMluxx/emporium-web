import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PreciosFaq } from './PreciosFaq'
import { TiltCard } from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Precios de automatización IA para PYMEs — Emporium IA',
  description:
    'Precios claros y cerrados para automatizar tu PYME con inteligencia artificial. Desde 500€ por workflow. Sin sorpresas, sin cuotas ocultas. Consultoría gratuita.',
  openGraph: {
    title: 'Precios de automatización IA para PYMEs — Emporium IA',
    description: 'Desde 500€ por workflow automatizado. Presupuesto cerrado antes de empezar. Sin letra pequeña.',
    url: 'https://emporium-ia.es/precios',
  },
  alternates: { canonical: 'https://emporium-ia.es/precios' },
}

const plans = [
  {
    name: 'Starter',
    range: '500 – 800€',
    desc: 'Para PYMEs que quieren automatizar un proceso concreto y ver resultados rápido.',
    features: [
      'Un workflow automatizado de principio a fin',
      'Integración con hasta 2 herramientas',
      'Puesta en marcha en ~1 semana (tiempo medio)',
      '1 mes de soporte incluido',
      'Documentación del proceso',
    ],
    examples: 'Recordatorios de cita por WhatsApp, envío automático de facturas, notificaciones internas.',
    cta: 'Empezar con Starter',
    highlight: false,
  },
  {
    name: 'Growth',
    range: '1.500 – 3.000€',
    desc: 'Para empresas que necesitan conectar varias herramientas y automatizar flujos complejos.',
    features: [
      'Hasta 3 workflows interconectados',
      'Integración con CRM, ERP o herramientas de gestión',
      'Chatbot o agente IA incluido',
      'Puesta en marcha en ~1-2 semanas (tiempo medio)',
      '3 meses de soporte y ajustes incluidos',
      'Panel de seguimiento básico',
    ],
    examples: 'Cualificación automática de leads + CRM + seguimiento, gestión de agenda + lista de espera + seguimiento post-visita.',
    cta: 'Empezar con Growth',
    highlight: true,
  },
  {
    name: 'Custom',
    range: 'Desde 4.000€',
    desc: 'Para proyectos de mayor envergadura con múltiples sistemas, equipos o procesos críticos.',
    features: [
      'Workflows ilimitados en el alcance acordado',
      'Integraciones complejas (ERP, APIs propias, bases de datos)',
      'Agentes IA con lógica de negocio avanzada',
      'Formación al equipo incluida',
      '6 meses de soporte prioritario',
      'Reuniones de seguimiento mensuales',
    ],
    examples: 'Automatización completa del proceso comercial, integración de sistemas heredados, infraestructura de datos.',
    cta: 'Hablemos de tu proyecto',
    highlight: false,
  },
]

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Hay cuotas mensuales?',
                acceptedAnswer: { '@type': 'Answer', text: 'No obligatoriamente. El precio de los planes es un pago único por implementación. El mantenimiento mensual es opcional y se acuerda por separado si lo necesitas.' },
              },
              {
                '@type': 'Question',
                name: '¿Qué pasa si la automatización no funciona como esperaba?',
                acceptedAnswer: { '@type': 'Answer', text: 'El soporte incluido en cada plan cubre ajustes y correcciones. Si el resultado no cumple lo acordado en el presupuesto, lo arreglamos. Siempre trabajamos con un alcance definido por escrito antes de empezar.' },
              },
              {
                '@type': 'Question',
                name: '¿Puedo empezar con Starter y crecer después?',
                acceptedAnswer: { '@type': 'Answer', text: 'Sí, y es lo que recomendamos. Empieza con un proceso concreto, ve los resultados y escala. Muchos clientes empiezan con Starter y en 2-3 meses contratan Growth.' },
              },
              {
                '@type': 'Question',
                name: '¿El precio incluye las licencias de las herramientas?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. El precio es por implementación y configuración. Las licencias de herramientas externas (HubSpot, Slack, etc.) corren por tu cuenta. Te asesoramos sobre qué necesitas y te ayudamos a optimizar el coste.' },
              },
            ],
          }),
        }}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">Precios</p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Sin sorpresas.<br />
            <span className="text-gradient">Presupuesto cerrado siempre.</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-xl mx-auto">
            Estos son rangos orientativos. El precio exacto depende de la complejidad de tu caso. La consultoría de diagnóstico es gratuita.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className="relative">
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="bg-ei-accent text-[#0a0c10] text-xs font-black px-4 py-1 rounded-full">
                      Más elegido
                    </span>
                  </div>
                )}
                <TiltCard
                  lift
                  className={`rounded-2xl overflow-hidden p-8 border flex flex-col ${
                    plan.highlight
                      ? 'bg-gradient-to-b from-[rgba(0,194,203,0.12)] to-ei-card border-[rgba(0,194,203,0.4)]'
                      : 'bg-ei-card border-[rgba(0,194,203,0.12)]'
                  }`}
                >

                <div className="mb-6">
                  <p className="text-ei-accent text-xs font-bold uppercase tracking-widest mb-2">{plan.name}</p>
                  <p className="text-4xl font-black text-ei-text mb-1">{plan.range}</p>
                  <p className="text-ei-muted text-xs mb-3">Precio orientativo · cada proyecto es personalizado</p>
                  <p className="text-ei-muted text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ei-muted">
                      <CheckCircle2 size={15} className="text-ei-accent flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="bg-[rgba(0,194,203,0.05)] rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-ei-muted mb-1.5">Ejemplos</p>
                  <p className="text-xs text-ei-muted leading-relaxed">{plan.examples}</p>
                </div>

                <Link
                  href="/contacto"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-ei-accent text-[#0a0c10] hover:bg-ei-accent-glow hover:shadow-glow'
                      : 'border border-[rgba(0,194,203,0.25)] text-ei-text hover:border-[rgba(0,194,203,0.5)] hover:bg-white/5'
                  }`}
                >
                  {plan.cta} <ArrowRight size={16} />
                </Link>
                </TiltCard>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[rgba(0,194,203,0.04)] border border-[rgba(0,194,203,0.1)] rounded-xl px-6 py-4 text-center max-w-3xl mx-auto">
            <p className="text-ei-muted text-sm leading-relaxed">
              <span className="text-ei-text font-semibold">Todos los precios y tiempos son orientativos.</span>{' '}
              Cada proyecto es diferente: el coste final depende de la complejidad, las integraciones necesarias y el alcance acordado. Los plazos de entrega son tiempos medios — tu caso puede ser más rápido o requerir algo más de margen. Siempre recibirás un presupuesto cerrado y un plazo concreto antes de empezar.
            </p>
            <p className="text-ei-muted/60 text-xs mt-2">Precios con IVA incluido · Mantenimiento mensual opcional</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PreciosFaq />

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.15)] text-center">
            <p className="text-ei-accent text-xs font-bold uppercase tracking-widest mb-3">¿No sabes cuál te corresponde?</p>
            <h2 className="text-2xl font-black text-ei-text mb-3">Cuéntanos qué necesitas</h2>
            <p className="text-ei-muted text-sm mb-6 leading-relaxed">
              En 15 minutos de llamada te decimos exactamente qué automatizaríamos, con qué coste y en cuánto tiempo. Sin compromiso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
            >
              Solicitar diagnóstico gratuito <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
