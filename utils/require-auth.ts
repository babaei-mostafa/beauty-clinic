import { verifyAccessToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export function requireAdminAuth(req: NextRequest) {
    const authHeader = req.headers.get("authorization")

    if (!authHeader) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const token = authHeader.split(" ")[1]
    const isVerified = verifyAccessToken(token)

    if (!isVerified) {
        return NextResponse.json({error:"Forbidden"}, {status: 403})
    }
}