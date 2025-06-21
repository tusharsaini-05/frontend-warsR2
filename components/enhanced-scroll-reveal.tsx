"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import type React from "react"

interface EnhancedScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate"
  intensity?: "subtle" | "medium" | "strong"
  blur?: boolean
  parallax?: boolean
}

export default function EnhancedScrollReveal({
  children,
  className = "",
  direction = "up",
  intensity = "medium",
  blur = true,
  parallax = false,
}: EnhancedScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Intensity multipliers
  const intensityMap = {
    subtle: 0.5,
    medium: 1,
    strong: 1.5,
  }

  const multiplier = intensityMap[intensity]

  // Direction-based animations
  const baseDistance = 60 * multiplier

  const yUp = useTransform(smoothProgress, [0, 0.3, 1], [baseDistance, 0, -baseDistance * 0.3])
  const yDown = useTransform(smoothProgress, [0, 0.3, 1], [-baseDistance, 0, baseDistance * 0.3])
  const xLeft = useTransform(smoothProgress, [0, 0.3, 1], [baseDistance, 0, -baseDistance * 0.3])
  const xRight = useTransform(smoothProgress, [0, 0.3, 1], [-baseDistance, 0, baseDistance * 0.3])
  const scaleUp = useTransform(smoothProgress, [0, 0.3, 1], [0.95, 1, 1.02])
  const scaleDown = useTransform(smoothProgress, [0, 0.3, 1], [0.95, 1, 1.02])
  const parallaxY = useTransform(smoothProgress, [0, 1], [0, parallax ? -20 : 0])
  const parallaxYScale = useTransform(smoothProgress, [0, 1], [0, parallax ? -30 : 0])
  const scaleValue = useTransform(smoothProgress, [0, 0.3, 1], [0.8 * multiplier, 1, 1.1])
  const rotateValue = useTransform(smoothProgress, [0, 0.3, 1], [-10 * multiplier, 0, 5 * multiplier])
  const defaultScale = useTransform(smoothProgress, [0, 0.3, 1], [0.95, 1, 1.02])
  const defaultY = useTransform(smoothProgress, [0, 0.3, 1], [baseDistance, 0, -baseDistance * 0.3])
  const defaultX = useTransform(smoothProgress, [0, 1], [0, 0])
  const defaultRotate = useTransform(smoothProgress, [0, 0.3, 1], [0.9, 1, 1.05])

  const getAnimationValues = () => {
    switch (direction) {
      case "up":
        return {
          y: yUp,
          x: useTransform(smoothProgress, [0, 1], [0, 0]),
          scale: scaleUp,
          rotate: useTransform(smoothProgress, [0, 1], [0, 0]),
        }
      case "down":
        return {
          y: yDown,
          x: useTransform(smoothProgress, [0, 1], [0, 0]),
          scale: scaleDown,
          rotate: useTransform(smoothProgress, [0, 1], [0, 0]),
        }
      case "left":
        return {
          y: parallaxY,
          x: xLeft,
          scale: scaleUp,
          rotate: useTransform(smoothProgress, [0, 1], [0, 0]),
        }
      case "right":
        return {
          y: parallaxY,
          x: xRight,
          scale: scaleUp,
          rotate: useTransform(smoothProgress, [0, 1], [0, 0]),
        }
      case "scale":
        return {
          y: parallaxYScale,
          x: useTransform(smoothProgress, [0, 1], [0, 0]),
          scale: scaleValue,
          rotate: useTransform(smoothProgress, [0, 1], [0, 0]),
        }
      case "rotate":
        return {
          y: parallaxY,
          x: useTransform(smoothProgress, [0, 1], [0, 0]),
          scale: defaultRotate,
          rotate: rotateValue,
        }
      default:
        return {
          y: defaultY,
          x: defaultX,
          scale: defaultScale,
          rotate: useTransform(smoothProgress, [0, 1], [0, 0]),
        }
    }
  }

  const { y, x, scale, rotate } = getAnimationValues()

  // Blur and opacity effects
  const blurValue = blur
    ? useTransform(smoothProgress, [0, 0.2, 0.8, 1], [8 * multiplier, 0, 0, 2])
    : useTransform(smoothProgress, [0, 1], [0, 0])

  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        x,
        scale,
        rotate,
        opacity,
        filter: blur ? `blur(${blurValue}px)` : undefined,
      }}
    >
      {children}
    </motion.div>
  )
}
