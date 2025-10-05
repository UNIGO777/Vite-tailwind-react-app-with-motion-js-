import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { 
  Sprout, 
  Droplets, 
  Zap, 
  Shield, 
  BarChart3, 
  Smartphone,
  Leaf,
  Sun,
  CloudRain,
  Thermometer,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Users,
  Target,
  Award,
  Globe,
  Lightbulb
} from 'lucide-react'
import Footer from '../component/Footer'
import { useContact } from '../context/ContactContext'

const SolutionsHero = () => {
  const { openContactPopup } = useContact()
  
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
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#394937] rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 sm:px-4 py-2 bg-white/40 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-[#394937]/30 flex items-center gap-2 w-fit mx-auto">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
            Innovative Agricultural Solutions
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Smart Agriculture
          <motion.span 
            className="block bg-gradient-to-r text-[#566d53] from-[#394937] via-[#4a5a48] to-[#5c6b5a] bg-clip-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Solutions
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Discover cutting-edge agricultural technologies and solutions designed to maximize crop yields, 
          optimize resource usage, and create sustainable farming practices for the future.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button 
            onClick={openContactPopup}
            className="bg-gradient-to-r from-[#394937] to-[#4a5a48] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-[#4a5a48] hover:to-[#5c6b5a] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Explore Solutions</span>
          </motion.button>
          
          <motion.button 
            onClick={openContactPopup}
            className="border-2 border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Get Consultation</span>
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

const SolutionCard = ({ icon: Icon, title, description, features, category }) => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-6 sm:p-8  transition-all duration-300 border border-gray-100 group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#394937] to-[#4a5a48] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div>
          <span className="text-xs sm:text-sm text-[#394937] font-medium bg-[#394937]/10 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#394937] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm sm:text-base">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#394937] flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      
    </motion.div>
  )
}

const SolutionsGrid = () => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  const solutions = [
    {
      icon: Droplets,
      title: "Smart Irrigation Systems",
      category: "Water Management",
      description: "Advanced irrigation solutions that optimize water usage through IoT sensors, weather data integration, and automated scheduling.",
      features: [
        "Soil moisture monitoring",
        "Weather-based scheduling",
        "Remote control via mobile app",
        "Water usage analytics"
      ]
    },
    {
      icon: BarChart3,
      title: "Crop Monitoring & Analytics",
      category: "Data Analytics",
      description: "Real-time crop health monitoring using satellite imagery, drones, and AI-powered analytics for better decision making.",
      features: [
        "Satellite crop monitoring",
        "Disease detection alerts",
        "Yield prediction models",
        "Growth stage tracking"
      ]
    },
    {
      icon: Shield,
      title: "Precision Pest Control",
      category: "Crop Protection",
      description: "Targeted pest management solutions using biological controls, smart traps, and predictive modeling.",
      features: [
        "Early pest detection",
        "Biological control methods",
        "Reduced chemical usage",
        "Integrated pest management"
      ]
    },
    {
      icon: Thermometer,
      title: "Climate Control Systems",
      category: "Environment",
      description: "Greenhouse and field climate management systems for optimal growing conditions year-round.",
      features: [
        "Temperature regulation",
        "Humidity control",
        "CO2 monitoring",
        "Automated ventilation"
      ]
    },
    {
      icon: Leaf,
      title: "Organic Fertilizer Solutions",
      category: "Soil Health",
      description: "Sustainable fertilizer programs using organic compounds and precision application techniques.",
      features: [
        "Soil health analysis",
        "Custom nutrient blends",
        "Organic certification support",
        "Application timing optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "Farm Management Software",
      category: "Digital Tools",
      description: "Comprehensive farm management platform for planning, tracking, and optimizing all farming operations.",
      features: [
        "Field mapping and planning",
        "Inventory management",
        "Financial tracking",
        "Compliance reporting"
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-3 sm:px-4 py-2 bg-[#394937]/10 rounded-full text-xs sm:text-sm font-medium text-[#394937] flex items-center gap-2 w-fit mx-auto">
              <Target className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Solutions Portfolio
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive Agricultural
            <span className="block text-[#394937]">Technology Solutions</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From smart irrigation to precision agriculture, our innovative solutions help farmers 
            increase productivity while promoting sustainable farming practices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SolutionCard {...solution} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  const [ref, inView] = useInViewHook({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Our solutions help farmers achieve up to 40% higher crop yields through optimized resource management and precision agriculture techniques.",
      stats: "40% Higher Yields"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Smart irrigation systems reduce water consumption by up to 30% while maintaining optimal crop health and growth conditions.",
      stats: "30% Water Savings"
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "Environmentally friendly solutions that reduce chemical usage and promote sustainable farming for future generations.",
      stats: "50% Less Chemicals"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Advanced monitoring and control systems ensure consistent crop quality and compliance with international standards.",
      stats: "99% Quality Rate"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 sm:px-4 py-2 bg-[#394937]/10 rounded-full text-xs sm:text-sm font-medium text-[#394937] flex items-center gap-2 w-fit mx-auto">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Why Choose Our Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Proven Results That
            <span className="block text-[#394937]">Drive Success</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our agricultural solutions deliver measurable results that transform farming operations 
            and create sustainable value for farmers worldwide.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#394937] to-[#4a5a48] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#394937] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {feature.stats}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#394937] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-br from-[#394937] to-[#4a5a48] rounded-3xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Complete Agricultural Transformation
              </h3>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                From traditional farming to smart agriculture - our comprehensive solutions 
                provide everything you need for a successful digital transformation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">24/7 Technical Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Training & Onboarding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Regular Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">ROI Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Farms Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-xs sm:text-sm text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className=" mx-auto ">
        <motion.div
          ref={ref}
          className="bg-gradient-to-br from-[#394937] via-[#4a5a48] to-[#5c6b5a]  p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full"
            animate={{ 
              y: [0, 10, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>

          <div className="relative z-10 text-center">
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30 flex items-center gap-2 w-fit mx-auto">
                <Sprout className="w-4 h-4" />
                Ready to Transform Your Farm?
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Start Your Agricultural
              <span className="block">Revolution Today</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join thousands of farmers who have already transformed their operations with our 
              cutting-edge agricultural solutions. Get started with a free consultation today.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button 
                onClick={openContactPopup}
                className="bg-white text-[#394937] font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 text-base sm:text-lg shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </motion.button>
              
              <motion.button 
                onClick={openContactPopup}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm text-base sm:text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                <span>Schedule Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Happy Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-gray-300"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Globe className="w-4 h-4" />
                <span>solutions@bataidar.com</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <SolutionsHero />
      <SolutionsGrid />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default Solutions