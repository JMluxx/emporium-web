import type { Metadata } from 'next'
import { SobreNosotrosContent } from './SobreNosotrosContent'

export const metadata: Metadata = {
  title: 'Quiénes somos — Emporium IA, agencia de automatización IA en Salamanca',
  description:
    'Conoce a David García y José Villamarin, fundadores de Emporium IA. Agencia de automatización con inteligencia artificial para PYMEs, con sede en Salamanca y clientes en toda España.',
  alternates: { canonical: 'https://emporium-ia.es/sobre-nosotros' },
  openGraph: {
    title: 'Quiénes somos — Emporium IA',
    description: 'Agencia de automatización IA para PYMEs, con sede en Salamanca y clientes en toda España.',
    url: 'https://emporium-ia.es/sobre-nosotros',
  },
}

export default function SobreNosotrosPage() {
  return <SobreNosotrosContent />
}