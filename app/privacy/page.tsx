"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Eye, Lock, Database, Settings, Users, Star, Sparkles, Zap, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
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
              backgroundColor: ["#10B981", "#06B6D4", "#14B8A6", "#0891B2", "#059669", "#0D9488"][i % 6],
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}

        {/* Animated Icons */}
        {Array.from({ length: 12 }).map((_, i) => {
          const icons = [Shield, Lock, Eye, Database, Star, Heart]
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/30 via-transparent to-teal-600/30 animate-gradient-flow"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-cyan-600/25 via-transparent to-blue-600/25 animate-gradient-flow-reverse"></div>
        </div>

        {/* Enhanced Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-emerald-400/40 rotate-45 animate-rotate-smooth"></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full animate-pulse-smooth"></div>
        <div className="absolute top-60 right-20 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-scale-smooth"></div>

        {/* Enhanced Smooth Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-600/25 to-teal-600/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
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
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-lg animate-pulse-smooth hover:animate-bounce transition-all duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent animate-gradient-text">
              Privacy Policy
            </CardTitle>
            <CardDescription className="text-emerald-200 text-lg max-w-2xl mx-auto">
              Your privacy is fundamental to us. Learn how we collect, use, and protect your personal information on Cognitia.
            </CardDescription>
            <div className="text-sm text-emerald-300">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </CardHeader>

          <CardContent className="space-y-8 max-h-[70vh] overflow-y-auto">
            {/* Section 1: Introduction */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg">
                  <Eye className="h-5 w-5 text-emerald-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  At Cognitia, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered learning platform.
                </p>
                <p>
                  By using Cognitia, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our services.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 2: Information We Collect */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <Database className="h-5 w-5 text-cyan-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              </div>
              <div className="pl-10 space-y-4 text-emerald-100">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, and profile information</li>
                    <li>Account credentials and authentication data</li>
                    <li>Educational background and learning preferences</li>
                    <li>Communication preferences and settings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Learning Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Course progress and completion status</li>
                    <li>Quiz scores, assessment results, and performance analytics</li>
                    <li>Study patterns and learning behavior</li>
                    <li>Notes, annotations, and user-generated content</li>
                    <li>Interaction with AI-powered features and recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device type, operating system, and browser information</li>
                    <li>IP address and approximate location data</li>
                    <li>Usage logs and interaction patterns</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 3: How We Use Your Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Settings className="h-5 w-5 text-purple-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our learning platform services</li>
                  <li>Personalize your learning experience with AI-driven recommendations</li>
                  <li>Track your progress and provide performance analytics</li>
                  <li>Enable social features like contests and Q&A sessions</li>
                  <li>Send important updates about your account and courses</li>
                  <li>Improve our platform through data analysis and user feedback</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 4: Information Sharing */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-yellow-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Information Sharing and Disclosure</h2>
              </div>
              <div className="pl-10 space-y-4 text-emerald-100">
                <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">With Your Consent</h3>
                  <p>When you explicitly authorize us to share specific information.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                  <p>With trusted third-party service providers who assist us in operating our platform, such as cloud hosting, analytics, and payment processing services.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                  <p>When required by law, court order, or to protect our rights, property, or safety, or that of our users or others.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                  <p>In connection with any merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                </div>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 5: Data Security */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg">
                  <Lock className="h-5 w-5 text-red-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 6: Data Retention */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg">
                  <Database className="h-5 w-5 text-indigo-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  We retain your personal information only as long as necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide you with our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our platform and services</li>
                </ul>
                <p>
                  When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 7: Your Rights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
                  <Shield className="h-5 w-5 text-green-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Your Privacy Rights</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Restriction:</strong> Request limitation of processing of your information</li>
                  <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 8: Cookies and Tracking */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <Eye className="h-5 w-5 text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Cookies and Tracking Technologies</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure platform security and functionality</li>
                </ul>
                <p>
                  You can manage cookie preferences through your browser settings, but some features may not function properly if cookies are disabled.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 9: Children's Privacy */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg">
                  <Heart className="h-5 w-5 text-pink-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Children's Privacy</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
                </p>
                <p>
                  For users between 13 and 18, we recommend parental guidance when using our platform.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 10: International Data Transfers */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg">
                  <Zap className="h-5 w-5 text-teal-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">10. International Data Transfers</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                </p>
                <p>
                  By using our service, you consent to the transfer of your information to countries that may have different data protection laws than your jurisdiction.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Section 11: Changes to Privacy Policy */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                  <Settings className="h-5 w-5 text-orange-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">11. Changes to This Privacy Policy</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Sending you an email notification</li>
                  <li>Providing notice through our platform</li>
                </ul>
                <p>
                  Changes become effective when posted. Your continued use of our service after changes are made constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            <Separator className="bg-white/20" />

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-violet-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
              </div>
              <div className="pl-10 space-y-3 text-emerald-100">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p><strong>Email:</strong> privacy@cognitia.com</p>
                  <p><strong>Data Protection Officer:</strong> dpo@cognitia.com</p>
                  <p><strong>Address:</strong> Cognitia Learning Platform</p>
                  <p><strong>Support:</strong> support@cognitia.com</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-emerald-300 text-sm">
                Your privacy matters to us. We are committed to protecting your personal information and being transparent about our data practices.
              </p>
              <div className="mt-4">
                <Link href="/terms" className="text-white hover:text-emerald-200 underline transition-colors duration-300 mr-4">
                  Terms of Service
                </Link>
                <Link href="/register" className="text-white hover:text-emerald-200 underline transition-colors duration-300">
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
