"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (!target || typeof target.closest !== "function") return

      try {
        if (target.tagName === "BUTTON" || target.closest("button") || target.closest("a")) {
          setIsHovering(true)
          setCursorVariant("button")
        } else if (target.closest(".interactive-element")) {
          setIsHovering(true)
          setCursorVariant("interactive")
        } else {
          setIsHovering(false)
          setCursorVariant("default")
        }
      } catch (error) {
        // Fallback if closest method fails
        setIsHovering(false)
        setCursorVariant("default")
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
      setCursorVariant("default")
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      scale: 1,
      backgroundColor: "rgba(20, 184, 166, 0.3)",
      border: "2px solid rgba(20, 184, 166, 0.8)",
    },
    button: {
      x: mousePos.x - 24,
      y: mousePos.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(245, 158, 11, 0.3)",
      border: "2px solid rgba(245, 158, 11, 0.8)",
    },
    interactive: {
      x: mousePos.x - 20,
      y: mousePos.y - 20,
      scale: 1.2,
      backgroundColor: "rgba(139, 92, 246, 0.3)",
      border: "2px solid rgba(139, 92, 246, 0.8)",
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
    </AnimatePresence>
  )
}
