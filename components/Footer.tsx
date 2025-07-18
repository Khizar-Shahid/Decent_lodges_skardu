'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Decent Luxury Hotel</h3>
                <p className="text-gray-400">Premium Accommodation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Experience luxury accommodation in the heart of Skardu, Pakistan. 
              Our hotel offers 8 premium rooms with modern amenities and 
              exceptional service for your memorable stay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const homeSection = document.getElementById('home')
                    if (homeSection) {
                      const headerHeight = 120
                      const elementPosition = homeSection.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const roomsSection = document.getElementById('rooms')
                    if (roomsSection) {
                      const headerHeight = 120
                      const elementPosition = roomsSection.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const amenitiesSection = document.getElementById('amenities')
                    if (amenitiesSection) {
                      const headerHeight = 120
                      const elementPosition = amenitiesSection.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      const headerHeight = 120
                      const elementPosition = contactSection.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const bookingSection = document.getElementById('booking')
                    if (bookingSection) {
                      const headerHeight = 120
                      const elementPosition = bookingSection.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div className="text-gray-300">
                  <div>03083338726</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">shoaibhaider81@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  ShangriLa Road, Murtazabad, Skardu
                </span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400">Owner: Shoaib Haider</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Decent Luxury Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 