"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Import animated components
import InteractiveEyes from "@/components/interactive-eyes"
import FloatingCursor from "@/components/floating-cursor"
import MagneticButton from "@/components/magnetic-button"
import AnimatedBackground from "@/components/animated-background"
import ScrollReveal from "@/components/scroll-reveal"
import ThreeDCard from "@/components/3d-card"

// Import new skeleton components
import AnimatedProgramsGrid from "@/components/animated-programs-grid"

// Dynamic Background Components
function FloatingTechElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 text-teal-300/20 text-6xl font-mono"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-amber-300/20 text-4xl font-mono"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"</>"}
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 text-teal-400/15 text-2xl font-mono"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        01010101
      </motion.div>

      <motion.div
        className="absolute top-60 right-32 text-amber-400/15 text-xl font-mono"
        animate={{
          opacity: [0.1, 0.25, 0.1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        11001010
      </motion.div>
    </div>
  )
}

function CircuitPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        <motion.path
          d="M100 100 L300 100 L300 200 L500 200 L500 300 L700 300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-teal-400"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M200 400 L400 400 L400 500 L600 500 L600 600 L800 600"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-amber-400"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1 }}
        />

        <motion.circle
          cx="300"
          cy="100"
          r="4"
          fill="currentColor"
          className="text-teal-400"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.circle
          cx="500"
          cy="200"
          r="4"
          fill="currentColor"
          className="text-amber-400"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
      </svg>
    </div>
  )
}

function MovingDots() {
  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: dot.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

function TechGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
        {Array.from({ length: 96 }, (_, i) => (
          <motion.div
            key={i}
            className="border border-teal-400/20"
            animate={{
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 12) * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// WhatsApp Button Component
function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      <MagneticButton>
        <motion.a
          href="https://wa.me/919368842663"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </div>
        </motion.a>
      </MagneticButton>
    </motion.div>
  )
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-teal-900 dark:to-slate-900 relative overflow-hidden pt-16">
      {/* Dynamic Background Elements */}
      <AnimatedBackground />
      <FloatingCursor />
      <TechGrid />
      <MovingDots />
      <FloatingTechElements />
      <CircuitPattern />

      {/* Header Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <motion.div className="text-center">
              <Badge className="mb-4 bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30">
                Internship Programs
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
                  {" "}
                  Programs
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive internship programs designed to get you job-ready in today's most in-demand tech fields
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Interactive Eyes */}
          <ScrollReveal delay={0.3}>
            <div className="flex justify-center mt-12">
              <InteractiveEyes eyeCount={2} size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs Grid with Animated Skeletons */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedProgramsGrid />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our industry-focused internship
                programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl">
                      Get Started Today
                    </Button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/verify-certificate">
                    <Button
                      variant="outline"
                      className="border-teal-500 text-teal-600 dark:text-teal-300 hover:bg-teal-800/20 font-semibold px-8 py-3 rounded-xl"
                    >
                      Verify Certificate
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <motion.div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose INLIGHN TECH?
              </h2>
            </motion.div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div className="text-center" whileHover={{ y: -5 }}>
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">🎯</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      Industry-Focused Curriculum
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300">
                      Learn skills that are directly applicable in today's tech industry
                    </p>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div className="text-center" whileHover={{ y: -5 }}>
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">👨‍🏫</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Expert Mentorship</h3>
                    <p className="text-slate-600 dark:text-gray-300">
                      Get guidance from industry professionals with years of experience
                    </p>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div className="text-center" whileHover={{ y: -5 }}>
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">🏆</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Job Placement Support</h3>
                    <p className="text-slate-600 dark:text-gray-300">
                      95% job placement rate with our extensive industry network
                    </p>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Eyes at the end */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex justify-center">
              <InteractiveEyes eyeCount={4} size="md" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
