import bcrypt from 'bcryptjs'

import User from '@/models/User'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '@/lib/jwt'
import { connectDB } from '@/lib/db'
import { IUserDocument } from '@/types/user'
import { NextRequest } from 'next/server'
import { generateResetToken } from '@/lib/reset-token'
import { sendEmail } from '@/lib/mailer'
import { renderResetPassword } from '@/lib/email-templates'

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

  async forgotPassword({ email }: { email: string }) {
    connectDB()

    const normalizedEmail = email.toLocaleLowerCase().trim()
    const user = await User.findOne({ email: normalizedEmail })

    if (!user) return

    const { token, hash } = generateResetToken()
    const expires = new Date(Date.now() + 1000 * 60 * 60)

    user.resetPasswordToken = hash
    user.resetPasswordExpires = expires
    await user.save()

    const base =
      process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL || 'http://localhost:3000'
    const resetUrl = `${base}/reset-password?token=${token}&id=${user._id}`

    // Build email content using template renderer
    const { subject, html, text } = renderResetPassword({
      name: user.first_name || user.username,
      resetUrl,
    })

    console.log('subject is: ', subject)

    // Send email
    await sendEmail({ to: user.email, subject, html, text })
    return
  },
}
