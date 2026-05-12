'use client'

import { useState } from 'react'

const TOPICS = ['Strategy', 'Build', 'Train', 'Other']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      topic,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!submitted && <section className="max-w-5xl mx-auto px-6 pt-28 pb-8">
        <p className="text-sm font-bold tracking-widest uppercase text-[#555555] dark:text-[#999999] mb-6">
          Contact
        </p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight max-w-xl text-black dark:text-white">
          Let's figure out what's possible.
        </h1>
        <p className="mt-6 text-lg font-normal text-[#333333] dark:text-[#cccccc] max-w-md leading-relaxed">
          Tell us a bit about what you're working on. We respond within one business day.
        </p>
        <p className="mt-4 text-base font-normal text-[#333333] dark:text-[#cccccc] max-w-lg leading-relaxed">
          We build custom AI platforms in days, not months, for a fraction of the cost. Tell us what you need and we'll tell you how fast we can build it.
        </p>
      </section>}

      {!submitted && <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>}

      <section className={`max-w-5xl mx-auto px-6 ${submitted ? 'pt-28 pb-10' : 'py-10'}`}>
        {submitted ? (
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Got it.</h2>
            <p className="text-base font-normal text-[#333333] dark:text-[#cccccc] leading-relaxed">
              Thanks for reaching out. We'll be in touch within one business day.
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="max-w-lg space-y-7">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-[#333333] dark:text-[#cccccc]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="border border-black/15 dark:border-white/15 px-4 py-3 text-sm font-normal text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-black dark:focus:border-white transition-colors bg-white dark:bg-[#0a0a0a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-[#333333] dark:text-[#cccccc]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className="border border-black/15 dark:border-white/15 px-4 py-3 text-sm font-normal text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-black dark:focus:border-white transition-colors bg-white dark:bg-[#0a0a0a]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="topic-group" className="text-xs font-bold tracking-widest uppercase text-[#333333] dark:text-[#cccccc]">
                  Topic
                </label>
                <div id="topic-group" role="group" aria-labelledby="topic-group" className="flex gap-2 flex-wrap">
                  {TOPICS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      aria-pressed={topic === t}
                      className={`min-h-[44px] px-5 text-sm font-bold border transition-colors ${
                        topic === t
                          ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                          : 'bg-white dark:bg-[#0a0a0a] text-[#333333] dark:text-[#cccccc] border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-[#333333] dark:text-[#cccccc]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you trying to build or solve?"
                  className="border border-black/15 dark:border-white/15 px-4 py-3 text-sm font-normal text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none bg-white dark:bg-[#0a0a0a]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-6 py-3 hover:bg-black/80 dark:hover:bg-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Let\'s talk.'}
                </button>
                {error && (
                  <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
                )}
                <p className="mt-4 text-xs font-normal text-[#555555] dark:text-[#999999] leading-relaxed max-w-sm">
                  We read every message ourselves and reply within one business day. No spam, no sales calls unless you want one.
                </p>
              </div>
            </form>

            <p className="mt-10 text-sm font-normal text-[#333333] dark:text-[#cccccc]">
              Prefer email?{' '}
              <a
                href="mailto:hello@prizmatech.co"
                className="font-bold text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                hello@prizmatech.co
              </a>
            </p>
          </>
        )}
      </section>
    </>
  )
}
