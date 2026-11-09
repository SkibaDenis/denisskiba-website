"use client";

import { ArrowRight, Box, CheckCircle2, FileCode, Layers, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-white/[0.06]">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-slate-400/[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Offer & Social Proof */}
          <div className="lg:col-span-7 space-y-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>3D Generalist для B2B и производственных брендов</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Коммерческий 3D-специалист{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-sky-200">
                  широкого профиля
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
                Инженерное CAD-проектирование под производство (DFM), фотореалистичный 3D CGI рендеринг для маркетплейсов и техническая анимация узлов. Говорю на языке бизнеса, дедлайнов и технологических допусков.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/5 active:scale-[0.98]"
              >
                <span>Обсудить задачу</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#flagship"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-200 font-medium text-sm hover:bg-white/[0.09] hover:border-white/[0.18] transition-all"
              >
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Смотреть флагманский кейс</span>
              </a>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-white tracking-tight font-mono">250+</div>
                <div className="text-xs text-slate-400 mt-0.5">выполненных проектов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight font-mono">10 000+</div>
                <div className="text-xs text-slate-400 mt-0.5">часов практики в 3D</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Работа по договору</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Акты, безнал, соблюдение NDA
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Blueprint Card / Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 bg-[#0E1015]/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">SPEC: DFM &amp; CGI PIPELINE</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-500/20">
                  Ready for CNC
                </span>
              </div>

              {/* Technical Schematic / Hero Illustration */}
              <div className="my-5 p-5 rounded-xl bg-[#090A0D] border border-white/[0.06] relative overflow-hidden group">
                <div className="absolute inset-0 bg-tech-dots opacity-40" />
                
                {/* Visual Wireframe Isometric Elements */}
                <div className="relative z-10 flex flex-col items-center justify-center py-6 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-500/20 via-slate-800 to-white/10 border border-white/20 flex items-center justify-center mb-4 shadow-inner">
                    <Box className="w-10 h-10 text-slate-200" />
                  </div>
                  <div className="font-mono text-xs text-slate-300 tracking-wider">
                    SUB-D &bull; SOLID CAD &bull; 8K CYCLES
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 max-w-[260px]">
                    Параметрическая геометрия с контролем усадки, допусков и литьевых радиусов
                  </div>
                </div>

                {/* Live Tolerance Meter */}
                <div className="mt-2 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>ДОПУСК ТОЧНОСТИ:</span>
                  <span className="text-emerald-400 font-semibold">&plusmn; 0.02 - 0.05 мм</span>
                </div>
              </div>

              {/* Supported Formats Grid */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Поддерживаемые стандарты экспорта:
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["STEP", "STL", "FBX", "OBJ", "IGES", "EXR", "PSD", "PRORES"].map((fmt) => (
                    <div
                      key={fmt}
                      className="px-2 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-center font-mono text-[11px] text-slate-300 hover:border-white/20 hover:text-white transition-colors"
                    >
                      {fmt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Validation Stamp */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Проверенные контракты:</span>
                <span className="text-slate-300 font-medium">ООО &laquo;Архар&raquo;, &laquo;СКС&raquo;, &laquo;Этерно&raquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
