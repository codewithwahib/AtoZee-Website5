import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import { FiClock } from 'react-icons/fi';



interface NewsImage {
  asset: {
    _id: string;
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
}

interface NewsItem {
  _id: string;
  name: string;
  slug: string;
  description: PortableTextBlock[];
  publishDate: string;
  mainImage?: string;
  images?: NewsImage[];
}

const allNewsQuery = `
  *[_type == "news"] | order(publishDate desc) {
    _id,
    name,
    "slug": slug.current,
    publishDate,
    "mainImage": images[0].asset->url
  }
`;

const singleNewsQuery = `
  *[_type == "news" && slug.current == $slug][0] {
    _id,
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
            height
          }
        }
      }
    }
  }
`;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const news: NewsItem | null = await client.fetch(singleNewsQuery, { slug: params.slug });

  return {
    title: news?.name || 'News Article',
    description: news?.description ? `Details about ${news.name}` : 'News details',
    openGraph: {
      images: news?.mainImage ? [{ url: news.mainImage }] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const [allNews, currentNews]: [NewsItem[], NewsItem | null] = await Promise.all([
    client.fetch(allNewsQuery),
    client.fetch(singleNewsQuery, { slug: params.slug }),
  ]);

  if (!currentNews) return notFound();

  const getImageDimensions = (image?: NewsImage) => {
    if (!image?.asset?.metadata?.dimensions) return { width: 800, height: 600 };
    return image.asset.metadata.dimensions;
  };

  return (
    <>
      <Navbar />

      <main className="flex flex-col md:flex-row px-2 sm:px-4 py-6 max-w-7xl mx-auto gap-4 md:gap-6">
        {/* Left sidebar with news list */}
        <div className="w-full md:w-1/3">
          <div className="space-y-3">
            {allNews.map((newsItem) => (
              <a
                key={newsItem._id}
                href={`/news/${newsItem.slug}`}
                className={`block p-4 text-xl tracking-wider transition-colors border border-black rounded-r-none ${
                  newsItem.slug === currentNews.slug
                    ? 'bg-white text-brown-800 font-medium border-brown-800'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <h3 className="text-xl">{newsItem.name}</h3>
              </a>
            ))}
          </div>
        </div>

        {/* Right content area with background */}
        <div className="w-full md:w-2/3 relative pr-5">
          {/* Background element */}
          <div className="absolute inset-0 -z-10 bg-gray-50 rounded-lg translate-x-6 " />
          
          {/* Content container */}
          <div className="relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-sm border border-gray-100 animate-fadeInDown">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-6 gap-4">
              <h1 className="text-3xl sm:text-4xl font-light text-black tracking-wider">
                {currentNews.name}
              </h1>
              <div className="flex items-center gap-2">
                <FiClock className="text-gray-400 text-lg" />
                <p className="text-lg font-light tracking-widest text-gray-500 whitespace-nowrap">
                  {new Date(currentNews.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

            {currentNews.mainImage && currentNews.images?.[0] && (
              <div className="mb-8 overflow-hidden">
                <Image
                  src={currentNews.mainImage}
                  alt={currentNews.name}
                  {...getImageDimensions(currentNews.images[0])}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            )}

            <div className="prose max-w-none font-light tracking-wider text-lg text-gray-800">
              <PortableText value={currentNews.description} />
            </div>

            {currentNews.images && currentNews.images.length > 1 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentNews.images.slice(1).map((img, idx) => {
                  const dimensions = getImageDimensions(img);
                  return (
                    <div key={img.asset._id || idx} className="rounded-md overflow-hidden border border-gray-200">
                      <Image
                        src={img.asset.url}
                        alt={`News image ${idx + 1}`}
                        width={dimensions.width}
                        height={dimensions.height}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}