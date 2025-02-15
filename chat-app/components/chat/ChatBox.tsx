"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import io, { type Socket } from "socket.io-client"
import { useChat } from "../../context/ChatContext"

type ChatMessage = {
  owner: boolean
  content: string
}

export default function ChatBox() {
  const [chat, setChat] = useState<ChatMessage[]>([])
  const [socket, setSocket] = useState<Socket | null>(null)
  const router = useRouter()
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const { selectedChat } = useChat()

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" })
  }, [])

  const appendChat = useCallback((message: ChatMessage) => {
    setChat((prevChat) => {
      const updatedChat = [...prevChat, message]
      if (typeof window !== "undefined") {
        const user = localStorage.getItem("user")
        if (user) {
          const { id } = JSON.parse(user)
          localStorage.setItem(`chatMessages_${selectedChat}-${id}`, JSON.stringify(updatedChat))
        }
      }
      return updatedChat
    })
    scrollToBottom()
  }, [selectedChat, scrollToBottom])

  const sendMessage = useCallback((message: ChatMessage) => {
    appendChat(message)
    if (!socket) return
    socket.emit("message", message)
  }, [socket, appendChat])

  useEffect(() => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (!token || !user) {
      router.push("/")
      return
    }

    const socketConnection = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL || '', {
      transports: ["websocket"],
    })
    setSocket(socketConnection)

    socketConnection.on("message", (message: ChatMessage) => {
      appendChat(message)
    })

    return () => {
      socketConnection.disconnect()
    }
  }, [router, appendChat])

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) return

    const { id } = JSON.parse(user)
    const storedChat = localStorage.getItem(`chatMessages_${selectedChat}-${id}`)
    if (storedChat) {
      setChat(JSON.parse(storedChat))
    } else {
      setChat([])
    }
  }, [selectedChat])

  return (
    <div className="relative flex flex-col h-[90vh] bg-chat-gradient">
      <div className="flex-grow overflow-y-auto px-4 pb-4 sm:px-6 lg:px-8">
        <div className="space-y-4 py-4">
          {chat.map((message, index) => (
            <ChatBubble key={index} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full p-4 bg-chat-darker">
        <ChatInput appendChat={sendMessage} />
      </div>
    </div>
  )
}