import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Copyright */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Neoreo</h3>
            <p className="mb-4 text-gray-400">
              혁신적인 모바일 퍼즐 게임을 만드는 게임 개발사입니다.
              <br />
              새로운 즐거움을 위해 끊임없이 도전합니다.
            </p>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Neoreo. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">회사 정보</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-gray-500 text-xs mb-1">대표</span>
                <span className="text-gray-300">나찬혁</span>
              </li>
              <li>
                <span className="block text-gray-500 text-xs mb-1">사업자등록번호</span>
                <span className="text-gray-300">356-06-03635</span>
              </li>
              <li className="flex items-start mt-2 group">
                <Mail size={16} className="mr-2 mt-0.5 text-blue-500 group-hover:text-blue-400 flex-shrink-0" />
                <a href="mailto:nch6807@neoreo.org" className="hover:text-white transition-colors break-all">
                  nch6807@neoreo.org
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors block py-1">
                  개인정보 처리 방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white hover:underline transition-colors block py-1">
                  이용 약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
