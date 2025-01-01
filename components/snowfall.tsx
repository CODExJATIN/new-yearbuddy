'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes(current => {
        const newFlake = {
          id: Date.now(),
          left: Math.random() * 100
        }
        return [...current, newFlake].slice(-50) // Keep max 50 snowflakes
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {snowflakes.map(flake => (
          <motion.div
            key={flake.id}
            initial={{ y: -20, x: `${flake.left}vw`, opacity: 0 }}
            animate={{ y: '100vh', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{ filter: 'blur(1px)' }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

