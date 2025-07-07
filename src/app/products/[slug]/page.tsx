import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PortableTextBlock } from '@portabletext/types'
import Navbar from '@/app/Components/navbar'
import Footer from '@/app/Components/footer'
import ProductImageGallery from '@/app/Components/productimagegallery'
import ProductInquiryForm from './ProductInquiryForm'
import { DM_Sans } from 'next/font/google'
import ContactBar from '@/app/Components/topbar'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

interface ProductImage {
  asset: {
    url: string
    _id: string
    metadata?: {
      dimensions?: {
        width: number
        height: number
      }
    }
  }
}

export type Product = {
  name: string
  description: PortableTextBlock[]
  images: ProductImage[]
}

const productQuery = `
  *[
    (_type == "lowvoltageswitchgearpanels" ||
    _type == "lowvoltageswitchgearpanelsdistributionboards" ||
    _type == "mediumvoltageswitchgear" ||
    _type == "stainlesssteelstrcuture" ||
    _type == "emptyenclosure" ||
    _type == "cabletraysandladder")
    && slug.current == $slug
  ][0] {
    name,
    description,
    images[] {
      asset-> {
        url,
        _id,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    }
  }
`

type PageParams = { slug: string }

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const product: Product | null = await client.fetch(productQuery, { slug: params.slug })

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist',
    }
  }

  return {
    title: product.name,
    description: product.description
      ? 'Explore more about ' + product.name
      : 'Detailed product page',
    openGraph: product.images?.[0]?.asset?.url
      ? {
          images: [
            {
              url: product.images[0].asset.url,
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ],
        }
      : undefined,
  }
}

interface PageProps {
  params: PageParams
}

export default async function Page({ params }: PageProps) {
  const product: Product | null = await client.fetch(productQuery, {
    slug: params.slug,
  })

  if (!product) return notFound()

  return (
    <>
      <ContactBar/>
      <Navbar />

      <main className={`min-h-screen bg-white px-4 md:px-6 py-16 ${dmsans.className}`}>
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ProductImageGallery images={product.images} productName={product.name} />

            <div className="bg-[#fdfbf8] border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
              <h1 className={`text-4xl font-bold text-[#6B4F3B] ${dmsans.className}`}>
                {product.name}
              </h1>
              <div className="border-t pt-4">
                <h2 className={`text-2xl font-semibold text-[#6B4F3B] mb-2 ${dmsans.className}`}>
                  Description:
                </h2>
                <div className={`prose prose-lg max-w-none text-gray-700 ${dmsans.className}`}>
                  <PortableText value={product.description} />
                </div>
              </div>
            </div>
          </div>

          <ProductInquiryForm productName={product.name} />
        </div>
      </main>

      <Footer />
    </>
  )
}
