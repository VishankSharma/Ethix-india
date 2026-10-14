import { verifySession } from '../lib/cookie.js';

export function requireAdmin(req, res, next) {
  if (!verifySession(req)) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }
  next();
}