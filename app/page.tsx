import type { Metadata } from 'next'
import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import FadeIn from '@/components/FadeIn'
import RotatingPrism from '@/components/RotatingPrism'

export const metadata: Metadata = {
  title: 'Prizma | AI Consulting',
  description: 'Prizma builds custom AI platforms for enterprises and growing companies, fast and at a fixed price.',
}

const SPECTRUM = 'linear-gradient(90deg, #7B00D4, #1177EE, #22CC22, #FFD700, #FF7700, #EE1111)'

const whatWeDo = [
  {
    title: 'Strategy',
    description: 'We map your business to the AI landscape, identifying where automation creates leverage and where human judgment stays essential.',
    glow: 'rgba(124,58,237,0.14)',
  },
  {
    title: 'Build',
    description: 'From prototypes to production systems, we ship AI products that actually work: reliable, fast, and integrated into how you operate.',
    glow: 'rgba(37,99,235,0.14)',
  },
  {
    title: 'Train',
    description: 'We embed with your team, building AI fluency from the ground up so capability stays inside your organization.',
    glow: 'rgba(5,150,105,0.14)',
  },
]

const whatWeBuild = [
  {
    title: 'Web Design',
    description: 'Beautiful, fast websites built to convert; designed with purpose, engineered to perform.',
  },
  {
    title: 'AI Platforms',
    description: 'Custom enterprise software built in days using cutting-edge AI.',
  },
  {
    title: 'Data Infrastructure',
    description: 'Pipelines, dashboards, and intelligence layers that give your organization clarity.',
  },
]

const steps = [
  { num: '01', color: 'var(--prizma-violet)', title: 'Share the problem', body: 'Tell us what you need. A platform, a tool, an automation. The bigger the better.' },
  { num: '02', color: 'var(--prizma-blue)', title: 'We build it', body: 'Using AI, we design and develop your platform fast.' },
  { num: '03', color: 'var(--prizma-green)', title: 'You launch it', body: 'Delivered fast, priced fairly, ready to use.' },
]

const faqs = [
  {
    q: 'How fast do you actually build?',
    a: 'Most projects are live within 1 to 2 weeks. Our first client needed an entire AI data platform and we delivered it in one day.',
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

function SpectrumDivider() {
  return <div style={{ height: '1px', background: SPECTRUM }} />
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: SPECTRUM, flexShrink: 0 }} />
      <h2 className="text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999]">
        {children}
      </h2>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col"
        style={{ minHeight: 'calc(100vh - 96px)', animation: 'heroReveal 0.45s cubic-bezier(0.165, 0.84, 0.44, 1) forwards' }}
      >
        <WebGLShader />


        {/* Left-aligned hero content */}
        <div className="relative max-w-5xl mx-auto px-6 w-full pt-16 md:pt-24">
          <h1
            className="font-black text-black dark:text-white dark:mix-blend-difference leading-[0.95] tracking-tight max-w-4xl mb-6"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            }}
          >
            Enterprise Software.<br />Without the wait.
          </h1>
          <div className="relative max-w-lg">
            <div
              aria-hidden="true"
              className="hidden dark:block absolute -inset-x-12 -inset-y-10 -z-[1] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 50%, transparent 80%)',
                filter: 'blur(20px)',
              }}
            />
            <p className="relative text-base md:text-lg font-medium text-[#444444] dark:text-[#dddddd] mb-10 leading-relaxed dark:[text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
              We build custom AI platforms for enterprises and growing companies, fast and at a fixed price.
            </p>
            <div className="relative flex items-center gap-7 flex-wrap dark:[filter:drop-shadow(0_4px_16px_rgba(0,0,0,0.35))]">
              <Link href="/contact">
                <LiquidButton size="xl" className="text-black dark:text-white font-bold">
                  Tell us what you need
                </LiquidButton>
              </Link>
              <Link
                href="/built"
                className="group inline-flex items-center gap-2 text-sm font-bold text-black dark:text-white hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors"
              >
                See our work
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom-left typographic film slate */}
        <div className="relative z-10 mt-auto max-w-5xl mx-auto px-6 w-full pb-10">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/50 dark:text-white/50">
            Prizma · Est. 2026 · AI Consulting
          </p>
        </div>
      </section>

      <div className="bg-white dark:bg-black transition-colors duration-300">

        {/* Spectrum bar entering the content */}
        <FadeIn><div style={{ height: '1px', background: SPECTRUM }} /></FadeIn>

        {/* What we do */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-black">
            <SectionLabel>What we do</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeDo.map((s) => (
                <div
                  key={s.title}
                  className="prizma-card p-6"
                  style={{
                    '--card-glow': s.glow,
                  } as React.CSSProperties}
                >
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{s.title}</h3>
                  <p className="text-sm text-[#444444] dark:text-[#aaaaaa] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn><SpectrumDivider /></FadeIn>

        {/* How it works */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-24 bg-white dark:bg-black">
            <SectionLabel>How it works</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.num}>
                  <p
                    className="font-bold leading-none mb-5"
                    style={{ fontSize: '5rem', color: s.color, opacity: 0.85 }}
                  >
                    {s.num}
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{s.title}</h3>
                  <p className="text-sm text-[#444444] dark:text-[#aaaaaa] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn><SpectrumDivider /></FadeIn>

        {/* What we build */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-20 bg-white dark:bg-black">
            <SectionLabel>What we build</SectionLabel>
            <div className="border-t border-black/15 dark:border-white/15">
              {whatWeBuild.map((s) => (
                <div
                  key={s.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-10 border-b border-black/15 dark:border-white/15"
                >
                  <div className="md:col-span-4">
                    <h3
                      className="text-3xl md:text-4xl font-black leading-[1.05] tracking-tight text-black dark:text-white"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8 md:pt-3">
                    <p className="text-base text-[#444444] dark:text-[#aaaaaa] leading-relaxed max-w-xl">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/built"
              className="inline-flex items-center gap-2 mt-10 text-xs font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] hover:text-black dark:hover:text-white transition-colors"
            >
              See what we&apos;ve shipped
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        </FadeIn>

        <FadeIn><SpectrumDivider /></FadeIn>

        {/* About */}
        <div className="relative overflow-hidden bg-white dark:bg-black">
          <RotatingPrism />
          <FadeIn>
            <section className="max-w-5xl mx-auto px-6 py-24 relative z-10">
              <SectionLabel>About Prizma</SectionLabel>
              <p className="text-xl text-[#333333] dark:text-[#cccccc] leading-relaxed max-w-2xl">
                Prizma was built on a simple idea: great software should be fast to build and honest to price. We use AI to ship enterprise platforms in weeks, with a fixed quote upfront. Our own AI website auditor,{' '}
                <Link
                  href="/built"
                  className="font-bold text-black dark:text-white hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors"
                >
                  SiteIQ
                </Link>
                , was built in a day.
              </p>
            </section>
          </FadeIn>
        </div>

        <FadeIn><SpectrumDivider /></FadeIn>

        {/* FAQ */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-black">
            <SectionLabel>FAQ</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#444444] dark:text-[#aaaaaa] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <div className="bg-white dark:bg-black">
          <FadeIn><div style={{ height: '1px', background: SPECTRUM }} /></FadeIn>
          <FadeIn>
            <section className="max-w-5xl mx-auto px-6 py-28">
              <h2
                className="font-black text-black dark:text-white leading-[0.95] tracking-tight mb-6"
                style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
              >
                Ready to move faster?
              </h2>
              <p className="text-base text-[#444444] dark:text-[#aaaaaa] max-w-sm leading-relaxed mb-8">
                Tell us what you're trying to build. We'll tell you if we can help.
              </p>
              <Link href="/contact">
                <LiquidButton size="xl" className="text-black dark:text-white font-bold">
                  Get in touch
                </LiquidButton>
              </Link>
            </section>
          </FadeIn>
        </div>

      </div>
    </>
  )
}
