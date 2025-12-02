'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CartItem {
  id: number
  name: string
  price: string
  quantity: number
  image: string
}

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Static cart data for now
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'IMMUNE - EUCALYPTUS & CLOVE',
      price: 'CAD$44.00',
      quantity: 2,
      image: '/image1.webp',
    },
  ])

  const subtotal = 88.0 // CAD$44.00 * 2
  const taxes = 6.16 // MB taxes
  const total = subtotal + taxes

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* How to Get It Section */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-4">
                HOW TO GET IT
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span className="text-gray-900 font-medium">Shipping</span>
                  </div>
                  <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                    Edit
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Shipping rates calculated at checkout</span>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="inline-block px-6 py-2 bg-primary-600 text-gray-900 rounded-lg hover:bg-primary-500 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 pb-6 border-b border-gray-200 last:border-0">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-base font-bold text-gray-900 pr-2">
                          {item.name}
                        </h4>
                        <span className="text-base font-semibold text-gray-900 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value) || 1)
                            }
                            className="w-12 text-center py-1 border-x border-gray-300 focus:outline-none text-sm"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Remove
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 italic">Shipping or delivery</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary & Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              {/* Order Summary */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">Subtotal</span>
                  <span className="font-semibold text-gray-900">CAD${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">Taxes (MB)</span>
                  <span className="font-semibold text-gray-900">CAD${taxes.toFixed(2)}</span>
                </div>
                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  + Add a coupon code
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  Checkout
                </Link>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="block text-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Payment Methods */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Accepted here</p>
                <div className="flex flex-wrap gap-2">
                  {['Visa', 'Mastercard', 'AMEX', 'Discover', 'JCB', 'Interac'].map(
                    (method) => (
                      <div
                        key={method}
                        className="px-3 py-1.5 bg-gray-100 rounded text-xs text-gray-600 font-medium"
                      >
                        {method}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

