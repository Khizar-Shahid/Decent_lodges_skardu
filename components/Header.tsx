'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // Add a small delay to ensure the page is fully loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate offset for the fixed header
        const headerHeight = 120 // Approximate header height
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
        console.log(`Section with id "${sectionId}" not found`)
        // Fallback: scroll to top if section not found
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }, 100)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                <div>
                  <div>03343338726</div>
                  <div>03083338726</div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>shoaibhaider81@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>ShangriLa Road, Murtazabad, Skardu</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Decent Luxury Hotel</h1>
              <p className="text-sm text-gray-600">Premium Accommodation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-600 font-medium cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('rooms')}
              className="text-gray-700 hover:text-primary-600 font-medium cursor-pointer"
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-gray-700 hover:text-primary-600 font-medium cursor-pointer"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 font-medium cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('rooms')}
                className="text-gray-700 hover:text-primary-600 font-medium text-left"
              >
                Rooms
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-gray-700 hover:text-primary-600 font-medium text-left"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-600 font-medium text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Book Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 