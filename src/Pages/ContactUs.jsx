import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { 
  Phone, 
  MapPin, 
  Mail, 
  ChevronDown, 
  ChevronRight,
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react'
import Footer from '../component/Footer'

// Hero Section Component
const ContactHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#394937] via-[#2d3a2b] to-[#1f2a1d] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#394937] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#4a5a48] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-white/40 rounded-full text-sm font-medium backdrop-blur-sm border border-[#394937]/30 flex items-center gap-2 w-fit mx-auto">
            <Phone className="w-4 h-4" />
            Get in Touch
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Let's Talk
          <motion.span 
            className="block bg-gradient-to-r text-[#566d53] from-[#394937] via-[#4a5a48] to-[#5c6b5a] bg-clip-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Agriculture
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Have questions about listing your land, finding the right farmer, or partnering with us? Send us a message and we’ll get back to you within one business day.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contact-form" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.span 
              className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-br from-[#394937]/30 via-[#2d3a2b]/30 to-[#1f2a1d]/30 rounded-full text-xs sm:text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              📝 Send us a message
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's Start a Conversation
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>

          <motion.div 
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {isSubmitted ? (
              <motion.div 
                className="text-center py-8 sm:py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Message Sent Successfully!</h3>
                <p className="text-sm sm:text-base text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors duration-300 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors duration-300 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors duration-300 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors duration-300 text-gray-900 text-sm sm:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors duration-300 text-gray-900 placeholder-gray-400 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your agricultural needs..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#394937] via-[#2d3a2b] to-[#1f2a1d] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl  transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Info Component
const ContactInfo = () => {
  const { ref, inView } = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactCards = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Office",
      info: "123 Agriculture Street, Green Valley, CA 90210",
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      info: "hello@bataidar.com",
      action: "Send Email"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#394937]/5 via-[#2d3a2b]/5 to-[#1f2a1d]/5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-br from-[#394937]/20 via-[#2d3a2b]/20 to-[#1f2a1d]/20 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-[#394937] flex items-center gap-2 w-fit mx-auto">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            Contact Information
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Choose the most convenient way to get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 border border-gray-100 hover:border-[#394937]/30"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#394937] via-[#2d3a2b] to-[#1f2a1d] rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(card.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{card.info}</p>
              <button className="text-[#394937] font-semibold hover:text-[#2d3a2b] transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                {card.action}
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main Contact Us Component
const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer/>
    </div>
  )
}

export default ContactUs