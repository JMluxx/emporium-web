import type { Metadata } from 'next'
import { CalculadoraContent } from './CalculadoraContent'

export const metadata: Metadata = {
  title: 'Calculadora ROI de automatización IA para PYMEs — Emporium IA',
  description:
    'Calcula en 30 segundos cuánto ahorrarías automatizando procesos con IA. Horas liberadas, ahorro mensual, payback period y ROI del primer año. Gratis y sin registro.',
  alternates: { canonical: 'https://emporium-ia.es/calculadora' },
  openGraph: {
    title: 'Calculadora ROI de automatización IA — Emporium IA',
    description: 'Calcula tu ahorro real, payback period y ROI del primer año con automatización IA. Gratis.',
    url: 'https://emporium-ia.es/calculadora',
  },
}

export default function CalculadoraPage() {
  return <CalculadoraContent />
}
