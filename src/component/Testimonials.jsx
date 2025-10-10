import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BlurTypingEffect from './BlurTypingEffect'

const testimonialsData = [
  {
    id: 1,
    name: "Ramesh Patel",
    role: "Farmer",
    location: "Gujarat",
    testimonial: "Bataidar helped me find the perfect land lease. The process was smooth and transparent. I found a trustworthy landowner within days!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Landowner",
    location: "Punjab",
    testimonial: "As a landowner, I was looking for reliable farmers. Bataidar connected me with experienced farmers who now cultivate my land efficiently.",
    rating: 5
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "Farmer",
    location: "Haryana",
    testimonial: "The platform is amazing! I got multiple land options and could compare them before making a decision. Highly recommend Bataidar.",
    rating: 5
  },
  {
    id: 4,
    name: "Sunita Verma",
    role: "Landowner",
    location: "Rajasthan",
    testimonial: "I was skeptical at first, but Bataidar proved to be genuine. Found a responsible farmer who takes good care of my ancestral land.",
    rating: 4
  },
  {
    id: 5,
    name: "Vikram Kumar",
    role: "Farmer",
    location: "Uttar Pradesh",
    testimonial: "Best platform for agricultural land connections. The verification process gives confidence to both parties. My farming business has grown significantly.",
    rating: 5
  },
  {
    id: 6,
    name: "Anita Devi",
    role: "Landowner",
    location: "Bihar",
    testimonial: "I had unused land for years. Bataidar helped me find a dedicated farmer who transformed it into a productive farm. Great experience!",
    rating: 5
  }
]

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className='p-5 md:p-10 pt-10' ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex "
      >
        <h1 className='bg-gradient-to-r w-fit font-bold from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-3xl border-l-2 border-r-2 mb-5 px-3 border-[#4a8f4a]'>
              Testimonials
            </h1>
      </motion.div>

      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className='bg-gradient-to-r w-fit font-bold from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent text-sm sm:text-4xl md:text-5xl lg:text-3xl xl:text-2xl'>
              Real stories from farmers and landowners who connected through Bataidar.
            </p>
        
      </motion.div>

      <motion.div
        className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {testimonialsData.map((t) => (
          <motion.div
            key={t.id}
            variants={itemVariants}
            className=" rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r w-fit font-bold from-[#1a4d1a]/20 via-[#225122]/20 to-[#4a8f4a]/30"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center mb-4">
              {/* Avatar placeholder */}
              <motion.div
                className="w-12 h-12 rounded-full bg-[#f8fcf4]/60 flex items-center justify-center text-primary font-bold"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {t.name.charAt(0)}
              </motion.div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}, {t.location}</p>
              </div>
            </div>

            <motion.p
              className=" mb-4 italic bg-gradient-to-r from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              “{t.testimonial}”
            </motion.p>

            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className={`w-5 h-5 ${i < t.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials