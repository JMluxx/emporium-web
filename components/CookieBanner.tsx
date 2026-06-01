'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ei-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('ei-cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('ei-cookie-consent', 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-40"
        >
          <div className="bg-ei-card border border-[rgba(0,194,203,0.2)] rounded-2xl p-5 shadow-card-hover">
            <p className="text-ei-text text-sm font-semibold mb-1">Usamos cookies 🍪</p>
            <p className="text-ei-muted text-xs leading-relaxed mb-4">
              Solo cookies técnicas necesarias para el funcionamiento de la web. Sin tracking ni publicidad.{' '}
              <Link href="/privacidad" className="text-ei-accent hover:underline">
                Política de privacidad
              </Link>
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 px-4 py-2 rounded-lg bg-ei-accent text-[#0a0c10] text-xs font-black hover:bg-ei-accent-glow transition-colors"
              >
                Aceptar
              </button>
              <button
                onClick={reject}
                className="flex-1 px-4 py-2 rounded-lg border border-[rgba(0,194,203,0.2)] text-ei-muted text-xs font-semibold hover:border-[rgba(0,194,203,0.4)] hover:text-ei-text transition-colors"
              >
                Rechazar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
