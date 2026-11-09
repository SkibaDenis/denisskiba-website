"use client";

import { Cpu, Camera, Film, User, Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "cad-production":
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case "product-cgi":
        return <Camera className="w-5 h-5 text-amber-400" />;
      case "technical-animation":
        return <Film className="w-5 h-5 text-purple-400" />;
      case "mascots-characters":
        return <User className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0B0D] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
            <span>КОММЕРЧЕСКИЕ НАПРАВЛЕНИЯ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            4 ключевые экспертизы <br /> для производств и брендов
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Без перекоса в «только чертежи» или «только картинки». Полный спектр задач коммерческого 3D: от конструкторской подготовки под станки до продающего визуала.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group relative rounded-2xl bg-[#0E1015] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Header inside card */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                      {getIcon(svc.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                        НАПРАВЛЕНИЕ {svc.number}
                      </span>
                      {svc.highlight && (
                        <div className="text-[11px] font-mono text-emerald-400 font-medium">
                          &bull; {svc.highlight}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {svc.number}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3 group-hover:text-slate-100 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {svc.fullDesc}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    ЧТО ВХОДИТ В РАБОТУ:
                  </div>
                  {svc.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-sky-400" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Formats & Action */}
              <div className="pt-6 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-slate-400 font-mono text-[11px]">ФОРМАТЫ:</span>
                    {svc.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-slate-300"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`#contact`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/[0.04] hover:bg-white text-slate-300 hover:text-slate-950 border border-white/[0.08] hover:border-transparent text-xs font-semibold tracking-tight transition-all"
                >
                  <span>Заказать {svc.title.split(" ")[0]} задачу</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
