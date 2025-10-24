import { connectDB } from '@/lib/db'
import User from '@/models/User'

export const userService = {
  async getUsers({
    page = 1,
    limit = 12,
    baseUrl,
  }: {
    page?: number
    limit?: number
    baseUrl: string
  }) {
    await connectDB()

    const skip = (page - 1) * limit
    const count = await User.countDocuments()
    const users = await User.find().skip(skip).limit(limit)

    const totalPages = Math.ceil(count / limit)

    const hasNext = page < totalPages
    const hasPrev = page > 1

    const next = hasNext ? `${baseUrl}?page=${page + 1}&limit=${limit}` : null
    const previous = hasPrev ? `${baseUrl}?page=${page - 1}&limit=${limit}` : null

    return {
      count,
      next,
      previous,
      data: users,
    }
  },
}
