import { refresh } from '@/controllers/auth-controller'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  return refresh(req)
}
