"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

interface KineticTextProps {
  children: React.ReactNode
  className?: string
  variant?: "wave" | "stretch" | "rotate" | "morph" | "bounce" | "slide" | "typewriter" | "glitch" | "elastic"
  trigger?: "load" | "hover" | "scroll" | "click" | "focus"
  delay?: number
  duration?: number
  stagger?: number
  infinite?: boolean
  direction?: "up" | "down" | "left" | "right"
}

export default function KineticText({
  children,
  className = "",
  variant = "wave",
  trigger = "scroll",
  delay = 0,
  duration = 1,
  stagger = 0.05,
  infinite = false,
  direction = "up",
}: KineticTextProps) {
  const [isTriggered, setIsTriggered] = useState(trigger === "load")
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: !infinite })

  // Convert children to string safely and split by words instead of characters for better spacing
  const textContent = React.Children.toArray(children).join("")
  const words = textContent.split(" ")

  useEffect(() => {
    if (trigger === "scroll" && isInView) {
      setIsTriggered(true)
    } else if (trigger === "load") {
      const timer = setTimeout(() => setIsTriggered(true), delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, trigger, delay])

  const getVariantAnimation = (index: number) => {
    const baseDelay = delay + index * stagger

    switch (variant) {
      case "wave":
        return {
          initial: { y: 0, opacity: 0.7 },
          animate: isTriggered
            ? {
                y: [0, -20, 0],
                opacity: [0.7, 1, 0.7],
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  repeat: infinite ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop" as const,
                  ease: "easeInOut",
                },
              }
            : { y: 0, opacity: 0.7 },
        }

      case "stretch":
        return {
          initial: { scaleY: 1, scaleX: 1 },
          animate: isTriggered
            ? {
                scaleY: [1, 1.5, 1],
                scaleX: [1, 0.8, 1],
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  repeat: infinite ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop" as const,
                  ease: "easeInOut",
                },
              }
            : { scaleY: 1, scaleX: 1 },
        }

      case "rotate":
        return {
          initial: { rotate: 0, scale: 1 },
          animate: isTriggered
            ? {
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1],
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  repeat: infinite ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop" as const,
                  ease: "easeInOut",
                },
              }
            : { rotate: 0, scale: 1 },
        }

      case "bounce":
        return {
          initial: { y: 0, scale: 1 },
          animate: isTriggered
            ? {
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  repeat: infinite ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop" as const,
                  ease: "easeOut",
                },
              }
            : { y: 0, scale: 1 },
        }

      case "slide":
        const slideDirection = {
          up: { y: [50, 0], x: 0 },
          down: { y: [-50, 0], x: 0 },
          left: { x: [50, 0], y: 0 },
          right: { x: [-50, 0], y: 0 },
        }
        return {
          initial: { ...slideDirection[direction], opacity: 0 },
          animate: isTriggered
            ? {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  ease: "easeOut",
                },
              }
            : { ...slideDirection[direction], opacity: 0 },
        }

      case "elastic":
        return {
          initial: { scale: 0, rotate: -180 },
          animate: isTriggered
            ? {
                scale: [0, 1.3, 1],
                rotate: [-180, 0],
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }
            : { scale: 0, rotate: -180 },
        }

      case "glitch":
        return {
          initial: { x: 0, y: 0, opacity: 1 },
          animate: isTriggered
            ? {
                x: [0, -2, 2, -1, 1, 0],
                y: [0, 1, -1, 2, -2, 0],
                opacity: [1, 0.8, 1, 0.9, 1],
                transition: {
                  duration: duration * 0.3,
                  delay: baseDelay,
                  repeat: infinite ? Number.POSITIVE_INFINITY : 2,
                  repeatType: "loop" as const,
                  ease: "easeInOut",
                },
              }
            : { x: 0, y: 0, opacity: 1 },
        }

      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: isTriggered
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: duration,
                  delay: baseDelay,
                  ease: "easeOut",
                },
              }
            : { opacity: 0, y: 20 },
        }
    }
  }

  const handleInteraction = () => {
    if (trigger === "click" || trigger === "hover") {
      setIsTriggered(!isTriggered)
    }
  }

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onClick={trigger === "click" ? handleInteraction : undefined}
      onMouseEnter={trigger === "hover" ? () => setIsHovered(true) : undefined}
      onMouseLeave={trigger === "hover" ? () => setIsHovered(false) : undefined}
      onFocus={trigger === "focus" ? handleInteraction : undefined}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((letter, letterIndex) => {
            const globalIndex = wordIndex * 10 + letterIndex // Create unique index
            const animation = getVariantAnimation(globalIndex)
            return (
              <motion.span
                key={letterIndex}
                className="inline-block"
                initial={animation.initial}
                animate={trigger === "hover" ? (isHovered ? animation.animate : animation.initial) : animation.animate}
                style={{ transformOrigin: "center" }}
              >
                {letter}
              </motion.span>
            )
          })}
        </span>
      ))}
    </div>
  )
}

// Typewriter Effect Component
export function TypewriterText({
  children,
  className = "",
  speed = 100,
  delay = 0,
  cursor = true,
  onComplete,
}: {
  children: string
  className?: string
  speed?: number
  delay?: number
  cursor?: boolean
  onComplete?: () => void
}) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < children.length) {
          setDisplayText(children.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          onComplete?.()
          if (!cursor) setShowCursor(false)
        }
      },
      currentIndex === 0 ? delay : speed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, children, speed, delay, cursor, onComplete])

  useEffect(() => {
    if (cursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(cursorTimer)
    }
  }, [cursor])

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
        />
      )}
    </span>
  )
}

// Morphing Text Component - Fixed version
export function MorphingText({
  texts,
  className = "",
  interval = 3000,
  morphDuration = 0.5,
}: {
  texts: string[]
  className?: string
  interval?: number
  morphDuration?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  // Ensure we always have a fallback text
  const currentText = texts[currentIndex] || texts[0] || "INLIGHN TECH"

  return (
    <span className={`inline-block relative ${className}`} style={{ minWidth: "200px", minHeight: "1em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: morphDuration, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-start whitespace-nowrap"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Split Text Animation Component
export function SplitTextReveal({
  children,
  className = "",
  variant = "slideUp",
  stagger = 0.05,
  delay = 0,
}: {
  children: string
  className?: string
  variant?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fade" | "scale"
  stagger?: number
  delay?: number
}) {
  const words = children.split(" ")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const getVariantProps = () => {
    switch (variant) {
      case "slideUp":
        return {
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        }
      case "slideDown":
        return {
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        }
      case "slideLeft":
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
        }
      case "slideRight":
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
        }
      case "scale":
        return {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
        }
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }
    }
  }

  const variantProps = getVariantProps()

  return (
    <div ref={ref} className={`${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={variantProps.initial}
          animate={isInView ? variantProps.animate : variantProps.initial}
          transition={{
            duration: 0.6,
            delay: delay + index * stagger,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Gradient Text Animation
export function GradientText({
  children,
  className = "",
  colors = ["#14b8a6", "#f59e0b", "#ef4444"],
  speed = 2,
}: {
  children: string
  className?: string
  colors?: string[]
  speed?: number
}) {
  return (
    <motion.span
      className={`bg-gradient-to-r bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: speed,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  )
}

// Floating Letters Component
export function FloatingLetters({
  children,
  className = "",
  intensity = "medium",
}: {
  children: string
  className?: string
  intensity?: "low" | "medium" | "high"
}) {
  const letters = children.split("")
  const intensityMap = {
    low: { range: 5, duration: 3 },
    medium: { range: 10, duration: 2 },
    high: { range: 15, duration: 1.5 },
  }
  const config = intensityMap[intensity]

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -config.range, 0],
            x: [0, Math.sin(index) * config.range * 0.5, 0],
            rotate: [0, Math.sin(index) * 5, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}
