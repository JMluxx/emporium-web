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
    default: 'Emporium IA — Automatización con IA para PYMEs en España',
    template: '%s | Emporium IA',
  },
  description:
    'Agencia de automatización con inteligencia artificial para PYMEs en España. Chatbots, workflows n8n, integraciones y agentes IA. Desde 500€. Basados en Salamanca.',
  keywords: [
    'automatización IA pymes', 'inteligencia artificial empresas', 'chatbot para empresa',
    'n8n automatización españa', 'agencia IA salamanca', 'automatizar procesos negocio',
    'automatización workflows', 'agente IA pyme', 'reducir costes automatización',
    'integraciones CRM ERP IA', 'automatización clínicas asesorías hostelería retail',
  ],
  authors: [{ name: 'Emporium IA', url: 'https://emporium-ia.es' }],
  creator: 'Emporium IA',
  publisher: 'Emporium IA',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://emporium-ia.es',
    siteName: 'Emporium IA',
    title: 'Emporium IA — Automatización con IA para PYMEs',
    description:
      'Automatizamos los procesos de tu PYME con inteligencia artificial. Chatbots, workflows y agentes IA. Resultados medibles desde el primer mes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emporium IA — Automatización con IA para PYMEs españolas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emporium IA — Automatización con IA para PYMEs',
    description: 'Chatbots, workflows y agentes IA para PYMEs. Desde 500€. Basados en Salamanca.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://emporium-ia.es',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://api.fontshare.com; style-src 'self' 'unsafe-inline' https://api.fontshare.com; font-src 'self' https://api.fontshare.com; img-src 'self' data: https:; connect-src 'self' https://n8n.emporium-ia.es; frame-ancestors 'none';" />
      </head>
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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                '@id': 'https://emporium-ia.es/#organization',
                name: 'Emporium IA',
                description: 'Agencia especializada en automatización con inteligencia artificial para PYMEs en España. Chatbots, workflows n8n, integraciones y agentes IA.',
                url: 'https://emporium-ia.es',
                logo: 'https://emporium-ia.es/favicon.svg',
                image: 'https://emporium-ia.es/og-image.png',
                email: 'contacto@emporium-ia.es',
                telephone: '+34604380891',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Salamanca',
                  addressRegion: 'Castilla y León',
                  postalCode: '37000',
                  addressCountry: 'ES',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 40.9688,
                  longitude: -5.6638,
                },
                areaServed: { '@type': 'Country', name: 'España' },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Servicios de automatización IA',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbots con IA' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización de workflows' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integración de herramientas' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentes IA para PYMEs' } },
                  ],
                },
                priceRange: '€€',
                currenciesAccepted: 'EUR',
                paymentAccepted: 'Transferencia bancaria, tarjeta',
                sameAs: ['https://github.com/JMluxx'],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://emporium-ia.es/#website',
                url: 'https://emporium-ia.es',
                name: 'Emporium IA',
                description: 'Automatización con inteligencia artificial para PYMEs en España',
                publisher: { '@id': 'https://emporium-ia.es/#organization' },
                inLanguage: 'es-ES',
              },
            ]),
          }}
        />
      </body>
    </html>
  )
}