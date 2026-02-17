import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafafc',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neoreo.org'),
  title: {
    template: '%s | Neoreo',
    default: 'Neoreo - 즐거움의 새로운 기준',
  },
  description: '네오레오는 독창적인 상상력과 기술력으로 즐거움의 새로운 기준을 만드는 게임 스튜디오입니다.',
  keywords: ['Neoreo', '네오레오', '게임 개발', '모바일 게임', '게임 스튜디오', '인디게임'],
  authors: [{ name: 'Neoreo' }],
  openGraph: {
    title: 'Neoreo - 즐거움의 새로운 기준',
    description: '네오레오는 독창적인 상상력과 기술력으로 즐거움의 새로운 기준을 만드는 게임 스튜디오입니다.',
    url: 'https://neoreo.org',
    siteName: 'Neoreo',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neoreo',
    description: '즐거움의 새로운 기준을 만드는 게임 스튜디오',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansKr.variable} antialiased min-h-screen bg-[#fafafc] text-[#1a1a2e] font-sans`}>
        {children}
      </body>
    </html>
  )
}
