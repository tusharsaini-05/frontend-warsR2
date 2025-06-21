"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"
import LoadingWrapper from "./loading-wrapper"
import { FormSkeleton } from "./skeleton-loader"
import MagneticButton from "./magnetic-button"
import ThreeDCard from "./3d-card"

export default function AnimatedContactForm() {
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Simulate form initialization delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Handle success state here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const skeletonForm = (
    <Card className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20">
      <CardHeader>
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 animate-pulse" />
      </CardHeader>
      <CardContent>
        <FormSkeleton />
      </CardContent>
    </Card>
  )

  const contactForm = (
    <MagneticButton>
      <ThreeDCard>
        <Card className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-white">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-600 dark:text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-600 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-600 dark:text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program" className="text-slate-600 dark:text-gray-300">
                    Interested Program
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("program", value)}>
                    <SelectTrigger className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600">
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="fullstack">Full Stack Development</SelectItem>
                      <SelectItem value="datascience">Data Science</SelectItem>
                      <SelectItem value="dataanalysis">Data Analysis</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="message" className="text-slate-600 dark:text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your goals and how we can help..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white min-h-[120px]"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MagneticButton>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </MagneticButton>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </ThreeDCard>
    </MagneticButton>
  )

  return (
    <LoadingWrapper isLoading={isLoading} skeleton={skeletonForm} delay={300}>
      {contactForm}
    </LoadingWrapper>
  )
}
