import { NextRequest, NextResponse } from 'next/server'

import { blogService } from '@/services/blog-service'
import { getPagination } from '@/utils/getPagination'
import { verifyAccessToken } from '@/lib/jwt'
import { requireAdminAuth } from '@/utils/require-auth'

export async function createArticle(req: NextRequest) {
  try {
    
    // ---- AUTH GUARD START ----
    const authResult = requireAdminAuth(req)

    if (authResult instanceof NextResponse) return authResult
    // ---- AUTH GUARD END ----

    const body = await req.json()
    const article = await blogService.createArticle(body)
    return NextResponse.json(article, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

export async function getArticles(req: NextRequest) {
  try {
    const {page, limit} = getPagination(req)

    const baseUrl = req.nextUrl.origin + req.nextUrl.pathname

    const result = await blogService.getArticles({
      page,
      limit,
      baseUrl,
      is_published: true,
    })

    return NextResponse.json(result, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 200 })
  }
}

export async function getAdminArticles(req: NextRequest) {
  try {
    const {page, limit} = getPagination(req)

    const baseUrl = req.nextUrl.origin + req.nextUrl.pathname

    const result = await blogService.getArticles({ page, limit, baseUrl })
    return NextResponse.json(result, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 200 })
  }
}
