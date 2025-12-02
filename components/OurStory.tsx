import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              OUR STORY
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto"></div>
          </div>

          {/* Main Content with Visual Elements */}
          <div className="space-y-12">
            {/* First Paragraph with Emphasis */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light pl-8 italic">
                FIKA Wellness Co. was born out of the desire and passion for women to start putting themselves at the top of their priority list.
              </p>
            </div>

            {/* Image Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center my-16">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🌿</div>
                    <p className="text-gray-700 font-medium">Wellness & Self-Care</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                  In today's busy world, women often put themselves last and self-care becomes a luxury rather than a necessity.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  FIKA started from humble beginnings and is the product of two friends, who have been using herbs and essential oils in their self-care and beauty routines for years.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 my-16 border-l-4 border-primary-500">
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">✨</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                    With a strong passion for self-care and empowering women, being able to create small batch, high quality wellness products, and to share them with you is a dream come true.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                FIKA is more than just speciality wellness products blended to enhance your self-care practice, it is a movement for women to create experiences that they can use to enhance their wellbeing on a regular basis.
              </p>
              
              {/* Call to Action Box */}
              <div className="mt-12 p-8 md:p-12 bg-white rounded-2xl shadow-lg border-2 border-gray-100">
                <div className="text-center">
                  <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
                    <svg className="w-12 h-12 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    We believe that we are all more productive at fulfilling our life's purpose when we feel our best.
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-primary-700 mt-4">
                    When women are empowered they can change the world!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-20 flex justify-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-primary-300"></div>
            <div className="w-2 h-2 rounded-full bg-primary-400"></div>
            <div className="w-2 h-2 rounded-full bg-primary-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
