import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Emporium IA — Automatizaciones con IA para PYMEs',
    template: '%s | Emporium IA',
  },
  description:
    'Automatizamos los procesos de tu PYME con inteligencia artificial. Chatbots, workflows, integraciones y análisis IA para clínicas, inmobiliarias, asesorías y más.',
  keywords: [
    'automatización IA', 'inteligencia artificial pymes', 'chatbot empresa',
    'n8n automatización', 'IA salamanca', 'automatización procesos',
    'agencia automatización españa',
  ],
  authors: [{ name: 'Emporium IA' }],
  creator: 'Emporium IA',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Emporium IA',
    title: 'Emporium IA — Automatizaciones con IA para PYMEs',
    description:
      'Automatizamos los procesos de tu PYME con inteligencia artificial. Resultados medibles desde el mes 1.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emporium IA — Automatizaciones con IA para PYMEs',
    description: 'Automatizamos los procesos de tu PYME con inteligencia artificial.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-ei-dark text-ei-text font-satoshi antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}