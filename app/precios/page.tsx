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
      '1 mes de Plan de Continuidad incluido',
      'Plan de Continuidad obligatorio desde 49€/mes tras el primer mes',
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
      '3 meses de Plan de Continuidad incluidos',
      'Plan de Continuidad obligatorio desde 99€/mes tras los 3 meses',
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
      '6 meses de Plan de Continuidad incluidos',
      'Plan de Continuidad obligatorio desde 179€/mes tras los 6 meses',
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
                acceptedAnswer: { '@type': 'Answer', text: 'Sí. Cada plan incluye un periodo de continuidad desde el inicio (1 mes en Starter, 3 en Growth, 6 en Custom). Pasado ese periodo, el Plan de Continuidad es obligatorio para mantener las automatizaciones en producción. El coste mensual se calcula según workflows activos, integraciones y criticidad del proceso, y se fija antes de empezar.' },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se calcula el Plan de Continuidad?',
                acceptedAnswer: { '@type': 'Answer', text: 'Se calcula en función de tres factores: número de workflows activos, número de integraciones con herramientas externas y criticidad del proceso. Los rangos habituales son 49–79€/mes para Starter, 99–149€/mes para Growth y desde 179€/mes para Custom.' },
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
            <p className="text-ei-muted/60 text-xs mt-2">Precios con IVA incluido · Plan de Continuidad obligatorio tras el periodo incluido · Cancelable con 30 días de preaviso</p>
          </div>
        </div>
      </section>

      {/* Plan de Continuidad */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">Plan de Continuidad</p>
            <h2 className="text-3xl md:text-4xl font-black text-ei-text mb-4">¿Cómo se calcula el soporte mensual?</h2>
            <p className="text-ei-muted max-w-2xl mx-auto">
              Las automatizaciones funcionan solas — hasta que una API cambia, una herramienta se actualiza o un token expira. El Plan de Continuidad garantiza que todo siga funcionando sin que tengas que preocuparte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                label: '01',
                title: 'Workflows activos',
                desc: 'Cada proceso automatizado en producción. Más workflows, más superficie a monitorizar y mantener.',
              },
              {
                label: '02',
                title: 'Integraciones externas',
                desc: 'Cada API conectada (CRM, WhatsApp, facturación, ERP...) es un punto que puede romperse cuando el proveedor actualiza su plataforma.',
              },
              {
                label: '03',
                title: 'Criticidad del proceso',
                desc: 'No es lo mismo que falle un informe semanal que la atención al cliente 24/7 o la facturación automática. Los procesos críticos requieren respuesta más rápida.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.12)] relative">
                <span className="text-5xl font-black text-[rgba(0,194,203,0.07)] absolute top-4 right-5 leading-none select-none">{item.label}</span>
                <h3 className="text-ei-text font-bold text-base mb-2">{item.title}</h3>
                <p className="text-ei-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-accent text-xs font-bold uppercase tracking-widest mb-5">Rangos orientativos</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { plan: 'Starter', range: '49 – 79€/mes', detail: '1 workflow · hasta 2 integraciones · proceso estándar' },
                { plan: 'Growth', range: '99 – 149€/mes', detail: 'Hasta 3 workflows · CRM/ERP · chatbot activo' },
                { plan: 'Custom', range: 'Desde 179€/mes', detail: 'Múltiples workflows · integraciones complejas · procesos críticos' },
              ].map((item, i) => (
                <div key={i} className="bg-[rgba(0,194,203,0.04)] rounded-xl p-5 border border-[rgba(0,194,203,0.1)]">
                  <p className="text-ei-accent text-xs font-bold uppercase tracking-widest mb-1">{item.plan}</p>
                  <p className="text-2xl font-black text-ei-text mb-2">{item.range}</p>
                  <p className="text-ei-muted text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-ei-muted/60 text-xs mt-5 text-center">El coste exacto se fija en el presupuesto antes de empezar · Cancelable con 30 días de preaviso</p>
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
