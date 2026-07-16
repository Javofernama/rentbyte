import type { Metadata } from "next"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  FileText,
  Building2,
  Clock,
  Headphones,
  ArrowRight,
  Mail,
  Banknote,
  Settings,
  ServerCog,
} from "lucide-react"
import Image from "next/image"

const SITE_URL = "https://rentbyte.cl"

export const metadata: Metadata = {
  title: "Arriendo de Equipos Informáticos para Empresas y Estado | RentByte",
  description:
    "Arriendo de computadores, notebooks y servidores para empresas, instituciones públicas y licitaciones. Soluciones tecnológicas B2B con soporte, mantención y cumplimiento normativo. Cotización sin compromiso.",
  keywords: [
    "arriendo equipos informaticos empresas",
    "arriendo computadores empresas chile",
    "arriendo notebooks instituciones publicas",
    "licitacion arriendo computadores",
    "arriendo equipamiento tecnologico estado chile",
    "renta computadores corporate",
    "arriendo servidores empresas",
    "soluciones tecnologicas b2b chile",
    "arriendo hardware empresarial",
    "arriendo equipos ti santiago",
  ],
  openGraph: {
    title: "RentByte - Arriendo de Equipos Informáticos para Empresas y Estado",
    description:
      "Soluciones de arriendo tecnológico B2B y B2G. Equipos, soporte y cumplimiento normativo para empresas e instituciones públicas.",
    url: SITE_URL,
    siteName: "RentByte",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RentByte - Arriendo de Equipos Informáticos para Empresas y Estado",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
}

const services = [
  {
    icon: Building2,
    title: "Arriendo para Empresas",
    description:
      "Equipos de cómputo configurados para las necesidades de tu organización. Contratos flexibles con soporte y mantención incluida.",
  },
  {
    icon: FileText,
    title: "Licitaciones y Convenios Marco",
    description:
      "Participamos en licitaciones públicas y convenios marco. Cumplimos con la normativa chilena para arrendamiento de bienes informáticos.",
  },
  {
    icon: ServerCog,
    title: "Infraestructura TI bajo demanda",
    description:
      "Servidores, estaciones de trabajo y equipamiento especializado para proyectos de corto y mediano plazo.",
  },
  {
    icon: Settings,
    title: "Implementación y Configuración",
    description:
      "Entregamos los equipos listos para operar: dominio, políticas de seguridad, software corporativo y perfiles de usuario.",
  },
]

const differentiators = [
  {
    icon: Shield,
    title: "Cumplimiento normativo",
    description:
      "Contratos transparentes, facturación formal y documentación completa para auditorías y licitaciones públicas.",
  },
  {
    icon: Headphones,
    title: "Soporte dedicado",
    description:
      "Un equipo técnico asignado a tu organización. Resolución de incidencias y reemplazo de equipos sin interrumpir tus operaciones.",
  },
  {
    icon: Clock,
    title: "Plazos adaptados a tu proyecto",
    description:
      "Desde semanas hasta años. Los plazos de arriendo se ajustan al ciclo de vida de tu proyecto o necesidad operativa.",
  },
  {
    icon: Banknote,
    title: "Optimización de CAPEX a OPEX",
    description:
      "Elimina la inversión inicial en hardware. Transforma gastos de capital en gastos operacionales predecibles.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Analizamos los requerimientos tecnológicos de tu organización o licitación.",
  },
  {
    step: "02",
    title: "Propuesta",
    description: "Presentamos una cotización detallada con especificaciones, plazos y condiciones.",
  },
  {
    step: "03",
    title: "Entrega e implementación",
    description: "Configuramos y desplegamos los equipos en tus instalaciones o de forma remota.",
  },
  {
    step: "04",
    title: "Soporte continuo",
    description: "Mantención, monitoreo y reemplazo durante toda la vigencia del contrato.",
  },
]

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
    <Image
      src="/images/hero.jpg"
      alt=""
      fill
      sizes="100vw"
      quality={80}
      priority
      className="opacity-15 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-brand-background/70 via-brand-background/85 to-brand-background" />
  </div>
)

export default function RentBytePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-brand-background text-brand-foreground relative noise-bg">
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          aria-label="Presentación de RentByte"
          className="relative flex items-center justify-center min-h-[85vh] md:min-h-screen py-20 overflow-hidden"
        >
          <HeroBackground />
          <div className="container text-center relative z-10">
            <ScrollReveal animationClass="animate-rb-slideInUp">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-card/60 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">
                  B2B &amp; B2G &middot; Soluciones Tecnológicas
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal animationClass="animate-rb-slideInUp" delay="delay-100">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Arriendo de equipos informáticos{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-blue-400 to-cyan-300">
                  para empresas y el Estado
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animationClass="animate-rb-slideInUp" delay="delay-200">
              <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4">
                Computadores, notebooks y servidores configurados para tu organización.
                <br className="hidden sm:block" />
                Soporte incluido. Contratos transparentes.
              </p>
            </ScrollReveal>
            <ScrollReveal animationClass="animate-rb-slideInUp" delay="delay-300">
              <p className="text-sm text-slate-500 max-w-2xl mx-auto mb-10">
                Atendemos empresas privadas, instituciones públicas y participamos en licitaciones y convenios marco en todo Chile.
              </p>
            </ScrollReveal>
            <ScrollReveal animationClass="animate-rb-slideInUp" delay="delay-400">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contacto@rentbyte.cl"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary-hover transition-colors duration-200"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-brand-border rounded-lg text-slate-300 hover:border-brand-primary/50 hover:text-white transition-colors duration-200"
                >
                  Ver servicios
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-8 border-y border-brand-border/40 bg-brand-card/20" aria-hidden="true">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-slate-500 uppercase tracking-widest font-medium">
              <span>Empresas</span>
              <span className="hidden sm:inline text-brand-border">|</span>
              <span>Instituciones Públicas</span>
              <span className="hidden sm:inline text-brand-border">|</span>
              <span>Licitaciones</span>
              <span className="hidden sm:inline text-brand-border">|</span>
              <span>Convenios Marco</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-20 md:py-28"
        >
          <div className="container">
            <ScrollReveal animationClass="animate-rb-fadeIn" className="text-center mb-16 md:mb-20">
              <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
                Servicios
              </p>
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              >
                Soluciones de arriendo tecnológico{" "}
                <span className="text-brand-primary">a medida</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Diseñamos contratos de arriendo que se adaptan a la escala, los plazos y los requerimientos de cada organización.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ScrollReveal
                  key={service.title}
                  animationClass="animate-rb-slideInUp"
                  delay={`delay-${index * 100}` as `delay-${number}`}
                  className="h-full"
                >
                  <Card className="bg-brand-card border-brand-border h-full transition-all duration-300 hover:border-brand-primary/50 hover:shadow-glow-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-2.5 bg-brand-secondary rounded-lg">
                          <service.icon
                            className="w-6 h-6 text-brand-primary"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>
                        <CardTitle className="text-lg font-semibold text-brand-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider my-8 md:my-12" aria-hidden="true" />

        {/* Differentiators Section */}
        <section
          id="differentiators"
          aria-labelledby="differentiators-heading"
          className="relative py-20 md:py-28 bg-brand-card/30 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <Image
              src="/images/differentiators.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={60}
              className="opacity-10 object-cover"
            />
            <div className="absolute inset-0 bg-brand-background/80" />
          </div>
          <div className="container">
            <ScrollReveal animationClass="animate-rb-fadeIn" className="text-center mb-16 md:mb-20">
              <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
                Diferenciadores
              </p>
              <h2
                id="differentiators-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              >
                ¿Por qué las organizaciones{" "}
                <span className="text-brand-primary">eligen RentByte</span>?
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Combina flexibilidad operacional con el respaldo de un proveedor que entiende las necesidades del sector público y privado.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {differentiators.map((point, index) => (
                <ScrollReveal
                  key={point.title}
                  animationClass="animate-rb-slideInUp"
                  delay={`delay-${index * 100}` as `delay-${number}`}
                  className="h-full"
                >
                  <div className="flex items-start gap-4 p-6 bg-brand-card border border-brand-border rounded-lg h-full hover:border-brand-primary/50 transition-colors duration-300">
                    <div className="flex-shrink-0 mt-0.5 p-2 bg-brand-secondary rounded-lg">
                      <point.icon
                        className="w-5 h-5 text-brand-primary"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-brand-foreground mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider my-8 md:my-12" aria-hidden="true" />

        {/* Process Section */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className="py-20 md:py-28"
        >
          <div className="container">
            <ScrollReveal animationClass="animate-rb-fadeIn" className="text-center mb-16 md:mb-20">
              <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
                Proceso
              </p>
              <h2
                id="process-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              >
                Cómo trabajamos
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Un proceso claro y eficiente, diseñado para organizaciones que requieren agilidad y trazabilidad.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ScrollReveal
                  key={step.step}
                  animationClass="animate-rb-slideInUp"
                  delay={`delay-${index * 100}` as `delay-${number}`}
                  className="h-full"
                >
                  <div className="text-center h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-secondary text-brand-primary font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-brand-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider-subtle my-8 md:my-12 opacity-50" aria-hidden="true" />

        {/* Contact CTA Section */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <Image
              src="/images/cta.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={60}
              className="opacity-10 object-cover"
            />
            <div className="absolute inset-0 bg-brand-background/80" />
          </div>
          <div className="container text-center">
            <ScrollReveal animationClass="animate-rb-fadeIn">
              <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
                Contacto
              </p>
              <h2
                id="contact-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-brand-foreground mb-4"
              >
                Comienza tu cotización hoy
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
                Cuéntanos las necesidades de tu organización y te presentemos una propuesta técnica y comercial en menos de 48 horas.
              </p>
              <a
                href="mailto:contacto@rentbyte.cl"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-hover transition-colors duration-200 font-medium text-lg"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                contacto@rentbyte.cl
              </a>
              <p className="mt-6 text-sm text-slate-500">
                Respondemos consultas de empresas, instituciones públicas y procesos de licitación.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-10 border-t border-brand-border/50 bg-brand-background"
        role="contentinfo"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-brand-foreground tracking-wide">
                RentByte
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Soluciones tecnológicas de arriendo para empresas e instituciones públicas.
              </p>
            </div>
            <nav aria-label="Navegación del pie de página" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a
                href="#services"
                className="text-xs text-slate-500 hover:text-brand-primary transition-colors"
              >
                Servicios
              </a>
              <a
                href="#differentiators"
                className="text-xs text-slate-500 hover:text-brand-primary transition-colors"
              >
                Diferenciadores
              </a>
              <a
                href="#process"
                className="text-xs text-slate-500 hover:text-brand-primary transition-colors"
              >
                Proceso
              </a>
              <a
                href="#contact"
                className="text-xs text-slate-500 hover:text-brand-primary transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>
          <div className="mt-8 pt-6 border-t border-brand-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} RentByte &middot; Chile
            </p>
            <p className="text-xs text-slate-600">
              Arriendo de equipos informáticos &middot; B2B &middot; B2G
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
