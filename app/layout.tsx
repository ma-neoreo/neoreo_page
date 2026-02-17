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
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neoreo.org'),
  title: {
    template: '%s | Neoreo',
    default: 'Neoreo - 창의적인 게임 개발사',
  },
  description: '네오레오는 혁신적인 모바일 퍼즐 게임을 만드는 게임 개발사입니다. Area Tetris와 같은 독창적인 게임을 만나보세요.',
  keywords: ['Neoreo', '네오레오', '게임 개발', '모바일 게임', '퍼즐 게임', 'Area Tetris'],
  authors: [{ name: 'Neoreo' }],
  openGraph: {
    title: 'Neoreo - 창의적인 게임 개발사',
    description: '네오레오는 혁신적인 모바일 퍼즐 게임을 만드는 게임 개발사입니다.',
    url: 'https://neoreo.org',
    siteName: 'Neoreo',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neoreo',
    description: '창의적인 게임 개발사 네오레오',
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
      <body className={`${inter.variable} ${notoSansKr.variable} antialiased min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  )
}
