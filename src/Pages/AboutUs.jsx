import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  Users, 
  BookOpen, 
  Leaf, 
  Heart, 
  Shield,
  User,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react'
import Footer from '../component/Footer'

const AboutUsHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] flex items-center justify-center overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#225122] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#225122] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#225122] rounded-full opacity-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

     

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
              <Users className="w-4 h-4" />
              About Bataidar
            </span>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting <span className="bg-gradient-to-r text-[#4a8f4a] from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text">Farmers</span> & <span className="bg-gradient-to-r text-[#4a8f4a] from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text">Landowners</span>
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We bridge the gap between passionate farmers and landowners, creating sustainable agricultural partnerships that benefit communities and the environment.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="px-8 py-4 bg-white text-[#225122] rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Our Mission
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#225122] transition-colors">
              Meet Our Team
            </button>
          </motion.div>
        </motion.div>
      </div>
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
      description: "To create a transparent, efficient platform that connects farmers with landowners, fostering sustainable agricultural practices and economic growth in rural communities."
    },
    {
      icon: Leaf,
      title: "Our Vision",
      description: "A world where every piece of fertile land is utilized to its full potential, supporting both environmental sustainability and agricultural prosperity."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Transparency, sustainability, community support, and innovation drive everything we do. We believe in building lasting relationships based on trust and mutual benefit."
    }
  ]

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#225122]/10 text-[#225122] rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Our Foundation
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What Drives <span className="bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent">Us Forward</span>
          </motion.h2>
          <motion.p 
            className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our commitment to agricultural excellence and community development shapes every decision we make.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100  transition-shadow"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] rounded-full flex items-center justify-center">
                  <mission.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{mission.description}</p>
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
      description: "Agricultural engineer with 15+ years of experience in rural development and farming technologies.",
      icon: User,
      expertise: ["Agricultural Technology", "Rural Development", "Business Strategy"]
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      description: "Operations specialist focused on streamlining farmer-landowner partnerships and platform efficiency.",
      icon: Briefcase,
      expertise: ["Operations Management", "Partnership Development", "Process Optimization"]
    },
    {
      name: "Dr. Amit Patel",
      position: "Agricultural Advisor",
      description: "PhD in Agricultural Sciences, providing expert guidance on sustainable farming practices and crop optimization.",
      icon: GraduationCap,
      expertise: ["Sustainable Farming", "Crop Science", "Agricultural Research"]
    },
    {
      name: "Sunita Devi",
      position: "Community Relations",
      description: "Dedicated to building strong relationships with farming communities and ensuring their needs are met.",
      icon: Award,
      expertise: ["Community Outreach", "Farmer Relations", "Rural Communication"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#225122] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Pattern Overlay */}
     
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 px-4"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 text-white bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
              <Users className="w-4 h-4" />
              Our Team
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet Our <span className="bg-gradient-to-r text-[#4a8f4a] from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text">Expert Team</span>
          </motion.h2>
          <motion.p 
            className="text-md md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our diverse team of agricultural experts, technology professionals, and business leaders work together to create innovative solutions for the farming community.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
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
                className="flex justify-center mb-4"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <member.icon className="w-16 h-16 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-green-200 font-medium mb-4 bg-white/20 rounded-full px-3 py-1 text-sm">{member.position}</p>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed">{member.description}</p>
              <div className="space-y-1">
                {member.expertise.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="inline-block bg-[#225122]/30 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1"
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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#225122]/10 text-[#225122] rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Our Story
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From Vision to <span className="bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent">Reality</span>
            </motion.h2>
            <motion.div 
              className="space-y-6 text-gray-600 leading-relaxed"
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
            <div className="bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] rounded-2xl p-8 text-white">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="text-gray-200">Making a difference in agricultural communities</p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-6">
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
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
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