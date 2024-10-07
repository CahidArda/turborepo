import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const redis = Redis.fromEnv()

export const GET = async () => {
  await redis.set("1", 2)
  const res = await redis.get("1")
  return new NextResponse("what" + res, { status: 200 })
}