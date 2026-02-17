'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "네오레오는 어떤 회사인가요?",
        answer: "네오레오는 2024년에 설립된 혁신적인 모바일 게임 개발 스튜디오입니다. 독창적인 퍼즐 게임을 통해 플레이어에게 새로운 도전과 즐거움을 선사하는 것을 목표로 합니다."
    },
    {
        question: "네오레오의 핵심 가치는 무엇인가요?",
        answer: "네오레오의 핵심 가치는 창의성, 도전, 혁신입니다. 새로운 아이디어를 추구하고, 끊임없이 변화하는 기술과 트렌드에 도전하며, 게임 산업에 혁신적인 솔루션을 제시하고자 합니다."
    },
    {
        question: "네오레오의 게임은 어디서 즐길 수 있나요?",
        answer: "네오레오의 게임은 iOS 및 모바일 플랫폼을 통해 만나보실 수 있습니다."
    },
    {
        question: "네오레오와 협업할 수 있나요?",
        answer: "물론입니다! 게임 개발 협업, 퍼블리싱, 기술 파트너십 등 다양한 형태의 협업을 환영합니다."
    },
    {
        question: "네오레오의 향후 계획은 무엇인가요?",
        answer: "네오레오는 지속적으로 새로운 게임 메커니즘을 연구하고, 사용자 경험을 개선하며, 글로벌 시장 진출을 목표로 하고 있습니다."
    },
]

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-gray-100 last:border-b-0"
        >
            <button
                className="flex justify-between items-center w-full text-left py-6 px-6 md:px-8 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-[15px] md:text-base font-semibold text-navy group-hover:text-primary transition-colors pr-4">
                    {item.question}
                </span>
                <ChevronDown
                    className={`flex-shrink-0 text-navy-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                    size={18}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 px-6 md:px-8 text-navy-muted leading-relaxed text-[15px]">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fafafc] text-navy overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-24">
                <section className="py-20 relative">
                    <div className="absolute inset-0 grid-pattern pointer-events-none" />
                    <div className="container mx-auto px-6 lg:px-8 relative z-10">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-surface-muted text-primary text-xs font-bold tracking-widest uppercase mb-6">
                                FAQ
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                                자주 묻는 <span className="gradient-text">질문</span>
                            </h1>
                            <p className="text-navy-muted text-lg">
                                궁금한 점이 있으신가요? 여기서 답을 찾아보세요.
                            </p>
                        </motion.div>

                        <div className="max-w-3xl mx-auto glass-card overflow-hidden">
                            {faqs.map((faq, index) => (
                                <FAQItemComponent key={index} item={faq} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
