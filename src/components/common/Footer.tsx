import React from "react";
import { Zap, ShieldCheck, Truck, Headphones, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-orange to-amber-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-black text-white">
                DRONE<span className="text-accent-orange">ZY</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              La marca líder en Colombia de drones antigolpes con tecnología deformable para niños y principiantes. Diseñados para durar.
            </p>
          </div>

          {/* Col 2: Benefits */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Garantía y Confianza
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-trust-green" />
                <span>Envío Gratis a todo Colombia</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-orange" />
                <span>Garantía de 10 Días Antigolpes</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                <span>Soporte Técnico permanente</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Couriers & Payments */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Envíos y Medios de Pago
            </h4>
            <p className="text-slate-400">
              Despachos asegurados a través de <strong className="text-slate-300">Coordinadora, Servientrega e Inter Rapidísimo</strong>.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Pago Contra Entrega</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">PSE</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Bancolombia</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Nequi</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Tarjetas Crédito/Débito</span>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Atención al Cliente
            </h4>
            <p className="text-slate-400">
              Lunes a Sábado: 8:00 AM – 7:00 PM
            </p>
            <a
              href="https://wa.me/573018868208"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +57 (301) 886-8208</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Dronezy™ Colombia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span>Términos del Servicio</span>
            <span>Política de Privacidad</span>
            <span>Política de Garantías</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
