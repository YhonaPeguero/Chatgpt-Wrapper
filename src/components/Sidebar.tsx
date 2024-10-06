import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { PlusCircle, MessageSquare, ChevronLeft } from 'lucide-react'

interface Conversation {
  id: string
  title: string
}

interface SidebarProps {
  conversations: Conversation[]
  isSidebarOpen: boolean
  toggleSidebar: () => void
  addConversation: () => void
}

export function Sidebar({ conversations, isSidebarOpen, toggleSidebar, addConversation }: SidebarProps) {
  return (
    <div className={`w-64 bg-gray-800 p-5 border-r border-gray-700 overflow-y-auto ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Chats</h2>
        <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-700" onClick={toggleSidebar}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <Button 
        variant="outline" 
        className="mb-4 w-full justify-start text-white bg-gray-700 hover:bg-gray-600 border-2 border-blue-500 transition-all duration-200" 
        onClick={addConversation}
      >
        <PlusCircle className="mr-2 h-4 w-4 text-blue-500" /> 
        <span className="font-semibold">New Chat</span>
      </Button>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {conversations.map((conv) => (
          <Button key={conv.id} variant="ghost" className="w-full justify-start mb-1 text-gray-300 hover:text-white hover:bg-gray-700">
            <MessageSquare className="mr-2 h-4 w-4" />
            <span className="truncate">{conv.title}</span>
          </Button>
        ))}
      </ScrollArea>
    </div>
  )
}
