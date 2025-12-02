'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from './CartProvider'

interface ProductDetailsProps {
  product: {
    id: number
    name: string
    slug: string
    price: string
    description: string
    fullDescription: string
    ingredients: string
    benefits: string[]
    variants?: { name: string; options: string[] }
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    description: false,
    returns: false,
    delivery: false,
  })
  const { openCart } = useCart()

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <ol className="flex items-center space-x-2 text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary-700 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-primary-700 transition-colors">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {product.name}
      </h1>

      {/* Price */}
      <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
        {product.price}
      </div>

      {/* Short Description */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selection (if applicable) */}
      {product.variants && (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            {product.variants.name}
          </label>
          <div className="flex flex-wrap gap-3">
            {product.variants.options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedVariant(option)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedVariant === option
                    ? 'bg-primary-600 text-white ring-2 ring-primary-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Quantity
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors font-semibold"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 1
                setQuantity(Math.max(1, val))
              }}
              className="w-16 text-center py-3 border-x-2 border-gray-300 focus:outline-none font-semibold"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors font-semibold"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 mb-8">
        <button 
          onClick={openCart}
          className="w-full bg-primary-600 text-gray-900 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Add to Cart
        </button>
        <button className="w-full bg-white text-primary-700 border-2 border-primary-500 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-300">
          Buy It Now
        </button>
      </div>

      {/* Benefits */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
        <ul className="space-y-3">
          {product.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Collapsible Sections */}
      <div className="space-y-4 border-t border-gray-200 pt-6">
        {/* Description */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('description')}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-semibold text-gray-900">Description</span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform ${
                openSections.description ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.description && (
            <div className="pb-4 text-gray-700 leading-relaxed">
              <p className="mb-4">{product.fullDescription}</p>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>
            </div>
          )}
        </div>

        {/* Returns */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('returns')}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-semibold text-gray-900">
              100% Free Replacements & Returns
            </span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform ${
                openSections.returns ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.returns && (
            <div className="pb-4 text-gray-700 leading-relaxed">
              <p>
                We stand behind the quality of our products. If you're not completely satisfied,
                we offer 100% free replacements and returns within 30 days of purchase. Your
                satisfaction is our priority.
              </p>
            </div>
          )}
        </div>

        {/* Delivery Information */}
        <div>
          <button
            onClick={() => toggleSection('delivery')}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-semibold text-gray-900">Delivery Information</span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform ${
                openSections.delivery ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.delivery && (
            <div className="pb-4 text-gray-700 leading-relaxed">
              <p className="mb-2">
                <strong>Standard Shipping:</strong> 5-7 business days
              </p>
              <p className="mb-2">
                <strong>Express Shipping:</strong> 2-3 business days
              </p>
              <p>
                All orders are carefully packaged to ensure your products arrive in perfect
                condition. Free shipping on orders over $50.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

