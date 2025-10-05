import React, { useState, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { 
  Tractor, 
  FileText, 
  Search, 
  DollarSign, 
  Handshake, 
  BarChart3,
  Users,
  Edit,
  Target,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react'
import Footer from '../component/Footer'
import { useContact } from '../context/ContactContext'

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#394937] via-[#2d3a2b] to-[#1f2a1d] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#394937] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-[#394937] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-[#394937] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            <Handshake className="w-4 h-4" />
            Agricultural Connection Platform
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Connecting
          <motion.span 
            className="block bg-gradient-to-r text-[#566d53] from-[#394937] via-[#4a5a48] to-[#5c6b5a] bg-clip-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Land & Farmers
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Bridge the gap between land owners and farmers with our comprehensive platform. We facilitate secure, profitable partnerships that benefit both parties and strengthen agricultural communities.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button 
            className="group bg-gradient-to-r from-[#394937] to-[#4a5a48] hover:from-[#2d3a2b] hover:to-[#394937] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Find Land Partners</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>
          <motion.button 
            className="group border-2 border-white/50 text-white hover:bg-white hover:text-[#394937] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>List Your Land</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

const ServiceCard = ({ icon: IconComponent, title, description, features, gradient, delay }) => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div 
      ref={ref}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Icon Container */}
      <div className="relative mb-4 sm:mb-6">
        <motion.div 
          className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            
          >
            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center group-hover:text-[#394937] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
              <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            </div>
            <span className="text-sm sm:text-base font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const ServicesGrid = () => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Tractor,
      title: "Land Matching",
      description: "Connect farmers with suitable land owners through our advanced matching algorithm that considers location, soil type, and farming requirements.",
      features: [
        "Smart Matching Algorithm",
        "Soil Quality Analysis",
        "Location-Based Search",
        "Compatibility Assessment"
      ],
      gradient: "from-[#394937] to-[#4a5a48]",
      delay: 100
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Comprehensive legal support for land lease agreements, ensuring both parties are protected with proper documentation.",
      features: [
        "Contract Drafting",
        "Legal Compliance",
        "Terms Negotiation",
        "Document Verification"
      ],
      gradient: "from-[#4a5a48] to-[#5c6b5a]",
      delay: 200
    },
    {
      icon: Search,
      title: "Land Verification",
      description: "Thorough verification of land ownership, soil quality, water availability, and legal status before any agreements.",
      features: [
        "Ownership Verification",
        "Soil Testing Reports",
        "Water Source Analysis",
        "Legal Status Check"
      ],
      gradient: "from-[#2d3a2b] to-[#394937]",
      delay: 300
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Expert guidance on lease pricing, payment structures, and financial planning for sustainable agricultural partnerships.",
      features: [
        "Market Rate Analysis",
        "Payment Structure Design",
        "Profit Sharing Models",
        "Financial Consultation"
      ],
      gradient: "from-[#5c6b5a] to-[#6d7c6b]",
      delay: 400
    },
    {
      icon: Handshake,
      title: "Partnership Support",
      description: "Ongoing support throughout the partnership lifecycle, from initial connection to long-term relationship management.",
      features: [
        "Relationship Management",
        "Conflict Resolution",
        "Performance Monitoring",
        "Renewal Assistance"
      ],
      gradient: "from-[#394937] to-[#4a5a48]",
      delay: 500
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Access to comprehensive market data, crop pricing trends, and agricultural insights to make informed decisions.",
      features: [
        "Market Price Tracking",
        "Crop Demand Analysis",
        "Seasonal Trends",
        "Investment Insights"
      ],
      gradient: "from-[#2d3a2b] to-[#394937]",
      delay: 600
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#394937] rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#394937] rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-10 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-[#394937]/10 text-[#394937] rounded-full text-sm font-medium flex items-center gap-2 w-fit mx-auto">
              <Users className="w-4 h-4" />
              Our Services
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How We <span className="bg-gradient-to-r from-[#394937] to-[#4a5a48] bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We provide comprehensive services that bridge the gap between land owners and farmers, creating mutually beneficial partnerships that drive agricultural success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              gradient={service.gradient}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProcessSection = () => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      step: "01",
      title: "Registration",
      description: "Land owners and farmers register on our platform with detailed profiles and requirements.",
      icon: Edit
    },
    {
      step: "02",
      title: "Matching",
      description: "Our smart algorithm matches compatible partners based on location, soil type, and farming needs.",
      icon: Target
    },
    {
      step: "03",
      title: "Verification",
      description: "Comprehensive verification of land ownership, legal status, and agricultural suitability.",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Partnership",
      description: "Legal documentation, contract signing, and ongoing support for successful partnerships.",
      icon: Handshake
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-[#394937] to-[#2d3a2b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute opacity-40 inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 text-[#394937] bg-white/40 rounded-full text-sm font-medium backdrop-blur-sm border border-[#394937]/30">
              Our Process
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How We <span className="bg-gradient-to-r from-[#394937] to-[#4a5a48] bg-clip-text text-[#758972]">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our streamlined 4-step process ensures successful partnerships between land owners and farmers, creating lasting agricultural relationships.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: "easeOut"
              }}
            >
              <div className="relative mb-6 sm:mb-8">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[60%] top-[30%] w-full h-0.5 bg-gradient-to-r from-[#657d62] to-transparent transform z-0"></div>
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 bg-gradient-to-br from-[#394937] to-[#5f745c] text-white text-xl sm:text-2xl font-bold w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CallToActionSection = () => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })
  const { openContactPopup } = useContact()

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#394937]/10 to-[#4a5a48]/10 relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#394937] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#394937] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#394937] rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-[#394937]/10 text-[#394937] rounded-full text-sm font-medium flex items-center gap-2 w-fit mx-auto">
            <Phone className="w-4 h-4" />
            Ready to Get Started?
          </span>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join Our <span className="bg-gradient-to-r from-[#394937] to-[#4a5a48] bg-clip-text text-transparent">Agricultural Network</span>
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Whether you're a land owner looking to maximize your property's potential or a farmer seeking the perfect land to cultivate, we're here to make those connections happen.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            onClick={openContactPopup}
            className="group bg-gradient-to-r from-[#394937] to-[#4a5a48] hover:from-[#2d3a2b] hover:to-[#394937] text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5" />
            <span>Start Partnership</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <motion.button 
            onClick={openContactPopup}
            className="group border-2 border-[#394937] text-[#394937] hover:bg-[#394937] hover:text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#394937] to-[#4a5a48] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Active Partnerships</p>
          </div>

          <div className="group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#394937] to-[#4a5a48] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Tractor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h3>
            <p className="text-gray-600">Acres Connected</p>
          </div>

          <div className="group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#394937] to-[#4a5a48] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default Services