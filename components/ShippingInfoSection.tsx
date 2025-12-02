import Link from 'next/link'

export default function ShippingInfoSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Shipping & Delivery */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  SHIPPING & DELIVERY
                </h2>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                We offer fast and reliable shipping to ensure your wellness products arrive safely and on time.
              </p>

              <div className="space-y-6">
                {/* Standard Shipping */}
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Standard Shipping</h3>
                    <p className="text-gray-600">5-7 business days</p>
                  </div>
                </div>

                {/* Express Shipping */}
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Express Shipping</h3>
                    <p className="text-gray-600">2-3 business days</p>
                  </div>
                </div>

                {/* Free Shipping */}
                <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg border-2 border-primary-200">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Free Shipping</h3>
                    <p className="text-gray-600">On orders over $50</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  CONTACT US
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-gray-900 text-lg mb-2">FIKA WELLNESS CO.</p>
                  <div className="space-y-1 text-gray-700">
                    <p>30 PUNCH BOWL DRIVE</p>
                    <p>HALIFAX, NOVA SCOTIA B3P 2C5</p>
                  </div>
                </div>

                <div className="p-4 bg-primary-50 rounded-lg border-2 border-primary-200">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <Link
                      href="mailto:info@fikawellnessco.ca"
                      className="text-primary-700 hover:text-primary-800 font-medium transition-colors"
                    >
                      info@fikawellnessco.ca
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block mt-4 px-6 py-3 bg-primary-600 text-gray-900 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
                >
                  Get in Touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
