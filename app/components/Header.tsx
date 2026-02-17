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

  const navItems = [
    { name: '소개', href: '/about' },
    { name: '비전', href: '/#vision' },
    { name: '문의', href: '/#contact' },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-light py-3 shadow-soft"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2.5 z-50 relative">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-glow-sm">
            <span className="text-white font-black text-lg leading-none">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-navy group-hover:text-primary transition-colors duration-300">
            neoreo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-navy-muted hover:text-primary rounded-lg hover:bg-primary-50 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-200 mx-3" />

          <Link
            href="mailto:nch6807@neoreo.org"
            className="ml-2 px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-primary transition-all duration-300 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 active:scale-[0.98]"
          >
            문의하기
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-navy p-2 hover:bg-surface-muted rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-elevated border border-gray-100 p-5 md:hidden flex flex-col space-y-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-full text-center py-3 text-navy-muted font-medium hover:bg-surface-muted hover:text-primary rounded-xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="mailto:nch6807@neoreo.org"
                  className="block w-full text-center py-3 bg-navy text-white font-semibold rounded-xl hover:bg-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  문의하기
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
