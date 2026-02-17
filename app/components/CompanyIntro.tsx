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
              불필요한 설계를 비우고<br />
              <span className="text-primary italic">본능적인 재미를 채웁니다.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-navy-muted font-medium leading-relaxed max-w-2xl mx-auto mb-10"
            >
              우리는 설명서가 필요 없는 직관을 믿습니다.<br />
              공부하지 않아도 손끝으로 바로 느껴지는 짜릿함. 그것이 우리가 만드는 게임의 본질입니다.
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

      {/* ── Values/Philosophy Section ── */}
      <section id="about" className="py-32 bg-white relative scroll-mt-20 overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-0 left-0 text-[15rem] font-black text-slate-50 select-none pointer-events-none -translate-x-20 -translate-y-20 leading-none">
          CRAFT
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-6xl md:text-8xl font-black text-navy leading-none tracking-tight mb-8">
                당연한 것을<br />
                <span className="text-primary italic">당연하지 않게.</span>
              </h2>
              <p className="text-xl md:text-2xl text-navy-muted font-medium max-w-2xl leading-relaxed">
                수많은 게임이 쏟아지는 세상에서, 똑같은 방식을 반복하는 것은 지루합니다.
                우리는 익숙한 장르의 문법을 비틀어, 기대하지 못한 놀라운 몰입을 만듭니다.
              </p>
            </motion.div>

            <div className="grid gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl">
              {[
                {
                  title: "규칙의 재정의",
                  desc: "남들이 가지 않은 길에서 새로운 재미의 가능성을 발견합니다. 우리는 익숙함을 파괴하고 새로움을 조립합니다.",
                  tags: ["Innovation", "Rules"]
                },
                {
                  title: "집요한 고집",
                  desc: "플레이어가 느끼는 쾌적함은 타협할 수 없는 기준입니다. 0.1프레임의 오차도 허용하지 않는 집요함으로 완성합니다.",
                  tags: ["Quality", "Precision"]
                },
                {
                  title: "건강한 철학",
                  desc: "숫자를 쫓는 과도한 경쟁보다, 다시 찾고 싶은 즐거운 기억을 남기는 데 집중합니다. 게임은 그래야 하니까요.",
                  tags: ["User First", "Vision"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-12 hover:bg-slate-50 transition-colors duration-500 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-bold text-primary font-mono tracking-tighter">0{idx + 1}</span>
                        <div className="h-px flex-grow bg-slate-100 group-hover:bg-primary/20 transition-colors" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-navy group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:w-2/3 space-y-6">
                      <p className="text-lg md:text-xl text-navy-muted leading-relaxed font-medium">
                        {item.desc}
                      </p>
                      <div className="flex gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto/Vision Section ── */}
      <section id="vision" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-5xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter">
                  우리가 믿는<br />
                  <span className="text-primary italic">즐거움의 본질.</span>
                </h2>
                <p className="text-navy-muted text-lg font-medium leading-relaxed">
                  거창한 비전보다는 확실한 마감과<br />
                  손끝에 닿는 감각에 집중합니다.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-2/3 space-y-24">
              {[
                {
                  number: '01',
                  title: '설명이 필요 없는 직관',
                  desc: '학습은 노동이 아닙니다. 튜토리얼을 읽기 전에 먼저 손이 움직여야 하고, 1초 만에 감탄이 터져 나와야 합니다.',
                },
                {
                  number: '02',
                  title: '파고들수록 깊어지는 층위',
                  desc: '시작은 쉽지만 마스터는 어렵게. 단순한 규칙 속에 무한한 변수와 선택의 즐거움을 설계합니다.',
                },
                {
                  number: '03',
                  title: '촉각에 닿는 디테일',
                  desc: '버튼 하나를 누를 때의 소리, 진동, 그리고 0.01초의 반응 속도. 우리는 그 찰나의 기분을 위해 며칠을 고민합니다.',
                },
                {
                  number: '04',
                  title: '국경 없는 보편적 재미',
                  desc: '문화와 언어를 넘어, 인간이라면 누구나 느낄 수 있는 원초적인 유희의 가치를 추구합니다.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row gap-8 md:items-baseline">
                    <span className="text-6xl font-black text-slate-100 group-hover:text-primary/10 transition-colors duration-500 tabular-nums">
                      {item.number}
                    </span>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-black text-navy group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-navy-muted text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
