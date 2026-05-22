import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = "https://transportlaft.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "TRANSPORTLAFT S.A.S. — Asesoría en SARLAFT, SAGRILAFT y PTEE para transporte",
    template: "%s · TRANSPORTLAFT",
  },
  description:
    "Cumplimiento que mueve su empresa. Asesoría jurídica y cumplimiento normativo SARLAFT, RMS, SAGRILAFT y PTEE para empresas del sector transporte en Colombia. Prevención del riesgo LA/FT/FP.",
  keywords: [
    "SARLAFT transporte",
    "SAGRILAFT",
    "PTEE",
    "RMS",
    "Cumplimiento normativo transporte",
    "Prevención LA/FT/FP",
    "Asesoría jurídica transporte Colombia",
    "Consultoría cumplimiento Colombia",
    "Riesgo sancionatorio transporte",
    "Matriz de riesgos transporte",
  ],
  authors: [{ name: "TRANSPORTLAFT S.A.S." }],
  creator: "TRANSPORTLAFT S.A.S.",
  publisher: "TRANSPORTLAFT S.A.S.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "TRANSPORTLAFT S.A.S.",
    title: "TRANSPORTLAFT S.A.S. — Cumplimiento que mueve su empresa",
    description:
      "Asesoría especializada SARLAFT, SAGRILAFT y PTEE para empresas de transporte en Colombia. Sistemas de cumplimiento prácticos, jurídicos y a la medida de su operación.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "TRANSPORTLAFT S.A.S.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRANSPORTLAFT S.A.S. — Cumplimiento que mueve su empresa",
    description: "Asesoría SARLAFT, SAGRILAFT y PTEE para transporte en Colombia.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CO"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TRANSPORTLAFT S.A.S.",
              image: `${siteUrl}/logo.webp`,
              url: siteUrl,
              description:
                "Asesoría jurídica y cumplimiento normativo SARLAFT, SAGRILAFT y PTEE para empresas del sector transporte en Colombia.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
              },
              areaServed: { "@type": "Country", name: "Colombia" },
              email: "contacto@transportlaft.com",
              serviceType: [
                "SARLAFT",
                "RMS",
                "SAGRILAFT",
                "PTEE",
                "Cumplimiento normativo transporte",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
