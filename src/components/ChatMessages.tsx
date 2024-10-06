import { ScrollArea } from "./ui/scroll-area"
import { MessageCircle } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatMessagesProps {
  messages: Message[]
  setInputMessage: (input: string) => void
}

export function ChatMessages({ messages, setInputMessage }: ChatMessagesProps) {
  return (
    <ScrollArea className="flex-1 p-4">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="mb-8 text-blue-400">
            <MessageCircle size={64} />
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-2xl w-full">
            {[
              'Create a task description', 
              'Design a functional spec',
              'Break down project steps', 
              'Outline project objectives'
            ].map((suggestion, index) => (
              <button 
                key={index} 
                className="w-full py-6 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-blue-500 transition-all duration-200"
                onClick={() => setInputMessage(suggestion)}
              >
                <span className="text-lg font-medium text-gray-300">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'} max-w-[80%] break-words`}>
              {message.content}
            </div>
          </div>
        ))
      )}
    </ScrollArea>
  )
}
