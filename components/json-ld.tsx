export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RentByte",
    alternateName: "RentByte Chile",
    url: "https://rentbyte.cl",
    logo: "https://rentbyte.cl/placeholder-logo.png",
    description:
      "Empresa chilena especializada en arriendo de equipos informáticos para empresas, instituciones públicas y licitaciones. Soluciones tecnológicas B2B y B2G.",
    email: "contacto@rentbyte.cl",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressRegion: "Región Metropolitana",
      addressLocality: "Santiago",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RentByte",
    url: "https://rentbyte.cl",
    description:
      "Arriendo de equipos informáticos para empresas e instituciones públicas en Chile.",
    inLanguage: "es-CL",
    publisher: {
      "@type": "Organization",
      name: "RentByte",
      logo: {
        "@type": "ImageObject",
        url: "https://rentbyte.cl/placeholder-logo.png",
      },
    },
  }

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Arriendo de Equipos Informáticos",
    provider: {
      "@type": "Organization",
      name: "RentByte",
      url: "https://rentbyte.cl",
    },
    description:
      "Servicio de arriendo de computadores, notebooks y servidores para empresas, instituciones públicas y licitaciones en Chile.",
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    serviceType: "Equipment Rental",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Arriendo Tecnológico",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Arriendo de Equipos para Empresas",
          description:
            "Computadores y notebooks configurados para necesidades empresariales con soporte incluido.",
          category: "B2B Equipment Rental",
        },
        {
          "@type": "Offer",
          name: "Arriendo para Licitaciones y Convenios Marco",
          description:
            "Equipamiento informático para procesos de licitación pública y convenios marco del Estado de Chile.",
          category: "B2G Equipment Rental",
        },
        {
          "@type": "Offer",
          name: "Infraestructura TI bajo demanda",
          description:
            "Servidores y estaciones de trabajo para proyectos de corto y mediano plazo.",
          category: "IT Infrastructure Rental",
        },
        {
          "@type": "Offer",
          name: "Implementación y Configuración",
          description:
            "Entrega de equipos con dominio, políticas de seguridad, software corporativo y perfiles de usuario.",
          category: "IT Implementation Services",
        },
      ],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://rentbyte.cl",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
