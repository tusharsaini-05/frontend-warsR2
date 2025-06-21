"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, ArrowRight, X } from "lucide-react"
import MagneticButton from "@/components/magnetic-button"
import KineticText from "@/components/kinetic-typography"
import { InteractiveText } from "@/components/enhanced-typography"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    onClose()
    // Handle login logic here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative z-10 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-white/95 to-slate-100/95 dark:from-slate-800/95 dark:to-slate-900/95 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <X className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </button>

              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <InteractiveText hoverEffect="wave" className="text-2xl font-bold text-slate-900 dark:text-white">
                    Log in to INLIGHN TECH
                  </InteractiveText>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Label
                      htmlFor="modal-email"
                      className="text-slate-700 dark:text-gray-300 font-medium flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="modal-email"
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
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Label
                      htmlFor="modal-password"
                      className="text-slate-700 dark:text-gray-300 font-medium flex items-center gap-2"
                    >
                      <Lock className="h-4 w-4" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="modal-password"
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

                  {/* Login Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
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
                              Signing in...
                            </KineticText>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <KineticText variant="bounce" trigger="hover" stagger={0.02}>
                              Login
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

                  {/* Forgot Password Link */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p className="text-slate-600 dark:text-gray-400 text-sm">
                      Forgot your password?{" "}
                      <button
                        type="button"
                        className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium underline underline-offset-2 transition-colors"
                        onClick={() => {
                          // Handle forgot password logic
                          console.log("Forgot password clicked")
                        }}
                      >
                        Reset it.
                      </button>
                    </p>
                  </motion.div>

                  {/* Sign Up Link */}
                  <motion.div
                    className="text-center pt-4 border-t border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <p className="text-slate-600 dark:text-gray-400 text-sm">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium underline underline-offset-2 transition-colors"
                        onClick={() => {
                          onClose()
                          // Handle sign up navigation
                          console.log("Sign up clicked")
                        }}
                      >
                        Sign up here
                      </button>
                    </p>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
