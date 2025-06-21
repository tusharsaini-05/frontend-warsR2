"use client"

import React from "react"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface BlurMotionProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  duration?: number
  triggerOnce?: boolean
}

export default function BlurMotion({
  children,
  className = "",
  intensity = "medium",
  direction = "up",
  delay = 0,
  duration = 0.8,
  triggerOnce = true,
}: BlurMotionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Smooth spring animation for scroll-based effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Blur intensity mapping
  const blurIntensity = {
    low: 4,
    medium: 8,
    high: 16,
  }

  // Direction-based transforms
  const getDirectionTransforms = () => {
    switch (direction) {
      case "up":
        return { y: 50, x: 0, scale: 1 }
      case "down":
        return { y: -50, x: 0, scale: 1 }
      case "left":
        return { y: 0, x: 50, scale: 1 }
      case "right":
        return { y: 0, x: -50, scale: 1 }
      case "scale":
        return { y: 0, x: 0, scale: 0.8 }
      default:
        return { y: 50, x: 0, scale: 1 }
    }
  }

  const initialTransform = getDirectionTransforms()

  // Scroll-based transforms
  const y = useTransform(smoothProgress, [0, 0.3, 1], [initialTransform.y, 0, -initialTransform.y])
  const x = useTransform(smoothProgress, [0, 0.3, 1], [initialTransform.x, 0, -initialTransform.x])
  const scale = useTransform(smoothProgress, [0, 0.3, 1], [initialTransform.scale, 1, 1.05])
  const blur = useTransform(smoothProgress, [0, 0.3, 1], [blurIntensity[intensity], 0, 0])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [triggerOnce])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        x,
        scale,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      initial={{
        opacity: 0,
        y: initialTransform.y,
        x: initialTransform.x,
        scale: initialTransform.scale,
        filter: `blur(${blurIntensity[intensity]}px)`,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

// Specialized blur motion components
export function BlurCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <BlurMotion className={className} intensity="medium" direction="up" delay={delay} duration={0.6}>
      {children}
    </BlurMotion>
  )
}

export function BlurText({
  children,
  className = "",
  delay = 0,
  direction = "up" as const,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) {
  return (
    <BlurMotion className={className} intensity="low" direction={direction} delay={delay} duration={0.8}>
      {children}
    </BlurMotion>
  )
}

export function BlurImage({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <BlurMotion className={className} intensity="high" direction="scale" delay={delay} duration={1}>
      {children}
    </BlurMotion>
  )
}

export function BlurButton({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <BlurMotion className={className} intensity="low" direction="scale" delay={delay} duration={0.4}>
      {children}
    </BlurMotion>
  )
}

// Staggered blur animations for lists
export function BlurStagger({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <BlurMotion key={index} intensity="medium" direction="up" delay={index * staggerDelay} duration={0.6}>
          {child}
        </BlurMotion>
      ))}
    </div>
  )
}
