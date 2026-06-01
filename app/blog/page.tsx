import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Automatización IA para PYMEs',
  description:
    'Guías prácticas sobre automatización con IA para PYMEs españolas. Casos reales, herramientas y estrategias que funcionan.',
}

const articles = [
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
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] hover:border-[rgba(0,194,203,0.3)] transition-all duration-300 block"
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
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
