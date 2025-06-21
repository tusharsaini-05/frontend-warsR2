"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface InteractiveEyesProps {
  className?: string
  eyeCount?: number
  size?: "sm" | "md" | "lg"
}

export default function InteractiveEyes({ className = "", eyeCount = 2, size = "md" }: InteractiveEyesProps) {
  const [rotateVal, setRotateVal] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      setMousePos({ x: mouseX, y: mouseY })

      const deltaX = mouseX - window.innerWidth / 2
      const deltaY = mouseY - window.innerHeight / 2

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotateVal(angle - 180)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const sizeClasses = {
    sm: {
      outer: "w-16 h-16 md:w-20 md:h-20",
      inner: "w-10 h-10 md:w-12 md:h-12",
      pupil: "w-2 h-2 md:w-3 md:h-3",
      text: "text-xs md:text-sm",
    },
    md: {
      outer: "w-24 h-24 md:w-32 md:h-32",
      inner: "w-16 h-16 md:w-20 md:h-20",
      pupil: "w-3 h-3 md:w-4 md:h-4",
      text: "text-sm md:text-base",
    },
    lg: {
      outer: "w-32 h-32 md:w-48 md:h-48",
      inner: "w-20 h-20 md:w-32 md:h-32",
      pupil: "w-4 h-4 md:w-6 md:h-6",
      text: "text-base md:text-xl",
    },
  }

  const currentSize = sizeClasses[size]

  const eyeLabels = ["TECH", "CODE", "AI", "DATA"]

  const elements = Array.from({ length: eyeCount }).map((_, i) => (
    <motion.div
      key={i}
      className={`${currentSize.outer} bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`${currentSize.inner} bg-gradient-to-br from-slate-800 to-slate-900 relative rounded-full flex items-center justify-center shadow-inner`}
      >
        <span className={`text-white font-bold ${currentSize.text} tracking-wider`}>{eyeLabels[i] || "TECH"}</span>
        <motion.div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotateVal}deg)`,
          }}
          className="w-full absolute top-1/2 left-1/2"
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <div
            className={`${currentSize.pupil} bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full shadow-lg`}
          ></div>
        </motion.div>
      </div>
    </motion.div>
  ))

  return <div className={`flex items-center justify-center gap-6 ${className}`}>{elements}</div>
}
