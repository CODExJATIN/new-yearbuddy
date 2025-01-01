'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface SideBySideProps {
  image: {
    src: string
    alt: string
  }
  content: {
    title: string
    text: string
  }
  imageLeft?: boolean
}

export function SideBySide({ image, content, imageLeft = true }: SideBySideProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {imageLeft ? (
        <>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-xl w-full h-[300px] object-cover"
          />
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{content.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content.text}</p>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{content.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content.text}</p>
            </CardContent>
          </Card>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-xl w-full h-[300px] object-cover"
          />
        </>
      )}
    </motion.div>
  )
}

