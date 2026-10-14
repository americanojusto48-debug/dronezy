import React from "react";
import { Check, X, ShieldCheck, AlertTriangle } from "lucide-react";

export function ComparisonTable() {
  const comparisonRows = [
    {
      feature: "Jaula Antigolpes Absorbente",
      dronezy: "Sí (Polímero elástico 360°)",
      others: "No (Plástico rígido que se quiebra)",
      dronezyPass: true,
    },
    {
      feature: "Seguridad para Dedos de Niños",
      dronezy: "100% Protegidos (Aspas cerradas)",
      others: "Peligroso (Hélices expuestas al aire)",
      dronezyPass: true,
    },
    {
      feature: "Gasto en Repuestos de Hélices",
      dronezy: "$0 COP (No se rompen)",
      others: "Constante (Se rompen cada choque)",
      dronezyPass: true,
    },
    {
      feature: "Control de Altura Automático",
      dronezy: "Sí (Se mantiene flotando solo)",
      others: "No (Cae al piso de inmediato)",
      dronezyPass: true,
    },
    {
      feature: "Garantía Real en Colombia",
      dronezy: "10 Días de Garantía Total",
      others: "Sin garantía o difícil de reclamar",
      dronezyPass: true,
    },
    {
      feature: "Envío Gratis + Pago Contra Entrega",
      dronezy: "Sí a Nivel Nacional",
      others: "Cobro adicional o solo prepago",
      dronezyPass: true,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            COMPARATIVA DIRECTA
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white tracking-tight">
            Dronezy vs. Drones Tradicionales
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Descubre por qué miles de padres en Colombia eligen Dronezy para sus hijos.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-xl">
          <div className="grid grid-cols-12 bg-slate-900 border-b border-brand-border p-4 text-xs sm:text-sm font-bold">
            <div className="col-span-5 text-slate-400">Característica</div>
            <div className="col-span-4 text-accent-orange flex items-center gap-1 font-black">
              <ShieldCheck className="w-4 h-4 text-accent-orange" />
              <span>DRONEZY™</span>
            </div>
            <div className="col-span-3 text-slate-400 flex items-center gap-1">
              <AlertTriangle className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Drones Comunes</span>
              <span className="sm:hidden">Otros</span>
            </div>
          </div>

          <div className="divide-y divide-brand-border/60 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 items-center transition-colors ${
                  idx % 2 === 0 ? "bg-brand-surface/40" : "bg-brand-surface/80"
                }`}
              >
                <div className="col-span-5 font-semibold text-slate-200">
                  {row.feature}
                </div>
                <div className="col-span-4 flex items-center gap-1.5 font-bold text-emerald-400">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs leading-tight">{row.dronezy}</span>
                </div>
                <div className="col-span-3 flex items-center gap-1.5 text-slate-400">
                  <X className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-xs leading-tight">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
