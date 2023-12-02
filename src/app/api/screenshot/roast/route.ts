import OpenAI from "openai";
import { type NextRequest } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { path } = body;
  console.log(path);

  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    stream: true,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "You're an expert UI/UX designer. Give recommendations on how to improve this website's conversion score and give the website a conversion score out of 10",
          },
          {
            type: "image_url",
            image_url: {
              url: path,
            },
          },
        ],
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
