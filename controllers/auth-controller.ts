import { authService } from '@/services/authService'
import { NextRequest, NextResponse } from 'next/server'

export async function signup(req: NextRequest) {
  try {
    const body = await req.json()
    const user = await authService.signup(body)
    return NextResponse.json(user, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

export async function login(req: NextRequest) {
  try {
    const body = await req.json()
    const { user, token, refresh } = await authService.login(body)

    const res = NextResponse.json(user)

    res.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1h
    })

    res.cookies.set('refresh', refresh, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1d
    })

    return res
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 })
  }
}
