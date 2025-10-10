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
      className='px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div 
          className='flex flex-col gap-4 sm:gap-6 lg:flex-1'
          variants={itemVariants}
        >
            
            <h1 className=' text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
              Connecting Farmers &  <span className='bg-gradient-to-r w-fit font-bold from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent'>Land-Owners</span>
            </h1>
            <motion.p 
              className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600  leading-relaxed'
              variants={itemVariants}
            >
              Bridge the gap between agricultural expertise and land resources. Our platform empowers farmers to find suitable land while helping landowners maximize their property's potential through sustainable farming partnerships.
            </motion.p>
            <motion.img 
              className='w-full hidden md:block  h-[50vh] object-cover' 
              src="https://plus.unsplash.com/premium_photo-1668456445067-fd72eb5b06fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2342" 
              alt="Farmers working together in agricultural field"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
        </motion.div>
        <motion.div
          className='lg:flex-shrink-0  lg:w-80 xl:w-96'
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            className='w-full  h-full object-cover' 
            src="https://plus.unsplash.com/premium_photo-1667939464537-396a9468bd22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2194" 
            alt="Landowner and farmer meeting to discuss partnership" 
          />
        </motion.div>
      </motion.div>
  )
}

export default HomeHero