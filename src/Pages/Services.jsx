import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Tractor, 
  Handshake, 
  BarChart3, 
  Users, 
  ArrowRight, 
  Phone,
  MapPin,
  CheckCircle,
  Search,
  FileText,
  Shield
} from 'lucide-react'
import Footer from '../Component/Footer'
import { useContact } from '../context/ContactContext'

const useInViewHook = (options = {}) => {
  return useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options
  })
}

const ServicesHero = () => {
  const [ref, inView] = useInViewHook()

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#225122] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-[#225122] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-[#225122] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-white/40 rounded-full text-sm font-medium backdrop-blur-sm border border-[#225122]/30 flex items-center gap-2 w-fit mx-auto">
            <Tractor className="w-4 h-4" />
            Our Services
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Connecting
          <motion.span 
            className="block bg-gradient-to-r text-[#4a8f4a] from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Farmers & Landowners
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We bridge the gap between agricultural land owners and passionate farmers, creating sustainable partnerships that benefit both parties and strengthen our agricultural community.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button 
            className="group bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] hover:from-[#225122] hover:to-[#4a8f4a] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5" />
            <span>Explore Services</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <motion.button 
            className="group border-2 border-white/50 text-white hover:bg-white hover:text-[#225122] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

const ServicesGrid = () => {
  const [ref, inView] = useInViewHook()

  const services = [
    {
      icon: Search,
      title: "Land Matching",
      description: "Advanced algorithms match farmers with suitable land based on crop requirements, location preferences, and farming practices.",
      features: ["Soil analysis compatibility", "Climate zone matching", "Proximity to markets", "Infrastructure assessment"]
    },
    {
      icon: Handshake,
      title: "Partnership Facilitation",
      description: "We facilitate transparent negotiations and help establish mutually beneficial agreements between land owners and farmers.",
      features: ["Contract negotiation", "Terms mediation", "Legal documentation", "Ongoing support"]
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Comprehensive legal framework ensures both parties are protected with clear terms, responsibilities, and dispute resolution.",
      features: ["Contract drafting", "Legal compliance", "Insurance guidance", "Dispute resolution"]
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Track partnership success with detailed analytics on productivity, profitability, and sustainability metrics.",
      features: ["Yield tracking", "Financial reporting", "Sustainability metrics", "Performance insights"]
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Detailed geographic and demographic analysis to ensure optimal land-farmer matching for maximum productivity.",
      features: ["Geographic mapping", "Market proximity", "Transportation access", "Resource availability"]
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster a strong agricultural community through networking events, knowledge sharing, and collaborative initiatives.",
      features: ["Farmer networks", "Knowledge sharing", "Training programs", "Community events"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden" ref={ref}>
      <div className=" mx-auto  px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
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
            <span className="inline-block px-4 py-2 text-[#225122] bg-[#225122]/10 rounded-full text-sm font-medium">
              What We Offer
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive <span className="bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent">Agricultural Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From initial land matching to ongoing partnership support, we provide end-to-end services that ensure successful agricultural collaborations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group bg-white rounded-2xl p-8  transition-all duration-300 border border-gray-100 hover:border-[#225122]/20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center group-hover:text-[#225122] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#225122] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProcessSection = () => {
  const [ref, inView] = useInViewHook()

  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "Initial consultation to understand your needs, whether you're a land owner or lorem ",
      icon: Search
    },
    {
      step: "02", 
      title: "Matching",
      description: "Our advanced matching system connects compatible land owners and farmers based on multiple criteria.",
      icon: Users
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
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-[#1a4d1a] to-[#225122] relative overflow-hidden">
      <div className=" mx-auto  px-5 sm:px-6 lg:px-10" ref={ref}>
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
            <span className="inline-block px-4 py-2 text-[#4a8f4a] bg-[#4a8f4a]/10 rounded-full text-sm font-medium">
              Our Process
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How We <span className="bg-gradient-to-r text-[#83ea83b6] from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent">Connect Partners</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our streamlined process ensures successful partnerships through careful matching, verification, and ongoing support.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: "easeOut"
              }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#4a8f4a]/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-[#4a8f4a] text-sm font-bold mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#4a8f4a] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#225122] to-[#4a8f4a] transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CallToActionSection = () => {
  const [ref, inView] = useInViewHook()
  const { openContactPopup } = useContact()

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30 text-white">
            Ready to Get Started?
          </span>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join Our Agricultural Community Today
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Whether you're a landowner looking to maximize your property's potential or a farmer seeking the perfect land, we're here to help you succeed.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            onClick={openContactPopup}
            className="group bg-white text-[#225122] hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5" />
            <span>Get Started Now</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <motion.button 
            className="group border-2 border-white/50 text-white hover:bg-white hover:text-[#225122] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Learn More</span>
          </motion.button>
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