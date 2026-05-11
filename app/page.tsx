import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'
import { LiquidButton } from '@/components/ui/liquid-glass-button'

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
      "We embed with your team, building AI fluency from the ground up so capability stays inside your organization.",
  },
]

export default function Home() {
  return (
    <>
      {/* Shader hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <WebGLShader />
        <div className="relative z-10 border border-white/10 p-2 w-full max-w-3xl">
          <div className="border border-white/10 py-14 px-8 overflow-hidden">
            <h1 className="text-white text-center text-6xl font-black tracking-tight leading-[1.05] md:text-[clamp(2.5rem,8vw,5rem)]">
              The impossible,<br />delivered instantly.
            </h1>
            <p className="text-white/50 text-center text-sm md:text-base mt-5 max-w-md mx-auto leading-relaxed font-semibold">
              Prizma helps organizations move from AI curiosity to AI advantage — through strategy, engineering, and education.
            </p>
            <div className="my-7 flex items-center justify-center gap-1.5">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <p className="text-xs text-green-500 font-semibold">Available for New Projects</p>
            </div>
            <div className="flex justify-center">
              <Link href="/contact" className="inline-flex">
                <LiquidButton size="xl" className="text-white border border-white/20 rounded-full">
                  Start a conversation
                </LiquidButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* White sections sit on top of the fixed shader */}
      <div className="relative z-10 bg-white">
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
      </div>
    </>
  )
}
