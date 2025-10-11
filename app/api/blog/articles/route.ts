import { createArticle, getArticles } from '@/controllers/blog-controller'
import { NextRequest } from 'next/server'

export default function POST(req: NextRequest) {
  return createArticle(req)
}

export async function GET(req: NextRequest) {
  return getArticles(req)
}
