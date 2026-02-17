'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trophy, Zap, Cpu, ArrowUpRight, BarChart3, Layout } from 'lucide-react'
import GameplayDemo from '../components/GamePlaydemo'

export default function ProductPreview() {
  const features = [
    {
      icon: Trophy,
      title: "Global Ranking",
      desc: "Check your skills against players worldwide. Compete for the top spot.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Zap,
      title: "Fast Gameplay",
      desc: "Instant load times and smooth animations for a seamless experience.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Layout,
      title: "Adaptive Design",
      desc: "Optimized for both iPhone and iPad with responsive layouts.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      desc: "Track your progress and improve your strategy with detailed stats.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Key Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Designed for <br />
            <span className="text-blue-600">Performance & Fun</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Area Tetris combines classic puzzle mechanics with modern design principles.
            Experience a game that respects your time and intelligence.
          </p>
        </div>

        {/* Feature Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gameplay Demo Integration */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 mb-20 border border-slate-100 shadow-inner">
          <GameplayDemo />
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-blue-600 text-white p-12 md:p-20 text-center shadow-2xl shadow-blue-200">
          {/* Abstract Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold">Ready to Play?</h3>
            <p className="text-blue-100 text-lg">
              Join thousands of players enjoying the new standard of puzzle games.
              Available now on iOS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="https://apps.apple.com/kr/app/area-tetris/id6737521199"
                target="_blank"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                <span>Download on App Store</span>
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
