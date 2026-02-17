'use client'

import { motion } from 'framer-motion'
import { Tag, NumberLabel, DividerLine, AccentLine, FadeIn } from '../atoms'
import { type ReactNode } from 'react'

/**
 * 값/철학 카드 (gap-px 그리드 안에서 사용)
 * 번호 + 제목 + 설명 + 태그 구성의 가로 분할 카드
 *
 * @example
 * <ValueCard
 *   index={0}
 *   title="규칙의 재정의"
 *   desc="남들이 가지 않은 길에서..."
 *   tags={["Innovation", "Rules"]}
 * />
 */
export function ValueCard({
    index,
    title,
    desc,
    tags = [],
}: {
    index: number
    title: string
    desc: string
    tags?: string[]
}) {
    return (
        <div className="bg-white p-8 md:p-12 hover:bg-slate-50 transition-colors duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                        <NumberLabel index={index} />
                        <DividerLine />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-navy group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                </div>
                <div className="md:w-2/3 space-y-6">
                    <p className="text-lg md:text-xl text-navy-muted leading-relaxed font-medium">
                        {desc}
                    </p>
                    {tags.length > 0 && (
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <Tag key={tag} interactive>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

/**
 * 매니페스토 아이템 (큰 넘버 + 제목 + 설명)
 * 좌우 분할 매니페스토 섹션에서 사용하는 스크롤 아이템
 *
 * @example
 * <ManifestoItem
 *   index={0}
 *   title="설명이 필요 없는 직관"
 *   desc="학습은 노동이 아닙니다..."
 *   delay={0.1}
 * />
 */
export function ManifestoItem({
    index,
    title,
    desc,
    delay = 0,
}: {
    index: number
    title: string
    desc: string
    delay?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay }}
            className="group"
        >
            <div className="flex flex-col md:flex-row gap-8 md:items-baseline">
                <NumberLabel index={index} variant="large" />
                <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-black text-navy group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-navy-muted text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

/**
 * 어프로치 아이템 (수직 강조선 + 제목 + 설명)
 * About 페이지의 '일하는 방식' 섹션에서 사용
 *
 * @example
 * <ApproachItem
 *   title="직관과 데이터의 조화"
 *   desc="창의적인 영감을 핵심으로..."
 *   delay={0.1}
 * />
 */
export function ApproachItem({
    title,
    desc,
    delay = 0,
}: {
    title: string
    desc: string
    delay?: number
}) {
    return (
        <FadeIn delay={delay} className="relative pl-8">
            <AccentLine />
            <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
            <p className="text-navy-muted text-lg leading-relaxed max-w-2xl font-medium">
                {desc}
            </p>
        </FadeIn>
    )
}

/**
 * 값 카드 리스트 래퍼 (gap-px 그리드)
 * ValueCard를 감싸는 구분선 기반 그리드 컨테이너
 *
 * @example
 * <ValueCardGrid>
 *   <ValueCard ... />
 *   <ValueCard ... />
 * </ValueCardGrid>
 */
export function ValueCardGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`grid gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl ${className}`}>
            {children}
        </div>
    )
}
