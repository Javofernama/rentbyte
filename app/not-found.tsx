import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-brand-background text-brand-foreground px-4">
      <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-slate-400 mb-8 text-center max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-hover transition-colors duration-200 font-medium"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
