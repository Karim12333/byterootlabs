'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-coal-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Fixed Width */}
          <div className="flex items-center space-x-3 w-64">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 relative">
                <Image
                  src="/byterootlabslogo.png?v=2"
                  alt="ByteRoot Labs"
                  width={38}
                  height={38}
                  className="transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gradient hidden sm:block">
                ByteRoot Labs
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
              <Link
                href="/"
                className="text-white/90 hover:text-gold-400 transition-colors duration-300 font-medium text-base"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white/90 hover:text-gold-400 transition-colors duration-300 font-medium text-base"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-white/90 hover:text-gold-400 transition-colors duration-300 font-medium text-base"
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact Button - Fixed Width */}
          <div className="w-64 flex justify-end">
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-gold-400 hover:bg-white/10 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-white/80 hover:text-gold-400 transition-colors duration-300 font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white/80 hover:text-gold-400 transition-colors duration-300 font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-gold-400 transition-colors duration-300 font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="btn-primary mx-auto w-fit"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}