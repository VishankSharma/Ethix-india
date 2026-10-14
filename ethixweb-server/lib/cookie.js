import crypto from 'crypto';

const COOKIE_NAME = 'admin_session';
const MAX_AGE_SECONDS = 8 * 60 * 60; // 8 hours

function sign(value) {
  return crypto
    .createHmac('sha256', process.env.ADMIN_SECRET)
    .update(value)
    .digest('hex');
}

export function createSessionCookie() {
  const exp = Date.now() + MAX_AGE_SECONDS * 1000;
  const sig = sign(String(exp));
  const value = `${exp}.${sig}`;
  return `${COOKIE_NAME}=${value}; HttpOnly; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=None; Secure`;
}

export function createDevCookie() {
  // Same as above but without Secure flag (for local http)
  const exp = Date.now() + MAX_AGE_SECONDS * 1000;
  const sig = sign(String(exp));
  const value = `${exp}.${sig}`;
  return `${COOKIE_NAME}=${value}; HttpOnly; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=None; Secure`;
}

export function verifySession(req) {
  const raw = req.headers.cookie || '';
  const match = raw.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;

  const [exp, sig] = match[1].split('.');
  if (!exp || !sig) return false;
  if (Number(exp) < Date.now()) return false;

  const expected = sign(exp);
  if (sig.length !== expected.length) return false;

  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

export function safeCompare(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}