import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Work | Prizma',
}

const SPECTRUM = 'linear-gradient(90deg, #7B00D4, #1177EE, #22CC22, #FFD700, #FF7700, #EE1111)'

function SpectrumDivider() {
  return <div style={{ height: '1px', background: SPECTRUM, opacity: 0.35 }} />
}

export default function Built() {
  return (
    <>
      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
            Work
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-white mb-4">
            What we've built
          </h1>
          <div style={{ height: '2px', width: '56px', background: SPECTRUM, borderRadius: '1px', marginBottom: '24px' }} />
          <p className="text-lg text-[#333333] dark:text-[#cccccc] max-w-lg leading-relaxed">
            We build custom AI tools that actually ship. Fast. Our clients get working products, not slide decks.
          </p>
        </section>
      </FadeIn>

      <SpectrumDivider />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <FadeIn>
          <div
            className="prizma-card p-8 flex flex-col hover:-translate-y-1 transition-all duration-200"
            style={{ borderLeft: '2px solid #00d4ff' }}
          >
            <h3
              className="text-4xl font-bold mb-4"
              style={{ color: '#00d4ff', fontFamily: "'Satoshi', sans-serif" }}
            >
              SiteIQ
            </h3>
            <p className="text-sm text-[#444444] dark:text-[#aaaaaa] leading-relaxed mb-8 max-w-2xl">
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
              <p className="text-xs text-[#555555] dark:text-[#999999]">
                This is one of the tools we built for ourselves. Curious what we could build for you?
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <SpectrumDivider />

      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2
            className="font-bold text-black dark:text-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            Want us to build something like this for you?
          </h2>
          <Link href="/contact">
            <button className="prizma-btn bg-[#7C3AED] text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-[#6D28D9] cursor-pointer">
              Get in touch
            </button>
          </Link>
        </section>
      </FadeIn>
    </>
  )
}
