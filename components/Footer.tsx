import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline">
          <img
            src="/PrizmaLogoLight3.png?v=3"
            alt="Prizma"
            className="block dark:hidden"
            style={{ height: '48px', width: '72px', objectFit: 'contain', objectPosition: 'left center' }}
          />
          <img
            src="/PrizmaLogoDark3.png?v=3"
            alt="Prizma"
            className="hidden dark:block"
            style={{ height: '48px', width: '72px', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/prizmatechco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prizma on LinkedIn"
            className="text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <p className="text-sm font-bold text-black/40 dark:text-white/40">
            © {new Date().getFullYear()} Prizma
          </p>
        </div>
      </div>
    </footer>
  )
}
