import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import SpiderWeb from '../components/SpiderWeb.jsx';

/* ---------------- DATA ---------------- */

const STATS = [
  { n: '2020',   l: 'Founded' },
  { n: '50+',    l: 'Projects shipped' },
  { n: '2-4 wk', l: 'Time to launch' },
  { n: '4.0/5',  l: 'Avg. client rating' },
];

const TIMELINE = [
  { y: '2020', t: 'Founded in lockdown', d: 'Started as a two-person team helping local businesses get online during the pandemic. First client was a Pune-based CA firm.' },
  { y: '2021', t: 'First AI experiments', d: 'Built our first WhatsApp bot for a dental clinic in Bengaluru. It answered missed calls and booked appointments — 400+ bookings in month one.' },
  { y: '2022', t: 'Expanded to Mumbai and Delhi', d: 'Grew to a 6-person senior team. Started handling full-stack digital operations for D2C brands and manufacturers.' },
  { y: '2023', t: 'Retained operations model', d: 'Launched our retained digital operations offering — a senior team for the whole stack, not one-off projects.' },
  { y: '2024', t: '50+ projects, 14 cities', d: 'Crossed 50 delivered projects across 14 Indian cities. Now serving D2C, healthcare, manufacturing and professional services.' },
];

const TEAM = [
  { role: 'Founder & Principal Engineer', d: 'Leads architecture, backend systems and client technical strategy. 10+ years building production systems.' },
  { role: 'Lead Designer',                d: 'Owns interface design, brand systems and conversion design. Every pixel tested against real users.' },
  { role: 'Growth & SEO Lead',            d: 'Handles SEO, paid ads and analytics. Obsessed with leads and revenue — not impressions.' },
  { role: 'AI & Automation Engineer',     d: 'Builds voice agents, workflow automations and CRM integrations for Indian SMBs.' },
];

const VALUES = [
  { t: 'Revenue obsessed',      d: 'We measure success in booked jobs and revenue, not impressions, clicks or awards.' },
  { t: 'Senior team only',      d: 'You talk directly to the people doing the work. No layers, no handoffs, no jargon.' },
  { t: 'Move fast, ship clean', d: 'Lean process, weekly iteration. We launch in weeks and optimize forever.' },
  { t: 'Straight talk',         d: 'We tell you what will work, what will not, and what we would do in your position.' },
];

const OFFICES = [
  { city: 'Bengaluru', role: 'Strategy & Growth',    desc: 'Client strategy, product direction and growth planning.' },
  { city: 'Mumbai',    role: 'Client Delivery',      desc: 'Project delivery, design reviews and brand work.' },
  { city: 'Delhi NCR', role: 'Sales & Partnerships', desc: 'New business, partnerships and enterprise accounts.' },
  { city: 'Pune',      role: 'Engineering Hub',      desc: 'Backend systems, web apps and integration work.' },
  { city: 'Hyderabad', role: 'AI & Automation',      desc: 'Voice agents, workflow automation and CRM integrations.' },
  { city: 'Chennai',   role: 'Support & Ops',        desc: 'Ongoing support, monitoring and IST-hours response.' },
];

const PROCESS = [
  { n: '01', t: 'Discover & strategize', d: 'We dig into your business, customers and competitors to build a plan focused on revenue, not vanity metrics.' },
  { n: '02', t: 'Design & build',         d: 'Senior designers and developers create a fast, conversion-focused site or system, built right the first time.' },
  { n: '03', t: 'Launch & optimize',      d: 'We ship in weeks, not months, then track real data to refine messaging, design and performance.' },
  { n: '04', t: 'Grow & scale',           d: 'Once the foundation works, we double down on what is driving results and scale it across channels.' },
];

const COMPARISON = [
  { k: 'Who does the work',  v1: 'The senior team on your kickoff call',  v2: 'Juniors behind an account manager' },
  { k: 'Pricing',            v1: 'Fixed scope, agreed in writing upfront', v2: 'Open-ended retainers and surprise invoices' },
  { k: 'What gets reported', v1: 'Calls, bookings and revenue',            v2: 'Impressions, clicks and vanity dashboards' },
  { k: 'Time to launch',     v1: '2-4 weeks',                              v2: 'A quarter of discovery theater' },
  { k: 'Getting answers',    v1: 'Direct line to the people building',     v2: 'Ticket queues and message relays' },
  { k: 'After launch',       v1: 'Ongoing support on IST hours',           v2: 'A new invoice for every change' },
];

const FAQ = [
  { q: 'Do you work with businesses outside metros?',   a: 'Yes. We work with clients across Bengaluru, Mumbai, Delhi NCR, Pune, Hyderabad, Chennai and 8 other Indian cities. All communication runs on WhatsApp and Zoom, so location is not a barrier. We do in-person working sessions for clients in our three primary cities.' },
  { q: 'What is your minimum project size?',            a: 'Website projects typically start around ₹75,000. Retained digital operations engagements start around ₹40,000 per month. For smaller scope work, we can sometimes recommend trusted freelancers from our network.' },
  { q: 'Do you sign NDAs and GST-compliant contracts?', a: 'Yes. We are GST registered and can sign both NDAs and formal contracts with standard terms. Invoices are fully GST-compliant for input credit.' },
  { q: 'How do payments work?',                          a: 'Milestone-based payments via UPI, Razorpay, net-banking or NEFT. Typically 40% to start, 40% at design approval, 20% at launch. Retained engagements are billed monthly in advance.' },
  { q: 'Do you offer ongoing support after launch?',     a: 'Yes. Every project includes 30 days of post-launch support at no cost. After that, clients can move onto a retained support plan or pay per request. Response time on IST hours is under 1 hour for retained clients.' },
  { q: 'Can you take over an existing project or codebase?', a: 'Often yes. We start with a technical audit (usually 3-5 hours of work) and give you an honest assessment of what is salvageable, what needs rebuilding and what the total cost of ownership looks like.' },
];

/* ---------------- PAGE ---------------- */

export default function About() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <SpiderWeb className="absolute -top-20 -right-32 w-[560px] h-[560px] object-contain animate-float-slow" opacity={0.12} />
        <SpiderWeb className="absolute -bottom-32 -left-32 w-[480px] h-[480px] object-contain rotate-180 animate-spin-slow" opacity={0.08} flip />

        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(closest-side, rgba(225,29,46,0.28), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute top-32 -left-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.18), transparent)' }} />

        <div className="container-x relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-4">About</p>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="h1 max-w-[22ch]">
                  A small, senior team.<br />
                  <span className="text-brand">No account managers.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="lede mt-7 max-w-2xl">
                  Ethixweb is a digital operations team built for Indian businesses that want
                  measurable growth, not marketing noise. Founded in 2020, we have shipped 50+
                  projects across D2C, healthcare, manufacturing and professional services.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  <span className="chip-india"><span aria-hidden>🇮🇳</span> Proudly Made in India</span>
                  <span className="chip-india">GST registered</span>
                  <span className="chip-india">MSME / Udyam</span>
                  <span className="chip-india">Startup India</span>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Start a project <span aria-hidden>→</span>
                  </Link>
                  <a href="https://wa.me/919876543210" className="btn-ghost">
                    WhatsApp us
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — visual composition */}
            <Reveal delay={200} className="lg:col-span-5">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="container-x pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 50}>
              <div className="rounded-2xl bg-ink/[0.03] dark:bg-white/[0.04] p-6 lg:p-7 h-full transition-all duration-300 hover:bg-ink/[0.05] dark:hover:bg-white/[0.06] hover:-translate-y-0.5">
                <div className="text-3xl sm:text-4xl font-semibold text-brand tabular-nums tracking-[-0.03em]">
                  {s.n}
                </div>
                <div className="text-[13px] font-semibold mt-2">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Our Story</p>
            <h2 className="h2 max-w-[16ch]">Tired of watching good businesses get bad work.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <div className="space-y-5 lede">
              <p>
                We started Ethixweb because we were tired of watching good businesses get
                mediocre results from agencies that overpromise and underdeliver. Small business
                owners were paying retainers for months and getting nothing but reports nobody
                could read.
              </p>
              <p>
                So we built the opposite. A tight-knit team of developers, designers and
                strategists — each senior in their craft. When you work with Ethixweb, you work
                directly with the people building your project.
              </p>
              <p>
                No account managers passing messages. No juniors learning on your budget. No
                jargon-filled decks pretending progress. Just work that ships and results you
                can point to.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="relative bg-dark-section text-white py-24 overflow-hidden rounded-[32px] mx-4 lg:mx-8">
        <SpiderWeb className="absolute -top-32 -right-32 w-[520px] h-[520px] object-contain animate-spin-slow" opacity={0.14} />
        <SpiderWeb className="absolute -bottom-40 -left-32 w-[460px] h-[460px] object-contain rotate-180" opacity={0.08} />

        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-25"
             style={{ background: 'radial-gradient(closest-side, rgba(225,29,46,0.55), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 -left-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-20"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.4), transparent)' }} />
        <div aria-hidden className="absolute top-0 left-0 right-0 tricolor-top rounded-t-[32px]" />

        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow mb-5 !text-brand">Milestones</p>
            <h2 className="h2 max-w-[22ch] text-white mb-14">Five years of building for Indian businesses.</h2>
          </Reveal>

          <div className="space-y-4">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.y} delay={i * 60}>
                <div className="grid sm:grid-cols-12 gap-4 sm:gap-8 py-6 border-t border-white/10 first:border-t-0">
                  <div className="sm:col-span-2">
                    <div className="text-brand font-bold text-2xl tabular-nums tracking-[-0.02em]">
                      {item.y}
                    </div>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-semibold text-lg mb-1.5">{item.t}</h3>
                    <p className="text-sm text-white/60 leading-relaxed max-w-2xl">{item.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MISSION + VISION ---------- */}
      <section className="container-x py-24">
        <Reveal>
          <p className="eyebrow mb-5">Mission and Vision</p>
          <h2 className="h2 mb-12 max-w-3xl">What drives us.</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          <Reveal>
            <div className="card-hover h-full">
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="h3 mb-3">Our mission</h3>
              <p className="text-muted leading-relaxed">
                Turn marketing spend into measurable revenue. Every project we take on is judged
                the same way: did it move the needle on bookings, leads and revenue? We build
                websites and systems that earn their place in your budget.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-hover h-full">
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="h3 mb-3">Our vision</h3>
              <p className="text-muted leading-relaxed">
                Be the senior team Indian businesses call first. We are building Ethixweb into the
                go-to growth partner for ambitious companies — known for senior craftsmanship,
                straight talk and results you can point to.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="bg-ink/[0.03] dark:bg-white/[0.02] py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5">The Team</p>
              <h2 className="h2 max-w-[20ch]">Senior operators, not layers of management.</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-16">
              <p className="lede">
                Small by design. Every project is staffed with people who have shipped before and
                will ship again.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map((t, i) => (
              <Reveal key={t.role} delay={i * 60}>
                <div className="card-hover h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand text-white flex items-center justify-center font-bold mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold mb-2 text-[15.5px]">{t.role}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="container-x py-24">
        <Reveal>
          <p className="eyebrow mb-5">How we work</p>
          <h2 className="h2 mb-4 max-w-3xl">A clear process. Zero guesswork.</h2>
          <p className="lede mb-12 max-w-2xl">
            From the first call to launch day, you will always know what is happening, why and
            what comes next. No black boxes, no surprise invoices.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <div className="card-hover h-full">
                <div className="flex items-baseline justify-between mb-5">
                  <div className="text-brand font-bold text-2xl tabular-nums">{p.n}</div>
                  {i < PROCESS.length - 1 && (
                    <span aria-hidden className="text-ink/20 text-lg hidden lg:inline">→</span>
                  )}
                </div>
                <h3 className="font-semibold mb-2">{p.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="container-x pb-24">
        <Reveal>
          <p className="eyebrow mb-5">What we stand for</p>
          <h2 className="h2 mb-12 max-w-3xl">Values that shape everything we build.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 60}>
              <div className="card-hover h-full flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5 text-[15.5px]">{v.t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- OFFICES ---------- */}
      <section className="relative bg-dark-section text-white py-24 overflow-hidden rounded-[32px] mx-4 lg:mx-8">
        <SpiderWeb className="absolute -top-40 left-0 w-[540px] h-[540px] object-contain animate-spin-slow" opacity={0.12} />
        <SpiderWeb className="absolute -bottom-32 -right-32 w-[460px] h-[460px] object-contain rotate-180" opacity={0.08} />

        <div aria-hidden className="pointer-events-none absolute -top-40 left-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-25"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.45), transparent)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 -right-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-25"
             style={{ background: 'radial-gradient(closest-side, rgba(19,136,8,0.4), transparent)' }} />
        <div aria-hidden className="absolute top-0 left-0 right-0 tricolor-top rounded-t-[32px]" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5 !text-brand">Where We Work</p>
              <h2 className="h2 max-w-[22ch] text-white">Six cities. One operations layer.</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-16">
              <p className="text-white/70 leading-relaxed">
                Distributed by design. Each city is a specialty — so projects get the right
                senior hands regardless of where you are based.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 50}>
                <div className="group bg-white/[0.04] rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-lg">{o.city}</div>
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                      </span>
                      Active
                    </span>
                  </div>
                  <div className="text-[13px] font-medium text-white/80 mb-2">{o.role}</div>
                  <p className="text-xs text-white/50 leading-relaxed mb-4">{o.desc}</p>
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
        </div>
      </section>

      {/* ---------- COMPARISON ---------- */}
      <section className="container-x py-24">
        <Reveal>
          <p className="eyebrow mb-5">The difference</p>
          <h2 className="h2 mb-12 max-w-3xl">Ethixweb vs. the typical agency.</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-4xl overflow-x-auto rounded-2xl border border-ink/[0.08] bg-surface">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="bg-ink/[0.03] border-b border-ink/[0.06]">
                  <th className="text-left p-4 font-semibold text-ink/50 text-xs uppercase tracking-widest w-[28%]">
                    &nbsp;
                  </th>
                  <th className="text-left p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span className="font-semibold text-brand">Ethixweb</span>
                    </span>
                  </th>
                  <th className="text-left p-4 font-semibold text-ink/50">Typical agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/[0.06]">
                {COMPARISON.map((r) => (
                  <tr key={r.k}>
                    <td className="p-4 font-medium text-ink/60">{r.k}</td>
                    <td className="p-4 font-medium text-brand">{r.v1}</td>
                    <td className="p-4 text-muted">{r.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-ink/[0.03] dark:bg-white/[0.02] py-24 relative overflow-hidden">
        <SpiderWeb className="absolute -top-40 -left-40 w-[480px] h-[480px] object-contain animate-spin-slow" opacity={0.08} />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="h2 max-w-[20ch]">Things Indian founders ask us.</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-16">
              <p className="lede">
                Straight answers. If yours is not here, ask on WhatsApp — we reply within the hour.
              </p>
            </Reveal>
          </div>

          <div className="max-w-3xl">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 40}>
                <details className="group border-b border-ink/[0.08] py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="font-semibold text-[15.5px] pr-4">{item.q}</span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-sm text-muted leading-relaxed mt-3 pr-11">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="container-x py-24">
        <Reveal>
          <div className="relative overflow-hidden bg-brand text-white rounded-[28px] p-12 lg:p-20 text-center">
            <SpiderWeb className="absolute -top-32 -right-32 w-[500px] h-[500px] object-contain animate-spin-slow" opacity={0.18} />

            <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
                 style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.4), transparent)' }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
                 style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.4), transparent)' }} />

            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-[-0.03em] leading-[1.05]">
                Ready for a sharper digital operation?
              </h2>
              <p className="mt-5 text-white/85 max-w-xl mx-auto text-[1.0625rem] leading-relaxed">
                Bring us the messy stack, missed leads, slow site or stalled automation. We will
                turn it into a system.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-light">
                  Get in touch <span aria-hidden>→</span>
                </Link>
                <a href="https://wa.me/919876543210" className="btn-outline-light">
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------------- HERO VISUAL ---------------- */

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[460px] aspect-square lg:aspect-[4/5]">
      {/* Background gradient card */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand via-brand-dark to-ink overflow-hidden">
        <div aria-hidden className="absolute -top-24 -right-16 w-[360px] h-[360px] rounded-full blur-3xl opacity-50"
             style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.5), transparent)' }} />
        <div aria-hidden className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(closest-side, rgba(255,153,51,0.6), transparent)' }} />

        {/* India map outline */}
        <svg
          aria-hidden
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full opacity-10 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M180 60 C210 50 250 70 270 100 C290 130 300 170 290 210 C285 240 270 260 265 290 C260 320 270 350 260 380 C250 410 220 440 200 460 C185 470 175 470 160 460 C135 445 115 415 105 385 C95 355 100 320 110 290 C120 260 135 240 140 210 C145 175 155 130 165 95 C170 80 175 65 180 60 Z" />
        </svg>

        {/* Grid pattern subtle */}
        <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.08]">
          <defs>
            <pattern id="heroGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* Top badge */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-[11px] font-medium text-white">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            Since 2020
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
            Ethixweb India
          </div>
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
          <div className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/70 mb-3">
            Our Operating Model
          </div>
          <div className="text-3xl font-semibold tracking-[-0.02em] leading-tight mb-3">
            Senior team.
            <br />
            <span className="text-white/80">No handoffs.</span>
          </div>
          <div className="w-12 h-px bg-white/40 my-4" />
          <div className="text-sm text-white/80 max-w-[240px] leading-relaxed">
            The people on your kickoff call are the ones building your project.
          </div>
        </div>

        {/* Bottom row — floating stat chips */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
          <div className="flex-1 rounded-xl bg-white/12 backdrop-blur-md border border-white/20 px-3 py-2.5">
            <div className="text-white font-semibold text-base tabular-nums leading-none">50+</div>
            <div className="text-[10px] text-white/70 mt-1 uppercase tracking-widest">Projects</div>
          </div>
          <div className="flex-1 rounded-xl bg-white/12 backdrop-blur-md border border-white/20 px-3 py-2.5">
            <div className="text-white font-semibold text-base tabular-nums leading-none">14</div>
            <div className="text-[10px] text-white/70 mt-1 uppercase tracking-widest">Cities</div>
          </div>
          <div className="flex-1 rounded-xl bg-white/12 backdrop-blur-md border border-white/20 px-3 py-2.5">
            <div className="text-white font-semibold text-base tabular-nums leading-none">4.0</div>
            <div className="text-[10px] text-white/70 mt-1 uppercase tracking-widest">Rating</div>
          </div>
        </div>
      </div>

      {/* Floating external cards */}
      <div className="hidden lg:block absolute -left-8 top-16 rotate-[-4deg] animate-float-slow">
        <div className="rounded-2xl bg-surface border border-ink/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium">IST 10:00–19:00</span>
          </div>
          <div className="text-[10px] text-muted mt-1">Mon–Sat support</div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-6 bottom-24 rotate-[3deg] animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <div className="rounded-2xl bg-surface border border-ink/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] px-4 py-3">
          <div className="text-[10px] uppercase tracking-widest text-muted">GST + MSME</div>
          <div className="text-xs font-semibold mt-0.5">Registered in India</div>
        </div>
      </div>

      {/* Tricolor accent */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 tricolor-top w-24 h-1 rounded-full" />
    </div>
  );
}