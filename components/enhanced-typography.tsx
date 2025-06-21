"use client"

import React from "react"
import { motion } from "framer-motion"
import KineticText, { TypewriterText, SplitTextReveal, FloatingLetters } from "./kinetic-typography"

interface EnhancedHeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "wave" | "stretch" | "rotate" | "bounce" | "slide" | "elastic"
  className?: string
  delay?: number
}

export function EnhancedHeading({
  children,
  level = 1,
  variant = "wave",
  className = "",
  delay = 0,
}: EnhancedHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={className}>
      <KineticText variant={variant} trigger="scroll" delay={delay}>
        {React.Children.toArray(children).join("")}
      </KineticText>
    </Tag>
  )
}

interface EnhancedParagraphProps {
  children: React.ReactNode
  className?: string
  reveal?: boolean
  typewriter?: boolean
  speed?: number
}

export function EnhancedParagraph({
  children,
  className = "",
  reveal = false,
  typewriter = false,
  speed = 50,
}: EnhancedParagraphProps) {
  const textContent = React.Children.toArray(children).join("")

  if (typewriter) {
    return (
      <p className={className}>
        <TypewriterText speed={speed}>{textContent}</TypewriterText>
      </p>
    )
  }

  if (reveal) {
    return (
      <p className={className}>
        <SplitTextReveal variant="slideUp">{textContent}</SplitTextReveal>
      </p>
    )
  }

  return <p className={className}>{children}</p>
}

interface HeroTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export function HeroTitle({ children, className = "", subtitle }: HeroTitleProps) {
  const textContent = React.Children.toArray(children).join("")

  return (
    <div className={className}>
      <KineticText variant="elastic" trigger="load" delay={0.5}>
        {textContent}
      </KineticText>
      {subtitle && (
        <div className="mt-4">
          <TypewriterText speed={100}>{subtitle}</TypewriterText>
        </div>
      )}
    </div>
  )
}

interface AnimatedBadgeProps {
  children: React.ReactNode
  variant?: "wave" | "bounce" | "rotate"
  className?: string
}

export function AnimatedBadge({ children, variant = "wave", className = "" }: AnimatedBadgeProps) {
  const textContent = React.Children.toArray(children).join("")

  return (
    <span className={`inline-block ${className}`}>
      <KineticText variant={variant} trigger="scroll">
        {textContent}
      </KineticText>
    </span>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
}

export function SectionTitle({ children, subtitle, className = "" }: SectionTitleProps) {
  const textContent = React.Children.toArray(children).join("")

  return (
    <motion.div className={`text-center mb-16 ${className}`}>
      <AnimatedBadge
        variant="bounce"
        className="mb-4 bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30 px-3 py-1 rounded-full text-sm font-semibold border"
      >
        {textContent}
      </AnimatedBadge>
      {subtitle && (
        <EnhancedHeading
          level={2}
          variant="elastic"
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
        >
          {subtitle}
        </EnhancedHeading>
      )}
    </motion.div>
  )
}

interface HighlightTextProps {
  children: React.ReactNode
  color?: "teal" | "amber" | "red" | "blue"
  className?: string
}

export function HighlightText({ children, color = "teal", className = "" }: HighlightTextProps) {
  const textContent = React.Children.toArray(children).join("")

  const colorMap = {
    teal: "from-teal-400 to-cyan-400",
    amber: "from-amber-400 to-orange-400",
    red: "from-red-400 to-pink-400",
    blue: "from-blue-400 to-indigo-400",
  }

  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colorMap[color]} ${className}`}>
      <KineticText variant="wave" trigger="scroll">
        {textContent}
      </KineticText>
    </span>
  )
}

interface InteractiveTextProps {
  children: React.ReactNode
  hoverEffect?: "wave" | "bounce" | "stretch" | "rotate"
  className?: string
}

export function InteractiveText({ children, hoverEffect = "wave", className = "" }: InteractiveTextProps) {
  const textContent = React.Children.toArray(children).join("")

  return (
    <span className={className}>
      <KineticText variant={hoverEffect} trigger="hover">
        {textContent}
      </KineticText>
    </span>
  )
}

interface FloatingTitleProps {
  children: React.ReactNode
  intensity?: "low" | "medium" | "high"
  className?: string
}

export function FloatingTitle({ children, intensity = "medium", className = "" }: FloatingTitleProps) {
  const textContent = React.Children.toArray(children).join("")

  return (
    <div className={className}>
      <FloatingLetters intensity={intensity}>{textContent}</FloatingLetters>
    </div>
  )
}
