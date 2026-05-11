import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'

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
      <section className="relative min-h-screen flex flex-col">
        <WebGLShader />
        {/* Logo — upper center */}
        <div className="relative z-10 flex justify-center pt-32">
          <img
            src="/PrizmaLogoLight1.png"
            alt="Prizma"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
        {/* Bottom — tagline + button */}
        <div className="relative z-10 mt-auto pb-16 flex flex-col items-center gap-6">
          <p className="text-black/50 text-base font-normal text-center">
            Enterprise software made in a fraction of the time.
          </p>
          <Link href="/contact" className="inline-flex">
            <button className="bg-black text-white text-sm font-bold px-8 py-3 hover:bg-black/80 transition-colors">
              Start a conversation
            </button>
          </Link>
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
