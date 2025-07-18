"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, FileText, Search, Trophy, History, ArrowLeft, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface TestAttempt {
  id: string
  testId: string
  testTitle: string
  testDescription: string
  startTime: string
  endTime?: string
  timeSpent?: number
  score?: number
  totalQuestions: number
  correctAnswers?: number
  status: "in-progress" | "completed"
  subjects: string[]
}

export default function TestHistoryPage() {
  const router = useRouter()
  const [testHistory, setTestHistory] = useState<TestAttempt[]>([])
  const [filteredHistory, setFilteredHistory] = useState<TestAttempt[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestHistory()
  }, [])

  useEffect(() => {
    filterAndSortHistory()
  }, [testHistory, searchQuery, filterStatus, sortBy])

  const fetchTestHistory = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/model-tests/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch test history")
      }

      const data = await response.json()
      setTestHistory(data)
    } catch (error) {
      console.error("Error fetching test history:", error)
      toast.error("Failed to load test history")
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortHistory = () => {
    const filtered = testHistory.filter((attempt) => {
      // Filter by search query
      if (searchQuery && !attempt.testTitle.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Filter by status
      if (filterStatus === "passed" && (!attempt.score || attempt.score < 70)) {
        return false
      }
      if (filterStatus === "failed" && attempt.score && attempt.score >= 70) {
        return false
      }
      if (filterStatus === "completed" && attempt.status !== "completed") {
        return false
      }
      if (filterStatus === "in-progress" && attempt.status !== "in-progress") {
        return false
      }

      return true
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
        case "date-desc":
          return new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
        case "score-asc":
          return (a.score || 0) - (b.score || 0)
        case "score-desc":
          return (b.score || 0) - (a.score || 0)
        case "title-asc":
          return a.testTitle.localeCompare(b.testTitle)
        case "title-desc":
          return b.testTitle.localeCompare(a.testTitle)
        default:
          return 0
      }
    })

    setFilteredHistory(filtered)
  }

  const handleViewResults = (attemptId: string) => {
    router.push(`/model-test/results/${attemptId}`)
  }

  const handleContinueTest = (testId: string) => {
    router.push(`/model-test/${testId}`)
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const formatDuration = (timeSpent?: number) => {
    if (!timeSpent) return "N/A"
    const minutes = Math.floor(timeSpent / 60)
    return `${minutes} min`
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p>Loading test history...</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <Navbar />

      <div className="container mx-auto py-8 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => router.push("/model-test")}
              className="bg-white/70 backdrop-blur-sm border-emerald-200 hover:bg-emerald-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tests
            </Button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-3">
              <History className="h-8 w-8 text-emerald-600" />
              Test History
            </h1>
          </div>
          <Button
            onClick={() => router.push("/model-test")}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
          >
            <FileText className="h-4 w-4 mr-2" />
            Browse Tests
          </Button>
        </div>

        <Card className="mb-8 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="search" className="text-sm font-medium">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                  <Input
                    id="search"
                    placeholder="Search by test title..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium">
                  Status
                </label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tests</SelectItem>
                    <SelectItem value="passed">Passed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="sort" className="text-sm font-medium">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Date (Newest First)</SelectItem>
                    <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                    <SelectItem value="score-desc">Score (Highest First)</SelectItem>
                    <SelectItem value="score-asc">Score (Lowest First)</SelectItem>
                    <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                    <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {filteredHistory.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <History className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No test history found</h3>
              <p className="text-slate-500 mb-4">
                {searchQuery || filterStatus !== "all"
                  ? "Try adjusting your filters or search query."
                  : "You haven't taken any tests yet."}
              </p>
              {!searchQuery && filterStatus === "all" && (
                <Button
                  onClick={() => router.push("/model-test")}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                >
                  Browse Available Tests
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredHistory.map((attempt) => {
              const isPassed = attempt.score && attempt.score >= 70

              return (
                <Card
                  key={attempt.id}
                  className="overflow-hidden bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-slate-900">{attempt.testTitle}</h3>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatTime(attempt.startTime)}
                          </Badge>

                          {attempt.status === "completed" && attempt.timeSpent && (
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatDuration(attempt.timeSpent)}
                            </Badge>
                          )}

                          {attempt.status === "completed" ? (
                            <Badge
                              className={
                                isPassed
                                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                                  : "bg-red-100 text-red-800 hover:bg-red-200"
                              }
                            >
                              {isPassed ? "Passed" : "Failed"}
                            </Badge>
                          ) : (
                            <Badge className="bg-yellow-100 text-orange-800">In Progress</Badge>
                          )}

                          {attempt.subjects.slice(0, 2).map((subject) => (
                            <Badge key={subject} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-slate-600 line-clamp-2">{attempt.testDescription}</p>
                      </div>

                      <div className="flex flex-col items-end justify-between min-w-[200px]">
                        {attempt.status === "completed" ? (
                          <>
                            <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200">
                              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {attempt.score}%
                              </div>
                              <div className="text-sm text-slate-600 mt-1">
                                {attempt.correctAnswers} of {attempt.totalQuestions} correct
                              </div>
                            </div>

                            <Button
                              onClick={() => handleViewResults(attempt.id)}
                              className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                            >
                              <Trophy className="h-4 w-4 mr-2" />
                              View Results
                            </Button>
                          </>
                        ) : (
                          <Button
                            onClick={() => handleContinueTest(attempt.testId)}
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                          >
                            Continue Test
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
