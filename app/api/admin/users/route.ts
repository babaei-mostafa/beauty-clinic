import { getUsers } from "@/controllers/user-controller";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
return getUsers(req)
}