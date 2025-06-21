"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Clock, TrendingUp, Download, CheckCircle, Calendar, Tag } from "lucide-react"
import Image from "next/image"

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

export default function BusinessAnalystPage() {
  const technologies = [
    { name: "GITHUB", icon: "🐙", color: "from-gray-600 to-gray-800" },
    { name: "PANDAS", icon: "🐼", color: "from-blue-600 to-purple-600" },
    { name: "PYTHON", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "SQL", icon: "🗄️", color: "from-red-500 to-orange-500" },
    { name: "TABLEAU", icon: "📊", color: "from-orange-500 to-blue-500" },
    { name: "ML", icon: "🧠", color: "from-purple-600 to-pink-600" },
    { name: "AI", icon: "🤖", color: "from-cyan-500 to-blue-600" },
  ]

  const learningOutcomes = [
    "Develop expertise in analyzing and documenting complex business processes",
    "Make data-driven decisions using professional business analysis tools",
    "Build a strong portfolio showcasing your projects and skills",
    "Gain the confidence to lead and manage business solutions effectively",
  ]

  const faqData = [
    {
      question: "How can I enroll in this internship?",
      answer:
        "You can enroll by clicking the 'Apply Now' button and filling out the registration form. After payment of the registration fee, you'll receive an interview call within 24 hours.",
    },
    {
      question: "What would happen after making registration fee, what should I do?",
      answer:
        "After paying the registration fee, you'll receive a confirmation email with your portal access details. Our team will contact you within 24 hours to schedule your interview and provide next steps.",
    },
    {
      question: "What if I get rejected in interview?",
      answer:
        "If you don't clear the interview, we'll provide detailed feedback and allow you to retake the interview after addressing the areas of improvement. We're committed to helping you succeed.",
    },
    {
      question:
        "I have finished filling out the registration form and have successfully paid the registration fee. What should I do next?",
      answer:
        "Great! Now wait for our team to contact you within 24 hours. You'll receive an email with your portal access and interview scheduling details. Make sure to check your email regularly.",
    },
    {
      question: "Is there any additional fee during the internship?",
      answer:
        "No, there are no hidden fees. The only costs are the registration fee (₹99) and the internship fee (₹499 for 1 month or ₹899 for 3 months). All materials and resources are included.",
    },
    {
      question: "When will I receive the offer letter after filling out the registration form?",
      answer:
        "You'll receive your offer letter within 24-48 hours after successfully completing the interview process and confirming your internship enrollment.",
    },
    {
      question: "Is this 100% work-from-home?",
      answer:
        "Yes, this is a completely remote internship. You can work from anywhere with a stable internet connection. All sessions, mentoring, and project work are conducted online.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-teal-800 to-slate-900 relative overflow-hidden pt-16">
      {/* Dynamic Background Elements */}
      <TechGrid />
      <FloatingTechElements />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Business Analyst Internship Program</h1>

              <div className="text-amber-300 mb-6 space-y-2">
                <p>
                  Business Analyst – Internship Program Gain practical business analysis skills by working on real-world
                  projects involving process mapping, stakeholder analysis, BRDs, data visualization, and KPIs. Get
                  hands-on experience with Excel, SQL, Power BI, Tableau, and Agile frameworks.
                </p>
                <p>In this internship, you will receive: 📋 Internship Offer Letter 📋 Internship Experience Letter</p>
                <p>
                  Perfect for students, beginners, and career switchers aiming to build a strong foundation in business
                  analysis and step confidently into corporate roles.
                </p>
              </div>

              <div className="text-gray-300 mb-8">
                <p>
                  Step into the world of business strategy and data-driven decision-making with our{" "}
                  <strong>Business Analyst Internship Program</strong>, meticulously designed to prepare you for the
                  dynamic and evolving demands of today's business environment. This internship equips you with the core
                  analytical, technical, and communication skills necessary to become a confident and competent Business
                  Analyst.
                </p>

                <p className="mt-4">
                  You'll start with a solid foundation in <strong>Business Analysis Fundamentals</strong>, exploring key
                  concepts like business process modeling, stakeholder analysis, and requirement gathering. Learn how to
                  navigate the complexities of business operations and effectively capture stakeholder needs through
                  structured documentation techniques.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Program Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-orange-500 to-amber-500 border-none text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Business Analytics Dashboard"
                    width={300}
                    height={200}
                    className="rounded-lg opacity-80"
                  />
                </div>

                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Business Analyst Internship Program</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-orange-200" />
                      <span>
                        <strong>Batch Starts:</strong> TBA
                      </span>
                    </div>

                    <div className="flex items-start">
                      <Tag className="h-5 w-5 mr-3 mt-1 text-orange-200" />
                      <div>
                        <p>
                          <strong>Pricing starts from</strong> The registration fee is just ₹99. The 1-month internship
                          is only ₹499.
                        </p>
                        <p className="mt-2">The 3-month internship is just ₹899./-</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 rounded-lg">
                    Apply Now →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Content Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-300 space-y-6"
          >
            <p>
              In the next phase, you'll master essential <strong className="text-white">tools and methodologies</strong>
              . Gain hands-on experience in creating <strong className="text-white">workflow diagrams</strong>,{" "}
              <strong className="text-white">Business Requirement Documents (BRD)</strong>, and use{" "}
              <strong className="text-white">cases</strong>. Dive deep into{" "}
              <strong className="text-white">Agile methodologies</strong> and the{" "}
              <strong className="text-white">Scrum framework</strong>, preparing you to thrive in modern project
              environments.
            </p>

            <p>
              The journey continues with <strong className="text-white">data analysis for business insights</strong>.
              Sharpen your skills in <strong className="text-white">Excel</strong> for organizing and interpreting data,{" "}
              <strong className="text-white">SQL</strong> for querying databases, and{" "}
              <strong className="text-white">Power BI and Tableau</strong> for crafting interactive dashboards that
              transform raw data into compelling business stories. You'll also explore{" "}
              <strong className="text-white">Python basics</strong>, adding a valuable skill for handling more advanced
              data tasks.
            </p>

            <p>
              Advance into <strong className="text-white">specialized topics</strong> that elevate your professional
              edge—such as <strong className="text-white">financial modeling</strong>,{" "}
              <strong className="text-white">risk assessment</strong>,{" "}
              <strong className="text-white">KPI development</strong>, and{" "}
              <strong className="text-white">change management</strong> strategies. Understand how to measure
              performance and drive strategic decisions across departments.
            </p>

            <p>
              Finally, apply everything you've learned in a <strong className="text-white">Capstone Project</strong>,
              where you'll tackle a real-world business problem, conduct full-scale analysis, document requirements,
              propose solutions, and present your findings—building a project that reflects your readiness for industry
              roles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">TECHNOLOGIES YOU'LL LEARN</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
            {technologies.slice(0, 5).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center text-4xl transform rotate-45 border-4 border-gray-300">
                  <div className="transform -rotate-45">{tech.icon}</div>
                </div>
                <p className="text-white font-semibold text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mt-12">
            {technologies.slice(5).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
                  {tech.icon}
                </div>
                <p className="text-white font-semibold text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-8">By the end of this internship, you will:</h3>

            <div className="space-y-4 mb-8">
              {learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{outcome}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-gray-300 mb-8">
              <p className="text-xl font-semibold text-white mb-4">
                Ready to take the next step in your business career?
              </p>
              <p>Join our internship program and become a business analyst who drives real impact.</p>
            </div>

            {/* Program Details */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                5/5
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />3 to 6 months
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Intermediate
              </Badge>
            </div>

            {/* Pricing */}
            <Card className="bg-slate-700/50 border-slate-600 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center text-amber-300">
                  <span className="text-2xl mr-3">💰</span>
                  <p className="text-lg">
                    The registration fee is just ₹99. The 1-month internship is only ₹499. The 3-month internship is
                    just ₹899.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
              <Download className="h-5 w-5 mr-2" />
              Download Brochure
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Internship Certificate"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Internship Certification</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Upon successful completion of this internship, you'll receive a certificate that is recognized
                worldwide. This internship certificate proves your experience in the chosen domain. It reflects your
                learning, skills, and dedication throughout the internship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-orange-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
