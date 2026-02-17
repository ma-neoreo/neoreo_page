'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Gamepad2, Lightbulb, Rocket, Users, Sparkles, Target, Code } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CompanyIntro() {
  const values = [
    {
      icon: Lightbulb,
      title: '창의적 상상력',
      desc: '틀에 갇히지 않는 자유로운 발상으로 기존에 없던 새로운 재미를 설계합니다.',
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50',
    },
    {
      icon: Rocket,
      title: '기술 혁신',
      desc: '최신 기술 스택과 끊임없는 연구를 통해 최적의 플레이 경험을 구현합니다.',
      gradient: 'from-primary to-accent',
      bg: 'bg-primary-50',
    },
    {
      icon: Users,
      title: '플레이어 중심',
      desc: '모든 의사결정의 중심에 플레이어가 있습니다. 즐거움에 진심인 팀입니다.',
      gradient: 'from-emerald-400 to-teal-500',
      bg: 'bg-emerald-50',
    },
  ]

  const stats = [
    { label: '설립', value: '2024', suffix: '' },
    { label: '본사', value: '서울', suffix: '' },
    { label: '목표', value: '글로벌', suffix: '' },
  ]

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Background decorations - Clean & Sharp */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center space-x-2 bg-slate-100 px-4 py-1.5 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-navy rounded-full" />
              <span className="text-sm font-bold text-navy tracking-wide">NEOREO GAMES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-navy leading-[1.1] mb-8"
            >
              복잡함은 덜어내고<br />
              <span className="text-primary">재미만 남겼습니다.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-navy-muted font-medium leading-relaxed max-w-2xl mx-auto mb-10"
            >
              "왜 게임이 공부가 되어야 하죠?"<br />
              우리는 설명서가 필요 없는 직관적인 본능을 믿습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="mailto:nch6807@neoreo.org"
                className="w-full sm:w-auto px-8 py-4 bg-navy text-white rounded-xl font-bold hover:bg-primary transition-colors duration-300 flex items-center justify-center"
              >
                <span>프로젝트 문의하기</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <button
                onClick={() => {
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-navy border-2 border-slate-100 rounded-xl font-bold hover:border-slate-300 transition-colors duration-300"
              >
                우리가 일하는 방식
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-28 bg-white relative scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-4xl font-black text-navy leading-tight"
              >
                뻔한 게임은<br />
                만들지 않습니다.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-lg text-navy-muted leading-relaxed"
              >
                수천 개의 게임이 쏟아지는 세상에서, 똑같은 문법을 답습하는 건 의미가 없습니다.
                우리는 익숙한 장르 비틀기를 좋아하고, 한 번 시작하면 멈출 수 없는 몰입감을 만듭니다.
              </motion.p>
              <div className="pt-4 space-y-4">
                {[
                  { title: "새로운 규칙", desc: "남들이 안 하는 시도를 즐깁니다." },
                  { title: "완벽한 마감", desc: "버그 없는 플레이, 부드러운 조작감에 집착합니다." },
                  { title: "유저 존중", desc: "과도한 과금 유도 대신, 플레이 가치를 우선합니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">{item.title}</h4>
                      <p className="text-navy-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract UI Pattern instead of AI Image */}
            <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 aspect-square flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm rotate-3 opacity-90">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square animate-float" style={{ animationDelay: '0s' }}>
                  <Lightbulb size={32} className="text-amber-500 mb-3" />
                  <span className="font-bold text-navy">상상</span>
                </div>
                <div className="bg-navy p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square translate-y-8 animate-float" style={{ animationDelay: '1s' }}>
                  <Code size={32} className="text-white mb-3" />
                  <span className="font-bold text-white">기술</span>
                </div>
                <div className="bg-primary p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square -translate-y-8 animate-float" style={{ animationDelay: '2s' }}>
                  <Target size={32} className="text-white mb-3" />
                  <span className="font-bold text-white">본질</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square animate-float" style={{ animationDelay: '3s' }}>
                  <Sparkles size={32} className="text-primary mb-3" />
                  <span className="font-bold text-navy">재미</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision Section ── */}
      <section id="vision" className="py-28 bg-gradient-to-b from-surface-muted/60 to-white relative section-divider scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1.5 px-4 rounded-full bg-surface-muted text-accent text-xs font-bold tracking-widest uppercase mb-6"
            >
              Our Vision
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black text-navy tracking-tight mb-6"
            >
              우리가 꿈꾸는
              <br />
              <span className="gradient-text">게임의 미래</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-navy-muted leading-relaxed">
              거창한 목표보다는 확실한 재미를 약속합니다.<br />
              우리가 게임을 만드는 기준은 딱 하나입니다.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Gamepad2,
                title: '직관적인 경험',
                desc: '설명서 없이 바로 시작할 수 있어야 합니다. 튜토리얼은 짧게, 재미는 즉시.',
              },
              {
                icon: Target,
                title: '깊이 있는 몰입',
                desc: '쉽게 시작하지만 마스터하긴 어렵게. 끝없이 도전 욕구를 자극합니다.',
              },
              {
                icon: Sparkles,
                title: '디테일의 미학',
                desc: '터치 하나하나가 즐겁도록. 소리, 진동, 애니메이션까지 집요하게 다듬습니다.',
              },
              {
                icon: Rocket,
                title: '글로벌 스탠다드',
                desc: '언어의 장벽 없이 전 세계 누구나 공감할 수 있는 재미를 만듭니다.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-5 p-6 rounded-2xl hover:bg-white hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-navy-muted text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA Section ── */}
      <section id="contact" className="py-28 relative scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy p-12 md:p-20 text-center"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-accent/15 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                함께 만들어갈
                <br />
                이야기가 있나요?
              </h3>
              <p className="text-white/60 text-lg">
                협업, 제안, 또는 어떤 이야기든 환영합니다.
                <br />
                네오레오에 연락해 주세요.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="mailto:nch6807@neoreo.org"
                  className="group px-10 py-4 bg-white text-navy rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <span>이메일 보내기</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
