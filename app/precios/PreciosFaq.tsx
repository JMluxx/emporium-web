'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: '¿Hay cuotas mensuales?',
    a: 'No obligatoriamente. El precio de los planes es un pago único por implementación. El mantenimiento mensual es opcional y se acuerda por separado si lo necesitas. La mayoría de clientes no lo contratan hasta que ven que quieren añadir más automatizaciones.',
  },
  {
    q: '¿Qué pasa si la automatización no funciona como esperaba?',
    a: 'El soporte incluido en cada plan cubre ajustes y correcciones. Si el resultado no cumple lo acordado en el presupuesto, lo arreglamos sin coste adicional. Siempre trabajamos con un alcance definido por escrito antes de empezar — sin sorpresas.',
  },
  {
    q: '¿Puedo empezar con Starter y crecer después?',
    a: 'Sí, y es lo que recomendamos. Empieza con un proceso concreto, ve los resultados y decide si quieres más. Muchos clientes empiezan con Starter y en 2-3 meses contratan Growth una vez que ven el impacto real.',
  },
  {
    q: '¿El precio incluye las licencias de las herramientas?',
    a: 'No. El precio es por implementación y configuración. Las licencias de herramientas externas (HubSpot, Slack, Holded, etc.) corren por tu cuenta. Te asesoramos sobre qué necesitas exactamente y cómo minimizar ese coste — muchas tienen plan gratuito o económico suficiente.',
  },
  {
    q: '¿Cuánto tarda en estar operativo?',
    a: 'Starter: 1 semana. Growth: 1-2 semanas. Custom: depende del alcance. Desde la primera llamada hasta tener la automatización funcionando en producción, el tiempo medio es 10 días.',
  },
  {
    q: '¿Necesito firmar un contrato largo?',
    a: 'No. Trabajamos por proyecto, sin permanencia. Cada automatización tiene su presupuesto cerrado. Si quieres mantenimiento mensual después, es un acuerdo aparte que puedes cancelar cuando quieras.',
  },
]

export function PreciosFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl font-black text-ei-text mb-4">Lo que nos preguntan sobre precios</h2>
          <p className="text-ei-muted">Las dudas más comunes antes de contratar.</p>
        </div>
        <div className="bg-ei-card rounded-2xl px-8 border border-[rgba(0,194,203,0.12)]">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-[rgba(0,194,203,0.1)] last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-ei-text font-semibold text-base group-hover:text-ei-accent transition-colors duration-200">
                  {f.q}
                </span>
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full border border-[rgba(0,194,203,0.2)] flex items-center justify-center text-ei-accent group-hover:border-[rgba(0,194,203,0.5)] transition-all duration-200"
                  style={{ rotate: openIndex === i ? '45deg' : '0deg' }}
                >
                  <Plus size={14} />
                </div>
              </button>
              {openIndex === i && (
                <p className="text-ei-muted text-sm leading-relaxed pb-5">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
