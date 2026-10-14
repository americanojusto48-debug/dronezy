import React from "react";
import { Truck, ShieldCheck, Banknote } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white text-xs sm:text-sm py-2 px-4 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 flex-wrap font-medium">
        <div className="flex items-center gap-1.5 text-trust-green font-semibold">
          <Truck className="w-4 h-4 text-trust-green" />
          <span>ENVÍO GRATIS A TODA COLOMBIA</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-amber-300">
          <Banknote className="w-4 h-4 text-amber-300" />
          <span>PAGO CONTRA ENTREGA DISPONIBLE</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-accent-orange" />
          <span>GARANTÍA 10 DÍAS ANTIGOLPES</span>
        </div>
      </div>
    </div>
  );
}
