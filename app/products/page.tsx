'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  { 
    id: 1, 
    image: '/image1.webp', 
    name: 'Wellness Product 1', 
    slug: 'wellness-product-1',
    price: '$29.99',
    description: 'A premium wellness product designed to enhance your self-care routine. Made with natural ingredients and essential oils.'
  },
  { 
    id: 2, 
    image: '/image2.webp', 
    name: 'Wellness Product 2', 
    slug: 'wellness-product-2',
    price: '$34.99',
    description: 'Experience the power of natural herbs and essential oils in this carefully crafted wellness product.'
  },
  { 
    id: 3, 
    image: '/image3.webp', 
    name: 'Wellness Product 3', 
    slug: 'wellness-product-3',
    price: '$39.99',
    description: 'Small batch, high quality wellness product blended to enhance your self-care practice.'
  },
  { 
    id: 4, 
    image: '/image4.webp', 
    name: 'Wellness Product 4', 
    slug: 'wellness-product-4',
    price: '$27.99',
    description: 'Premium quality wellness product made with love and attention to detail.'
  },
  { 
    id: 5, 
    image: '/image5.webp', 
    name: 'Wellness Product 5', 
    slug: 'wellness-product-5',
    price: '$32.99',
    description: 'Enhance your wellbeing with this specially formulated wellness product.'
  },
  { 
    id: 6, 
    image: '/image6.webp', 
    name: 'Wellness Product 6', 
    slug: 'wellness-product-6',
    price: '$36.99',
    description: 'A luxurious addition to your self-care routine, crafted with premium ingredients.'
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-primary-500 to-gray-700 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-lg max-w-2xl mx-auto bg-gradient-to-r from-gray-600 via-primary-400 to-gray-500 bg-clip-text text-transparent font-medium">
            Discover our collection of small batch, high quality wellness products 
            designed to enhance your self-care practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.slug}`}
              className="group block cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-primary-700">
                      {product.price}
                    </span>
                    <span className="text-primary-700 font-medium group-hover:translate-x-1 transition-transform inline-block">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

