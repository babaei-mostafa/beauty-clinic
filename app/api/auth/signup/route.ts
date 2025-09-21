import { NextRequest } from 'next/server'

import { signup } from '@/controllers/auth-controller'

export async function POST(req: NextRequest) {
  return signup(req)
}
