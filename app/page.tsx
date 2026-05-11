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
      {/* Shader hero — dark canvas, white text, light logo variant */}
      <section className="relative min-h-screen flex items-center">
        <WebGLShader />
        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-12 py-32">
          <Logo height={36} src="/PrizmaLogoDark1.png" />
          <h1 className="mt-10 text-black text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-2xl">
            Possible. Proven. Prizma.
          </h1>
          <p className="mt-6 text-black/50 text-base md:text-lg font-semibold max-w-md leading-relaxed">
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
              <LiquidButton size="xl" className="text-black border border-black/20 rounded-full">
                Start a conversation
              </LiquidButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Light sections */}
      <div className="relative z-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-black/10" />
        </div>

        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-12">
            What we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="text-xl font-black mb-3 text-black">{s.title}</h3>
                <p className="text-sm font-semibold text-black/50 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-black/10" />
        </div>

        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-black tracking-tight max-w-md text-black">
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
