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
        <section className="py-24 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <h2 className="text-4xl font-black text-navy leading-tight tracking-tight">
                  우리가 즐거움을<br />
                  <span className="text-primary">증명하는 법</span>
                </h2>
              </div>
              <div className="md:w-2/3 space-y-16">
                {[
                  { title: '직관과 데이터의 조화', desc: '창의적인 영감을 핵심으로 삼되, 실제 플레이어의 손끝에서 나오는 데이터로 그 방향을 치열하게 검증합니다. 느낌에 의존하지 않고 즐거움을 수치로 증명합니다.' },
                  { title: '감각적인 완성도', desc: '0.1초의 반응 속도부터 손끝에 전해지는 햅틱 피드백까지, 플레이어가 느끼는 모든 감각을 위해 끝없이 튜닝합니다. 최적화는 기술이 아니라 예의입니다.' },
                  { title: '유연한 진화', desc: '고정된 정답은 없다고 믿습니다. 완벽한 기획서보다 빠른 프로토타입을 신뢰하며, 부딪히고 깨지는 과정 속에서 진짜 재미를 발굴해냅니다.' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-8"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-primary/20 rounded-full" />
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-navy-muted text-lg leading-relaxed max-w-2xl font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
