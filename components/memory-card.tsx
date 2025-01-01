'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface MemoryCardProps {
  title: string
  content: string
  icon: React.ReactNode
  image?: {
    src: string
    alt: string
    position?: 'top' | 'bottom'
  }
  delay?: number
}

export function MemoryCard({ title, content, icon, image, delay = 0 }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-blue-500">{icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{title}</h2>
          </div>
          
          {image && image.position === 'top' && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          <div className="space-y-4">
            {content?.split('\n').map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {image && image.position === 'bottom' && (
            <div className="rounded-lg overflow-hidden mt-4">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

