import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Please add MONGODB_URI to your .env.local')
}

let cashed = (global as any).mongoose

if (!cashed) {
  cashed = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cashed.conn) return cashed.conn

  if (!cashed.promise) {
    cashed.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose)
  }
  cashed.conn = await cashed.promise
  return cashed.conn
}
