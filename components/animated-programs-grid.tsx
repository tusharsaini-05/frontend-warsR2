"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LoadingWrapper from "./loading-wrapper"
import { ProgramCardSkeleton } from "./skeleton-loader"
import MagneticButton from "./magnetic-button"
import ThreeDCard from "./3d-card"

interface Program {
  id: string
  title: string
  description: string
  image: string
  rating: number
}

export default function AnimatedProgramsGrid() {
  const [isLoading, setIsLoading] = useState(true)
  const [programs, setPrograms] = useState<Program[]>([])
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null)

  // Simulate data fetching
  useEffect(() => {
    const fetchPrograms = async () => {
      setIsLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockPrograms: Program[] = [
        {
          id: "business-analyst",
          title: "Business Analyst Internship Program",
          description: "Business Analyst – Internship Program Gain practical business analysis skills by working on...",
          image: "/placeholder.svg?height=200&width=350",
          rating: 5,
        },
        {
          id: "frontend-development",
          title: "Front-End Development Internship",
          description:
            "Front-End Web Development – Internship Program Kickstart your journey into web development by...",
          image: "/placeholder.svg?height=200&width=350",
          rating: 5,
        },
        {
          id: "ethical-hacking",
          title: "Ethical Hacking with Kali Linux",
          description: "🔐 Ethical Hacking with Kali Linux – Internship Program Gain practical skills in...",
          image: "/placeholder.svg?height=200&width=350",
          rating: 5,
        },
        {
          id: "fullstack-development",
          title: "Full Stack Development Internship",
          description: "Full-Stack Web Development – Internship Program Master web development from the ground up...",
          image: "/placeholder.svg?height=200&width=350",
          rating: 5,
        },
        {
          id: "ai-machine-learning",
          title: "AI & Machine Learning Internship Program",
          description: "🤖 AI & Machine Learning – Internship Program Build a strong foundation in...",
          image: "/placeholder.svg?height=200&width=350",
          rating: 5,
        },
        {
          id: "data-analyst",
          title: "Data Analyst Internship",
          description: "📊 Data Analyst – Internship Program Learn how to collect, clean, analyze, and...",
          image: "/placeholder.svg?height=200&width=350",
          rating: 5,
        },
      ]

      setPrograms(mockPrograms)
      setIsLoading(false)
    }

    fetchPrograms()
  }, [])

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  const skeletonGrid = (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProgramCardSkeleton
          key={index}
          className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20"
        />
      ))}
    </div>
  )

  const programsGrid = (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {programs.map((program, index) => (
        <motion.div
          key={program.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            filter:
              hoveredProgram && hoveredProgram !== program.id ? "blur(4px) brightness(0.7)" : "blur(0px) brightness(1)",
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            filter: { duration: 0.3, ease: "easeInOut" },
          }}
          whileHover={{ y: -5, scale: 1.02 }}
          onMouseEnter={() => setHoveredProgram(program.id)}
          onMouseLeave={() => setHoveredProgram(null)}
          className="group"
        >
          <MagneticButton>
            <ThreeDCard>
              <Card className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2">
                    {program.title}
                  </h3>

                  <StarRating rating={program.rating} />

                  <p className="text-slate-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">{program.description}</p>

                  <Link href={`/programs/${program.id}`}>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ThreeDCard>
          </MagneticButton>
        </motion.div>
      ))}
    </div>
  )

  return (
    <LoadingWrapper isLoading={isLoading} skeleton={skeletonGrid} delay={300}>
      {programsGrid}
    </LoadingWrapper>
  )
}
