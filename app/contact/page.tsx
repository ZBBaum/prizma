'use client'

import { useState } from 'react'

const TOPICS = ['Strategy', 'Build', 'Train', 'Other']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [topic, setTopic] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm font-bold tracking-widest uppercase text-black/40 mb-6">
          Contact
        </p>
        <h1 className="text-5xl font-black leading-tight tracking-tight max-w-xl text-black">
          Let's figure out what's possible.
        </h1>
        <p className="mt-6 text-lg font-semibold text-black/50 max-w-md leading-relaxed">
          Tell us a bit about what you're working on. We respond within one business day.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10" />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-20">
        {submitted ? (
          <div className="max-w-md">
            <h2 className="text-3xl font-black mb-4 text-black">Got it.</h2>
            <p className="text-base font-semibold text-black/50 leading-relaxed">
              Thanks for reaching out. We'll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black/40">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="border border-black/15 px-4 py-3 text-sm font-semibold text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black/40">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="border border-black/15 px-4 py-3 text-sm font-semibold text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase text-black/40">
                Topic
              </label>
              <div className="flex gap-2 flex-wrap">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`px-4 py-2 text-sm font-bold border transition-colors ${
                      topic === t
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black/15 hover:border-black'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase text-black/40">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="What are you trying to build or solve?"
                className="border border-black/15 px-4 py-3 text-sm font-semibold text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors resize-none bg-white"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white text-sm font-bold px-6 py-3 hover:bg-black/80 transition-colors"
            >
              Send message
            </button>
          </form>
        )}
      </section>
    </>
  )
}
