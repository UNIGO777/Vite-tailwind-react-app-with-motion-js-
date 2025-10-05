import React, { useEffect, useState } from 'react'
import { Store, BarChart3, ShieldCheck, MapPin, Globe, CreditCard } from 'lucide-react'
import BlurTypingEffect from './BlurTypingEffect'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref: p1Ref, inView: visibleP1 } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: p2Ref, inView: visibleP2 } = useInView({ threshold: 0.1, triggerOnce: true })

  const points = [
    { id: 1, title: 'Direct Market Access', text: 'Farmers sell produce straight to land-owners, bypassing middlemen for better prices.', icon: <Store/> },
    { id: 2, title: 'Fair & Transparent Pricing', text: 'Real-time supply-demand data ensures every deal is market-driven and equitable.', icon: <BarChart3/> },
    { id: 3, title: 'Verified Profiles', text: 'KYC-verified farmers and buyers build trust and reduce transaction risk.', icon: <ShieldCheck/> },
    { id: 4, title: 'End-to-End Tracking', text: 'Live GPS and status updates keep both parties informed from harvest to doorstep.', icon: <MapPin/> },
    { id: 5, title: 'Multilingual Support', text: 'Interface in 10+ regional languages makes the platform accessible to all.', icon: <Globe/> },
    { id: 6, title: 'Secure Payments', text: 'Escrow-backed, UPI-integrated checkout releases funds only on confirmed delivery.', icon: <CreditCard/> }
  ]

  // Track visibility of each point card
  const [pointRefs, setPointRefs] = useState([])
  const [visiblePoints, setVisiblePoints] = useState([])

  useEffect(() => {
    setPointRefs(points.map(() => React.createRef()))
  }, [])

  useEffect(() => {
    if (!pointRefs.length) return
    const observers = pointRefs.map((ref, idx) => {
      if (!ref.current) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePoints(prev => [...new Set([...prev, idx])])
          }
        },
        { threshold: 0.2, triggerOnce: true }
      )
      observer.observe(ref.current)
      return observer
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [pointRefs])

  return (
    <>
    <div className='grid px-4 sm:px-6 md:px-8 lg:px-10 grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0'>
        <div className='flex flex-col items-center justify-center text-left'>
            <BlurTypingEffect
            className='w-full lg:max-w-[60vw] font-bold text-primary leading-tight'
              text="About us"
              textSizeClass='text-3xl xl:text-7xl'
              
            >
            </BlurTypingEffect>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 text-primary w-full'></h1>
        
        <p ref={p1Ref} className={`text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 transition-opacity duration-1000 ${visibleP1 ? 'opacity-100' : 'opacity-0'}`}>
            Bataidar is a pioneering agri-tech platform that bridges the gap between India's hardworking farmers and progressive land-owners. By eliminating layers of intermediaries, we enable farmers to sell their fresh, seasonal produce—be it grains, fruits, or vegetables—directly to land-owners at fair, market-driven prices. Our intuitive, multilingual interface guides users from listing to payment, while end-to-end encryption, verified profiles, and real-time tracking guarantee a secure, transparent transaction every time. From soil to sale, Bataidar keeps the supply chain short, honest, and profitable for every stakeholder.
        </p>
        <p ref={p2Ref} className={`text-sm sm:text-base md:text-lg leading-relaxed transition-opacity duration-1000 ${visibleP2 ? 'opacity-100' : 'opacity-0'}`}>
            By cutting out middlemen, Bataidar empowers farmers to earn higher prices while giving land-owners access to fresher, more affordable produce. Our transparent platform builds trust, reduces waste, and strengthens local communities. Join thousands of users who are already transforming India's agricultural marketplace into one that is fairer, faster, and more profitable for everyone involved.
        </p>
        </div>
        <div className='Points grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6'>
          {points.map((point, idx) => (
            <div
              key={point.id}
              ref={pointRefs[idx]}
              className={`flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#e1eae3] rounded-lg transition-all duration-700 ease-out transform ${
                visiblePoints.includes(idx)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div>
              <div className='w-6 h-6 sm:w-8 sm:h-8 mb-2'>
                {point.icon}
              </div>
                <h1 className='text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2'>{point.title}</h1>
                <p className='text-xs sm:text-sm text-gray-700 leading-relaxed'>
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default About