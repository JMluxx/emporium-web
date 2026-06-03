import type { Metadata } from 'next'
import { PainPointCard } from '@/components/PainPointCard'
import Link from 'next/link'
import { ArrowRight, UtensilsCrossed, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para Hostelería — Restaurantes, Hoteles y Airbnb',
  description:
    'Automatización con IA para restaurantes, hoteles y alojamientos turísticos. Reservas, check-in, reviews, fidelización y gestión multicanal sin trabajo manual.',
  alternates: { canonical: 'https://emporium-ia.es/sectores/hosteleria' },
  openGraph: {
    title: 'Automatización IA para Hostelería — Restaurantes, Hoteles y Airbnb',
    description: 'Gestión de reservas, check-in automático, reviews y fidelización para restaurantes, hoteles y Airbnb.',
    url: 'https://emporium-ia.es/sectores/hosteleria',
  },
}

const restaurantePainPoints = [
  {
    problem: 'No-shows que dejan mesas vacías',
    solution: 'Recordatorio automático 24h y 2h antes de la reserva. Confirmación requerida. Si no confirman, la mesa se libera para la lista de espera automáticamente.',
  },
  {
    problem: 'Reseñas de Google sin responder',
    solution: 'Respuesta automática en menos de 1 hora, en el tono de tu marca. Las negativas se escalan al propietario para respuesta manual inmediata.',
  },
  {
    problem: 'Clientes que vienen una vez y no vuelven',
    solution: 'Campañas de fidelización por WhatsApp: oferta de cumpleaños, descuento en temporada baja, newsletter mensual con novedades del menú.',
  },
  {
    problem: 'Sin datos de ocupación ni rendimiento',
    solution: 'Dashboard diario con ocupación por franja horaria, ticket medio, platos más pedidos y comparativa semanal. Sin abrir Excel.',
  },
]

const hotelPainPoints = [
  {
    problem: 'Reservas dispersas por Booking, Airbnb y web propia',
    solution: 'Sincronización automática de calendarios entre todos los canales. Sin solapamientos, sin overbooking, sin actualizar a mano cada plataforma.',
  },
  {
    problem: 'Check-in y check-out manual para cada huésped',
    solution: 'Mensaje automático con instrucciones de llegada, código de acceso y normas de la casa. El huésped llega informado — sin que nadie tenga que estar pendiente.',
  },
  {
    problem: 'Reviews en Booking, TripAdvisor y Airbnb sin gestionar',
    solution: 'Solicitud automática de reseña al hacer check-out. Respuesta personalizada en cada plataforma. Las negativas se detectan para actuar antes de que escalen.',
  },
  {
    problem: 'Oportunidades de upselling que nadie aprovecha',
    solution: 'Mensajes automáticos antes de la llegada ofreciendo mejora de habitación, traslado o servicios extras. Sin intervención humana — y con conversión real.',
  },
]

const benefits = [
  'Sincronización de reservas entre Booking, Airbnb y web propia',
  'Check-in y check-out automatizado por WhatsApp o email',
  'Recordatorios anti no-show para restaurantes y alojamientos',
  'Solicitud y gestión de reseñas en todas las plataformas',
  'Campañas de fidelización y upselling automáticas',
  'Dashboard unificado de ocupación, ingresos y valoraciones',
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
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-4">
                Restaurantes, hoteles y Airbnb{' '}
                <span className="text-gradient">sin gestión manual</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-3">
                En hostelería el tiempo vale dinero y la atención al cliente no para. Reservas, check-ins, reseñas, fidelización — todo eso puede funcionar solo mientras tu equipo se centra en lo que importa: la experiencia del cliente.
              </p>
              <p className="text-ei-muted text-sm leading-relaxed mb-8">
                Trabajamos con <span className="text-ei-text font-medium">restaurantes, bares, hoteles, apartamentos turísticos y alojamientos en Airbnb y Booking</span>. Cada automatización se adapta al tipo de negocio.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Solicita consultoría gratuita <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.15)]">
              <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">Qué automatizamos</p>
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

      {/* Restaurantes */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-ei-accent text-xs font-bold uppercase tracking-widest mb-2">Restaurantes y bares</p>
            <h2 className="text-3xl font-black text-ei-text mb-2">Llena más mesas, fideliza más clientes</h2>
            <p className="text-ei-muted text-sm max-w-lg">
              Los no-shows, las reseñas sin responder y los clientes que no vuelven son problemas que tienen solución directa con automatización.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {restaurantePainPoints.map((item, i) => (
              <PainPointCard key={i} problem={item.problem} solution={item.solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Hoteles y Airbnb */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-ei-accent text-xs font-bold uppercase tracking-widest mb-2">Hoteles, apartamentos y Airbnb</p>
            <h2 className="text-3xl font-black text-ei-text mb-2">Gestión multicanal sin caos</h2>
            <p className="text-ei-muted text-sm max-w-lg">
              Booking, Airbnb, tu web directa. Sincronizar calendarios, gestionar llegadas y pedir reseñas no debería consumir horas de tu día.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {hotelPainPoints.map((item, i) => (
              <PainPointCard key={i} problem={item.problem} solution={item.solution} dark />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">¿Tienes un restaurante, hotel o alojamiento turístico?</h2>
          <p className="text-ei-muted mb-8">
            15 minutos de llamada. Te contamos exactamente qué automatizaríamos en tu negocio y el impacto esperado en reservas, reseñas y fidelización.
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
