'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-80 transition-opacity">
            Neoreo
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group">
              회사 소개
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group">
              게임 소개
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group">
              FAQ
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col space-y-4 pb-4">
            <li>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-blue-600 font-medium hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                회사 소개
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="block text-gray-600 hover:text-blue-600 font-medium hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                게임 소개
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block text-gray-600 hover:text-blue-600 font-medium hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
