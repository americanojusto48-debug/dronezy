"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS } from "@/lib/constants";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleSupportWhatsApp = () => {
    const message = encodeURIComponent("Hola, tengo una pregunta antes de ordenar mi Dronezy Falcon.");
    window.open(`https://wa.me/573018868208?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-brand-surface/40 border-t border-brand-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Todo lo que necesitas saber antes de recibir tu Dronezy en la puerta de tu casa.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-brand-border bg-brand-surface overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-accent-orange transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent-orange" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-brand-surface border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-white">¿Tienes otra pregunta sobre tu compra?</p>
            <p className="text-xs text-slate-400">Nuestros asesores en Colombia te responden en minutos.</p>
          </div>
          <button
            onClick={handleSupportWhatsApp}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Preguntar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
