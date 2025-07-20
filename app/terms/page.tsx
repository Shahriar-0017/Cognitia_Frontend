"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Scale, Shield, Book, Users, Star, Sparkles, Zap, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles with Enhanced Animation */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-float-particle opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              backgroundColor: ["#3B82F6", "#6366F1", "#8B5CF6", "#A855F7", "#06B6D4", "#10B981"][i % 6],
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}

        {/* Animated Icons */}
        {Array.from({ length: 12 }).map((_, i) => {
          const icons = [Star, Heart, Lightbulb, Sparkles, Zap, Book]
          const IconComponent = icons[i % icons.length]
          return (
            <div
              key={`icon-${i}`}
              className="absolute text-white/20 animate-float-enhanced"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
              }}
            >
              <IconComponent className="h-5 w-5" />
            </div>
          )
        })}

        {/* Enhanced Gradient Waves */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30 animate-gradient-flow"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-indigo-600/25 via-transparent to-cyan-600/25 animate-gradient-flow-reverse"></div>
        </div>

        {/* Enhanced Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-400/40 rotate-45 animate-rotate-smooth"></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-full animate-pulse-smooth"></div>
        <div className="absolute top-60 right-20 w-20 h-20 border-2 border-indigo-400/30 rounded-full animate-scale-smooth"></div>

        {/* Enhanced Smooth Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/25 to-indigo-600/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Back Button with Animation */}
      <div className="absolute top-6 left-6 z-20">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
        >
          <Link href="/register" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2 animate-pulse" />
            Back to Register
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12">
        <Card
          className={`w-full max-w-4xl bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl transform transition-all duration-1000 hover:shadow-3xl ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <CardHeader className="space-y-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg animate-pulse-smooth hover:animate-bounce transition-all duration-300">
                <Scale className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent animate-gradient-text">
              Terms of Service
            </CardTitle>
            <CardDescription className="text-blue-200 text-lg max-w-2xl mx-auto">
              Welcome to Cognitia - Your AI-Powered Learning Platform. Please read these terms carefully before using our services.
            </CardDescription>
            <div className="text-sm text-blue-300">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </CardHeader>

          <CardContent className="space-y-8 max-h-[70vh] overflow-y-auto">
            {/* Section 1: Introduction */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg">
                  <Book className="h-5 w-5 text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  Welcome to Cognitia ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered learning platform, including our website, mobile applications, and all related services (collectively, the "Service").
                </p>
                <p>
                  By accessing or using Cognitia, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Service.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 2: Description of Service */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Sparkles className="h-5 w-5 text-purple-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Description of Service</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  Cognitia is an AI-powered learning platform that provides:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Interactive study materials and personalized learning paths</li>
                  <li>AI-driven assessments and progress tracking</li>
                  <li>Collaborative learning through contests and Q&A sessions</li>
                  <li>Note-taking and study planning tools</li>
                  <li>Community features for peer-to-peer learning</li>
                </ul>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 3: User Accounts */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-green-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. User Accounts</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  To access certain features of our Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 4: Acceptable Use */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
                  <Shield className="h-5 w-5 text-yellow-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Acceptable Use</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Transmit or post any harmful, threatening, or offensive content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to access the Service without permission</li>
                  <li>Share your account credentials with others</li>
                </ul>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 5: Intellectual Property */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-cyan-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Intellectual Property Rights</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  The Service and its original content, features, and functionality are owned by Cognitia and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You retain ownership of content you create and submit to our platform, but grant us a license to use, modify, and display such content in connection with providing the Service.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 6: Payment Terms */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg">
                  <Zap className="h-5 w-5 text-emerald-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Payment and Subscription Terms</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  Some features of our Service may require payment. By purchasing a subscription or premium features:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You agree to pay all charges associated with your account</li>
                  <li>All payments are non-refundable unless required by law</li>
                  <li>We may change our pricing with 30 days' notice</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>We reserve the right to suspend access for non-payment</li>
                </ul>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 7: Privacy */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg">
                  <Heart className="h-5 w-5 text-pink-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Privacy</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
                <p>
                  By using our Service, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 8: Limitation of Liability */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg">
                  <Shield className="h-5 w-5 text-red-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  In no event shall Cognitia, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses.
                </p>
                <p>
                  Our total liability to you for all claims arising from the use of our Service shall not exceed the amount you paid to us in the twelve months preceding the claim.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 9: Termination */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                  <Scale className="h-5 w-5 text-orange-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Termination</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
                <p>
                  You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 10: Changes to Terms */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg">
                  <Book className="h-5 w-5 text-indigo-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">10. Changes to Terms</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Service.
                </p>
                <p>
                  Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-teal-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">11. Contact Information</h2>
              </div>
              <div className="pl-10 space-y-3 text-blue-100">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p><strong>Email:</strong> legal@cognitia.com</p>
                  <p><strong>Address:</strong> Cognitia Learning Platform</p>
                  <p><strong>Support:</strong> support@cognitia.com</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-blue-300 text-sm">
                By using Cognitia, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <div className="mt-4">
                <Link href="/privacy" className="text-white hover:text-blue-200 underline transition-colors duration-300 mr-4">
                  Privacy Policy
                </Link>
                <Link href="/register" className="text-white hover:text-blue-200 underline transition-colors duration-300">
                  Back to Registration
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
