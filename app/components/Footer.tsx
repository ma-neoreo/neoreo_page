import Link from 'next/link'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-slate-50 text-slate-500 py-16 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
          {/* Use Flex layout for a minimal header-like footer top */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="inline-block text-2xl font-black text-slate-900 tracking-tighter hover:text-blue-600 transition-colors">
              neore<span className="text-blue-600">o</span>
            </Link>
            <div className="text-sm leading-relaxed text-slate-500 space-y-1">
              <p><span className="font-semibold text-slate-700">CEO:</span> Chan-hyuk Na</p>
              <p><span className="font-semibold text-slate-700">Business Registration:</span> 356-06-03635</p>
              <p><span className="font-semibold text-slate-700">Email:</span> nch6807@neoreo.org</p>
              <p className="pt-2 text-slate-400">Innovating the future of puzzle gaming.</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="#company" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#gameplay" className="text-sm font-medium hover:text-blue-600 transition-colors">Game</Link>
            <a href="mailto:nch6807@neoreo.org" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="opacity-50">&copy; {currentYear} Neoreo Inc.</span>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition-all border border-slate-100"><Twitter size={14} /></a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-slate-900 transition-all border border-slate-100"><Github size={14} /></a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-blue-700 transition-all border border-slate-100"><Linkedin size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
