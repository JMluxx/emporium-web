import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cómo automatizar la facturación en hostelería: guía práctica',
  description:
    'Los restaurantes y hoteles pierden horas cada semana en facturación manual. Esta guía explica cómo automatizar el proceso completo: desde la comanda hasta el cierre contable.',
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
            <span className="px-3 py-1 rounded-full bg-[rgba(0,194,203,0.1)] text-ei-accent text-xs font-bold">Hostelería</span>
            <span className="flex items-center gap-1 text-ei-muted text-xs"><Clock size={11} /> 5 min</span>
            <span className="text-ei-muted text-xs">28 Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ei-text leading-tight mb-6">
            Cómo automatizar la facturación en hostelería: guía práctica
          </h1>
          <p className="text-ei-muted text-xl leading-relaxed">
            El cierre de caja, la conciliación bancaria, las facturas a empresas, el informe semanal de ventas. Todo eso puede hacerse solo. Así es como lo montamos.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-ei-muted">

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El problema en hostelería</h2>
            <p className="leading-relaxed mb-4">
              Un restaurante mediano con 80–100 cubiertos diarios genera entre 30 y 50 tickets por servicio. A final de semana, el encargado o el propio dueño dedica entre 3 y 5 horas a conciliar ventas, cuadrar caja, revisar los tickets de empresa y preparar el resumen para el gestor.
            </p>
            <p className="leading-relaxed mb-4">
              En temporada alta, esas horas se triplican. Y los errores también: albaranes sin procesar, facturas a empresa con datos incorrectos, descuadres de caja que llevan horas de investigación.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Qué se puede automatizar</h2>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">1. Cierre de caja diario</h3>
            <p className="leading-relaxed mb-4">
              El TPV (ya sea Revo, Lightspeed, Cover Manager o cualquier otro) genera un informe al cierre. Ese informe se puede exportar automáticamente, procesarse con IA para extraer los datos relevantes y enviarse por email al encargado y al gestor cada noche a las 23:30h. Sin que nadie tenga que hacer nada.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">2. Facturas a empresa</h3>
            <p className="leading-relaxed mb-4">
              Cuando un cliente empresarial pide factura, el proceso habitual es anotar los datos manualmente, generarla en el software contable y enviarla por email. Todo eso se automatiza: el cliente rellena un formulario en el momento (QR en la mesa), el sistema genera la factura automáticamente y la envía en segundos.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">3. Informe semanal de ventas</h3>
            <p className="leading-relaxed mb-4">
              Cada lunes a las 8:00h puedes recibir un informe con las ventas de la semana anterior: ventas totales, ticket medio, días de mayor ocupación, productos más vendidos, comparativa con la semana anterior y el mismo período del año pasado. Todo generado automáticamente desde los datos del TPV y enviado por email o WhatsApp.
            </p>

            <h3 className="text-lg font-bold text-ei-text mt-8 mb-3">4. Gestión de reservas y no-shows</h3>
            <p className="leading-relaxed mb-4">
              Los no-shows en restaurante representan entre el 5 y el 15% de la capacidad. Con recordatorios automáticos por WhatsApp 24h y 2h antes de la reserva, y la posibilidad de cancelar con un solo tap, los no-shows caen drásticamente y la mesa puede ofrecerse a otra persona a tiempo.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">El resultado en números</h2>
            <p className="leading-relaxed mb-4">
              Un restaurante que implementa este sistema suele ahorrarse entre 8 y 15 horas semanales en gestión administrativa. A 15€/hora, son 120–225€/semana, 6.000–11.000€ al año. La implementación cuesta entre 2.500 y 4.000€ y el mantenimiento mensual, 150–250€.
            </p>
            <p className="leading-relaxed mb-4">
              El ROI se alcanza en menos de 6 meses en la mayoría de casos.
            </p>

            <h2 className="text-2xl font-black text-ei-text mt-12 mb-4">Cómo se implementa</h2>
            <p className="leading-relaxed mb-4">
              El proceso con Emporium IA es siempre el mismo: primero entendemos qué TPV y qué herramientas usáis actualmente. Luego mapeamos los flujos que más tiempo consumen. Después construimos las automatizaciones conectando vuestras herramientas existentes — no hace falta cambiar de TPV ni de software contable. Y en 1–2 semanas, el sistema está operativo.
            </p>
          </div>

          <div className="mt-12 p-6 bg-ei-card rounded-2xl border border-[rgba(0,194,203,0.15)]">
            <p className="text-ei-text font-bold mb-2">¿Tienes un restaurante u hotel?</p>
            <p className="text-ei-muted text-sm mb-4">Cuéntanos cómo gestionáis la facturación ahora y te decimos qué podemos automatizar y cuánto os ahorraría.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ei-accent text-[#0a0c10] font-bold text-sm hover:bg-[#00dde7] transition-colors">
              Hablar con nosotros →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
