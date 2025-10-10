import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useContact } from '../context/ContactContext'

const GetInTouch = () => {
  const { openContactPopup } = useContact()
  
  // Stagger children animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  }

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.3 }
    }
  }

  return (
    <>
      <section className="flex items-center max-w-[100vw] overflow-hidden justify-center px-4 py-8 md:py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full  mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column */}
          <motion.div
            className=" md:p-6 lg:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl  bg-gradient-to-r w-fit font-bold from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent mb-5"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-[#4a7c59] mb-5"
              variants={itemVariants}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa non architecto mollitia reiciendis minima itaque. Neque libero magni dignissimos reprehenderit!
            </motion.p>

            <motion.div className="mt-5 space-y-4" variants={itemVariants}>
              <div>
                <h3 className="text-sm md:text-md font-bold text-[#4a7c59]">Email</h3>
                <p className="text-sm md:text-md text-[#4a7c59]">info@bataidar.com</p>
              </div>
              <div>
                  <h3 className="text-sm md:text-md font-bold text-[#4a7c59]">Phone</h3>
                  <p className="text-sm md:text-md text-[#4a7c59]">+91 9876543210</p>
                </div>
                <div>
                  <h3 className="text-sm md:text-md font-bold text-[#4a7c59]">Address</h3>
                  <p className="text-sm md:text-md text-[#4a7c59]">123 Main St, Anytown, USA</p>
              </div>
            </motion.div>

            <motion.div className="mt-8" variants={itemVariants}>
              <h3 className="text-sm md:text-md font-bold text-[#4a7c59] mb-4">Follow Us</h3>
              <div className="flex gap-4 md:gap-5">
                <motion.a
                  href="#"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={20} md:size={24} className="text-[#4a7c59]" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} md:size={24} className="text-[#4a7c59]" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} md:size={24} className="text-[#4a7c59]" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} md:size={24} className="text-[#4a7c59]" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className=" rounded-lg"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="text-xl md:text-2xl lg:text-5xl font-bold bg-gradient-to-r w-fit  from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              Send Us a Message
            </motion.h3>
            <motion.form
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-[#4a7c59] mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent bg-[#e2ede3]"
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-[#4a7c59] mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#e2ede3]"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-[#4a7c59] mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#e2ede3] resize-none"
                  placeholder="Enter your message"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="button"
                onClick={openContactPopup}
                className="w-full bg-[#4a7c59] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-[#3e6b4a] transition-colors duration-200 mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default GetInTouch