import { promises as fs } from "fs";
import OpenAI from "openai";
import { type NextRequest } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { paths } = body.data;

  const response = paths;

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
