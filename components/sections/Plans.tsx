"use client";

import Link from "next/link";
import { SERVICE_PLANS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Check } from "lucide-react";

const HIGHLIGHTS: Record<string, string[]> = {
  "Diagnóstico Inicial": [
    "Mapa de obligaciones aplicables",
    "Identificación de brechas",
    "Informe ejecutivo + hoja de ruta",
  ],
  "Implementación Integral": [
    "Manuales, políticas y procedimientos",
    "Matriz de riesgos a la medida",
    "Capacitación del oficial y el equipo",
  ],
  "Acompañamiento Mensual": [
    "Soporte jurídico continuo",
    "Actualización normativa",
    "Monitoreo y mejora del sistema",
  ],
};

export function Plans() {
  return (
    <section id="planes" className="relative bg-white section">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="section-eyebrow">Planes de servicio</span>
            <h2 className="display-2 mt-3 text-ink-900">
              Una puerta de entrada clara{" "}
              <span className="text-ink-500">
                para cualquier sujeto obligado.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="lead">
              Tres modalidades pensadas para acompañar al cliente desde el
              primer diagnóstico hasta la operación continua de su sistema.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {SERVICE_PLANS.map((p, i) => {
            const isFeatured = i === 1;
            return (
              <Reveal key={p.number} delay={i * 0.1}>
                <article
                  className={`group relative flex h-full flex-col rounded-3xl p-7 shadow-subtle transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:p-8 ${
                    isFeatured
                      ? "border border-ink-900 bg-ink-900 text-white"
                      : "border border-ink-300/60 bg-white"
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute -top-3 left-7 inline-flex rounded-full bg-gold-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                      Más solicitado
                    </span>
                  )}

                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-medium ${
                        isFeatured ? "text-white/60" : "text-ink-500"
                      }`}
                    >
                      Plan {p.number}
                    </span>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isFeatured
                          ? "bg-white/10 text-gold-300"
                          : "bg-ink-100 text-ink-900 group-hover:bg-gold-500/10 group-hover:text-gold-500"
                      } transition-colors`}
                    >
                      <p.icon size={22} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-semibold tracking-tight ${
                      isFeatured ? "text-white" : "text-ink-900"
                    }`}
                  >
                    {p.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isFeatured ? "text-white/75" : "text-ink-500"
                    }`}
                  >
                    {p.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {HIGHLIGHTS[p.title]?.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                            isFeatured
                              ? "bg-gold-500/20 text-gold-300"
                              : "bg-ink-100 text-ink-900"
                          }`}
                        >
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span
                          className={`text-[13px] ${
                            isFeatured ? "text-white/85" : "text-ink-700"
                          }`}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contacto"
                    className={`mt-8 inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isFeatured
                        ? "text-gold-300 hover:text-gold-400"
                        : "text-ink-900 hover:text-gold-500"
                    }`}
                  >
                    Hablemos de este plan
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
