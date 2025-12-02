'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            STAY IN THE LOOP
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our Self-Care Movement and be the first to know about promotions, discounts, launches, giveaways, and much more.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            This form is protected by reCAPTCHA and the{' '}
            <a href="#" className="text-gray-700 hover:underline">Google Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="text-gray-700 hover:underline">Terms of Service</a>
            {' '}apply.
          </p>
        </div>
      </div>
    </section>
  )
}

