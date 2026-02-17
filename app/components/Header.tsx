'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'

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
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-light py-3 shadow-soft"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2.5 z-50 relative hover:scale-[1.02] transition-transform duration-300">
          <Logo
            textClassName="group-hover:text-primary transition-colors duration-300"
          />
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
