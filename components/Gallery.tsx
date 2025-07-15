'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/scardu6.jpg', alt: 'Skardu Valley View 1' },
  { src: '/scardu7.jpg', alt: 'Skardu Valley View 2' },
  { src: '/scardu8.jpg', alt: 'Skardu Valley View 3' },
  { src: '/scardu9.jpg', alt: 'Skardu Valley View 4' },
  { src: '/scardu10.jpg', alt: 'Skardu Valley View 5' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Skardu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the breathtaking beauty of Skardu through our gallery of stunning landscapes and views.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium">
                  Click to view
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full p-4">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="object-contain max-h-[80vh]"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 