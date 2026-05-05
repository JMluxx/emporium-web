'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const benefits = [
  {
    number: '01',
    title: 'Liberas tiempo real',
    description:
      'No tiempo teórico. Hablamos de horas concretas que dejarás de perder cada semana. Tus equipos se centran en lo que hace crecer el negocio, no en alimentar hojas de cálculo o copiar datos entre sistemas.',
    detail:
      'La mayoría de nuestros clientes recuperan entre 10 y 30 horas semanales en el primer mes. Tiempo que reinvierten en ventas, en producto, en clientes.',
  },
  {
    number: '02',
    title: 'Reduces errores humanos',
    description:
      'Los procesos manuales fallan. Los automatizados, no. Cada tarea se ejecuta igual, cada vez, sin olvidar ningún paso, sin confundir un número, sin perder un email.',
    detail:
      'Los errores manuales en facturación, logística o comunicación con clientes cuestan dinero y reputación. La automatización los elimina de raíz.',
  },
  {
    number: '03',
    title: 'Escalas sin contratar',
    description:
      'Tu volumen de trabajo puede multiplicarse por 10. Tu estructura de costes, no. La IA crece contigo sin que tengas que incorporar personal para gestionar el crecimiento operativo.',
    detail:
      'Los workflows automatizados no se cansan, no se van de vacaciones y no necesitan formación cuando cambia un proceso. Simplemente se actualizan.',
  },
  {
    number: '04',
    title: 'Decides con datos',
    description:
      'Informes automáticos, KPIs en tiempo real, alertas cuando algo se desvía. Dejas de gestionar a ciegas y empiezas a tomar decisiones basadas en lo que realmente está pasando.',
    detail:
      'Muchos negocios tienen los datos pero no los analizan porque hacerlo a mano es inviable. Con la automatización, los insights llegan solos en tu bandeja de entrada cada mañana.',
  },
  {
    number: '05',
    title: 'Mejoras la experiencia de cliente',
    description:
      'Respuestas inmediatas, seguimiento proactivo, comunicaciones personalizadas. El cliente nota la diferencia aunque no sepa que hay IA por detrás.',
    detail:
      'La rapidez y consistencia en la atención es hoy un diferenciador competitivo. Tus clientes no esperan, no se sienten olvidados y reciben mensajes que parecen escritos para ellos.',
  },
  {
    number: '06',
    title: 'ROI medible desde el mes 1',
    description:
      'No prometemos magia. Prometemos métricas. Antes de arrancar definimos juntos qué va a mejorar y cuánto. Al terminar el primer mes, comparamos.',
    detail:
      'Trabajamos con KPIs concretos: horas ahorradas, errores evitados, leads procesados, facturas cobradas más rápido. Si los números no cuadran, lo revisamos juntos.',
  },
]

export function BeneficiosContent() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
            Beneficios
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Lo que cambia en tu<br />
            <span className="text-gradient">negocio con Emporium IA</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-2xl mx-auto">
            Resultados concretos, medibles y que se notan desde el primer mes.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative bg-ei-card rounded-2xl p-8 md:p-10 border border-[rgba(0,194,203,0.12)] hover:border-[rgba(0,194,203,0.3)] transition-all duration-300 overflow-hidden group"
              >
                {/* Decorative number */}
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[120px] md:text-[160px] font-black text-ei-text opacity-[0.025] leading-none select-none pointer-events-none">
                  {benefit.number}
                </span>

                <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start">
                  {/* Number accent */}
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <span className="text-4xl md:text-5xl font-black text-gradient leading-none">
                      {benefit.number}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,194,203,0.4)] to-transparent md:w-full md:h-px" />
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-ei-text mb-3 leading-tight">
                      {benefit.title}
                    </h2>
                    <p className="text-ei-muted leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <p className="text-sm text-ei-muted/80 leading-relaxed border-l-2 border-[rgba(0,194,203,0.3)] pl-4 italic">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">
            ¿Quieres ver estos beneficios en tu negocio?
          </h2>
          <p className="text-ei-muted mb-8">
            En 15 minutos te contamos cómo los conseguirías. Sin coste ni compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
          >
            Solicita tu consultoría gratuita <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}