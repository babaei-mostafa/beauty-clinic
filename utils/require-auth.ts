import { verifyAccessToken } from '@/lib/jwt'
import { NextRequest, NextResponse } from 'next/server'

export function requireAdminAuth(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')
    const token = authHeader?.split(' ')[1]

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyAccessToken(token) as { userId: string; role: string }

    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    return decoded
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 })
  }
}
