import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cómo automatizar la gestión de citas en una clínica dental',
  description:
    'Los no-shows cuestan entre 800 y 2.000€ al mes a una clínica dental. Aquí explicamos qué automatizamos, cómo funciona y qué resultados esperar.',
  alternates: { canonical: 'https://emporium-ia.es/blog/automatizar-clinica' },
  openGraph: {
    url: 'https://emporium-ia.es/blog/automatizar-clinica',
    type: 'article',
  },
}

export default function ArticleClinicaPage() {
  return (
    <>
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-ei-muted text-sm hover:text-ei-text transition-colors mb-8">
            <ArrowLeft size={14} /> Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Clínicas y Salud</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 6 min</span>
            <span className="text-ei-muted text-xs">28 Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            Cómo automatizar la gestión de citas en una clínica dental (y reducir no-shows un 30%)
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            Los no-shows cuestan a una clínica dental de tamaño medio entre 800 y 2.000€ al mes en huecos sin cubrir. Aquí explicamos exactamente qué automatizamos, cómo funciona y qué resultados esperar.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El problema real</h2>
            <p className="leading-relaxed mb-4">
              Una clínica dental con 3 sillones y agenda completa puede gestionar entre 30 y 50 citas diarias. De esas, entre el 10 y el 20% no aparece. Sin previo aviso. Sin cancelación. El sillón queda vacío, el dentista espera, y la recepcionista llama al siguiente en la lista de espera — si es que existe.
            </p>
            <p className="leading-relaxed mb-4">
              El problema no es solo económico. Es también operativo: la recepcionista pasa horas al teléfono gestionando citas, confirmando, recordando y reorganizando. Horas que no dedica a atender a los pacientes que están físicamente en la clínica.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Qué automatizamos exactamente</h2>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">1. Recordatorios automáticos por WhatsApp</h3>
            <p className="leading-relaxed mb-4">
              El sistema envía tres recordatorios automáticos antes de cada cita: 48 horas antes, 24 horas antes y 2 horas antes. El mensaje incluye la fecha, hora, nombre del profesional y un botón para confirmar o cancelar con un solo tap.
            </p>
            <p className="leading-relaxed mb-4">
              Si el paciente confirma, el sistema lo registra y no vuelve a molestar. Si cancela, la cita se libera automáticamente y se activa la lista de espera.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">2. Lista de espera inteligente</h3>
            <p className="leading-relaxed mb-4">
              Cuando hay una cancelación, el sistema revisa automáticamente la lista de espera y contacta por WhatsApp a los pacientes que han solicitado ese tipo de tratamiento, ordenados por disponibilidad horaria y tiempo de espera. El primero en confirmar se lleva la cita.
            </p>
            <p className="leading-relaxed mb-4">
              Sin que la recepcionista tenga que hacer nada. La cita se rellena sola.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">3. Reserva online 24/7</h3>
            <p className="leading-relaxed mb-4">
              Un chatbot en la web y en WhatsApp Business permite reservar cita en cualquier momento, sin necesidad de llamar. El paciente elige tipo de tratamiento, profesional y hueco disponible. La cita entra directamente en el sistema de gestión de la clínica.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">4. Seguimiento post-visita</h3>
            <p className="leading-relaxed mb-4">
              24 horas después de la cita, el paciente recibe un mensaje automático con las indicaciones post-tratamiento relevantes y, si procede, un recordatorio de la próxima revisión. Si el tratamiento requiere seguimiento en X semanas, el sistema programa el recordatorio solo.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Resultados que observamos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {[
                { value: '30%', label: 'Reducción de no-shows' },
                { value: '2h', label: 'Menos al teléfono cada día' },
                { value: '15%', label: 'Más citas cubiertas por la lista de espera' },
              ].map((m, i) => (
                <div key={i} className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.15)] text-center">
                  <p className="text-3xl font-black text-ei-accent mb-1">{m.value}</p>
                  <p className="text-ei-muted text-sm">{m.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Con qué herramientas lo construimos</h2>
            <p className="leading-relaxed mb-4">
              La arquitectura varía según el software de gestión que ya usa la clínica (Gesden, Dentsply, Nubimed…), pero el stack habitual es:
            </p>
            <ul className="list-none space-y-2 mb-6">
              {[
                'n8n como motor de automatización',
                'WhatsApp Business API vía Twilio o 360dialog',
                'Google Calendar o el sistema nativo de la clínica como fuente de verdad',
                'Claude API para las respuestas contextuales del chatbot',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[rgba(0,194,203,0.2)] flex items-center justify-center flex-shrink-0">
                    <span className="w-1 h-1 rounded-full bg-ei-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">¿Cuánto cuesta y cuánto tarda?</h2>
            <p className="leading-relaxed mb-4">
              Una implementación completa de este stack para una clínica con un sistema de gestión estándar lleva entre 1 y 2 semanas. El coste de implementación se recupera en el primer mes si la clínica tiene una tasa de no-shows superior al 8%.
            </p>
            <p className="leading-relaxed mb-6">
              Si quieres saber exactamente cuánto te costaría y cuánto recuperarías, puedes usar nuestra calculadora de ROI o hablar directamente con nosotros.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
            >
              Hablar de mi clínica <ArrowRight size={18} />
            </Link>
            <Link
              href="/calculadora"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
            >
              Calcular mi ROI
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
