import { useEffect, useState, useCallback, useRef } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const STATUS_CONFIG = {
  new:       { label: 'New',       bg: 'bg-brand/10',       text: 'text-brand',       dot: 'bg-brand' },
  contacted: { label: 'Contacted', bg: 'bg-amber-500/10',   text: 'text-amber-600',   dot: 'bg-amber-500' },
  won:       { label: 'Won',       bg: 'bg-emerald-500/10', text: 'text-emerald-600', dot: 'bg-emerald-500' },
  lost:      { label: 'Lost',      bg: 'bg-ink/10',         text: 'text-ink/60',      dot: 'bg-ink/40' },
};

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

export default function Admin() {
  // authed: null = checking, false = logged out, true = logged in
  const [authed, setAuthed] = useState(null);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [expanded, setExpanded] = useState(null);
  const [noteDraft, setNoteDraft] = useState('');
  const [saving, setSaving] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.set('status', statusFilter);
      if (search.trim()) params.set('search', search.trim());
      if (sortBy) params.set('sort', sortBy);

      const leadsRes = await fetch(`${API}/api/admin/leads?${params}`, {
        credentials: 'include',
      });

      if (leadsRes.status === 401) {
        setAuthed(false);
        return;
      }

      const leadsData = await leadsRes.json();

      // Stats — optional, don't break if endpoint missing
      let statsData = null;
      try {
        const statsRes = await fetch(`${API}/api/admin/stats`, { credentials: 'include' });
        if (statsRes.ok) statsData = await statsRes.json();
      } catch {}

      setLeads(leadsData.leads || []);
      setStats(statsData?.stats || null);
      setAuthed(true);
    } catch (err) {
      console.error('[admin]', err);
      setError('Failed to load leads');
    } finally {
      setLoading(false);
    }
  }, [statusFilter, search, sortBy]);

  // Initial load — runs once on mount
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced reload on filter/search change (skips first render)
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const t = setTimeout(() => loadData(), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, statusFilter, sortBy]);

  async function login(e) {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setPassword('');
        loadData();
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Cannot reach server. Is backend running?');
    }
  }

  async function logout() {
    try {
      await fetch(`${API}/api/admin/logout`, { method: 'POST', credentials: 'include' });
    } catch {}
    setAuthed(false);
    setLeads([]);
    setStats(null);
  }

  async function updateLead(id, patch) {
    setSaving(true);
    try {
      await fetch(`${API}/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(patch),
      });
      await loadData();
    } finally {
      setSaving(false);
    }
  }

  async function removeLead(id) {
    if (!confirm('Delete this lead? This cannot be undone.')) return;
    await fetch(`${API}/api/admin/leads/${id}`, { method: 'DELETE', credentials: 'include' });
    if (expanded === id) setExpanded(null);
    loadData();
  }

  function exportCSV() {
    if (!leads.length) return;
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Status', 'Message', 'Notes', 'Date'];
    const rows = leads.map((l) => [
      l.name, l.email, l.phone, l.company || '', l.service, l.budget, l.status,
      (l.message || '').replace(/\n/g, ' '),
      (l.notes || '').replace(/\n/g, ' '),
      new Date(l.createdAt).toLocaleString('en-IN'),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /* ---------- CHECKING ---------- */
  if (authed === null) {
    return (
      <section className="container-x py-24">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-10 w-56 bg-ink/5 rounded-lg animate-pulse" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-24 bg-ink/5 rounded-2xl animate-pulse" />
            ))}
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 bg-ink/5 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  /* ---------- LOGIN ---------- */
  if (!authed) {
    return (
      <section className="container-x py-24 max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand text-white mb-5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Admin access</h1>
          <p className="text-sm text-muted mt-2">Enter the password to view leads</p>
        </div>

        <form onSubmit={login} className="card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] space-y-4">
          <div>
            <label className="label" htmlFor="pw">Password</label>
            <input
              id="pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
              autoComplete="current-password"
              autoFocus
            />
          </div>
          {error && <p role="alert" className="text-sm text-brand">{error}</p>}
          <button className="btn-primary w-full">Sign in</button>
        </form>
      </section>
    );
  }

  /* ---------- DASHBOARD ---------- */
  return (
    <section className="container-x py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Leads dashboard</h1>
          <p className="text-sm text-muted mt-1">
            {leads.length} lead{leads.length === 1 ? '' : 's'}{' '}
            {search || statusFilter !== 'all' ? 'matching filters' : 'total'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={exportCSV} className="btn-ghost !py-2.5 !px-4 !text-[13px]" disabled={!leads.length}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Export CSV
          </button>
          <button onClick={logout} className="btn-ghost !py-2.5 !px-4 !text-[13px]">Logout</button>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="rounded-2xl bg-ink/[0.03] p-5">
            <div className="text-2xl font-semibold tabular-nums">{stats.total}</div>
            <div className="text-xs text-muted mt-1 uppercase tracking-widest">Total</div>
            <div className="text-xs text-muted mt-2">+{stats.last7d} this week</div>
          </div>
          {['new', 'contacted', 'won', 'lost'].map((s) => {
            const cfg = STATUS_CONFIG[s];
            return (
              <button
                key={s}
                onClick={() => setStatusFilter(statusFilter === s ? 'all' : s)}
                className={`text-left rounded-2xl p-5 transition-all ${cfg.bg} ${statusFilter === s ? 'ring-2 ring-brand/40' : ''}`}
              >
                <div className={`text-2xl font-semibold tabular-nums ${cfg.text}`}>{stats[s] || 0}</div>
                <div className={`text-xs mt-1 uppercase tracking-widest ${cfg.text} opacity-70`}>{cfg.label}</div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[240px]">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, phone, company, message…"
            className="input !pl-10"
          />
        </div>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input !w-auto min-w-[150px]">
          <option value="all">All status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input !w-auto min-w-[150px]">
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="status">By status</option>
        </select>
      </div>

      {loading && (
        <div className="text-center py-4 text-sm text-muted flex items-center justify-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full border-2 border-ink/20 border-t-brand animate-spin" />
          Updating…
        </div>
      )}

      {!loading && leads.length === 0 && (
        <div className="text-center py-20 rounded-2xl border border-dashed border-ink/10 bg-ink/[0.02]">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ink/5 mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
              <path d="M22 12h-6l-2 3h-4l-2-3H2" />
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
            </svg>
          </div>
          <p className="font-medium">
            {search || statusFilter !== 'all' ? 'No leads match your filters' : 'No leads yet'}
          </p>
          <p className="text-sm text-muted mt-1">
            {search || statusFilter !== 'all'
              ? 'Try clearing filters to see all leads.'
              : 'New enquiries from the contact form will appear here.'}
          </p>
        </div>
      )}

      <div className="space-y-3">
        {leads.map((l) => {
          const cfg = STATUS_CONFIG[l.status] || STATUS_CONFIG.new;
          const isOpen = expanded === l._id;
          return (
            <article key={l._id} className="card !p-0 overflow-hidden">
              <div className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-semibold text-[15.5px] truncate">{l.name}</h3>
                      {l.company && <span className="text-xs text-muted">· {l.company}</span>}
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mt-2">
                      <span className="truncate">{l.email}</span>
                      <span>{l.phone}</span>
                      <span className="text-xs">· {timeAgo(l.createdAt)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={l.status}
                      onChange={(e) => updateLead(l._id, { status: e.target.value })}
                      disabled={saving}
                      className="text-xs border border-ink/15 rounded-lg px-2.5 py-1.5 bg-surface cursor-pointer"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="won">Won</option>
                      <option value="lost">Lost</option>
                    </select>

                    <button
                      onClick={() => {
                        setExpanded(isOpen ? null : l._id);
                        setNoteDraft(l.notes || '');
                      }}
                      className="w-8 h-8 rounded-lg border border-ink/10 hover:border-ink/25 flex items-center justify-center transition-colors"
                      aria-label={isOpen ? 'Collapse' : 'Expand'}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {l.message}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted mt-3">
                  <span><span className="text-ink/60">Service:</span> {l.service}</span>
                  <span><span className="text-ink/60">Budget:</span> {l.budget}</span>
                </div>
              </div>

              {isOpen && (
                <div className="border-t border-ink/[0.06] bg-ink/[0.015] p-5 space-y-5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Full message</div>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{l.message}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Internal notes</div>
                    <textarea
                      value={noteDraft}
                      onChange={(e) => setNoteDraft(e.target.value)}
                      rows={3}
                      placeholder="Add context, next steps, call summary…"
                      className="input resize-y"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => updateLead(l._id, { notes: noteDraft })}
                        disabled={saving || noteDraft === (l.notes || '')}
                        className="btn-primary !py-2 !px-4 !text-xs disabled:opacity-40"
                      >
                        {saving ? 'Saving…' : 'Save note'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Quick actions</div>
                    <div className="flex flex-wrap gap-2">
                      <a href={`mailto:${l.email}`} className="btn-ghost !py-2 !px-3.5 !text-xs">Email</a>
                      <a href={`tel:${l.phone}`} className="btn-ghost !py-2 !px-3.5 !text-xs">Call</a>
                      <a
                        href={`https://wa.me/91${String(l.phone).replace(/\D/g, '').slice(-10)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost !py-2 !px-3.5 !text-xs"
                      >
                        WhatsApp
                      </a>
                      <button
                        onClick={() => navigator.clipboard.writeText(l.email)}
                        className="btn-ghost !py-2 !px-3.5 !text-xs"
                      >
                        Copy email
                      </button>
                      <button
                        onClick={() => removeLead(l._id)}
                        className="btn-ghost !py-2 !px-3.5 !text-xs !text-brand !border-brand/20 hover:!border-brand/50 ml-auto"
                      >
                        Delete lead
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-muted pt-3 border-t border-ink/[0.06] grid sm:grid-cols-2 gap-2">
                    <div><span className="text-ink/50">Received:</span> {new Date(l.createdAt).toLocaleString('en-IN')}</div>
                    {l.meta?.ip && <div><span className="text-ink/50">IP:</span> {l.meta.ip}</div>}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}