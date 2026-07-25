const SITE_URL = "https://rentbyte.cl"
const EMAIL = "contacto@rentbyte.cl"

const faqItems = [
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

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "RentByte",
        alternateName: "RentByte Chile",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/placeholder-logo.png`,
          contentUrl: `${SITE_URL}/placeholder-logo.png`,
          width: 600,
          height: 600,
        },
        description:
          "Empresa chilena especializada en arriendo de computadores, notebooks, servidores e infraestructura TI para empresas, instituciones públicas, licitaciones y convenios marco.",
        email: EMAIL,
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: EMAIL,
            contactType: "sales",
            availableLanguage: ["es-CL", "es"],
            areaServed: "CL",
          },
          {
            "@type": "ContactPoint",
            email: EMAIL,
            contactType: "customer support",
            availableLanguage: ["es-CL", "es"],
            areaServed: "CL",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "Chile",
          identifier: "CL",
        },
        knowsAbout: [
          "Arriendo de computadores para empresas",
          "Arriendo de notebooks para empresas",
          "Arriendo de servidores",
          "Infraestructura TI bajo demanda",
          "Licitaciones públicas en Chile",
          "Convenios marco",
          "Soporte y mantención de equipos informáticos",
        ],
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "RentByte",
        url: SITE_URL,
        description:
          "Arriendo de equipos informáticos para empresas e instituciones públicas en Chile.",
        inLanguage: "es-CL",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Arriendo de computadores, notebooks y servidores en Chile | RentByte",
        description:
          "Landing corporativa de RentByte para solicitar cotización de arriendo de equipos informáticos B2B y B2G en Chile.",
        inLanguage: "es-CL",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#service`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/#breadcrumb`,
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Arriendo de equipos informáticos en Chile",
        alternateName: [
          "Arriendo de computadores para empresas",
          "Arriendo de notebooks para empresas",
          "Arriendo de servidores para empresas",
          "Arriendo de infraestructura TI",
        ],
        serviceType: "Arriendo de equipos informáticos B2B y B2G",
        category: "IT equipment rental",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        url: SITE_URL,
        description:
          "Servicio de arriendo de computadores, notebooks, servidores, estaciones de trabajo e infraestructura TI para empresas, organismos del Estado, licitaciones y convenios marco en Chile.",
        areaServed: {
          "@type": "Country",
          name: "Chile",
          identifier: "CL",
        },
        audience: [
          {
            "@type": "BusinessAudience",
            audienceType: "Empresas privadas",
          },
          {
            "@type": "Audience",
            audienceType: "Instituciones públicas y organismos del Estado",
          },
          {
            "@type": "Audience",
            audienceType: "Equipos de compras, operaciones y TI",
          },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: SITE_URL,
          availableLanguage: ["es-CL", "es"],
        },
        termsOfService: `${SITE_URL}/#process`,
        hasOfferCatalog: {
          "@id": `${SITE_URL}/#offer-catalog`,
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/#offer-catalog`,
        name: "Servicios de arriendo tecnológico RentByte",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arriendo de computadores y notebooks para empresas",
              description:
                "Computadores y notebooks configurados para organizaciones, con soporte y mantención incluida.",
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arriendo para licitaciones y convenios marco",
              description:
                "Equipamiento informático para procesos de licitación pública, compra pública y convenios marco en Chile.",
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Infraestructura TI bajo demanda",
              description:
                "Servidores, estaciones de trabajo y equipamiento especializado para proyectos de corto y mediano plazo.",
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Implementación y configuración de equipos",
              description:
                "Entrega de equipos listos para operar con dominio, políticas de seguridad, software corporativo y perfiles de usuario.",
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
