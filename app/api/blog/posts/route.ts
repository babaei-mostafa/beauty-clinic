import { createArticle } from "@/controllers/blog-controller";
import { NextRequest } from "next/server";

export default function POST(req: NextRequest) {
    return createArticle(req)
}