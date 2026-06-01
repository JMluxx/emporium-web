import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Emporium IA conforme a la Ley de Servicios de la Sociedad de la Información.',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-ei-text mb-2">Aviso Legal</h1>
        <p className="text-ei-muted text-sm mb-12">Última actualización: junio 2026</p>

        <div className="prose prose-invert max-w-none text-ei-muted space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">1. Datos identificativos</h2>
            <p>
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa:
            </p>
            <p className="mt-3">
              <strong className="text-ei-text">Denominación:</strong> Emporium IA<br />
              <strong className="text-ei-text">Domicilio:</strong> Salamanca, Castilla y León, España<br />
              <strong className="text-ei-text">Email:</strong> contacto@emporium-ia.es<br />
              <strong className="text-ei-text">Teléfono:</strong> +34 604 38 08 91<br />
              <strong className="text-ei-text">Web:</strong> https://emporium-ia.es
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web emporium-ia.es, titularidad de Emporium IA. El acceso al sitio web implica la aceptación plena y sin reservas de las presentes condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, código fuente) son propiedad de Emporium IA o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial vigentes.
            </p>
            <p className="mt-2">
              Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido del sitio sin autorización expresa de Emporium IA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">4. Responsabilidad</h2>
            <p>
              Emporium IA no garantiza la ausencia de errores en el acceso al sitio web ni en sus contenidos. No será responsable de los daños que pudieran derivarse del uso de la información contenida en el sitio web ni de la imposibilidad de acceder al mismo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">5. Política de enlaces</h2>
            <p>
              El sitio web puede contener enlaces a páginas de terceros. Emporium IA no controla ni se responsabiliza del contenido de dichas páginas externas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">6. Legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto derivado del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales de Salamanca, con renuncia expresa a cualquier otro fuero.
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}
