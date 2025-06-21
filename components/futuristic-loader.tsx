"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface FuturisticLoaderProps {
  isLoading: boolean
  onComplete?: () => void
}

export default function FuturisticLoader({ isLoading, onComplete }: FuturisticLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(0) // Reset progress when not loading
      return
    }

    const duration = 2000 // 2 seconds
    const interval = 50 // Update every 50ms
    const increment = (100 / duration) * interval

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onComplete?.()
          }, 200)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [isLoading, onComplete])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-transparent to-blue-900/10" />

          <div className="relative z-10 text-center">
            {/* Logo Container */}
            <motion.div
              className="mb-12 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Subtle Glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  background: "radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)",
                }}
              />

              {/* Logo */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/inlighn-tech-logo.png"
                  alt="InLighn Tech Logo"
                  width={180}
                  height={180}
                  className="mx-auto"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Progress Section */}
            <motion.div
              className="w-80 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Progress Bar */}
              <div className="relative h-1 bg-slate-700/50 rounded-full overflow-hidden mb-8">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>

              {/* Loading Text */}
              <motion.div
                className="text-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <p className="text-slate-300 text-sm font-light tracking-wide">Loading Experience</p>
              </motion.div>
            </motion.div>

            {/* Minimal Dots Indicator */}
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-teal-400/60 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
