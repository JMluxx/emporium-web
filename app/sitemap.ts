import { MetadataRoute } from 'next'

const BASE = 'https://emporium-ia.es'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/soluciones`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/sectores`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/sectores/inmobiliario`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectores/clinicas`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectores/asesorias`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectores/hosteleria`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectores/retail`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectores/ecommerce`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/integraciones`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/precios`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/beneficios`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog/automatizar-clinica`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/leads-inmobiliaria-ia`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/calculadora`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/sobre-nosotros`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contacto`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/privacidad`,                  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE}/aviso-legal`,                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
  ]
}
