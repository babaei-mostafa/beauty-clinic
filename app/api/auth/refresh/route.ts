import { signAccessToken, verifyRefreshToken } from '@/lib/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const refresh = req.cookies.get('refresh')?.value
    if (!refresh) {
      return NextResponse.json({ error: 'No refresh token' }, { status: 401 })
    }

    const decoded = verifyRefreshToken(refresh) as { userId: string }
    const token = signAccessToken({ userId: decoded.userId })

    const res = NextResponse.json({ token })
    res.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1h
    })

    return res
  } catch {
    return NextResponse.json(
      { error: 'Invalid refresh token' },
      { status: 401 }
    )
  }
}
