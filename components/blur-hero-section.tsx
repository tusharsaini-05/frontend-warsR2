"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlurText, BlurImage, BlurButton } from "./blur-motion"
import MagneticButton from "./magnetic-button"
import ThreeDCard from "./3d-card"
import InteractiveEyes from "./interactive-eyes"

interface BlurHeroSectionProps {
  title: string
  subtitle: string
  description: string
  badgeText: string
  primaryButtonText: string
  primaryButtonLink: string
  imageUrl: string
  imageAlt: string
}

export default function BlurHeroSection({
  title,
  subtitle,
  description,
  badgeText,
  primaryButtonText,
  primaryButtonLink,
  imageUrl,
  imageAlt,
}: BlurHeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ y, opacity }}
    >
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <BlurText delay={0.2}>
            <Badge className="bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30">{badgeText}</Badge>
          </BlurText>

          <BlurText delay={0.4}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              {title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                {subtitle}
              </span>
            </h1>
          </BlurText>

          <BlurText delay={0.6} direction="up">
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          </BlurText>

          <BlurButton delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6">
              <MagneticButton>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl text-lg font-semibold"
                >
                  <Link href={primaryButtonLink} className="flex items-center">
                    {primaryButtonText} <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </BlurButton>
        </div>

        {/* Right Content */}
        <BlurImage delay={0.6}>
          <motion.div className="relative">
            <ThreeDCard>
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="rounded-2xl"
                priority
              />
            </ThreeDCard>

            {/* Interactive Eyes */}
            <motion.div
              className="absolute -bottom-10 -right-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <InteractiveEyes size="sm" />
            </motion.div>
          </motion.div>
        </BlurImage>
      </div>
    </motion.section>
  )
}
