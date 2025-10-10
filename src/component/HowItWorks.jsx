import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import BlurTypingEffect from './BlurTypingEffect'

const HowItWorks = () => {
    const [showWorkflow, setShowWorkflow] = useState(false)

    const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.3, triggerOnce: true })

    useEffect(() => {
        const timer = setTimeout(() => setShowWorkflow(true), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className='bg-gradient-to-br from-[#1a4d1a] via-[#225122] to-[#4a8f4a] relative'>
            <div className='px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20'>
                <BlurTypingEffect
                    className="font-normal text-white"
                    textSizeClass='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                    text="SIMPLE STEPS FOR OUR"
                    duration={0.5}
                    as='h1'
                />

                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal flex flex-col sm:flex-row gap-2 sm:gap-5 text-white`}
                >
                    <span className={`text-[#f8fcf4] transition-opacity duration-1000 ${showWorkflow ? 'opacity-40' : 'opacity-0'}`}>WORKFLOW </span>

                    <BlurTypingEffect
                        className="font-normal text-white"
                        textSizeClass='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                        text="WORKS"
                        duration={2}
                        as='span'
                    />
                </h1>
            </div>
            <h1 className='text-xs sm:text-sm absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 opacity-80 text-white text-center border-x-2 border-white w-fit px-2 sm:px-4'> HOW IT WORKS </h1>
            <div ref={gridRef} className='min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] grid p-4 sm:p-8 md:p-12 lg:p-20 grid-rows-1 md:grid-rows-2'>
                {/* Mobile and Tablet Layout */}
                <div className='md:hidden space-y-6'>
                    <div className={`bg-white/5 rounded-lg p-6 transition-all duration-1000 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className='text-2xl sm:text-3xl text-[#f8fcf4] font-semibold mb-3'>01 | Fill Contact Form</h1>
                        <p className='text-white text-sm sm:text-base'>Share your basic details so we can reach you</p>
                    </div>
                    <div className={`bg-white/5 rounded-lg p-6 transition-all duration-1000 delay-150 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className='text-2xl sm:text-3xl text-[#f8fcf4] font-semibold mb-3'>02 | Our Agent Will Call</h1>
                        <p className='text-white text-sm sm:text-base'>Expect a quick call to understand your needs</p>
                    </div>
                    <div className={`bg-white/5 rounded-lg p-6 transition-all duration-1000 delay-300 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className='text-2xl sm:text-3xl text-[#f8fcf4] font-semibold mb-3'>03 | Share Requirements</h1>
                        <p className='text-white text-sm sm:text-base'>Tell us exactly what land you're looking for</p>
                    </div>
                    <div className={`bg-white/5 rounded-lg p-6 transition-all duration-1000 delay-450 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className='text-2xl sm:text-3xl text-[#f8fcf4] font-semibold mb-3'>04 | Take Your Land</h1>
                        <p className='text-white text-sm sm:text-base'>We'll find and secure the perfect plot for you</p>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className='hidden md:contents'>
                    <div className={`border-b-2 grid grid-cols-3 transition-all duration-1000 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className='border-r-2'></div>
                        <div className='flex flex-col items-center border-r-2 py-12 lg:py-20 p-6 lg:p-10'>
                            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-[#f8fcf4] w-full font-semibold'>01 | Fill Contact Form</h1>
                            <p className='text-white w-full text-sm lg:text-base'>Share your basic details so we can reach you</p>
                        </div>
                        <div className='flex flex-col items-center py-12 lg:py-20 p-6 lg:p-10'>
                            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-[#f8fcf4] w-full font-semibold'>02 | Our Agent Will Call</h1>
                            <p className='text-white w-full text-sm lg:text-base'>Expect a quick call to understand your needs</p>
                        </div>
                    </div>
                    <div className={`flex w-full transition-all duration-1000 delay-300 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className='flex flex-col w-[50%] justify-center items-center border-r-2 py-12 lg:py-20 p-6 lg:p-10'>
                            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-[#f8fcf4] w-full font-semibold'>03 | Share Requirements</h1>
                            <p className='text-white w-full text-sm lg:text-base'>Tell us exactly what land you're looking for</p>
                        </div>
                        <div className='flex flex-col w-[50%] justify-center items-center py-12 lg:py-20 p-6 lg:p-10'>
                            <h1 className='text-2xl lg:text-3xl xl:text-4xl text-[#f8fcf4] w-full font-semibold'>04 | Take Your Land</h1>
                            <p className='text-white w-full text-sm lg:text-base'>We'll find and secure the perfect plot for you</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks