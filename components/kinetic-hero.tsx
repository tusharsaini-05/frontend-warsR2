"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from "lucide-react"
import { HeroTitle, AnimatedBadge } from "./enhanced-typography"
import { MorphingText } from "./kinetic-typography"
import MagneticButton from "./magnetic-button"

interface KineticHeroProps {
  title: string
  subtitle?: string
  description: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  morphingTexts?: string[]
  className?: string
}

export default function KineticHero({
  title,
  subtitle,
  description,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Watch Demo",
  onPrimaryClick,
  onSecondaryClick,
  morphingTexts = ["Innovation", "Excellence", "Growth", "Success"],
  className = "",
}: KineticHeroProps) {
  return (
    <section className={`py-20 pt-32 relative ${className}`}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <AnimatedBadge
              variant="bounce"
              className="bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30 px-4 py-2 rounded-full text-sm font-semibold border"
            >
              {subtitle || "Welcome to the Future"}
            </AnimatedBadge>
          </motion.div>

          {/* Main Title with Kinetic Typography */}
          <HeroTitle className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">{title}</HeroTitle>

          {/* Morphing Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold mb-8"
          >
            <span className="text-slate-600 dark:text-gray-300">Driving </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
              <MorphingText texts={morphingTexts} interval={2000} />
            </span>
            <span className="text-slate-600 dark:text-gray-300"> Through Technology</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className="bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-700 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {primaryButtonText}
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                onClick={onSecondaryClick}
                className="border-2 border-slate-300 dark:border-slate-600 hover:border-teal-500 dark:hover:border-teal-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {secondaryButtonText}
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
