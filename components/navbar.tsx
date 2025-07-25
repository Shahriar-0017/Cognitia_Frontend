"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useUser } from "@/contexts/user-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationDropdown } from "@/components/notification-dropdown"
import { BookOpen, Brain, Home, MessageSquare, Settings, Trophy, User, Menu, X, Target } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Notes", href: "/notes", icon: BookOpen },
  { name: "Q&A", href: "/qa", icon: MessageSquare },
  { name: "Model Test", href: "/model-test", icon: Brain },
  { name: "Contests", href: "/contests", icon: Trophy },
  { name: "Study Plan", href: "/study-plan", icon: Target },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, loading, logout } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [loading, user, router])

  if (loading) {
    return <nav className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50" />
  }

  if (!user) {
    return null
  }

  return (
    <nav className="bg-white backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Cognitia
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center space-x-2 ${isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <NotificationDropdown />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 p-0 rounded-full">
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    <Avatar className="h-8 w-8 rounded-full bg-white">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-purple-500 text-white text-sm">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col px-1.5 pt-1 pb-2">
                    {/* User Name */}
                    <p className="text-sm font-bold leading-none bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      {user.name}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-muted my-1" />

                    {/* Email */}
                    <p className="text-xs leading-none bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      {user.email}
                    </p>

                    {/* Optional Institution */}
                    {user.institution && (
                      <>
                        <div className="border-t border-muted my-1" />
                        <p className="text-xs leading-none bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent animate-gradient">
                          {user.institution}
                        </p>
                      </>
                    )}
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Profile */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent animate-gradient"
                  >
                    <User className="mr-2 h-4 w-4 text-white" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>

                {/* Settings */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/settings"
                    className="flex items-center bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent animate-gradient"
                  >
                    <Settings className="mr-2 h-4 w-4 text-white" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={logout}
                  className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent animate-gradient"
                >
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>

            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start ${isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
