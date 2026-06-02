import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cómo automatizar el seguimiento de clientes sin parecer un robot',
  description:
    'El seguimiento de clientes es donde se pierde más dinero en una PYME. La mayoría no tiene sistema. Esta guía explica cómo automatizarlo manteniendo el toque humano.',
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
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Ventas</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 5 min</span>
            <span className="text-ei-muted text-xs">15 Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            Cómo automatizar el seguimiento de clientes sin parecer un robot
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            La mayoría de las PYMEs pierden entre el 30 y el 50% de sus oportunidades por falta de seguimiento. No porque no quieran seguir — es que no tienen sistema. Esto es lo que funciona.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El problema real</h2>
            <p className="leading-relaxed mb-4">
              Un cliente pide un presupuesto. Se le envía. No responde. A los 3 días, el comercial tiene la intención de llamar pero está ocupado. A los 7 días, ya da por perdido el lead. El cliente, mientras tanto, contrató con la competencia que le llamó al día siguiente.
            </p>
            <p className="leading-relaxed mb-4">
              Esto pasa en el 70% de las PYMEs. No es falta de ganas — es falta de sistema. El seguimiento manual requiere disciplina, tiempo y memoria. La automatización convierte el seguimiento en algo que simplemente ocurre, siempre, sin depender de que alguien se acuerde.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">La secuencia de seguimiento que funciona</h2>
            <p className="leading-relaxed mb-4">
              El truco está en combinar canales y en que los mensajes sean cortos y directos, no genéricos. Un seguimiento automatizado que parece personalizado convierte igual que uno manual. Uno que parece un correo masivo, no convierte nada.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Día 1: confirmación inmediata</h3>
            <p className="leading-relaxed mb-4">
              En el momento en que el lead entra (formulario web, WhatsApp, llamada), el sistema envía una confirmación automática con el nombre del cliente, un resumen de lo que ha solicitado y el tiempo estimado de respuesta. Esto solo ya reduce el 40% de los "¿habéis recibido mi mensaje?".
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Día 3: primer seguimiento</h3>
            <p className="leading-relaxed mb-4">
              Si el cliente no ha respondido al presupuesto, el sistema envía un mensaje corto: "Hola [nombre], ¿pudiste revisar nuestra propuesta? Si tienes alguna duda estamos disponibles." Enviado desde el email o WhatsApp del comercial responsable, no de una dirección genérica.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Día 7: segundo seguimiento con valor</h3>
            <p className="leading-relaxed mb-4">
              En vez de otro "¿qué tal?" el sistema envía algo útil: un caso similar al del cliente, un artículo relevante o una respuesta a una objeción habitual. Algo que justifique el contacto y aporte algo, no solo presione.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">Día 14: cierre suave</h3>
            <p className="leading-relaxed mb-4">
              "Voy a dejar de molestarte con esto — si en algún momento necesitas retomarlo, aquí estamos." Este mensaje cierra el seguimiento de forma elegante y, paradójicamente, suele provocar más respuestas que los seguimientos anteriores porque elimina la presión.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">La clave: personalización mínima, impacto máximo</h2>
            <p className="leading-relaxed mb-4">
              El seguimiento automatizado falla cuando todos los mensajes son iguales. La solución es segmentar: el sistema usa el sector del cliente, el tipo de servicio solicitado y el canal por el que llegó para adaptar el mensaje. No hace falta escribir 500 versiones distintas — con 5 o 6 variantes bien construidas es suficiente.
            </p>
            <p className="leading-relaxed mb-4">
              Con este sistema en marcha, las PYMEs suelen recuperar entre el 15 y el 25% de leads que antes se perdían. En un negocio donde cada cliente vale 2.000–5.000€, recuperar 3 o 4 leads al mes al año vale mucho más que el coste de la automatización.
            </p>
          </div>

          <div className="mt-12 p-6 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-text font-bold mb-2">¿Quieres montar tu sistema de seguimiento?</p>
            <p className="text-ei-muted text-sm mb-4">Te ayudamos a diseñar la secuencia y lo automatizamos conectándolo con lo que ya usas (CRM, WhatsApp, email).</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ei-accent text-[#0a0c10] font-bold text-sm hover:bg-[#00dde7] transition-colors">
              Consultoría gratuita →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
