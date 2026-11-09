"use client";

import { Award, Briefcase, CheckCircle, FileCheck, MessageSquare, Quote, ShieldCheck, Star } from "lucide-react";
import { reviewsData, trustMetrics } from "@/data/reviews";

export default function ExperienceReviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0A0B0D] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ЖЕЛЕЗНОЕ СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Твердые цифры и отзывы <br /> от реальных юрлиц
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Подтвержденная репутация в B2B-сегменте: опыт работы с промышленными предприятиями, производственными брендами и технологическими компаниями.
          </p>
        </div>

        {/* 4 Trust Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0E1015] border border-white/[0.08] relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Project Manager Advantage Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#11141A] via-[#141720] to-[#0E1016] border border-white/[0.1] p-6 sm:p-8 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>БЭКГРАУНД ПРОЕКТНОГО МЕНЕДЖЕРА (VIP-КЛИЕНТЫ БАНКА)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Почему со мной не бывает «фрилансер пропал со связи»:
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                До 3D я управлял комплексными проектами и вел VIP-клиентов в крупнейшем банке. Поэтому в работе я мыслю не абстрактным «творческим настроением», а сроками, декомпозицией этапов, соблюдением ТЗ и юридической прозрачностью (договор, счета, закрывающие акты, ЭДО).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-slate-200">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Работа по B2B договору и актам (ИП/Самозанятый)</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Полное соблюдение NDA и конфиденциальности</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-slate-200">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Регулярные статусы и промежуточный контроль</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified B2B Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-[#0E1015] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all shadow-xl"
            >
              <div className="space-y-4">
                {/* Header: Company, Badge & Stars */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {rev.companyName}
                      </h4>
                      {rev.badge && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
                          {rev.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {rev.authorName} &bull; {rev.authorRole}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Project Focus Badge */}
                <div className="text-[11px] font-mono text-sky-400 bg-sky-950/30 px-2.5 py-1 rounded inline-block">
                  Проект: {rev.projectType}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &laquo;{rev.text}&raquo;
                </p>
              </div>

              {/* Bottom Highlight */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Итог: {rev.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
