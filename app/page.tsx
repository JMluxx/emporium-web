import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Workflow, Plug, BarChart3, Headphones, Receipt, Building2, UtensilsCrossed, ShoppingBag, Stethoscope, Calculator, ShoppingCart } from 'lucide-react'
import { ServiceCard } from '@/components/ServiceCard'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { HeroSection } from './HeroSection'

export const metadata: Metadata = {
  title: 'Emporium IA — Tu PYME no necesita más empleados. Necesita IA.',
  description:
    'Automatizamos los procesos de tu PYME con inteligencia artificial. 30% menos costes, 3× productividad. Consultoría gratuita.',
}

const services = [
  {
    icon: <Bot size={24} />,
    title: 'Chatbots que trabajan por ti',
    description:
      'Atiende consultas, cualifica leads y agenda citas automáticamente. Sin esperas. Sin errores. A las 3 de la madrugada si hace falta.',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Workflows sin fricción',
    description:
      'Elimina los procesos manuales que nadie documenta pero todos odian. Los automatizamos de principio a fin.',
  },
  {
    icon: <Plug size={24} />,
    title: 'Tus herramientas, conectadas',
    description:
      'CRM, ERP, email, Google Drive, WhatsApp. Las integramos para que la información fluya sola.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Informes que se escriben solos',
    description:
      'Reportes automáticos con los números que importan. Sin Excel, sin horas perdidas, sin margen de error.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Soporte 24/7 sin coste extra',
    description:
      'Un asistente IA atiende a tus clientes fuera de horario. Respuestas precisas, tono de tu marca, escalado humano cuando toca.',
  },
  {
    icon: <Receipt size={24} />,
    title: 'Facturación sin dolores de cabeza',
    description:
      'Genera, envía y hace seguimiento de facturas de forma automática. Cobra antes y olvídate de los recordatorios manuales.',
  },
]

const sectors = [
  { icon: <Building2 size={20} />, name: 'Inmobiliario' },
  { icon: <UtensilsCrossed size={20} />, name: 'Hostelería' },
  { icon: <ShoppingBag size={20} />, name: 'Retail' },
  { icon: <Stethoscope size={20} />, name: 'Clínicas y Salud' },
  { icon: <Calculator size={20} />, name: 'Asesorías' },
  { icon: <ShoppingCart size={20} />, name: 'E-commerce' },
]

const metrics = [
  { value: 30, suffix: '%', label: 'Reducción media de costes operativos' },
  { value: 3, suffix: '×', label: 'Productividad de tu equipo' },
  { value: 24, suffix: '/7', label: 'Tu negocio siempre operativo' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Metrics */}
      <section className="py-20 bg-[#080a0e] border-y border-[rgba(0,194,203,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <p className="text-5xl md:text-6xl font-black text-gradient leading-none">
                  <AnimatedCounter end={m.value} suffix={m.suffix} duration={2.2} />
                </p>
                <p className="text-ei-muted text-sm max-w-[160px]">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">
              Qué hacemos
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-4">
              IA que resuelve problemas reales
            </h2>
            <p className="text-ei-muted text-lg max-w-xl mx-auto">
              No tecnología por la tecnología. Automatizaciones concretas que se notan en tu cuenta de resultados.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/soluciones"
              className="inline-flex items-center gap-2 text-ei-accent font-semibold hover:gap-3 transition-all duration-200"
            >
              Ver todas las soluciones <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">
              Sectores
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-ei-text leading-tight">
              Trabajamos con tu sector
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((s, i) => (
              <Link
                key={i}
                href="/sectores"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[rgba(0,194,203,0.15)] bg-ei-card hover:border-[rgba(0,194,203,0.4)] hover:bg-ei-card-hover text-ei-text text-sm font-medium transition-all duration-200 group"
              >
                <span className="text-ei-accent">{s.icon}</span>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(0,194,203,0.15)] to-[rgba(0,194,203,0.05)] border border-[rgba(0,194,203,0.2)] p-12 md:p-16">
            {/* Background glow */}
            <div className="absolute inset-0 bg-hero-gradient opacity-50 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black text-ei-text mb-4 leading-tight">
                ¿Listo para dejar de perder horas?
              </h2>
              <p className="text-ei-muted text-lg mb-8 max-w-lg mx-auto">
                Cuéntanos tu caso en 15 minutos. Sin coste, sin compromiso. Solo soluciones.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black text-lg hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Solicita tu consultoría gratuita <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}