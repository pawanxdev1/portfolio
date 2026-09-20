const express = require('express');
const contactHandler = require('./api/contact');

const app = express();
const port = process.env.PORT || 10000;

app.use(express.json({ limit: '20kb' }));

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.all('/api/contact', contactHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`API server listening on port ${port}`);
});