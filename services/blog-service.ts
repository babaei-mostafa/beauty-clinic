import { connectDB } from '@/lib/db'
import Article from '@/models/Article'

export const blogService = {
  async createArticle(body: any) {
    await connectDB()

    const article = new Article(body)
    await article.save()

    return article
  },
  async getArticles({
    page = 1,
    limit = 12,
    baseUrl,
    is_published,
  }: {
    page?: number
    limit?: number
    baseUrl: string
    is_published?: boolean
  }) {
    await connectDB()

    const query: any = {}

    if (typeof is_published === 'boolean') {
      query.is_published = true
    }

    const skip = (page - 1) * limit
    const count = await Article.countDocuments({ is_published: false })
    const articles = await Article.find({ is_published: false })
      .populate('author', 'username first_name last_name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const totalPages = Math.ceil(count / limit)

    const hasNext = page < totalPages
    const hasPrev = page > 1

    const next = hasNext
      ? `${baseUrl}?page=${page + 1}&limit=${limit}
        }`
      : null

    const previous = hasPrev
      ? `${baseUrl}&page=${page - 1}&limit=${limit}
        }`
      : null

    return {
      count,
      previous,
      next,
      data: articles,
    }
  },
}
