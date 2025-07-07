// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { client } from '@/sanity/lib/client'
// import { DM_Sans } from 'next/font/google'

// const dmsans = DM_Sans({ 
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

// const productsQuery = `
//   *[_type == "emptyenclosure"]{
//     name,
//     slug,
//     type,
//     images[] {
//       asset-> {
//         url
//       }
//     }
//   }
// `

// interface Product {
//   name: string
//   slug: { current: string }
//   type?: string
//   images: { asset: { url: string } }[]
// }

// export default function Products() {
//   const [products, setProducts] = useState<Product[]>([])

//   useEffect(() => {
//     client.fetch(productsQuery).then((data: Product[]) => {
//       setProducts(data)
//     })
//   }, [])

//   return (
//     <>

//       {/* Product Cards */}
//       <section className={`py-10 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100 ${dmsans.className}`}>
//         <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-14 text-center text-gray-800">
//           Type Tested Panels
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-16 max-w-7xl mx-auto">
//           {products.map((product, idx) => (
//             <div 
//               key={idx}
//               className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
//             >
//               {product.images[0]?.asset.url && (
//                 <div className="h-40 sm:h-64 flex items-center justify-center p-2 sm:p-4 relative">
//                   <Image
//                     src={product.images[0].asset.url}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
//                   />
//                 </div>
//               )}
//               <div className="px-3 sm:px-6 pt-2 sm:pt-4 pb-1 sm:pb-2 flex-grow">
//                 <h3 className="text-base sm:text-2xl font-bold text-black tracking-tight mb-1 sm:mb-2 border-b border-gray-300 inline-block pb-1">
//                   {product.name}
//                 </h3>
//                 {product.type && (
//                   <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 font-normal">{product.type}</p>
//                 )}
//               </div>
//               <div className="px-3 sm:px-6 pb-3 sm:pb-6">
//                 <Link 
//                   href={`/products/${product.slug.current}`}
//                   className="w-full inline-block bg-white text-black border border-black sm:border-2 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded transition-all duration-200 text-center hover:bg-blue-50 text-sm sm:text-base"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});

const productsQuery = `
  *[_type == "emptyenclosure"]{
    name,
    slug,
    type,
    images[] {
      asset-> {
        url
      }
    }
  }
`

interface Product {
  name: string
  slug: { current: string }
  type?: string
  images: { asset: { url: string } }[]
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    client.fetch(productsQuery).then((data: Product[]) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      {/* Top Banner */}
      {/* <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh]">
        <Image
          src="/pro.jpg"
          alt="Products Banner"
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 ${dmsans.className}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            Our Products
          </h1>
          <p className="mt-2 sm:mt-3 pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light">
            Home / Products
          </p>
        </div>
      </div> */}

      {/* Product Cards */}
      <section className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100 ${dmsans.className}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 md:mb-12 text-center text-gray-800">
          Type Tested Panels
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
            >
              {product.images[0]?.asset.url && (
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center p-2 sm:p-3 md:p-4 relative">
                  <Image
                    src={product.images[0].asset.url}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              )}
              <div className="px-3 sm:px-4 pt-2 sm:pt-3 pb-1 flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black tracking-tight mb-1 sm:mb-2 border-b border-gray-200 inline-block pb-1">
                  {product.name}
                </h3>
                {product.type && (
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 font-normal">{product.type}</p>
                )}
              </div>
              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                <Link 
                  href={`/products/${product.slug.current}`}
                  className="w-full inline-block bg-white text-black border border-black font-medium py-2 sm:py-2 px-3 rounded transition-all duration-200 text-center hover:bg-blue-50 text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}