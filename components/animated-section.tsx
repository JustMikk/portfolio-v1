"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "bounce"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeUp", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClasses = {
    fadeUp: "translate-y-8 opacity-0",
    fadeIn: "opacity-0",
    slideLeft: "translate-x-8 opacity-0",
    slideRight: "-translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
    bounce: "translate-y-4 opacity-0",
  }

  const visibleClasses = {
    fadeUp: "translate-y-0 opacity-100",
    fadeIn: "opacity-100",
    slideLeft: "translate-x-0 opacity-100",
    slideRight: "translate-x-0 opacity-100",
    scale: "scale-100 opacity-100",
    bounce: "translate-y-0 opacity-100",
  }

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      } ${className} ${animation === "bounce" && isVisible ? "animate-bounce" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
