import React from "react";
import { ShieldCheck, Crosshair, Cpu, Eye, Compass, RotateCcw } from "lucide-react";

export function CrashProofShowcase() {
  const features = [
    {
      icon: ShieldCheck,
      color: "text-accent-orange",
      bg: "bg-accent-orange/10",
      title: "Jaula Deformable 360°",
      description:
        "Fabricada en polímero elástico con memoria. Absorbe el impacto de choques contra paredes, muebles o pisos y rebota intacto como una pelota.",
    },
    {
      icon: Crosshair,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      title: "Cero Riesgo para Niños",
      description:
        "A diferencia de drones convencionales con aspas cortantes expuestas, Dronezy sella sus hélices dentro del enrejado protector. Dedos 100% a salvo.",
    },
    {
      icon: Compass,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      title: "Estabilizador de 6 Ejes",
      description:
        "Giroscopio inteligente que mantiene el drone suspendido en el aire sin perder altura, evitando que caiga descontrolado al piso.",
    },
    {
      icon: RotateCcw,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      title: "Acrobacias y Giros 360°",
      description:
        "Presiona un botón en el control remoto para que el drone realice flips acrobáticos automáticos en el aire, deleitando a grandes y chicos.",
    },
  ];

  return (
    <section className="py-16 bg-brand-surface/60 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full border border-accent-orange/20">
            TECNOLOGÍA DE VANGUARDIA
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            ¿Por qué Dronezy no se rompe al estrellarse?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            El 92% de los drones para principiantes terminan en la basura en menos de 48 horas tras romper sus hélices o motores. Dronezy resolvió este problema desde la raíz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-card/90 border border-brand-border hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
