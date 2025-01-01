'use client'

import { motion } from 'framer-motion'

interface FloatingImageProps {
  src: string
  alt: string
  className?: string
  rotateDirection?: 'left' | 'right'
}

export function FloatingImage({ src, alt, className = "", rotateDirection = 'left' }: FloatingImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotateDirection === 'left' ? -10 : 10 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, rotate: rotateDirection === 'left' ? 5 : -5 }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform -rotate-3" />
      <img
        src={src}
        alt={alt}
        className="relative rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
      />
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/80 rounded-full" />
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-14 bg-white/50" />
    </motion.div>
  )
}

