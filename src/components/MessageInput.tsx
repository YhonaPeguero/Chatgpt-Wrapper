import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Send } from 'lucide-react'

interface MessageInputProps {
  inputMessage: string
  setInputMessage: (input: string) => void
  handleSendMessage: () => void
}

export function MessageInput({ inputMessage, setInputMessage, handleSendMessage }: MessageInputProps) {
  return (
    <div className="p-4 bg-gray-800 border-t border-gray-700">
      <div className="flex space-x-2 max-w-4xl mx-auto">
        <Input
          type="text"
          placeholder="Send a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
        <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
