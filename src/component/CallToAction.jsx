import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BlurTypingEffect from './BlurTypingEffect'
import { useContact } from '../context/ContactContext'

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { openContactPopup } = useContact()

  return (
    <section ref={ref} className='bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mx-auto min-h-[30vh] md:min-h-[50vh] flex items-center justify-center'
        >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-white text-center flex flex-col items-center'
            >
                
                  <BlurTypingEffect
                   textSizeClass='text-2xl md:text-6xl'
                   className=' w-fit mb-5 px-10'
                   text='Ready to Get Started?'
                   />
                
               
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className='text-md mb-8'
                >
                  Join Bataidar today and connect with farmers, landowners, and agricultural enthusiasts.
                </motion.p>

                <motion.button
                  onClick={openContactPopup}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className='bg-[#f8fcf4] text-[#1a4d1a] text-xl px-8 py-3 rounded-full font-bold inline-block cursor-pointer'
                >
                  Contact Us
                </motion.button>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default CallToAction