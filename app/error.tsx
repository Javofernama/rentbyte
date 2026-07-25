"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-brand-background text-brand-foreground px-4">
      <h1 className="text-6xl font-bold text-brand-primary mb-4">Error</h1>
      <h2 className="text-2xl font-semibold mb-2">Algo salió mal</h2>
      <p className="text-slate-400 mb-8 text-center max-w-md">
        Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-hover transition-colors duration-200 font-medium"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
