import Link from 'next/link'
import { ThemeToggle } from './ui/curtain-theme-toggle'
import { LiquidButton } from './ui/liquid-glass-button'

const SPECTRUM = 'linear-gradient(90deg, #7C3AED, #2563EB, #059669, #D97706, #EA580C, #E11D48)'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
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
            className="text-base font-bold text-black/50 dark:text-white/50 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors"
          >
            About
          </Link>
          <Link
            href="/built"
            className="text-base font-bold text-black/50 dark:text-white/50 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors"
          >
            Work
          </Link>
          <Link href="/contact">
            <LiquidButton size="default" className="text-black dark:text-white font-bold">
              Contact
            </LiquidButton>
          </Link>
          <ThemeToggle variant="icon" buttonSize={34} />
        </div>
      </nav>
      <div style={{ height: '1px', background: SPECTRUM, opacity: 0.5 }} />
    </header>
  )
}
