const { connectToDatabase } = require('./lib/db');
const Contact = require('./models/Contact');
const { validateContactPayload } = require('./lib/validate');

const allowedOrigin = process.env.CLIENT_ORIGIN || '*';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Very small in-memory rate limit per warm instance: blunts naive spam
// without needing an external service. Not a substitute for a real
// rate-limiting layer (e.g. Vercel Edge Config / Upstash) in high-traffic use.
const requestLog = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(key) {
  const now = Date.now();
  const timestamps = (requestLog.get(key) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ success: false, message: 'Too many requests. Please try again in a minute.' });
  }

  const { isValid, errors, data } = validateContactPayload(req.body || {});

  if (!isValid) {
    return res.status(400).json({ success: false, message: 'Invalid submission.', errors });
  }

  try {
    await connectToDatabase();
    await Contact.create({ ...data, ip });

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out — I'll get back to you soon.",
    });
  } catch (err) {
    // Never leak internal error details (stack traces, connection strings) to the client.
    console.error('Contact API error:', err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong on our end. Please try again later or email me directly.',
    });
  }
};
