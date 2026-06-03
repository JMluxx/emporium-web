import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, UtensilsCrossed, ShoppingBag, Stethoscope, Calculator, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA por sector: inmobiliario, hostelería, retail y más',
  description:
    'Automatización con inteligencia artificial para inmobiliarias, hostelería, retail, clínicas, asesorías y e-commerce. Soluciones específicas y probadas para cada industria.',
  alternates: { canonical: 'https://emporium-ia.es/sectores' },
  openGraph: {
    title: 'Automatización IA por sector — Emporium IA',
    description: 'Soluciones de IA específicas para inmobiliarias, hostelería, retail, clínicas y asesorías.',
    url: 'https://emporium-ia.es/sectores',
  },
}

const sectors = [
  {
    icon: <Building2 size={32} />,
    name: 'Inmobiliario',
    slug: 'inmobiliario',
    hasDemo: true,
    tagline: 'Del portal al cliente cualificado, en automático',
    pain: 'Captás leads de portales distintos, los metes a mano en el CRM, haces seguimiento manual y muchos se enfrían antes de que puedas llamarles.',
    solution:
      'Capturamos leads de todos tus portales en tiempo real, los cualificamos con IA según tus criterios, los introducimos en el CRM y lanzamos un primer contacto automático en menos de 5 minutos.',
    benefits: [
      'Respuesta al lead en menos de 5 minutos',
      'Cualificación automática por zona, presupuesto y urgencia',
      'Asignación automática al agente correcto',
      'Seguimiento escalonado hasta la cita',
      'Informes semanales de pipeline y conversión',
    ],
  },
  {
    icon: <UtensilsCrossed size={32} />,
    name: 'Hostelería',
    slug: 'hosteleria',
    hasDemo: false,
    tagline: 'Reservas, reseñas y fidelización sin levantar el teléfono',
    pain: 'Tu equipo pasa horas gestionando reservas, respondiendo reseñas de Google y enviando newsletters que nunca se escriben. Mientras tanto, las mesas se quedan vacías en días entre semana.',
    solution:
      'Automatizamos las reservas online, los recordatorios por WhatsApp, la respuesta a reseñas y las campañas de fidelización para que tú te centres en la cocina y el servicio.',
    benefits: [
      'Gestión de reservas 24/7 sin intervención humana',
      'Recordatorios automáticos por WhatsApp que reducen no-shows',
      'Respuesta a reseñas en tono personalizado',
      'Campañas de fidelización automáticas por temporada',
      'Panel de ocupación y ticket medio en tiempo real',
    ],
  },
  {
    icon: <ShoppingBag size={32} />,
    name: 'Retail',
    slug: 'retail',
    hasDemo: false,
    tagline: 'Stock, pedidos y atención al cliente sincronizados',
    pain: 'El stock físico no coincide con el online, los pedidos llegan por tres canales distintos y tu equipo pierde media mañana cuadrando hojas de cálculo.',
    solution:
      'Sincronizamos tu inventario en todos los canales, centralizamos pedidos y automatizamos la atención al cliente para devoluciones, dudas y seguimiento de envíos.',
    benefits: [
      'Stock sincronizado en tiempo real entre tienda física y online',
      'Gestión centralizada de pedidos multicanal',
      'Respuesta automática a consultas de estado de pedido',
      'Alertas de ruptura de stock antes de que ocurra',
      'Informes de ventas, márgenes y rotación diarios',
    ],
  },
  {
    icon: <Stethoscope size={32} />,
    name: 'Clínicas y Salud',
    slug: 'clinicas',
    hasDemo: true,
    tagline: 'Citas, recordatorios y seguimiento de pacientes automatizados',
    pain: 'Tu recepcionista pasa el día al teléfono gestionando citas, tienes cancelaciones de última hora que se quedan sin cubrir y los pacientes no reciben seguimiento post-visita.',
    solution:
      'Automatizamos la gestión de agenda, los recordatorios de cita, las listas de espera y los mensajes de seguimiento post-consulta para que tu equipo se centre en atender pacientes.',
    benefits: [
      'Reserva de citas online 24/7',
      'Recordatorios automáticos que reducen un 30% las ausencias',
      'Listas de espera inteligentes para cubrir cancelaciones',
      'Mensajes de seguimiento post-consulta personalizados',
      'Gestión de historiales sin duplicidades ni errores',
    ],
  },
  {
    icon: <Calculator size={32} />,
    name: 'Asesorías',
    slug: 'asesorias',
    hasDemo: true,
    tagline: 'Documentación, plazos y comunicaciones sin errores',
    pain: 'Los clientes no te envían la documentación a tiempo, te pasas el día recordándoles plazos y la gestión de expedientes se hace manualmente entre correos interminables.',
    solution:
      'Automatizamos la recogida de documentación, los recordatorios de plazos fiscales, la gestión de expedientes y las comunicaciones con clientes para que tu despacho sea más eficiente.',
    benefits: [
      'Solicitud automática de documentación con recordatorios escalonados',
      'Alertas de plazos fiscales y legales con antelación',
      'Gestión de expedientes sin papel ni correos duplicados',
      'Portal de cliente para subir y consultar documentos',
      'Informes de estado de expedientes para tu equipo',
    ],
  },
  {
    icon: <ShoppingCart size={32} />,
    name: 'E-commerce',
    slug: 'ecommerce',
    hasDemo: false,
    tagline: 'Pedidos, devoluciones y captación en piloto automático',
    pain: 'Gestionas pedidos manualmente en temporada alta, las devoluciones te cuestan más de lo que valen y abandonas carritos porque no hay tiempo para seguimiento.',
    solution:
      'Automatizamos el ciclo completo del pedido, la gestión de devoluciones, los emails de recuperación de carritos y las campañas de reactivación para que cada cliente valga más.',
    benefits: [
      'Confirmaciones, envíos y seguimiento de pedidos automatizados',
      'Recuperación de carritos abandonados con tasa de conversión del 15-20%',
      'Gestión de devoluciones sin fricción para el cliente',
      'Campañas de cross-sell y upsell basadas en comportamiento',
      'Análisis de LTV y cohortes de clientes en tiempo real',
    ],
  },
]

export default function SectoresPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
            Sectores
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Conocemos tu negocio<br />
            <span className="text-gradient">mejor que nadie</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-2xl mx-auto">
            No somos una agencia genérica de tecnología. Trabajamos con sectores concretos y sabemos exactamente cuáles son tus puntos de dolor.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, i) => (
              <Link
                key={i}
                href={`/sectores/${sector.slug}`}
                className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] hover:border-[rgba(0,194,203,0.3)] transition-all duration-300 group block"
              >
                {/* Icon + name */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent group-hover:bg-[rgba(0,194,203,0.18)] transition-colors">
                    {sector.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="text-xl font-black text-ei-text">{sector.name}</h2>
                      {sector.hasDemo && (
                        <span className="px-2 py-0.5 rounded-full bg-[rgba(0,194,203,0.15)] text-ei-accent text-[10px] font-bold uppercase tracking-wider">
                          Demo
                        </span>
                      )}
                    </div>
                    <p className="text-ei-accent text-sm">{sector.tagline}</p>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-ei-muted mb-2">
                    El problema habitual
                  </p>
                  <p className="text-ei-muted text-sm leading-relaxed">{sector.pain}</p>
                </div>

                {/* Solution */}
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-2">
                    Lo que hacemos
                  </p>
                  <p className="text-ei-muted text-sm leading-relaxed">{sector.solution}</p>
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-1.5 mb-5">
                  {sector.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-ei-muted">
                      <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[rgba(0,194,203,0.15)] flex items-center justify-center flex-shrink-0">
                        <span className="w-1 h-1 rounded-full bg-ei-accent" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1 text-ei-accent text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Ver solución completa <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">
            ¿Tu sector no está aquí?
          </h2>
          <p className="text-ei-muted mb-8">
            Trabajamos con cualquier PYME que tenga procesos repetitivos. Cuéntanos tu caso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
          >
            Solicita tu consultoría gratuita <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}