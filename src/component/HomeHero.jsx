import React from 'react'
import { motion } from 'framer-motion'
import BlurTypingEffect from './BlurTypingEffect'



const HomeHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className='p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div 
          className='gap-3 sm:gap-4 md:gap-5 flex flex-col'
          variants={itemVariants}
        >
            <BlurTypingEffect 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl max-w-full lg:max-w-[60vw] font-bold text-primary leading-tight'
              text="Connecting Farmers & Land-Owners"
              textSizeClass='xl:text-7xl'
              duration={1}
            >
            </BlurTypingEffect>
            <motion.p 
              className='text-sm sm:text-base md:text-lg lg:text-base text-gray-600 max-w-4xl leading-relaxed'
              variants={itemVariants}
            >
              Bridge the gap between agricultural expertise and land resources. Our platform empowers farmers to find suitable land while helping landowners maximize their property's potential through sustainable farming partnerships.
            </motion.p>
            <motion.img 
              className='w-full lg:w-[55vw] h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[58vh] rounded-2xl sm:rounded-3xl object-cover' 
              src="https://images.unsplash.com/photo-1699622562082-f08853081066?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Farmers working together in agricultural field"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
        </motion.div>
        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            className='w-full lg:w-[40vw] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[83vh] rounded-2xl sm:rounded-3xl object-cover' 
            src="https://images.unsplash.com/photo-1580635849262-3161a7c99dac?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Landowner and farmer meeting to discuss partnership" 
          />
        </motion.div>
      </motion.div>
  )
}

export default HomeHero