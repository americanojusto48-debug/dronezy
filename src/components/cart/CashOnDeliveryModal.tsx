"use client";

import React, { useState } from "react";
import { X, CheckCircle, Truck, ShieldCheck, MapPin, Phone, User, Home, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatCOP } from "@/lib/utils";
import { BUNDLES } from "@/lib/constants";

export function CashOnDeliveryModal() {
  const { isCODOpen, closeCOD, selectedBundleId, selectedColor } = useCart();
  const currentBundle = BUNDLES.find((b) => b.id === selectedBundleId) || BUNDLES[0];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    department: "Cundinamarca (Bogotá D.C.)",
    city: "",
    address: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  if (!isCODOpen) return null;

  const colombianDepartments = [
    "Bogotá D.C.",
    "Antioquia",
    "Valle del Cauca",
    "Cundinamarca",
    "Atlántico",
    "Santander",
    "Bolívar",
    "Tolima",
    "Risaralda",
    "Caldas",
    "Meta",
    "Norte de Santander",
    "Huila",
    "Quindío",
    "Magdalena",
    "Cesar",
    "Boyacá",
    "Cauca",
    "Nariño",
    "Córdoba",
    "Otro Departamento",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `DZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(generatedRef);
    setIsSubmitted(true);

    // Format WhatsApp message to notify shop
    const msg = encodeURIComponent(
      `🛒 *NUEVO PEDIDO CONTRA ENTREGA - DRONEZY*\n` +
      `📌 *Orden:* #${generatedRef}\n` +
      `📦 *Producto:* ${currentBundle.title}\n` +
      `🎨 *Color:* ${selectedColor}\n` +
      `💰 *Total a Pagar:* ${formatCOP(currentBundle.price)} (ENVÍO GRATIS)\n` +
      `-----------------------------\n` +
      `👤 *Cliente:* ${formData.fullName}\n` +
      `📱 *Teléfono:* ${formData.phone}\n` +
      `📍 *Destino:* ${formData.city}, ${formData.department}\n` +
      `🏠 *Dirección:* ${formData.address}\n` +
      (formData.notes ? `📝 *Notas:* ${formData.notes}\n` : "") +
      `-----------------------------\n` +
      `✅ *Por favor confírmenme el despacho.*`
    );

    // Open WhatsApp in new tab after 1 second so customer also has backup record
    setTimeout(() => {
      window.open(`https://wa.me/573018868208?text=${msg}`, "_blank");
    }, 1200);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    closeCOD();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-brand-surface border border-brand-border p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-5 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-trust-green bg-trust-green/10 px-3 py-1 rounded-full border border-trust-green/20">
                PAGO AL RECIBIR EN CASA
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-black text-white">
                Completa tus datos de envío
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                No pagas nada por adelantado. Le pagas al mensajero en efectivo al recibir tu paquete.
              </p>
            </div>

            {/* Selected Product Summary Box */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 mb-5 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white">{currentBundle.title}</p>
                <p className="text-slate-400">Color seleccionado: <strong className="text-accent-orange">{selectedColor}</strong></p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-sm text-white">{formatCOP(currentBundle.price)}</p>
                <p className="text-[10px] text-trust-green font-bold">Envío Gratis</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Carlos Pérez"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-accent-orange text-white rounded-xl pl-9 pr-3 py-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Número de Celular / WhatsApp (10 dígitos) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 310 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-accent-orange text-white rounded-xl pl-9 pr-3 py-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">
                    Departamento *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-accent-orange text-white rounded-xl px-3 py-2.5 outline-none transition-colors"
                  >
                    {colombianDepartments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">
                    Ciudad o Municipio *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Medellín / Envigado"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-accent-orange text-white rounded-xl px-3 py-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Dirección Exacta de Entrega *
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Calle 45 # 12-34 Apto 302, Barrio El Poblado"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-accent-orange text-white rounded-xl pl-9 pr-3 py-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Indicaciones adicionales (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Dejar en portería o llamar antes de entregar"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-accent-orange text-white rounded-xl px-3 py-2.5 outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-black py-3.5 rounded-xl shadow-lg shadow-accent-orange/30 text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>CONFIRMAR PEDIDO ({formatCOP(currentBundle.price)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-trust-green" /> Envío Gratis Nacional
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-orange" /> Garantía de 10 Días
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-trust-green/20 text-trust-green rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white">¡Pedido Confirmado!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Hemos registrado tu solicitud con número de guía preliminar:{" "}
              <strong className="text-accent-orange font-mono text-sm">{orderRef}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-1.5 text-slate-300">
              <p><strong className="text-white">Destinatario:</strong> {formData.fullName}</p>
              <p><strong className="text-white">Destino:</strong> {formData.address}, {formData.city}</p>
              <p><strong className="text-white">A pagar en casa:</strong> <span className="text-trust-green font-bold">{formatCOP(currentBundle.price)}</span> (Envío Gratis)</p>
            </div>

            <p className="text-[11px] text-slate-400">
              Te estamos redirigiendo a WhatsApp para enviarte el número de guía de Coordinadora/Servientrega.
            </p>

            <button
              onClick={resetAndClose}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Cerrar y Volver a la Tienda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
