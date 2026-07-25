# Handoff: RentByte Landing Page

## Overview
Landing page corporativa para **RentByte**, empresa chilena de arriendo de equipos informáticos (computadores, notebooks, servidores) para empresas privadas (B2B) y organismos del Estado (B2G: licitaciones, convenios marco). CTA principal: solicitar cotización por email.

## About the Design Files
Los archivos de este paquete son **referencias de diseño creadas en HTML** — prototipos que muestran la apariencia y comportamiento previstos, NO código de producción para copiar directamente. La tarea es **recrear este diseño en el entorno del codebase destino** (React, Next.js, Vue, etc.) usando sus patrones y librerías establecidas — o, si aún no existe entorno, elegir el framework más apropiado (sugerencia: Next.js o Astro para una landing estática con buen SEO) e implementarlo ahí.

El archivo `RentByte Landing.dc.html` usa un formato de componente propietario: el markup relevante está dentro de `<x-dc>…</x-dc>` con estilos inline, y los datos (servicios, razones, pasos) están en la clase `Component` al final del archivo. Ignorar `support.js` y los tags `<sc-for>`/`<sc-if>` (equivalen a `.map()` y renderizado condicional).

## Fidelity
**High-fidelity (hifi)**: colores, tipografía, espaciados e interacciones son finales. Recrear píxel-perfect.

## Screens / Views

### Landing (una sola página, scroll vertical, max-width contenido 1200px, padding lateral 24px)

**1. Header (sticky)**
- Altura 68px, fondo `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`, borde inferior `#e7ebf2`, z-index 50.
- Izquierda: logo — cuadrado 30×30px radio 7px fondo accent con "R" blanca (Archivo 800, 16px) + wordmark "RentByte" (Archivo 700, 19px).
- Derecha: nav links "Servicios / Por qué RentByte / Proceso" (`#4a5568`, 15px, 500, gap 30px) + botón "Solicitar cotización" (fondo accent, blanco, 600, 15px, padding 10px 18px, radio 9px, hover `#0f3d8f`). Link a `mailto:contacto@rentbyte.cl`.

**2. Hero**
- Fondo: `linear-gradient(180deg, #f6f8fc 0%, #ffffff 100%)`. Grid 1.05fr / 0.95fr, gap 56px, padding 72px 24px 64px.
- Badge píldora: "Arriendo TI · B2B & B2G · Chile" — fondo `#eaf0fb`, borde `#d6e2f7`, texto accent 13px 600, punto de 7px color accent.
- H1: "Arriendo de equipos informáticos para empresas y el Estado" — Archivo 800, 54px, line-height 1.03, color `#10141c`, `text-wrap: balance`.
- Párrafo: 19px, lh 1.55, `#4a5568`, max-width 520px.
- Botones: primario "Solicitar cotización →" (accent, sombra `0 8px 24px -8px rgba(22,86,201,0.5)`, padding 14px 24px, radio 10px); secundario "Ver servicios" (blanco, borde `#d6dde8`, hover borde/texto accent).
- 3 checks: "✓ Soporte y mantención incluidos / ✓ Cumplimiento normativo / ✓ Contratos transparentes" (14px 500, check en accent).
- Columna derecha: imagen 4:3, radio 18px, borde `#e4e9f1`, sombra `0 30px 60px -30px rgba(16,20,28,0.3)`. Tarjeta flotante abajo-izquierda (left -20px, bottom -22px): chip "48h" 44×44px fondo `#eaf0fb` texto accent + "Propuesta en 48 horas" (Archivo 700 15px) / "Técnica y comercial, sin compromiso" (13px `#6b7688`).

**3. Franja de públicos** (dentro del hero, padding 8px 24px 40px)
- Grid de 4 celdas, borde `#e7ebf2`, radio 14px, separadores internos `#eef1f6`.
- Celdas: título Archivo 700 16px + subtítulo 13px `#6b7688`:
  Empresas/Sector privado · Instituciones Públicas/Organismos del Estado · Licitaciones/Procesos formales · Convenios Marco/Compra pública.

**4. Servicios** (`#services`, padding 84px 24px)
- Kicker uppercase 13px 700 letter-spacing 0.08em color accent: "SERVICIOS". H2 38px 800. Intro 17px `#4a5568`.
- Grid 2×2, gap 20px, margin-top 44px. Tarjetas: fondo blanco, borde `#e7ebf2`, radio 16px, padding 30px; hover: borde `#c9d6ec` + sombra `0 14px 30px -20px rgba(16,20,28,0.35)`. Icono en chip 46×46px fondo `#eaf0fb`, título 21px 700, cuerpo 15.5px `#556072`.
- Contenido (icono / título / cuerpo):
  1. 🖥️ Arriendo para empresas — Computadores y notebooks configurados según las necesidades de tu organización. Contratos flexibles con soporte y mantención incluida.
  2. 📋 Licitaciones y convenios marco — Participamos en licitaciones públicas y convenios marco, cumpliendo la normativa chilena para el arrendamiento de bienes informáticos.
  3. 🗄️ Infraestructura TI bajo demanda — Servidores, estaciones de trabajo y equipamiento especializado para proyectos de corto y mediano plazo.
  4. ⚙️ Implementación y configuración — Entregamos los equipos listos para operar: dominio, políticas de seguridad, software corporativo y perfiles de usuario.

**5. Por qué RentByte** (`#why`, sección oscura)
- Fondo `#0f1a2e`, texto blanco, padding 84px 24px. Grid 0.85fr / 1.15fr, gap 56px.
- Izquierda: kicker `#7fa8f5`, H2 36px "El respaldo de quien conoce el equipo por dentro", párrafo `#aab6cc`, imagen 16:11 radio 16px borde `#24324c`.
- Derecha: grid 2×2 con gap de 1px sobre fondo `#24324c` (efecto de líneas divisorias), radio 16px. Celdas fondo `#12203a`, padding 30px 26px: número (Archivo 800 15px `#7fa8f5`), título 19px 700 blanco, cuerpo 14.5px `#9fabc2`:
  01 Cumplimiento normativo · 02 Soporte dedicado · 03 Plazos a tu medida · 04 De CAPEX a OPEX (textos completos en el HTML).

**6. Proceso** (`#process`, padding 84px 24px)
- Encabezado centrado: kicker accent "PROCESO", H2 "Cómo trabajamos".
- Grid de 4 columnas, gap 20px: número Archivo 800 20px accent + línea horizontal 1px `#e7ebf2` que llena el resto, título 19px 700, cuerpo 15px `#556072`:
  01 Diagnóstico · 02 Propuesta · 03 Entrega e implementación · 04 Soporte continuo.

**7. Franja de alianzas** (condicional, prop `showPartners`)
- Fondo `#f8fafd`, bordes sup/inf `#e7ebf2`, padding 34px 24px, centrada: "En alianza con" (14px 600 `#6b7688`) + "Mejora Digital" · "Climatización Solar" (Archivo 700 20px `#2d3748`), separadas por punto de 5px `#cbd4e1`.

**8. CTA final** (`#contact`)
- Tarjeta radio 22px fondo `#0f1a2e` con imagen de fondo a opacity 0.22. Padding interno 68px 56px, grid 1.3fr/1fr.
- H2 40px blanco "Comienza tu cotización hoy", párrafo 18px `#b9c5da`.
- Botón accent (hover `#2f6fe0`), email visible `contacto@rentbyte.cl` (`#cdd8ea`), nota 13.5px `#8593ac`.

**9. Footer**
- Fondo blanco, borde superior `#e7ebf2`. Logo + descripción (max-width 320px, 14px `#6b7688`), links de nav (14px `#4a5568`).
- Barra legal: "© 2026 RentByte · Chile" / "Arriendo de equipos informáticos · B2B · B2G" (13px `#8593ac`).

## Interactions & Behavior
- Navegación por anchors con `scroll-behavior: smooth` (`#services`, `#why`, `#process`, `#contact`, `#top`).
- CTA = `mailto:contacto@rentbyte.cl` (header, hero, CTA final).
- Hovers: botones primarios oscurecen a `#0f3d8f` (o `#2f6fe0` en la sección oscura); botón secundario cambia borde+texto a accent; tarjetas de servicio elevan sombra y aclaran borde. Sin transiciones definidas — agregar `transition: all 150ms ease` es aceptable.
- Sin estados de carga/error ni formularios.
- **Responsive**: el prototipo es desktop-first (grids fijos de 2 y 4 columnas). Para producción: colapsar hero a 1 columna bajo ~960px, servicios y "por qué" a 1 columna bajo ~720px, franja de públicos y proceso a 2 columnas bajo ~900px y 1 bajo ~560px; nav móvil con menú hamburguesa; reducir H1 a ~36px en móvil.

## State Management
Sin estado dinámico. Tres valores configurables (props del prototipo):
- `accent`: color de marca, default `#1656c9`.
- `email`: email de contacto, default `contacto@rentbyte.cl`.
- `showPartners`: boolean, muestra/oculta la franja de alianzas (default true).
Los arreglos de contenido (audiences, services, reasons, steps) están como datos en la clase `Component` del HTML — extraerlos a constantes/CMS.

## Design Tokens
**Colores**
- Accent primario: `#1656c9` · hover oscuro `#0f3d8f` · hover claro (sobre oscuro) `#2f6fe0`
- Tinte accent: fondo `#eaf0fb`, borde `#d6e2f7`, accent claro `#7fa8f5`
- Texto: títulos `#10141c`/`#14181f` · cuerpo `#4a5568`/`#556072` · secundario `#6b7688` · terciario `#8593ac`
- Bordes: `#e7ebf2`, `#e4e9f1`, `#eef1f6`, `#d6dde8`
- Fondos: blanco, `#f6f8fc`, `#f8fafd`
- Sección oscura: fondo `#0f1a2e`, tarjeta `#12203a`, borde `#24324c`, textos `#aab6cc`/`#9fabc2`/`#b9c5da`

**Tipografía** (Google Fonts)
- Títulos/números/logo: **Archivo** 700–800, letter-spacing -0.02em
- Cuerpo/UI: **Public Sans** 400–700
- Escala: H1 54 · H2 36–40 · H3/tarjeta 19–21 · cuerpo 15–19 · small 13–14 · kicker 13 uppercase ls 0.08em

**Radios**: botones 9–11px · chips 7–11px · tarjetas 14–16px · imágenes 16–18px · CTA 22px · píldora 100px
**Sombras**: botón `0 8px 24px -8px rgba(22,86,201,0.5)` · imagen hero `0 30px 60px -30px rgba(16,20,28,0.3)` · tarjeta flotante `0 18px 40px -18px rgba(16,20,28,0.28)` · hover tarjeta `0 14px 30px -20px rgba(16,20,28,0.35)`
**Espaciado**: secciones 84px vertical · gaps de grid 20px · gaps internos de tarjeta 10–12px

## Assets
- Imágenes referenciadas desde el sitio actual (reemplazar por assets locales en producción):
  - `https://rentbyte.onrender.com/images/hero.jpg` (hero, 4:3)
  - `https://rentbyte.onrender.com/images/differentiators.jpg` (sección oscura, 16:11)
  - `https://rentbyte.onrender.com/images/cta.jpg` (fondo CTA, opacity 0.22)
- Iconos de servicios: emojis (🖥️ 📋 🗄️ ⚙️) — reemplazar por un set de iconos (Lucide/Heroicons) en producción si se prefiere.
- Logo: placeholder tipográfico (chip "R" + wordmark). Sustituir cuando exista logo real.

## Files
- `RentByte Landing.dc.html` — prototipo completo (markup con estilos inline + datos de contenido al final del archivo).
