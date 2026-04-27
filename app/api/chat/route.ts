import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai'

export const maxDuration = 30

const SYSTEM_PROMPT = `You are SereneQuests AI, a friendly and knowledgeable wellness assistant. Your role is to provide helpful, evidence-based information about:

- Home remedies for common health concerns
- General wellness tips and healthy lifestyle guidance
- Stress management and relaxation techniques
- Sleep improvement strategies
- Nutrition and dietary advice
- Minor first aid guidance

IMPORTANT GUIDELINES:
1. Always be warm, empathetic, and supportive in your responses
2. Provide practical, actionable advice when appropriate
3. Use clear formatting with bullet points and bold text for key points
4. Always include a "When to seek medical care" section for health-related queries
5. Never diagnose conditions or recommend specific medications
6. Remind users that you provide general wellness information, not medical advice
7. For serious symptoms, always recommend consulting a healthcare provider
8. Keep responses concise but comprehensive (aim for 200-400 words)
9. Use markdown formatting for better readability

Remember: You are a wellness companion providing general guidance, not a medical professional.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: 'openai/gpt-4o-mini',
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    onFinish: async ({ isAborted }) => {
      if (isAborted) return
      // Could save chat history here if needed
    },
    consumeSseStream: consumeStream,
  })
}
