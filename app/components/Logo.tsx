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
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 6C8.89543 6 8 6.89543 8 8V32C8 33.1046 8.89543 34 10 34H14.5C15.6046 34 16.5 33.1046 16.5 32V20.5L25.5 33.4C26.1555 34.3406 27.234 34.9048 28.3813 34.9048H30C31.1046 34.9048 32 34.0094 32 32.9048V8.90476C32 7.8002 31.1046 6.90476 30 6.90476H25.5C24.3954 6.90476 23.5 7.8002 23.5 8.90476V20.4048L14.5 7.50476C13.8445 6.56419 12.766 6 11.6187 6H10Z"
                        style={{ fill: `url(#${iconGradientId})` }}
                    />
                    <defs>
                        <linearGradient id="logo-gradient-primary" x1="8" y1="6" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F46E5" /> {/* Indigo-600 */}
                            <stop offset="1" stopColor="#7C3AED" /> {/* Violet-600 */}
                        </linearGradient>
                        <linearGradient id="logo-gradient-white" x1="8" y1="6" x2="32" y2="35" gradientUnits="userSpaceOnUse">
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
