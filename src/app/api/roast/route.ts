import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return Response.json("Hello World I'm the API section");
}
