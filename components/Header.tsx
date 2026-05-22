"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-300/50 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-[72px]">
        <Link
          href="#inicio"
          className="flex items-center gap-2.5 group"
          aria-label={COMPANY.name}
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-ink-300/60 transition-transform group-hover:scale-105">
            <Image
              src="/logo.webp"
              alt={COMPANY.name}
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-ink-900">
            transport<span className="text-gold-500">laft</span>
            <span className="ml-1 text-[10px] font-medium uppercase tracking-[0.15em] text-ink-500">
              s.a.s.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contacto"
          className="hidden btn-primary lg:inline-flex !py-2 !px-4 !text-[13px]"
        >
          Solicitar diagnóstico
          <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-300 text-ink-900 transition-colors hover:bg-ink-100 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-b border-ink-300/50 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Solicitar diagnóstico
            <ArrowUpRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
