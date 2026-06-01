import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const navigation = {
  servicios: [
    { name: 'Chatbots Inteligentes', href: '/soluciones' },
    { name: 'Automatización de Procesos', href: '/soluciones' },
    { name: 'Integración de Sistemas', href: '/soluciones' },
    { name: 'Análisis e Informes IA', href: '/soluciones' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '/sobre-nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Integraciones', href: '/integraciones' },
    { name: 'Calculadora ROI', href: '/calculadora' },
    { name: 'Beneficios', href: '/beneficios' },
    { name: 'Contacto', href: '/contacto' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#080a0e] border-t border-[rgba(0,194,203,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-ei-accent to-[#0089a3] flex items-center justify-center">
                <span className="text-[#0a0c10] font-black">E</span>
              </div>
              <span className="font-black text-xl tracking-tight">
                Emporium <span className="text-ei-accent">IA</span>
              </span>
            </Link>
            <p className="text-ei-muted text-sm leading-relaxed max-w-xs mb-6">
              Automatizamos los procesos que te roban horas cada día. IA práctica, resultados medibles, sin tecnicismos.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@emporium-ia.es"
                className="flex items-center gap-2 text-sm text-ei-muted hover:text-ei-accent transition-colors"
              >
                <Mail size={15} className="text-ei-accent" />
                contacto@emporium-ia.es
              </a>
              <a
                href="tel:+34604380891"
                className="flex items-center gap-2 text-sm text-ei-muted hover:text-ei-accent transition-colors"
              >
                <Phone size={15} className="text-ei-accent" />
                +34 604 38 08 91
              </a>
              <span className="flex items-center gap-2 text-sm text-ei-muted">
                <MapPin size={15} className="text-ei-accent" />
                Salamanca, Castilla y León — toda España
              </span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-ei-muted hover:text-ei-text flex items-center gap-1 group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="text-ei-accent opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-ei-muted hover:text-ei-text flex items-center gap-1 group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="text-ei-accent opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ei-muted">
            © {new Date().getFullYear()} Emporium IA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacidad" className="text-xs text-ei-muted hover:text-ei-accent transition-colors">Privacidad</a>
            <a href="/aviso-legal" className="text-xs text-ei-muted hover:text-ei-accent transition-colors">Aviso legal</a>
            <p className="text-xs text-ei-muted">Salamanca · España</p>
          </div>
        </div>
      </div>
    </footer>
  )
}