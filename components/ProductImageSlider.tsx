'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface ProductImageSliderProps {
  images: string[]
  productName: string
}

export default function ProductImageSlider({ images, productName }: ProductImageSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="w-full">
      {/* Main Image Slider */}
      <div className="mb-4">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          className="product-main-swiper rounded-lg overflow-hidden"
          onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${productName} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider */}
      {images.length > 1 && (
        <div>
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            className="product-thumbs-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-500 ring-2 ring-primary-200'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${productName} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <style jsx global>{`
        .product-main-swiper .swiper-button-next,
        .product-main-swiper .swiper-button-prev {
          color: #000;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .product-main-swiper .swiper-button-next:after,
        .product-main-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        .product-main-swiper .swiper-button-next:hover,
        .product-main-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  )
}

