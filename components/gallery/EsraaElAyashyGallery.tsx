'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, X, User, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { inter, playfair, ibmPlexArabic } from '@/lib/fonts'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { ElAyashyLoader } from '@/components/ui/ElAyashyLoader'

// Define type for image object
type ImageType = {
  src: string
  alt: string
  date: string
  description: string
  category: string
  isArabic?: boolean
}

// Move images array outside component to prevent recreation on each render
const images: ImageType[] = [
  {
    src: "/images/1@January_28_2015.jpg",
    alt: "Sunset view over the Nile River",
    date: "January 28, 2015",
    description: "Taken by Me 🙈❤",
    category: "Landscape"
  },
  {
    src: "/images/2@November_21_2016.jpg",
    alt: "Seashells with decorative sandal",
    date: "November 21, 2016",
    description: "Beach 🌞🌊🐚",
    category: "Still Life"
  },
  {
    src: "/images/3@December_2_2017.jpg",
    alt: "Pink flower held in hand",
    date: "December 2, 2017",
    description: "💜 `` 🌸 ,, 💙",
    category: "Nature"
  },
  {
    src: "/images/4@February_6_2018.jpg",
    alt: "Blue butterfly artwork",
    date: "February 6, 2018",
    description: "فراشتي 🙈💙",
    category: "Art",
    isArabic: true
  },
  {
    src: "/images/5@March_3_2018.jpg",
    alt: "Clouds through tree silhouettes",
    date: "March 3, 2018",
    description: "☁💙",
    category: "Nature"
  },
  {
    src: "/images/6@November_19_2018.jpg",
    alt: "Sketch of heart and gramophone",
    date: "November 19, 2018",
    description: "Heart beats with the most beautiful tunes when u r surrounded by ur favourite people .. 💜🎶",
    category: "Art"
  },
  {
    src: "/images/7@April_5_2021.jpg",
    alt: "Hand with dandelion tattoo and pyramids",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/8@April_5_2021.jpg",
    alt: "Pyramids view from golf course",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/9@April_5_2021.jpg",
    alt: "Close-up of pyramid stones",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/10@April_5_2021.jpg",
    alt: "Pyramid architectural detail",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/11@April_5_2021.jpg",
    alt: "Pyramids at sunset",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/12@April_5_2021.jpg",
    alt: "Pyramids with stars",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/13@April_5_2021.jpg",
    alt: "Pyramids with camels",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/14@April_5_2021.jpg",
    alt: "Pyramids with tourists",
    date: "April 5, 2021",
    description: "One of the seven ancient wonders of the world, the great pyramids of Giza are marvelous feats of architecture 🤩 Here is Egypt 🇪🇬, the mother of the world and the country of civilization Proud to be Egyptian ♥️",
    category: "Travel"
  },
  {
    src: "/images/15@April_7_2021.jpg",
    alt: "Pyramids with sunset",
    date: "April 7, 2021",
    description: "✨🏙 كلمة حلوة و كلمتين حلوة يا بلدي",
    category: "Travel"
  },
  {
    src: "/images/16@April_7_2021.jpg",
    alt: "Pyramids with night sky",
    date: "April 7, 2021",
    description: "✨🏙 كلمة حلوة و كلمتين حلوة يا بلدي",
    category: "Travel"
  },
  {
    src: "/images/17@May_5_2021.jpg",
    alt: "Artistic view of pyramids",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/18@May_5_2021.jpg",
    alt: "Pyramids with clouds",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/19@May_5_2021.jpg",
    alt: "Pyramids with sunset",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/20@May_5_2021.jpg",
    alt: "Pyramids with stars",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/21@May_5_2021.jpg",
    alt: "Pyramids with tourists",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/22@May_5_2021.jpg",
    alt: "Pyramids with camels",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/23@May_5_2021.jpg",
    alt: "Pyramids with sunset",
    date: "May 5, 2021",
    description: "A picture is a poem without words ... 🌌💙 \n -Horace",
    category: "Art"
  },
  {
    src: "/images/24@May_6_2021.jpg",
    alt: "Starry night",
    date: "May 6, 2021",
    description: "Starry night 🌌 What is done in love is done well ! 💙",
    category: "Nature"
  },
  {
    src: "/images/25@May_10_2021.jpg",
    alt: "Sunset view",
    date: "May 10, 2021",
    description: "I like people who get excited about watching a sunset, the sound of the ocean, the smell of rain, and starry nights ✨ \n— Brooke Hampton",
    category: "Nature"
  },
  {
    src: "/images/26@May_14_2021.png",
    alt: "Sketch",
    date: "May 14, 2021",
    description: "One of my favorite sketches ✨",
    category: "Art"
  },
  {
    src: "/images/27@May_28_2021.jpg",
    alt: "Flower",
    date: "May 28, 2021",
    description: "Sabır çiçektir, mutlaka açar. 🌺",
    category: "Nature"
  },
  {
    src: "/images/28@June_25_2021.jpg",
    alt: "Elegance",
    date: "June 25, 2021",
    description: "Elegance means being beautiful both on the inside and out ✨💜 \n -Coco Chanel",
    category: "Art"
  },
  {
    src: "/images/29@July_9_2021.jpg",
    alt: "Life",
    date: "July 9, 2021",
    description: "Ben istiyorum ki yorulmadan, yormadan yasayalim. Icimizde suphe olmadan sevip sevilelim. Beraberken de ozgur olunabilsin. Insanlar birbirlerini taniyabilsin. Kalbinden emin olarak yasamanin guzelligini elimizin tersiyle itmeyelim. 🌷✨",
    category: "Life"
  },
  {
    src: "/images/30@July_31_2021.jpg",
    alt: "Beach",
    date: "July 31, 2021",
    description: "To escape and sit quietly on the beach - that's my idea of paradise ✨💙",
    category: "Nature"
  },
  {
    src: "/images/31@September_11_2021.jpg",
    alt: "Sunrise",
    date: "September 11, 2021",
    description: "The sky takes on shades of orange during sunrise and sunset, the colour that gives u hope that the sun will set only to rise again 🌅",
    category: "Nature"
  },
  {
    src: "/images/32@October_21_2021.jpg",
    alt: "Hope",
    date: "October 21, 2021",
    description: "Umut et, ama beklentin olmasın. O zaman belki hayal kırıklığı yerine bir mucize yaşarsın.✨",
    category: "Hope"
  },
  {
    src: "/images/33@January_1_2022.jpg",
    alt: "Limitless",
    date: "January 1, 2022",
    description: "The artist's world is limitless ... ✨",
    category: "Art"
  },
  {
    src: "/images/34@January_19_2022.jpg",
    alt: "Museum",
    date: "January 19, 2022",
    description: "A visit to a museum is a search for beauty, truth, and meaning in our lives. Go to museums as often as u can ✨ \n— Maira Kalman",
    category: "Art"
  },
  {
    src: "/images/35@May_13_2022.jpg",
    alt: "Thalassophile",
    date: "May 13, 2022",
    description: "Thalassophile 🌊🤍",
    category: "Nature"
  },
  {
    src: "/images/36@August_7_2022.jpg",
    alt: "Silent hour",
    date: "August 7, 2022",
    description: "I love the silent hour of night, For blissful dreams may then arise, Revealing to my charmed sight What may not bless my waking eyes. 🌌✨ \n— Anne Brontë",
    category: "Nature"
  },
  {
    src: "/images/36_2@August_7_2022.jpg",
    alt: "Silent hour",
    date: "August 7, 2022",
    description: "I love the silent hour of night, For blissful dreams may then arise, Revealing to my charmed sight What may not bless my waking eyes. 🌌✨ \n— Anne Brontë",
    category: "Nature"
  },
  {
    src: "/images/1_facebook@3_March_2018.jpg",
    alt: "Placeholder",
    date: "March 3, 2018",
    description: "Placeholder description for Facebook Image 1",
    category: "Category Placeholder"
  },
  {
    src: "/images/2_facebook@29_March_2018.jpg",
    alt: "Placeholder",
    date: "March 29, 2018",
    description: "🌌 وارزقنا راحة البال وحياة مليئة بكل ما يرضيك",
    category: "Category Placeholder",
    isArabic: true
  },
  {
    src: "/images/3_facebook@14_April_2018.jpg",
    alt: "Placeholder",
    date: "March 29, 2018",
    description: "Placeholder description for Facebook Image 3",
    category: "Category Placeholder"
  },
  {
    src: "/images/4_facebook@29_June_2018.jpg",
    alt: "Placeholder",
    date: "June 29, 2018",
    description: "حين تعثر على الجمال في قلبك ستعثر عليه في كل قلب 💜",
    category: "Category Placeholder",
    isArabic: true
  },
  {
    src: "/images/5_facebook@31_January_2019.jpg",
    alt: "Placeholder",
    date: "January 31, 2018",
    description: "ببطء.. لكن بثبات وبنفس الطريقة التي يحول بها الخريف شكل الغابة، حولتني آلاف التغييرات الصغيرة إلى شخص آخر",
    category: "Category Placeholder",
    isArabic: true
  },
  {
    src: "/images/6_facebook@21_June_2019.jpg",
    alt: "Placeholder",
    date: "June 21, 2019",
    description: "Placeholder description for Facebook Image 6",
    category: "Category Placeholder"
  },
  {
    src: "/images/7_facebook@16_July_2016.jpg",
    alt: "Placeholder",
    date: "June 21, 2019",
    description: "Placeholder description for Facebook Image 7",
    category: "Category Placeholder"
  },
]

// Sort images once outside component
const sortedImages = [...images].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

// Get unique categories once
const uniqueCategories = ['all', ...Array.from(new Set(sortedImages.map(img => img.category.toLowerCase())))]

// Update the GalleryItem component to show description on hover
function GalleryItem({ image, index }: { image: ImageType; index: number }) {
  return (
    <motion.div 
      className="gallery-card-wrapper aspect-square"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="gallery-card-inner h-full group">
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={500}
          className="w-full h-full object-cover"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className={cn(
            "text-white text-center text-sm",
            image.isArabic && "text-right direction-rtl"
          )}>
            {image.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Add these variants near the top of your file
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export function ModernDarkArtGalleryComponent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [direction, setDirection] = useState(0);

  // Memoize filtered images to prevent unnecessary recalculation
  const filteredImages = useMemo(() => {
    return filter === 'all' 
      ? sortedImages 
      : sortedImages.filter(img => img.category.toLowerCase() === filter)
  }, [filter])

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setSelectedImage(prev => 
      prev === null || prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setSelectedImage(prev => 
      prev === null || prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, handlePrevious, handleNext])

  // Add loading state reset when changing images
  useEffect(() => {
    if (selectedImage !== null) {
      setIsLoading(true)
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Fixed navigation bar */}
      <motion.nav 
        className="fixed top-4 right-4 z-50 flex gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/info">
          <Button
            variant="outline"
            className="bg-gray-900/80 text-white hover:bg-gray-800 backdrop-blur-sm flex items-center gap-2"
          >
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className={`${inter.className} hidden sm:inline`}>About</span>
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outline"
            className="bg-gray-900/80 text-white hover:bg-gray-800 backdrop-blur-sm flex items-center gap-2"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className={`${inter.className} hidden sm:inline`}>Contact</span>
          </Button>
        </Link>
      </motion.nav>

      {/* Main header content */}
      <header className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.div 
          className="relative max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
          <motion.div 
            className="relative backdrop-blur-lg rounded-2xl p-8 text-center border-2 border-transparent bg-gray-900/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8))',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <motion.h1 
                className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x h-[52px] md:h-[62px] lg:h-[72px] flex items-center justify-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {["E", "s", "r", "a", "a", " ", "E", "l", "A", "y", "a", "s", "h", "y"].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                className={`${playfair.className} mt-4 text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-gradient-x`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                Artist & Photographer
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col gap-4">
            <motion.p 
              className={`${ibmPlexArabic.className} text-lg sm:text-xl text-gray-300`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
              }}
            >
              🤍🌷 وَكانت غامضة، شفّافَة، نقيَّة كَـ زهرة التُّوليب التي تحبها
            </motion.p>
            <div className="flex items-center justify-center gap-3">
              <motion.span
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                🌷
              </motion.span>
              <motion.p 
                className={`${playfair.className} text-lg sm:text-xl italic text-gray-300`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeOut"
                }}
              >
                Like Tulips or more tender
              </motion.p>
              <motion.span
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                
              </motion.span>
            </div>
          </div>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 mb-8">
        <div className="mb-8 flex justify-center gap-2 flex-wrap">
          {uniqueCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className={cn(
                "capitalize rounded-full",
                filter === category ? "bg-white text-gray-900" : "bg-gray-800 text-white hover:bg-gray-700"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer aspect-square"
            >
              <GalleryItem image={image} index={index} />
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] h-[90vh] bg-gray-900/95 border-none p-0 overflow-hidden backdrop-blur-lg">
            <AnimatePresence mode="wait">
              {selectedImage !== null && (
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex flex-col md:flex-row"
                >
                  <div className="relative flex-grow bg-black/50">
                    <AnimatePresence custom={direction} initial={false}>
                      <motion.div
                        key={selectedImage}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 w-full h-full"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceThreshold) {
                            handleNext();
                          } else if (swipe > swipeConfidenceThreshold) {
                            handlePrevious();
                          }
                        }}
                      >
                        {isLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
                            <div className="scale-[0.5] sm:scale-75">
                              <ElAyashyLoader />
                            </div>
                          </div>
                        )}
                        <Image
                          src={filteredImages[selectedImage].src}
                          alt={filteredImages[selectedImage].alt}
                          layout="fill"
                          objectFit="contain"
                          className="select-none"
                          sizes="95vw"
                          quality={100}
                          priority
                          onLoadingComplete={() => setIsLoading(false)}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Info panel */}
                  <motion.div 
                    className="bg-gray-800/95 p-6 md:w-1/3 flex flex-col justify-between backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className={`${playfair.className} text-2xl font-bold mb-2 text-white`}>
                        {filteredImages[selectedImage].date}
                      </h2>
                      <p className="text-sm text-gray-400 mb-4">{filteredImages[selectedImage].category}</p>
                      <p className={cn(
                        inter.className,
                        "text-sm text-white leading-relaxed",
                        filteredImages[selectedImage].isArabic && "text-right direction-rtl"
                      )}>
                        {filteredImages[selectedImage].description}
                      </p>
                    </motion.div>
                    <div className="flex justify-between mt-4 gap-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handlePrevious} 
                        className="flex-1 bg-gray-700 text-white hover:bg-gray-600"
                      >
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleNext} 
                        className="flex-1 bg-gray-700 text-white hover:bg-gray-600"
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>

                  {/* Navigation buttons */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePrevious}
                      className="pointer-events-auto bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm text-white rounded-full p-3"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNext}
                      className="pointer-events-auto bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm text-white rounded-full p-3"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </div>

                  {/* Close button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-50 group"
                  >
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 group-hover:opacity-100 blur-[2px] group-hover:blur-[3px] transition-all duration-300" />
                      <div className="absolute inset-[2px] rounded-full bg-gray-900/90 flex items-center justify-center">
                        <motion.div
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="h-5 w-5 text-white/90 group-hover:text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
      <ScrollToTop />
    </div>
  )
}

// Add these helper functions
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};