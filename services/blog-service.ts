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

    console.log("is_pubmished: ", is_published)

    let query: any = {}

    if (typeof is_published === 'boolean') {
      query.is_published = true
    } else {
      query = {}
    }

    const skip = (page - 1) * limit
    const count = await Article.countDocuments(query)
    const articles = await Article.find(query)
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
