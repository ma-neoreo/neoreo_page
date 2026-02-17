'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Atoms
import {
  BackgroundDecoText,
  DotGridBackground,
  Section,
  Container,
  FadeIn,
} from './atoms'
import { ButtonPrimary, ButtonOutline } from './atoms/Buttons'

// Molecules
import { ValueCard, ValueCardGrid, ManifestoItem } from './molecules'

export default function CompanyIntro() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
        <DotGridBackground />

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
              <ButtonPrimary href="mailto:nch6807@neoreo.org" showArrow>
                프로젝트 문의하기
              </ButtonPrimary>
              <ButtonOutline
                onClick={() => {
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                우리가 일하는 방식
              </ButtonOutline>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values/Philosophy Section ── */}
      <Section id="about" className="overflow-hidden">
        <BackgroundDecoText text="CRAFT" />

        <Container maxWidth="5xl" className="relative z-10">
          <FadeIn className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black text-navy leading-none tracking-tight mb-8">
              당연한 것을<br />
              <span className="text-primary italic">당연하지 않게.</span>
            </h2>
            <p className="text-xl md:text-2xl text-navy-muted font-medium max-w-2xl leading-relaxed">
              수많은 게임이 쏟아지는 세상에서, 똑같은 방식을 반복하는 것은 지루합니다.
              우리는 익숙한 장르의 문법을 비틀어, 기대하지 못한 놀라운 몰입을 만듭니다.
            </p>
          </FadeIn>

          <ValueCardGrid>
            <ValueCard
              index={0}
              title="규칙의 재정의"
              desc="남들이 가지 않은 길에서 새로운 재미의 가능성을 발견합니다. 우리는 익숙함을 파괴하고 새로움을 조립합니다."
              tags={['Innovation', 'Rules']}
            />
            <ValueCard
              index={1}
              title="집요한 고집"
              desc="플레이어가 느끼는 쾌적함은 타협할 수 없는 기준입니다. 0.1프레임의 오차도 허용하지 않는 집요함으로 완성합니다."
              tags={['Quality', 'Precision']}
            />
            <ValueCard
              index={2}
              title="건강한 철학"
              desc="숫자를 쫓는 과도한 경쟁보다, 다시 찾고 싶은 즐거운 기억을 남기는 데 집중합니다. 게임은 그래야 하니까요."
              tags={['User First', 'Vision']}
            />
          </ValueCardGrid>
        </Container>
      </Section>

      {/* ── Manifesto/Vision Section ── */}
      <Section id="vision" className="overflow-hidden" background="white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <FadeIn direction="left">
                <h2 className="text-5xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter">
                  우리가 믿는<br />
                  <span className="text-primary italic">즐거움의 본질.</span>
                </h2>
                <p className="text-navy-muted text-lg font-medium leading-relaxed mt-6">
                  거창한 비전보다는 확실한 마감과<br />
                  손끝에 닿는 감각에 집중합니다.
                </p>
              </FadeIn>
            </div>

            <div className="lg:w-2/3 space-y-24">
              <ManifestoItem
                index={0}
                title="설명이 필요 없는 직관"
                desc="학습은 노동이 아닙니다. 튜토리얼을 읽기 전에 먼저 손이 움직여야 하고, 1초 만에 감탄이 터져 나와야 합니다."
                delay={0}
              />
              <ManifestoItem
                index={1}
                title="파고들수록 깊어지는 층위"
                desc="시작은 쉽지만 마스터는 어렵게. 단순한 규칙 속에 무한한 변수와 선택의 즐거움을 설계합니다."
                delay={0.1}
              />
              <ManifestoItem
                index={2}
                title="촉각에 닿는 디테일"
                desc="버튼 하나를 누를 때의 소리, 진동, 그리고 0.01초의 반응 속도. 우리는 그 찰나의 기분을 위해 며칠을 고민합니다."
                delay={0.2}
              />
              <ManifestoItem
                index={3}
                title="국경 없는 보편적 재미"
                desc="문화와 언어를 넘어, 인간이라면 누구나 느낄 수 있는 원초적인 유희의 가치를 추구합니다."
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contact CTA Section ── */}
      <Section id="contact">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn duration={0.8}>
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy p-12 md:p-20 text-center">
              {/* Subtle glow */}
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
                  <ButtonPrimary href="mailto:nch6807@neoreo.org" variant="white" showArrow>
                    이메일 보내기
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
