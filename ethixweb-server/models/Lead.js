import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      maxlength: 120,
      default: '',
    },
    service: {
      type: String,
      enum: ['web', 'mobile', 'seo', 'branding', 'other'],
      default: 'other',
    },
    budget: {
      type: String,
      enum: ['<50k', '50k-1L', '1L-5L', '5L+', 'unsure'],
      default: 'unsure',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'won', 'lost'],
      default: 'new',
      index: true,
    },
    notes: {
      type: String,
      maxlength: 2000,
      default: '',
    },
    meta: {
      ip: { type: String, default: '' },
      userAgent: { type: String, default: '' },
      referer: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

LeadSchema.index({ email: 1, createdAt: -1 });
LeadSchema.index({ status: 1, createdAt: -1 });

const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

export default Lead;