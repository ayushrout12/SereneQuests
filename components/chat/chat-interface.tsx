"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Sparkles, User, Shield, Loader2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

const suggestedPrompts = [
  "What are some natural remedies for headaches?",
  "How can I improve my sleep quality?",
  "What should I do for a minor burn?",
  "Tips for reducing stress and anxiety",
  "How do I treat a sore throat at home?",
  "What foods help boost immunity?",
]

const sampleResponses: Record<string, string> = {
  headache: `Here are some natural approaches that may help with headaches:

**Hydration** - Dehydration is a common headache trigger. Try drinking a full glass of water and continue sipping throughout the day.

**Rest in a quiet, dark room** - This can help especially with tension headaches and migraines.

**Cold or warm compress** - Apply a cold pack to your forehead or a warm compress to the back of your neck for 15-20 minutes.

**Gentle massage** - Massaging your temples, neck, and shoulders can help relieve tension.

**Peppermint or lavender oil** - Some find relief by applying diluted essential oils to temples (patch test first).

**When to seek medical care:** If your headache is severe, sudden ("thunderclap"), accompanied by fever, confusion, stiff neck, or vision changes, please seek immediate medical attention.`,

  sleep: `Here are some evidence-based strategies for better sleep:

**Consistent sleep schedule** - Go to bed and wake up at the same time daily, even on weekends.

**Create a restful environment** - Keep your bedroom cool (65-68°F), dark, and quiet.

**Limit screen time** - Avoid phones, tablets, and computers for at least 1 hour before bed. The blue light can interfere with melatonin production.

**Avoid stimulants** - No caffeine after early afternoon, and limit alcohol close to bedtime.

**Relaxation techniques** - Try deep breathing, progressive muscle relaxation, or gentle stretching before bed.

**Regular exercise** - Physical activity promotes better sleep, but avoid vigorous exercise close to bedtime.

**When to seek help:** If sleep problems persist for more than a few weeks or significantly impact your daily life, consider consulting a healthcare provider.`,

  burn: `For minor burns (small area, first-degree with redness only):

**Cool the burn** - Hold under cool (not cold) running water for 10-20 minutes. Do NOT use ice, butter, or toothpaste.

**After cooling** - Gently pat dry and apply a thin layer of pure aloe vera gel or an over-the-counter burn cream.

**Protect the area** - Cover loosely with a sterile, non-stick bandage if needed.

**Pain relief** - Over-the-counter pain relievers like ibuprofen or acetaminophen can help.

**Keep it clean** - Gently clean daily and reapply fresh bandage.

**Seek immediate medical care if:**
- The burn is larger than 3 inches
- It involves the face, hands, feet, genitals, or joints
- The burn is deep (blistering, white/brown color)
- The person is very young, elderly, or immunocompromised`,

  stress: `Here are some effective approaches for managing stress and anxiety:

**Deep breathing** - Try the 4-7-8 technique: inhale for 4 seconds, hold for 7, exhale for 8. Repeat 3-4 times.

**Physical activity** - Even a 10-minute walk can help reduce stress hormones and boost mood.

**Limit caffeine and alcohol** - Both can worsen anxiety symptoms.

**Mindfulness and meditation** - Even 5-10 minutes daily can make a difference. Many free apps are available to guide you.

**Connect with others** - Talking to a trusted friend or family member can provide relief and perspective.

**Prioritize sleep** - Lack of sleep amplifies stress responses.

**Limit news and social media** - Set boundaries around information consumption if it increases your stress.

**When to seek help:** If stress or anxiety is interfering with your daily life, relationships, or work, consider speaking with a mental health professional.`,

  throat: `For soothing a sore throat at home:

**Stay hydrated** - Warm liquids like herbal tea with honey, broth, or warm water with lemon can be especially soothing.

**Honey** - A spoonful of honey can coat and soothe the throat (not for children under 1 year).

**Salt water gargle** - Mix 1/4 to 1/2 teaspoon salt in 8 oz warm water and gargle several times daily.

**Humidifier** - Adding moisture to the air can help, especially in dry environments.

**Rest your voice** - Try to speak less and avoid whispering (it actually strains the voice more).

**Lozenges or hard candy** - These can help keep the throat moist.

**Seek medical care if:**
- Sore throat lasts more than a week
- You have difficulty breathing or swallowing
- You have a high fever (over 101°F)
- There are white patches on your throat
- You experience joint pain or a rash`,

  immunity: `Supporting your immune system through nutrition:

**Citrus fruits** - Rich in Vitamin C (oranges, lemons, grapefruits)

**Leafy greens** - Spinach, kale, and other greens provide vitamins and antioxidants

**Garlic** - Contains immune-boosting compounds like allicin

**Ginger** - Has anti-inflammatory properties

**Yogurt** - Look for "live active cultures" for probiotic benefits

**Nuts and seeds** - Almonds, sunflower seeds provide Vitamin E

**Lean proteins** - Essential for immune cell production

**Beyond food:**
- Get adequate sleep (7-9 hours for adults)
- Exercise regularly but moderately
- Manage stress levels
- Stay hydrated
- Don't smoke and limit alcohol

Remember: No single food or supplement can prevent illness. A balanced approach is best.`,
}

function getAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes("headache") || lowerMessage.includes("head pain") || lowerMessage.includes("migraine")) {
    return sampleResponses.headache
  }
  if (lowerMessage.includes("sleep") || lowerMessage.includes("insomnia") || lowerMessage.includes("tired")) {
    return sampleResponses.sleep
  }
  if (lowerMessage.includes("burn") || lowerMessage.includes("burned")) {
    return sampleResponses.burn
  }
  if (lowerMessage.includes("stress") || lowerMessage.includes("anxiety") || lowerMessage.includes("anxious") || lowerMessage.includes("worried")) {
    return sampleResponses.stress
  }
  if (lowerMessage.includes("throat") || lowerMessage.includes("sore")) {
    return sampleResponses.throat
  }
  if (lowerMessage.includes("immun") || lowerMessage.includes("cold") || lowerMessage.includes("sick") || lowerMessage.includes("food")) {
    return sampleResponses.immunity
  }
  
  return `Thank you for your question about "${message}". 

While I'd love to provide specific guidance, I want to ensure you receive accurate information. Here are some general wellness principles:

**Listen to your body** - Pay attention to what it's telling you and don't ignore persistent symptoms.

**Stay hydrated** - Water is essential for nearly every bodily function.

**Rest when needed** - Your body heals and recovers during rest.

**Eat a balanced diet** - Whole foods, fruits, vegetables, and lean proteins support overall health.

**Move regularly** - Even gentle movement can improve how you feel.

For specific health concerns, I recommend:
1. Checking our **Remedy Library** for detailed guidance on common issues
2. Consulting with a healthcare provider for personalized advice

Is there a specific wellness topic I can help you explore further?`
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getAIResponse(userMessage.content),
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  const handlePromptClick = (prompt: string) => {
    setInput(prompt)
    textareaRef.current?.focus()
  }

  const handleNewChat = () => {
    setMessages([])
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          AI Wellness Assistant
        </h1>
        <p className="mt-2 text-muted-foreground">
          Ask me anything about wellness, home remedies, or general health guidance
        </p>
      </div>

      {/* Chat Messages */}
      <div className="mb-6 flex-1">
        {messages.length === 0 ? (
          <div className="space-y-6">
            <Card className="border-border/60 bg-card/50">
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-medium text-foreground">
                  Suggested Questions
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handlePromptClick(prompt)}
                      className="rounded-xl border border-border/60 bg-background p-4 text-left text-sm text-foreground transition-all hover:border-primary/40 hover:bg-accent"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-4",
                  message.role === "user" && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    message.role === "assistant"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {message.role === "assistant" ? (
                    <Sparkles className="h-5 w-5" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-5 py-4",
                    message.role === "assistant"
                      ? "rounded-tl-sm bg-card border border-border/60"
                      : "rounded-tr-sm bg-primary text-primary-foreground"
                  )}
                >
                  <div
                    className={cn(
                      "prose prose-sm max-w-none",
                      message.role === "assistant"
                        ? "text-foreground prose-headings:text-foreground prose-strong:text-foreground"
                        : "text-primary-foreground prose-headings:text-primary-foreground prose-strong:text-primary-foreground"
                    )}
                  >
                    {message.content.split("\n").map((line, i) => (
                      <p key={i} className={cn("mb-2 last:mb-0", !line && "h-2")}>
                        {line.startsWith("**") && line.endsWith("**") ? (
                          <strong>{line.slice(2, -2)}</strong>
                        ) : line.startsWith("**") ? (
                          <>
                            <strong>{line.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                            {line.replace(/\*\*.*?\*\*/, "")}
                          </>
                        ) : (
                          line || "\u00A0"
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm border border-border/60 bg-card px-5 py-4">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 space-y-4 bg-background pb-4 pt-2">
        {messages.length > 0 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={handleNewChat}
              className="rounded-full"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              New conversation
            </Button>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your health question..."
            className="min-h-[60px] resize-none rounded-2xl border-border/60 bg-card pr-14 text-base shadow-lg shadow-primary/5 focus:shadow-xl focus:shadow-primary/10"
            rows={2}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="absolute bottom-3 right-3 h-10 w-10 rounded-xl"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </form>

        {/* Safety Notice */}
        <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20">
          <CardContent className="flex items-start gap-3 p-4">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <p className="text-xs leading-relaxed text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> This AI provides general wellness information only. 
              It is not a substitute for professional medical advice. For severe or concerning 
              symptoms, please contact a healthcare provider.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
