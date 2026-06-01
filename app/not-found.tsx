import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ei-dark">
      <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-[rgba(0,194,203,0.05)] top-[-150px] right-[-100px]" />

      <div className="relative text-center px-4 max-w-lg mx-auto">
        <p className="text-[10rem] font-black leading-none text-gradient opacity-20 select-none">404</p>
        <div className="-mt-8">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-3">Página no encontrada</p>
          <h1 className="text-4xl font-black text-ei-text mb-4 leading-tight">
            Esta página no existe o fue movida
          </h1>
          <p className="text-ei-muted mb-8 leading-relaxed">
            Puede que hayas seguido un enlace antiguo o escrito mal la URL. Vuelve al inicio o cuéntanos tu caso directamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
            >
              <Home size={16} /> Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[rgba(0,194,203,0.2)] text-ei-text font-semibold hover:border-[rgba(0,194,203,0.4)] hover:bg-white/5 transition-all duration-200"
            >
              Contactar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
