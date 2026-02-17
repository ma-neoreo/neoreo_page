'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
    className?: string
    textClassName?: string
    showText?: boolean
    variant?: 'color' | 'white'
}

export default function Logo({
    className,
    textClassName,
    showText = true,
    variant = 'color'
}: LogoProps) {
    // Colors based on variant
    const iconGradientId = variant === 'white' ? 'logo-gradient-white' : 'logo-gradient-primary'
    const textColorClass = variant === 'white' ? 'text-white' : 'text-navy'

    return (
        <div className={cn("flex items-center gap-2.5 select-none", className)}>
            {/* Icon Mark */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* Modern Abstract 'n' Logo */}
                    <path
                        d="M11 12C9.34315 12 8 13.3431 8 15V32C8 33.6569 9.34315 35 11 35C12.6569 35 14 33.6569 14 32V23C14 19.134 17.134 16 21 16C24.866 16 28 19.134 28 23V32C28 33.6569 29.3431 35 31 35C32.6569 35 34 33.6569 34 32V23C34 15.8203 28.1797 10 21 10C17.0688 10 13.5358 11.7483 11.168 14.494C11.3916 13.7915 11.4552 12.0156 11 12Z"
                        fill={`url(#${iconGradientId})`}
                    />
                    {/* Floating Accent Dot/Pixel to signify 'Game/Digital' - Optional, adds uniqueness */}
                    <circle cx="31" cy="11" r="3" fill={`url(#${iconGradientId})`} />

                    <defs>
                        <linearGradient id="logo-gradient-primary" x1="8" y1="10" x2="34" y2="35" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F46E5" /> {/* Indigo-600 */}
                            <stop offset="1" stopColor="#7C3AED" /> {/* Violet-600 */}
                        </linearGradient>
                        <linearGradient id="logo-gradient-white" x1="8" y1="10" x2="34" y2="35" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFFFF" />
                            <stop offset="1" stopColor="#E0E7FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Text */}
            {showText && (
                <span className={cn("font-black text-xl tracking-tight", textColorClass, textClassName)}>
                    neoreo
                </span>
            )}
        </div>
    )
}
