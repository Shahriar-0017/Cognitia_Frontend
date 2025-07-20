"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Edit, MapPin, Mail, User, GraduationCap, Loader2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  institution?: string
  location?: string
  joinedAt: string
  isVerified: boolean
  role?: string
  website?: string
  major?: string
  graduationYear?: number
}

export default function ProfilePage() {
  const router = useRouter()
  const { toast } = useToast()

  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch user profile data
  const fetchProfile = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("token")

      if (!token) {
        router.push("/login")
        return
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          router.push("/login")
          return
        }
        throw new Error("Failed to fetch profile data")
      }

      const data = await response.json()
      setUser(data.user)
    } catch (error) {
      console.error("Error fetching profile:", error)
      toast({
        title: "Error",
        description: "Failed to load profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-white/20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Loading profile...</span>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <User className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">Profile Not Found</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Unable to load your profile information. Please check your connection and try again.</p>
                <Button 
                  onClick={fetchProfile}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🔄 Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-t-lg h-32"></div>
            <CardContent className="pt-6 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mt-16">
                <Avatar className="h-32 w-32 border-4 border-white shadow-xl ring-4 ring-blue-100">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold">
                    {user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent flex items-center justify-center md:justify-start">
                        {user.name}
                        {user.isVerified && (
                          <Badge variant="secondary" className="ml-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-lg">
                            ✓ Verified
                          </Badge>
                        )}
                      </h1>
                      {user.role && (
                        <Badge variant="outline" className="mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-1 text-sm font-medium shadow-md">
                          {user.role}
                        </Badge>
                      )}
                    </div>
                    {/* <Button className="mt-6 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button> */}
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-center md:justify-start text-gray-700 bg-white/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <Mail className="h-5 w-5 mr-3 text-blue-500" />
                      <span className="font-medium">{user.email}</span>
                    </div>
                    
                    {user.institution && (
                      <div className="flex items-center justify-center md:justify-start text-gray-700 bg-white/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <GraduationCap className="h-5 w-5 mr-3 text-purple-500" />
                        <span className="font-medium">{user.institution}</span>
                      </div>
                    )}
                    
                    {user.location && (
                      <div className="flex items-center justify-center md:justify-start text-gray-700 bg-white/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <MapPin className="h-5 w-5 mr-3 text-red-500" />
                        <span className="font-medium">{user.location}</span>
                      </div>
                    )}
                    
                    {user.major && (
                      <div className="flex items-center justify-center md:justify-start text-gray-700 bg-white/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <BookOpen className="h-5 w-5 mr-3 text-green-500" />
                        <span className="font-medium">{user.major}</span>
                      </div>
                    )}
                    
                    {user.graduationYear && (
                      <div className="flex items-center justify-center md:justify-start text-gray-700 bg-white/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <Calendar className="h-5 w-5 mr-3 text-orange-500" />
                        <span className="font-medium">Graduation Year: {user.graduationYear}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-center md:justify-start text-gray-700 bg-white/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <Calendar className="h-5 w-5 mr-3 text-indigo-500" />
                      <span className="font-medium">Joined {formatDate(user.joinedAt)}</span>
                    </div>
                  </div>
                  
                  {user.bio && (
                    <div className="mt-6">
                      <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/20 shadow-sm">
                        <p className="text-gray-800 leading-relaxed italic">{user.bio}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Simple Account Information Card */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-t-lg border-b border-gray-100">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent flex items-center">
                <User className="h-6 w-6 mr-3 text-blue-500" />
                Account Information
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">Your basic account details and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                  <label className="text-sm font-semibold text-green-700 uppercase tracking-wide">Account Status</label>
                  <div className="mt-2">
                    <Badge 
                      variant={user.isVerified ? "default" : "secondary"} 
                      className={user.isVerified 
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-md px-3 py-1" 
                        : "bg-gradient-to-r from-gray-400 to-gray-500 text-white border-0 shadow-md px-3 py-1"
                      }
                    >
                      {user.isVerified ? "✓ Verified" : "⚠ Unverified"}
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                  <label className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Member Since</label>
                  <p className="mt-2 text-lg font-medium text-blue-900">{formatDate(user.joinedAt)}</p>
                </div>
                
                {user.website && (
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-100">
                    <label className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Website</label>
                    <p className="mt-2 text-lg font-medium text-purple-900 hover:text-purple-600 cursor-pointer transition-colors">{user.website}</p>
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-100">
                  <label className="text-sm font-semibold text-orange-700 uppercase tracking-wide">Role</label>
                  <p className="mt-2 text-lg font-medium text-orange-900">{user.role || "Student"}</p>
                </div>
              </div>
              
              <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  onClick={() => router.push("/profile/edit")}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3"
                >
                  <Edit className="h-5 w-5 mr-2" />
                  Edit Profile
                </Button>
                <Button
                  onClick={()=>router.push("/profile/change-password")}
                  className="w-full bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3">
                  🔒 Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
