"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, CheckCircle, XCircle, Award, Calendar, User } from "lucide-react"

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
    </motion.div>
  )
}

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)

  // Mock certificate data
  const mockCertificates = {
    "INLT-2024-001": {
      valid: true,
      studentName: "Mirunalini R",
      program: "Data Analyst Internship",
      issueDate: "2024-01-15",
      completionDate: "2024-01-10",
      grade: "A+",
      skills: ["SQL", "Power BI", "Tableau", "Data Cleaning", "Statistical Analysis"],
    },
    "INLT-2024-002": {
      valid: true,
      studentName: "Surendran K",
      program: "Data Science Internship",
      issueDate: "2024-02-20",
      completionDate: "2024-02-15",
      grade: "A",
      skills: ["Python", "Machine Learning", "Data Visualization", "TensorFlow", "Statistical Modeling"],
    },
    "INLT-2024-003": {
      valid: true,
      studentName: "Rahul Sharma",
      program: "Full Stack Development Internship",
      issueDate: "2024-03-10",
      completionDate: "2024-03-05",
      grade: "A+",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML/CSS"],
    },
    "INLT-2024-004": {
      valid: true,
      studentName: "Priya Patel",
      program: "Ethical Hacking with Kali Linux",
      issueDate: "2024-04-05",
      completionDate: "2024-03-30",
      grade: "A",
      skills: ["Ethical Hacking", "Kali Linux", "Network Security", "Penetration Testing", "Vulnerability Assessment"],
    },
    "INLT-2024-005": {
      valid: true,
      studentName: "Amit Kumar",
      program: "AI & Machine Learning Internship",
      issueDate: "2024-05-12",
      completionDate: "2024-05-08",
      grade: "A+",
      skills: ["Python", "TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision"],
    },
  }

  const handleVerify = async () => {
    setIsVerifying(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const certificate = mockCertificates[certificateId as keyof typeof mockCertificates]

    if (certificate) {
      setVerificationResult(certificate)
    } else {
      setVerificationResult({ valid: false })
    }

    setIsVerifying(false)
  }

  const resetVerification = () => {
    setCertificateId("")
    setVerificationResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-teal-900 dark:to-slate-900 pt-16 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <TechGrid />
      <MovingDots />
      <FloatingTechElements />
      <CircuitPattern />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30">
              Certificate Verification
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Verify Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
                {" "}
                Certificate
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enter your certificate ID to verify its authenticity and view detailed information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-gradient-to-br from-teal-700/30 to-slate-700/30 backdrop-blur-sm border border-teal-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white text-center">
                  Certificate Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="certificate-id" className="text-slate-600 dark:text-gray-300">
                    Certificate ID
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="certificate-id"
                      placeholder="Enter certificate ID (e.g., INLT-2024-001)"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      className="bg-slate-100 dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white"
                    />
                    <Button
                      onClick={handleVerify}
                      disabled={!certificateId || isVerifying}
                      className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                    >
                      {isVerifying ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Sample Certificate IDs */}
                <div className="bg-gradient-to-br from-teal-700/20 to-slate-700/20 p-4 rounded-lg">
                  <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Sample Certificate IDs:</h3>
                  <div className="space-y-1 text-sm">
                    <div className="text-slate-600 dark:text-gray-300">• INLT-2024-001 (Data Analyst Internship)</div>
                    <div className="text-slate-600 dark:text-gray-300">• INLT-2024-002 (Data Science Internship)</div>
                    <div className="text-slate-600 dark:text-gray-300">• INLT-2024-003 (Full Stack Development)</div>
                    <div className="text-slate-600 dark:text-gray-300">
                      • INLT-2024-004 (Ethical Hacking with Kali Linux)
                    </div>
                    <div className="text-slate-600 dark:text-gray-300">• INLT-2024-005 (AI & Machine Learning)</div>
                  </div>
                </div>

                {/* Verification Result */}
                {verificationResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {verificationResult.valid ? (
                      <Card className="bg-green-900/20 border-green-500/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                            <div>
                              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                Certificate Verified
                              </h3>
                              <p className="text-green-400">This certificate is authentic and valid</p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <User className="h-4 w-4 text-slate-600 dark:text-gray-400 mr-2" />
                                <span className="text-slate-600 dark:text-gray-300">Student: </span>
                                <span className="text-slate-900 dark:text-white ml-1">
                                  {verificationResult.studentName}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Award className="h-4 w-4 text-slate-600 dark:text-gray-400 mr-2" />
                                <span className="text-slate-600 dark:text-gray-300">Program: </span>
                                <span className="text-slate-900 dark:text-white ml-1">
                                  {verificationResult.program}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 text-slate-600 dark:text-gray-400 mr-2" />
                                <span className="text-slate-600 dark:text-gray-300">Completed: </span>
                                <span className="text-slate-900 dark:text-white ml-1">
                                  {verificationResult.completionDate}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 text-slate-600 dark:text-gray-400 mr-2" />
                                <span className="text-slate-600 dark:text-gray-300">Issued: </span>
                                <span className="text-slate-900 dark:text-white ml-1">
                                  {verificationResult.issueDate}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Award className="h-4 w-4 text-slate-600 dark:text-gray-400 mr-2" />
                                <span className="text-slate-600 dark:text-gray-300">Grade: </span>
                                <Badge className="ml-1 bg-green-500/20 text-green-600 dark:text-green-300">
                                  {verificationResult.grade}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-slate-900 dark:text-white font-semibold mb-2">Skills Acquired:</h4>
                            <div className="flex flex-wrap gap-2">
                              {verificationResult.skills.map((skill: string, index: number) => (
                                <Badge key={index} className="bg-teal-500/20 text-teal-600 dark:text-teal-300">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-red-900/20 border-red-500/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <XCircle className="h-8 w-8 text-red-400 mr-3" />
                            <div>
                              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                Certificate Not Found
                              </h3>
                              <p className="text-red-400">
                                The certificate ID you entered is not valid or does not exist
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <div className="text-center mt-4">
                      <Button
                        onClick={resetVerification}
                        variant="outline"
                        className="border-slate-300 dark:border-gray-600 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800"
                      >
                        Verify Another Certificate
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-teal-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Authentic Verification</h3>
              <p className="text-slate-600 dark:text-gray-400">
                All certificates are digitally signed and verified through our secure system
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Award className="h-16 w-16 text-teal-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Industry Recognized</h3>
              <p className="text-slate-600 dark:text-gray-400">
                Our certificates are recognized by leading tech companies worldwide
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Search className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Instant Verification</h3>
              <p className="text-slate-600 dark:text-gray-400">
                Get immediate verification results with detailed certificate information
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
