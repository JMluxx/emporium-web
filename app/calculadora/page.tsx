'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator } from 'lucide-react'

export default function CalculadoraPage() {
  const [hours, setHours] = useState(20)
  const [employees, setEmployees] = useState(2)
  const [hourlyRate, setHourlyRate] = useState(18)

  const automationRate = 0.7
  const monthlyWeeks = 4.33

  const hoursPerMonth = hours * employees * monthlyWeeks
  const hoursSaved = hoursPerMonth * automationRate
  const moneySavedMonthly = hoursSaved * hourlyRate
  const moneySavedYearly = moneySavedMonthly * 12

  const formatEur = (n: number) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center text-ei-accent">
              <Calculator size={24} />
            </div>
          </div>
          <p className="text-ei-accent text-sm font-bold uppercase tracking-widest mb-4">
            Calculadora de ROI
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-ei-text leading-tight mb-5">
            ¿Cuánto te cuesta<br />
            <span className="text-gradient">no automatizar?</span>
          </h1>
          <p className="text-ei-muted text-xl max-w-xl mx-auto">
            Ajusta los parámetros de tu negocio y ve en tiempo real cuánto dinero y horas estás perdiendo cada mes.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Inputs */}
            <div className="bg-ei-card rounded-2xl p-8 border border-[rgba(0,194,203,0.12)]">
              <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-7">
                Tu situación actual
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-ei-text">
                      Horas semanales en tareas manuales
                    </label>
                    <span className="text-ei-accent font-black text-xl">{hours}h</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={80}
                    step={1}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00c2cb ${((hours - 2) / 78) * 100}%, rgba(0,194,203,0.15) ${((hours - 2) / 78) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-ei-muted mt-1">
                    <span>2h</span><span>80h</span>
                  </div>
                  <p className="text-xs text-ei-muted mt-2">
                    Incluye: entrada de datos, seguimientos manuales, reportes, correos repetitivos, etc.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-ei-text">
                      Personas que hacen ese trabajo
                    </label>
                    <span className="text-ei-accent font-black text-xl">{employees}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00c2cb ${((employees - 1) / 19) * 100}%, rgba(0,194,203,0.15) ${((employees - 1) / 19) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-ei-muted mt-1">
                    <span>1</span><span>20</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-ei-text">
                      Coste hora por empleado (€)
                    </label>
                    <span className="text-ei-accent font-black text-xl">{hourlyRate}€/h</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={60}
                    step={1}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00c2cb ${((hourlyRate - 10) / 50) * 100}%, rgba(0,194,203,0.15) ${((hourlyRate - 10) / 50) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-ei-muted mt-1">
                    <span>10€</span><span>60€</span>
                  </div>
                  <p className="text-xs text-ei-muted mt-2">
                    Incluye salario bruto + seguridad social + parte proporcional de beneficios.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-5">
              <div className="bg-gradient-to-br from-[rgba(0,194,203,0.15)] to-[rgba(0,194,203,0.05)] rounded-2xl p-8 border border-[rgba(0,194,203,0.25)]">
                <p className="text-xs font-bold uppercase tracking-widest text-ei-accent mb-6">
                  Con automatización IA (70% de tareas)
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-ei-muted text-sm mb-1">Horas liberadas al mes</p>
                    <p className="text-5xl font-black text-ei-text leading-none">
                      {Math.round(hoursSaved)}<span className="text-2xl text-ei-accent ml-1">h</span>
                    </p>
                  </div>
                  <div className="border-t border-[rgba(0,194,203,0.15)] pt-5">
                    <p className="text-ei-muted text-sm mb-1">Ahorro mensual estimado</p>
                    <p className="text-4xl font-black text-ei-accent leading-none">
                      {formatEur(moneySavedMonthly)}
                    </p>
                  </div>
                  <div className="border-t border-[rgba(0,194,203,0.15)] pt-5">
                    <p className="text-ei-muted text-sm mb-1">Ahorro anual estimado</p>
                    <p className="text-4xl font-black text-ei-text leading-none">
                      {formatEur(moneySavedYearly)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.1)]">
                <p className="text-xs font-bold uppercase tracking-widest text-ei-muted mb-3">
                  Sobre este cálculo
                </p>
                <p className="text-xs text-ei-muted leading-relaxed">
                  Usamos un 70% de automatización como estimación conservadora. En la práctica, algunos procesos se automatizan al 100%. El coste de implementación de Emporium IA suele recuperarse en el primer o segundo mes.
                </p>
              </div>

              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ei-accent text-[#0a0c10] font-black text-base hover:bg-ei-accent-glow hover:shadow-glow transition-all duration-300"
              >
                Quiero recuperar esas horas <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
