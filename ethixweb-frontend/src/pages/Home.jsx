import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import SpiderWeb from '../components/SpiderWeb.jsx';

const SOLUTIONS = [
  { icon: 'phone',   t: 'AI Receptionists',      d: 'Voice and chat agents that answer, qualify, route and book leads while your team stays focused.' },
  { icon: 'spark',   t: 'AI Automation',         d: 'Workflow automation, internal copilots, data syncs and operational systems built for real teams.' },
  { icon: 'globe',   t: 'Websites',              d: 'Fast, premium websites with sharp positioning, conversion paths, analytics and SEO foundations.' },
  { icon: 'grid',    t: 'Web Applications',      d: 'Custom portals, dashboards, booking flows and software tools engineered for daily operations.' },
  { icon: 'plug',    t: 'CRM Integrations',      d: 'HubSpot, Zoho, Zapier, forms, calls, calendars and pipelines connected into one system.' },
  { icon: 'search',  t: 'SEO',                   d: 'Technical SEO, local SEO, content systems and measurement that compound into durable demand.' },
  { icon: 'shield',  t: 'Maintenance & Support', d: 'Fast fixes, uptime care, site updates, reporting and a responsive team when something needs attention.' },
  { icon: 'layers',  t: 'Digital Operations',    d: 'A senior tech team for your digital stack, from strategy through launch, support and optimization.' },
];

const CITIES = [
  { name: 'Bengaluru', role: 'Strategy & Growth' },
  { name: 'Mumbai',    role: 'Client Delivery' },
  { name: 'Delhi NCR', role: 'Sales & Partnerships' },
  { name: 'Pune',      role: 'Engineering Hub' },
  { name: 'Hyderabad', role: 'AI & Automation' },
  { name: 'Chennai',   role: 'Support & Ops' },
];

const STATS = [
  { n: '50+',   l: 'Projects Delivered',  d: 'Live websites, apps and automations for Indian businesses.' },
  { n: '<1h',   l: 'Avg. Response Time',  d: 'Real replies within the hour, IST business days.' },
  { n: '14',    l: 'Cities Served',       d: 'From metros to tier-2 and tier-3 markets across India.' },
  { n: '₹5Cr+', l: 'Client GMV Tracked',  d: 'Revenue we help track and grow for our clients.' },
];

const OPERATING = [
  { t: 'Trustworthy systems', d: 'Clean architecture, secure defaults and reliable handoff across your stack.' },
  { t: 'Layered execution',   d: 'Strategy, design, development, automation, launch and support under one roof.' },
  { t: 'Growth connected',    d: 'SEO, ads, analytics, forms, calls and CRM data aligned around revenue.' },
];

const WHY = [
  { t: '2-4 weeks to launch',          d: 'Typical time to launch, not a quarter of discovery theater.' },
  { t: '100% senior-led delivery',     d: 'You talk directly to the people doing the work. No layers, no handoffs.' },
  { t: 'Transparent INR pricing',      d: 'Fixed scope, agreed in writing upfront. No open-ended retainers.' },
  { t: 'Decisions backed by data',     d: 'We measure calls, bookings and revenue, not impressions or clicks.' },
  { t: 'Ongoing support after launch', d: 'Fast turnarounds without cutting corners. Support on IST hours.' },
  { t: 'India-focused communication',  d: 'Bengaluru, Mumbai, Delhi NCR. WhatsApp-first, Hinglish-friendly.' },
];

const REVIEWS = [
  { quote: 'We had a website that loaded in 8 seconds and still no leads. Ethixweb rebuilt it mobile-first, and our enquiries tripled within two months.', name: 'Rohan Mehta',    role: 'Founder, Textile Manufacturing · Surat' },
  { quote: 'The AI receptionist handles all our missed calls and books appointments automatically. It has paid for itself in the first week.',              name: 'Priya Krishnan', role: 'Director, Dental Clinic Chain · Bengaluru' },
  { quote: 'Working with an Indian team on IST was a relief. No midnight calls, no timezone delays. They ship fast and they actually answer when you call.', name: 'Arjun Patel',    role: 'CMO, D2C Skincare Brand · Mumbai' },
];

const CITY_MARQUEE = ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Kolkata', 'Surat', 'Jaipur', 'Kochi', 'Indore'];
const SERVICE_MARQUEE = ['AI agents', 'CRM', 'Websites', 'SEO', 'Ads', 'Analytics', 'Automations', 'Support', 'WhatsApp', 'UPI-ready'];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <SpiderWeb className="absolute -top-20 -right-32 w-[600px] h-[600px] object-contain animate-float-slow" opacity={0.15} />
        <SpiderWeb className="absolute -bottom-24 -left-32 w-[500px] h-[500px] object-contain rotate-180 animate-float-slow" opacity={0.10} flip />

        <div aria-hidden className="pointer-events-none absolute -top-48 -right-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-50"
             style={{ background: 'radial-gradient(closest-side, rgba(225,29,46,0.32), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute top-24 -left-48 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.18), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(closest-side, rgba(19,136,8,0.15), transparent)' }} />

        <div className="container-x relative pt-16 pb-24 lg:pt-24 lg:pb-32">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className="chip-india">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                </span>
                Accepting new projects · IST business days
              </span>
              <span className="chip-india">
                <span aria-hidden>🇮🇳</span>
                Proudly Made in India
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="h1 max-w-[18ch]">
              We run the tech.<br />
              <span className="text-brand">You run the business.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="lede mt-7 max-w-2xl text-[1.0625rem]">
              India-first digital operations team. From AI booking agents and CRM integrations to
              websites, SEO and ads — we handle the stack so you can focus on growing your
              business.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Start a project <span aria-hidden>→</span>
              </Link>
              <a href="https://wa.me/919876543210" className="btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.67a11.85 11.85 0 0 0 5.68 1.45h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.39-8.45ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.83 9.83 0 0 1-1.51-5.29c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.84 9.87Z"/>
                </svg>
                WhatsApp us
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-14 marquee-mask overflow-hidden">
              <div className="flex gap-2.5 w-max animate-marquee">
                {[...CITY_MARQUEE, ...CITY_MARQUEE].map((t, i) => (
                  <span key={i} className="tag-city">
                    <span className="w-1 h-1 rounded-full bg-brand" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-3 marquee-mask overflow-hidden">
              <div className="flex gap-2.5 w-max animate-marquee-reverse">
                {[...SERVICE_MARQUEE, ...SERVICE_MARQUEE].map((t, i) => (
                  <span key={i} className="text-xs font-medium bg-surface border border-ink/[0.08] px-3.5 py-2 rounded-full text-ink/70 whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 50}>
              <div className="rounded-2xl bg-ink/[0.03] dark:bg-white/[0.04] p-6 lg:p-7 h-full transition-all duration-300 hover:bg-ink/[0.05] dark:hover:bg-white/[0.06] hover:-translate-y-0.5">
                <div className="text-3xl sm:text-4xl font-semibold text-brand tabular-nums tracking-[-0.03em]">
                  {s.n}
                </div>
                <div className="text-[13px] font-semibold mt-2">{s.l}</div>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-5">Robust Solutions</p>
            <h2 className="h2 max-w-[22ch]">Senior operators for the systems that grow the business.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:pt-16">
            <p className="lede">Eight services, one team. Pick what you need — or let us run the whole stack.</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.t} delay={i * 40}>
              <div className="card-hover h-full group">
                <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} />
                </div>
                <h3 className="font-semibold mb-2 text-[15.5px]">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative bg-dark-section text-white py-24 overflow-hidden rounded-[32px] mx-4 lg:mx-8">
        <SpiderWeb className="absolute -top-32 -right-32 w-[560px] h-[560px] object-contain animate-spin-slow" opacity={0.15} />
        <SpiderWeb className="absolute -bottom-40 -left-32 w-[480px] h-[480px] object-contain rotate-180" opacity={0.10} />

        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(closest-side, rgba(225,29,46,0.55), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 -left-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-25"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.4), transparent)' }} />

        <div aria-hidden className="absolute top-0 left-0 right-0 tricolor-top rounded-t-[32px]" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5 !text-brand">India Operations Network</p>
              <h2 className="h2 max-w-[22ch] text-white">Built for fast-moving Indian teams.</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-16">
              <p className="text-white/70 leading-relaxed">
                Bengaluru, Mumbai, Delhi NCR, Pune, Hyderabad and Chennai stay connected through
                one responsive digital operations layer.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 50}>
                <div className="group bg-white/[0.04] rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-lg">{c.name}</div>
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                      </span>
                      Active
                    </span>
                  </div>
                  <div className="text-sm text-white/70 mb-3">{c.role}</div>
                  <div className="text-xs text-white/40 tabular-nums">
                    {new Date().toLocaleTimeString('en-IN', {
                      timeZone: 'Asia/Kolkata',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}{' '}
                    IST
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Reveal>
              <p className="eyebrow mb-5 !text-brand">Operating Model</p>
              <h2 className="h2 max-w-[28ch] text-white mb-12">Built like an internal technology team.</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
              {OPERATING.map((m, i) => (
                <Reveal key={m.t} delay={i * 80}>
                  <div className="bg-white/[0.04] rounded-2xl p-6 h-full hover:bg-white/[0.08] transition-colors">
                    <h3 className="font-semibold mb-2">{m.t}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{m.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-5">Why Ethixweb</p>
            <h2 className="h2 max-w-[22ch]">Why Indian businesses choose us and stay.</h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 50}>
              <div className="card-hover h-full flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 text-[15.5px]">{w.t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{w.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap gap-2.5 items-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted mr-2">
              Recognitions
            </span>
            {['GST registered', 'MSME / Udyam', 'Startup India', 'Make in India 🇮🇳'].map((b) => (
              <span key={b} className="text-xs font-medium border border-ink/10 rounded-full px-3.5 py-1.5 text-ink/70 bg-surface">
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-ink/[0.03] dark:bg-white/[0.02] relative overflow-hidden">
        <SpiderWeb className="absolute -top-40 -left-40 w-[520px] h-[520px] object-contain animate-spin-slow" opacity={0.10} />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5">Client Reviews</p>
              <h2 className="h2 max-w-[20ch]">Trusted by businesses across India.</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-16">
              <p className="lede">
                Real feedback from clients who trusted Ethixweb to design, build and grow their
                digital presence.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <figure className="card-hover h-full bg-surface flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-brand text-sm">★</span>
                    ))}
                  </div>
                  <blockquote className="text-[15px] text-ink/85 leading-relaxed mb-6 flex-1">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="text-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-soft text-brand flex items-center justify-center font-bold text-xs">
                      {r.name.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold leading-tight">{r.name}</div>
                      <div className="text-xs text-muted">{r.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <Reveal>
          <div className="relative overflow-hidden bg-brand text-white rounded-[28px] p-12 lg:p-20 text-center">
            <SpiderWeb className="absolute -top-32 -right-32 w-[500px] h-[500px] object-contain animate-spin-slow" opacity={0.18} />

            <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
                 style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.4), transparent)' }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
                 style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.4), transparent)' }} />

            <div className="relative max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-white/90 mb-7">
                <span aria-hidden>🇮🇳</span>
                Trusted across India
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.05]">
                Want to work with us?
              </h2>
              <p className="mt-5 text-white/85 max-w-xl mx-auto text-[1.0625rem] leading-relaxed">
                Tired of being account #200 at a big agency? Work with a senior team that knows
                your business by name.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-light">
                  Get in touch <span aria-hidden>→</span>
                </Link>
                <a href="https://wa.me/919876543210" className="btn-outline-light">
                  WhatsApp us
                </a>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[13px] text-white/70">
                <span>✓ Free 15-min consultation</span>
                <span>✓ Response within 1 business day</span>
                <span>✓ No obligation</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Icon({ name }) {
  const common = {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  switch (name) {
    case 'phone':  return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>;
    case 'spark':  return <svg {...common}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>;
    case 'globe':  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>;
    case 'grid':   return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
    case 'plug':   return <svg {...common}><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0Z M12 18v4"/></svg>;
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'shield': return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>;
    case 'layers': return <svg {...common}><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>;
    default: return null;
  }
}