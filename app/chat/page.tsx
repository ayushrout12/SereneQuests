import { Metadata } from "next"
import { ChatInterface } from "@/components/chat/chat-interface"

export const metadata: Metadata = {
  title: "AI Wellness Assistant - SereneQuests",
  description: "Get personalized wellness guidance from our AI assistant. Ask questions about common health concerns, home remedies, and general wellness tips.",
}

export default function ChatPage() {
  return (
    <div className="flex flex-col">
      <ChatInterface />
    </div>
  )
}
