import { ImageResponse } from "next/og"

export const alt = "RentByte - Arriendo de computadores, notebooks y servidores en Chile"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #f6f8fc 0%, #ffffff 100%)",
          color: "#10141c",
          padding: 64,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1656c9",
              color: "white",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>RentByte</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div
            style={{
              borderRadius: 999,
              border: "1px solid #d6e2f7",
              background: "#eaf0fb",
              color: "#1656c9",
              padding: "10px 18px",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Arriendo TI · B2B & B2G · Chile
          </div>
          <div style={{ fontSize: 68, lineHeight: 0.98, fontWeight: 800, letterSpacing: -2 }}>
            Arriendo de computadores, notebooks y servidores en Chile
          </div>
          <div style={{ maxWidth: 760, color: "#4a5568", fontSize: 28, lineHeight: 1.35 }}>
            Equipos informáticos para empresas, instituciones públicas, licitaciones y convenios marco.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, color: "#4a5568", fontSize: 22, fontWeight: 700 }}>
          <span>Soporte incluido</span>
          <span>·</span>
          <span>Cumplimiento normativo</span>
          <span>·</span>
          <span>contacto@rentbyte.cl</span>
        </div>
      </div>
    ),
    size
  )
}
