import bcrypt from 'bcryptjs'

import User from '@/models/User'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '@/lib/jwt'
import { connectDB } from '@/lib/db'
import { IUserDocument } from '@/types/user'
import { NextRequest } from 'next/server'

export const authService = {
  async signup({
    username,
    email,
    password,
    first_name,
    last_name,
    role = 'user',
  }: {
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
    role: string
  }) {
    await connectDB()

    const normalizedEmail = email.toLocaleLowerCase().trim()

    const existing = await User.findOne({ email: normalizedEmail })
    if (existing) throw new Error('Email already exists')

    const hashed = await bcrypt.hash(password, 10)
    const user: IUserDocument | null = await User.create({
      username,
      email: normalizedEmail,
      password: hashed,
      first_name,
      last_name,
      role,
    })

    return {
      id: user?.password,
      email: user?.email,
      username: user?.username,
      first_name: user?.first_name,
      last_name: user?.last_name,
      role: user?.role,
    }
  },

  async login({ email, password }: { email: string; password: string }) {
    await connectDB()

    const normalizedEmail = email.toLocaleLowerCase().trim()

    const user = await User.findOne({ email: normalizedEmail }).lean()
    if (!user) throw new Error('Invalid credentials')

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw new Error('Invalid credentials')
    }

    const token = signAccessToken({ userId: user._id, role: user.role })
    const refresh = signRefreshToken({ userId: user._id, role: user.role })

    return {
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
      },
      token,
      refresh,
    }
  },

  async refresh(req: NextRequest) {
    connectDB()

    const refresh = req.cookies.get('refresh_token')?.value
    if (!refresh) throw new Error('No refresh token')

    const decoded = verifyRefreshToken(refresh) as { userId: string }
    if (!decoded?.userId) throw new Error('Invalid refresh token')

    const user = await User.findById(decoded.userId)
    if (!user) throw new Error('User not found')

    const newAccessToken = signAccessToken({ userId: user._id, role: user.role })

    return {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        username: user.username,
      },
      token: newAccessToken,
    }
  },
}
