import Image from 'next/image'

const products = [
  { id: 1, image: '/image1.webp', name: 'Wellness Product 1' },
  { id: 2, image: '/image2.webp', name: 'Wellness Product 2' },
  { id: 3, image: '/image3.webp', name: 'Wellness Product 3' },
  { id: 4, image: '/image4.webp', name: 'Wellness Product 4' },
  { id: 5, image: '/image5.webp', name: 'Wellness Product 5' },
  { id: 6, image: '/image6.webp', name: 'Wellness Product 6' },
]

export default function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

