import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Prizma',
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
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm font-bold tracking-widest uppercase text-black/40 mb-6">
          About
        </p>
        <h1 className="text-5xl font-black leading-tight tracking-tight max-w-xl">
          We make AI work for real companies.
        </h1>
        <p className="mt-8 text-lg font-semibold text-black/50 max-w-lg leading-relaxed">
          Prizma is an AI consulting firm built around a simple belief: the gap between what AI can do and what most organizations are actually doing with it is enormous — and closeable.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10" />
      </div>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-6">
              Our mission
            </h2>
            <p className="text-2xl font-black leading-snug tracking-tight">
              To collapse the distance between where AI is and where it should be in your organization.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-black/50 leading-relaxed mb-4">
              Most AI projects fail not because the technology doesn't work, but because strategy, execution, and adoption weren't aligned from the start.
            </p>
            <p className="text-sm font-semibold text-black/50 leading-relaxed">
              We exist to fix that. We work closely with leadership and technical teams to diagnose the real barriers, build the right solutions, and make sure they actually stick.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10" />
      </div>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-12">
          How we work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-lg font-black mb-3">{v.title}</h3>
              <p className="text-sm font-semibold text-black/50 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
