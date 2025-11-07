import { verifyAccessToken } from '@/lib/jwt'
import { authService } from '@/services/auth-service'
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

    res.cookies.set('access_token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60, // 1h
    })

    res.cookies.set('refresh_token', refresh, {
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

export async function refresh(req: NextRequest) {
  try {
    const { user, token } = await authService.refresh(req)

    const res = NextResponse.json({ user })

    res.cookies.set('access_token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60, // 1 hour
    })

    return res
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 })
  }
}

export async function logout() {
  try {
    const res = NextResponse.json({ message: 'You logged out successfully!' }, { status: 200 })

    res.cookies.set('access_token', '', {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0), // expires immediately
    })

    res.cookies.set('refresh_token', '', {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
    })

    return res
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function verify(req: NextRequest) {
  try {
    const token = req.cookies.get('access_token')?.value
    if (!token) return NextResponse.json({ valid: false }, { status: 401 })

    const payload = verifyAccessToken(token)
    if (!payload) return NextResponse.json({ valid: false }, { status: 401 })

    return NextResponse.json({ valid: true, payload })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function forgotPassword(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body
    
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
