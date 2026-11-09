"use client";

import { useState } from "react";
import { ArrowUpRight, Box, Camera, Cpu, Film, Sparkles, User } from "lucide-react";
import { portfolioProjects, ProjectItem } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "Все проекты (6)" },
    { id: "cad", label: "CAD & Производство (DFM)" },
    { id: "cgi", label: "Предметный 3D CGI" },
    { id: "animation", label: "Техническая анимация" },
    { id: "character", label: "Персонажи & Маскоты" },
  ];

  const filteredProjects = activeFilter === "all"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0A0B0D] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
              <span>ИЗБРАННЫЕ КОММЕРЧЕСКИЕ РАБОТЫ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Портфолио реализованных проектов
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Реальные промышленные изделия, визуализации для федерального ритейла и технические презентации сложных узлов.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-white text-slate-950 border-white font-semibold shadow-md"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0E1015] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Thumbnail / Technical Wireframe Representation */}
              <div className="relative aspect-[16/10] bg-[#08090C] border-b border-white/[0.06] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-20 group-hover:opacity-30 transition-opacity" />

                {/* Badge Overlay */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#0A0B0D]/80 border border-white/10 text-slate-300 backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {project.isFlagship && (
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 backdrop-blur-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Флагман
                    </span>
                  </div>
                )}

                {/* Central Icon Illustration */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform text-slate-300">
                    {project.category === "cad" && <Cpu className="w-7 h-7 text-sky-400" />}
                    {project.category === "cgi" && <Camera className="w-7 h-7 text-amber-400" />}
                    {project.category === "animation" && <Film className="w-7 h-7 text-purple-400" />}
                    {project.category === "character" && <User className="w-7 h-7 text-emerald-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-3 tracking-wider">
                    {project.client} &bull; {project.year}
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    {project.results[0]?.slice(0, 32)}...
                  </span>
                  <span className="inline-flex items-center gap-1 text-white font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Кейс</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for detailed deep-dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
