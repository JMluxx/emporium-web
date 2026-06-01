import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Emporium IA conforme al RGPD y la LOPD-GDD.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-ei-text mb-2">Política de Privacidad</h1>
        <p className="text-ei-muted text-sm mb-12">Última actualización: junio 2026</p>

        <div className="prose prose-invert max-w-none text-ei-muted space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong className="text-ei-text">Identidad:</strong> Emporium IA<br />
              <strong className="text-ei-text">Email:</strong> contacto@emporium-ia.es<br />
              <strong className="text-ei-text">Dirección:</strong> Salamanca, Castilla y León, España<br />
              <strong className="text-ei-text">Teléfono:</strong> +34 604 38 08 91
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">2. Finalidad del tratamiento</h2>
            <p>Los datos personales recogidos a través del formulario de contacto se utilizan exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Responder a las consultas o solicitudes realizadas por el usuario.</li>
              <li>Enviar información sobre nuestros servicios cuando el usuario lo haya solicitado expresamente.</li>
            </ul>
            <p className="mt-3">No utilizamos los datos para fines comerciales no solicitados ni los cedemos a terceros.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">3. Base legal</h2>
            <p>
              El tratamiento de los datos se basa en el consentimiento expreso del usuario al enviar el formulario de contacto, de conformidad con el artículo 6.1.a del Reglamento (UE) 2016/679 (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">4. Datos recogidos</h2>
            <p>A través del formulario de contacto recogemos: nombre, dirección de correo electrónico, sector de actividad y el mensaje enviado.</p>
            <p className="mt-2">Esta web no utiliza cookies de seguimiento ni herramientas de analítica de terceros. Solo cookies técnicas estrictamente necesarias para el funcionamiento del sitio.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">5. Conservación de los datos</h2>
            <p>Los datos se conservarán durante el tiempo necesario para atender la consulta y, en su caso, para el cumplimiento de obligaciones legales. Una vez concluida la relación, los datos serán bloqueados durante los plazos de prescripción aplicables.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">6. Destinatarios</h2>
            <p>Los datos son gestionados por Emporium IA y procesados a través de Formspree (proveedor del servicio de formulario de contacto), con servidores en Estados Unidos, bajo las garantías del Marco de Privacidad de Datos UE-EE.UU.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">7. Derechos del usuario</h2>
            <p>En cualquier momento puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:contacto@emporium-ia.es" className="text-ei-accent hover:underline">contacto@emporium-ia.es</a>.</p>
            <p className="mt-2">También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">8. Seguridad</h2>
            <p>Emporium IA ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizados.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ei-text mb-3">9. Modificaciones</h2>
            <p>Emporium IA se reserva el derecho a modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. Se indicará la fecha de la última actualización en la parte superior de esta página.</p>
          </section>

        </div>
      </div>
    </section>
  )
}
