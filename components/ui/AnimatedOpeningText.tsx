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
    const timer1 = setTimeout(() => setIsVisible(true), 500)
    const timer2 = setTimeout(() => setIsAnimated(true), 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl p-8",
      "shadow-[0_0_30px_rgba(0,0,0,0.3)]",
      "transition-all duration-500",
      "border-2 border-transparent",
      "bg-gradient-to-br from-gray-900/90 to-gray-800/90",
      "before:absolute before:inset-0 before:-z-10 before:animate-gradient-x before:bg-gradient-to-r before:from-pink-500/20 before:via-purple-500/20 before:to-blue-500/20 before:blur-xl",
      "after:absolute after:inset-0 after:rounded-2xl after:p-[2px] after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-blue-500",
      className
    )}>
      <div className="relative">
        <div className="overflow-hidden">
          <motion.h1 
            className={cn(
              "text-4xl md:text-6xl font-bold bg-clip-text text-transparent",
              "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
              "transform transition-all duration-1000 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              isAnimated && "animate-gradient-x"
            )}
            style={{ backgroundSize: "200% 200%", animationDuration: "10s" }}
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
                    delay: index * 0.05,
                    duration: 0.8,
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
                "transform transition-all duration-1000 ease-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              )}
              style={{ transitionDelay: "500ms" }}
            >
              {subtitle}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  )
} 