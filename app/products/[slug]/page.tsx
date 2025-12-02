'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProductImageSlider from '@/components/ProductImageSlider'
import ProductDetails from '@/components/ProductDetails'
import ProductHeroSlider from '@/components/ProductHeroSlider'

const products = [
  { 
    id: 1, 
    images: ['/image1.webp', '/image2.webp', '/image3.webp', '/image4.webp'],
    name: 'Wellness Product 1', 
    slug: 'wellness-product-1',
    price: '$29.99',
    description: 'A premium wellness product designed to enhance your self-care routine. Made with natural ingredients and essential oils.',
    fullDescription: 'This carefully crafted wellness product combines the finest natural ingredients with essential oils to create a truly transformative self-care experience. Made in small batches to ensure the highest quality, this product is perfect for those who value premium wellness solutions. Each bottle is handcrafted with attention to detail, ensuring consistency and effectiveness in every use.',
    ingredients: 'Natural herbs, Essential oils, Organic base ingredients',
    benefits: [
      'Enhances relaxation and wellbeing',
      'Promotes healthy skin',
      'Natural and organic ingredients',
      'Small batch production for quality'
    ],
    variants: {
      name: 'Size',
      options: ['50ml', '100ml', '250ml']
    }
  },
  { 
    id: 2, 
    images: ['/image2.webp', '/image3.webp', '/image4.webp', '/image5.webp'],
    name: 'Wellness Product 2', 
    slug: 'wellness-product-2',
    price: '$34.99',
    description: 'Experience the power of natural herbs and essential oils in this carefully crafted wellness product.',
    fullDescription: 'Experience the power of natural herbs and essential oils in this carefully crafted wellness product. Each batch is made with love and attention to detail, ensuring you receive a premium product that enhances your daily self-care routine.',
    ingredients: 'Natural herbs, Essential oils, Organic base ingredients',
    benefits: [
      'Promotes relaxation',
      'Natural aromatherapy benefits',
      'Premium quality ingredients',
      'Handcrafted in small batches'
    ],
    variants: {
      name: 'Size',
      options: ['50ml', '100ml', '250ml']
    }
  },
  { 
    id: 3, 
    images: ['/image3.webp', '/image4.webp', '/image5.webp', '/image6.webp'],
    name: 'Wellness Product 3', 
    slug: 'wellness-product-3',
    price: '$39.99',
    description: 'Small batch, high quality wellness product blended to enhance your self-care practice.',
    fullDescription: 'This premium wellness product is the result of years of experience using herbs and essential oils. Small batch production ensures every product meets our high standards for quality and effectiveness.',
    ingredients: 'Natural herbs, Essential oils, Organic base ingredients',
    benefits: [
      'Enhances self-care practice',
      'Premium quality assurance',
      'Natural and effective',
      'Small batch production'
    ],
    variants: {
      name: 'Size',
      options: ['50ml', '100ml', '250ml']
    }
  },
  { 
    id: 4, 
    images: ['/image4.webp', '/image5.webp', '/image6.webp', '/image1.webp'],
    name: 'Wellness Product 4', 
    slug: 'wellness-product-4',
    price: '$27.99',
    description: 'Premium quality wellness product made with love and attention to detail.',
    fullDescription: 'Made with love and attention to detail, this wellness product represents our commitment to creating high-quality, natural solutions for your self-care needs.',
    ingredients: 'Natural herbs, Essential oils, Organic base ingredients',
    benefits: [
      'Affordable luxury',
      'Natural ingredients',
      'Quality craftsmanship',
      'Perfect for daily use'
    ],
    variants: {
      name: 'Size',
      options: ['50ml', '100ml', '250ml']
    }
  },
  { 
    id: 5, 
    images: ['/image5.webp', '/image6.webp', '/image1.webp', '/image2.webp'],
    name: 'Wellness Product 5', 
    slug: 'wellness-product-5',
    price: '$32.99',
    description: 'Enhance your wellbeing with this specially formulated wellness product.',
    fullDescription: 'Specially formulated to enhance your wellbeing, this product combines the best of nature with modern wellness practices to deliver exceptional results.',
    ingredients: 'Natural herbs, Essential oils, Organic base ingredients',
    benefits: [
      'Wellness enhancement',
      'Natural formulation',
      'Effective results',
      'Premium quality'
    ],
    variants: {
      name: 'Size',
      options: ['50ml', '100ml', '250ml']
    }
  },
  { 
    id: 6, 
    images: ['/image6.webp', '/image1.webp', '/image2.webp', '/image3.webp'],
    name: 'Wellness Product 6', 
    slug: 'wellness-product-6',
    price: '$36.99',
    description: 'A luxurious addition to your self-care routine, crafted with premium ingredients.',
    fullDescription: 'A luxurious addition to your self-care routine, this product is crafted with premium ingredients to provide an indulgent experience that enhances your overall wellbeing.',
    ingredients: 'Natural herbs, Essential oils, Organic base ingredients',
    benefits: [
      'Luxurious experience',
      'Premium ingredients',
      'Enhances wellbeing',
      'Perfect for self-care'
    ],
    variants: {
      name: 'Size',
      options: ['50ml', '100ml', '250ml']
    }
  },
]

export default function ProductPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [product, setProduct] = useState(products.find((p) => p.slug === slug))

  useEffect(() => {
    if (slug) {
      const foundProduct = products.find((p) => p.slug === slug)
      setProduct(foundProduct)
    }
  }, [slug])

  if (!product) {
    return (
      <div className="bg-white">
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
              <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
              <a
                href="/products"
                className="inline-block px-6 py-3 bg-primary-600 text-gray-900 rounded-lg hover:bg-primary-500 transition-colors"
              >
                Back to Products
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Slider Section */}
      <ProductHeroSlider 
        productName={product.name} 
        productImage={product.images[0]} 
      />
      
      {/* Product Content Section */}
      <div className="pt-16 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Image Slider */}
            <div className="order-2 lg:order-1">
              <ProductImageSlider images={product.images} productName={product.name} />
            </div>

            {/* Right Column - Product Details */}
            <div className="order-1 lg:order-2">
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
