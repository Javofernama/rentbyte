import type { Metadata } from "next"
import {
  ArrowRight,
  Check,
  ClipboardList,
  Database,
  Mail,
  Menu,
  Monitor,
  Settings,
} from "lucide-react"

const SITE_URL = "https://rentbyte.cl"
const EMAIL = "contacto@rentbyte.cl"
const MAILTO = `mailto:${EMAIL}`

export const metadata: Metadata = {
  title: "Arriendo de Computadores, Notebooks y Servidores en Chile",
  description:
    "Arriendo de computadores, notebooks, servidores y equipamiento TI para empresas, instituciones públicas, licitaciones y convenios marco en Chile. Solicita cotización.",
  keywords: [
    "arriendo equipos informaticos empresas",
    "arriendo computadores empresas chile",
    "arriendo notebooks instituciones publicas",
    "arriendo notebooks empresas chile",
    "licitacion arriendo computadores",
    "arriendo equipamiento tecnologico estado chile",
    "arriendo computadores para empresas",
    "arriendo servidores empresas",
    "arriendo infraestructura ti chile",
    "soluciones tecnologicas b2b chile",
    "convenio marco arriendo computadores",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "RentByte - Arriendo de Computadores, Notebooks y Servidores en Chile",
    description:
      "Arriendo de equipos informáticos B2B y B2G para empresas, instituciones públicas, licitaciones y convenios marco en Chile.",
    url: SITE_URL,
    siteName: "RentByte",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RentByte - Arriendo de computadores, notebooks y servidores en Chile",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
}

const navItems = [
  { label: "Servicios", href: "#services" },
  { label: "Por qué RentByte", href: "#why" },
  { label: "Proceso", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

const audiences = [
  {
    title: "Empresas",
    subtitle: "Sector privado",
  },
  {
    title: "Instituciones Públicas",
    subtitle: "Organismos del Estado",
  },
  {
    title: "Licitaciones",
    subtitle: "Procesos formales",
  },
  {
    title: "Convenios Marco",
    subtitle: "Compra pública",
  },
]

const services = [
  {
    icon: Monitor,
    title: "Arriendo para empresas",
    description:
      "Computadores y notebooks configurados según las necesidades de tu organización. Contratos flexibles con soporte y mantención incluida.",
  },
  {
    icon: ClipboardList,
    title: "Licitaciones y convenios marco",
    description:
      "Participamos en licitaciones públicas y convenios marco, cumpliendo la normativa chilena para el arrendamiento de bienes informáticos.",
  },
  {
    icon: Database,
    title: "Infraestructura TI bajo demanda",
    description:
      "Servidores, estaciones de trabajo y equipamiento especializado para proyectos de corto y mediano plazo.",
  },
  {
    icon: Settings,
    title: "Implementación y configuración",
    description:
      "Entregamos los equipos listos para operar: dominio, políticas de seguridad, software corporativo y perfiles de usuario.",
  },
]

const reasons = [
  {
    number: "01",
    title: "Cumplimiento normativo",
    description:
      "Contratos transparentes, facturación formal y documentación completa para auditorías y licitaciones públicas.",
  },
  {
    number: "02",
    title: "Soporte dedicado",
    description:
      "Un equipo técnico asignado a tu organización, con resolución de incidencias y reemplazo de equipos para mantener la continuidad operativa.",
  },
  {
    number: "03",
    title: "Plazos a tu medida",
    description:
      "Desde semanas hasta años. Los plazos de arriendo se ajustan al ciclo de vida de tu proyecto o necesidad operativa.",
  },
  {
    number: "04",
    title: "De CAPEX a OPEX",
    description:
      "Elimina la inversión inicial en hardware y transforma gastos de capital en gastos operacionales predecibles.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos los requerimientos tecnológicos de tu organización o licitación.",
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Presentamos una cotización detallada con especificaciones, plazos y condiciones.",
  },
  {
    number: "03",
    title: "Entrega e implementación",
    description: "Configuramos y desplegamos los equipos en tus instalaciones o de forma remota.",
  },
  {
    number: "04",
    title: "Soporte continuo",
    description: "Mantención, monitoreo y reemplazo durante toda la vigencia del contrato.",
  },
]

const faqs = [
  {
    question: "¿RentByte arrienda computadores y notebooks para empresas en Chile?",
    answer:
      "Sí. RentByte entrega computadores y notebooks configurados para empresas privadas, instituciones públicas y proyectos con requerimientos técnicos específicos en Chile.",
  },
  {
    question: "¿El arriendo incluye soporte y mantención de los equipos?",
    answer:
      "Sí. Los contratos consideran soporte técnico, mantención y continuidad operativa durante la vigencia del arriendo, según el alcance acordado en la propuesta.",
  },
  {
    question: "¿Participan en licitaciones públicas y convenios marco?",
    answer:
      "RentByte puede preparar propuestas técnicas y comerciales para licitaciones, procesos formales de compra pública y requerimientos asociados a convenios marco.",
  },
  {
    question: "¿Qué equipos informáticos se pueden arrendar?",
    answer:
      "El servicio cubre computadores, notebooks, servidores, estaciones de trabajo e infraestructura TI bajo demanda para proyectos de corto, mediano y largo plazo.",
  },
]

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 text-[#10141c]" aria-label="RentByte">
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[#1656c9] font-display text-base font-extrabold text-white tracking-[-0.02em]">
        R
      </span>
      <span className="font-display text-[19px] font-bold tracking-[-0.02em]">
        RentByte
      </span>
    </span>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 h-[68px] border-b border-[#e7ebf2] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="shrink-0" aria-label="Ir al inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-[30px] min-[960px]:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={MAILTO}
            className="rounded-[9px] bg-[#1656c9] px-[18px] py-2.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#0f3d8f]"
          >
            Solicitar cotización
          </a>
        </nav>

        <details className="group relative min-[960px]:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[9px] border border-[#d6dde8] bg-white text-[#10141c] marker:hidden">
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Abrir navegación</span>
          </summary>
          <nav className="absolute right-0 top-12 w-[240px] rounded-2xl border border-[#e7ebf2] bg-white p-3 shadow-[0_18px_40px_-18px_rgba(16,20,28,0.28)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#4a5568] hover:bg-[#f6f8fc] hover:text-[#1656c9]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MAILTO}
              className="mt-2 block rounded-[9px] bg-[#1656c9] px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0f3d8f]"
            >
              Solicitar cotización
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}

export default function RentBytePage() {
  return (
    <div id="top" className="min-h-dvh bg-white font-sans text-[#10141c]">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#f6f8fc] to-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-16 pt-[72px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6e2f7] bg-[#eaf0fb] px-3.5 py-2 text-[13px] font-semibold text-[#1656c9]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#1656c9]" />
                Arriendo TI · B2B &amp; B2G · Chile
              </div>

              <h1 className="mt-6 max-w-[620px] text-balance font-display text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#10141c] sm:text-[46px] lg:text-[54px] lg:leading-[1.03]">
                Arriendo de equipos informáticos para empresas y el Estado
              </h1>

              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.55] text-[#4a5568] sm:text-[19px]">
                Computadores, notebooks y servidores configurados para tu organización.
                Soporte incluido, contratos transparentes y cumplimiento normativo para
                procesos privados y públicos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAILTO}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#1656c9] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(22,86,201,0.5)] transition-colors duration-150 hover:bg-[#0f3d8f]"
                >
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-[10px] border border-[#d6dde8] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#2d3748] transition-all duration-150 hover:border-[#1656c9] hover:text-[#1656c9]"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#4a5568]">
                {["Soporte y mantención incluidos", "Cumplimiento normativo", "Contratos transparentes"].map(
                  (item) => (
                    <span key={item} className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-[#1656c9]" aria-hidden="true" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
              <div className="aspect-[4/3] overflow-hidden rounded-[18px] border border-[#e4e9f1] bg-[#eaf0fb] shadow-[0_30px_60px_-30px_rgba(16,20,28,0.3)]">
                <img
                  src="https://rentbyte.onrender.com/images/hero.jpg"
                  alt="Equipos informáticos preparados para arriendo corporativo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-[22px] left-4 flex items-center gap-3 rounded-2xl border border-[#e7ebf2] bg-white p-4 shadow-[0_18px_40px_-18px_rgba(16,20,28,0.28)] sm:-left-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#eaf0fb] font-display text-[15px] font-extrabold text-[#1656c9]">
                  48h
                </span>
                <span>
                  <strong className="block font-display text-[15px] font-bold tracking-[-0.02em] text-[#10141c]">
                    Propuesta en 48 horas
                  </strong>
                  <span className="text-[13px] text-[#6b7688]">
                    Técnica y comercial, sin compromiso
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-2">
            <div className="grid overflow-hidden rounded-[14px] border border-[#e7ebf2] bg-[#eef1f6] min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
              {audiences.map((audience) => (
                <div key={audience.title} className="bg-white px-5 py-5">
                  <h2 className="font-display text-base font-bold tracking-[-0.02em] text-[#10141c]">
                    {audience.title}
                  </h2>
                  <p className="mt-1 text-[13px] text-[#6b7688]">{audience.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-[84px]" aria-labelledby="services-heading">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">
              Servicios
            </p>
            <div className="mt-3 max-w-[720px]">
              <h2
                id="services-heading"
                className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Soluciones de arriendo tecnológico a medida
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Diseñamos contratos de arriendo que se adaptan a la escala, los plazos
                y los requerimientos técnicos de cada organización.
              </p>
            </div>

            <div className="mt-11 grid gap-5 min-[720px]:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#e7ebf2] bg-white p-[30px] transition-all duration-150 hover:border-[#c9d6ec] hover:shadow-[0_14px_30px_-20px_rgba(16,20,28,0.35)]"
                >
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[11px] bg-[#eaf0fb] text-[#1656c9]">
                    <service.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-[21px] font-bold tracking-[-0.02em] text-[#14181f]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[#556072]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-[#0f1a2e] px-6 py-[84px]" aria-labelledby="why-heading">
          <div className="mx-auto grid max-w-[1200px] gap-12 min-[720px]:grid-cols-[0.85fr_1.15fr] min-[720px]:gap-14">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">
                Por qué RentByte
              </p>
              <h2
                id="why-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[36px]"
              >
                El respaldo de quien conoce el equipo por dentro
              </h2>
              <p className="mt-5 text-[17px] leading-[1.65] text-[#aab6cc]">
                Acompañamos a empresas e instituciones públicas con una operación TI
                clara, documentada y preparada para responder ante contingencias.
              </p>
              <div className="mt-8 aspect-[16/11] overflow-hidden rounded-2xl border border-[#24324c] bg-[#12203a]">
                <img
                  src="https://rentbyte.onrender.com/images/differentiators.jpg"
                  alt="Especialista revisando hardware de equipos informáticos"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid overflow-hidden rounded-2xl bg-[#24324c] min-[560px]:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.number} className="bg-[#12203a] p-[30px_26px]">
                  <p className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-[#7fa8f5]">
                    {reason.number}
                  </p>
                  <h3 className="mt-4 font-display text-[19px] font-bold tracking-[-0.02em] text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[#9fabc2]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-6 py-[84px]" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[640px] text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">
                Proceso
              </p>
              <h2
                id="process-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Cómo trabajamos
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Un proceso claro y eficiente para organizaciones que requieren agilidad,
                trazabilidad y una propuesta técnica consistente.
              </p>
            </div>

            <div className="mt-11 grid gap-5 min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
              {processSteps.map((step) => (
                <article key={step.number}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-extrabold tracking-[-0.02em] text-[#1656c9]">
                      {step.number}
                    </span>
                    <span className="h-px flex-1 bg-[#e7ebf2]" />
                  </div>
                  <h3 className="mt-6 font-display text-[19px] font-bold tracking-[-0.02em] text-[#14181f]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#556072]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f8fafd] px-6 py-[84px]" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-[1200px] gap-10 min-[900px]:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">
                Preguntas frecuentes
              </p>
              <h2
                id="faq-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Respuestas rápidas sobre arriendo TI en Chile
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Información clave para equipos de compras, operaciones y TI que buscan
                arriendo de computadores, notebooks, servidores o infraestructura bajo demanda.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#e7ebf2] bg-white p-5 transition-all duration-150 open:border-[#c9d6ec] open:shadow-[0_14px_30px_-20px_rgba(16,20,28,0.25)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-[18px] font-bold tracking-[-0.02em] text-[#14181f] marker:hidden">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf0fb] text-[#1656c9] transition-transform duration-150 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15.5px] leading-[1.65] text-[#556072]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e7ebf2] bg-[#f8fafd] px-6 py-[34px]" aria-label="Alianzas">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <span className="text-sm font-semibold text-[#6b7688]">En alianza con</span>
            <span className="hidden h-[5px] w-[5px] rounded-full bg-[#cbd4e1] sm:block" />
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-[#2d3748]">
                Mejora Digital
              </span>
              <span className="hidden h-[5px] w-[5px] rounded-full bg-[#cbd4e1] sm:block" />
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-[#2d3748]">
                Climatización Solar
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-[84px]" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px] bg-[#0f1a2e]">
            <div className="relative grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.3fr_1fr] lg:px-14 lg:py-[68px]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.22]"
                style={{ backgroundImage: "url(https://rentbyte.onrender.com/images/cta.jpg)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <h2
                  id="contact-heading"
                  className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[40px]"
                >
                  Comienza tu cotización hoy
                </h2>
                <p className="mt-4 max-w-[620px] text-[18px] leading-[1.6] text-[#b9c5da]">
                  Cuéntanos las necesidades de tu organización y prepararemos una
                  propuesta técnica y comercial en menos de 48 horas.
                </p>
              </div>
              <div className="relative flex flex-col items-start justify-center lg:items-end">
                <a
                  href={MAILTO}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#1656c9] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(22,86,201,0.5)] transition-colors duration-150 hover:bg-[#2f6fe0]"
                >
                  Solicitar cotización
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={MAILTO} className="mt-4 text-[15px] font-semibold text-[#cdd8ea] hover:text-white">
                  {EMAIL}
                </a>
                <p className="mt-3 max-w-[280px] text-left text-[13.5px] leading-[1.55] text-[#8593ac] lg:text-right">
                  Respondemos consultas de empresas, instituciones públicas y procesos de licitación.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7ebf2] bg-white px-6 py-10" role="contentinfo">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[320px]">
              <Logo />
              <p className="mt-4 text-sm leading-[1.65] text-[#6b7688]">
                Soluciones de arriendo de equipos informáticos para empresas privadas,
                organismos del Estado y procesos de compra pública.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Navegación del pie de página">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]"
              >
                Contacto
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#e7ebf2] pt-6 text-[13px] text-[#8593ac] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 RentByte · Chile</p>
            <p>Arriendo de equipos informáticos · B2B · B2G</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
