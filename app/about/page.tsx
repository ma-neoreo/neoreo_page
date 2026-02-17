'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Lightbulb, Target, Zap, Users, Code, Puzzle, Sparkles } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-navy font-bold text-xs tracking-widest uppercase mb-6">
                About Neoreo
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                우리는 <span className="text-primary">재미의 본질</span>에<br />
                집착합니다.
              </h1>
              <p className="text-lg text-navy-muted leading-relaxed max-w-2xl mx-auto font-medium">
                화려한 그래픽보다 중요한 건 '플레이하는 느낌'입니다.<br />
                손끝에 전해지는 짜릿함을 위해 집요하게 고민합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-primary">
                      <Sparkles size={20} />
                    </div>
                    우리의 시작
                  </h3>
                  <p className="text-navy-muted leading-relaxed pl-14">
                    "왜 요즘 게임들은 공부를 해야 할까?"<br />
                    네오레오는 이 단순한 의문에서 시작했습니다. 복잡한 시스템과 과도한 학습 곡선 대신,
                    누구나 1초 만에 이해하고 즐길 수 있는 원초적인 재미를 다시 찾고 싶었습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                      <Target size={20} />
                    </div>
                    우리의 기준
                  </h3>
                  <div className="pl-14 grid gap-4">
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <span className="font-bold text-navy">Simple</span>
                      <span className="text-navy-muted text-sm">설명서가 필요 없어야 합니다.</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <span className="font-bold text-navy">Deep</span>
                      <span className="text-navy-muted text-sm">파고들수록 새로운 전략이 보여야 합니다.</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <span className="font-bold text-navy">Happy</span>
                      <span className="text-navy-muted text-sm">이기든 지든, 과정 자체가 즐거워야 합니다.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-black text-navy text-center tracking-tight mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              일하는 <span className="text-primary">방식</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Users, title: '다수결보다 데이터', desc: '감에 의존하지 않습니다. 실제 유저 테스트 결과가 우리의 나침반입니다.' },
                { icon: Code, title: '타협 없는 마감', desc: '0.1초의 딜레이도 용납하지 않습니다. 최적화는 기본 예의입니다.' },
                { icon: Puzzle, title: '빠른 실패, 더 빠른 개선', desc: '완벽한 기획서는 없습니다. 빠르게 만들고 부딪히며 다듬습니다.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-navy-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
