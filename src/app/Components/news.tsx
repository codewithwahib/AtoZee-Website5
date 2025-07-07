'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

const newsQuery = `
  *[_type == "news"] {
  _id,
  _createdAt,
  _updatedAt,
  name,
  "slug": slug.current,
  description,
  publishDate,
  "mainImage": images[0].asset->url,
  images[] {
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    }
  }
} | order(publishDate desc)
`

const newsImageQuery = `
  *[_type == "newsimage"].images[].asset->url
`

interface NewsItem {
  _id: string
  name: string
  slug: string
  description?: string
  publishDate: string
  images: {
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }[]
}

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [newsImages, setNewsImages] = useState<string[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const [newsData, imageUrls] = await Promise.all([
        client.fetch<NewsItem[]>(newsQuery),
        client.fetch<string[]>(newsImageQuery)
      ])
      setNewsItems(newsData)
      setNewsImages(imageUrls)
    }

    fetchData()
  }, [])

  const nextSlide = useCallback(() => {
    if (!isHovered) {
      setCurrentSlide(prev => (prev === newsImages.length - 1 ? 0 : prev + 1))
    }
  }, [newsImages.length, isHovered])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  if (newsItems.length === 0) return null

  return (
    <section className="py-8 md:py-12 px-3 sm:px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-black text-center tracking-wider pb-6 sm:pb-8">
        News & Awards
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* News Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1">
          {newsItems.map((product, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Image at the top */}
              {product.images[0]?.asset.url && (
                <div className="h-32 sm:h-36 md:h-40 relative mb-2 overflow-hidden rounded-sm">
                  <Image
                    src={product.images[0].asset.url}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              )}
              
              {/* Title and Date row below image */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm sm:text-base font-sans font-light tracking-wider text-black leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 whitespace-nowrap pl-2">
                  {new Date(product.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              {/* Read More button below title/date */}
              <div className="mt-1">
                <Link href={`/news/${product.slug}`} passHref>
                  <button className="text-black font-medium px-2 py-1 hover:bg-gray-100 transition uppercase tracking-wider rounded border border-gray-900 flex items-center gap-1 group-hover:translate-x-1 h-6 text-xs w-fit">
                    <span>Read More</span>
                    <FaArrowRight size={10} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Image Carousel */}
        <div 
          className="w-full lg:w-1/2 h-[200px] sm:h-[280px] md:h-[350px] relative bg-gray-100 overflow-hidden rounded-sm order-1 lg:order-2 mb-3 sm:mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {newsImages.map((imageUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={imageUrl}
                alt={`Featured News ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === currentSlide}
              />
            </div>
          ))}

          {/* Navigation Dots */}
          {newsImages.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
              {newsImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide ? 'w-4 bg-white' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}