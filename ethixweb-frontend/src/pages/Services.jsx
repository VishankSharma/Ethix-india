import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const items = [
  { t: 'AI Receptionists',      d: 'Voice and chat agents that answer, qualify, route, and book leads while your team stays focused.', tags: ['Voice AI', 'WhatsApp', 'Booking'] },
  { t: 'AI Automation',         d: 'Workflow automation, internal copilots, data syncs, and operational systems built for real teams.', tags: ['Zapier', 'Make', 'Custom'] },
  { t: 'Websites',              d: 'Fast, premium websites with sharp positioning, conversion paths, analytics, and SEO foundations.', tags: ['React', 'WordPress', 'Headless CMS'] },
  { t: 'Web Applications',      d: 'Custom portals, dashboards, booking flows, and software tools engineered for daily operations.', tags: ['SaaS', 'Dashboards', 'Portals'] },
  { t: 'CRM Integrations',      d: 'HubSpot, GoHighLevel, Zapier, forms, calls, calendars, and pipelines connected into one system.', tags: ['HubSpot', 'Zoho', 'Pipelines'] },
  { t: 'SEO',                   d: 'Technical SEO, local SEO, content systems, and measurement that compound into durable demand.', tags: ['SEO', 'Local SEO', 'Analytics'] },
  { t: 'Maintenance & Support', d: 'Fast fixes, uptime care, site updates, reporting, and a responsive team when something needs attention.', tags: ['Monitoring', 'Updates', 'Support'] },
  { t: 'Digital Operations',    d: 'A senior tech team for your digital stack, from strategy through launch, support, and optimization.', tags: ['Strategy', 'Ops', 'Retained'] },
];

const steps = [
  { n: '01', t: 'Audit',   d: 'We tear down your current site, ads and tracking, and show you exactly where leads leak.' },
  { n: '02', t: 'Plan',    d: 'A prioritized roadmap with expected impact per item — you approve what we build, and why.' },
  { n: '03', t: 'Build',   d: 'Senior hands ship the site, campaigns and integrations in weeks, not quarters.' },
  { n: '04', t: 'Optimize', d: 'Weekly iteration on real data: calls, bookings and revenue — not vanity dashboards.' },
];

export default function Services() {
  return (
    <>
      <section className="container-x py-16 lg:py-24">
        <Reveal><p className="eyebrow mb-4">Services</p></Reveal>
        <Reveal delay={60}><h1 className="h1 max-w-3xl">Everything a business needs to grow.</h1></Reveal>
        <Reveal delay={120}>
          <p className="lede mt-6 max-w-2xl">
            Websites, AI agents, SEO, ads and tracking — handled by a senior team that actually answers the phone.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 50}>
              <article className="card-hover h-full">
                <h2 className="h3 mb-3">{i.t}</h2>
                <p className="text-muted leading-relaxed mb-5">{i.d}</p>
                <div className="flex flex-wrap gap-2">
                  {i.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-ink/5 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Engagement rhythm */}
      <section className="container-x pb-20 border-t border-ink/5 pt-20">
        <Reveal>
          <p className="eyebrow mb-4">How an engagement runs</p>
          <h2 className="h2 mb-4 max-w-3xl">Audit first. Build second. Optimize forever.</h2>
          <p className="lede mb-12 max-w-2xl">Every service plugs into the same four-beat operating rhythm, so you always know what happens next.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="card-hover h-full">
                <div className="text-brand font-bold text-2xl mb-3 tabular-nums">{s.n}</div>
                <h3 className="font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <Reveal>
          <div className="relative overflow-hidden bg-brand text-white rounded-3xl p-10 lg:p-16 text-center">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">One team for your whole growth system.</h2>
              <p className="mt-4 text-white/90 max-w-xl mx-auto">Stop stitching together freelancers and point tools. Tell us what growth looks like for you — we'll map the system that gets you there.</p>
              <Link to="/contact" className="btn-light mt-8">Get in touch <span aria-hidden>→</span></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}