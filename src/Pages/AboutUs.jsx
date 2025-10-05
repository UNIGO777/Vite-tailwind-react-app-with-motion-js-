import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Wheat, 
  Target, 
  Eye, 
  Gem, 
  Sprout, 
  Users, 
  BookOpen, 
  User, 
  UserCheck, 
  FlaskConical, 
  Laptop 
} from 'lucide-react'
import Footer from '../component/Footer'

const AboutUsHero = () => {
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 rounded-full text-sm font-medium backdrop-blur-sm border border-[#394937]/30">
            <Wheat className="w-4 h-4" />
            About Bataidar
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Cultivating
          <motion.span 
            className="block bg-gradient-to-r text-[#566d53] from-[#394937] via-[#4a5a48] to-[#5c6b5a] bg-clip-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Agricultural Success
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We are dedicated to revolutionizing agriculture by connecting land owners with passionate farmers, creating sustainable partnerships that benefit communities and drive agricultural innovation.
        </motion.p>

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

const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const missions = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between land owners and farmers, creating sustainable agricultural partnerships that benefit both parties while strengthening rural communities and promoting food security."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the leading platform for agricultural land partnerships, fostering innovation, sustainability, and prosperity in farming communities worldwide."
    },
    {
      icon: Gem,
      title: "Our Values",
      description: "Integrity, sustainability, innovation, and community. We believe in transparent partnerships, environmental stewardship, and empowering farmers with the resources they need to succeed."
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-[#394937] rounded-full opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#4a5a48] rounded-full opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto  relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#394937]/10 text-[#394937] rounded-full text-xs sm:text-sm font-medium">
              <Sprout className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Foundation
            </span>
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What Drives <span className="bg-gradient-to-r from-[#394937] to-[#4a5a48] bg-clip-text text-transparent">Us Forward</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8  border border-gray-100 text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex justify-center mb-4 sm:mb-6"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <mission.icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#394937]" />
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{mission.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      icon: User,
      description: "20+ years in agriculture and business development. Passionate about sustainable farming and rural development.",
      expertise: ["Agricultural Strategy", "Business Development", "Rural Economics"]
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      icon: UserCheck,
      description: "Expert in agricultural operations and land management with extensive field experience.",
      expertise: ["Operations Management", "Land Assessment", "Partnership Development"]
    },
    {
      name: "Dr. Amit Patel",
      position: "Agricultural Advisor",
      icon: FlaskConical,
      description: "PhD in Agricultural Sciences with focus on sustainable farming practices and soil management.",
      expertise: ["Soil Science", "Sustainable Farming", "Research & Development"]
    },
    {
      name: "Sunita Reddy",
      position: "Technology Lead",
      icon: Laptop,
      description: "Leading our digital transformation with innovative solutions for agricultural partnerships.",
      expertise: ["Platform Development", "Data Analytics", "Digital Innovation"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-[#394937] to-[#2d3a2b] relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto  relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-[#394937] bg-white/40 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-[#394937]/30">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Team
            </span>
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet Our <span className="bg-gradient-to-r from-[#394937] to-[#4a5a48] bg-clip-text text-[#758972]">Expert Team</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our diverse team of agricultural experts, technology professionals, and business leaders work together to create innovative solutions for the farming community.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white/20"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex justify-center mb-3 sm:mb-4"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <member.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#394937] font-medium mb-3 bg-white/20 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm">{member.position}</p>
              <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{member.description}</p>
              <div className="space-y-1">
                {member.expertise.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="inline-block bg-[#394937]/30 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1.2 + index * 0.2 + skillIndex * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#394937]/10 text-[#394937] rounded-full text-xs sm:text-sm font-medium">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                Our Story
              </span>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From Vision to <span className="bg-gradient-to-r from-[#394937] to-[#4a5a48] bg-clip-text text-transparent">Reality</span>
            </motion.h2>
            <motion.div 
              className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                Bataidar was born from a simple observation: countless acres of fertile land remained underutilized while passionate farmers struggled to find suitable agricultural opportunities. Our founders, with deep roots in rural communities, recognized the need for a platform that could bridge this gap effectively.
              </p>
              <p>
                Starting in 2020, we began as a small initiative to connect local farmers with landowners in our region. What started as a community-driven effort has now grown into a comprehensive platform serving agricultural partnerships across multiple states.
              </p>
              <p>
                Today, we're proud to have facilitated over 500 successful partnerships, helping farmers access quality land while enabling landowners to maximize their property's agricultural potential. Our commitment to transparency, sustainability, and community development continues to drive everything we do.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#394937] to-[#4a5a48] rounded-2xl p-6 sm:p-8 text-white">
              <motion.div 
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Impact</h3>
                <p className="text-sm sm:text-base text-gray-200">Making a difference in agricultural communities</p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: "500+", label: "Partnerships Created" },
                  { number: "10,000+", label: "Acres Connected" },
                  { number: "50+", label: "Districts Served" },
                  { number: "95%", label: "Success Rate" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-gray-200 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <MissionSection />
      <StorySection />
      <TeamSection />
      <Footer />
    </>
  )
}

export default AboutUs