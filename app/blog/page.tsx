import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { TiltCard } from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Blog de automatización IA para PYMEs — Emporium IA',
  description:
    'Guías prácticas sobre automatización con IA para PYMEs españolas: chatbots, n8n, workflows, reducción de costes. Casos reales y estrategias que funcionan.',
  alternates: { canonical: 'https://emporium-ia.es/blog' },
  openGraph: {
    title: 'Blog de automatización IA para PYMEs',
    description: 'Guías prácticas, herramientas y estrategias de automatización con IA para PYMEs.',
    url: 'https://emporium-ia.es/blog',
  },
}

const articles = [
  {
    slug: 'n8n-vs-make-pymes',
    title: 'n8n vs Make para PYMEs: cuál elegir y por qué',
    excerpt:
      'Make es más fácil de empezar. n8n es más potente a largo plazo. La elección depende de tu caso — aquí lo desglosamos sin rodeos con precios, capacidades y curva de aprendizaje real.',
    date: '2 Junio 2026',
    readTime: '7 min',
    category: 'Herramientas',
  },
  {
    slug: 'cuanto-cuesta-chatbot-empresa',
    title: '¿Cuánto cuesta un chatbot para una empresa? Precios reales en 2026',
    excerpt:
      'Entre 50€/mes y 8.000€ según lo que necesites. Esta guía desglosa las tres opciones principales, qué incluye cada una y cuándo tiene sentido cada inversión.',
    date: '1 Junio 2026',
    readTime: '6 min',
    category: 'Chatbots',
  },
  {
    slug: 'automatizar-clinica',
    title: 'Cómo automatizar la gestión de citas en una clínica dental (y reducir no-shows un 30%)',
    excerpt:
      'Los no-shows cuestan a una clínica dental de tamaño medio entre 800 y 2.000€ al mes en huecos sin cubrir. Aquí explicamos exactamente qué automatizamos, cómo funciona y qué resultados esperar.',
    date: '28 Mayo 2026',
    readTime: '6 min',
    category: 'Clínicas y Salud',
  },
  {
    slug: 'automatizar-facturacion-hosteleria',
    title: 'Cómo automatizar la facturación en hostelería: guía práctica',
    excerpt:
      'El cierre de caja, las facturas a empresa, el informe semanal de ventas. Todo eso puede hacerse solo. Así es como lo montamos para restaurantes y hoteles.',
    date: '28 Mayo 2026',
    readTime: '5 min',
    category: 'Hostelería',
  },
  {
    slug: 'automatizar-atencion-cliente-retail',
    title: 'Automatizar la atención al cliente en retail: qué funciona y qué no',
    excerpt:
      'El 40% de las consultas en retail son siempre las mismas. Eso lo puede responder una IA. El otro 60%, no. Aquí está la línea y cómo montar el sistema.',
    date: '25 Mayo 2026',
    readTime: '6 min',
    category: 'Retail',
  },
  {
    slug: 'ia-para-asesorias-contables',
    title: 'IA para asesorías contables: qué automatizar primero',
    excerpt:
      'Las asesorías tienen los procesos más repetitivos y mejor definidos para automatizar. Esta guía explica por dónde empezar y qué resultados esperar en las primeras semanas.',
    date: '20 Mayo 2026',
    readTime: '7 min',
    category: 'Asesorías',
  },
  {
    slug: 'automatizar-seguimiento-clientes',
    title: 'Cómo automatizar el seguimiento de clientes sin parecer un robot',
    excerpt:
      'La mayoría de las PYMEs pierden entre el 30 y el 50% de sus oportunidades por falta de seguimiento. No porque no quieran — es que no tienen sistema. Esto es lo que funciona.',
    date: '15 Mayo 2026',
    readTime: '5 min',
    category: 'Ventas',
  },
  {
    slug: 'leads-inmobiliaria-ia',
    title: 'Por qué tu inmobiliaria pierde leads en los primeros 5 minutos (y cómo evitarlo con IA)',
    excerpt:
      'El 78% de los clientes compra al primer agente que le responde. Si tardas más de 5 minutos en contestar un lead de Idealista, ya has perdido. Esto es lo que automatizamos para que no pase.',
    date: '15 Mayo 2026',
    readTime: '5 min',
    category: 'Inmobiliario',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Automatización que{' '}
            <span className="text-gradient">funciona de verdad</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-xl mx-auto">
            Casos prácticos, guías y estrategias para PYMEs que quieren resultados, no teoría.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {articles.map((a) => (
              <TiltCard key={a.slug} className="rounded-2xl overflow-hidden">
                <Link
                  href={`/blog/${a.slug}`}
                  className="group bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] hover:border-[rgba(0,194,203,0.3)] transition-colors duration-300 block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">
                      {a.category}
                    </span>
                    <span className="flex items-center gap-1 text-ei-muted text-xs">
                      <Clock size={11} /> {a.readTime}
                    </span>
                    <span className="text-ei-muted text-xs">{a.date}</span>
                  </div>
                  <h2 className="text-xl font-black text-ei-text leading-snug mb-3 group-hover:text-ei-accent transition-colors duration-200">
                    {a.title}
                  </h2>
                  <p className="text-ei-muted text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-ei-accent text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                    Leer artículo <ArrowRight size={14} />
                  </span>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
