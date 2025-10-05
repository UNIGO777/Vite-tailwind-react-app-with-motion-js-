import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Solutions from './Pages/Solutions'
import Navbar from './component/Navbar'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs.jsx'
import { ContactProvider, useContact } from './context/ContactContext'
import ContactPopup from './component/ContactPopup'
import ScrollToTop from './component/ScrollToTop'

const AppContent = () => {
  const { isContactPopupOpen, closeContactPopup } = useContact();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='h-20'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<div className="p-10 text-center">Projects Page</div>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <ContactProvider>
      <AppContent />
    </ContactProvider>
  )
}

export default App