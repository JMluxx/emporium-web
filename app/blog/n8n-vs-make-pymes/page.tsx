import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'n8n vs Make para PYMEs: cuál elegir y por qué — Emporium IA',
  description:
    'Comparativa honesta entre n8n y Make para automatizar procesos en PYMEs españolas. Precios, capacidades, curva de aprendizaje y cuándo usar cada uno en 2026.',
  alternates: { canonical: 'https://emporium-ia.es/blog/n8n-vs-make-pymes' },
  openGraph: {
    title: 'n8n vs Make para PYMEs: cuál elegir y por qué',
    description: 'Comparativa honesta entre n8n y Make. Precios, capacidades y cuándo usar cada uno.',
    url: 'https://emporium-ia.es/blog/n8n-vs-make-pymes',
    type: 'article',
  },
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
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Herramientas</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 7 min</span>
            <span className="text-ei-muted text-xs">2 Junio 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            n8n vs Make para PYMEs: cuál elegir y por qué
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            Dos herramientas, dos filosofías. Make es más fácil de empezar. n8n es más potente a largo plazo. La elección depende de tu caso concreto — aquí lo desglosamos.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El contexto</h2>
            <p className="leading-relaxed mb-4">
              Cuando una PYME decide automatizar procesos, la primera pregunta técnica suele ser: ¿qué herramienta uso? Make (antes Integromat) y n8n son las dos opciones más mencionadas en foros, comunidades y consultorías. Ambas permiten conectar aplicaciones y crear flujos automatizados sin código. Pero son muy diferentes en práctica.
            </p>
            <p className="leading-relaxed mb-4">
              Este artículo no es un análisis técnico para desarrolladores. Es una guía para el dueño o responsable de una PYME que necesita entender cuál encaja mejor en su situación.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Make: la opción visual</h2>
            <p className="leading-relaxed mb-4">
              Make tiene una interfaz completamente visual. Los flujos de automatización se construyen arrastrando y conectando módulos en un canvas. Es intuitivo desde el primer día y la curva de aprendizaje es suave.
            </p>
            <p className="leading-relaxed mb-4">
              Tiene más de 1.500 integraciones nativas. Si necesitas conectar Shopify con Mailchimp, o Typeform con HubSpot, probablemente ya está integrado sin necesidad de programar nada.
            </p>
            <p className="leading-relaxed mb-4">
              El precio parte de un plan gratuito limitado y planes de pago desde 9€/mes. El coste sube con el número de operaciones mensuales, lo que puede volverse caro cuando los volúmenes crecen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">Cuándo usar Make:</strong> cuando el equipo no tiene perfil técnico, cuando las integraciones necesarias están en su catálogo y cuando los volúmenes de automatización son manejables (menos de 10.000 operaciones/mes).
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">n8n: la opción de control</h2>
            <p className="leading-relaxed mb-4">
              n8n es open source y se puede alojar en tu propio servidor. Esto cambia radicalmente la ecuación de precios: pagas una vez por el servidor (desde 5–10€/mes en un VPS básico) y el coste no escala con el volumen de operaciones.
            </p>
            <p className="leading-relaxed mb-4">
              Permite escribir código JavaScript o Python dentro de los flujos, lo que lo hace infinitamente más flexible para casos complejos. También tiene más de 400 integraciones nativas y permite conectar cualquier API mediante nodos HTTP.
            </p>
            <p className="leading-relaxed mb-4">
              La curva de aprendizaje es más pronunciada. Configurar el servidor, entender la lógica de los nodos y depurar flujos complejos requiere más tiempo inicial. Pero una vez dominado, permite construir automatizaciones que Make simplemente no puede hacer.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="text-ei-text">Cuándo usar n8n:</strong> cuando los volúmenes de operaciones son altos, cuando se necesita lógica compleja o personalizada, cuando el control de los datos es prioritario (RGPD) o cuando hay un perfil técnico en el equipo o consultora.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Comparativa directa</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(0,194,203,0.15)]">
                    <th className="text-left py-3 pr-4 text-ei-text font-bold">Criterio</th>
                    <th className="text-left py-3 pr-4 text-ei-accent font-bold">Make</th>
                    <th className="text-left py-3 text-ei-text font-bold">n8n</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
                  {[
                    ['Facilidad de uso', '★★★★★', '★★★☆☆'],
                    ['Integraciones nativas', '1.500+', '400+'],
                    ['Flexibilidad técnica', '★★★☆☆', '★★★★★'],
                    ['Precio (alto volumen)', 'Caro', 'Fijo'],
                    ['Control de datos', 'Nube de Make', 'Tu servidor'],
                    ['Lógica compleja', 'Limitada', 'Sin límites'],
                    ['Tiempo de setup inicial', 'Horas', 'Días'],
                  ].map(([c, m, n], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 text-ei-muted">{c}</td>
                      <td className="py-3 pr-4 text-ei-text">{m}</td>
                      <td className="py-3 text-ei-text">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">La respuesta honesta</h2>
            <p className="leading-relaxed mb-4">
              No hay una respuesta universal. Si empiezas desde cero y quieres resultados en días sin aprender a programar ni a gestionar servidores, Make es la opción. Si ya tienes una consultora que gestiona las automatizaciones, o si tu negocio maneja volúmenes altos y necesitas control total, n8n es la apuesta correcta.
            </p>
            <p className="leading-relaxed mb-4">
              En Emporium IA trabajamos principalmente con n8n precisamente porque nos da el control y la flexibilidad para construir automatizaciones a medida para cada cliente. No hay dos negocios iguales, y Make a veces no es suficiente para los casos más complejos.
            </p>
            <p className="leading-relaxed mb-4">
              Lo que sí está claro: no automatizar es la peor opción de las tres.
            </p>
          </div>

          <div className="mt-12 p-6 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-text font-bold mb-2">¿No sabes cuál encaja mejor en tu caso?</p>
            <p className="text-ei-muted text-sm mb-4">En 15 minutos te decimos qué herramienta y qué flujos tienen más sentido para tu negocio.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ei-accent text-[#0a0c10] font-bold text-sm hover:bg-[#00dde7] transition-colors">
              Consultoría gratuita →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
