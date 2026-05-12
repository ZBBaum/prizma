import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Work | Prizma',
}

export default function Built() {
  return (
    <>
      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
            Work
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-white mb-4">
            What we've built
          </h1>
          <p className="text-lg font-normal text-[#333333] dark:text-[#cccccc] max-w-lg leading-relaxed">
            We build custom AI tools that actually ship. Fast. Our clients get working products, not slide decks. Here is a look at what we have built.
          </p>
        </section>
      </FadeIn>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <FadeIn>
          <div className="border border-black/10 dark:border-white/10 p-8 flex flex-col">
            <h3
              className="text-4xl font-bold mb-4"
              style={{ color: '#00d4ff', fontFamily: "'Satoshi', sans-serif" }}
            >
              SiteIQ
            </h3>
            <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed mb-8 max-w-2xl">
              An AI-powered website audit tool. Paste a URL, get a full conversion audit in 90 seconds: an overall grade, scores across six pillars, pixel-accurate visual annotations, and specific copy rewrites for every issue found. Not data. The actual fix, already written.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://siteiqai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold transition-opacity hover:opacity-70 w-fit"
                style={{ color: '#00d4ff' }}
              >
                Visit siteiqai.com →
              </a>
              <p className="text-xs font-normal text-[#555555] dark:text-[#999999]">
                This is one of the tools we built for ourselves. Curious what we could build for you?
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>

      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2
            className="font-bold text-black dark:text-white leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            Want us to build something like this for you?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-6 py-3 hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors"
          >
            Get in touch
          </Link>
        </section>
      </FadeIn>
    </>
  )
}
