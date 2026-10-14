"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, ShieldCheck, Banknote } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatCOP } from "@/lib/utils";
import { createShopifyCart } from "@/lib/shopify/mutations";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    getTotalPrice,
    openCOD,
  } = useCart();

  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();

  const handleCheckoutShopify = async () => {
    setIsLoadingCheckout(true);
    try {
      // Connect to Storefront API cartCreate mutation
      const lines = items.map((item) => ({
        merchandiseId: item.id.startsWith("gid://")
          ? item.id
          : "gid://shopify/ProductVariant/dronezy-v-blue",
        quantity: item.quantity,
      }));

      const cart = await createShopifyCart(lines);
      if (cart?.checkoutUrl) {
        window.location.href = cart.checkoutUrl;
      } else {
        // Fallback to direct Shopify store checkout or COD
        openCOD();
        closeCart();
      }
    } catch (e) {
      console.warn("Direct checkout redirecting to COD modal", e);
      openCOD();
      closeCart();
    } finally {
      setIsLoadingCheckout(false);
    }
  };

  const handleSwitchToCOD = () => {
    closeCart();
    openCOD();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-brand-surface border-l border-brand-border h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-accent-orange" />
            <h3 className="font-bold text-white text-base">Tu Carrito de Compra</h3>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Notification */}
        <div className="bg-emerald-950/40 border-b border-emerald-900/50 p-2.5 px-4 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
          <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>¡Felicidades! Tienes ENVÍO GRATIS a toda Colombia</span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <ShoppingBag className="w-12 h-12 text-slate-600 mb-3" />
              <p className="font-bold text-white">Tu carrito está vacío</p>
              <p className="text-xs mt-1">Agrega el Dronezy Antigolpes para comenzar.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex gap-3 items-center"
              >
                {item.image && (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                  {item.variantTitle && (
                    <p className="text-[11px] text-slate-400">{item.variantTitle}</p>
                  )}
                  <p className="text-xs font-black text-accent-orange mt-1">
                    {formatCOP(item.price)}
                  </p>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-slate-700 rounded-lg overflow-hidden bg-slate-800">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-slate-300 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-slate-300 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t border-brand-border bg-slate-900/90 space-y-3 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>{formatCOP(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-trust-green font-bold">
                <span>Envío Nacional</span>
                <span>GRATIS</span>
              </div>
              <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800">
                <span>Total a Pagar</span>
                <span className="text-accent-orange text-base">{formatCOP(totalPrice)}</span>
              </div>
            </div>

            {/* CTA 1: Pago Contra Entrega */}
            <button
              onClick={handleSwitchToCOD}
              className="w-full bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-black py-3 rounded-xl shadow-lg shadow-accent-orange/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Banknote className="w-4 h-4" />
              <span>PEDIR CON PAGO CONTRA ENTREGA</span>
            </button>

            {/* CTA 2: Checkout Online */}
            <button
              onClick={handleCheckoutShopify}
              disabled={isLoadingCheckout}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
            >
              {isLoadingCheckout ? (
                <span>Conectando con Shopify...</span>
              ) : (
                <>
                  <span>Pagar con Tarjeta / PSE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-trust-green" /> Pago Seguro SSL
              </span>
              <span>•</span>
              <span>Garantía de 10 Días</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
