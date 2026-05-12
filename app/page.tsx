import type { Metadata } from 'next'
import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'
import FadeIn from '@/components/FadeIn'
import RotatingPrism from '@/components/RotatingPrism'

export const metadata: Metadata = {
  title: 'Prizma | AI Consulting',
  description: 'Prizma builds custom AI platforms for enterprises and growing companies in days, not months, at a fraction of the cost.',
}

const whatWeDo = [
  {
    title: 'Strategy',
    description: 'We map your business to the AI landscape, identifying where automation creates leverage and where human judgment stays essential.',
    hover: 'hover:border-prizma-violet',
  },
  {
    title: 'Build',
    description: 'From prototypes to production systems, we ship AI products that actually work: reliable, fast, and integrated into how you operate.',
    hover: 'hover:border-prizma-blue',
  },
  {
    title: 'Train',
    description: 'We embed with your team, building AI fluency from the ground up so capability stays inside your organization.',
    hover: 'hover:border-prizma-green',
  },
]

const whatWeBuild = [
  {
    title: 'Web Design',
    description: 'Beautiful, fast websites built to convert — designed with purpose, engineered to perform.',
    hover: 'hover:border-prizma-violet',
  },
  {
    title: 'AI Platforms',
    description: 'Custom enterprise software built in days using cutting-edge AI.',
    hover: 'hover:border-prizma-blue',
  },
  {
    title: 'Data Infrastructure',
    description: 'Pipelines, dashboards, and intelligence layers that give your organization clarity.',
    hover: 'hover:border-prizma-green',
  },
]

const steps = [
  { num: '01', color: 'var(--prizma-violet)', title: 'Share the problem', body: 'Tell us what you need. A platform, a tool, an automation. The bigger the better.' },
  { num: '02', color: 'var(--prizma-blue)', title: 'We build it', body: 'Using AI, we design and develop your platform in days, not months.' },
  { num: '03', color: 'var(--prizma-green)', title: 'You launch it', body: 'Delivered fast, priced fairly, ready to use. No bloat, no delays, no surprises.' },
]

const stats = [
  { number: '1 Week', label: 'Average build time' },
  { number: '10x', label: 'Faster than traditional firms' },
  { number: '$20k', label: 'Saved on our first project' },
]

const dividerColors = [
  'var(--prizma-violet)',
  'var(--prizma-blue)',
  'var(--prizma-green)',
  'var(--prizma-yellow)',
  'var(--prizma-orange)',
  'var(--prizma-red)',
]

function Divider({ color }: { color: string }) {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div style={{ height: '1px', backgroundColor: color, opacity: 0.6 }} />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex flex-col"
        style={{ animation: 'heroReveal 0.7s ease-out forwards' }}
      >
        <WebGLShader />
        <div className="relative z-10 flex flex-col flex-1 items-center px-6 text-center">
          <div className="flex-1 flex flex-col items-center justify-center" style={{ transform: 'translateY(-100px)' }}>
            <img
              src="/PrizmaLogoLight3.png?v=3"
              alt="Prizma"
              className="block dark:hidden"
              style={{ width: 'min(380px, 80vw)', height: 'auto', objectFit: 'contain' }}
            />
            <img
              src="/PrizmaLogoDark3.png?v=3"
              alt="Prizma"
              className="hidden dark:block"
              style={{ width: 'min(380px, 80vw)', height: 'auto', objectFit: 'contain' }}
            />
            <p
              className="text-lg font-medium text-[#333333] dark:text-[#cccccc]"
              style={{ transform: 'translateY(-45px)', marginTop: '8px' }}
            >
              We build custom AI platforms for organizations and growing companies, in a fraction of the time, for a fraction of the cost.
            </p>
            <Link href="/contact" className="inline-flex" style={{ transform: 'translateY(-45px)', marginTop: '24px' }}>
              <button className="bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-8 py-3 rounded-full hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors">
                Tell us what you need
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-white dark:bg-[#0a0a0a] pb-12 transition-colors duration-300">

        {/* Stats bar */}
        <div className="border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.number} className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold text-black dark:text-white">{s.number}</span>
                <span className="text-xs font-medium text-[#555555] dark:text-[#999999] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider color={dividerColors[0]} />

        {/* What we do */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
              What we do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeDo.map((s) => (
                <div
                  key={s.title}
                  className={`border-t-2 border-transparent ${s.hover} hover:-translate-y-1 transition-all duration-200 pt-6`}
                >
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{s.title}</h3>
                  <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <Divider color={dividerColors[1]} />

        {/* How it works */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-8">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.num}>
                  <p
                    className="font-bold leading-none mb-5"
                    style={{ fontSize: '5rem', color: s.color, opacity: 0.55 }}
                  >
                    {s.num}
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{s.title}</h3>
                  <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <Divider color={dividerColors[3]} />

        {/* What we build */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
              What we build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeBuild.map((s) => (
                <div
                  key={s.title}
                  className={`border-t-2 border-transparent ${s.hover} hover:-translate-y-1 transition-all duration-200 pt-6`}
                >
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{s.title}</h3>
                  <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <Divider color={dividerColors[4]} />

        {/* About Prizma */}
        <div className="relative overflow-hidden">
          <RotatingPrism />
          <FadeIn>
            <section className="max-w-5xl mx-auto px-6 py-12 relative z-10">
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
                About Prizma
              </h2>
              <p className="text-lg font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed max-w-2xl">
                Prizma was built on a simple idea: the price of enterprise software just collapsed, but most organizations haven't realized it yet. We build in days what traditional firms take months to deliver, at a fraction of the cost. Founded by Zack Baum.
              </p>
            </section>
          </FadeIn>
        </div>

        <Divider color={dividerColors[5]} />

        {/* Contact CTA */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-12">
            <h2
              className="font-bold text-black dark:text-white leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
            >
              Ready to move faster?
            </h2>
            <p className="text-base font-normal text-[#333333] dark:text-[#cccccc] max-w-sm leading-relaxed mb-8">
              Tell us what you're trying to build. We'll tell you if we can help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-6 py-3 hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </section>
        </FadeIn>
      </div>
    </>
  )
}
