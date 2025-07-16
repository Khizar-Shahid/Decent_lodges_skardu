'use client'

import { useState } from 'react'
import { Calendar, Users, MapPin, Search, Clock, Shield, Wifi, Car, Plane } from 'lucide-react'
import { trackBooking, trackContact } from '@/lib/gtm'
import { openWhatsApp, getBookingMessage } from '@/lib/whatsapp'

export default function Hero() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')

  const handleBookStay = () => {
    trackBooking('hero_section', 0)
    openWhatsApp('03373338726', getBookingMessage())
  }

  const handleViewRooms = () => {
    trackContact('view_rooms')
    // Scroll to rooms section
    setTimeout(() => {
      const roomsSection = document.getElementById('rooms')
      if (roomsSection) {
        const headerHeight = 120
        const elementPosition = roomsSection.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <section className="bg-blue-50 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Premium Guest Houses in
          <br />
          <span className="text-blue-600 text-5xl md:text-7xl">Skardu, Pakistan</span>
        </h1>
        
        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Experience luxury and comfort at our exceptional hotel. Perfect for business travelers, 
          families, and tourists visiting Skardu.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
            onClick={handleBookStay}
          >
            <Plane className="w-5 h-5" />
            <span>Book Your Stay</span>
          </button>
          <button 
            className="bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-semibold"
            onClick={handleViewRooms}
          >
            View Rooms
          </button>
        </div>
        
        {/* Features/Amenities Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-700">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span className="text-sm md:text-base">ShangriLa Road, Murtazabad</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm md:text-base">24/7 Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="w-5 h-5" />
            <span className="text-sm md:text-base">Free WiFi</span>
          </div>
          <div className="flex items-center space-x-2">
            <Car className="w-5 h-5" />
            <span className="text-sm md:text-base">Free Parking</span>
          </div>
        </div>
      </div>
    </section>
  )
} 