"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Banknote, ShoppingBag } from "lucide-react";
import { formatCOP } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { BUNDLES, STAR_PRODUCT_DEFAULT } from "@/lib/constants";

export function StickyAddToCart() {
  const [isVisible, setIsVisible] = useState(false);
  const { openCOD, selectedBundleId, selectedColor } = useCart();

  const currentBundle = BUNDLES.find((b) => b.id === selectedBundleId) || BUNDLES[0];

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once scrolled 450px down
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-t border-brand-border p-3 sm:hidden shadow-2xl transition-all duration-300 transform translate-y-0">
      <div className="flex items-center justify-between gap-3">
        {/* Left Info */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-700 bg-brand-surface shrink-0">
            <Image
              src="/images/products/drone-blue.jpg"
              alt="Dronezy Falcon"
              fill
              className="object-cover"
            />
          </div>
          <div className="truncate">
            <p className="text-xs font-black text-white truncate">Dronezy™ Falcon 2108</p>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-accent-orange">
                {formatCOP(currentBundle.price)}
              </span>
              <span className="text-[10px] text-trust-green font-bold">Envío Gratis</span>
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <button
          onClick={openCOD}
          className="shrink-0 bg-accent-orange hover:bg-accent-orangeHover active:scale-95 text-white font-extrabold text-xs px-4 py-3 rounded-xl shadow-lg shadow-accent-orange/30 flex items-center gap-1.5"
        >
          <Banknote className="w-4 h-4" />
          <span>PAGAR AL RECIBIR</span>
        </button>
      </div>
    </div>
  );
}
