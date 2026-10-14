"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, MessageCircle, Zap } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export function Navbar() {
  const { openCart, getTotalCount } = useCart();
  const totalItems = getTotalCount();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola Dronezy! Deseo información sobre el Drone Falcon Antigolpes de $129.000 COP con envío gratis."
    );
    window.open("https://wa.me/573018868208?text=" + message, "_blank");
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-orange to-amber-500 flex items-center justify-center shadow-lg shadow-accent-orange/20 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
              DRONE<span className="text-accent-orange">ZY</span>
              <span className="text-[10px] bg-accent-orange/20 text-accent-orange px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                FALCON
              </span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              DRONES ANTIGOLPES CERTIFICADOS
            </span>
          </div>
        </Link>

        {/* Center Live Dispatch Indicator */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trust-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-trust-green"></span>
          </span>
          <span>Despachos activos hoy a toda Colombia</span>
        </div>

        {/* Right Actions: WhatsApp + Cart */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleWhatsApp}
            aria-label="Contactar por WhatsApp"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/40 px-3 py-2 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Asesor WhatsApp</span>
          </button>

          <button
            onClick={openCart}
            aria-label="Abrir Carrito de compras"
            className="relative flex items-center gap-2 bg-accent-orange hover:bg-accent-orangeHover text-white px-3.5 py-2 rounded-lg font-bold text-sm shadow-md shadow-accent-orange/25 transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="bg-white text-brand-dark text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
