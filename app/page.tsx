import type { Metadata } from 'next'
import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'
import FadeIn from '@/components/FadeIn'
import RotatingPrism from '@/components/RotatingPrism'

export const metadata: Metadata = {
  title: 'Prizma | AI Consulting',
  description: 'Prizma builds custom AI platforms for enterprises and growing companies, fast and at a fixed price.',
}

const SPECTRUM = 'linear-gradient(90deg, #7C3AED, #2563EB, #059669, #D97706, #EA580C, #E11D48)'

const whatWeDo = [
  {
    title: 'Strategy',
    description: 'We map your business to the AI landscape, identifying where automation creates leverage and where human judgment stays essential.',
    accent: '#7C3AED',
    glow: 'rgba(124,58,237,0.14)',
  },
  {
    title: 'Build',
    description: 'From prototypes to production systems, we ship AI products that actually work: reliable, fast, and integrated into how you operate.',
    accent: '#2563EB',
    glow: 'rgba(37,99,235,0.14)',
  },
  {
    title: 'Train',
    description: 'We embed with your team, building AI fluency from the ground up so capability stays inside your organization.',
    accent: '#059669',
    glow: 'rgba(5,150,105,0.14)',
  },
]

const whatWeBuild = [
  {
    title: 'Web Design',
    description: 'Beautiful, fast websites built to convert — designed with purpose, engineered to perform.',
    accent: '#D97706',
    glow: 'rgba(217,119,6,0.14)',
  },
  {
    title: 'AI Platforms',
    description: 'Custom enterprise software built in days using cutting-edge AI.',
    accent: '#EA580C',
    glow: 'rgba(234,88,12,0.14)',
  },
  {
    title: 'Data Infrastructure',
    description: 'Pipelines, dashboards, and intelligence layers that give your organization clarity.',
    accent: '#E11D48',
    glow: 'rgba(225,29,72,0.14)',
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
    a: 'Most projects are live within 1–2 weeks. Our first client needed an entire AI data platform and we delivered it in one day.',
    accent: '#7C3AED',
  },
  {
    q: 'What kind of projects do you take on?',
    a: 'AI platforms, data infrastructure, automation tools, and custom software for enterprises and growing companies.',
    accent: '#2563EB',
  },
  {
    q: 'How much does it cost?',
    a: 'We quote fixed prices upfront so you know exactly what you are paying before we start.',
    accent: '#059669',
  },
  {
    q: 'What happens after I reach out?',
    a: 'We respond within one business day, scope your project, and give you a fixed quote. If we are a fit, we start building immediately.',
    accent: '#EA580C',
  },
]

function SpectrumDivider({ opacity = 0.35 }: { opacity?: number }) {
  return <div style={{ height: '1px', background: SPECTRUM, opacity }} />
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
        style={{ minHeight: 'calc(100vh - 96px)', animation: 'heroReveal 0.7s ease-out forwards' }}
      >
        <WebGLShader />

        {/* Logo + headline + CTA — compact at top */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center" style={{ paddingTop: 'calc(24px + 20px)' }}>
          <img
            src="/PrizmaLogoLight3.png?v=3"
            alt="Prizma"
            className="block dark:hidden mb-4"
            style={{ width: 'min(400px, 80vw)', height: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/PrizmaLogoDark3.png?v=3"
            alt="Prizma"
            className="hidden dark:block mb-4"
            style={{ width: 'min(400px, 80vw)', height: 'auto', objectFit: 'contain' }}
          />
          <h1
            className="font-bold text-black dark:text-white leading-tight tracking-tight mb-2"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.4rem)', maxWidth: '720px' }}
          >
            Enterprise Software. Without the wait.
          </h1>
          <div style={{ height: '1.5px', width: '48px', background: SPECTRUM, borderRadius: '1px', marginBottom: '14px' }} />
          <p className="text-base font-medium text-[#444444] dark:text-[#bbbbbb] max-w-lg mb-5">
            Custom AI platforms for enterprises and growing companies, shipped fast at a fixed price.
          </p>
          <Link href="/contact">
            <button className="prizma-btn bg-[#7C3AED] text-white text-sm font-bold px-7 py-2.5 rounded-full hover:bg-[#6D28D9] cursor-pointer">
              Tell us what you need
            </button>
          </Link>
        </div>
      </section>

      <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

        {/* Spectrum bar entering the content */}
        <div style={{ height: '2px', background: SPECTRUM }} />

        {/* Stats */}
        <div className="border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.number} className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-bold text-black dark:text-white tabular-nums">{s.number}</span>
                <span className="text-xs font-medium text-[#555555] dark:text-[#999999] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <SpectrumDivider />

        {/* What we do */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-16">
            <SectionLabel>What we do</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeDo.map((s) => (
                <div
                  key={s.title}
                  className="prizma-card p-6 hover:-translate-y-1 transition-all duration-300"
                  style={{
                    borderLeft: `2px solid ${s.accent}`,
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

        <SpectrumDivider />

        {/* How it works */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-16">
            <SectionLabel>How it works</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.num}>
                  <p
                    className="font-bold leading-none mb-5"
                    style={{ fontSize: '5rem', color: s.color, opacity: 0.6 }}
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

        <SpectrumDivider />

        {/* What we build */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-16">
            <SectionLabel>What we build</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeBuild.map((s) => (
                <div
                  key={s.title}
                  className="prizma-card p-6 hover:-translate-y-1 transition-all duration-300"
                  style={{
                    borderLeft: `2px solid ${s.accent}`,
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

        <SpectrumDivider />

        {/* About */}
        <div className="relative overflow-hidden">
          <RotatingPrism />
          <FadeIn>
            <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
              <SectionLabel>About Prizma</SectionLabel>
              <p className="text-xl text-[#333333] dark:text-[#cccccc] leading-relaxed max-w-2xl">
                Prizma was built on a simple idea: great software should be fast to build and honest to price. We use AI to ship enterprise platforms in weeks, with a fixed quote upfront. Founded by Zack Baum.
              </p>
            </section>
          </FadeIn>
        </div>

        <SpectrumDivider />

        {/* FAQ */}
        <FadeIn>
          <section className="max-w-5xl mx-auto px-6 py-16">
            <SectionLabel>FAQ</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {faqs.map((faq) => (
                <div key={faq.q} className="pl-4" style={{ borderLeft: `2px solid ${faq.accent}` }}>
                  <h3 className="text-base font-bold text-black dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#444444] dark:text-[#aaaaaa] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <div>
          <div style={{ height: '2px', background: SPECTRUM }} />
          <FadeIn>
            <section className="max-w-5xl mx-auto px-6 py-20">
              <h2
                className="font-bold text-black dark:text-white leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
              >
                Ready to move faster?
              </h2>
              <p className="text-base text-[#444444] dark:text-[#aaaaaa] max-w-sm leading-relaxed mb-8">
                Tell us what you're trying to build. We'll tell you if we can help.
              </p>
              <Link href="/contact">
                <button className="prizma-btn bg-[#7C3AED] text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-[#6D28D9] cursor-pointer">
                  Get in touch
                </button>
              </Link>
            </section>
          </FadeIn>
        </div>

      </div>
    </>
  )
}
