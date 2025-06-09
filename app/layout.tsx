import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "RentByte - Arriendo de Computadores y Soluciones Tecnológicas",
  description:
    "Arrendamos MacBooks y equipos de alto rendimiento. Ofrecemos servicios de instalación, configuración y reparación. RentByte, tu aliado tecnológico en Chile.",
  keywords:
    "arriendo macbook, alquiler computadores, rent macbook chile, soluciones tecnológicas, soporte técnico computadores, reparación macbook, instalación software, rentbyte, arriendo computadores santiago",
  openGraph: {
    title: "RentByte - Arriendo de Computadores y Soluciones Tecnológicas",
    description: "Equipos listos para usar y servicios tecnológicos integrales. Sin complicaciones.",
    url: "https://rentbyte.cl",
    siteName: "RentByte",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "RentByte - Soluciones Tecnológicas y Arriendo de Computadores",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentByte - Arriendo de Computadores y Soluciones Tecnológicas",
    description: "Equipos listos para usar y servicios tecnológicos integrales. Sin complicaciones.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  icons: {
    icon: "/favicon.ico", // Reemplazar con tu favicon
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={cn("min-h-screen font-sans antialiased", spaceGrotesk.variable)}>{children}</body>
    </html>
  )
}
