'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { playfair, inter } from '@/lib/fonts'
import Image from 'next/image'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 overflow-x-hidden">
      <Link href="/">
        <Button variant="ghost" className="mb-8 text-white hover:bg-gray-800">
          Back to Gallery
        </Button>
      </Link>
      
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${playfair.className} text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent animate-multi-hue-gradient`}
        >
          About Esraa ElAyashy
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Image - Full width on mobile, side by side on desktop */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/selfie@27_May_2022.jpg"
                alt="Esraa ElAyashy"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Text content - Full width on mobile, side by side on desktop */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={`${inter.className} space-y-6`}>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-relaxed"
              >
                Esraa ElAyashy is a talented artist and photographer based in Egypt. Her work captures the beauty of Egyptian landscapes, ancient artifacts, and modern life, blending traditional and contemporary elements in her unique artistic style.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 leading-relaxed"
              >
                With a keen eye for detail and a passion for visual storytelling, Esraa creates captivating images that bridge the gap between traditional and contemporary art forms. Her portfolio showcases a diverse range of subjects, from the iconic pyramids of Giza to intimate portraits and still life compositions.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 leading-relaxed"
              >
                Esraa's ability to capture light, shadow, and emotion in her photographs and artwork has earned her recognition in the local art scene and beyond. Her work invites viewers to experience the rich cultural heritage and natural beauty of Egypt through her unique perspective.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
} 