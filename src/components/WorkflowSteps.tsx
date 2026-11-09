"use client";

import { CheckCircle2, Clock, FileCheck2, GitBranch, Layers, ShieldCheck } from "lucide-react";
import { workflowSteps } from "@/data/workflow";

export default function WorkflowSteps() {
  return (
    <section id="workflow" className="py-24 bg-[#0A0B0D] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>ПРОЗРАЧНЫЙ ПРОЦЕСС ВЗАИМОДЕЙСТВИЯ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              4 шага: от первого брифа <br /> до передачи исходников
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Поэтапная оплата, согласование контрольных точек и отсутствие сюрпризов при сдаче проекта.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl bg-[#0E1015] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <span className="font-mono text-2xl font-bold text-sky-400">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-semibold text-white tracking-tight mb-2.5 group-hover:text-slate-100 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    РЕЗУЛЬТАТ ЭТАПА:
                  </div>
                  {step.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Key Benefit */}
              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{step.keyBenefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
