import Link from 'next/link'
import { Mail } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          {/* Left - Brand & Info */}
          <div className="space-y-4 max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Logo />
            </Link>
            <div className="text-sm leading-relaxed text-navy-muted space-y-1.5">
              <p><span className="font-semibold text-navy">대표:</span> 나찬혁</p>
              <p><span className="font-semibold text-navy">사업자등록번호:</span> 356-06-03635</p>
              <p className="flex items-center gap-1.5">
                <Mail size={13} className="text-primary" />
                <span>nch6807@neoreo.org</span>
              </p>
            </div>
          </div>

          {/* Right - Links */}
          <div className="flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium text-navy-muted hover:text-primary transition-colors">
              소개
            </Link>
            <Link href="#vision" className="text-sm font-medium text-navy-muted hover:text-primary transition-colors">
              비전
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-navy-muted gap-4">
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              이용약관
            </Link>
          </div>

          <span className="opacity-60">
            &copy; {currentYear} Neoreo. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
