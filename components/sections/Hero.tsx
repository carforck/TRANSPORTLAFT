"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { COMPANY, SYSTEMS } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-ink-100 via-transparent to-transparent opacity-60" aria-hidden />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* === Texto === */}
          <div className="lg:col-span-7">
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
              className="lead mt-6 max-w-2xl"
            >
              {COMPANY.description} Acompañamos a operadores, generadores de
              carga y flotas en la prevención del riesgo LA/FT/FP con sistemas
              de cumplimiento prácticos, jurídicos y ajustados a su operación
              real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
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

          {/* === Imagen === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-ink-300/60 bg-ink-100 shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=85"
                alt="Camión de transporte de carga"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
                priority
              />
              {/* Overlay gradient para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />

              {/* Floating badge logo */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 backdrop-blur-md shadow-elevated">
                <Image
                  src="/logo.webp"
                  alt={COMPANY.name}
                  width={36}
                  height={36}
                  className="rounded-full ring-1 ring-ink-300/50"
                />
                <div className="leading-tight">
                  <p className="text-[13px] font-semibold text-ink-900">
                    transport<span className="text-gold-500">laft</span> s.a.s.
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-500">
                    SARLAFT · SAGRILAFT · PTEE
                  </p>
                </div>
              </div>
            </div>

            {/* Stat overlay */}
            <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-ink-300/60 bg-white p-4 shadow-card sm:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                Cobertura
              </p>
              <p className="mt-1 text-lg font-semibold text-ink-900">
                100% <span className="text-ink-500">Colombia</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* === Metrics row === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-300/60 bg-ink-300/60 sm:grid-cols-4"
        >
          {[
            { value: "4", label: "Sistemas de cumplimiento" },
            { value: "5C", label: "Fases en nuestro método" },
            { value: "100%", label: "Enfoque en transporte" },
            { value: "Colombia", label: "Cobertura nacional" },
          ].map((m) => (
            <div key={m.label} className="bg-white p-6 sm:p-8">
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
