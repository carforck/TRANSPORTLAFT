"use client";

import { METHOD_STEPS, DIFFERENTIATORS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative bg-ink-100 section"
    >
      <div className="container-page">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="section-eyebrow">Metodología</span>
            <h2 className="display-2 mt-3 text-ink-900">
              Método T-LAFT{" "}
              <span className="font-mono text-gold-500">5C</span>
              <span className="block text-ink-500">
                Cinco fases para un sistema vivo.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="lead">
              Cumplimiento práctico, jurídico y trazable. Acompañamos cada fase
              hasta que su equipo pueda operarlo con autonomía.
            </p>
          </Reveal>
        </div>

        {/* Steps grid */}
        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {METHOD_STEPS.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-ink-300/60 bg-white p-6 shadow-subtle transition-all duration-500 hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-card">
                {/* Top: number + icon */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-ink-500">
                    Fase 0{s.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 text-ink-900 transition-colors group-hover:bg-gold-500/10 group-hover:text-gold-500">
                    <s.icon size={18} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Differentiators */}
        <div className="mt-24">
          <Reveal>
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="section-eyebrow">Nuestra diferencia</span>
                <h3 className="display-3 mt-3 text-ink-900">
                  Lo que nos hace distintos.
                </h3>
              </div>
              <p className="lead lg:col-span-5">
                No solo entregamos documentos: implementamos un sistema que su
                equipo entiende y puede sostener.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-ink-300/60 bg-white p-5 transition-all duration-300 hover:border-ink-900/15 hover:shadow-subtle">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ink-100 text-ink-900 transition-colors group-hover:bg-gold-500/10 group-hover:text-gold-500">
                    <d.icon size={18} strokeWidth={1.7} />
                  </div>
                  <p className="pt-1 text-sm font-medium leading-snug text-ink-900">
                    {d.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
