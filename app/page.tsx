import type { Metadata } from 'next'
import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'
import FadeIn from '@/components/FadeIn'
import RotatingPrism from '@/components/RotatingPrism'

export const metadata: Metadata = {
  title: 'Prizma | AI Consulting',
  description: 'Prizma builds custom AI platforms for enterprises and growing companies, fast and at a fixed price.',
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
  { num: '02', color: 'var(--prizma-blue)', title: 'We build it', body: 'Using AI, we design and develop your platform fast.' },
  { num: '03', color: 'var(--prizma-green)', title: 'You launch it', body: 'Delivered fast, priced fairly, ready to use.' },
]

const stats = [
  { number: '1 Week', label: 'Average build time' },
  { number: '$20k', label: 'Saved on first project' },
  { number: '5x', label: 'Faster than traditional firms' },
]

const faqs = [
  {
    q: 'How fast do you actually build?',
    a: 'Most projects are live within 1-2 weeks. Our first client needed an entire AI data platform and we delivered it in one day.',
  },
  {
    q: 'What kind of projects do you take on?',
    a: 'AI platforms, data infrastructure, automation tools, and custom software for enterprises and growing companies.',
  },
  {
    q: 'How much does it cost?',
    a: 'We quote fixed prices upfront so you know exactly what you are paying before we start.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'We respond within one business day, scope your project, and give you a fixed quote. If we are a fit, we start building immediately.',
  },
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
          <div className="flex-1 flex flex-col items-center justify-center" style={{ transform: 'translateY(-115px)' }}>
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
            <h1
              className="font-bold text-black dark:text-white leading-tight tracking-tight text-center"
              style={{ transform: 'translateY(-45px)', marginTop: '16px', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Enterprise Software. Without the wait.
            </h1>
            <p
              className="text-base font-medium text-[#333333] dark:text-[#cccccc] max-w-xl text-center"
              style={{ transform: 'translateY(-45px)', marginTop: '12px' }}
            >
              We build custom AI platforms for enterprises and growing companies, shipped fast at a fixed price.
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
                Prizma was built on a simple idea: great software should be fast to build and honest to price. We use AI to ship enterprise platforms in weeks, with a fixed quote upfront. Founded by Zack Baum.
              </p>
            </section>
          </FadeIn>
        </div>

        <Divider color={dividerColors[5]} />

        {/* FAQ */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-8">
              FAQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-base font-bold text-black dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <Divider color={dividerColors[0]} />

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
