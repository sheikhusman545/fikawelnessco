'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const products = [
  { id: 1, image: '/image1.webp', name: 'Wellness Product 1', slug: 'wellness-product-1' },
  { id: 2, image: '/image2.webp', name: 'Wellness Product 2', slug: 'wellness-product-2' },
  { id: 3, image: '/image3.webp', name: 'Wellness Product 3', slug: 'wellness-product-3' },
  { id: 4, image: '/image4.webp', name: 'Wellness Product 4', slug: 'wellness-product-4' },
  { id: 5, image: '/image5.webp', name: 'Wellness Product 5', slug: 'wellness-product-5' },
  { id: 6, image: '/image6.webp', name: 'Wellness Product 6', slug: 'wellness-product-6' },
]

export default function ProductSlider() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-primary-500 to-gray-700 bg-clip-text text-transparent">
            Our Products
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="pb-12"
          allowTouchMove={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link 
                href={`/products/${product.slug}`}
                className="block group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    {product.name}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">View Details →</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-primary-600 text-gray-900 font-semibold rounded-lg hover:bg-primary-500 transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

