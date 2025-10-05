import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-coal-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/byterootlabslogo.png?v=2"
                alt="ByteRoot Labs"
                width={40}
                height={40}
                className=""
              />
              <span className="text-xl font-bold text-gradient">
                ByteRoot Labs
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Crafting innovative software solutions that drive digital transformation. 
              We turn complex challenges into elegant, scalable applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:byterootlabs@gmail.com"
                className="text-white/60 hover:text-gold-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-gold-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-gold-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-gold-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-gold-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li className="text-white/70">Web Development</li>
              <li className="text-white/70">Agentic AI Solutions</li>
              <li className="text-white/70">Cloud Solutions</li>
              <li className="text-white/70">API Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} ByteRoot Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}