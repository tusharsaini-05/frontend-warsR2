"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Target,
  Lightbulb,
  Award,
  ChevronRight,
  CheckCircle,
  FileText,
  Search,
  Monitor,
  Building,
  Zap,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Import animated components
import InteractiveEyes from "@/components/interactive-eyes"
import FloatingCursor from "@/components/floating-cursor"
import MagneticButton from "@/components/magnetic-button"
import AnimatedBackground from "@/components/animated-background"
import ThreeDCard from "@/components/3d-card"

// Import kinetic typography components
import {
  SectionTitle,
  EnhancedHeading,
  EnhancedParagraph,
  AnimatedBadge,
  HighlightText,
  InteractiveText,
} from "@/components/enhanced-typography"
import KineticText, { TypewriterText } from "@/components/kinetic-typography"

// Import blur motion components
import BlurMotion, { BlurCard } from "@/components/blur-motion"
import BlurStatsSection from "@/components/blur-stats-section"
import BlurTestimonials from "@/components/blur-testimonials"
import EnhancedScrollReveal from "@/components/enhanced-scroll-reveal"

function CasinoCountingNumber({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(end * easeOut)
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  )
}

// Dynamic Background Components with Kinetic Typography
function FloatingTechElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <BlurMotion intensity="low" direction="rotate" delay={0}>
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
          <KineticText variant="rotate" trigger="load" infinite={true}>
            {"{ }"}
          </KineticText>
        </motion.div>
      </BlurMotion>

      <BlurMotion intensity="low" direction="rotate" delay={0.5}>
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
          <KineticText variant="wave" trigger="load" infinite={true}>
            {"</>"}
          </KineticText>
        </motion.div>
      </BlurMotion>

      <BlurMotion intensity="low" direction="left" delay={1}>
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
          <KineticText variant="glitch" trigger="load" infinite={true}>
            01010101
          </KineticText>
        </motion.div>
      </BlurMotion>

      <BlurMotion intensity="low" direction="right" delay={1.5}>
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
          <KineticText variant="bounce" trigger="load" infinite={true}>
            11001010
          </KineticText>
        </motion.div>
      </BlurMotion>
    </div>
  )
}

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const stats = [
    { number: 5000, label: "INTERNS ENROLLED", suffix: "+" },
    { number: 9000, label: "PROJECTS COMPLETED", suffix: "+" },
    { number: 93, label: "SATISFACTION RATE", suffix: "%" },
    { number: 30, label: "TOP INSTRUCTORS", suffix: "+" },
  ]

  const testimonials = [
    {
      name: "Mirunalini R",
      role: "Data Analyst Intern",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making. The mentorship and structured learning approach made a significant impact on my skills.",
    },
    {
      name: "Surendran K",
      role: "Data Science Intern",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I completed my Data Science internship where I got hands-on experience with Python, Machine Learning, and Data Visualization. Working on real datasets helped me understand the complete data science workflow. Thanks to INLIGHN TECH, I'm now confident in my data science skills.",
    },
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer Intern",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The Full Stack Development program at INLIGHN TECH was incredible. I learned React, Node.js, MongoDB, and worked on projects that challenged me and helped me grow as a developer. The structured approach and real-world projects made me industry-ready.",
    },
    {
      name: "Priya Patel",
      role: "Cybersecurity Intern",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "My cybersecurity internship gave me hands-on experience with ethical hacking, network security, and incident response. The practical approach and expert mentorship helped me build confidence in cybersecurity practices.",
    },
  ]

  const whyChooseUs = [
    {
      title: "High Quality Resources",
      description:
        "Our expertly designed resources provide hands-on learning and real-world skills. With up-to-date content and personalized mentorship, you'll gain practical knowledge to help you succeed in today's competitive tech industry.",
      icon: FileText,
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from seasoned industry professionals who bring real-world experience and insights to every lesson, guiding you with practical knowledge and industry best practices.",
      icon: Monitor,
    },
    {
      title: "Internship Portal Access",
      description:
        "Get separate portal access to all course materials and updates, allowing you to learn at your own pace and stay up-to-date with the latest industry trends and technologies.",
      icon: Search,
    },
  ]

  const roadmapSteps = [
    {
      step: "Step 1",
      title: "Registration Form & Portal Access",
      description:
        "Register yourself at INLIGHN TECH and get your personalized portal access with all course materials",
      icon: FileText,
    },
    {
      step: "Step 2",
      title: "Interview Call - Next Day",
      description: "Get interviewed by our expert team to assess your goals and customize your learning path",
      icon: Users,
    },
    {
      step: "Step 3",
      title: "Offer Letter with Batch Group Link",
      description:
        "Once you receive your Offer Letter, you'll get access to your WhatsApp batch group for peer learning",
      icon: FileText,
    },
    {
      step: "Step 4",
      title: "Select Your Project and Submit Work",
      description:
        "Choose your project from our curated list or propose your own, then submit your completed work for review",
      icon: Target,
    },
    {
      step: "Step 5",
      title: "Experience Letter & Certificate of Completion",
      description:
        "Upon successful project submission, receive your ISO-Certified Completion Certificate and Experience Letter",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-teal-900 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Custom Cursor */}
      <FloatingCursor />

      {/* Global Background Elements */}
      <FloatingTechElements />

      {/* Hero Section */}
      <section className="py-20 pt-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <AnimatedBadge variant="bounce" className="mb-4">
              About Inlighn Tech
            </AnimatedBadge>

            <EnhancedHeading
              level={1}
              variant="elastic"
              className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Shaping the Future of
            </EnhancedHeading>

            <HighlightText color="teal" className="text-5xl md:text-6xl font-bold">
              Tech Education
            </HighlightText>

            <EnhancedParagraph
              reveal={true}
              className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mt-6"
            >
              We're on a mission to bridge the gap between academic learning and industry requirements, providing
              students with practical skills and real-world experience.
            </EnhancedParagraph>
          </div>

          {/* Interactive Eyes */}
          <BlurMotion intensity="low" direction="scale" delay={0.4}>
            <div className="flex justify-center mb-12">
              <InteractiveEyes eyeCount={2} size="lg" />
            </div>
          </BlurMotion>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle subtitle="The Best Beneficial Side of INLIGHNTECH">WHY CHOOSE INLIGHN TECH</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {whyChooseUs.map((item, index) => (
              <BlurCard key={index} delay={index * 0.2}>
                <MagneticButton>
                  <ThreeDCard>
                    <motion.div className="text-center relative" whileHover={{ y: -10 }}>
                      <div className="relative mb-8">
                        <motion.div
                          className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-amber-500 flex items-center justify-center shadow-xl relative z-10"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="h-12 w-12 text-white" />
                        </motion.div>
                        {/* Animated connecting lines */}
                        {index < whyChooseUs.length - 1 && (
                          <div className="hidden md:block absolute top-16 left-full w-full h-0.5 -translate-x-16 z-0">
                            <motion.div
                              className="h-full bg-gradient-to-r from-teal-300 to-amber-300"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 1, delay: index * 0.3 }}
                              style={{ transformOrigin: "left" }}
                            />
                            {/* Moving dot along the line */}
                            <motion.div
                              className="absolute top-1/2 w-2 h-2 bg-amber-400 rounded-full -translate-y-1/2"
                              animate={{
                                x: [0, "100%"],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                                delay: index * 0.5,
                              }}
                            />
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        <KineticText variant="wave" trigger="hover">
                          {item.title}
                        </KineticText>
                      </h3>

                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                        {item.description}
                      </p>
                    </motion.div>
                  </ThreeDCard>
                </MagneticButton>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle>Our Achievements</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-16">
            <EnhancedScrollReveal direction="left" intensity="medium" blur={true}>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                    <Card className="bg-gradient-to-br from-teal-700/40 to-slate-700/40 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden">
                      <CardContent className="p-8 relative z-10">
                        <div className="mb-6">
                          <motion.div
                            className="w-20 h-20 mx-auto bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center mb-4 shadow-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <Building className="h-10 w-10 text-white" />
                          </motion.div>

                          <KineticText
                            variant="wave"
                            trigger="scroll"
                            className="text-xs text-teal-300 font-semibold mb-2"
                          >
                            GOVERNMENT OF INDIA
                          </KineticText>
                          <KineticText
                            variant="wave"
                            trigger="scroll"
                            className="text-xs text-teal-300 font-semibold mb-4"
                          >
                            MINISTRY OF CORPORATE AFFAIRS
                          </KineticText>
                        </div>

                        <InteractiveText hoverEffect="stretch" className="text-xl font-bold text-white mb-2">
                          Incorporation Certificate
                        </InteractiveText>

                        <TypewriterText speed={50} className="text-gray-300 text-sm mb-4">
                          Ministry of Corporate Affairs Approved
                        </TypewriterText>

                        <div className="text-xs text-gray-400">
                          <p>Certificate of Incorporation</p>
                          <p>Central Registration Centre</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="right" intensity="medium" blur={true} delay={0.2}>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                    <Card className="bg-gradient-to-br from-teal-700/40 to-slate-700/40 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden">
                      <CardContent className="p-8 relative z-10">
                        <div className="mb-6">
                          <motion.div
                            className="w-20 h-20 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <Award className="h-10 w-10 text-white" />
                          </motion.div>

                          <KineticText
                            variant="bounce"
                            trigger="scroll"
                            className="text-xs text-amber-300 font-semibold mb-2"
                          >
                            GOVERNMENT OF INDIA
                          </KineticText>
                          <KineticText
                            variant="bounce"
                            trigger="scroll"
                            className="text-xs text-amber-300 font-semibold mb-4"
                          >
                            MINISTRY OF COMMERCE & INDUSTRY
                          </KineticText>
                        </div>

                        <InteractiveText hoverEffect="rotate" className="text-xl font-bold text-white mb-2">
                          Startup India Recognitions
                        </InteractiveText>

                        <TypewriterText speed={40} className="text-gray-300 text-sm mb-4">
                          Department for Promotion of Industry and Internal Trade Approved
                        </TypewriterText>

                        <div className="text-xs text-gray-400">
                          <p>Certificate of Recognition</p>
                          <p>INLIGHN GLOBAL PRIVATE LIMITED</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </EnhancedScrollReveal>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedScrollReveal direction="left" intensity="medium" blur={true}>
              <motion.div>
                <AnimatedBadge variant="wave" className="mb-4">
                  ROADMAP OF INTERNSHIP JOURNEY
                </AnimatedBadge>

                <EnhancedHeading
                  level={2}
                  variant="elastic"
                  className="text-4xl font-bold text-slate-900 dark:text-white mb-6"
                >
                  We Provide Best{" "}
                  <HighlightText color="amber" className="px-3 py-1 rounded-lg text-slate-900">
                    Industry Services
                  </HighlightText>{" "}
                  For You.
                </EnhancedHeading>

                <EnhancedParagraph reveal={true} className="text-slate-600 dark:text-gray-300 leading-relaxed">
                  At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic
                  learning and industry needs. Founded with a passion for providing meaningful and immersive learning
                  experiences, we offer internship programs that equip students and young professionals with practical
                  skills in Cyber Security, Full Stack Development, Data Science, and Project Management.
                </EnhancedParagraph>
              </motion.div>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="right" intensity="medium" blur={true} delay={0.2}>
              <motion.div className="relative">
                {/* Animated Curved Path Background */}
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 400 500" className="w-full h-full">
                    <motion.path
                      d="M50 50 Q200 100 350 150 Q200 200 50 250 Q200 300 350 350 Q200 400 50 450"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      className="text-teal-400"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Moving data packets along the path */}
                    <motion.circle r="3" fill="currentColor" className="text-amber-400">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M50 50 Q200 100 350 150 Q200 200 50 250 Q200 300 350 350 Q200 400 50 450"
                      />
                    </motion.circle>
                  </svg>
                </div>

                <div className="space-y-8 relative z-10">
                  {roadmapSteps.map((step, index) => (
                    <BlurCard key={index} delay={index * 0.1}>
                      <MagneticButton>
                        <motion.div
                          className={`flex items-start space-x-4 ${
                            index % 2 === 0 ? "" : "flex-row-reverse space-x-reverse"
                          }`}
                          whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                        >
                          <div className="flex-shrink-0">
                            <motion.div
                              className="w-16 h-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg relative"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <step.icon className="h-8 w-8 text-white" />
                              {/* Pulsing ring */}
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-teal-400/50"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: index * 0.3,
                                }}
                              />
                            </motion.div>
                          </div>
                          <ThreeDCard>
                            <Card className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-300 flex-1 max-w-xs relative overflow-hidden">
                              <CardContent className="p-4 relative z-10">
                                <KineticText
                                  variant="wave"
                                  trigger="scroll"
                                  className="text-xs font-semibold text-amber-400 mb-1"
                                >
                                  {step.step}
                                </KineticText>

                                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                  {step.title}
                                </h3>

                                <p className="text-xs text-slate-600 dark:text-gray-300">{step.description}</p>
                              </CardContent>
                            </Card>
                          </ThreeDCard>
                        </motion.div>
                      </MagneticButton>
                    </BlurCard>
                  ))}
                </div>

                <BlurMotion intensity="medium" direction="scale" delay={1}>
                  <motion.div className="text-center mt-8">
                    <MagneticButton>
                      <motion.div
                        className="inline-flex items-center bg-gradient-to-r from-teal-600 to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Button background animation */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-amber-600 to-teal-600"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />

                        <KineticText variant="bounce" trigger="hover" className="relative z-10">
                          Begin your Journey
                        </KineticText>

                        <div className="ml-2 flex relative z-10">
                          <ChevronRight className="h-4 w-4" />
                          <ChevronRight className="h-4 w-4 -ml-2" />
                        </div>
                      </motion.div>
                    </MagneticButton>
                  </motion.div>
                </BlurMotion>
              </motion.div>
            </EnhancedScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedScrollReveal direction="left" intensity="medium" blur={true}>
              <motion.div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    <KineticText variant="wave" trigger="scroll">
                      Save Time and Effort with
                    </KineticText>
                    <br />
                    <HighlightText color="teal">INLIGHN TECH</HighlightText>
                  </h2>
                </div>

                <div className="space-y-6">
                  <BlurCard delay={0.4}>
                    <MagneticButton>
                      <motion.div
                        className="flex items-start space-x-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg relative"
                            animate={{
                              boxShadow: ["0 0 0 0 rgba(20, 184, 166, 0.4)", "0 0 0 10px rgba(20, 184, 166, 0)"],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <CheckCircle className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                            <KineticText variant="wave" trigger="scroll">
                              Our Vision
                            </KineticText>
                          </h3>

                          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                            To be a leading EdTech platform that bridges the gap between academic knowledge and industry
                            demands, shaping the next generation of tech innovators and leaders through hands-on,
                            practical learning experiences.
                          </p>
                        </div>
                      </motion.div>
                    </MagneticButton>
                  </BlurCard>

                  <BlurCard delay={0.6}>
                    <MagneticButton>
                      <motion.div
                        className="flex items-start space-x-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg relative"
                            animate={{
                              boxShadow: ["0 0 0 0 rgba(245, 158, 11, 0.4)", "0 0 0 10px rgba(245, 158, 11, 0)"],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                          >
                            <CheckCircle className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                            <KineticText variant="bounce" trigger="scroll">
                              Our Mission
                            </KineticText>
                          </h3>

                          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                            To empower students and young professionals by providing immersive, real-world learning
                            experiences through tailored internship programs. We aim to equip our participants with the
                            practical skills and confidence they need to succeed in the fast-evolving tech industry.
                          </p>
                        </div>
                      </motion.div>
                    </MagneticButton>
                  </BlurCard>
                </div>
              </motion.div>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="right" intensity="medium" blur={true} delay={0.2}>
              <MagneticButton>
                <ThreeDCard>
                  <motion.div className="relative">
                    <div className="bg-gradient-to-br from-teal-700/40 to-slate-700/40 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 relative overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 400 400">
                          <motion.circle
                            cx="200"
                            cy="200"
                            r="100"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-teal-400"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          <motion.circle
                            cx="200"
                            cy="200"
                            r="150"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-amber-400"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                        </svg>
                      </div>

                      <div className="relative z-10">
                        {/* Main checkmark */}
                        <div className="flex items-center justify-center mb-6">
                          <motion.div
                            className="w-24 h-24 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg relative"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <CheckCircle className="h-12 w-12 text-white" />
                            {/* Orbiting dots */}
                            <motion.div
                              className="absolute w-3 h-3 bg-amber-400 rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              style={{ transformOrigin: "0 40px" }}
                            />
                          </motion.div>
                        </div>

                        {/* Team illustration area */}
                        <div className="text-center relative">
                          <motion.div
                            className="w-32 h-32 bg-gradient-to-r from-teal-600/30 to-amber-600/30 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-teal-500/20 relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Users className="h-16 w-16 text-teal-300" />
                            {/* Floating particles */}
                            {Array.from({ length: 6 }, (_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                animate={{
                                  x: [0, Math.cos((i * 60 * Math.PI) / 180) * 30],
                                  y: [0, Math.sin((i * 60 * Math.PI) / 180) * 30],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </motion.div>

                          {/* Lightbulb in corner */}
                          <div className="absolute top-4 right-4">
                            <motion.div
                              className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 10, -10, 0],
                              }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Lightbulb className="h-8 w-8 text-white" />
                            </motion.div>
                          </div>

                          {/* Additional decorative elements */}
                          <div className="absolute bottom-4 left-4">
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Zap className="h-6 w-6 text-white" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ThreeDCard>
              </MagneticButton>
            </EnhancedScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section with Kinetic Typography */}
      <BlurStatsSection stats={stats} title="Our Achievements" />

      {/* Testimonials Section with Kinetic Typography */}
      <BlurTestimonials testimonials={testimonials} />

      {/* Interactive Eyes at the end */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <BlurMotion intensity="low" direction="scale" delay={0.2}>
            <div className="flex justify-center">
              <InteractiveEyes eyeCount={4} size="md" />
            </div>
          </BlurMotion>
        </div>
      </section>
    </div>
  )
}
