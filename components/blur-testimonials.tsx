"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import BlurMotion, { BlurCard, BlurText } from "./blur-motion"
import MagneticButton from "./magnetic-button"
import ThreeDCard from "./3d-card"

interface Testimonial {
  name: string
  role: string
  image: string
  content: string
}

interface BlurTestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  badgeText?: string
}

export default function BlurTestimonials({
  testimonials,
  title = "What Our Interns Say",
  subtitle,
  badgeText = "TESTIMONIALS",
}: BlurTestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-teal-800/50 to-slate-800/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          <BlurText delay={0.2}>
            <motion.div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30 px-6 py-2 text-sm font-semibold rounded-full">
                {badgeText}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
              {subtitle && <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
            </motion.div>
          </BlurText>

          <BlurCard delay={0.4}>
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <ThreeDCard>
                      <Card className="bg-gradient-to-br from-teal-700/40 to-slate-700/40 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden">
                        {/* Card background tech elements */}
                        <div className="absolute inset-0 opacity-5">
                          <motion.div
                            className="absolute top-4 right-4 w-8 h-8 border border-teal-400 rounded"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          <motion.div
                            className="absolute bottom-4 left-4 w-6 h-6 border border-amber-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          />
                        </div>

                        <CardContent className="p-8 text-center relative z-10">
                          <div className="mb-6">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="rounded-full mx-auto mb-4 border-4 border-amber-400"
                              />
                            </motion.div>
                            <h3 className="text-xl font-bold text-amber-400 mb-1">{testimonial.name}</h3>
                            <p className="text-teal-300 text-sm">{testimonial.role}</p>
                          </div>
                          <p className="text-slate-600 dark:text-gray-300 leading-relaxed italic">
                            "{testimonial.content}"
                          </p>
                        </CardContent>
                      </Card>
                    </ThreeDCard>
                  </div>
                ))}
              </motion.div>
            </div>
          </BlurCard>

          <BlurMotion intensity="low" direction="left" delay={0.6}>
            <MagneticButton>
              <motion.button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-700 hover:to-amber-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
            </MagneticButton>
          </BlurMotion>

          <BlurMotion intensity="low" direction="right" delay={0.6}>
            <MagneticButton>
              <motion.button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-700 hover:to-amber-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </MagneticButton>
          </BlurMotion>

          <BlurMotion intensity="low" direction="up" delay={0.8}>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <MagneticButton key={index}>
                  <motion.button
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-amber-400 scale-125"
                        : "bg-slate-400 dark:bg-gray-600 hover:bg-slate-500 dark:hover:bg-gray-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </MagneticButton>
              ))}
            </div>
          </BlurMotion>
        </div>
      </div>
    </section>
  )
}
