'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Modern Minimal Logo */}
        <Link href="/" className="group flex items-center space-x-2 z-50 relative">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
            <span className="text-white font-bold text-lg leading-none">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            neoreo
          </span>
        </Link>

        {/* Desktop Nav - Clean Typography */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'About', href: '#company' },
            { name: 'Features', href: '#features' },
            { name: 'Game', href: '#gameplay' },
            { name: 'Contact', href: '#footer' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}

          <Link
            href="https://apps.apple.com/kr/app/area-tetris/id6737521199"
            target="_blank"
            className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Download App
          </Link>
        </nav>

        {/* Mobile Menu Button - Dark Icon on Light bg */}
        <button
          className="md:hidden z-50 text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay - Clean White */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:hidden flex flex-col space-y-4 items-center"
            >
              {[
                { name: 'About', href: '#company' },
                { name: 'Features', href: '#features' },
                { name: 'Game', href: '#gameplay' },
                { name: 'Contact', href: '#footer' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-full text-center py-3 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
