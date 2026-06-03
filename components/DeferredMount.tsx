'use client'

import { useState, useEffect, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
}

export function DeferredMount({ children, delay = 2500 }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return mounted ? <>{children}</> : null
}
