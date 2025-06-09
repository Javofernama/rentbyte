"use client"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion" // Import framer-motion for animations

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animationClass?: "animate-rb-fadeIn" | "animate-rb-slideInUp" | "animate-rb-slideInLeft"
  delay?: `delay-${number}` // Tailwind delay class e.g. 'delay-200'
  threshold?: number
  triggerOnce?: boolean
  as?: keyof JSX.IntrinsicElements // Permite cambiar el elemento contenedor
}

export function ScrollReveal({
  children,
  className = "",
  animationClass = "animate-rb-fadeIn",
  delay = undefined,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = "div", // Por defecto es un div
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null) // Asumimos div, pero podría ser genérico

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else {
          if (!triggerOnce) {
            // setIsVisible(false); // Para re-animar al scrollear fuera y dentro (opcional)
          }
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      if (element) {
        // Verificar si element existe antes de llamar unobserve
        observer.unobserve(element)
      }
    }
  }, [threshold, triggerOnce])

  return (
    <motion.div
      ref={ref}
      className={cn(
        "transition-opacity duration-700 ease-out", // Transición de opacidad base
        delay,
        isVisible ? `${animationClass} opacity-100` : "opacity-0",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: delay ? Number.parseInt(delay.replace("delay-", "")) / 1000 : 0,
      }}
    >
      {children}
    </motion.div>
  )
}
