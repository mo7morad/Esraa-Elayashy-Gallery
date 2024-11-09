import { ModernDarkArtGalleryComponent } from "@/components/gallery/EsraaElAyashyGallery"
import { inter } from '@/lib/fonts'

export default function Page() {
  return (
    <div className={inter.className}>
      <ModernDarkArtGalleryComponent />
    </div>
  )
}