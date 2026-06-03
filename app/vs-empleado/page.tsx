import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatización vs contratar un empleado — Comparativa de costes',
  description:
    'Compara el coste real de contratar un administrativo (30.000€/año) frente a automatizar su trabajo con IA (desde 3.000€). El argumento más claro para cualquier PYME.',
}

const employeeCosts = [
  { concept: 'Salario bruto anual', value: '24.000 €' },
  { concept: 'Seguridad Social (empresa ~30%)', value: '7.200 €' },
  { concept: 'Vacaciones pagadas (22 días)', value: 'incluidas' },
  { concept: 'Bajas, festivos, permisos', value: 'incluidos' },
  { concept: 'Formación y onboarding', value: '1.000–2.000 €' },
  { concept: 'Errores humanos y retrabajo', value: 'variable' },
  { concept: 'Coste total año 1', value: '32.000–35.000 €', highlight: true },
  { concept: 'Coste año 2 en adelante', value: '31.200 €/año', highlight: true },
]

const automationCosts = [
  { concept: 'Implementación inicial (única vez)', value: '2.500–5.000 €' },
  { concept: 'Mantenimiento mensual', value: '150–300 €/mes' },
  { concept: 'Disponibilidad', value: '24/7/365' },
  { concept: 'Bajas, festivos, vacaciones', value: 'No aplica' },
  { concept: 'Errores en tareas repetitivas', value: '0%' },
  { concept: 'Escalabilidad', value: 'Sin coste adicional' },
  { concept: 'Coste total año 1', value: '4.300–8.600 €', highlight: true },
  { concept: 'Coste año 2 en adelante', value: '1.800–3.600 €/año', highlight: true },
]

const comparisons = [
  {
    task: 'Responder consultas frecuentes',
    employee: 'Disponible 8h/día, con variabilidad de calidad',
    automation: 'Disponible 24/7, respuesta consistente en segundos',
  },
  {
    task: 'Enviar recordatorios y seguimientos',
    employee: 'Se olvida, lo pospone, no siempre está disponible',
    automation: 'Automatizado, puntual, sin excepciones',
  },
  {
    task: 'Gestionar leads entrantes',
    employee: 'Responde cuando puede, a veces en horas',
    automation: 'Responde en segundos, cualifica y agenda automáticamente',
  },
  {
    task: 'Generar reportes',
    employee: '2–4h semanales de trabajo manual',
    automation: 'Generado y enviado automáticamente cada semana',
  },
  {
    task: 'Facturación y seguimiento de cobros',
    employee: 'Proceso manual propenso a errores y olvidos',
    automation: 'Automatizado: genera, envía y recuerda sin intervención',
  },
]

const automationCovers = [
  'Responder preguntas frecuentes por WhatsApp o web',
  'Cualificar y derivar leads automáticamente',
  'Enviar recordatorios de citas y pagos',
  'Gestionar la agenda y confirmaciones',
  'Generar y enviar facturas',
  'Reportes semanales automáticos',
  'Integrar CRM, email y herramientas internas',
  'Atención al cliente fuera de horario',
]

export default function VsEmpleadoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">Comparativa</p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Automatización IA<br />vs contratar un empleado
          </h1>
          <p className="text-ei-muted text-xl max-w-2xl mx-auto">
            Un administrativo cuesta 30.000€ al año. Automatizar lo que hace cuesta 3.000–5.000€ una vez.
            Aquí están los números reales.
          </p>
        </div>
      </section>

      {/* Cost comparison table */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-ei-text mb-3">Coste real, sin letra pequeña</h2>
            <p className="text-ei-muted">Perfil: administrativo o auxiliar de oficina, media jornada completa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee */}
            <div className="bg-ei-card rounded-2xl border border-red-500/20 overflow-hidden">
              <div className="bg-red-500/10 px-6 py-4 border-b border-red-500/20">
                <div className="flex items-center gap-3">
                  <XCircle size={20} className="text-red-400" />
                  <h3 className="text-lg font-black text-ei-text">Contratar empleado</h3>
                </div>
                <p className="text-red-400 text-xs mt-1">Coste recurrente cada año</p>
              </div>
              <div className="divide-y divide-[rgba(255,255,255,0.05)]">
                {employeeCosts.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-start sm:items-center justify-between gap-3 px-5 sm:px-6 py-3 ${
                      row.highlight ? 'bg-red-500/5' : ''
                    }`}
                  >
                    <span className={`text-sm min-w-0 flex-1 ${row.highlight ? 'font-bold text-ei-text' : 'text-ei-muted'}`}>
                      {row.concept}
                    </span>
                    <span className={`text-sm font-bold flex-shrink-0 ${row.highlight ? 'text-red-400' : 'text-ei-text'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation */}
            <div className="bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.25)] overflow-hidden">
              <div className="bg-[rgba(0,194,203,0.08)] px-6 py-4 border-b border-[rgba(0,194,203,0.15)]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-ei-accent" />
                  <h3 className="text-lg font-black text-ei-text">Automatización con IA</h3>
                </div>
                <p className="text-ei-accent text-xs mt-1">Pago único + mantenimiento mínimo</p>
              </div>
              <div className="divide-y divide-[rgba(255,255,255,0.05)]">
                {automationCosts.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-start sm:items-center justify-between gap-3 px-5 sm:px-6 py-3 ${
                      row.highlight ? 'bg-[rgba(0,194,203,0.04)]' : ''
                    }`}
                  >
                    <span className={`text-sm ${row.highlight ? 'font-bold text-ei-text' : 'text-ei-muted'}`}>
                      {row.concept}
                    </span>
                    <span className={`text-sm font-bold ${row.highlight ? 'text-ei-accent' : 'text-ei-text'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="mt-8 bg-gradient-to-r from-[rgba(0,194,203,0.1)] to-[rgba(0,194,203,0.05)] rounded-2xl border border-[rgba(0,194,203,0.2)] p-6 text-center">
            <p className="text-ei-muted text-sm mb-2">Ahorro en el primer año</p>
            <p className="text-5xl font-black text-gradient mb-2">+25.000 €</p>
            <p className="text-ei-muted text-sm">Y desde el año 2, el ahorro supera los 27.000€ anuales.</p>
          </div>
        </div>
      </section>

      {/* Task comparison */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-ei-text mb-3">Tarea a tarea</h2>
            <p className="text-ei-muted">Cómo hace cada cosa un empleado vs la automatización</p>
          </div>

          <div className="flex flex-col gap-4">
            {comparisons.map((row, i) => (
              <div key={i} className="bg-ei-card rounded-xl border border-[rgba(0,194,203,0.08)] overflow-hidden">
                <div className="px-5 py-3 border-b border-[rgba(0,194,203,0.08)] bg-[rgba(255,255,255,0.02)]">
                  <p className="text-sm font-bold text-ei-text">{row.task}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(255,255,255,0.05)]">
                  <div className="flex items-start gap-3 px-5 py-4">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ei-muted">{row.employee}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-4">
                    <CheckCircle2 size={16} className="text-ei-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ei-muted">{row.automation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What automation covers */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-ei-text mb-3">¿Qué cubre la automatización?</h2>
            <p className="text-ei-muted">Todo lo que haría ese empleado en tareas repetitivas y predecibles</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {automationCovers.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-ei-card rounded-xl px-5 py-4 border border-[rgba(0,194,203,0.1)]">
                <CheckCircle2 size={16} className="text-ei-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-ei-text">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-ei-muted text-sm mt-8">
            Lo que <strong className="text-ei-text">no</strong> hace: decisiones estratégicas, relaciones personales complejas, ventas consultivas. Para eso sigues necesitando personas. Para lo demás, la IA es más rápida, más barata y nunca se equivoca en lo mismo dos veces.
          </p>
        </div>
      </section>

      {/* Objection handling */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ei-text mb-8 text-center">Las dudas habituales</h2>
          <div className="flex flex-col gap-5">
            {[
              {
                q: '¿Y si la automatización falla?',
                a: 'Las automatizaciones bien construidas tienen tasas de error del 0% en tareas definidas. Y cuando algo falla, hay alertas automáticas. Un empleado que falla no alerta a nadie.',
              },
              {
                q: '¿No necesito igualmente a alguien para gestionarlo?',
                a: 'No. El mantenimiento mensual lo hacemos nosotros. Tú recibes un informe de lo que ha pasado y ya está. El tiempo de supervisión son minutos al mes, no horas al día.',
              },
              {
                q: '¿Qué pasa si mis procesos cambian?',
                a: 'Adaptamos la automatización. Es parte del mantenimiento. Modificar un flujo es mucho más rápido y barato que formar a un nuevo empleado o esperar a que otro entienda el cambio.',
              },
              {
                q: '¿No es deshumanizan el negocio?',
                a: 'Al contrario. Las personas de tu equipo dejan de hacer trabajo mecánico y se centran en lo que realmente importa: clientes, ventas y decisiones. La IA hace el trabajo que nadie quiere hacer.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.1)]">
                <p className="text-ei-text font-bold mb-2">{item.q}</p>
                <p className="text-ei-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(0,194,203,0.15)] to-[rgba(0,194,203,0.05)] border border-[rgba(0,194,203,0.2)] p-12 md:p-16">
            <div className="absolute inset-0 bg-hero-gradient opacity-50 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-ei-text mb-4 leading-tight">
                ¿Quieres saber cuánto ahorrarías tú?
              </h2>
              <p className="text-ei-muted text-lg mb-8 max-w-lg mx-auto">
                En 15 minutos te decimos qué podemos automatizar en tu negocio y el ahorro estimado para tu caso concreto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black text-lg hover:bg-[#00dde7] hover:shadow-glow transition-all duration-300"
                >
                  Consultoría gratuita <ArrowRight size={20} />
                </Link>
                <Link
                  href="/calculadora"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[rgba(0,194,203,0.3)] text-ei-text font-bold text-lg hover:border-ei-accent hover:text-ei-accent transition-all duration-300"
                >
                  Calcular mi ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
