import { verify } from '@/controllers/auth-controller'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  return verify(req)
}
