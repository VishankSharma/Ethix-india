import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SpiderWeb from '../components/SpiderWeb.jsx';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const STEPS = [
  { n: '1', t: 'You share three details', d: 'Your name, your phone number and your website. Nothing else.' },
  { n: '2', t: 'We study your site',      d: 'How it ranks, how it loads and where it loses people — before we speak.' },
  { n: '3', t: 'We call you',             d: 'A short call to work out whether we are the right fit for each other.' },
];

const CONTACT_INFO = [
  { l: 'Email',   v: 'hello@ethixweb.com', href: 'mailto:hello@ethixweb.com' },
  { l: 'Phone',   v: '+91 98765 43210',     href: 'tel:+919876543210' },
  { l: 'WhatsApp', v: '+91 98765 43210',    href: 'https://wa.me/919876543210' },
  { l: 'Hours',   v: 'Mon–Sat, 10:00–19:00 IST' },
  { l: 'Offices', v: 'Bengaluru · Mumbai · Delhi NCR' },
];

const FAQ_QUICK = [
  { q: 'How fast do you respond?', a: 'Within 1 business hour on IST, Mon–Sat.' },
  { q: 'What is your minimum project?', a: 'Website projects start around ₹75,000.' },
  { q: 'Do you sign NDAs?', a: 'Yes. We are GST registered and can sign NDAs and formal contracts.' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: 'web', budget: 'unsure', message: '', website: '',
  });
  const [renderedAt] = useState(() => Date.now());
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrors({});
    try {
      const res = await fetch(`${API}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ...form, renderedAt }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.fields || {});
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: 'web', budget: 'unsure', message: '', website: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ---------- HERO + FORM ---------- */}
      <section className="relative overflow-hidden">
        <SpiderWeb className="absolute -top-24 -right-32 w-[560px] h-[560px] object-contain animate-float-slow" opacity={0.12} />
        <SpiderWeb className="absolute bottom-0 -left-32 w-[460px] h-[460px] object-contain rotate-180 animate-spin-slow" opacity={0.08} flip />

        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(closest-side, rgba(225,29,46,0.28), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute top-32 -left-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.18), transparent)' }} />

        <div className="container-x relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* LEFT — info */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-4">Contact</p>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="h1 max-w-[16ch]">
                  Let&rsquo;s get you more booked jobs.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="lede mt-6 max-w-md">
                  Three details is all we need to get started. We&rsquo;ll look at your website
                  and call you within one business day.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  <span className="chip-india"><span aria-hidden>🇮🇳</span> India-first team</span>
                  <span className="chip-india">Response &lt;1h IST</span>
                  <span className="chip-india">GST invoiced</span>
                </div>
              </Reveal>

              {/* 3-step process */}
              <div className="mt-12 space-y-6">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={220 + i * 60}>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                        {s.n}
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{s.t}</div>
                        <p className="text-sm text-muted leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Contact info */}
              <Reveal delay={420}>
                <div className="mt-12 pt-8 border-t border-ink/[0.08] space-y-3.5 text-sm">
                  {CONTACT_INFO.map((row) => (
                    <div key={row.l} className="flex gap-4 items-baseline">
                      <span className="w-20 shrink-0 font-semibold text-ink/70">{row.l}</span>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith('http') ? '_blank' : undefined}
                          rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted hover:text-brand transition-colors"
                        >
                          {row.v}
                        </a>
                      ) : (
                        <span className="text-muted">{row.v}</span>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={480}>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-brand font-semibold hover:underline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.67a11.85 11.85 0 0 0 5.68 1.45h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.39-8.45ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.83 9.83 0 0 1-1.51-5.29c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.84 9.87Z" />
                  </svg>
                  Chat on WhatsApp <span aria-hidden>→</span>
                </a>
              </Reveal>
            </div>

            {/* RIGHT — form */}
            <Reveal delay={120} className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] space-y-5 !p-7 lg:!p-9"
              >
                <div>
                  <h2 className="text-xl font-semibold">Tell us where to call you.</h2>
                  <p className="text-sm text-muted mt-1">Three details · about 20 seconds</p>
                </div>

                {status === 'success' && (
                  <div role="status" className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-sm rounded-xl p-4">
                    <strong className="block mb-0.5">Thanks!</strong>
                    We&rsquo;ve received your enquiry and will be in touch shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div role="alert" className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-800 dark:text-red-300 text-sm rounded-xl p-4">
                    Something went wrong. Please check the fields and try again.
                  </div>
                )}

                <div>
                  <label className="label" htmlFor="name">Name *</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    className="input"
                    autoComplete="name"
                    placeholder="Rahul Sharma"
                  />
                  {errors.name && <p className="text-xs text-brand mt-1.5">{errors.name[0]}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      className="input"
                      autoComplete="email"
                      placeholder="rahul@company.com"
                    />
                    {errors.email && <p className="text-xs text-brand mt-1.5">{errors.email[0]}</p>}
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="9876543210"
                      className="input"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    {errors.phone && <p className="text-xs text-brand mt-1.5">{errors.phone[0]}</p>}
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="company">Company / Website</label>
                  <input
                    id="company"
                    value={form.company}
                    onChange={update('company')}
                    className="input"
                    autoComplete="organization"
                    placeholder="yourcompany.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label" htmlFor="service">Service</label>
                    <select id="service" value={form.service} onChange={update('service')} className="input">
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Apps</option>
                      <option value="seo">SEO & Ads</option>
                      <option value="branding">Branding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label" htmlFor="budget">Budget</label>
                    <select id="budget" value={form.budget} onChange={update('budget')} className="input">
                      <option value="unsure">Not sure yet</option>
                      <option value="<50k">Under ₹50,000</option>
                      <option value="50k-1L">₹50,000 – ₹1,00,000</option>
                      <option value="1L-5L">₹1,00,000 – ₹5,00,000</option>
                      <option value="5L+">₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className="input resize-y"
                    placeholder="Tell us what's costing you jobs right now…"
                  />
                  {errors.message && <p className="text-xs text-brand mt-1.5">{errors.message[0]}</p>}
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  value={form.website}
                  onChange={update('website')}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>Send enquiry <span aria-hidden>→</span></>
                  )}
                </button>

                <p className="text-xs text-muted text-center">
                  One call. No drip sequence, no spam.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- QUICK FAQ ---------- */}
      <section className="bg-ink/[0.03] dark:bg-white/[0.02] py-20 relative overflow-hidden">
        <SpiderWeb className="absolute -top-32 -left-32 w-[420px] h-[420px] object-contain animate-spin-slow" opacity={0.08} />

        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow mb-5">Before you ask</p>
            <h2 className="h2 mb-10 max-w-2xl">Quick answers to common questions.</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
            {FAQ_QUICK.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="card-hover h-full">
                  <div className="text-[15.5px] font-semibold mb-2">{f.q}</div>
                  <p className="text-sm text-muted leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="container-x py-24">
        <Reveal>
          <div className="relative overflow-hidden bg-brand text-white rounded-[28px] p-12 lg:p-16 text-center">
            <SpiderWeb className="absolute -top-32 -right-32 w-[480px] h-[480px] object-contain animate-spin-slow" opacity={0.18} />

            <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full blur-3xl opacity-30"
                 style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.4), transparent)' }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[460px] h-[460px] rounded-full blur-3xl opacity-30"
                 style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.4), transparent)' }} />

            <div className="relative max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-white/90 mb-6">
                <span aria-hidden>🇮🇳</span>
                Trusted across India
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.08]">
                Prefer WhatsApp? We do too.
              </h2>
              <p className="mt-5 text-white/85 max-w-lg mx-auto text-[1.0625rem] leading-relaxed">
                Skip the form. Send us a message on WhatsApp and we&rsquo;ll reply within one
                business hour (IST).
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.67a11.85 11.85 0 0 0 5.68 1.45h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.39-8.45ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.83 9.83 0 0 1-1.51-5.29c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.84 9.87Z" />
                  </svg>
                  WhatsApp us
                </a>
                <a href="tel:+919876543210" className="btn-outline-light">
                  Call now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}