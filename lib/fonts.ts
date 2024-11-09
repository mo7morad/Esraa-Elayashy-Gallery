import { Inter, Playfair_Display, IBM_Plex_Sans_Arabic } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500'],
  display: 'swap',
}) 