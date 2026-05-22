"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ValueStatement() {
  return (
    <section className="relative bg-ink-100 section">
      <div className="container-narrow text-center">
        <Reveal>
          <span className="section-eyebrow !justify-center">
            Por qué TRANSPORTLAFT
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display-2 mt-2 text-ink-900">
            Diseñamos sistemas de cumplimiento{" "}
            <span className="text-ink-500">
              ajustados a la operación real del transporte
            </span>{" "}
            — no a plantillas genéricas.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="lead mx-auto mt-6 max-w-3xl text-ink-700">
            Combinamos rigor jurídico, conocimiento técnico del sector y un
            acompañamiento cercano. Cada matriz, política y procedimiento se
            construye con la lógica de su flota, sus rutas y sus terceros.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="#metodologia"
            className="btn-link mt-8 justify-center !text-base"
          >
            Conozca nuestro método T-LAFT 5C
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
