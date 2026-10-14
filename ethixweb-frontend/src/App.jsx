import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';
import Logo from './components/Logo.jsx';

const SERVICES = [
  { to: '/services', t: 'AI Receptionists',   d: 'Answer and book 24/7' },
  { to: '/services', t: 'AI Automation',      d: 'Workflow + copilots' },
  { to: '/services', t: 'Websites',           d: 'Fast, mobile-first' },
  { to: '/services', t: 'Web Applications',   d: 'Portals & dashboards' },
  { to: '/services', t: 'CRM Integrations',   d: 'HubSpot, Zoho, more' },
  { to: '/services', t: 'SEO & Google Ads',   d: 'Rank on Google.in' },
  { to: '/services', t: 'Maintenance',        d: 'Support on IST hours' },
  { to: '/services', t: 'Digital Operations', d: 'Retained team' },
];

export default function App() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    function onDoc(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-page">
      <header className="sticky top-0 z-40">
        <div className="hidden lg:block bg-dark-section text-white/80 text-[12.5px]">
          <div className="container-x flex items-center justify-between h-9">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                </span>
                Accepting new projects · IST business days
              </span>
              <span className="text-white/40">·</span>
              <span>hello@ethixweb.com</span>
              <span className="text-white/40">·</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-5">
              <span>Bengaluru · Mumbai · Delhi NCR</span>
              <a href="https://wa.me/919876543210" className="flex items-center gap-1.5 text-white hover:text-brand transition-colors">
                WhatsApp <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-surface/85 backdrop-blur-md border-b border-ink/[0.06]">
          <div className="container-x flex items-center justify-between h-16 lg:h-[72px]">
            <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Ethixweb home">
              <Logo className="h-6 lg:h-7" />
              <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40 border-l border-ink/10 pl-2.5">
                India
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="relative text-sm font-medium text-ink/80 hover:text-ink transition-colors inline-flex items-center gap-1.5"
                >
                  Services
                  <span aria-hidden className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <div className="w-[560px] bg-surface border border-ink/10 rounded-2xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICES.map((s) => (
                        <Link key={s.t} to={s.to} className="group flex gap-3 p-3 rounded-xl hover:bg-ink/[0.04] transition-colors">
                          <span className="w-1 shrink-0 rounded-full bg-brand/20 group-hover:bg-brand transition-colors" />
                          <span>
                            <span className="block text-sm font-semibold text-ink">{s.t}</span>
                            <span className="block text-xs text-muted mt-0.5">{s.d}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-ink/5 flex items-center justify-between px-3">
                      <span className="text-xs text-muted">Need help choosing?</span>
                      <Link to="/contact" className="text-xs font-semibold text-brand hover:underline">Book a call →</Link>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link to="/contact" className="btn-primary hidden sm:inline-flex !py-2.5 !px-4 !text-[13px]">
                Start a project <span aria-hidden className="hidden sm:inline">→</span>
              </Link>

              <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-ink/10 active:scale-95 transition-transform hover:border-ink/25"
              >
                <div className="relative" style={{ width: 18, height: 18 }}>
                  <span className={`absolute left-0 top-1 h-[2px] w-full bg-ink rounded transition-all duration-300 ${open ? 'top-[8px] rotate-45' : ''}`} />
                  <span className={`absolute left-0 top-[8px] h-[2px] w-full bg-ink rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                  <span className={`absolute left-0 top-[15px] h-[2px] w-full bg-ink rounded transition-all duration-300 ${open ? 'top-[8px] -rotate-45' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-surface shadow-2xl transition-all duration-300 ${open ? 'translate-y-0' : '-translate-y-6'}`}>
          <nav className="container-x py-5 flex flex-col">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted px-1 mb-2">Menu</div>
            <Link to="/services" className="py-3.5 px-1 text-base font-medium border-b border-ink/5 hover:text-brand transition-colors">Services</Link>
            <Link to="/about"    className="py-3.5 px-1 text-base font-medium border-b border-ink/5 hover:text-brand transition-colors">About</Link>
            <Link to="/contact"  className="py-3.5 px-1 text-base font-medium border-b border-ink/5 hover:text-brand transition-colors">Contact</Link>

            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted px-1 mb-2">Popular</div>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.slice(0, 4).map((s) => (
                <Link key={s.t} to={s.to} className="text-sm px-3 py-2.5 rounded-lg border border-ink/10 hover:border-brand/50 hover:text-brand transition-colors">{s.t}</Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <Link to="/contact" className="btn-primary w-full">Start a project</Link>
              <a href="https://wa.me/919876543210" className="btn-ghost w-full">WhatsApp us</a>
            </div>

            <div className="mt-6 pt-5 border-t border-ink/5 text-xs text-muted space-y-1.5">
              <div>hello@ethixweb.com</div>
              <div>+91 98765 43210</div>
              <div>Mon–Sat, 10:00–19:00 IST</div>
            </div>
          </nav>
        </div>
      </div>

      <main className="flex-1"><Outlet /></main>

      <footer className="relative border-t border-ink/[0.06] mt-24 bg-surface overflow-hidden">
        <div className="container-x py-14 grid gap-10 md:grid-cols-12 relative text-sm">
          <div className="md:col-span-4">
            <Logo className="h-7 mb-4" />
            <p className="text-muted leading-relaxed max-w-xs">
              India-first digital operations team. Built for 4G, made for growth.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['GST', 'MSME', 'Startup India'].map((b) => (
                <span key={b} className="text-[10px] font-semibold uppercase tracking-widest border border-ink/10 rounded-full px-2.5 py-1 text-ink/60">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-semibold mb-3.5 text-[13px] uppercase tracking-widest text-ink/60">Services</div>
            <ul className="space-y-2.5 text-muted">
              {['AI Receptionists', 'Websites', 'SEO & Ads', 'Digital Operations'].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-brand transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-semibold mb-3.5 text-[13px] uppercase tracking-widest text-ink/60">Company</div>
            <ul className="space-y-2.5 text-muted">
              <li><Link to="/about"   className="hover:text-brand transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
              <li><Link to="/admin"   className="hover:text-brand transition-colors">Admin</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-semibold mb-3.5 text-[13px] uppercase tracking-widest text-ink/60">Reach us</div>
            <ul className="space-y-2.5 text-muted">
              <li><a href="mailto:hello@ethixweb.com" className="hover:text-brand transition-colors">hello@ethixweb.com</a></li>
              <li><a href="tel:+919876543210" className="hover:text-brand transition-colors">+91 98765 43210</a></li>
              <li>Mon–Sat, 10:00–19:00 IST</li>
              <li>Bengaluru · Mumbai · Delhi NCR</li>
            </ul>
            <a href="https://wa.me/919876543210" className="mt-4 inline-flex items-center gap-2 text-brand font-semibold hover:underline">
              Chat on WhatsApp <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="border-t border-ink/5 relative">
          <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
            <div>© {new Date().getFullYear()} Ethixweb India. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-brand">Privacy</Link>
              <span className="text-ink/20">·</span>
              <Link to="/about" className="hover:text-brand">Terms</Link>
              <span className="text-ink/20">·</span>
              <span>Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}