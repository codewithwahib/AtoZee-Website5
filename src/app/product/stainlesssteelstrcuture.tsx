// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { client } from '@/sanity/lib/client'

// const productsQuery = `
//   *[_type == "stainlesssteelstrcuture" && defined(slug.current)]{
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
//   type?: string // optional description
//   images: { asset: { url: string } }[]
// }

// export default function Stainless() {
//   const [products, setProducts] = useState<Product[]>([])

//   useEffect(() => {
//     client.fetch(productsQuery).then((data: Product[]) => {
//       setProducts(data)
//     })
//   }, [])

//   return (
//     <>
//       {/* Product Cards */}
//       <section className="py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100">
//         <h2 className="text-4xl font-serif font-bold mb-14 text-center text-gray-800">
//           Stainless Steel Structure
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
//           {products.map((product, idx) => (
//             <Link href={`/products/${product.slug.current}`} key={idx}>
//               <div className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] text-center px-4 py-6">
//                 {product.images[0]?.asset.url && (
//                   <img
//                     src={product.images[0].asset.url}
//                     alt={product.name}
//                     className="mx-auto h-64 object-contain"
//                   />
//                 )}
//                 <h3 className="text-2xl font-serif font-bold text-indigo-700 tracking-tight mt-6 border-b border-indigo-200 inline-block pb-1">
//                   {product.name}
//                 </h3>
//                 {product.type && (
//                   <p className="text-sm text-gray-600 mt-1">{product.type}</p>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
