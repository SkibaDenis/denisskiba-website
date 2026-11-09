"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060709] border-t border-white/[0.08] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-slate-950 font-bold flex items-center justify-center text-xs">
              DS
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Денис Скиба</div>
              <div className="text-[11px] font-mono text-slate-400">
                Коммерческий 3D-специалист широкого профиля
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a href="#flagship" className="hover:text-white transition-colors">
              Кейс Circular
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Портфолио
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Отзывы B2B
            </a>
            <a href="#workflow" className="hover:text-white transition-colors">
              Процесс
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Контакты
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/[0.04]"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 denisskiba.ru. Все права защищены. Работа по договору с юрлицами.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Blender 3D &bull; CAD &bull; Next.js</span>
            <span className="text-emerald-400">&bull; 100/100 PageSpeed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
