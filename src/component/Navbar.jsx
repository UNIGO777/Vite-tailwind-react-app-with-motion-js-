import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);
  const [isHome, setIsHome] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / document.documentElement.scrollHeight) * 100;
      setBgWhite(scrollPercent >= 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);


  

  
  }, []);
  const location = useLocation();
  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  const linkVariants = {
    initial: { width: 0 },
    hover: { width: '100%' }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
    <motion.nav
      className={`fixed w-full shadow-sm  py-5 px-6 flex justify-between items-center z-20 transition-colors duration-300 ${'bg-[#f8fcf4]' }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link to="/" className="text-gray-800 font-semibold text-2xl">
          <img className='w-[30vw] sm:w-[25vw] md:w-[15vw] lg:w-[10vw] ' src={logo} alt="Bataidar Logo" />
        </Link>
      </motion.div>
      
      <div className="hidden md:flex space-x-8">
        {['ABOUT US', 'SERVICES', 'SOLUTIONS', 'CONTACT'].map((label, idx) => (
          <motion.div
            key={label}
            className="relative"
            initial="initial"
            whileHover="hover"
          >
            <Link
              to={idx === 0 ? '/about-us' : `/${label.toLowerCase()}`}
              className="font-bold text-primary"
            >
              {label}
            </Link>
            <motion.div
              className="absolute bottom-0 bg-black left-0 h-0.5"
              variants={linkVariants}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="flex md:hidden items-center">
        <motion.button
          className="md:hidden ml-4 text-gray-600 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
      
      <AnimatePresence>
       
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-[8vh] left-0 right-0 bg-[#f8fcf4] shadow-lg rounded-b-lg py-4 px-4 z-10 border-t border-gray-100"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {['ABOUT US', 'SERVICES', 'SOLUTIONS', 'CONTACT'].map((label, idx) => (
              <motion.div key={label} variants={itemVariants}>
                <Link
                  to={idx === 0 ? '/about-us' : `/${label.toLowerCase()}`}
                  className="block py-3 px-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
      {isMenuOpen &&<div className='bg-black absolute h-screen w-screen top-0 left-0 opacity-50 -z-10'></div>}</>
  )
}

export default Navbar