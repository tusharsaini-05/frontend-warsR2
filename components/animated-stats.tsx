"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import LoadingWrapper from "./loading-wrapper"
import { StatsSkeleton } from "./skeleton-loader"
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

export default function AnimatedStats() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<Stat[]>([])

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const mockStats: Stat[] = [
        { number: 5000, label: "INTERNS ENROLLED", suffix: "+" },
        { number: 9000, label: "PROJECTS COMPLETED", suffix: "+" },
        { number: 93, label: "SATISFACTION RATE", suffix: "%" },
        { number: 30, label: "TOP INSTRUCTORS", suffix: "+" },
      ]

      setStats(mockStats)
      setIsLoading(false)
    }

    fetchStats()
  }, [])

  const skeletonStats = <StatsSkeleton className="max-w-6xl mx-auto" />

  const statsGrid = (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <LoadingWrapper isLoading={isLoading} skeleton={skeletonStats} delay={200}>
      {statsGrid}
    </LoadingWrapper>
  )
}
