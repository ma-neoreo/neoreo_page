'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

/**
 * 프라이머리 버튼 (채워진 스타일)
 * CTA, 메일 링크 등 핵심 액션에 사용
 *
 * @example
 * <ButtonPrimary href="mailto:hello@neoreo.org">문의하기</ButtonPrimary>
 * <ButtonPrimary href="mailto:hello@neoreo.org" showArrow>프로젝트 문의하기</ButtonPrimary>
 */
export function ButtonPrimary({
    href,
    children,
    showArrow = false,
    variant = 'navy',
    className = '',
}: {
    href: string
    children: ReactNode
    showArrow?: boolean
    variant?: 'navy' | 'white'
    className?: string
}) {
    const baseStyles = 'px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center'
    const variantStyles =
        variant === 'navy'
            ? 'bg-navy text-white hover:bg-primary'
            : 'group bg-white text-navy shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-2xl px-10'

    return (
        <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
            <span>{children}</span>
            {showArrow && (
                <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                />
            )}
        </Link>
    )
}

/**
 * 아웃라인 버튼 (테두리 스타일)
 * 보조 액션에 사용
 *
 * @example
 * <ButtonOutline onClick={handleClick}>자세히 보기</ButtonOutline>
 */
export function ButtonOutline({
    children,
    onClick,
    className = '',
}: {
    children: ReactNode
    onClick?: () => void
    className?: string
}) {
    return (
        <button
            onClick={onClick}
            className={`px-8 py-4 bg-white text-navy border-2 border-slate-100 rounded-xl font-bold hover:border-slate-300 transition-colors duration-300 ${className}`}
        >
            {children}
        </button>
    )
}
