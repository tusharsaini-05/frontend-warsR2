"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Import animated components
import InteractiveEyes from "@/components/interactive-eyes"
import FloatingCursor from "@/components/floating-cursor"
import MagneticButton from "@/components/magnetic-button"
import AnimatedBackground from "@/components/animated-background"
import ThreeDCard from "@/components/3d-card"
import KineticText from "@/components/kinetic-typography"
import { InteractiveText } from "@/components/enhanced-typography"
import BlurMotion, { BlurCard } from "@/components/blur-motion"
import EnhancedScrollReveal from "@/components/enhanced-scroll-reveal"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Handle signup logic here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-teal-900 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Custom Cursor */}
      <FloatingCursor />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <EnhancedScrollReveal direction="left" intensity="medium" blur={true}>
            <motion.div className="text-center lg:text-left space-y-8">
              <BlurMotion intensity="medium" direction="up" delay={0.2}>
                <div className="flex justify-center lg:justify-start mb-8">
                  <InteractiveEyes eyeCount={3} size="lg" />
                </div>
              </BlurMotion>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <KineticText
                  variant="elastic"
                  trigger="load"
                  stagger={0.05}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
                >
                  Join INLIGHN TECH
                </KineticText>
                <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-lg">
                  Create your account and start your journey in technology with our comprehensive internship programs.
                </p>
              </motion.div>

              <BlurMotion intensity="low" direction="scale" delay={0.6}>
                <ThreeDCard>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/computerscience-scaled.jpg-KW6BGni51zF83Sej1sgOSnyjDdjwQ3.jpeg"
                    alt="INLIGHN TECH Programs"
                    width={500}
                    height={300}
                    className="rounded-2xl"
                  />
                </ThreeDCard>
              </BlurMotion>
            </motion.div>
          </EnhancedScrollReveal>

          {/* Right Side - Signup Form */}
          <EnhancedScrollReveal direction="right" intensity="medium" blur={true} delay={0.2}>
            <BlurCard delay={0.4}>
              <MagneticButton>
                <ThreeDCard>
                  <Card className="bg-gradient-to-br from-white/80 to-slate-100/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
                    <CardHeader className="text-center pb-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <InteractiveText
                          hoverEffect="wave"
                          className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white"
                        >
                          Create Your Account
                        </InteractiveText>
                      </motion.div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <Label
                            htmlFor="name"
                            className="text-slate-700 dark:text-gray-300 font-medium flex items-center gap-2"
                          >
                            <User className="h-4 w-4" />
                            Full Name
                          </Label>
                          <div className="relative">
                            <Input
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              className={`h-12 bg-white/50 dark:bg-slate-700/50 border-2 transition-all duration-300 ${
                                focusedField === "name"
                                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                                  : "border-slate-300 dark:border-slate-600"
                              } text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400`}
                              required
                            />
                            {focusedField === "name" && (
                              <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                              >
                                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <Label
                            htmlFor="email"
                            className="text-slate-700 dark:text-gray-300 font-medium flex items-center gap-2"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </Label>
                          <div className="relative">
                            <Input
                              id="email"
                              type="email"
                              placeholder="e.g. picard@starfleet.org"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              className={`h-12 bg-white/50 dark:bg-slate-700/50 border-2 transition-all duration-300 ${
                                focusedField === "email"
                                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                                  : "border-slate-300 dark:border-slate-600"
                              } text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400`}
                              required
                            />
                            {focusedField === "email" && (
                              <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                              >
                                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>

                        {/* Password Field */}
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          <Label
                            htmlFor="password"
                            className="text-slate-700 dark:text-gray-300 font-medium flex items-center gap-2"
                          >
                            <Lock className="h-4 w-4" />
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              value={formData.password}
                              onChange={(e) => handleInputChange("password", e.target.value)}
                              onFocus={() => setFocusedField("password")}
                              onBlur={() => setFocusedField(null)}
                              className={`h-12 bg-white/50 dark:bg-slate-700/50 border-2 transition-all duration-300 pr-12 ${
                                focusedField === "password"
                                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                                  : "border-slate-300 dark:border-slate-600"
                              } text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400`}
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                            {focusedField === "password" && (
                              <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                              >
                                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>

                        {/* Confirm Password Field */}
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <Label
                            htmlFor="confirmPassword"
                            className="text-slate-700 dark:text-gray-300 font-medium flex items-center gap-2"
                          >
                            <Lock className="h-4 w-4" />
                            Confirm Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              value={formData.confirmPassword}
                              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                              onFocus={() => setFocusedField("confirmPassword")}
                              onBlur={() => setFocusedField(null)}
                              className={`h-12 bg-white/50 dark:bg-slate-700/50 border-2 transition-all duration-300 pr-12 ${
                                focusedField === "confirmPassword"
                                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                                  : "border-slate-300 dark:border-slate-600"
                              } text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400`}
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                            {focusedField === "confirmPassword" && (
                              <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                              >
                                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>

                        {/* Sign Up Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                        >
                          <MagneticButton>
                            <Button
                              type="submit"
                              disabled={isLoading}
                              className="w-full h-12 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                              {isLoading ? (
                                <div className="flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                                  <KineticText variant="wave" trigger="load" stagger={0.02}>
                                    Creating Account...
                                  </KineticText>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center">
                                  <KineticText variant="bounce" trigger="hover" stagger={0.02}>
                                    Create Account
                                  </KineticText>
                                  <motion.div
                                    className="ml-2"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                  >
                                    <ArrowRight className="h-4 w-4" />
                                  </motion.div>
                                </div>
                              )}
                            </Button>
                          </MagneticButton>
                        </motion.div>

                        {/* Login Link */}
                        <motion.div
                          className="text-center pt-4 border-t border-slate-200 dark:border-slate-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.1 }}
                        >
                          <p className="text-slate-600 dark:text-gray-400">
                            Already have an account?{" "}
                            <Link
                              href="/login"
                              className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium underline underline-offset-2 transition-colors"
                            >
                              Sign in here
                            </Link>
                          </p>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </ThreeDCard>
              </MagneticButton>
            </BlurCard>
          </EnhancedScrollReveal>
        </div>

        {/* Floating Interactive Eyes */}
        <motion.div
          className="absolute top-10 right-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <InteractiveEyes size="sm" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <InteractiveEyes size="sm" />
        </motion.div>
      </div>
    </div>
  )
}
