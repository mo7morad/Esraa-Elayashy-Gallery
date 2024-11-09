'use client'

import { motion } from 'framer-motion'

interface AnimatedTitleProps {
  text: string
  subtitle?: string
}

export function AnimatedTitle({ text, subtitle }: AnimatedTitleProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.5,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1.2,
      },
    },
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center perspective-1000"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className="text-2xl text-gray-300/90 font-light tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
} 