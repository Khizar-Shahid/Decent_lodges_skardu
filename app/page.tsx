'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PropertyCard from '@/components/PropertyCard'
import Gallery from '@/components/Gallery'
import { Shield, Clock, Heart, Award, Wifi, Car, Coffee, Bed, Phone, Mail, MapPin } from 'lucide-react'
import { openWhatsApp, getBookingMessage } from '@/lib/whatsapp'

// Room data with Skardu images
const rooms = [
  {
    id: '1',
    title: 'Master Bedroom - Single',
    location: 'ShangriLa Road, Murtazabad, Skardu',
    price: 150,
    rating: 4.8,
    image: '/Scardu2.jpg',
    amenities: ['WiFi', 'Parking', 'Breakfast', 'AC'],
    description: 'Comfortable master bedroom with single bed, perfect for solo travelers.'
  },
  {
    id: '2',
    title: 'Master Bedroom - Double',
    location: 'ShangriLa Road, Murtazabad, Skardu',
    price: 180,
    rating: 4.6,
    image: '/Scardu3.jpg',
    amenities: ['WiFi', 'Parking', 'Breakfast', 'AC'],
    description: 'Spacious master bedroom with double bed, ideal for couples.'
  },
  {
    id: '3',
    title: 'Deluxe Room',
    location: 'ShangriLa Road, Murtazabad, Skardu',
    price: 200,
    rating: 4.9,
    image: '/scardu4.jpg',
    amenities: ['WiFi', 'Parking', 'Breakfast', 'AC', 'Balcony'],
    description: 'Premium deluxe room with stunning views of Skardu Valley.'
  }
]

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: '24/7 security and CCTV surveillance for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Flexible Check-in',
    description: 'Check-in from 12 PM onwards (flexible timing).'
  },
  {
    icon: Heart,
    title: 'Comfortable Stay',
    description: '8 well-appointed rooms with modern amenities and comfort.'
  },
  {
    icon: Award,
    title: 'Best Rated',
    description: 'Consistently rated as one of the best hotels in Skardu.'
  }
]

const amenities = [
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'High-speed internet access throughout the hotel.'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure parking available for all guests.'
  },
  {
    icon: Coffee,
    title: 'Breakfast Included',
    description: 'Complimentary breakfast served daily.'
  },
  {
    icon: Bed,
    title: '8 Rooms Available',
    description: '3 master single rooms + 5 master double rooms.'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Decent Luxury Hotel?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury and comfort with our premium accommodation in the heart of Skardu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hotel Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy modern amenities and exceptional service during your stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Rooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of 8 premium rooms in Skardu, Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <PropertyCard key={room.id} {...room} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              View All Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Decent Luxury Hotel
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Located on ShangriLa Road, Murtazabad, Skardu, Decent Luxury Hotel offers 
                premium accommodation with 8 well-appointed rooms. Our hotel is designed to provide 
                comfort and convenience for both business and leisure travelers.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                With flexible check-in times, fixed 12 PM check-out, and premium facilities including 
                WiFi, parking, and breakfast, we ensure your stay is memorable and comfortable. 
                Book your stay with us and experience the best of Skardu hospitality.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-400">8</p>
                  <p className="text-sm text-gray-300">Total Rooms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-400">3</p>
                  <p className="text-sm text-gray-300">Master Single</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-400">5</p>
                  <p className="text-sm text-gray-300">Master Double</p>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Learn More
              </button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/Scardu5.jpg"
                alt="Decent Luxury Hotel in Skardu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for bookings and inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">03343338726</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">shoaibhaider81@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">ShangriLa Road, Murtazabad, Skardu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Stay
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Reserve your room at Decent Luxury Hotel for an unforgettable experience in Skardu.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-8 text-gray-800 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Ready to book your stay? Contact us directly on WhatsApp for instant booking assistance.
              </p>
              <button 
                onClick={() => openWhatsApp('03373338726', getBookingMessage())}
                className="w-full bg-primary-600 text-white py-4 px-8 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg"
              >
                Book Now on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 