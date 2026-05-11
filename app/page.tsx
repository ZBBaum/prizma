import Link from 'next/link'
import Logo from '@/components/Logo'
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
      {/* Shader hero — left-aligned */}
      <section className="relative min-h-screen flex items-center">
        <WebGLShader />
        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-12 py-32">
          <Logo height={36} />
          <h1 className="mt-10 text-white text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-2xl">
            The impossible,<br />delivered instantly.
          </h1>
          <p className="mt-6 text-white/50 text-base md:text-lg font-semibold max-w-md leading-relaxed">
            Prizma helps organizations move from AI curiosity to AI advantage — through strategy, engineering, and education.
          </p>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <p className="text-xs text-green-500 font-semibold">Available for New Projects</p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex">
              <LiquidButton size="xl" className="text-white border border-white/20 rounded-full">
                Start a conversation
              </LiquidButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Opaque dark sections cover the fixed shader on scroll */}
      <div className="relative z-10 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-white/10" />
        </div>

        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-12">
            What we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="text-xl font-black mb-3 text-white">{s.title}</h3>
                <p className="text-sm font-semibold text-white/50 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-white/10" />
        </div>

        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-black tracking-tight max-w-md text-white">
            Ready to move faster?
          </h2>
          <p className="mt-4 text-base font-semibold text-white/50 max-w-sm leading-relaxed">
            Tell us what you're trying to build. We'll tell you if we can help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white text-black text-sm font-bold px-6 py-3 hover:bg-white/80 transition-colors"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </>
  )
}
