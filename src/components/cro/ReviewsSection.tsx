import React from "react";
import { Star, CheckCircle, MapPin, ThumbsUp } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export function ReviewsSection() {
  return (
    <section className="py-16 bg-slate-950/70 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full border border-accent-orange/20">
              OPINIONES DE COMPRADORES VERIFICADOS
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white tracking-tight">
              Lo que dicen familias y pilotos en Colombia
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 / 5</span>
            <span className="text-xs text-slate-400">• +1.420 compras</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-brand-surface border border-brand-border hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500">{review.date}</span>
                </div>

                <h3 className="font-bold text-sm text-white mb-1.5">{review.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1">
                    {review.author}
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-trust-green" />
                    )}
                  </p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {review.city}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                  <ThumbsUp className="w-2.5 h-2.5" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
