import { createArticle } from '@/controllers/blog-controller'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  return createArticle(req)
}

export async function GET() {
    return getAdminArticles()
}