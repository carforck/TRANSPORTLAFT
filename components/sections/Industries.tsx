"use client";

import {
  Truck,
  Forklift,
  Warehouse,
  Container,
  Users,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { IDEAL_CLIENTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: LucideIcon[] = [
  Truck,
  Forklift,
  Warehouse,
  Container,
  Users,
  Building2,
];

export function Industries() {
  return (
    <section id="industrias" className="relative bg-white section">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="section-eyebrow">Industrias atendidas</span>
            <h2 className="display-2 mt-3 text-ink-900">
              Trabajamos con todos los{" "}
              <span className="text-ink-500">
                sujetos obligados de la cadena
              </span>{" "}
              de transporte en Colombia.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="lead">
              Desde grandes operadores logísticos hasta cooperativas y
              propietarios de flota: cada implementación se adapta al tamaño,
              naturaleza y operación del cliente.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {IDEAL_CLIENTS.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={c} delay={i * 0.05}>
                <div className="group flex h-full flex-col items-start rounded-2xl border border-ink-300/60 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-900/15 hover:shadow-subtle">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 text-ink-900 transition-colors group-hover:bg-gold-500/10 group-hover:text-gold-500">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <p className="text-sm font-medium leading-snug text-ink-900">
                    {c}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
