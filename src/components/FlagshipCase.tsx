"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Cpu, Eye, Layers, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { flagshipCase } from "@/data/portfolio";

export default function FlagshipCase() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "2D-скетч и антропометрия",
      subtitle: "Анализ исходника",
      desc: "Получен концептуальный эскиз от дизайнера бренда без размеров. Проведен расчет эргономики на основе усредненных антропометрических 3D-сканов головы (ширина переносицы, угол наклона заушников, вынос линз).",
      output: "Карта базовых габаритов и посадочная сетка",
    },
    {
      number: "02",
      title: "Параметрическое SubD-моделирование",
      subtitle: "Математическая чистота",
      desc: "Построение сложной биоморфной геометрии с непрерывностью кривизны G2 (без заломов блика на гранях). Интеграция скрытых посадочных пазов под оптические линзы и шарнирные петли с фиксацией 90°.",
      output: "Твердотельная модель без полигональных артефактов",
    },
    {
      number: "03",
      title: "DFM-оптимизация и пресс-формы",
      subtitle: "Инженерная подготовка",
      desc: "Учет коэффициента усадки полимера (0.8%), проектирование литейных уклонов 1.5° для свободного извлечения из матрицы. Разработка двухсоставного молда с оптимизированной линией разъема без видимого шва на лицевой стороне.",
      output: "Файлы оснастки STEP/IGES для ЧПУ фрезеровки",
    },
    {
      number: "04",
      title: "Серийный тираж и поставка",
      subtitle: "Запуск на производстве",
      desc: "Отливка тестовой партии и контроль геометрии оптическим сканером. Полное совпадение с допусками ±0.03 мм. Успешный запуск коммерческого тиража оправы в серийную продажу.",
      output: "0 брака при отливке, поставка в розничные сети",
    },
  ];

  return (
    <section id="flagship" className="py-24 bg-[#0A0B0D] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/20 text-xs font-mono text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ФЛАГМАНСКИЙ КОНТРАКТНЫЙ КЕЙС</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Circular Eyewear: <br className="hidden sm:inline" />
              От 2D-эскиза до серийных молдов
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Полноценный инженерный сквозной цикл DFM (Design for Manufacturing) для премиального бренда очков.
          </p>
        </div>

        {/* Big Showcase Box */}
        <div className="rounded-2xl bg-[#0E1015] border border-white/[0.1] overflow-hidden shadow-2xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* Left: Interactive Pipeline Selector */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  ЭТАПЫ СКВОЗНОГО ПРОИЗВОДСТВЕННОГО ЦИКЛА
                </div>

                <div className="space-y-3">
                  {steps.map((step, idx) => {
                    const isSelected = activeStep === idx;
                    return (
                      <button
                        key={step.number}
                        onClick={() => setActiveStep(idx)}
                        className={`w-full text-left p-4 rounded-xl transition-all border ${
                          isSelected
                            ? "bg-white/[0.08] border-white/25 text-white shadow-md"
                            : "bg-white/[0.02] border-white/[0.04] text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`font-mono text-xs px-2 py-0.5 rounded ${
                              isSelected
                                ? "bg-sky-500/20 text-sky-300 font-semibold"
                                : "bg-white/[0.05] text-slate-400"
                            }`}
                          >
                            ЭТАП {step.number}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{step.subtitle}</span>
                        </div>
                        <div className="text-sm font-semibold tracking-tight text-slate-100">
                          {step.title}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Detailed Description */}
              <div className="p-4 rounded-xl bg-[#090A0D] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-sky-400 uppercase">
                  ПОДРОБНЕЕ О РЕШЕНИИ:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {steps[activeStep].desc}
                </p>
                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Результат: {steps[activeStep].output}</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Blueprint Visual & Specs */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#0B0D11]">
              {/* Visual Simulation Display */}
              <div className="relative rounded-xl bg-[#08090C] border border-white/[0.08] p-6 sm:p-8 overflow-hidden min-h-[300px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                {/* Top Blueprint Bar */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    CIRCULAR_FRAME_CAD_V4.STEP
                  </span>
                  <span>TOLERANCE: &plusmn;0.03mm</span>
                </div>

                {/* Central Eyewear Frame Schematic Representation */}
                <div className="relative z-10 py-10 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-md h-36 flex items-center justify-center">
                    {/* Stylized CAD Eyewear Silhouette */}
                    <svg
                      viewBox="0 0 400 120"
                      className="w-full h-auto text-slate-300 stroke-current fill-none stroke-[1.8]"
                    >
                      {/* Left Rim */}
                      <rect
                        x="40"
                        y="20"
                        width="130"
                        height="80"
                        rx="35"
                        className="stroke-slate-200"
                        strokeDasharray={activeStep === 0 ? "4 4" : "none"}
                      />
                      {/* Right Rim */}
                      <rect
                        x="230"
                        y="20"
                        width="130"
                        height="80"
                        rx="35"
                        className="stroke-slate-200"
                        strokeDasharray={activeStep === 0 ? "4 4" : "none"}
                      />
                      {/* Bridge */}
                      <path
                        d="M 170 45 Q 200 35 230 45"
                        className="stroke-sky-400 stroke-[2.5]"
                      />
                      {/* Left Hinge & Temple */}
                      <path
                        d="M 40 45 L 10 40"
                        className="stroke-emerald-400 stroke-[2.5]"
                      />
                      {/* Right Hinge & Temple */}
                      <path
                        d="M 360 45 L 390 40"
                        className="stroke-emerald-400 stroke-[2.5]"
                      />
                      {/* Center Dimension Line */}
                      <line
                        x1="170"
                        y1="110"
                        x2="230"
                        y2="110"
                        className="stroke-slate-400 stroke-[1]"
                        strokeDasharray="2 2"
                      />
                      <text
                        x="185"
                        y="105"
                        fill="currentColor"
                        className="text-[9px] font-mono fill-slate-400 stroke-none"
                      >
                        18 mm
                      </text>
                    </svg>
                  </div>

                  <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300">
                    <span>Текущий фокус:</span>
                    <span className="text-sky-300 font-semibold">{steps[activeStep].title}</span>
                  </div>
                </div>

                {/* Bottom Status Feed */}
                <div className="relative z-10 pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  <div className="p-1.5 rounded bg-white/[0.02]">МАТЕРИАЛ: TR-90</div>
                  <div className="p-1.5 rounded bg-white/[0.02]">УСАДКА: 0.8%</div>
                  <div className="p-1.5 rounded bg-white/[0.02]">УКЛОН: 1.5&deg;</div>
                  <div className="p-1.5 rounded bg-white/[0.02] text-emerald-400">STATUS: В СЕРИИ</div>
                </div>
              </div>

              {/* Hard Business Results Grid */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  ТВЕРДЫЕ РЕЗУЛЬТАТЫ ДЛЯ КЛИЕНТА:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flagshipCase.results.map((res, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300 leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
