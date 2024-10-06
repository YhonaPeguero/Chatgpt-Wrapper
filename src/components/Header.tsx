import { Button } from "./ui/button"
import { Menu } from 'lucide-react'

interface HeaderProps {
  toggleSidebar: () => void
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
      <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-700" onClick={toggleSidebar}>
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white text-center w-full">
  AI Assistant
</h1>
      <div className="w-10" />
    </header>
  )
}
