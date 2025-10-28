import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const accessToken = req.cookies.get('access_token')?.value
  return NextResponse.json({ hasSession: !!accessToken })
}
