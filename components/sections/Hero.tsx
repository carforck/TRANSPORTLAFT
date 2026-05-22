"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { COMPANY, SYSTEMS } from "@/lib/data";
import { HeroSlider } from "@/components/ui/HeroSlider";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* === Banner background === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Banner/banner1.webp"
          alt="Camión sobre carretera con mapa de Colombia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Light gradient overlay (white fades to right) for left-text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10 lg:via-white/70 lg:to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        {/* Soft top wash so navigation stays clean */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      <div className="container-page relative z-10 pt-28 sm:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* === Texto === */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="chip mb-6">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
                Cumplimiento normativo · Colombia
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="display-1 text-ink-900"
            >
              Cumplimiento que{" "}
              <span className="italic font-normal text-gold-500">mueve</span>{" "}
              su empresa
              <span className="mt-2 block text-ink-500">
                en el sector transporte.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lead mt-6 max-w-xl"
            >
              {COMPANY.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroSlider />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="#contacto" className="btn-primary">
                <CalendarCheck size={16} />
                Solicite un diagnóstico inicial
              </Link>
              <Link href="#servicios" className="btn-ghost">
                Conocer servicios
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-500">
                Sistemas que implementamos
              </span>
              <div className="flex flex-wrap gap-2">
                {SYSTEMS.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* === Espacio derecho dejado a la imagen del banner === */}
          <div className="hidden lg:col-span-5 lg:block xl:col-span-6" aria-hidden />
        </div>

        {/* === Metrics row === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-300/60 bg-ink-300/60 shadow-card sm:grid-cols-4"
        >
          {[
            { value: "4", label: "Sistemas de cumplimiento" },
            { value: "5C", label: "Fases en nuestro método" },
            { value: "100%", label: "Enfoque en transporte" },
            { value: "Colombia", label: "Cobertura nacional" },
          ].map((m) => (
            <div key={m.label} className="bg-white/95 p-6 backdrop-blur sm:p-8">
              <p className="display-3 text-ink-900">{m.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="h-20 sm:h-28 lg:h-32" />
    </section>
  );
}
