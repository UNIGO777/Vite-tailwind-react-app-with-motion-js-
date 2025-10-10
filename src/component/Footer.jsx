import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email subscription logic here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] text-white py-8 sm:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
          {/* Logo and Tagline Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* Leaf Icon */}
              
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">Bataidar</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              Connecting farmers and land owners to create sustainable agricultural partnerships that benefit communities and drive innovation.
            </p>
            
            {/* Email Subscription Form */}
            
          </div>

          {/* Links Section */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">LINKS</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">HOME</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">ABOUT US</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">SERVICES</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">CONTACT</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">LAND PARTNERSHIPS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">FARMER CONNECTIONS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">AGRICULTURAL CONSULTING</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Border/Copyright Section */}
        <div className="border-t border-gray-400 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            © 2025 Bataidar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer