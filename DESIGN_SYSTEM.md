# TRANSPORTLAFT S.A.S. — Sistema de Diseño

> Lenguaje visual estilo **Apple-Compliance**: minimal, blanco dominante, tipografía Geist, acentos navy + dorado refinado.

---

## 1. Identidad

**Marca:** TRANSPORTLAFT S.A.S. — Consultores
**Slogan:** *Cumplimiento que mueve su empresa*
**Sistemas:** SARLAFT · RMS · SAGRILAFT · PTEE
**Mood:** profesional · minimal · premium · confiable

---

## 2. Paleta — Apple-Compliance

### Backgrounds

| Token            | HEX        | Uso                            |
| ---------------- | ---------- | ------------------------------ |
| `bg-base`        | `#FFFFFF`  | Fondo principal                |
| `bg-surface`     | `#F5F5F7`  | Apple gray para separar bloques|
| `bg-elevated`    | `#FAFAFA`  | Cards / surface elevada        |

### Ink (textos y bordes)

| Token       | HEX        | Uso                            |
| ----------- | ---------- | ------------------------------ |
| `ink-900`   | `#1D1D1F`  | Texto principal (Apple black)  |
| `ink-700`   | `#3A3A3C`  | Texto secundario fuerte        |
| `ink-500`   | `#86868B`  | Texto terciario / leyendas     |
| `ink-300`   | `#D2D2D7`  | Bordes finos                   |
| `ink-100`   | `#F5F5F7`  | Surface                        |

### Navy (acento profundo)

| Token       | HEX        | Uso                            |
| ----------- | ---------- | ------------------------------ |
| `navy-900`  | `#0A1230`  | Footer / bloques dark          |
| `navy-800`  | `#0F1B3D`  | CTA dark, marca                |

### Dorado refinado (acento marca)

| Token       | HEX        | Uso                            |
| ----------- | ---------- | ------------------------------ |
| `gold-300`  | `#D8B777`  | Brillo suave                   |
| `gold-400`  | `#C49A4A`  | Hover gold                     |
| `gold-500`  | `#9F7728`  | **Primario** — líneas, CTAs    |
| `gold-600`  | `#7A5D1F`  | Sombras dorado                 |
| `gold-100`  | `#F4ECD8`  | Highlights muy suaves          |

**Uso del dorado:** solo en CTAs principales, líneas decorativas bajo eyebrows, hover de links, y detalles. **Nunca** en grandes superficies.

---

## 3. Tipografía — Geist

**Única familia:** [Geist Sans](https://vercel.com/font) (oficial Vercel, look SF Pro).
**Mono opcional:** Geist Mono para detalles técnicos.

```css
font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont,
             "SF Pro Display", ui-sans-serif, system-ui, sans-serif;
font-feature-settings: "ss01", "cv01", "cv11";
```

### Jerarquía

| Estilo       | Clase                  | Tamaño            | Peso | Tracking   |
| ------------ | ---------------------- | ----------------- | ---- | ---------- |
| Display 1    | `.display-1`           | clamp 40-80 px    | 600  | -0.04em    |
| Display 2    | `.display-2`           | clamp 32-56 px    | 600  | -0.025em   |
| Display 3    | `.display-3`           | clamp 24-36 px    | 600  | -0.015em   |
| Lead         | `.lead`                | 18 px             | 400  | normal     |
| Body         | `text-base` (16)       | 16 px             | 400  | normal     |
| Caption      | `text-xs/sm` (12-14)   | 12-14 px          | 500  | 0.02em     |
| Eyebrow      | `.section-eyebrow`     | 11 px             | 600  | 0.2em      |

### Reglas
- **Tracking apretado** en titulares (`-0.025em` o más). Característica Apple.
- **Cero serifs.** Geist en todo.
- **Pesos:** 400, 500, 600 y 700 — sin uso de 800-900 (demasiado pesado para minimal).

---

## 4. Componentes — patterns

### Botones (todos `rounded-full`, padding generoso)

| Variante     | Background           | Texto       | Uso                    |
| ------------ | -------------------- | ----------- | ---------------------- |
| `btn-primary`| `ink-900`            | white       | CTA principal          |
| `btn-gold`   | `gold-500`           | white       | CTA destacado de marca |
| `btn-ghost`  | white + border 300   | `ink-900`   | CTA secundario         |
| `btn-link`   | transparent          | `ink-900`   | Inline / "Ver más"     |

### Cards

```html
<article class="card card-hover">
  ...
</article>
```

- `border-ink-300/60` (apenas perceptible)
- `rounded-3xl`
- `shadow-subtle` por defecto, `shadow-card` en hover
- Padding `p-7` o `p-8`

### Chips

- Pequeñas etiquetas blancas con borde claro, uppercase, tracking amplio.
- Ej: `SARLAFT`, `SAGRILAFT`.

### Espaciado entre secciones

- Móvil: `py-20` (80 px)
- Tablet: `py-28`
- Desktop: `py-32` (128 px) ← Apple-like air

---

## 5. Iconografía

- **Librería:** Lucide React.
- Stroke `1.5` para iconos grandes, `1.75` para medianos.
- Color: heredan `currentColor` o `ink-700`. Dorado solo en estados especiales.

---

## 6. Animación

- Todas las apariciones: `cubic-bezier(0.22, 1, 0.36, 1)` (Apple ease).
- Duraciones: 300-700 ms (nunca > 1 s).
- `framer-motion` con `whileInView` para revelar en scroll.
- Hover en cards: `-translate-y-1` y aumento de sombra.
- Sin parallax ni efectos pesados.

---

## 7. Sombras

| Token        | Uso                              |
| ------------ | -------------------------------- |
| `subtle`     | Cards en reposo                  |
| `card`       | Cards en hover                   |
| `elevated`   | Elementos flotantes (form, nav) |
| `glow`       | Solo sobre acento dorado         |
| `ring`       | Ring 1px sutil                   |

Apple no usa sombras dramáticas — todas son **bajas y dispersas**.

---

## 8. Reglas de oro

1. **Blanco siempre gana.** Cuando duden, fondo blanco.
2. **Dorado < 5% de la superficie visible.** Es un acento, no un protagonista.
3. **Navy oscuro solo en footer y CTAs invertidos.**
4. **Cero gradientes pesados.** Solo sutiles, lineales, en dos tonos.
5. **Tracking negativo en titulares**, normal en cuerpo.
6. **Sin emojis** en la UI.
7. **Sombras siempre suaves** (Apple style).
