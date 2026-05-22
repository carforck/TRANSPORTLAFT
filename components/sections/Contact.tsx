"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import { COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const company = String(fd.get("company") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const message = String(fd.get("message") ?? "");

    const subject = `Solicitud de diagnóstico — ${company || "Nuevo contacto"}`;
    const body =
      `Nombre: ${name}\r\n` +
      `Empresa: ${company}\r\n` +
      `Teléfono: ${phone}\r\n\r\n` +
      `Mensaje:\r\n${message}`;

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setSent(true);
      setLoading(false);
      form.reset();
    }, 600);
  };

  return (
    <section id="contacto" className="relative bg-ink-100 section">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-eyebrow">Contacto</span>
              <h2 className="display-2 mt-3 text-ink-900">
                Solicite una{" "}
                <span className="text-ink-500">reunión inicial.</span>
              </h2>
              <p className="lead mt-6">
                Presentamos un diagnóstico claro, una propuesta a la medida y un
                acompañamiento serio para fortalecer su cumplimiento.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-300/60 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-ink-900/15 hover:shadow-subtle"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-ink-900 transition-colors group-hover:bg-gold-500/10 group-hover:text-gold-500">
                  <Mail size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    Correo
                  </p>
                  <p className="text-sm font-semibold text-ink-900">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-ink-300/60 bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-ink-900">
                  <Linkedin size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    LinkedIn
                  </p>
                  <p className="text-sm font-semibold text-ink-900">
                    {COMPANY.linkedin}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-ink-300/60 bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-ink-900">
                  <MapPin size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    Cobertura
                  </p>
                  <p className="text-sm font-semibold text-ink-900">
                    {COMPANY.coverage}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-ink-300/60 bg-white p-6 shadow-subtle sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white">
                  <CalendarCheck size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink-900">
                    Solicitud de diagnóstico
                  </h3>
                  <p className="text-xs text-ink-500">
                    Respondemos en menos de 24 horas hábiles.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  label="Nombre completo"
                  placeholder="Su nombre"
                  required
                />
                <Field
                  name="company"
                  label="Empresa"
                  placeholder="Razón social"
                  required
                />
                <Field
                  name="phone"
                  label="Teléfono / WhatsApp"
                  placeholder="+57 ___ ___ ____"
                  type="tel"
                />
                <Field
                  name="email"
                  label="Correo corporativo"
                  placeholder="usted@empresa.com"
                  type="email"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-ink-500">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Cuéntenos brevemente sobre su empresa y la necesidad de cumplimiento."
                  className="w-full resize-none rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 transition focus:border-ink-900 focus:outline-none focus:ring-4 focus:ring-ink-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} /> Solicitud enviada
                  </>
                ) : (
                  <>
                    <Send size={16} /> Enviar solicitud
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[11px] leading-relaxed text-ink-500">
                Al enviar acepta nuestro tratamiento de datos personales para
                fines de contacto comercial.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-ink-500">
        {label}
        {required && <span className="ml-0.5 text-gold-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 transition focus:border-ink-900 focus:outline-none focus:ring-4 focus:ring-ink-100"
      />
    </div>
  );
}
