# TRANSPORTLAFT S.A.S. — Landing

[![CI](https://github.com/carforck/TRANSPORTLAFT/actions/workflows/ci.yml/badge.svg)](https://github.com/carforck/TRANSPORTLAFT/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)

Landing oficial de **TRANSPORTLAFT S.A.S.**, consultora colombiana de cumplimiento normativo en transporte (SARLAFT · RMS · SAGRILAFT · PTEE). Construida en **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** + **Framer Motion**, lista para desplegar en **Vercel**.

## CI/CD

Cada push y PR a `main` ejecuta automáticamente en GitHub Actions:

1. `npm ci` — instalación reproducible
2. `npm run lint` — `next lint` (ESLint con preset Next.js)
3. `npx tsc --noEmit` — type-check estricto
4. `npm run build` — valida build de producción

El deploy a Vercel ocurre automáticamente al hacer merge a `main` (integración nativa GitHub ↔ Vercel).

## Requisitos

- Node.js ≥ 18.18
- npm ≥ 9

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # entorno local (0.0.0.0:3000)
npm run build      # build de producción
npm run start      # servir build en producción
```

El servidor de desarrollo escucha en `0.0.0.0:3000`, por lo que se ve desde otros dispositivos en la misma red:

- `http://localhost:3000`
- `http://<tu-ip-local>:3000` (ej. `http://192.168.1.20:3000`)

## Estructura

```
.
├── app/                    # App Router (layout + página + globals)
├── components/
│   ├── Header.tsx          # nav fija con scroll behavior
│   ├── Footer.tsx
│   ├── sections/           # secciones de la landing
│   │   ├── Hero.tsx        # hero + mapa Colombia + features
│   │   ├── Systems.tsx     # SARLAFT/RMS/SAGRILAFT/PTEE
│   │   ├── Methodology.tsx # método T-LAFT 5C + diferencia
│   │   ├── Risks.tsx       # riesgos prevenidos
│   │   ├── Plans.tsx       # 3 planes de servicio
│   │   ├── IdealClients.tsx
│   │   └── Contact.tsx     # formulario + datos contacto
│   └── ui/                 # primitivos (ColombiaMap, WaveCorner, Reveal)
├── lib/
│   ├── data.ts             # contenido de todas las secciones
│   └── utils.ts
├── public/
│   └── logo.webp           # logo oficial
├── styles/                 # (reservado para tokens externos)
├── DESIGN_SYSTEM.md        # paleta, tipografía, tokens
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Diseño

Colores, tipografía y concepto visual están detallados en `DESIGN_SYSTEM.md`. La paleta principal es **navy + dorado**, replicando el estilo de las piezas corporativas originales.

## Despliegue en Vercel

1. Crear repositorio Git y subir el código.
2. Importar en [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detectado).
4. Sin variables de entorno necesarias por ahora.
5. Deploy.

Dominio sugerido: `transportlaft.com` (apuntar DNS a Vercel).

## SEO

- Metadata localizada (`es-CO`).
- Open Graph + Twitter Cards configurados.
- JSON-LD `ProfessionalService` con cobertura Colombia.
- Keywords objetivo: SARLAFT transporte, SAGRILAFT, PTEE, cumplimiento normativo transporte Colombia.
