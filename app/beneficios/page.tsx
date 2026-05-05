import type { Metadata } from 'next'
import { BeneficiosContent } from './BeneficiosContent'

export const metadata: Metadata = {
  title: 'Beneficios — Lo que cambia en tu negocio con IA',
  description:
    'Ahorra tiempo, reduce errores, escala sin contratar, decide con datos. 6 beneficios reales y medibles desde el primer mes de automatización.',
}

export default function BeneficiosPage() {
  return <BeneficiosContent />
}
