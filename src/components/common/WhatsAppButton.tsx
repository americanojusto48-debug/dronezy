"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "¡Hola Dronezy! Deseo información sobre el Drone Falcon Antigolpes de $129.000 COP con envío gratis."
    );
    window.open("https://wa.me/573018868208?text=" + message, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center gap-2 font-bold text-xs transition-all duration-300 hover:scale-105 group border border-emerald-300/40"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
      </div>
      <span className="hidden sm:inline font-extrabold tracking-wide">
        ¿Dudas? Chatea con nosotros
      </span>
    </button>
  );
}
