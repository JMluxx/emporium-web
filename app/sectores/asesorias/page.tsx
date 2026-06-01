import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, ExternalLink, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización IA para Asesorías y Despachos',
  description:
    'Recogida de documentación, recordatorios de plazos fiscales y gestión de expedientes automatizados. Menos tiempo administrativo, más tiempo para tus clientes.',
}

const benefits = [
  'Solicitud automática de documentación con recordatorios escalonados',
  'Alertas de plazos fiscales y legales con antelación',
  'Gestión de expedientes sin papel ni correos duplicados',
  'Portal de cliente para subir y consultar documentos',
  'Informes de estado de expedientes para tu equipo',
]

const pain_points = [
  {
    problem: 'Clientes que no envían documentación a tiempo',
    solution: 'Sistema automático de solicitud y recordatorio: el cliente recibe petición, recordatorio a los 3 días y alerta urgente a los 7. Tú solo intervenes cuando ya tiene todo.',
  },
  {
    problem: 'Plazos fiscales que pillan por sorpresa',
    solution: 'Calendario fiscal automatizado con alertas escalonadas para cada cliente según su régimen: 30 días, 15 días y 3 días antes del vencimiento.',
  },
  {
    problem: 'Expedientes gestionados por email',
    solution: 'Portal de cliente donde sube documentos, consulta el estado de su expediente y recibe notificaciones. Tú tienes todo centralizado y trazable.',
  },
  {
    problem: 'Horas perdidas en comunicaciones repetitivas',
    solution: 'Respuestas automáticas a consultas frecuentes, acuses de recibo y actualizaciones de estado que normalmente redactas tú manualmente.',
  },
]

export default function AsesoriasPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/sectores" className="text-ei-muted text-sm hover:text-ei-text transition-colors">
              Sectores
            </Link>
            <span className="text-ei-muted/40">/</span>
            <span className="text-ei-accent text-sm font-medium">Asesorías</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
                  <Calculator size={24} />
                </div>
                <p className="text-ei-accent text-sm font-bold uppercase tracking-widest">Asesorías y Despachos</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-5">
                Documentación, plazos y comunicaciones{' '}
                <span className="text-gradient">sin errores ni persecuciones</span>
              </h1>
              <p className="text-ei-muted text-lg leading-relaxed mb-8">
                Los clientes no te envían la documentación a tiempo, te pasas el día recordándoles plazos y la gestión de expedientes se hace entre correos interminables. Eso tiene un coste real.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
                >
                  Solicita consultoría gratuita <ArrowRight size={18} />
                </Link>
                <a
                  href="https://jmluxx.github.io/abogados-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
                >
                  Ver demo interactiva <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.15)]">
              <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">
                Qué incluye
              </p>
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

      {/* Pain points */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-ei-text mb-4">Problemas que resolvemos</h2>
            <p className="text-ei-muted max-w-lg mx-auto">
              Asesorías fiscales, laborales, jurídicas y despachos de abogados. Los procesos son distintos, los problemas de gestión son los mismos.
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

      {/* Demo CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-ei-card rounded-2xl p-10 border border-[rgba(0,194,203,0.2)]">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">Demo disponible</p>
            <h2 className="text-2xl font-black text-ei-text mb-3">
              Prueba el agente IA para despachos
            </h2>
            <p className="text-ei-muted mb-6">
              Demo interactiva del asistente de administración interna. Gestión de procesos, documentación y comunicación con clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://jmluxx.github.io/abogados-demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.3)] text-ei-accent font-bold hover:bg-[rgba(0,194,203,0.08)] transition-all duration-200"
              >
                Abrir demo <ExternalLink size={16} />
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Hablar con nosotros <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
