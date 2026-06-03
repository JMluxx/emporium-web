import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Por qué tu inmobiliaria pierde leads en los primeros 5 minutos',
  description:
    'El 78% de los clientes compra al primer agente que le responde. Si tardas más de 5 minutos en contestar un lead de Idealista, ya has perdido. Esto es lo que automatizamos.',
  alternates: { canonical: 'https://emporium-ia.es/blog/leads-inmobiliaria-ia' },
  openGraph: {
    url: 'https://emporium-ia.es/blog/leads-inmobiliaria-ia',
    type: 'article',
  },
}

export default function ArticleInmobiliariaPage() {
  return (
    <>
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-ei-muted text-sm hover:text-ei-text transition-colors mb-8">
            <ArrowLeft size={14} /> Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Inmobiliario</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 5 min</span>
            <span className="text-ei-muted text-xs">15 Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            Por qué tu inmobiliaria pierde leads en los primeros 5 minutos (y cómo evitarlo con IA)
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            El 78% de los clientes compra al primer agente que le responde. Si tardas más de 5 minutos en contestar un lead de Idealista, ya has perdido. Esto es lo que automatizamos para que no pase.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El dato que lo cambia todo</h2>
            <p className="leading-relaxed mb-4">
              Un estudio de Harvard Business Review analizó 2.241 empresas y encontró que las que respondían a un lead en la primera hora tenían 7 veces más probabilidades de cualificarlo que las que tardaban 2 horas. Las que tardaban más de 24 horas, 60 veces menos.
            </p>
            <p className="leading-relaxed mb-4">
              En inmobiliario, el tiempo de respuesta es aún más crítico. Un comprador potencial suele contactar con 3-5 agencias al mismo tiempo. La primera en responder y en dar información útil se lleva la reunión. El resto no llega a entrar en la ecuación.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Por qué las agencias tardan más de 5 minutos</h2>
            <p className="leading-relaxed mb-4">El proceso típico sin automatización:</p>
            <ol className="list-none space-y-3 mb-6">
              {[
                'El lead llega a tu email (o peor, al portal directamente)',
                'Un agente lo ve cuando abre el correo (si no está en reunión)',
                'Busca el inmueble en el sistema para tener información',
                'Llama al número del lead (que a esa hora quizás no coge)',
                'Si no coge, lo anota para llamar después',
                'El lead ya está hablando con otra agencia',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Cómo lo resuelve la automatización</h2>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Primer contacto en menos de 60 segundos</h3>
            <p className="leading-relaxed mb-4">
              Cuando un lead entra desde cualquier portal (Idealista, Fotocasa, tu web propia), el sistema lanza automáticamente un WhatsApp personalizado con el nombre del interesado, el inmueble que consultó, el precio y una pregunta cualificadora: "¿Buscas para vivir o como inversión?" o "¿Tienes financiación o sería al contado?".
            </p>
            <p className="leading-relaxed mb-4">
              Este primer mensaje llega en menos de 60 segundos. No lo envía un agente — lo envía el sistema. Y como llega por WhatsApp, la tasa de apertura es del 90%+ frente al 20% del email.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Cualificación automática</h3>
            <p className="leading-relaxed mb-4">
              El chatbot hace 3-4 preguntas clave: presupuesto, zona de interés, urgencia y situación actual (alquiler, propiedad propia…). Con esas respuestas, el sistema puntúa el lead automáticamente: caliente, templado o frío.
            </p>
            <p className="leading-relaxed mb-4">
              Los leads calientes llegan al agente con toda la información ya recopilada y una sugerencia de inmuebles que encajan. El agente llama con contexto real, no a ciegas.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Seguimiento automático sin fricción</h3>
            <p className="leading-relaxed mb-4">
              Si el lead no responde al primer mensaje, el sistema envía un segundo a las 4 horas y un tercero al día siguiente. Si sigue sin responder, pasa a una secuencia de email de largo plazo. El agente solo interviene cuando hay respuesta real.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Impacto real</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {[
                { value: '<60s', label: 'Tiempo de respuesta al lead' },
                { value: '3×', label: 'Más leads cualificados por agente' },
                { value: '40%', label: 'Menos tiempo en gestión manual' },
              ].map((m, i) => (
                <div key={i} className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.15)] text-center">
                  <p className="text-3xl font-black text-ei-accent mb-1">{m.value}</p>
                  <p className="text-ei-muted text-sm">{m.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Stack técnico</h2>
            <ul className="list-none space-y-2 mb-6">
              {[
                'n8n para orquestar los flujos entre portales, CRM y WhatsApp',
                'WhatsApp Business API para los mensajes automáticos',
                'Claude API para la cualificación conversacional',
                'Tu CRM actual (HubSpot, Salesforce, Pipedrive o el que uses)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[rgba(0,194,203,0.2)] flex items-center justify-center flex-shrink-0">
                    <span className="w-1 h-1 rounded-full bg-ei-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="leading-relaxed mb-4">
              Puedes ver una demo interactiva de cómo funciona el agente de inmobiliarias antes de hablar con nosotros.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link
              href="/sectores/inmobiliario"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
            >
              Ver demo inmobiliaria <ArrowRight size={18} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
