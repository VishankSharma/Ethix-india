import express from 'express';
import { connectDB } from '../config/db.js';
import Lead from '../models/Lead.js';
import { requireAdmin } from '../middleware/auth.js';
import { LoginSchema, LeadUpdateSchema } from '../validators/lead.js';
import { loginLimiter } from '../lib/ratelimit.js';
import {
  createSessionCookie,
  createDevCookie,
  clearSessionCookie,
  safeCompare,
  verifySession,
} from '../lib/cookie.js';

const router = express.Router();

/* ---------------- AUTH ---------------- */

router.post('/admin/login', loginLimiter, (req, res) => {
  const parsed = LoginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: 'Password required' });
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return res.status(500).json({ ok: false, error: 'Admin not configured' });
  }

  if (!safeCompare(parsed.data.password, expected)) {
    return res.status(401).json({ ok: false, error: 'Invalid password' });
  }

  const isProd = process.env.NODE_ENV === 'production';
  res.setHeader('Set-Cookie', isProd ? createSessionCookie() : createDevCookie());
  return res.status(200).json({ ok: true });
});

router.post('/admin/logout', (req, res) => {
  res.setHeader('Set-Cookie', clearSessionCookie());
  return res.status(200).json({ ok: true });
});

router.get('/admin/verify', (req, res) => {
  if (!verifySession(req)) return res.status(401).json({ ok: false });
  return res.status(200).json({ ok: true });
});

/* ---------------- LEADS ---------------- */

router.get('/admin/leads', requireAdmin, async (req, res, next) => {
  try {
    await connectDB();

    const { status, search, sort } = req.query;
    const query = {};

    if (status && status !== 'all') query.status = status;

    if (search && search.trim()) {
      const re = new RegExp(search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      query.$or = [
        { name: re },
        { email: re },
        { phone: re },
        { company: re },
        { message: re },
      ];
    }

    const sortBy =
      sort === 'oldest' ? { createdAt: 1 } :
      sort === 'status' ? { status: 1, createdAt: -1 } :
      { createdAt: -1 };

    const leads = await Lead.find(query).sort(sortBy).limit(500).lean();

    return res.status(200).json({ ok: true, count: leads.length, leads });
  } catch (err) {
    next(err);
  }
});

router.patch('/admin/leads/:id', requireAdmin, async (req, res, next) => {
  try {
    const parsed = LeadUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ ok: false, error: 'Invalid update payload' });
    }

    await connectDB();
    const lead = await Lead.findByIdAndUpdate(req.params.id, parsed.data, {
      new: true,
      runValidators: true,
    });

    if (!lead) return res.status(404).json({ ok: false, error: 'Lead not found' });
    return res.status(200).json({ ok: true, lead });
  } catch (err) {
    next(err);
  }
});

router.delete('/admin/leads/:id', requireAdmin, async (req, res, next) => {
  try {
    await connectDB();
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ ok: false, error: 'Lead not found' });
    return res.status(200).json({ ok: true });
  } catch (err) {
    next(err);
  }
});

/* ---------------- STATS ---------------- */

router.get('/admin/stats', requireAdmin, async (req, res, next) => {
  try {
    await connectDB();

    const [byStatus, total, last7d, last30d] = await Promise.all([
      Lead.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
      Lead.countDocuments(),
      Lead.countDocuments({ createdAt: { $gte: new Date(Date.now() - 7 * 864e5) } }),
      Lead.countDocuments({ createdAt: { $gte: new Date(Date.now() - 30 * 864e5) } }),
    ]);

    const stats = byStatus.reduce((acc, s) => ({ ...acc, [s._id]: s.count }), {});

    return res.status(200).json({
      ok: true,
      stats: {
        total,
        new: stats.new || 0,
        contacted: stats.contacted || 0,
        won: stats.won || 0,
        lost: stats.lost || 0,
        last7d,
        last30d,
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;