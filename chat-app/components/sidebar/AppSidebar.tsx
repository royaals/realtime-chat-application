"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState } from "react"
import { useChat } from "@/context/ChatContext"
import { ScrollArea } from "../ui/scroll-area"
import { Plus, MessageSquare } from "lucide-react"

export function AppSidebar() {
  const [chats, setChats] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const storedChats = localStorage.getItem("chats")
      return storedChats ? JSON.parse(storedChats) : ["Chat 1"]
    }
    return ["Chat 1"]
  })

  const { selectedChat, setSelectedChat } = useChat()

  const addChat = () => {
    setChats([...chats, `Chat ${chats.length + 1}`])
    localStorage.setItem("chats", JSON.stringify([...chats, `Chat ${chats.length + 1}`]))
  }

  const handleSelectChat = (index: number) => {
    setSelectedChat(index)
  }

  return (
    <Sidebar className="bg-white border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center justify-between w-full p-4">
              <p className="text-xl font-semibold text-gray-900">Chats</p>
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-4 mb-4">
              <button
                onClick={addChat}
                className="flex items-center justify-center w-full gap-2 p-3 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors"
              >
                <Plus size={18} />
                New Chat
              </button>
            </div>
            <SidebarMenu>
              <ScrollArea className="h-[calc(100vh-180px)]">
                <div className="px-2 space-y-1">
                  {chats.map((chat, index) => (
                    <SidebarMenuItem key={index} onClick={() => handleSelectChat(index)}>
                      <SidebarMenuButton asChild>
                        <div
                          className={`flex items-center gap-3 w-full p-3 rounded-xl transition-colors ${
                            selectedChat === index ? "bg-primary/10 text-primary" : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              selectedChat === index ? "bg-primary/20" : "bg-gray-100"
                            }`}
                          >
                            <MessageSquare size={20} />
                          </div>
                          <div className="flex-1 min-w-0 cursor-pointer">
                            <p className="text-sm font-medium truncate">{chat}</p>
                            <p className="text-xs text-gray-500 truncate">Click to view chat</p>
                          </div>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              </ScrollArea>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

