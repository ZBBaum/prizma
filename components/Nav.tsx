import Link from 'next/link'
import Logo from './Logo'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Logo height={32} />
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-bold text-white/50 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold bg-white text-black px-4 py-1.5 hover:bg-white/80 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
