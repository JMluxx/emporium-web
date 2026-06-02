import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IA para asesorías contables: qué automatizar primero',
  description:
    'Las asesorías fiscales y contables tienen los procesos más repetitivos y mejor definidos para automatizar. Esta guía explica por dónde empezar y qué resultados esperar.',
}

export default function ArticlePage() {
  return (
    <>
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-ei-muted text-sm hover:text-ei-text transition-colors mb-8">
            <ArrowLeft size={14} /> Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Asesorías</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 7 min</span>
            <span className="text-ei-muted text-xs">20 Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            IA para asesorías contables: qué automatizar primero
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            Una asesoría típica dedica el 40% de su tiempo a tareas que no requieren criterio experto: recordar documentos, pasar datos, enviar notificaciones, responder las mismas preguntas. Todo eso puede automatizarse hoy.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El perfil de trabajo en una asesoría</h2>
            <p className="leading-relaxed mb-4">
              El trabajo de una asesoría fiscal y contable tiene una característica que lo hace ideal para automatizar: los procesos están perfectamente definidos. Hay fechas fijas (declaraciones trimestrales, anuales, nóminas, seguros sociales), documentación estándar y flujos repetibles para cada tipo de cliente.
            </p>
            <p className="leading-relaxed mb-4">
              El problema es que gran parte de esa gestión se hace manualmente: llamadas para recordar documentos, emails para solicitar información, revisión manual de que todo está completo antes de presentar, avisos a clientes de obligaciones próximas. Horas de trabajo que no aportan valor añadido pero que no se pueden eliminar sin un sistema.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Las 4 automatizaciones con mayor impacto</h2>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">1. Recordatorios automáticos de documentación</h3>
            <p className="leading-relaxed mb-4">
              Antes de cada cierre trimestral, el sistema envía automáticamente a cada cliente la lista de documentos que necesita enviar, personalizada según su situación (autónomo, SL, régimen IVA, etc.). Si a los 3 días no ha enviado algo, manda un recordatorio. Si sigue sin enviarlo, escala una alerta al gestor responsable.
            </p>
            <p className="leading-relaxed mb-4">
              Esto elimina decenas de llamadas y emails cada trimestre y reduce los retrasos en la entrega de documentación.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">2. Respuesta automática a consultas frecuentes</h3>
            <p className="leading-relaxed mb-4">
              "¿Cuándo tengo que presentar el IVA?", "¿Puedo deducirme este gasto?", "¿Qué pasa si presento tarde?". Preguntas que tu equipo responde 20 veces al mes. Un asistente de IA entrenado con la legislación fiscal española y las particularidades de tu asesoría puede responder estas consultas en segundos, 24h al día.
            </p>
            <p className="leading-relaxed mb-4">
              Las consultas complejas o las que requieren revisión del expediente concreto se derivan automáticamente al gestor con el contexto ya recogido.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">3. Seguimiento de clientes sin respuesta</h3>
            <p className="leading-relaxed mb-4">
              Cuando hay que pedir documentación, actualizar datos bancarios para domiciliación o confirmar algo importante, el sistema de seguimiento hace el trabajo: intenta contactar por email, luego por WhatsApp, y si no hay respuesta en X días, alerta al gestor. Sin que nadie tenga que llevar un control manual de quién ha respondido y quién no.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">4. Informe mensual automático por cliente</h3>
            <p className="leading-relaxed mb-4">
              Cada mes, cada cliente recibe automáticamente un resumen de su situación: facturación del período, impuestos pendientes, próximas obligaciones y alertas relevantes. Generado automáticamente desde los datos de tu software contable y enviado sin intervención manual.
            </p>
            <p className="leading-relaxed mb-4">
              Esto mejora la percepción del cliente (ve que hay proactividad) y reduce las llamadas de "¿cómo van mis cuentas?".
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Por dónde empezar</h2>
            <p className="leading-relaxed mb-4">
              La recomendación para una asesoría que empieza a automatizar: primero los recordatorios de documentación (impacto inmediato, bajo riesgo), luego las respuestas automáticas a consultas (requiere más trabajo inicial de configuración pero el retorno es muy alto), y por último los informes automáticos.
            </p>
            <p className="leading-relaxed mb-4">
              Una asesoría con 80–100 clientes puede ahorrar 15–20 horas semanales con estos tres sistemas. A tarifa interna de 20€/h, son 15.000–20.000€ anuales en tiempo recuperado.
            </p>
          </div>

          <div className="mt-12 p-6 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-text font-bold mb-2">¿Tienes una asesoría fiscal o contable?</p>
            <p className="text-ei-muted text-sm mb-4">Te explicamos exactamente qué automatizaríamos en tu caso y cuánto tiempo recuperaría tu equipo.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ei-accent text-[#0a0c10] font-bold text-sm hover:bg-[#00dde7] transition-colors">
              Consultoría gratuita →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
