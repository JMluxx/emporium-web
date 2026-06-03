// Shared webhook utility — sanitization, token, rate limiting

const WEBHOOK_URL = 'https://n8n.emporium-ia.es/webhook/emporium-leads'
const WEBHOOK_TOKEN = 'eia-wh-7Xk9mN2pQ4vR8sT3wL5'

const RATE_KEY = 'ei_sub_ts'
const RATE_MS = 90_000 // 90s cooldown between submissions

// Strips HTML tags, javascript: protocol and limits length
function sanitize(input: string, maxLen = 500): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
    .slice(0, maxLen)
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email.trim())
}

export function canSubmit(): boolean {
  try {
    const last = localStorage.getItem(RATE_KEY)
    return !last || Date.now() - Number(last) >= RATE_MS
  } catch {
    return true
  }
}

function markSubmitted(): void {
  try {
    localStorage.setItem(RATE_KEY, String(Date.now()))
  } catch {}
}

export interface LeadPayload {
  name: string
  email: string
  sector: string
  problem: string
  source: 'Formulario' | 'Chatbot'
}

export async function sendLead(payload: LeadPayload): Promise<'ok' | 'rate_limit' | 'invalid_email' | 'error'> {
  if (!canSubmit()) return 'rate_limit'
  if (!isValidEmail(payload.email)) return 'invalid_email'

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Token': WEBHOOK_TOKEN,
      },
      body: JSON.stringify({
        name: sanitize(payload.name),
        email: sanitize(payload.email, 200),
        sector: sanitize(payload.sector),
        problem: sanitize(payload.problem),
        source: payload.source,
      }),
    })
    if (res.ok) {
      markSubmitted()
      return 'ok'
    }
    return 'error'
  } catch {
    return 'error'
  }
}
