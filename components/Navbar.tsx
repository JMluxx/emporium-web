'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/sectores', label: 'Sectores' },
  { href: '/precios', label: 'Precios' },
  { href: '/integraciones', label: 'Integraciones' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0c10]/90 backdrop-blur-xl border-b border-[rgba(0,194,203,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ei-accent to-[#0089a3] flex items-center justify-center">
            <span className="text-[#0a0c10] font-black text-sm">E</span>
          </div>
          <span className="font-black text-lg tracking-tight text-ei-text group-hover:text-ei-accent transition-colors">
            Emporium <span className="text-ei-accent">IA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === href
                    ? 'text-ei-accent bg-[rgba(0,194,203,0.1)]'
                    : 'text-ei-muted hover:text-ei-text hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contacto"
            className="px-4 py-2 rounded-lg bg-ei-accent text-[#0a0c10] text-sm font-bold hover:bg-ei-accent-glow transition-all duration-200 hover:shadow-glow-sm"
          >
            Consultoría gratuita
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-ei-muted hover:text-ei-text hover:bg-white/5 transition-colors"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0c10]/95 backdrop-blur-xl border-b border-[rgba(0,194,203,0.1)] overflow-hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      pathname === href
                        ? 'text-ei-accent bg-[rgba(0,194,203,0.1)]'
                        : 'text-ei-muted hover:text-ei-text hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contacto"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-ei-accent text-[#0a0c10] text-sm font-bold hover:bg-ei-accent-glow transition-colors"
                >
                  Consultoría gratuita
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}