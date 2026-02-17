'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

/**
 * 배경 데코용 대형 텍스트
 * 섹션 뒤에 깔리는 초대형 반투명 타이포그래피
 *
 * @example
 * <BackgroundDecoText text="CRAFT" />
 */
export function BackgroundDecoText({ text, className = '' }: { text: string; className?: string }) {
    return (
        <div
            className={`absolute top-0 left-0 text-[15rem] font-black text-slate-50 select-none pointer-events-none -translate-x-20 -translate-y-20 leading-none ${className}`}
        >
            {text}
        </div>
    )
}

/**
 * 도트 그리드 배경 패턴
 * 히어로 섹션 등에서 미세한 질감을 부여
 *
 * @example
 * <DotGridBackground />
 */
export function DotGridBackground({
    size = 16,
    opacity = 50,
    className = '',
}: {
    size?: number
    opacity?: number
    className?: string
}) {
    return (
        <div
            className={`absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${className}`}
            style={{
                backgroundSize: `${size}px ${size}px`,
                opacity: opacity / 100,
            }}
        />
    )
}

/**
 * 태그/뱃지 컴포넌트
 * 카테고리, 키워드 표시용 소형 라벨
 *
 * @example
 * <Tag>Innovation</Tag>
 * <Tag interactive>Quality</Tag>
 */
export function Tag({
    children,
    interactive = false,
    className = '',
}: {
    children: ReactNode
    interactive?: boolean
    className?: string
}) {
    const interactiveStyles = interactive
        ? 'group-hover:bg-primary group-hover:text-white transition-all duration-300'
        : ''

    return (
        <span
            className={`text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded bg-slate-100 text-slate-400 ${interactiveStyles} ${className}`}
        >
            {children}
        </span>
    )
}

/**
 * 넘버 라벨 (01, 02, 03)
 * 리스트 아이템 앞에 붙는 순서 표시용
 *
 * @example
 * <NumberLabel index={0} />  // "01"
 * <NumberLabel index={2} variant="large" />  // "03" (큰 사이즈)
 */
export function NumberLabel({
    index,
    variant = 'default',
    className = '',
}: {
    index: number
    variant?: 'default' | 'large'
    className?: string
}) {
    const num = String(index + 1).padStart(2, '0')

    if (variant === 'large') {
        return (
            <span
                className={`text-6xl font-black text-slate-100 group-hover:text-primary/10 transition-colors duration-500 tabular-nums ${className}`}
            >
                {num}
            </span>
        )
    }

    return (
        <span className={`text-sm font-bold text-primary font-mono tracking-tighter ${className}`}>
            {num}
        </span>
    )
}

/**
 * 강조 수직선
 * 리스트 아이템 왼쪽에 부착하는 얇은 강조선
 *
 * @example
 * <AccentLine />
 */
export function AccentLine({ className = '' }: { className?: string }) {
    return <div className={`absolute left-0 top-2 bottom-2 w-1 bg-primary/20 rounded-full ${className}`} />
}

/**
 * 구분선 (수평, 호버 반응)
 *
 * @example
 * <DividerLine />
 */
export function DividerLine({ className = '' }: { className?: string }) {
    return (
        <div className={`h-px flex-grow bg-slate-100 group-hover:bg-primary/20 transition-colors ${className}`} />
    )
}

/**
 * 섹션 래퍼
 * 일관된 패딩과 스크롤 오프셋을 보장하는 섹션 컨테이너
 *
 * @example
 * <Section id="about" background="white">
 *   ...content
 * </Section>
 */
export function Section({
    id,
    children,
    background = 'white',
    className = '',
    ...props
}: {
    id?: string
    children: ReactNode
    background?: 'white' | 'muted'
    className?: string
} & Omit<React.HTMLAttributes<HTMLElement>, 'id' | 'className'>) {
    const bgClass = background === 'muted' ? 'bg-slate-50' : 'bg-white'

    return (
        <section
            id={id}
            className={`py-28 md:py-32 relative scroll-mt-20 ${bgClass} ${className}`}
            {...props}
        >
            {children}
        </section>
    )
}

/**
 * 컨테이너 래퍼
 * 일관된 max-width와 패딩 적용
 */
export function Container({
    children,
    maxWidth = '5xl',
    className = '',
}: {
    children: ReactNode
    maxWidth?: '3xl' | '4xl' | '5xl' | 'full'
    className?: string
}) {
    const maxWidthClass =
        maxWidth === 'full'
            ? ''
            : maxWidth === '3xl'
                ? 'max-w-3xl'
                : maxWidth === '4xl'
                    ? 'max-w-4xl'
                    : 'max-w-5xl'

    return (
        <div className={`container mx-auto px-6 lg:px-8 ${className}`}>
            <div className={`${maxWidthClass} mx-auto`}>{children}</div>
        </div>
    )
}

/**
 * 스크롤 등장 애니메이션 래퍼
 * Framer Motion의 whileInView를 간편하게 적용
 *
 * @example
 * <FadeIn>
 *   <h2>등장하는 제목</h2>
 * </FadeIn>
 * <FadeIn delay={0.2} direction="left">
 *   <p>왼쪽에서 등장하는 텍스트</p>
 * </FadeIn>
 */
export function FadeIn({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    className = '',
    once = true,
    ...props
}: {
    children: ReactNode
    delay?: number
    duration?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    className?: string
    once?: boolean
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport' | 'transition'>) {
    const directionMap = {
        up: { y: 30 },
        down: { y: -30 },
        left: { x: -30 },
        right: { x: 30 },
        none: {},
    }

    return (
        <motion.div
            initial={{ opacity: 0, ...directionMap[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once }}
            transition={{ duration, delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}
