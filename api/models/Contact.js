const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    ip: { type: String, select: false },
  },
  { timestamps: true }
);

// Avoid model overwrite errors when the serverless function is warm-reused.
module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
