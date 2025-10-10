import React, { useState } from 'react'

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqData = [
    {
      id: 1,
      question: "What services do you offer for garden design?",
      answer: "We offer comprehensive garden design services including landscape planning, plant selection, soil analysis, irrigation system design, and seasonal maintenance planning. Our team works with you to create a customized garden that suits your space, climate, and preferences."
    },
    {
      id: 2,
      question: "How do you help connect farmers with landowners?",
      answer: "Our platform facilitates connections between farmers seeking land and landowners looking to lease their property for agricultural use. We provide verification services, contract assistance, and ongoing support to ensure successful partnerships that benefit both parties."
    },
    {
      id: 3,
      question: "What types of plants do you recommend for beginners?",
      answer: "For beginners, we recommend low-maintenance plants such as succulents, herbs like basil and mint, native flowering plants, and hardy vegetables like tomatoes and lettuce. These plants are forgiving, require minimal care, and provide quick results to build confidence."
    },
    {
      id: 4,
      question: "Do you provide ongoing garden maintenance services?",
      answer: "Yes, we offer comprehensive maintenance packages including regular watering, pruning, fertilizing, pest control, and seasonal plant care. Our maintenance plans are customizable based on your garden's specific needs and your budget."
    },
    {
      id: 5,
      question: "How long does a typical garden design project take?",
      answer: "Garden design projects typically take 2-6 weeks depending on the size and complexity. This includes initial consultation, design development, plant sourcing, and installation. We provide detailed timelines during our initial consultation."
    },
    {
      id: 6,
      question: "What is the cost range for your landscaping services?",
      answer: "Our services range from $500 for basic consultations to $10,000+ for complete landscape transformations. We offer free initial consultations to assess your needs and provide accurate pricing based on your specific requirements and budget."
    },
    {
      id: 7,
      question: "Do you work with sustainable and eco-friendly practices?",
      answer: "Absolutely! We prioritize sustainable gardening practices including native plant selection, water-efficient irrigation, organic fertilizers, natural pest control methods, and composting systems. We believe in creating beautiful gardens that are environmentally responsible."
    },
    {
      id: 8,
      question: "Can you help with indoor plant care and selection?",
      answer: "Yes, we provide indoor plant consulting services including plant selection based on your home's lighting conditions, care instructions, troubleshooting plant health issues, and creating indoor garden designs for homes and offices."
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className=" px-4 mb-10 md:px-10">
      <div className=" mx-auto ">
        {/* Header */}
        <div className="text-left mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r w-fit  from-[#1a4d1a] via-[#225122] to-[#4a8f4a] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#4b7c59]  mx-auto">
            Find answers to common questions about our gardening services, plant care, and how we connect farmers with landowners.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white  border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-[#4b7c59] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        
      </div>
    </section>
  )
}

export default Faq