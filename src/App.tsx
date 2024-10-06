import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { ChatMessages } from './components/ChatMessages'
import { MessageInput } from './components/MessageInput'


interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Conversation {
  id: string
  title: string
}

export default function App() {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: '1', title: 'Chat History 1' },
    { id: '2', title: 'Chat History 2' },
  ])
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { role: 'user', content: inputMessage }])
      setInputMessage('')
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: 'This is a simulated AI response.' }])
      }, 1000)
    }
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const addConversation = () => setConversations([...conversations, { id: String(conversations.length + 1), title: `New Chat ${conversations.length + 1}` }])

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar conversations={conversations} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} addConversation={addConversation} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <ChatMessages messages={messages} setInputMessage={setInputMessage} />
        <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}
