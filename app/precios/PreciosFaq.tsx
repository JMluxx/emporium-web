'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: '¿Hay cuotas mensuales?',
    a: 'Sí. Cada plan incluye un periodo de continuidad desde el primer día (1 mes en Starter, 3 en Growth, 6 en Custom). Pasado ese periodo, el Plan de Continuidad es obligatorio para mantener las automatizaciones en producción. Las APIs cambian, las herramientas se actualizan, los tokens expiran — sin alguien que lo controle, algo acaba fallando. El coste mensual va de 69 a 99€ en Starter, de 119 a 179€ en Growth y desde 189€ en Custom según el alcance del proyecto. Se fija antes de empezar.',
  },
  {
    q: '¿Cómo se calcula el coste del Plan de Continuidad?',
    a: 'Se calcula en función de tres factores: el número de workflows activos (cada proceso automatizado que está corriendo), el número de integraciones con herramientas externas (cada API conectada añade superficie de fallo potencial), y la criticidad del proceso (no es lo mismo que falle un informe semanal que la atención al cliente 24/7 o la facturación automática). A partir de ahí se estima el tiempo de revisión y monitorización mensual real. Los rangos habituales son 69–99€/mes para Starter, 119–179€/mes para Growth y desde 189€/mes para Custom según el alcance del proyecto.',
  },
  {
    q: '¿Qué incluye el Plan de Continuidad?',
    a: 'Monitorización proactiva de todos los workflows activos, corrección de errores cuando algo falla, adaptación cuando una herramienta actualiza su API o cambia su estructura, ajustes menores sin coste adicional y una revisión mensual del rendimiento. No es soporte reactivo por si se rompe algo — es garantizar que todo sigue funcionando sin que tengas que preocuparte.',
  },
  {
    q: '¿Qué pasa si la automatización no funciona como esperaba?',
    a: 'El periodo de continuidad incluido en cada plan cubre ajustes y correcciones. Si el resultado no cumple lo acordado en el presupuesto, lo arreglamos sin coste adicional. Siempre trabajamos con un alcance definido por escrito antes de empezar — sin sorpresas.',
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
    q: '¿Puedo cancelar el Plan de Continuidad?',
    a: 'Sí, con 30 días de preaviso. Si decides cancelar, las automatizaciones seguirán funcionando mientras no haya cambios en las herramientas conectadas — pero sin nadie que las mantenga, cualquier actualización de una API o cambio en una herramienta puede dejarlas inoperativas sin que te enteres. Es una decisión tuya, pero queremos que la tomes con esa información.',
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
