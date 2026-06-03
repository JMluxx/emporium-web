'use client'

import { TiltCard } from './TiltCard'

interface PainPointCardProps {
  problem: string
  solution: string
  dark?: boolean
}

export function PainPointCard({ problem, solution, dark = false }: PainPointCardProps) {
  return (
    <TiltCard className={`rounded-xl overflow-hidden ${dark ? 'bg-[#080a0e]' : 'bg-ei-card'} border border-[rgba(0,194,203,0.1)]`}>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-ei-muted mb-1">Problema</p>
        <p className="text-ei-text font-bold mb-3">{problem}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-1">Solución</p>
        <p className="text-ei-muted text-sm leading-relaxed">{solution}</p>
      </div>
    </TiltCard>
  )
}
