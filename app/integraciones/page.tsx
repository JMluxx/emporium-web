import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integraciones — Conectamos tus herramientas',
  description:
    'Conectamos más de 200 herramientas: HubSpot, Holded, Google Workspace, WhatsApp Business, Slack, Notion, Airtable y muchas más. Sin fricciones.',
}

const integrations = [
  { name: 'n8n',              category: 'Automatización',  color: 'rgba(234,76,137,0.15)',  letter: 'n' },
  { name: 'Make',             category: 'Automatización',  color: 'rgba(101,116,255,0.15)', letter: 'M' },
  { name: 'Zapier',           category: 'Automatización',  color: 'rgba(255,79,0,0.15)',    letter: 'Z' },
  { name: 'Claude API',       category: 'IA',              color: 'rgba(0,194,203,0.15)',   letter: 'C' },
  { name: 'OpenAI',           category: 'IA',              color: 'rgba(16,163,127,0.15)',  letter: 'O' },
  { name: 'HubSpot',          category: 'CRM',             color: 'rgba(255,122,0,0.15)',   letter: 'H' },
  { name: 'Salesforce',       category: 'CRM',             color: 'rgba(0,161,224,0.15)',   letter: 'S' },
  { name: 'Pipedrive',        category: 'CRM',             color: 'rgba(26,188,156,0.15)',  letter: 'P' },
  { name: 'Holded',           category: 'ERP/Contabilidad', color: 'rgba(88,80,236,0.15)', letter: 'H' },
  { name: 'Factorial',        category: 'RRHH',            color: 'rgba(255,64,96,0.15)',   letter: 'F' },
  { name: 'Google Workspace', category: 'Productividad',   color: 'rgba(66,133,244,0.15)', letter: 'G' },
  { name: 'Notion',           category: 'Productividad',   color: 'rgba(255,255,255,0.08)', letter: 'N' },
  { name: 'Airtable',         category: 'Base de datos',   color: 'rgba(252,180,0,0.15)',  letter: 'A' },
  { name: 'Supabase',         category: 'Base de datos',   color: 'rgba(62,207,142,0.15)', letter: 'S' },
  { name: 'WhatsApp Business',category: 'Comunicación',    color: 'rgba(37,211,102,0.15)', letter: 'W' },
  { name: 'Slack',            category: 'Comunicación',    color: 'rgba(74,21,75,0.25)',    letter: 'S' },
  { name: 'Twilio',           category: 'Comunicación',    color: 'rgba(242,47,70,0.15)',   letter: 'T' },
  { name: 'Outlook / Gmail',  category: 'Email',           color: 'rgba(0,120,212,0.15)',  letter: '@' },
  { name: 'Mailchimp',        category: 'Email Marketing', color: 'rgba(255,220,64,0.15)', letter: 'M' },
  { name: 'Stripe',           category: 'Pagos',           color: 'rgba(99,91,255,0.15)',  letter: 'S' },
  { name: 'Shopify',          category: 'E-commerce',      color: 'rgba(150,191,71,0.15)', letter: 'S' },
  { name: 'WooCommerce',      category: 'E-commerce',      color: 'rgba(150,88,138,0.15)', letter: 'W' },
  { name: 'Calendly',         category: 'Agenda',          color: 'rgba(0,106,255,0.15)',  letter: 'C' },
  { name: 'Typeform',         category: 'Formularios',     color: 'rgba(38,37,37,0.4)',    letter: 'T' },
]

const categories = [...new Set(integrations.map(i => i.category))]

export default function IntegracionesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">Integraciones</p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            Tus herramientas,{' '}
            <span className="text-gradient">conectadas</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-2xl mx-auto">
            Trabajamos con más de 200 herramientas. Si ya lo usas en tu empresa, casi seguro que podemos integrarlo.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat} className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-5">{cat}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {integrations.filter(i => i.category === cat).map((tool, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 bg-ei-card rounded-xl px-4 py-3.5 border border-[rgba(0,194,203,0.1)] hover:border-[rgba(0,194,203,0.3)] transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-black text-ei-text"
                      style={{ background: tool.color }}
                    >
                      {tool.letter}
                    </div>
                    <span className="text-ei-text text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 text-center">
            <p className="text-ei-muted text-sm mb-2">¿No ves tu herramienta?</p>
            <p className="text-ei-muted text-sm">
              Conectamos cualquier software con API. <Link href="/contacto" className="text-ei-accent hover:underline">Consulta tu caso.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ei-text mb-4">¿Empezamos a conectar?</h2>
          <p className="text-ei-muted mb-8">15 minutos. Te decimos exactamente qué integraríamos primero y por qué.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
          >
            Solicita consultoría gratuita <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
