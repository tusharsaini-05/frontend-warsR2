"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { BlurCard, BlurText } from "./blur-motion"
import MagneticButton from "./magnetic-button"
import ThreeDCard from "./3d-card"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

interface BlurFeaturesGridProps {
  features: Feature[]
  title?: string
  subtitle?: string
}

export default function BlurFeaturesGrid({ features, title, subtitle }: BlurFeaturesGridProps) {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {title && (
          <BlurText delay={0.2}>
            <motion.div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
              {subtitle && <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
            </motion.div>
          </BlurText>
        )}

        <div className="space-y-6">
          {features.map((feature, index) => (
            <BlurCard key={index} delay={index * 0.1}>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </BlurCard>
          ))}
        </div>
      </div>
    </section>
  )
}
