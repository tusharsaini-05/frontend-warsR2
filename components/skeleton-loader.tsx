"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "default" | "shimmer" | "pulse" | "wave"
  children?: React.ReactNode
}

export function Skeleton({ className, variant = "shimmer", children, ...props }: SkeletonProps) {
  const baseClasses = "bg-slate-200 dark:bg-slate-700 rounded-md"

  const variants = {
    default: "animate-pulse",
    shimmer: "relative overflow-hidden",
    pulse: "animate-pulse",
    wave: "relative overflow-hidden",
  }

  return (
    <div className={cn(baseClasses, variants[variant], className)} {...props}>
      {variant === "shimmer" && (
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["0%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
      {variant === "wave" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/30 dark:via-slate-600/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      )}
      {children}
    </div>
  )
}

// Specific skeleton components
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 space-y-4", className)}>
      <Skeleton className="h-4 w-3/4" variant="shimmer" />
      <Skeleton className="h-4 w-1/2" variant="shimmer" />
      <Skeleton className="h-32 w-full" variant="shimmer" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-16" variant="shimmer" />
        <Skeleton className="h-8 w-20" variant="shimmer" />
      </div>
    </div>
  )
}

export function ProfileSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center space-x-4 p-4", className)}>
      <Skeleton className="h-16 w-16 rounded-full" variant="pulse" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-32" variant="shimmer" />
        <Skeleton className="h-3 w-24" variant="shimmer" />
        <Skeleton className="h-3 w-40" variant="shimmer" />
      </div>
    </div>
  )
}

export function ProgramCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 space-y-4 border rounded-lg", className)}>
      <Skeleton className="h-48 w-full rounded-lg" variant="wave" />
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" variant="shimmer" />
        <div className="flex space-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-4 rounded-full" variant="pulse" />
          ))}
        </div>
        <Skeleton className="h-4 w-full" variant="shimmer" />
        <Skeleton className="h-4 w-2/3" variant="shimmer" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-20" variant="shimmer" />
          <Skeleton className="h-8 w-24 rounded-full" variant="pulse" />
        </div>
      </div>
    </div>
  )
}

export function StatsSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="text-center p-6 border rounded-lg">
          <Skeleton className="h-12 w-20 mx-auto mb-2" variant="pulse" />
          <Skeleton className="h-4 w-24 mx-auto" variant="shimmer" />
        </div>
      ))}
    </div>
  )
}

export function TestimonialSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-8 space-y-6 border rounded-lg", className)}>
      <div className="flex flex-col items-center">
        <Skeleton className="h-20 w-20 rounded-full mb-4" variant="pulse" />
        <Skeleton className="h-5 w-32 mb-2" variant="shimmer" />
        <Skeleton className="h-4 w-24" variant="shimmer" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" variant="shimmer" />
        <Skeleton className="h-4 w-full" variant="shimmer" />
        <Skeleton className="h-4 w-3/4" variant="shimmer" />
      </div>
    </div>
  )
}

export function TableSkeleton({ rows = 5, cols = 4, className }: { rows?: number; cols?: number; className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      {/* Header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-full" variant="shimmer" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-8 w-full" variant="wave" />
          ))}
        </div>
      ))}
    </div>
  )
}

export function FormSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" variant="shimmer" />
          <Skeleton className="h-10 w-full" variant="wave" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" variant="shimmer" />
          <Skeleton className="h-10 w-full" variant="wave" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" variant="shimmer" />
        <Skeleton className="h-32 w-full" variant="wave" />
      </div>
      <Skeleton className="h-12 w-full" variant="pulse" />
    </div>
  )
}
