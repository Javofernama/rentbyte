import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Zap, TrendingUp, ShieldCheck, Mail, Sparkles, Wrench, Briefcase, Truck, ThumbsUp } from "lucide-react"
import Image from "next/image"

const rentalBenefits = [
  {
    icon: TrendingUp,
    title: "Ahorro sin inversión inicial",
    description: "Evita grandes desembolsos y accede a tecnología de punta pagando solo por el uso.",
  },
  {
    icon: Cpu,
    title: "Equipos de alto rendimiento",
    description: "Siempre actualizados, listos para enfrentar cualquier tarea, proyecto o idea.",
  },
  {
    icon: Briefcase, // Más genérico para freelance, empresas, producción
    title: "Ideal para múltiples usos",
    description: "Freelance, empresas, producción audiovisual, eventos o reemplazos temporales.",
  },
  {
    icon: Zap,
    title: "Entrega rápida. Todo configurado",
    description: "Recibe tus equipos listos para trabajar, sin demoras ni complicaciones técnicas.",
  },
]

const whyRentBytePoints = [
  { icon: ShieldCheck, text: "Cero letras chicas. Transparencia total en cada arriendo y servicio." },
  { icon: ThumbsUp, text: "Atención directa y personalizada. Estamos para resolver tus necesidades." },
  { icon: Sparkles, text: "Soluciones tecnológicas sin complicaciones. Nos encargamos de lo complejo." },
  { icon: Truck, text: "Envío y soporte donde estés. Cobertura y asistencia eficientes." },
]

// Componente para el fondo del Hero (igual que antes)
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <Image
      src="/placeholder.svg?height=1080&width=1920"
      alt="Fondo tecnológico abstracto"
      layout="fill"
      objectFit="cover"
      quality={80}
      priority // Cargar la imagen con prioridad ya que está en el LCP
      className="opacity-25" // Ajustar opacidad para que no sea demasiado dominante
    />
    {/* Mantenemos un gradiente oscuro para asegurar la legibilidad del texto */}
    <div className="absolute inset-0 bg-gradient-to-b from-brand-background/50 via-brand-background/80 to-brand-background"></div>
  </div>
)

export default function RentBytePageV3() {
  return (
    <div className="flex flex-col min-h-dvh bg-brand-background text-brand-foreground relative noise-bg">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-[80vh] md:min-h-screen py-20 overflow-hidden"
      >
        <HeroBackground />
        <div className="container text-center relative z-10">
          <ScrollReveal animationClass="animate-rb-slideInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400">
              Arrendamos computadores para tus ideas, proyectos y viajes.
            </h1>
          </ScrollReveal>
          <ScrollReveal animationClass="animate-rb-slideInUp" delay="delay-200">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              MacBooks y otros equipos, listos para usar. Sin complicaciones.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider my-16 md:my-24"></div>

      {/* Rental Benefits Section */}
      <section id="rental-benefits" className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal animationClass="animate-rb-fadeIn" className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Beneficios del Arriendo <span className="text-brand-primary">RentByte</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {rentalBenefits.map((benefit, index) => (
              <ScrollReveal
                key={benefit.title}
                animationClass="animate-rb-slideInUp"
                delay={`delay-${index * 100}` as `delay-${number}`}
                className="h-full"
              >
                <Card className="bg-brand-card border-brand-border h-full transition-all duration-300 hover:border-brand-primary hover:shadow-glow-sm hover:-translate-y-1">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-brand-secondary rounded-full mb-4">
                      <benefit.icon className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-brand-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-400 text-sm md:text-base">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider my-16 md:my-24"></div>

      {/* Additional Services Section */}
      <section id="additional-services" className="py-16 md:py-24 bg-brand-card/30">
        {" "}
        {/* Fondo sutilmente diferente */}
        <div className="container">
          <ScrollReveal animationClass="animate-rb-fadeIn" className="text-center mb-12 md:mb-16">
            <div className="inline-block p-4 bg-brand-secondary rounded-full mb-6">
              <Wrench className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Servicios Tecnológicos Adicionales
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              También ofrecemos servicios de instalación, configuración y reparación de equipos computacionales.
            </p>
          </ScrollReveal>
          <ScrollReveal animationClass="animate-rb-slideInUp" delay="delay-200">
            <div className="max-w-3xl mx-auto bg-brand-card p-8 rounded-lg border border-brand-border shadow-lg">
              <p className="text-md md:text-lg text-slate-300 text-center">
                Desde puesta en marcha de nuevos dispositivos hasta soporte técnico y mantenimiento para equipos
                personales o empresariales.{" "}
                <strong className="text-brand-primary font-medium">RentByte es tu aliado tecnológico.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider my-16 md:my-24"></div>

      {/* Why RentByte Section */}
      <section id="why-rentbyte" className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal animationClass="animate-rb-fadeIn" className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              ¿Por qué elegir <span className="text-brand-primary">RentByte</span>?
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyRentBytePoints.map((point, index) => (
              <ScrollReveal
                key={point.text}
                animationClass="animate-rb-slideInUp"
                delay={`delay-${index * 100}` as `delay-${number}`}
                className="h-full"
              >
                <div className="flex items-start space-x-4 p-6 bg-brand-card border border-brand-border rounded-lg h-full hover:border-brand-primary/70 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1 p-2 bg-brand-secondary rounded-md">
                    <point.icon className="w-6 h-6 text-brand-primary" strokeWidth={2} />
                  </div>
                  <p className="text-md text-slate-300">{point.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-subtle my-16 md:my-24 opacity-50"></div>

      {/* Contact Callout Section */}
      <section id="contact-callout" className="py-20 md:py-28">
        <div className="container text-center">
          <ScrollReveal animationClass="animate-rb-fadeIn">
            <Mail className="w-12 h-12 md:w-16 md:h-16 text-brand-primary mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-brand-foreground mb-3">
              Contáctanos
            </h3>
            <a
              href="mailto:contacto@rentbyte.cl"
              className="text-xl sm:text-2xl md:text-3xl text-brand-primary hover:text-brand-primary-hover transition-colors duration-200 font-medium tracking-wide"
            >
              contactorentbyte@gmail.com
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-brand-border/50 bg-brand-background">
        <div className="container text-center">
          <ScrollReveal animationClass="animate-rb-fadeIn">
            <p className="text-sm text-slate-500">
              RentByte &copy; {new Date().getFullYear()} – Soluciones tecnológicas y arriendo de computadores en Chile
            </p>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
