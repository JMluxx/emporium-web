import type { Metadata } from 'next'
import { PainPointCard } from '@/components/PainPointCard'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para Retail',
  description:
    'Stock sincronizado, pedidos centralizados y atención al cliente automatizada para tiendas físicas y multicanal. Menos horas, más ventas.',
}

const benefits = [
  'Stock sincronizado en tiempo real entre tienda física y online',
  'Gestión centralizada de pedidos multicanal',
  'Respuesta automática a consultas de estado de pedido',
  'Alertas de ruptura de stock antes de que ocurra',
  'Informes de ventas, márgenes y rotación diarios',
]

const pain_points = [
  {
    problem: 'Stock físico y online siempre desincronizados',
    solution: 'Sincronización bidireccional en tiempo real entre tu ERP, TPV y tienda online. Una venta en caja actualiza el stock online en segundos.',
  },
  {
    problem: 'Pedidos de tres canales distintos gestionados a mano',
    solution: 'Panel centralizado que agrega pedidos de web, marketplaces y tienda física. Una sola vista, un solo flujo de proceso.',
  },
  {
    problem: 'Clientes preguntando "¿dónde está mi pedido?"',
    solution: 'Respuesta automática con estado actualizado del pedido por WhatsApp o email. Cero intervención de tu equipo para consultas de seguimiento.',
  },
  {
    problem: 'Roturas de stock que cuestan ventas',
    solution: 'Alerta automática cuando cualquier referencia baja del umbral de seguridad. Propuesta de reposición directa al proveedor si tienes el flujo integrado.',
  },
]

export default function RetailPage() {
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
            <span className="text-ei-accent text-sm font-medium">Retail</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
                  <ShoppingBag size={24} />
                </div>
                <p className="text-ei-accent text-sm font-bold uppercase tracking-widest">Retail</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-5">
                Stock, pedidos y atención al cliente{' '}
                <span className="text-gradient">sincronizados</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-8">
                El stock físico no coincide con el online, los pedidos llegan por tres canales distintos y tu equipo pierde media mañana cuadrando hojas de cálculo. Eso se puede automatizar.
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
          <h2 className="text-3xl font-black text-ei-text mb-4">Hablemos de tu tienda</h2>
          <p className="text-ei-muted mb-8">
            Cuéntanos cómo gestionas hoy el stock, los pedidos y la atención al cliente. En 15 minutos te decimos exactamente qué se puede automatizar.
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
