import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { JsonLd } from "@/components/json-ld"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const SITE_URL = "https://rentbyte.cl"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RentByte - Arriendo de Equipos Informáticos para Empresas y Estado",
    template: "%s | RentByte",
  },
  description:
    "Soluciones de arriendo tecnológico B2B y B2G para empresas, instituciones públicas y licitaciones. Computadores, notebooks, servidores con soporte y mantención incluida en todo Chile.",
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
    "convenio marco arriendo computadores",
    "arriendo notebooks empresas chile",
  ],
  authors: [{ name: "RentByte" }],
  creator: "RentByte",
  publisher: "RentByte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "RentByte",
    title: "RentByte - Arriendo de Equipos Informáticos para Empresas y Estado",
    description:
      "Arriendo de computadores, notebooks y servidores para empresas e instituciones públicas. Soporte incluido, contratos transparentes, sin inversión inicial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RentByte - Soluciones de Arriendo Tecnológico B2B y B2G en Chile",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: "RentByte Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentByte - Arriendo de Equipos Informáticos para Empresas y Estado",
    description:
      "Arriendo tecnológico B2B y B2G. Equipos, soporte y cumplimiento normativo para empresas e instituciones públicas en Chile.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-CL": SITE_URL,
    },
  },
  verification: {
    // Descomentar y agregar tus códigos de verificación
    // google: "TU_CODIGO_GOOGLE_SEARCH_CONSOLE",
    // yandex: "TU_CODIGO_YANDEX",
    // yahoo: "TU_CODIGO_YAHOO",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/placeholder-logo.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#0a0a0f",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-brand-background text-brand-foreground",
          spaceGrotesk.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
