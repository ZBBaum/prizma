import Link from 'next/link'
import { ThemeToggle } from './ui/curtain-theme-toggle'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0a0a0a] border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <nav className="max-w-5xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline">
          <img
            src="/PrizmaLogoLight3.png?v=3"
            alt="Prizma"
            className="block dark:hidden"
            style={{ height: '76px', width: '114px', objectFit: 'contain', objectPosition: 'left center' }}
          />
          <img
            src="/PrizmaLogoDark3.png?v=3"
            alt="Prizma"
            className="hidden dark:block"
            style={{ height: '76px', width: '114px', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-base font-bold text-black/50 dark:text-white/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/built"
            className="text-base font-bold text-black/50 dark:text-white/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="text-base font-bold bg-black text-white dark:bg-white dark:text-black px-5 py-2 hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
          <ThemeToggle variant="icon" buttonSize={34} />
        </div>
      </nav>
    </header>
  )
}
