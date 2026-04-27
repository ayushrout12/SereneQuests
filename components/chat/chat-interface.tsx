"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, UIMessage } from "ai"
import { Send, Sparkles, User, Shield, Loader2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const suggestedPrompts = [
  "What are some natural remedies for headaches?",
  "How can I improve my sleep quality?",
  "What should I do for a minor burn?",
  "Tips for reducing stress and anxiety",
  "How do I treat a sore throat at home?",
  "What foods help boost immunity?",
]

function getMessageText(message: UIMessage): string {
  if (!message.parts || !Array.isArray(message.parts)) return ""
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

function formatMessageContent(content: string) {
  const lines = content.split("\n")
  
  return lines.map((line, i) => {
    // Handle headers
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-4 mb-2 font-semibold text-base">
          {line.slice(4)}
        </h3>
      )
    }
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-4 mb-2 font-semibold text-lg">
          {line.slice(3)}
        </h2>
      )
    }
    
    // Handle bullet points
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const bulletContent = line.slice(2)
      return (
        <li key={i} className="ml-4 mb-1">
          {formatInlineStyles(bulletContent)}
        </li>
      )
    }
    
    // Handle numbered lists
    const numberedMatch = line.match(/^(\d+)\.\s(.*)/)
    if (numberedMatch) {
      return (
        <li key={i} className="ml-4 mb-1 list-decimal">
          {formatInlineStyles(numberedMatch[2])}
        </li>
      )
    }
    
    // Empty lines
    if (!line.trim()) {
      return <div key={i} className="h-2" />
    }
    
    // Regular paragraphs
    return (
      <p key={i} className="mb-2 last:mb-0">
        {formatInlineStyles(line)}
      </p>
    )
  })
}

function formatInlineStyles(text: string) {
  // Handle bold text with **
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function ChatInterface() {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userInput = input.trim()
    setInput("")
    sendMessage({ text: userInput })
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
            {messages.map((message) => {
              const messageText = getMessageText(message)
              
              return (
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
                      {message.role === "assistant" ? (
                        formatMessageContent(messageText)
                      ) : (
                        <p>{messageText}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
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
            disabled={isLoading}
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
