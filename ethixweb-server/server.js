import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { connectDB } from './config/db.js';
import enquiryRoutes from './routes/enquiry.js';
import adminRoutes from './routes/admin.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.set('trust proxy', 1);

// Security headers
app.use(helmet());

// CORS — allow frontend origin(s) with credentials
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // curl / Postman
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  })
);

// Body parsing
app.use(express.json({ limit: '20kb' }));
app.use(cookieParser());

// Health check
app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true, service: 'ethixweb-api', ts: Date.now() });
});

// Routes
app.use('/api', enquiryRoutes);
app.use('/api', adminRoutes);

// 404 + error
app.use(notFound);
app.use(errorHandler);

// Boot
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  });