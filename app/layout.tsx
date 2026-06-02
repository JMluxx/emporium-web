import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { CookieBanner } from '@/components/CookieBanner'
import { ChatbotWidget } from '@/components/ChatbotWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://emporium-ia.es'),
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://emporium-ia.es',
    siteName: 'Emporium IA',
    title: 'Emporium IA — Automatizaciones con IA para PYMEs',
    description:
      'Automatizamos los procesos de tu PYME con inteligencia artificial. Resultados medibles desde el mes 1.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emporium IA — Automatizaciones con IA para PYMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emporium IA — Automatizaciones con IA para PYMEs',
    description: 'Automatizamos los procesos de tu PYME con inteligencia artificial.',
    images: ['/og-image.png'],
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
      <body className="bg-ei-dark text-ei-text font-satoshi antialiased cursor-none">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Emporium IA',
              description: 'Agencia de automatización con inteligencia artificial para PYMEs en España.',
              url: 'https://emporium-ia.es',
              email: 'contacto@emporium-ia.es',
              telephone: '+34604380891',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Salamanca',
                addressRegion: 'Castilla y León',
                addressCountry: 'ES',
              },
              areaServed: { '@type': 'Country', name: 'España' },
              serviceType: 'Automatización con inteligencia artificial',
              priceRange: '€€',
              sameAs: ['https://github.com/JMluxx'],
            }),
          }}
        />
      </body>
    </html>
  )
}