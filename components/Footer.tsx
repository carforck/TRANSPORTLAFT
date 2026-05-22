import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, SYSTEMS } from "@/lib/data";

const FOOTER_SERVICES = [
  { label: "SARLAFT", href: "#servicios" },
  { label: "RMS", href: "#servicios" },
  { label: "SAGRILAFT", href: "#servicios" },
  { label: "PTEE", href: "#servicios" },
];

const FOOTER_SUPPORT = [
  { label: "Política de tratamiento de datos", href: "#" },
  { label: "Términos y condiciones", href: "#" },
  { label: "PQRS", href: "#contacto" },
  { label: "Preguntas frecuentes", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#inicio" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image
                  src="/logo.webp"
                  alt={COMPANY.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="text-base font-semibold tracking-tight">
                transport<span className="text-gold-400">laft</span>{" "}
                <span className="text-sm font-medium text-white/55">s.a.s.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
              {COMPANY.slogan}. Asesoría jurídica y cumplimiento normativo
              especializada en el sector transporte en Colombia.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {SYSTEMS.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>

            <Link
              href="#contacto"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-400"
            >
              Solicitar diagnóstico
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/75 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-3 text-white/75 hover:text-gold-300"
                >
                  <Mail size={15} className="mt-0.5 text-gold-400" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Linkedin size={15} className="mt-0.5 text-gold-400" />
                {COMPANY.linkedin}
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <MapPin size={15} className="mt-0.5 text-gold-400" />
                Cobertura: {COMPANY.coverage}
              </li>
            </ul>

            <h4 className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Soporte
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_SUPPORT.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos
            reservados.
          </p>
          <p>
            Cumplimiento que <span className="text-gold-300">mueve</span> su
            empresa.
          </p>
        </div>
      </div>
    </footer>
  );
}
