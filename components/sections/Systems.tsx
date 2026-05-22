"use client";

import { ShieldCheck, FileCheck2, Scale, AlertOctagon, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const ITEMS = [
  {
    key: "SARLAFT",
    icon: ShieldCheck,
    title: "SARLAFT",
    subtitle: "Sistema de Administración del Riesgo LA/FT",
    description:
      "Implementación completa del sistema exigido a empresas de transporte vigiladas por la Superintendencia.",
  },
  {
    key: "RMS",
    icon: AlertOctagon,
    title: "RMS",
    subtitle: "Modelo de Riesgos del Transporte",
    description:
      "Prevención de delitos asociados a la operación logística, la cadena de suministro y los terceros vinculados.",
  },
  {
    key: "SAGRILAFT",
    icon: Scale,
    title: "SAGRILAFT",
    subtitle: "Autocontrol y gestión LA/FT/FP",
    description:
      "Sistema integral exigido por la Superintendencia de Sociedades para sujetos obligados del sector.",
  },
  {
    key: "PTEE",
    icon: FileCheck2,
    title: "PTEE",
    subtitle: "Transparencia y Ética Empresarial",
    description:
      "Programa para prevenir corrupción y soborno transnacional, con políticas, controles y capacitación.",
  },
];

export function Systems() {
  return (
    <section id="servicios" className="relative bg-white section">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="section-eyebrow">Servicios</span>
            <h2 className="display-2 mt-3 text-ink-900">
              Cuatro sistemas.{" "}
              <span className="text-ink-500">
                Un mismo estándar de rigor.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="lead">
              Diseñamos e implementamos cada sistema bajo la regulación vigente,
              ajustando documentación y controles a la operación real del cliente.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, idx) => (
            <Reveal key={it.key} delay={idx * 0.08}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-ink-300/60 bg-white p-7 shadow-subtle transition-all duration-500 hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-card">
                {/* Number ribbon top-right */}
                <span className="absolute right-6 top-6 font-mono text-[11px] font-medium text-ink-500">
                  0{idx + 1}
                </span>

                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-ink-300 bg-ink-100 text-ink-900 transition-colors group-hover:border-gold-500/50 group-hover:bg-gold-500/10 group-hover:text-gold-500">
                  <it.icon size={22} strokeWidth={1.6} />
                </div>

                <h3 className="display-3 text-ink-900">{it.title}</h3>
                <p className="mt-1 text-sm font-medium text-gold-500">
                  {it.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  {it.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 transition-colors group-hover:text-gold-500">
                  Conocer más
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-12 text-center">
          <Link href="#contacto" className="btn-ghost">
            ¿No sabe cuál aplica a su empresa? Hablemos
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
