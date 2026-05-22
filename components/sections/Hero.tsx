"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES, SYSTEMS } from "@/lib/data";

const ROTATION_MS = 7000;

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const goTo = useCallback((n: number) => {
    setIdx(
      ((n % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);
  const next = useCallback(() => goTo(idx + 1), [goTo, idx]);
  const prev = useCallback(() => goTo(idx - 1), [goTo, idx]);

  useEffect(() => {
    if (paused || prefersReduced) return;
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(t);
  }, [paused, prefersReduced]);

  const slide = HERO_SLIDES[idx];

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* === Backgrounds (one per slide, cross-faded) === */}
      <div className="absolute inset-0 -z-10">
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={s.id}
            initial={false}
            animate={{ opacity: i === idx ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            aria-hidden={i !== idx}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
        {/* White gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:via-white/75 lg:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container-page relative z-10 pt-28 sm:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Static chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <div className="chip">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
                Cumplimiento normativo · Colombia
              </div>
            </motion.div>

            {/* === Rotating slides (grid stacking — no overflow issues) === */}
            <div
              role="group"
              aria-roledescription="carousel"
              aria-label="Mensajes destacados de TransportLAFT"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              className="relative grid focus:outline-none"
            >
              {HERO_SLIDES.map((s, i) => {
                const active = i === idx;
                return (
                  <motion.article
                    key={s.id}
                    initial={false}
                    animate={
                      prefersReduced
                        ? { opacity: active ? 1 : 0 }
                        : { opacity: active ? 1 : 0, y: active ? 0 : 8 }
                    }
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={!active}
                    style={{
                      pointerEvents: active ? "auto" : "none",
                      gridArea: "1 / 1",
                    }}
                  >
                    <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-500">
                      <span className="h-px w-8 bg-gold-500" />
                      {s.eyebrow}
                    </div>

                    <h1 className="display-2 max-w-2xl text-ink-900">
                      {s.headline}
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-[17px] sm:leading-[1.7]">
                      {s.body}
                    </p>
                  </motion.article>
                );
              })}

              {/* SR-only live region */}
              <div className="sr-only" aria-live="polite" aria-atomic="true">
                Slide {slide.id} de {HERO_SLIDES.length}: {slide.eyebrow}.{" "}
                {slide.headline}
              </div>
            </div>

            {/* === Slide controls (clear visual separation) === */}
            <div className="mt-10 flex items-center gap-5 border-t border-ink-300/60 pt-5">
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Seleccionar slide"
              >
                {HERO_SLIDES.map((s, i) => {
                  const active = i === idx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`Slide ${s.id} — ${s.eyebrow}`}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        active
                          ? "w-10 bg-ink-900"
                          : "w-3 bg-ink-300 hover:bg-ink-500"
                      }`}
                    />
                  );
                })}
              </div>

              <span className="font-mono text-[11px] font-medium text-ink-500">
                {slide.id}{" "}
                <span className="text-ink-300">/ 0{HERO_SLIDES.length}</span>
              </span>

              <div className="ml-auto flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Slide anterior"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-300 bg-white text-ink-700 transition-all hover:border-ink-900 hover:text-ink-900"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Slide siguiente"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-300 bg-white text-ink-700 transition-all hover:border-ink-900 hover:text-ink-900"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* === CTAs === */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

            {/* === Systems chips === */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
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

          {/* Right spacer for banner image */}
          <div
            className="hidden lg:col-span-4 lg:block xl:col-span-5"
            aria-hidden
          />
        </div>

        {/* === Metrics row === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-300/60 bg-ink-300/60 shadow-card sm:grid-cols-4"
        >
          {[
            { value: "4", label: "Sistemas de cumplimiento" },
            { value: "5C", label: "Fases en nuestro método" },
            { value: "100%", label: "Enfoque en transporte" },
            { value: "Colombia", label: "Cobertura nacional" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-white/95 p-6 backdrop-blur sm:p-8"
            >
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
