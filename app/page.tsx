import Link from 'next/link'

const services = [
  {
    title: 'Strategy',
    description:
      'We map your business to the AI landscape — identifying where automation creates leverage and where human judgment stays essential.',
  },
  {
    title: 'Build',
    description:
      'From prototypes to production systems, we ship AI products that actually work: reliable, fast, and integrated into how you operate.',
  },
  {
    title: 'Train',
    description:
      'We embed with your team, building AI fluency from the ground up so capability stays inside your organization.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        <p className="text-sm font-bold tracking-widest uppercase text-black/40 mb-6">
          AI Consulting
        </p>
        <h1 className="text-6xl font-black leading-[1.05] tracking-tight max-w-2xl">
          The impossible,<br />delivered instantly.
        </h1>
        <p className="mt-8 text-lg font-semibold text-black/50 max-w-lg leading-relaxed">
          Prizma helps organizations move from AI curiosity to AI advantage — through strategy, engineering, and education.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-black text-white text-sm font-bold px-6 py-3 hover:bg-black/80 transition-colors"
          >
            Start a conversation
          </Link>
          <Link
            href="/about"
            className="inline-block text-sm font-bold text-black/50 hover:text-black transition-colors"
          >
            Learn more →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10" />
      </div>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-12">
          What we do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s) => (
            <div key={s.title}>
              <h3 className="text-xl font-black mb-3">{s.title}</h3>
              <p className="text-sm font-semibold text-black/50 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10" />
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black tracking-tight max-w-md">
          Ready to move faster?
        </h2>
        <p className="mt-4 text-base font-semibold text-black/50 max-w-sm leading-relaxed">
          Tell us what you're trying to build. We'll tell you if we can help.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-black text-white text-sm font-bold px-6 py-3 hover:bg-black/80 transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </>
  )
}
