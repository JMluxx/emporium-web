'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'

const team = [
  {
    photo: '/team/david.jpg',
    name: 'David García',
    role: 'Co-fundador',
    area: 'Gestión y Estrategia',
    bio: 'Convierte operaciones complejas en procesos claros y escalables. Su experiencia en gestión empresarial y su visión estratégica son el motor que mantiene a Emporium IA orientado a resultados reales para sus clientes.',
  },
  {
    photo: '/team/jose.jpg',
    name: 'José Villamarin',
    role: 'Co-fundador',
    area: 'Tecnología e Implementación',
    bio: 'Construye las automatizaciones que hacen que todo encaje. Con dominio de n8n, Claude API y el stack de automatización más avanzado del mercado, diseña e implementa los workflows que transforman los negocios de los clientes.',
  },
]

const values = [
  {
    title: 'Transparencia',
    description:
      'Sin tecnicismos ni cajas negras. Te explicamos exactamente qué hacemos, por qué y qué resultados esperar.',
  },
  {
    title: 'Cercanía',
    description:
      'Somos una agencia pequeña y así seguiremos. Cada cliente tiene interlocución directa con los fundadores.',
  },
  {
    title: 'Innovación responsable',
    description:
      'Usamos la IA más avanzada, pero siempre al servicio de resultados prácticos. No implementamos tecnología por moda.',
  },
  {
    title: 'Compromiso con resultados',
    description:
      'Medimos nuestro éxito en horas ahorradas, errores eliminados y crecimiento generado para nuestros clientes.',
  },
  {
    title: 'Simplicidad',
    description:
      'La mejor automatización es la que el usuario no nota. Sencilla por fuera, potente por dentro.',
  },
]

export function SobreNosotrosContent() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
            Sobre nosotros
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Nacimos para que la IA no sea<br />
            <span className="text-gradient">solo para las grandes empresas</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-2xl mx-auto">
            Una agencia pequeña con una misión grande: democratizar la automatización inteligente para las PYMEs españolas.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ei-card rounded-2xl p-10 md:p-14 border border-[rgba(0,194,203,0.12)]">
            <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-6">
              Nuestra historia
            </p>
            <div className="space-y-5 text-ei-muted leading-relaxed text-lg">
              <p>
                Emporium IA nació en Salamanca con una idea sencilla: las PYMEs españolas merecen las mismas herramientas que las corporaciones, pero adaptadas a su realidad, su presupuesto y sus procesos.
              </p>
              <p>
                David y José llevan años en el mundo de los negocios y las tecnologías. Vieron de primera mano cómo muchos negocios —clínicas, inmobiliarias, despachos, tiendas— perdían horas cada semana en tareas que una máquina podía hacer mejor. Y lo más frustrante: las soluciones existían, pero nadie las hacía accesibles.
              </p>
              <p>
                Decidieron hacer algo al respecto. Fundaron Emporium IA para ser el partner tecnológico que las PYMEs necesitan: sin consultoras enormes, sin proyectos de 6 meses, sin facturas incomprensibles. Solo automatizaciones que funcionan y resultados que se miden.
              </p>
              <p className="text-ei-text font-medium">
                Hoy trabajamos con PYMEs en toda España, especialmente en Castilla y León, y seguimos con la misma filosofía del primer día: tecnología al servicio de las personas, no al revés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-5">
                <Target size={22} className="text-ei-accent" />
              </div>
              <h2 className="text-xl font-black text-ei-text mb-3">Misión</h2>
              <p className="text-ei-muted leading-relaxed">
                Democratizar la inteligencia artificial para que cualquier PYME pueda automatizar sus procesos sin grandes inversiones ni conocimientos técnicos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-5">
                <Eye size={22} className="text-ei-accent" />
              </div>
              <h2 className="text-xl font-black text-ei-text mb-3">Visión</h2>
              <p className="text-ei-muted leading-relaxed">
                Ser el partner tecnológico de referencia para PYMEs en España: la agencia a la que acudes cuando quieres crecer sin complicarte la vida.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">
              El equipo
            </p>
            <h2 className="text-4xl font-black text-ei-text">Los fundadores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] text-center"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-5 border border-[rgba(0,194,203,0.2)]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-black text-ei-text mb-1">{member.name}</h3>
                <p className="text-ei-accent text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-ei-muted text-xs mb-4 uppercase tracking-wider">{member.area}</p>
                <p className="text-ei-muted text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mx-auto mb-4">
              <Heart size={22} className="text-ei-accent" />
            </div>
            <h2 className="text-4xl font-black text-ei-text mb-3">Nuestros valores</h2>
            <p className="text-ei-muted max-w-lg mx-auto">
              Lo que guía cada decisión que tomamos, cada proyecto que lanzamos y cada cliente que atendemos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.1)]"
              >
                <div className="w-1.5 h-8 rounded-full bg-ei-accent mb-4" />
                <h3 className="text-base font-bold text-ei-text mb-2">{value.title}</h3>
                <p className="text-ei-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-ei-muted mb-8">
            Reserva 15 minutos. Sin compromiso. Te contamos exactamente cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
          >
            Hablar con nosotros <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}