'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedOpeningTextProps {
  title: string
  subtitle?: string
  className?: string
}

export function AnimatedOpeningText({ title, subtitle, className }: AnimatedOpeningTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 800)
    const timer2 = setTimeout(() => setIsAnimated(true), 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className={cn("landing-card", className)}>
      <div className="relative">
        <div className="overflow-hidden">
          <motion.h1 
            className={cn(
              "text-4xl md:text-6xl font-bold bg-clip-text text-transparent",
              "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
              "transform transition-all duration-1500 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              isAnimated && "animate-gradient-x"
            )}
            style={{ backgroundSize: "200% 200%", animationDuration: "15s" }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial={{ y: 100, opacity: 0 }}
                animate={isVisible ? {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: index * 0.08,
                    duration: 1.2,
                    ease: [0.33, 1, 0.68, 1]
                  }
                } : {}}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        
        {subtitle && (
          <div className="mt-4 overflow-hidden">
            <motion.p
              className={cn(
                "text-lg md:text-xl text-gray-300",
                "transform transition-all duration-1500 ease-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              )}
              style={{ transitionDelay: "800ms" }}
            >
              {subtitle}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  )
} 