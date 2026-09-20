const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strips characters that have no legitimate place in a name/subject/message
// field but are commonly used in injection attempts. This is defense in
// depth on top of Mongoose's schema validation, not a replacement for it.
function sanitize(value) {
  return String(value ?? '')
    .replace(/[<>]/g, '')
    .trim();
}

function validateContactPayload(body) {
  const errors = {};
  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);

  if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!email || !EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.';
  if (!subject || subject.length < 3) errors.subject = 'Subject must be at least 3 characters.';
  if (!message || message.length < 20) errors.message = 'Message must be at least 20 characters.';
  if (name.length > 100) errors.name = 'Name is too long.';
  if (subject.length > 150) errors.subject = 'Subject is too long.';
  if (message.length > 3000) errors.message = 'Message is too long.';

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors, data: { name, email, subject, message } };
}

module.exports = { validateContactPayload };
