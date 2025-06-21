"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import BlurMotion, { BlurCard } from "./blur-motion"
import MagneticButton from "./magnetic-button"
import ThreeDCard from "./3d-card"

interface Stat {
  number: number
  label: string
  suffix: string
}

function CasinoCountingNumber({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(end * easeOut)
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  )
}

interface BlurStatsSectionProps {
  stats: Stat[]
  title?: string
  subtitle?: string
}

export default function BlurStatsSection({ stats, title, subtitle }: BlurStatsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-800/50 to-slate-800/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        {title && (
          <BlurMotion intensity="medium" direction="up" delay={0.2}>
            <motion.div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
              {subtitle && <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
            </motion.div>
          </BlurMotion>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <BlurCard key={index} delay={index * 0.1}>
                <MagneticButton>
                  <ThreeDCard>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Card background animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-teal-500/10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10">
                        <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 flex items-center justify-center">
                          <CasinoCountingNumber end={stat.number} suffix={stat.suffix} duration={4000} />
                        </div>
                        <div className="text-slate-600 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  </ThreeDCard>
                </MagneticButton>
              </BlurCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
