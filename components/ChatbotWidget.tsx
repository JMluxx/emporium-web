'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n.emporium-ia.es/webhook/emporium-leads'

interface Message {
  from: 'bot' | 'user'
  text: string
}

type Step = 'greeting' | 'sector' | 'problem' | 'qualify' | 'capture' | 'done'
type CaptureField = 'name' | 'email' | 'problem' | null

const SECTORS = ['Inmobiliario', 'Hostelería', 'Clínicas y Salud', 'Retail', 'Asesorías', 'E-commerce', 'Otro']

const PROBLEMS: Record<string, string[]> = {
  Inmobiliario:       ['Respuesta lenta a leads', 'Gestión de visitas', 'Seguimiento de clientes', 'Otro'],
  Hostelería:         ['Reservas y cancelaciones', 'Atención al cliente', 'Control de inventario', 'Otro'],
  'Clínicas y Salud': ['No-shows de citas', 'Recordatorios a pacientes', 'Gestión de agenda', 'Otro'],
  Retail:             ['Atención fuera de horario', 'Gestión de pedidos', 'Seguimiento post-venta', 'Otro'],
  Asesorías:          ['Captación de clientes', 'Documentación repetitiva', 'Facturación', 'Otro'],
  'E-commerce':       ['Atención al cliente', 'Gestión de devoluciones', 'Seguimiento de pedidos', 'Otro'],
  Otro:               ['Tareas repetitivas', 'Atención al cliente', 'Reportes manuales', 'Otro'],
}

const PROBLEM_RESPONSES: Record<string, string> = {
  // Inmobiliario
  'Respuesta lenta a leads':
    'El 78% de los clientes compra al primer agente que responde. Si tardas más de 5 minutos, ya has perdido. Con IA respondes al instante — aunque el lead llegue un domingo a las 11 de la noche.',
  'Gestión de visitas':
    'Confirmaciones manuales, cambios de última hora, no-shows sin aviso... Lo automatizamos todo: confirmación automática, recordatorio 24h antes y reagendado sin que nadie toque el teléfono.',
  'Seguimiento de clientes':
    'La mayoría de las ventas inmobiliarias se pierden en el silencio post-visita. Un sistema de seguimiento automatizado recupera entre el 20 y el 35% de esas oportunidades sin esfuerzo extra de tu equipo.',

  // Hostelería
  'Reservas y cancelaciones':
    'Las cancelaciones de última hora y los no-shows cuestan más de lo que parece. Automatizamos recordatorios, listas de espera y reconfirmaciones — y se reducen hasta un 40%.',
  'Atención al cliente':
    'Un chatbot gestiona las preguntas repetitivas 24/7 — horarios, carta, reservas especiales — y libera a tu equipo para lo que realmente importa en sala. Sin contratar a nadie extra.',
  'Control de inventario':
    'Alertas automáticas cuando el stock baja del umbral, pedidos recurrentes generados solos y registro de mermas sin papeles. Tu equipo deja de perder horas en spreadsheets.',

  // Clínicas y Salud
  'No-shows de citas':
    'Los recordatorios automáticos por WhatsApp 48h y 2h antes reducen los no-shows un 30% de media. Con confirmación activa del paciente — no un email que nadie lee.',
  'Recordatorios a pacientes':
    'Recordatorios de revisión, seguimiento post-tratamiento, instrucciones previas al procedimiento... Todo sale solo en el momento justo. Tus pacientes sienten más atención, tu equipo hace menos llamadas.',
  'Gestión de agenda':
    'Pacientes que se autoasignan cita, cancelaciones que rellena la lista de espera automáticamente y ajuste de huecos en tiempo real. La agenda siempre optimizada, sin que recepción tenga que gestionar cada movimiento.',

  // Retail
  'Atención fuera de horario':
    'El 35% de las consultas en retail llegan fuera de horario. Un chatbot responde al momento — stock, precios, estado de pedido — sin que nadie pierda una venta por estar cerrado.',
  'Gestión de pedidos':
    'Confirmación automática, actualización de estado, aviso de envío y gestión de incidencias sin intervención manual. Tu equipo deja de responder los mismos 5 emails cada día.',
  'Seguimiento post-venta':
    'Encuesta de satisfacción automática, recordatorio de recompra según historial y detección temprana de devoluciones. Clientes que vuelven sin que tengas que pedirlo.',

  // Asesorías
  'Captación de clientes':
    'El primer contacto cualificado llega a tu CRM solo — con sector, necesidad y urgencia ya identificados. Tu equipo solo habla con quienes tienen intención real de contratar.',
  'Documentación repetitiva':
    'Modelos, declaraciones, informes periódicos que se generan solos con los datos de tus clientes. Lo que tardabas 2 horas, sale en 3 minutos sin errores de copia.',
  'Facturación':
    'Facturas que se generan al cerrar el servicio, se envían solas, se contabilizan y mandan recordatorio si no se han pagado. Cero seguimiento manual — y cobras antes.',

  // E-commerce
  'Gestión de devoluciones':
    'Formulario automático, etiqueta de envío generada sola, reembolso procesado y cliente informado en cada paso. Las devoluciones dejan de ser un caos para tu equipo.',
  'Seguimiento de pedidos':
    'Cada cambio de estado llega al cliente sin que nadie lo gestione. Menos contactos de soporte, menos tickets, más satisfacción y más probabilidad de recompra.',

  // Genérico
  'Tareas repetitivas':
    'Eso es exactamente donde actuamos. Identificamos las tareas que más tiempo roban y las eliminamos con automatizaciones. El equipo se libera para lo que tiene valor real.',
  'Reportes manuales':
    'Informes que se escriben solos con los datos que ya tienes — semanales, mensuales, por cliente. Sin abrir un Excel, sin margen de error humano.',
}

function getDelayedBotMessage(text: string, delay = 700): Promise<Message> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ from: 'bot', text }), delay)
  )
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [step, setStep] = useState<Step>('greeting')
  const [sector, setSector] = useState('')
  const [problem, setProblem] = useState('')
  const [typing, setTyping] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [captureField, setCaptureField] = useState<CaptureField>(null)
  const [userName, setUserName] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true)
      getDelayedBotMessage('¡Hola! 👋 Soy el asistente de Emporium IA.', 600).then((m) => {
        setMessages([m])
        setTyping(false)
        setTimeout(() => {
          setTyping(true)
          getDelayedBotMessage('¿En qué sector trabaja tu empresa?').then((m2) => {
            setMessages((prev) => [...prev, m2])
            setTyping(false)
            setStep('sector')
          })
        }, 400)
      })
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const addBot = (text: string, delay = 700) => {
    setTyping(true)
    return getDelayedBotMessage(text, delay).then((m) => {
      setMessages((prev) => [...prev, m])
      setTyping(false)
      return m
    })
  }

  const addUser = (text: string) => {
    setMessages((prev) => [...prev, { from: 'user', text }])
  }

  const handleSectorClick = async (s: string) => {
    setSector(s)
    addUser(s)
    setStep('problem')
    await addBot(
      s === 'Otro'
        ? '¿Cuál es el mayor problema que quieres resolver en tu negocio ahora mismo?'
        : `Entendido. ¿Cuál es el mayor dolor de cabeza en tu ${s.toLowerCase()} ahora mismo?`
    )
  }

  const handleProblemClick = async (p: string) => {
    addUser(p)

    if (p === 'Otro') {
      await addBot(
        'Cuéntame con tus palabras — ¿qué proceso te roba más tiempo o dónde sientes que estás perdiendo dinero?',
        800
      )
      setCaptureField('problem')
      return
    }

    setProblem(p)
    setStep('qualify')
    const specific = PROBLEM_RESPONSES[p]
    if (specific) {
      await addBot(specific, 800)
    }
    await addBot(
      'Lo bueno es que tiene solución directa. ¿Quieres que te expliquemos cómo lo hacemos y qué costaría en tu caso?',
      600
    )
  }

  const handleQualify = async (yes: boolean) => {
    if (yes) {
      addUser('Sí, me interesa')
      setStep('capture')
      await addBot('Perfecto. Para mandarte info personalizada — ¿cómo te llamas?', 700)
      setCaptureField('name')
    } else {
      addUser('Ahora no')
      setStep('done')
      await addBot('Sin problema. Cuando quieras nos encuentras en contacto@emporium-ia.es o en WhatsApp. 👋', 700)
    }
  }

  const handleInput = async () => {
    const val = inputVal.trim()
    if (!val) return
    setInputVal('')
    addUser(val)

    if (captureField === 'problem') {
      setProblem(val)
      setCaptureField(null)
      setStep('qualify')
      await addBot(
        'Entendido. No es el primer caso así que vemos. ¿Quieres que te expliquemos exactamente cómo lo resolvemos y qué costaría?',
        800
      )
      return
    }

    if (captureField === 'name') {
      setUserName(val)
      setCaptureField('email')
      await addBot(`Encantado, ${val}. ¿Y tu email para mandarte la info?`, 700)
      return
    }

    if (captureField === 'email') {
      setCaptureField(null)
      setStep('done')
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userName,
          email: val,
          sector,
          problem,
          source: 'Chatbot',
        }),
      }).catch(() => {})
      await addBot(
        `Listo ${userName}, te escribimos en menos de 24h con un análisis de lo que podemos automatizar en tu negocio. ¡Hasta pronto! 🚀`,
        800
      )
    }
  }

  const showQuickReplies = (step === 'sector' || step === 'problem' || step === 'qualify') && !captureField

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.2 }}
            className="w-[340px] max-h-[520px] flex flex-col bg-[#0d0f14] rounded-2xl border border-[rgba(0,194,203,0.2)] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#0a0c10] border-b border-[rgba(0,194,203,0.12)]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ei-accent to-[#0089a3] flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-[#0a0c10]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-ei-text text-sm font-bold leading-none">Asistente Emporium IA</p>
                <p className="text-ei-accent text-xs mt-0.5">● En línea</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-ei-muted hover:text-ei-text transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-thin">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-ei-accent text-[#0a0c10] font-medium rounded-br-sm'
                        : 'bg-[#161922] text-ei-text rounded-bl-sm border border-[rgba(0,194,203,0.1)]'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-[#161922] border border-[rgba(0,194,203,0.1)] px-3 py-2 rounded-xl rounded-bl-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-ei-muted animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
          )}

              {/* Quick replies */}
              {!typing && showQuickReplies && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {step === 'sector' &&
                    SECTORS.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSectorClick(s)}
                        className="px-3 py-1.5 rounded-full border border-[rgba(0,194,203,0.3)] text-ei-accent text-xs font-medium hover:bg-[rgba(0,194,203,0.1)] transition-colors"
                      >
                        {s}
                      </button>
                    ))}

                  {step === 'problem' &&
                    (PROBLEMS[sector] ?? PROBLEMS['Otro']).map((p) => (
                      <button
                        key={p}
                        onClick={() => handleProblemClick(p)}
                        className="px-3 py-1.5 rounded-full border border-[rgba(0,194,203,0.3)] text-ei-accent text-xs font-medium hover:bg-[rgba(0,194,203,0.1)] transition-colors"
                      >
                        {p}
                      </button>
                    ))}

                  {step === 'qualify' && (
                    <>
                      <button
                        onClick={() => handleQualify(true)}
                        className="px-3 py-1.5 rounded-full bg-ei-accent text-[#0a0c10] text-xs font-bold hover:bg-[#00dde7] transition-colors"
                      >
                        Sí, cuéntame
                      </button>
                      <button
                        onClick={() => handleQualify(false)}
                        className="px-3 py-1.5 rounded-full border border-[rgba(0,194,203,0.3)] text-ei-muted text-xs hover:text-ei-text transition-colors"
                      >
                        Ahora no
                      </button>
                    </>
                  )}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input — aparece para problema libre, nombre y email */}
            {captureField && (
              <div className="px-4 py-3 border-t border-[rgba(0,194,203,0.1)] flex gap-2">
                <input
                  type={captureField === 'email' ? 'email' : 'text'}
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleInput()}
                  placeholder={
                    captureField === 'email'
                      ? 'tu@empresa.com'
                      : captureField === 'name'
                      ? 'Tu nombre'
                      : 'Describe tu situación...'
                  }
                  className="flex-1 bg-[#161922] border border-[rgba(0,194,203,0.15)] rounded-lg px-3 py-2 text-ei-text text-sm placeholder:text-ei-muted/50 outline-none focus:border-ei-accent transition-colors"
                  autoFocus
                />
                <button
                  onClick={handleInput}
                  className="w-8 h-8 rounded-lg bg-ei-accent flex items-center justify-center flex-shrink-0 hover:bg-[#00dde7] transition-colors"
                >
                  <Send size={14} className="text-[#0a0c10]" />
                </button>
              </div>
            )}

            {step === 'done' && (
              <div className="px-4 py-3 border-t border-[rgba(0,194,203,0.1)] text-center">
                <a href="/contacto" className="text-ei-accent text-xs font-semibold hover:underline">
                  O rellena el formulario de contacto →
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-ei-accent to-[#0089a3] shadow-glow flex items-center justify-center relative"
        aria-label="Abrir chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} className="text-[#0a0c10]" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} className="text-[#0a0c10]" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0a0c10]" />
        )}
      </motion.button>
    </div>
  )
}
