import { NextRequest } from "next/server";

export function getPagination(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    return {
        page: parseInt(searchParams.get("page") || "1", 10),
        limit: parseInt(searchParams.get("limit") || "12", 10)
    }
}