import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              <span className="text-indigo-400">Inlighn</span> Tech
            </Link>
            <p className="text-gray-400 mb-4">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic
              learning and industry needs. Empowering the next generation through immersive internship programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/verify-certificate" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Verify Certificate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Cybersecurity & Ethical Hacking</span>
              </li>
              <li>
                <span className="text-gray-400">Full Stack Development</span>
              </li>
              <li>
                <span className="text-gray-400">Data Science & AI/ML</span>
              </li>
              <li>
                <span className="text-gray-400">Data Analysis & Business Intelligence</span>
              </li>
              <li>
                <span className="text-gray-400">Business Analysis</span>
              </li>
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                info@inlighntech.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +91 9368842663
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                Corporate Office- Office No: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker
                Town, Shivaji Nagar, Bengaluru, Karnataka 560001
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Inlighn Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
