import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'About | Prizma',
  description: 'Prizma is an AI consulting firm that helps companies in education, research, and enterprise actually put AI to work. We fix the strategy, execution, and adoption problems that cause most AI projects to fail.',
}

const values = [
  {
    title: 'Clarity over complexity',
    description:
      "AI is complicated enough. We cut through the noise and give you a clear picture of what matters and what doesn't.",
  },
  {
    title: 'Outcomes, not outputs',
    description:
      "We don't ship decks or demos. We measure success by what changes in your business.",
  },
  {
    title: 'Honest by default',
    description:
      "If something won't work, we say so early. We'd rather lose a project than waste your time.",
  },
]

export default function About() {
  return (
    <>
      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
            About
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight max-w-xl text-black dark:text-white">
            We make AI work for real companies.
          </h1>
          <p className="mt-8 text-lg font-normal text-[#333333] dark:text-[#cccccc] max-w-lg leading-relaxed">
            Prizma is an AI consulting firm built around a simple belief: the gap between what AI can do and what most organizations are actually doing with it is enormous, and closeable.
          </p>
          <p className="mt-4 text-base font-normal text-[#333333] dark:text-[#cccccc] max-w-lg leading-relaxed">
            We have helped organizations in education, research, and enterprise go from idea to working AI platform in days, not years.
          </p>
        </section>
      </FadeIn>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>

      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
                Our mission
              </h2>
              <p className="text-2xl font-bold leading-snug tracking-tight text-black dark:text-white">
                To collapse the distance between where AI is and where it should be in your organization.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed mb-4">
                Most AI projects fail not because the technology doesn't work, but because strategy, execution, and adoption weren't aligned from the start.
              </p>
              <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed mb-4">
                We exist to fix that. We work closely with leadership and technical teams to diagnose the real barriers, build the right solutions, and make sure they actually stick.
              </p>
              <Link href="/contact" className="text-sm font-bold text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                Ready to close that gap? Let's talk. →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>

      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-10">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-bold mb-3 text-black dark:text-white">{v.title}</h3>
                <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] mb-6">
              We work with organizations in education, research, and enterprise.{' '}
              <Link href="/built" className="text-black dark:text-white font-bold hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                See our work
              </Link>
              .
            </p>
            <Link href="/contact">
              <button className="bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-6 py-3 hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors">
                Talk to us about your AI project
              </button>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 px-6 py-4 flex items-center justify-between transition-colors duration-300">
        <span className="text-sm font-bold text-black dark:text-white">Ready to talk?</span>
        <Link href="/contact" className="bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-4 py-2 hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors">
          Get in touch
        </Link>
      </div>
    </>
  )
}
