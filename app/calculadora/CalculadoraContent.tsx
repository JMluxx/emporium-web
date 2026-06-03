'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator, TrendingUp } from 'lucide-react'

export function CalculadoraContent() {
  const [hours, setHours] = useState(20)
  const [employees, setEmployees] = useState(2)
  const [hourlyRate, setHourlyRate] = useState(18)
  const [investment, setInvestment] = useState(1500)

  const automationRate = 0.7
  const monthlyWeeks = 4.33

  const hoursPerMonth = hours * employees * monthlyWeeks
  const hoursSaved = hoursPerMonth * automationRate
  const moneySavedMonthly = hoursSaved * hourlyRate
  const moneySavedYearly = moneySavedMonthly * 12
  const netRoiYear1 = moneySavedYearly - investment
  const paybackMonths = moneySavedMonthly > 0 ? Math.ceil(investment / moneySavedMonthly) : null
  const roiPercent = investment > 0 && netRoiYear1 > 0 ? Math.round((netRoiYear1 / investment) * 100) : 0

  const formatEur = (n: number) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

  const sliderStyle = (val: number, min: number, max: number) => ({
    background: `linear-gradient(to right, #00c2cb ${((val - min) / (max - min)) * 100}%, rgba(0,194,203,0.15) ${((val - min) / (max - min)) * 100}%)`,
  })

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
            Introduce los datos de tu negocio y ve en tiempo real el ahorro real, el ROI y en cuántos meses recuperas la inversión.
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
                    type="range" min={2} max={80} step={1} value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(hours, 2, 80)}
                  />
                  <div className="flex justify-between text-xs text-ei-muted mt-1">
                    <span>2h</span><span>80h</span>
                  </div>
                  <p className="text-xs text-ei-muted mt-2">
                    Entrada de datos, seguimientos, reportes, correos repetitivos, etc.
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
                    type="range" min={1} max={20} step={1} value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(employees, 1, 20)}
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
                    type="range" min={10} max={60} step={1} value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(hourlyRate, 10, 60)}
                  />
                  <div className="flex justify-between text-xs text-ei-muted mt-1">
                    <span>10€</span><span>60€</span>
                  </div>
                  <p className="text-xs text-ei-muted mt-2">
                    Salario bruto + seguridad social + parte proporcional de beneficios.
                  </p>
                </div>

                <div className="border-t border-[rgba(0,194,203,0.1)] pt-7">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-ei-text">
                      Inversión estimada en automatización
                    </label>
                    <span className="text-ei-accent font-black text-xl">{formatEur(investment)}</span>
                  </div>
                  <input
                    type="range" min={500} max={5000} step={100} value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(investment, 500, 5000)}
                  />
                  <div className="flex justify-between text-xs text-ei-muted mt-1">
                    <span>500€</span><span>5.000€</span>
                  </div>
                  <p className="text-xs text-ei-muted mt-2">
                    Coste único de implementación. Sin cuotas mensuales obligatorias.
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-ei-accent" />
                    <p className="text-xs font-bold uppercase tracking-wider text-ei-muted">Recuperas en</p>
                  </div>
                  <p className="text-3xl font-black text-ei-accent leading-none">
                    {paybackMonths !== null && paybackMonths <= 24
                      ? `${paybackMonths} mes${paybackMonths === 1 ? '' : 'es'}`
                      : moneySavedMonthly <= 0 ? '—' : '+24 m'}
                  </p>
                  <p className="text-xs text-ei-muted mt-1">Payback period</p>
                </div>
                <div className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-ei-accent" />
                    <p className="text-xs font-bold uppercase tracking-wider text-ei-muted">ROI año 1</p>
                  </div>
                  <p className={`text-3xl font-black leading-none ${netRoiYear1 > 0 ? 'text-green-400' : 'text-ei-muted'}`}>
                    {netRoiYear1 > 0 ? `+${roiPercent}%` : '—'}
                  </p>
                  <p className="text-xs text-ei-muted mt-1">
                    {netRoiYear1 > 0 ? `Beneficio neto: ${formatEur(netRoiYear1)}` : 'Ajusta los parámetros'}
                  </p>
                </div>
              </div>

              <div className="bg-ei-card rounded-xl p-5 border border-[rgba(0,194,203,0.1)]">
                <p className="text-xs font-bold uppercase tracking-widest text-ei-muted mb-2">
                  Sobre este cálculo
                </p>
                <p className="text-xs text-ei-muted leading-relaxed">
                  Usamos un 70% de automatización como estimación conservadora. En procesos bien definidos el porcentaje sube al 90-100%. El coste de implementación es único — no hay cuotas mensuales obligatorias.
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
