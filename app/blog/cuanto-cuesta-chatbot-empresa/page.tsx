import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: '¿Cuánto cuesta un chatbot para una empresa? Precios reales en 2026',
  description:
    'Desglose honesto de los costes de un chatbot empresarial en 2026: desde los 50€/mes de herramientas SaaS hasta los 3.000–8.000€ de una solución a medida. Qué incluye cada opción.',
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
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Chatbots</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 6 min</span>
            <span className="text-ei-muted text-xs">1 Junio 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            ¿Cuánto cuesta un chatbot para una empresa? Precios reales en 2026
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            La respuesta corta: entre 50€ al mes y 15.000€ en función de lo que necesites. La respuesta útil: depende de qué problema quieres resolver. Aquí lo desglosamos sin rodeos.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Por qué la pregunta no tiene una respuesta simple</h2>
            <p className="leading-relaxed mb-4">
              Cuando alguien pregunta "cuánto cuesta un chatbot", está mezclando cosas muy distintas. Un widget de chat con respuestas predefinidas no tiene nada que ver con un agente de IA que entiende lenguaje natural, accede a tu CRM y gestiona reservas de forma autónoma.
            </p>
            <p className="leading-relaxed mb-4">
              El precio depende de tres variables: el nivel de inteligencia (reglas fijas vs IA generativa), el nivel de integración (solo conversación vs acceso a tus sistemas) y quién lo construye y mantiene.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Opción 1: Herramientas SaaS plug-and-play (50–300€/mes)</h2>
            <p className="leading-relaxed mb-4">
              Plataformas como Tidio, Crisp, Intercom o Freshchat te permiten instalar un chatbot en tu web en horas. El coste oscila entre 50 y 300€/mes según el plan y el volumen de conversaciones.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">Qué incluye:</strong> widget de chat en tu web, respuestas automáticas básicas, traspaso a agente humano, análisis de conversaciones.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">Qué no incluye:</strong> integración con tu CRM, base de conocimiento de tu negocio, respuestas inteligentes basadas en IA real, automatización de acciones (crear reservas, consultar estado de pedido, etc.).
            </p>
            <p className="leading-relaxed mb-4">
              Es la opción correcta si solo necesitas capturar leads o dar soporte básico. No es suficiente si quieres que el chatbot realmente trabaje por ti.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Opción 2: Chatbot con IA generativa pero sin integraciones (1.500–4.000€)</h2>
            <p className="leading-relaxed mb-4">
              Un chatbot basado en GPT-4 o Claude entrenado con la documentación de tu negocio. Puede responder preguntas complejas, mantener conversaciones naturales y representar bien la voz de tu marca.
            </p>
            <p className="leading-relaxed mb-4">
              El coste de implementación ronda los 1.500–4.000€ dependiendo de la cantidad de contenido a procesar y los canales (web, WhatsApp, email). El mantenimiento mensual (actualizaciones, tokens de API) añade 100–300€/mes.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">Para quién:</strong> clínicas, asesorías, inmobiliarias, consultoras. Cualquier negocio con mucha información que responder y un flujo de consultas repetitivas.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Opción 3: Agente de IA con integraciones completas (3.000–8.000€)</h2>
            <p className="leading-relaxed mb-4">
              Aquí ya hablamos de un agente que no solo responde, sino que actúa. Puede crear una reserva en tu sistema de gestión, consultar el estado de un pedido en tiempo real, calificar un lead y añadirlo a tu CRM, o enviar un presupuesto personalizado.
            </p>
            <p className="leading-relaxed mb-4">
              El rango de precio está entre 3.000 y 8.000€ dependiendo de cuántos sistemas hay que integrar y la complejidad de los flujos. El mantenimiento es más alto: 200–500€/mes para garantizar que todas las integraciones funcionan correctamente.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">Para quién:</strong> hostelería (reservas automáticas), e-commerce (seguimiento de pedidos), clínicas (gestión de agenda completa), empresas con alto volumen de atención al cliente.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">El ROI:</strong> un agente de este tipo puede manejar el trabajo de 0,5–1 empleados administrativos, con un coste anual de 5.000–10.000€ frente a los 30.000€+ de una persona.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Lo que nadie te dice sobre el precio</h2>
            <p className="leading-relaxed mb-4">
              El chatbot más barato no siempre es el más económico. Un widget de 50€/mes que no convierte leads ni reduce las consultas repetitivas es un gasto, no una inversión. Un agente de 5.000€ que maneja el 70% de la atención al cliente puede recuperar su coste en el primer trimestre.
            </p>
            <p className="leading-relaxed mb-4">
              La pregunta correcta no es "¿cuánto cuesta?" sino "¿cuánto me cuesta no tenerlo?" Si tu equipo pierde 3 horas al día en consultas repetitivas, eso son 60h/mes × 15€/h = 900€/mes en trabajo que una IA podría hacer.
            </p>
          </div>

          <div className="mt-12 p-6 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-text font-bold mb-2">¿Quieres saber qué tipo de chatbot necesitas?</p>
            <p className="text-ei-muted text-sm mb-4">Te hacemos un análisis gratuito de tu caso y te decimos qué costaría y qué ROI esperarías.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ei-accent text-[#0a0c10] font-bold text-sm hover:bg-[#00dde7] transition-colors">
              Consultoría gratuita →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
