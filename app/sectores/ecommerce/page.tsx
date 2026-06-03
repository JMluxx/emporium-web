import type { Metadata } from 'next'
import { PainPointCard } from '@/components/PainPointCard'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para E-commerce',
  description:
    'Pedidos, devoluciones, carritos abandonados y reactivación de clientes en piloto automático. Más conversión, menos gestión manual.',
}

const benefits = [
  'Confirmaciones, envíos y seguimiento de pedidos automatizados',
  'Recuperación de carritos abandonados con tasa de conversión del 15-20%',
  'Gestión de devoluciones sin fricción para el cliente',
  'Campañas de cross-sell y upsell basadas en comportamiento',
  'Análisis de LTV y cohortes de clientes en tiempo real',
]

const pain_points = [
  {
    problem: 'Carritos abandonados sin seguimiento',
    solution: 'Secuencia automática de recuperación: email a la hora, recordatorio a las 24h con reseñas del producto, oferta a las 48h si no han convertido. Tasa de recuperación media del 15-20%.',
  },
  {
    problem: 'Devoluciones que cuestan tiempo y dinero',
    solution: 'Flujo de devolución automatizado: el cliente inicia el proceso online, recibe la etiqueta, el estado se actualiza solo y el reembolso se gestiona sin intervención manual.',
  },
  {
    problem: 'Clientes que compran una vez y no vuelven',
    solution: 'Campañas de reactivación basadas en comportamiento: cross-sell inteligente según historial de compras, recordatorio de reposición para productos consumibles, descuento de aniversario.',
  },
  {
    problem: 'Sin visibilidad del valor real del cliente',
    solution: 'Dashboard de LTV, cohortes, tasa de repetición y productos con mayor margen. Saber cuánto vale cada cliente para decidir cuánto gastar en captarlo.',
  },
]

export default function EcommercePage() {
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
            <span className="text-ei-accent text-sm font-medium">E-commerce</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
                  <ShoppingCart size={24} />
                </div>
                <p className="text-ei-accent text-sm font-bold uppercase tracking-widest">E-commerce</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-5">
                Pedidos, devoluciones y captación{' '}
                <span className="text-gradient">en piloto automático</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-8">
                Gestionas pedidos a mano en temporada alta, las devoluciones te cuestan más de lo que valen y abandonas carritos porque no hay tiempo para seguimiento. Cada uno de esos puntos es dinero perdido.
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pain_points.map((item, i) => (
              <PainPointCard key={i} problem={item.problem} solution={item.solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">Recupera los pedidos que estás perdiendo</h2>
          <p className="text-ei-muted mb-8">
            Solo los carritos abandonados suelen suponer un 15-20% de ventas adicionales. En 15 minutos te decimos qué automatizaríamos en tu tienda primero.
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
