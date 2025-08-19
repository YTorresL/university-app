import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { streamText } from "ai"

export const maxDuration = 30

const gemini = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
})

export async function POST(req) {
  const { messages } = await req.json()

  const textStream = await streamText({
    model: gemini("gemini-1.5-flash"),
    messages,
  })

  return textStream.toDataStreamResponse();
}
