"use client"

import { useRouter } from "next/navigation"

import { SidebarTrigger } from "../ui/sidebar"
import { Search, Bell } from "lucide-react"

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold text-gray-900">ChatBOT</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-600">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-600">
          <Bell size={20} />
        </button>
        
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  )
}

