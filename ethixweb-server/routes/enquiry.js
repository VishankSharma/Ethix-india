import express from 'express';
import { connectDB } from '../config/db.js';
import Lead from '../models/Lead.js';
import { EnquirySchema } from '../validators/lead.js';
import { enquiryLimiter } from '../lib/ratelimit.js';

const router = express.Router();

router.post('/enquiry', enquiryLimiter, async (req, res, next) => {
  try {
    const parsed = EnquirySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        error: 'Validation failed',
        fields: parsed.error.flatten().fieldErrors,
      });
    }

    const d = parsed.data;

    // Spam signal 1: honeypot filled
    if (d.website && d.website.length > 0) {
      return res.status(200).json({ ok: true });
    }

    // Spam signal 2: submitted <3s after render
    if (Date.now() - d.renderedAt < 3000) {
      return res.status(200).json({ ok: true });
    }

    await connectDB();

    // Spam signal 3: duplicate within 24h
    const recent = await Lead.findOne({
      email: d.email,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });
    if (recent) {
      return res.status(200).json({ ok: true, message: 'Already received.' });
    }

    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket.remoteAddress ||
      '';

    const lead = await Lead.create({
      name: d.name,
      email: d.email,
      phone: d.phone,
      company: d.company || '',
      service: d.service,
      budget: d.budget,
      message: d.message,
      meta: {
        ip,
        userAgent: req.headers['user-agent'] || '',
        referer: req.headers['referer'] || '',
      },
    });

    return res.status(201).json({ ok: true, id: lead._id });
  } catch (err) {
    next(err);
  }
});

export default router;