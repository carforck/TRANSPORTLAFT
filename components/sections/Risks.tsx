"use client";

import { RISKS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Risks() {
  return (
    <section className="relative bg-ink-100 section">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="section-eyebrow">Riesgos que prevenimos</span>
            <h2 className="display-2 mt-3 text-ink-900">
              Anticipamos los{" "}
              <span className="text-ink-500">riesgos críticos</span>{" "}
              del sector.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="lead">
              Identificamos focos de exposición antes de que escalen. Cada
              control que diseñamos responde a una señal real de la operación.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RISKS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-ink-300/60 bg-white p-7 shadow-subtle transition-all duration-500 hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-card">
                <span className="absolute right-6 top-6 font-mono text-[11px] font-medium text-ink-500">
                  0{i + 1}
                </span>

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-100 text-ink-900 transition-colors group-hover:bg-gold-500/10 group-hover:text-gold-500">
                  <r.icon size={22} strokeWidth={1.6} />
                </div>

                <h3 className="text-base font-semibold leading-snug text-ink-900 sm:text-lg">
                  {r.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
