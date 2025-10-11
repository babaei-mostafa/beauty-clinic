import { blogService } from '@/services/blog-service'
import { NextRequest, NextResponse } from 'next/server'

export async function createArticle(req: NextRequest) {
  try {
    const body = await req.json()
    const article = await blogService.createArticle(body)
    return NextResponse.json(article, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

export async function getArticles(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '12', 10)

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
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '12', 10)

    const baseUrl = req.nextUrl.origin + req.nextUrl.pathname

    const result = await blogService.getArticles({ page, limit, baseUrl })
    return NextResponse.json(result, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 200 })
  }
}
