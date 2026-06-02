import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatizar la atención al cliente en retail: qué funciona y qué no',
  description:
    'Cómo los negocios de retail y tiendas físicas están usando IA para gestionar consultas, seguimiento de pedidos y devoluciones sin aumentar el equipo.',
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
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Retail</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 6 min</span>
            <span className="text-ei-muted text-xs">25 Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            Automatizar la atención al cliente en retail: qué funciona y qué no
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            El 40% de las consultas en retail son siempre las mismas: horario, disponibilidad, estado del pedido, política de devoluciones. Eso lo puede responder una IA. El otro 60%, no. Aquí está la línea.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El volumen de consultas que nadie quiere gestionar</h2>
            <p className="leading-relaxed mb-4">
              Una tienda de ropa con presencia online y física recibe entre 30 y 80 mensajes diarios entre WhatsApp, Instagram, email y teléfono. En temporada alta (Navidad, rebajas, Black Friday), ese número se multiplica por 3 o 4.
            </p>
            <p className="leading-relaxed mb-4">
              El perfil de esas consultas es siempre parecido: "¿Tenéis la talla 38 en azul?", "¿Cuándo llega mi pedido?", "¿Puedo cambiar una prenda sin ticket?", "¿Abrís los domingos?". Preguntas que tienen respuesta definida y que un sistema de IA puede resolver en segundos.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Qué sí automatizar</h2>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Consultas de horario y ubicación</h3>
            <p className="leading-relaxed mb-4">
              Parece básico, pero es el 15–20% del volumen de consultas. Un chatbot en WhatsApp o web que responde automáticamente con horarios, dirección y cómo llegar elimina decenas de mensajes al día sin esfuerzo.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Estado de pedidos online</h3>
            <p className="leading-relaxed mb-4">
              Si tienes tienda en Shopify, WooCommerce o cualquier otra plataforma, el chatbot puede conectarse a tu sistema y responder "¿dónde está mi pedido?" en tiempo real, sin que ningún empleado tenga que abrir el panel de gestión.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Política de cambios y devoluciones</h3>
            <p className="leading-relaxed mb-4">
              Una IA entrenada con tu política puede explicar exactamente qué se puede devolver, en qué plazo, con o sin ticket, y qué documentación necesita el cliente. Y puede generar el formulario de devolución automáticamente si el cliente confirma que quiere proceder.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Disponibilidad de producto</h3>
            <p className="leading-relaxed mb-4">
              Conectado a tu inventario, el chatbot puede confirmar si una referencia está disponible en tienda o en web, y si no está, ofrecer alternativas o avisar cuando vuelva a haber stock.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Qué NO automatizar</h2>
            <p className="leading-relaxed mb-4">
              Las quejas graves (producto defectuoso, experiencia muy negativa en tienda) no deben gestionarse con un bot. El cliente necesita sentir que hay una persona al otro lado que entiende su frustración. El bot puede recibir la queja y escalarla automáticamente, pero la resolución debe ser humana.
            </p>
            <p className="leading-relaxed mb-4">
              Las preguntas de estilismo ("¿qué combina con esta chaqueta?") también requieren criterio humano o un modelo especializado. Intentar automatizarlas con una IA genérica da respuestas mediocres que dañan la imagen de marca.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El modelo que funciona en retail</h2>
            <p className="leading-relaxed mb-4">
              La IA gestiona el 60–70% de las consultas de forma autónoma. El 30–40% restante se escala a una persona con todo el contexto de la conversación ya recogido: quién es el cliente, qué ha preguntado, qué ha respondido el bot. El tiempo que dedica la persona a cada consulta cae a la mitad.
            </p>
            <p className="leading-relaxed mb-4">
              El resultado práctico: el mismo equipo puede gestionar el doble de volumen sin contratar. O el mismo volumen con la mitad del tiempo dedicado, liberando horas para tareas de mayor valor.
            </p>
          </div>

          <div className="mt-12 p-6 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-text font-bold mb-2">¿Tienes una tienda física u online?</p>
            <p className="text-ei-muted text-sm mb-4">Te analizamos el volumen y tipo de consultas que recibes y te decimos qué parte puede automatizarse.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ei-accent text-[#0a0c10] font-bold text-sm hover:bg-[#00dde7] transition-colors">
              Hablamos →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
