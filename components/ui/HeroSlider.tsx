"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/data";

const ROTATION_MS = 6000;

export function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const goTo = useCallback((n: number) => {
    setIdx(((n % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);
  const next = useCallback(() => goTo(idx + 1), [goTo, idx]);
  const prev = useCallback(() => goTo(idx - 1), [goTo, idx]);

  // Auto-advance (respecting reduced-motion and pause states)
  useEffect(() => {
    if (paused || prefersReduced) return;
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(t);
  }, [paused, prefersReduced]);

  // Keyboard arrows when the slider is focused
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const slide = HERO_SLIDES[idx];

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Mensajes destacados de TransportLAFT"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      className="relative isolate mt-8 w-full max-w-xl rounded-3xl border border-ink-300/60 bg-white/85 p-6 shadow-card backdrop-blur-md sm:p-7"
    >
      {/* Top: index + dots */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] font-medium text-ink-500">
          {slide.id}{" "}
          <span className="text-ink-300">/ 0{HERO_SLIDES.length}</span>
        </span>

        <div
          className="flex items-center gap-1.5"
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
                aria-label={`Ir al slide ${s.id} — ${s.eyebrow}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active
                    ? "w-8 bg-ink-900"
                    : "w-2 bg-ink-300 hover:bg-ink-500"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Slide content with cross-fade */}
      <div
        className="relative min-h-[260px] sm:min-h-[230px]"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={slide.id}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-500">
              <span className="h-px w-6 bg-gold-500" />
              {slide.eyebrow}
            </span>
            <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink-900 sm:text-xl">
              {slide.headline}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-[15px]">
              {slide.body}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Arrows (desktop only) */}
      <div className="mt-5 flex items-center justify-between border-t border-ink-300/60 pt-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Slide anterior"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-300 text-ink-700 transition-all hover:border-ink-900 hover:bg-ink-100 hover:text-ink-900"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
          {paused ? "En pausa" : "Auto"}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Slide siguiente"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-300 text-ink-700 transition-all hover:border-ink-900 hover:bg-ink-100 hover:text-ink-900"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
