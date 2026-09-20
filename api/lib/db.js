const mongoose = require('mongoose');

// Vercel serverless functions can be invoked many times concurrently.
// Caching the connection on the global object prevents exhausting
// MongoDB's connection limit by reusing one connection per warm instance.
let cached = global._mongooseConnection;

if (!cached) {
  cached = global._mongooseConnection = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Add it to your environment variables (see .env.example).'
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        dbName: process.env.MONGO_DB_NAME || 'portfolio',
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

module.exports = { connectToDatabase };
