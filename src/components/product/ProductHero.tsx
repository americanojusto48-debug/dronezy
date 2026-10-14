"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Truck, Zap, CheckCircle2, Flame, ArrowRight, Banknote, RefreshCw, Sparkles } from "lucide-react";
import { formatCOP } from "@/lib/utils";
import { BUNDLES, STAR_PRODUCT_DEFAULT } from "@/lib/constants";
import { useCart } from "@/hooks/useCart";
import { ShopifyProduct } from "@/types/shopify";

interface ProductHeroProps {
  product?: ShopifyProduct;
}

export function ProductHero({ product = STAR_PRODUCT_DEFAULT }: ProductHeroProps) {
  const {
    openCOD,
    openCart,
    addItem,
    selectedBundleId,
    setSelectedBundleId,
    selectedColor,
    setSelectedColor,
  } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product.images.edges.map((e) => e.node.url);
  const currentBundle = BUNDLES.find((b) => b.id === selectedBundleId) || BUNDLES[0];

  const colors = [
    { name: "Azul Eléctrico", hex: "#0284c7", imageIndex: 1 },
    { name: "Naranja Fuego", hex: "#ea580c", imageIndex: 2 },
    { name: "Verde Neón", hex: "#65a30d", imageIndex: 3 },
  ];

  const handleSelectBundle = (bundleId: string) => {
    setSelectedBundleId(bundleId);
  };

  const handleSelectColor = (colorName: string, imageIndex: number) => {
    setSelectedColor(colorName);
    setActiveImageIndex(imageIndex);
  };

  const handleBuyNow = () => {
    addItem({
      id: `${currentBundle.id}-${selectedColor}`,
      title: currentBundle.title,
      variantTitle: `Color: ${selectedColor}`,
      price: currentBundle.price,
      originalPrice: currentBundle.originalPrice,
      quantity: 1,
      image: images[activeImageIndex] || images[0],
      isBundle: true,
    });
    openCart();
  };

  const handleCODClick = () => {
    addItem({
      id: `${currentBundle.id}-${selectedColor}`,
      title: currentBundle.title,
      variantTitle: `Color: ${selectedColor}`,
      price: currentBundle.price,
      originalPrice: currentBundle.originalPrice,
      quantity: 1,
      image: images[activeImageIndex] || images[0],
      isBundle: true,
    });
    openCOD();
  };

  return (
    <section className="relative pt-6 pb-14 overflow-hidden" id="comprar">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: GALLERY & CRASH-PROOF BADGE (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-brand-surface border border-brand-border/80 shadow-2xl">
              <Image
                src={images[activeImageIndex] || images[0]}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain sm:object-cover transition-all duration-300"
              />

              {/* Floating Trust Pill */}
              <div className="absolute top-3 left-3 bg-brand-dark/90 backdrop-blur-md border border-accent-orange/40 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-accent-orange" />
                <span>100% ANTIGOLPES EPP</span>
              </div>

              {/* Free Shipping Badge */}
              <div className="absolute top-3 right-3 bg-trust-green text-white text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                <Truck className="w-3.5 h-3.5" />
                <span>ENVÍO GRATIS</span>
              </div>

              {/* Bottom Feature Pill */}
              <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-white">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  Control de 1 Mano Incluido
                </span>
                <span className="text-slate-400">Hélices 100% blindadas</span>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all bg-slate-900 ${
                    activeImageIndex === idx
                      ? "border-accent-orange ring-2 ring-accent-orange/20 scale-95"
                      : "border-brand-border hover:border-slate-500 opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`Vista miniatura ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  {idx === 0 && (
                    <span className="absolute bottom-0 inset-x-0 bg-accent-orange/90 text-[9px] font-black text-white text-center py-0.5 uppercase">
                      Póster
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Quick Live Sales Alert */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-red-500/10 text-red-400">
                <Flame className="w-4 h-4 fill-red-400" />
              </span>
              <p className="text-xs text-slate-300 leading-tight">
                <strong className="text-white font-semibold">Alta demanda en Colombia: </strong>
                Quedan <span className="text-accent-orange font-bold">11 unidades</span> con flete gratis para despacho hoy mismo.
              </p>
            </div>
          </div>

          {/* RIGHT: BUY BOX & VALUE STACK (6 Cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Tagline hook */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-accent-orange/20 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>¡DEJA EL CELULAR, VUELA YA!</span>
            </div>

            {/* Social Proof & Rating */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.9 / 5.0</span>
              <span className="text-xs text-slate-400">
                (+1.420 familias felices en Colombia)
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Dronezy™ Falcon 2108 Antigolpes
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                Diseño aerodinámico tipo avión de combate con jaula de absorción deformable. Chócalo contra muros, techos o muebles sin un solo rasguño. Control de precisión en una sola mano y protectores cerrados para total seguridad de los niños.
              </p>
            </div>

            {/* PRICING BLOCK (High Anchor Discount) */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-surface to-slate-900 border border-brand-border">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {formatCOP(currentBundle.price)}
                </span>
                <span className="text-lg text-slate-400 line-through font-medium">
                  {formatCOP(currentBundle.originalPrice)}
                </span>
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {currentBundle.discountBadge}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-trust-green">
                <Truck className="w-4 h-4" />
                <span>{currentBundle.shippingText} a toda Colombia | Paga en tu puerta</span>
              </div>
            </div>

            {/* COLOR SELECTION WITH REAL IMAGES SYNC */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Elige el Color del Falcon: <span className="text-white font-black">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleSelectColor(c.name, c.imageIndex)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      selectedColor === c.name
                        ? "border-accent-orange bg-accent-orange/15 text-white shadow-md shadow-accent-orange/15 scale-105"
                        : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/30"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* BUNDLE PACK SELECTOR (Clean 2 Options: 1 Unit or 2 Units) */}
            <div className="space-y-2.5 pt-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>Elige tu Paquete:</span>
                <span className="text-accent-orange text-[11px] font-semibold">
                  *Ahorra comprando el pack doble
                </span>
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {BUNDLES.map((bundle) => {
                  const isSelected = selectedBundleId === bundle.id;
                  return (
                    <div
                      key={bundle.id}
                      onClick={() => handleSelectBundle(bundle.id)}
                      className={`relative p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-accent-orange bg-accent-orange/10 shadow-lg shadow-accent-orange/10"
                          : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                      }`}
                    >
                      {bundle.isPopular && (
                        <div className="absolute -top-2.5 right-4 bg-accent-orange text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                          ¡EL MÁS VENDIDO!
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-accent-orange bg-accent-orange text-white"
                                : "border-slate-700"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{bundle.title}</p>
                            <p className="text-xs text-slate-400">{bundle.subtitle}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-base font-extrabold text-white">
                            {formatCOP(bundle.price)}
                          </p>
                          <p className="text-xs text-slate-500 line-through">
                            {formatCOP(bundle.originalPrice)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DUAL CTA CONVERSION BUTTONS */}
            <div className="space-y-3 pt-2">
              {/* Primary COD Button */}
              <button
                onClick={handleCODClick}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-accent-orange via-amber-500 to-accent-orange bg-[length:200%_auto] hover:bg-right transition-all duration-300 text-white py-4 px-6 rounded-xl font-black text-base sm:text-lg shadow-xl shadow-accent-orange/30 flex items-center justify-center gap-2 transform active:scale-[0.98]"
              >
                <Banknote className="w-5 h-5" />
                <span>PEDIR CONTRA ENTREGA (Paga al Recibir)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Online Payment Button */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Pagar Online (Tarjeta / PSE / Nequi)</span>
                <span className="text-xs text-slate-400 font-normal">
                  ({formatCOP(currentBundle.price)})
                </span>
              </button>
            </div>

            {/* TRUST GUARANTEES BADGES */}
            <div className="pt-2 grid grid-cols-3 gap-2 border-t border-brand-border/60 text-center">
              <div className="p-2">
                <Truck className="w-5 h-5 text-trust-green mx-auto mb-1" />
                <p className="text-[11px] font-bold text-white">Envío Gratis</p>
                <p className="text-[10px] text-slate-400">A todo Colombia</p>
              </div>
              <div className="p-2">
                <ShieldCheck className="w-5 h-5 text-accent-orange mx-auto mb-1" />
                <p className="text-[11px] font-bold text-white">10 Días Garantía</p>
                <p className="text-[10px] text-slate-400">Total antigolpes</p>
              </div>
              <div className="p-2">
                <RefreshCw className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                <p className="text-[11px] font-bold text-white">Soporte Directo</p>
                <p className="text-[10px] text-slate-400">Vía WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
