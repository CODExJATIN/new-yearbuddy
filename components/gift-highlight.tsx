'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Gift } from 'lucide-react'

interface GiftHighlightProps {
  title: string
  description: string
  image: string
  isSpecial?: boolean
}

// Changed to named export
export function GiftHighlight({ title, description, image, isSpecial }: GiftHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <Card className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden
        ${isSpecial ? 'border-2 border-yellow-400 dark:border-yellow-500' : ''}`}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Gift className={`w-8 h-8 ${isSpecial ? 'text-yellow-500' : 'text-blue-500'}`} />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.img
              whileHover={{ scale: 1.05, rotate: -2 }}
              src={image}
              alt={title}
              className="rounded-lg shadow-xl w-full aspect-square object-cover"
            />
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                {description || ''}
              </p>
              {isSpecial && (
                <div className="flex gap-2">
                  <span className="animate-pulse">✨</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                    Special Memory
                  </span>
                  <span className="animate-pulse">✨</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      {isSpecial && (
        <div className="absolute -top-3 -right-3 w-12 h-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400">
              <path
                fill="currentColor"
                d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3z"
              />
            </svg>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

