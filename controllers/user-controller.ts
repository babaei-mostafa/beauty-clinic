import { userService } from '@/services/user-service'
import { getPagination } from '@/utils/getPagination'
import { NextRequest, NextResponse } from 'next/server'

export async function getUsers(req: NextRequest) {
  try {
    const { page, limit } = getPagination(req)

    const baseUrl = req.nextUrl.origin + req.nextUrl.pathname

    const result = await userService.getUsers({page, limit, baseUrl})
    return NextResponse.json(result, {status: 200})
  } catch (err: any) {
    return NextResponse.json({error: err.message}, {status: 500})
  }
}
