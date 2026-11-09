"use client";

import { useState } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, ArrowUpRight, MessageCircle, Mail, FileText, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    serviceType: "3D CAD и моделирование под производство",
    budget: "100 000 – 250 000 ₽",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.size > 20 * 1024 * 1024) {
        alert("Размер файла не должен превышать 20 МБ. Для больших архивов прикрепите ссылку на Яндекс.Диск/Google Drive в описании.");
        return;
      }
      setFile(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert("Пожалуйста, заполните имя и контакт для связи.");
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("contact", formData.contact);
      data.append("serviceType", formData.serviceType);
      data.append("budget", formData.budget);
      data.append("message", formData.message);
      if (file) {
        data.append("file", file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Не удалось отправить заявку");
      }

      setStatus("success");
      setResponseMsg(json.message || "Спасибо! Заявка успешно отправлена.");
      setFormData({
        name: "",
        contact: "",
        serviceType: "3D CAD и моделирование под производство",
        budget: "100 000 – 250 000 ₽",
        message: "",
      });
      setFile(null);
    } catch (err: unknown) {
      setStatus("error");
      const errorMsg = err instanceof Error ? err.message : "Ошибка при отправке";
      setResponseMsg(errorMsg);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contacts & Requisites */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ОТВЕТ В ТЕЧЕНИЕ 30 МИНУТ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Обсудим ваш проект <br /> или задачу на производство?
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Отправьте ТЗ, чертеж или просто опишите задачу своими словами. Я сделаю предварительную оценку сроков и бюджета, предложу оптимальный технологический пайплайн.
              </p>
            </div>

            {/* Direct Connect Cards */}
            <div className="space-y-3">
              <a
                href="https://t.me/denisskiba"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#0E1015] border border-white/[0.08] hover:border-sky-500/40 hover:bg-[#12151D] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">TELEGRAM (САМЫЙ БЫСТРЫЙ ОТВЕТ)</div>
                    <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      @denisskiba
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="mailto:skiba.denis@gmail.com"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#0E1015] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">ЭЛЕКТРОННАЯ ПОЧТА ДЛЯ ТЗ</div>
                    <div className="text-sm font-semibold text-white">
                      skiba.denis@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-all" />
              </a>
            </div>

            {/* B2B Legal Details & Guarantees */}
            <div className="p-5 rounded-2xl bg-[#0C0D11] border border-white/[0.06] space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                УСЛОВИЯ СОТРУДНИЧЕСТВА ДЛЯ ЮРЛИЦ:
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Работа по официальному B2B договору с выставлением счета</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Электронный документооборот (ЭДО Диадок / СБИС)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Подписание соглашения о неразглашении (NDA) до старта</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1015] border border-white/[0.1] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Заполнить заявку на 3D-проект
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                Заявка мгновенно поступит мне в личный Telegram. Конфиденциальность гарантируется.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Заявка успешно отправлена!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    {responseMsg} Я уже получил уведомление и свяжусь с вами в ближайшее время.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/[0.08] text-xs font-semibold text-white hover:bg-white/[0.15] transition-colors"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Ваше имя <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Константин, ООО Архар"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090C] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Telegram / Телефон / Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="@username или +7 (999) 000-00-00"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090C] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Direction & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Направление задачи
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090C] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-xs text-white transition-colors"
                      >
                        <option value="3D CAD и моделирование под производство">3D CAD и DFM под производство</option>
                        <option value="Предметный 3D CGI и визуализация для брендов">Предметный 3D CGI (маркетплейсы/каталог)</option>
                        <option value="Техническая и промо-анимация">Техническая / промо-анимация (Exploded View)</option>
                        <option value="Моделирование персонажей и маскотов">Персонаж / маскот бренда</option>
                        <option value="Комплексный проект (CAD + CGI + Анимация)">Комплексный проект под ключ</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Ориентир бюджета
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090C] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-xs text-white transition-colors"
                      >
                        <option value="до 50 000 ₽">до 50 000 ₽</option>
                        <option value="50 000 – 100 000 ₽">50 000 – 100 000 ₽</option>
                        <option value="100 000 – 250 000 ₽">100 000 – 250 000 ₽</option>
                        <option value="от 250 000 ₽">от 250 000 ₽</option>
                        <option value="Требуется предварительная оценка">Требуется оценка по ТЗ</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Task Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Описание задачи или ссылки на чертежи
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Опишите габариты, требования производства, количество ракурсов или приложите ссылку на папку с чертежами..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090C] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  {/* File Upload Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Прикрепить ТЗ, эскиз или чертеж (до 20 МБ)
                    </label>
                    <label className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#08090C] border border-dashed border-white/[0.12] hover:border-white/30 cursor-pointer transition-colors text-xs text-slate-400">
                      <div className="flex items-center gap-2 truncate">
                        <Upload className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">
                          {file ? file.name : "Нажмите, чтобы выбрать файл (PDF, STEP, STL, ZIP, PNG, JPG)"}
                        </span>
                      </div>
                      {file && (
                        <span className="text-[10px] font-mono text-emerald-400 shrink-0 ml-2">
                          {(file.size / (1024 * 1024)).toFixed(1)} MB
                        </span>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{responseMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span>Отправка заявки в Telegram...</span>
                    ) : (
                      <>
                        <span>Отправить техническое задание</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
