"use client";

import { useEffect } from "react";
import { X, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0E1015] border border-white/20 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0B0D]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-sky-400 border border-white/[0.08]">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.client} &bull; {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Закрыть окно"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#090A0D] border border-white/[0.06] space-y-2">
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                ЗАДАЧА ПРОЕКТА:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0D] border border-white/[0.06] space-y-2">
              <div className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                ИНЖЕНЕРНОЕ / 3D РЕШЕНИЕ:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results Checklist */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              ТВЕРДЫЕ РЕЗУЛЬТАТЫ ДЛЯ ЗАКАЗЧИКА:
            </div>
            <div className="space-y-2">
              {project.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-slate-400">{spec.label}</span>
                  <span className="font-semibold text-slate-200 mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0A0B0D] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Нужен аналогичный результат для вашего продукта?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/[0.05] text-slate-300 text-xs font-medium hover:bg-white/[0.1] transition-colors"
            >
              Закрыть
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 transition-colors"
            >
              <span>Обсудить похожую задачу</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
