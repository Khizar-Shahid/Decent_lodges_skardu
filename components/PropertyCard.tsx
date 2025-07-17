'use client'

import Image from 'next/image'
import { Star, MapPin, Users, Wifi, Car, Coffee } from 'lucide-react'
import { trackRoomView } from '@/lib/gtm'
import { openWhatsApp, getBookingMessage } from '@/lib/whatsapp'

interface RoomCardProps {
  id: string
  title: string
  location: string
  price: number
  rating: number
  image: string
  amenities: string[]
  description: string
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  rating,
  image,
  amenities,
  description
}: RoomCardProps) {
  const handleRoomView = () => {
    trackRoomView(title)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-primary-600">
          ${price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 text-sm">{location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Amenities */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Wifi className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">WiFi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Car className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">Parking</span>
          </div>
          <div className="flex items-center space-x-1">
            <Coffee className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">Breakfast</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          onClick={() => {
            handleRoomView()
            openWhatsApp('03083338726', `Hello! I'm interested in the ${title} at Decent Luxury Hotel Skardu. Could you please provide me with more information about availability and rates?`)
          }}
        >
          View Details
        </button>
      </div>
    </div>
  )
} 