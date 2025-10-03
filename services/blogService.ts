import { connectDB } from '@/lib/db'
import Article from '@/models/Article'

export const blogService = {
  async createArticle(body: any) {
    await connectDB()

    const article = new Article(body)
    await article.save()

    return article
  },
}
