'use client'

import { motion } from 'framer-motion'

interface ImageGridProps {
  images: Array<{
    src: string
    alt: string
  }>
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
          className="aspect-square"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  )
}

