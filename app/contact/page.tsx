'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { playfair, inter } from '@/lib/fonts'
import { useState } from 'react'
import { Send, CheckCircle, Mail, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link href="/">
        <Button variant="ghost" className="mb-8 text-white hover:bg-gray-800">
          Back to Gallery
        </Button>
      </Link>
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${playfair.className} text-5xl font-bold mb-8 text-transparent animate-multi-hue-gradient`}
        >
          Get in Touch
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className={`${inter.className}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="text-2xl font-semibold mb-4"
              >
                Let's Connect
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-gray-300 mb-6"
              >
                I'd love to hear from you! Whether you're interested in my artwork, 
                photography, or just want to say hello, feel free to reach out.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">esraaelayashy@gmail.com</p>
                  </div>
                </div>
                <div className="tooltip-container group relative">
                  <div className="tooltip-content">
                    <div className="profile-card">
                      <div className="user-info">
                        <div className="avatar-wrapper">
                          <Image 
                            src="./images/main.jpg" 
                            alt="Esraa ElAyashy"
                            width={50}
                            height={50}
                            className="rounded-xl object-cover"
                          />
                        </div>
                        <div className="details">
                          <div className="name">Esraa ElAyashy</div>
                          <div className="username">@esraa_elayashy</div>
                        </div>
                      </div>
                      <div className="about">
                        <p>- Egyptian 🇪🇬</p>
                        <p>- Artist & Photographer ✨</p>
                        <p>- Beauty is all around, if u just open ur heart to see ♥️</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="https://www.instagram.com/esraa_elayashy/" 
                    target="_blank"
                    className="instagram-link"
                  >
                    <div className="icon-layers">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="icon-layer" />
                      ))}
                      <Instagram className="h-5 w-5 relative z-10" />
                    </div>
                    <span className="icon-text">Follow on Instagram</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800 p-6 rounded-lg transform-gpu hover:scale-[0.99] transition-all duration-300"
          >
            <form className={`${inter.className} space-y-4`} onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  className="bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  className="bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  className="bg-gray-700 border-gray-600 min-h-[150px] focus:ring-2 focus:ring-blue-500" 
                  required
                />
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Message Sent
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 