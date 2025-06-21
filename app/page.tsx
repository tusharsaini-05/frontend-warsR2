"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Shield,
  Database,
  BarChart3,
  Users,
  Award,
  Zap,
  Monitor,
  UserCheck,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

// Simple section title component
function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{children}</h2>
      {subtitle && <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}

// Simple animated background
function SimpleAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>
  )
}

// Simple morphing text
function SimpleMorphingText({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [texts.length])

  if (!mounted) {
    return <span className={className}>{texts[0]}</span>
  }

  return (
    <span className={`inline-block ${className}`}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {texts[currentIndex]}
      </motion.span>
    </span>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const programs = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Master ethical hacking, penetration testing, and security protocols",
      duration: "12 weeks",
      level: "Intermediate",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Build modern web applications with React, Node.js, and databases",
      duration: "16 weeks",
      level: "Beginner",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Learn machine learning, AI, and advanced analytics",
      duration: "14 weeks",
      level: "Intermediate",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Master data visualization, statistics, and business intelligence",
      duration: "10 weeks",
      level: "Beginner",
    },
  ]

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
      content:
        "During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making.",
    },
    {
      name: "Surendran K",
      role: "Data Science Intern",
      content:
        "I completed my Data Science internship where I got hands-on experience with Python, Machine Learning, and Data Visualization. Working on real datasets helped me understand the complete data science workflow.",
    },
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer Intern",
      content:
        "The Full Stack Development program at INLIGHN TECH was incredible. I learned React, Node.js, MongoDB, and worked on projects that challenged me and helped me grow as a developer.",
    },
    {
      name: "Priya Patel",
      role: "Cybersecurity Intern",
      content:
        "My cybersecurity internship gave me hands-on experience with ethical hacking, network security, and incident response. The practical approach and expert mentorship helped me build confidence.",
    },
  ]

  const whoWeAreCards = [
    {
      title: "About INLIGHN TECH",
      description:
        "At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills.",
      icon: BookOpen,
    },
    {
      title: "Our Mission",
      description:
        "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
      icon: Zap,
    },
    {
      title: "Our Vision",
      description:
        "To become the leading platform for tech education and career transformation, creating a bridge between academic learning and industry requirements through innovative internship programs and mentorship.",
      icon: Users,
    },
  ]

  const features = [
    {
      title: "Real-World Projects",
      description: "Gain hands-on experience with real industry projects and build a portfolio that stands out.",
      icon: Monitor,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Expert Mentorship",
      description: "Learn from seasoned professionals who guide you through every step of your journey.",
      icon: UserCheck,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Certified Programs",
      description: "Complete the programs and get certified in your field to showcase your skills.",
      icon: Award,
      color: "from-rose-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-teal-900 dark:to-slate-900 relative overflow-hidden">
      {/* Simple Animated Background */}
      <SimpleAnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Simple 3D-like background effect */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 w-64 h-64 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30 px-4 py-2 rounded-full text-sm font-semibold border inline-block">
              🚀 Transform Your Future
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              Transform Your Career
              <br />
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  with
                </span>
                {mounted ? (
                  <SimpleMorphingText
                    texts={["INLIGHN TECH", "Your Future", "Tech Excellence", "Innovation"]}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-bold"
                  />
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-bold">
                    INLIGHN TECH
                  </span>
                )}
              </div>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Gain real-world experience with our immersive internship programs in Cybersecurity, Full Stack
              Development, Data Science, Data Analysis, AI & Machine Learning, and various other cutting-edge tech
              domains. Learn today, lead tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg"
                >
                  <Link href="/programs" className="flex items-center">
                    Explore Internships <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/computer-science-engineering-1024x683.jpg-3QUNTVyN9JlWpkEEmcMYLYb3FdZj0Q.jpeg"
                alt="Data Analytics and Technology"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Provide Best Internship Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Cybersecurity, Full Stack Development, Data Science, AI & Machine Learning, Business Analysis, and Project Management.">
            We Provide Best Internship For You
          </SectionTitle>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 mt-16">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-900 dark:text-white">MINISTRY OF</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">CORPORATE AFFAIRS</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl font-bold text-blue-600 text-center">ISO</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-6 shadow-lg"
            >
              <div className="text-white font-bold text-sm text-center">#startupindia</div>
            </motion.div>
          </div>

          {/* Simple decorative element */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/computerscience-scaled.jpg-KW6BGni51zF83Sej1sgOSnyjDdjwQ3.jpeg"
                  alt="AI and Computer Science Technology"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200/50 dark:border-teal-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-slate-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              WHO WE ARE
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {whoWeAreCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="bg-gradient-to-br from-teal-700/40 to-slate-700/40 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-500 h-full overflow-hidden">
                  <CardContent className="p-8 relative">
                    <motion.div
                      className={`p-4 rounded-2xl mb-6 w-fit ${
                        index === 0
                          ? "bg-gradient-to-r from-cyan-500 to-teal-500"
                          : index === 1
                            ? "bg-gradient-to-r from-amber-500 to-orange-500"
                            : "bg-gradient-to-r from-cyan-500 to-blue-500"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <card.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{card.title}</h3>

                    <p className="leading-relaxed text-slate-600 dark:text-gray-300">{card.description}</p>

                    <motion.div
                      className="mt-6"
                      animate={{ x: hoveredCard === index ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center text-amber-400">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full">
                  <CardContent className="p-6">
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-slate-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Choose from our industry-leading internship programs designed to get you job-ready">
            Our Programs
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-teal-700/40 to-slate-700/40 backdrop-blur-sm border border-teal-500/20 hover:border-amber-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                      <program.icon className="h-12 w-12 text-amber-400 mb-4" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{program.title}</h3>

                    <p className="text-slate-500 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full">
                        {program.duration}
                      </span>
                      <span className="text-slate-400 dark:text-gray-500">{program.level}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-xl shadow-lg"
              >
                <Link href="/programs" className="flex items-center">
                  View All Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle subtitle="Join thousands of students who have transformed their careers with Inlighn Tech">
            Ready to Start Your Journey?
          </SectionTitle>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 px-8 py-3 rounded-xl shadow-lg"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-300 hover:bg-teal-800/20 px-8 py-3 rounded-xl"
              >
                <Link href="/verify-certificate" className="flex items-center">
                  Verify Certificate
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Simple decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-4">
              <div className="w-4 h-4 bg-teal-500/60 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-cyan-500/60 rounded-full animate-pulse delay-200"></div>
              <div className="w-4 h-4 bg-amber-500/60 rounded-full animate-pulse delay-400"></div>
              <div className="w-4 h-4 bg-orange-500/60 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
