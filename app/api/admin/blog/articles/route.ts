import { NextRequest } from 'next/server'

import { createArticle, getAdminArticles } from '@/controllers/blog-controller'

export async function POST(req: NextRequest) {
  return createArticle(req)
}

export async function GET(req: NextRequest) {
    return getAdminArticles(req)
}