'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

export default function CompanyIntro() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section id="company" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 scroll-mt-28">
      {/* Background Shapes - Soft & Abstract */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-60" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[80px] opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-cyan-50 rounded-full blur-[60px] opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">Innovative Gaming Lab</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            We Design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Smart Puzzles.
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
            네오레오는 창의적인 아이디어와 정교한 기술로 퍼즐 게임의 새로운 기준을 만듭니다.
            단순한 놀이를 넘어, 생각하는 즐거움을 디자인합니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#gameplay"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center group"
            >
              <span>Explore Mechanics</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#features"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center group"
            >
              <Play size={18} className="mr-2 text-blue-500 fill-blue-500/20" />
              <span>Key Features</span>
            </Link>
          </div>

          <div className="pt-8 flex items-center space-x-8 text-sm font-medium text-slate-400">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span>User Focused Design</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div>Based in Seoul, KR</div>
          </div>
        </motion.div>

        {/* Right: Visual Element (Abstract or Product Mockup) */}
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative group">
              {/* Abstract UI Representation */}
              <div className="absolute inset-0 pattern-grid-lg opacity-5" />
              <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100 transform group-hover:scale-105 transition-transform duration-500">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Area Tetris</h3>
                  <p className="text-slate-500">The Logic Puzzle Redefined</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-50 animate-bounce delay-700">
                <span className="text-2xl font-bold text-blue-600">4.9</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
