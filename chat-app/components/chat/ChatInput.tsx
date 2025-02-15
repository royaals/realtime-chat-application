"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Loader2, SendHorizontal, Smile, Paperclip } from "lucide-react"

type ChatMessage = {
  owner: boolean
  content: string
}

interface ChatInputProps {
  appendChat: (message: ChatMessage) => void
}

export default function ChatInput({ appendChat }: ChatInputProps) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setLoading(true)
    try {
      // Simulate sending the message
      await new Promise((resolve) => setTimeout(resolve, 500))
      appendChat({ owner: true, content: message })
      setMessage("")
      inputRef.current?.focus()
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-white rounded-2xl border shadow-sm">
      <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <Smile size={20} />
      </button>
      <input
        ref={inputRef}
        disabled={loading}
        value={message}
        type="text"
        placeholder="Type a message..."
        className="flex-1 bg-transparent placeholder-gray-400 focus:outline-none text-gray-700"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <Paperclip size={20} />
      </button>
      {!loading ? (
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="p-2 bg-primary rounded-xl text-white disabled:opacity-50 transition-opacity hover:bg-primary/90"
        >
          <SendHorizontal size={20} />
        </button>
      ) : (
        <div className="p-2">
          <Loader2 size={20} className="animate-spin text-gray-400" />
        </div>
      )}
    </form>
  )
}

