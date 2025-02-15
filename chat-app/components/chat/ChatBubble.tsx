type Message = {
  owner: boolean
  content: string
}

interface ChatBubbleProps {
  message: Message
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <div className={`flex ${message.owner ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative p-4 rounded-2xl max-w-[70%] shadow-sm ${
          message.owner ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </div>
  )
}

