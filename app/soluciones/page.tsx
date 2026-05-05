import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Workflow, Plug, BarChart3, Headphones, Receipt } from 'lucide-react'
import { ServiceCard } from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Soluciones de IA para PYMEs',
  description:
    'Chatbots inteligentes, automatización de procesos, integración de sistemas, informes IA, atención 24/7 y facturación automática. Soluciones reales para PYMEs.',
}

const solutions = [
  {
    icon: <Bot size={28} />,
    title: 'Chatbots que trabajan por ti',
    description:
      'Atiende consultas, cualifica leads y agenda citas automáticamente. Sin esperas. Sin errores. A las 3 de la madrugada si hace falta.',
    cases: [
      'Respuesta automática a preguntas frecuentes',
      'Cualificación de leads con preguntas inteligentes',
      'Reserva de citas integrada con tu calendario',
      'Derivación a humano cuando el bot no puede resolver',
      'Historial de conversaciones y análisis de satisfacción',
    ],
  },
  {
    icon: <Workflow size={28} />,
    title: 'Workflows sin fricción',
    description:
      'Elimina los procesos manuales que nadie documenta pero todos odian. Los automatizamos de principio a fin.',
    cases: [
      'Onboarding automático de nuevos clientes',
      'Aprobaciones y notificaciones sin emails manuales',
      'Procesamiento de documentos e informes automáticos',
      'Flujos de trabajo entre departamentos sincronizados',
      'Alertas proactivas cuando algo sale del estándar',
    ],
  },
  {
    icon: <Plug size={28} />,
    title: 'Tus herramientas, conectadas',
    description:
      'CRM, ERP, email, Google Drive, WhatsApp. Las integramos para que la información fluya sola.',
    cases: [
      'Sincronización bidireccional entre CRM y herramientas externas',
      'Actualizaciones automáticas de bases de datos',
      'Triggers entre apps (si X ocurre en A, haz Y en B)',
      'Panel centralizado con datos de todas tus plataformas',
      'Webhooks e integración con APIs de cualquier software',
    ],
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Informes que se escriben solos',
    description:
      'Reportes automáticos con los números que importan. Sin Excel, sin horas perdidas, sin margen de error.',
    cases: [
      'Dashboards en tiempo real con KPIs clave',
      'Informes semanales enviados automáticamente por email',
      'Análisis de tendencias y predicciones simples',
      'Alertas cuando un indicador sale del rango esperado',
      'Exportación a Google Sheets, PDF o tu herramienta preferida',
    ],
  },
  {
    icon: <Headphones size={28} />,
    title: 'Soporte 24/7 sin coste extra',
    description:
      'Un asistente IA atiende a tus clientes fuera de horario. Respuestas precisas, tono de tu marca, escalado humano cuando toca.',
    cases: [
      'Asistente IA con tu base de conocimiento propia',
      'Respuestas en el tono y vocabulario de tu marca',
      'Escalado automático a agente humano si es necesario',
      'Soporte multicanal: web, WhatsApp, email, Telegram',
      'Análisis de conversaciones para detectar problemas recurrentes',
    ],
  },
  {
    icon: <Receipt size={28} />,
    title: 'Facturación sin dolores de cabeza',
    description:
      'Genera, envía y hace seguimiento de facturas de forma automática. Cobra antes y olvídate de los recordatorios manuales.',
    cases: [
      'Generación automática de facturas al cerrar un servicio',
      'Envío por email o WhatsApp sin intervención humana',
      'Recordatorios de pago escalonados hasta el cobro',
      'Sincronización con tu software contable',
      'Informes de cuentas pendientes en tiempo real',
    ],
  },
]

export default function SolucionesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
            Soluciones
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            IA que resuelve<br />
            <span className="text-gradient">problemas reales</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-2xl mx-auto">
            Seis líneas de servicio diseñadas para que las PYMEs eliminen trabajo manual, reduzcan errores y crezcan sin escalar costes.
          </p>
        </div>
      </section>

      {/* Solutions detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Card */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] h-full">
                    <div className="w-14 h-14 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-6">
                      <span className="text-ei-accent">{sol.icon}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-ei-text mb-3">
                      {sol.title}
                    </h2>
                    <p className="text-ei-muted leading-relaxed">{sol.description}</p>
                  </div>
                </div>

                {/* Cases */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-4">
                    Casos de uso
                  </p>
                  <ul className="flex flex-col gap-3">
                    {sol.cases.map((c, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-[rgba(0,194,203,0.1)] flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-ei-accent" />
                        </span>
                        <span className="text-ei-muted text-sm leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">
            ¿No encuentras exactamente lo que buscas?
          </h2>
          <p className="text-ei-muted mb-8">
            Cada negocio es diferente. Cuéntanos tu caso y diseñamos una solución a medida.
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