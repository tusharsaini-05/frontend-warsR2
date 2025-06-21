"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface ThreeDCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function ThreeDCard({ children, className = "", intensity = 15 }: ThreeDCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * intensity
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * intensity

    setRotateX(-rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`interactive-element ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovering ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
    >
      <motion.div
        animate={{
          boxShadow: isHovering
            ? `${rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,0.3)`
            : "0px 0px 20px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
