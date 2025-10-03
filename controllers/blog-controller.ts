import { blogService } from '@/services/blogService'
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
