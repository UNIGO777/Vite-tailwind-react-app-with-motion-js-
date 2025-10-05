import React from 'react'
import { useContact } from '../context/ContactContext'

const Branding = () => {
  const { openContactPopup } = useContact()
  return (
    <section className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
             }}>
      <div className="container mx-auto px-4 py-8  flex flex-col">
        {/* Navigation Buttons */}
        

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl mt-10">
            <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              MAKE YOUR
             
              <span className="text-green-400 ml-3">DREAM GARDEN</span>
              <br />
              INTO REALITY
            </h1>
            
            <p className="text-lg md:text-md text-white/90 mb-8 max-w-lg">
              Transform your outdoor space into a beautiful, sustainable garden that connects you with nature and enhances your property value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <button 
                onClick={openContactPopup}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Get Started
              </button>
              <button 
                onClick={openContactPopup}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          <div className="text-white/80 text-sm">
            <p>Professional Landscaping Services</p>
          </div>
          <div className="hidden md:block text-white/60 text-sm">
            <p>Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Branding