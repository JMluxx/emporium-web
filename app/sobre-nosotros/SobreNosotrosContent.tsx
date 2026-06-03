'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Heart, Clock, CheckCircle2, Zap, Users } from 'lucide-react'
import { TiltCard } from '@/components/TiltCard'

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
          <TiltCard lift className="bg-ei-card rounded-2xl p-10 md:p-14 border border-[rgba(0,194,203,0.12)] overflow-hidden">
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
          </TiltCard>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <TiltCard className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-5">
                  <Target size={22} className="text-ei-accent" />
                </div>
                <h2 className="text-xl font-black text-ei-text mb-3">Misión</h2>
                <p className="text-ei-muted leading-relaxed">
                  Democratizar la inteligencia artificial para que cualquier PYME pueda automatizar sus procesos sin grandes inversiones ni conocimientos técnicos.
                </p>
              </TiltCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <TiltCard className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-5">
                  <Eye size={22} className="text-ei-accent" />
                </div>
                <h2 className="text-xl font-black text-ei-text mb-3">Visión</h2>
                <p className="text-ei-muted leading-relaxed">
                  Ser el partner tecnológico de referencia para PYMEs en España: la agencia a la que acudes cuando quieres crecer sin complicarte la vida.
                </p>
              </TiltCard>
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
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <TiltCard lift className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)] overflow-hidden text-center">
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
              </TiltCard>
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}>
                <TiltCard className="bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.1)] overflow-hidden">
                  <div className="w-1.5 h-8 rounded-full bg-ei-accent mb-4" />
                  <h3 className="text-base font-bold text-ei-text mb-2">{value.title}</h3>
                  <p className="text-ei-muted text-sm leading-relaxed">{value.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">
              El proceso
            </p>
            <h2 className="text-4xl font-black text-ei-text mb-4">Cómo trabajamos</h2>
            <p className="text-ei-muted max-w-xl mx-auto">
              Sin proyectos de 6 meses ni consultoras que desaparecen. De la primera llamada a la automatización funcionando en semanas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                icon: <Users size={20} />,
                title: 'Diagnóstico gratuito',
                desc: '15 minutos contigo para entender tus procesos, dónde pierdes tiempo y qué tiene más impacto automatizar primero.',
              },
              {
                step: '02',
                icon: <Target size={20} />,
                title: 'Plan a medida',
                desc: 'Te presentamos exactamente qué vamos a automatizar, cómo funciona y el ROI estimado. Sin compromiso.',
              },
              {
                step: '03',
                icon: <Zap size={20} />,
                title: 'Implementación rápida',
                desc: 'Arrancamos en días, no meses. Las primeras automatizaciones suelen estar operativas en 1-2 semanas.',
              },
              {
                step: '04',
                icon: <CheckCircle2 size={20} />,
                title: 'Soporte continuo',
                desc: 'No desaparecemos tras entregar. Ajustamos, mejoramos y añadimos nuevas automatizaciones a medida que creces.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}>
                <TiltCard className="relative bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.12)] overflow-hidden">
                  <span className="text-5xl font-black text-[rgba(0,194,203,0.08)] absolute top-4 right-5 leading-none select-none">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-ei-text mb-2">{item.title}</h3>
                  <p className="text-ei-muted text-sm leading-relaxed">{item.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="section-padding bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
                Por qué Emporium IA
              </p>
              <h2 className="text-4xl font-black text-ei-text mb-6 leading-tight">
                No somos una consultora.<br />Somos los que lo construyen.
              </h2>
              <div className="space-y-5 text-ei-muted leading-relaxed">
                <p>
                  Las consultoras grandes te venden estrategia. Luego subcontratan la ejecución, añaden capas de gestión y te presentan una factura que no esperabas.
                </p>
                <p>
                  Nosotros somos dos personas que diseñan, construyen y mantienen cada automatización. Hablas directamente con quien hace el trabajo.
                </p>
                <p className="text-ei-text font-medium">
                  Eso se traduce en menos coste, más velocidad y una interlocución que no cambia cada tres meses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <Clock size={18} />,
                  title: 'Respuesta en menos de 24h',
                  desc: 'Siempre. No hay cuenta de soporte ni bot intermedio.',
                },
                {
                  icon: <Zap size={18} />,
                  title: 'Stack tecnológico avanzado',
                  desc: 'n8n, Claude API, Make, Zapier, Airtable, Supabase. Usamos las herramientas que mejor encajan con tu caso, no las que mejor conocemos.',
                },
                {
                  icon: <Target size={18} />,
                  title: 'Solo cobramos si funciona',
                  desc: 'Si la automatización no genera el valor prometido, lo ajustamos sin coste hasta que lo haga.',
                },
                {
                  icon: <Users size={18} />,
                  title: 'Fundadores en cada proyecto',
                  desc: 'David y José participan directamente en cada implementación. Sin juniors a los que explicarles el contexto cada vez.',
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <TiltCard className="flex items-start gap-4 bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.1)] overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-ei-text text-sm font-bold mb-1">{item.title}</p>
                      <p className="text-ei-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
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