import type { Metadata } from 'next'
import { SobreNosotrosContent } from './SobreNosotrosContent'

export const metadata: Metadata = {
  title: 'Sobre nosotros — Quiénes somos en Emporium IA',
  description:
    'Conoce a David García y José Villamarin, fundadores de Emporium IA. Nuestra misión, visión y valores. Una agencia de Salamanca que automatiza PYMEs en toda España.',
}

export default function SobreNosotrosPage() {
  return <SobreNosotrosContent />
}