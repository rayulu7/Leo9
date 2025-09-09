import React, { useState } from 'react'

const MoonIcon = () => (
  <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Quote = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Form submitted:', formData)
  }

  return (
    <section className="h-quote-box bg-black dark:bg-white text-white dark:text-black py-16 animate-fadeIn section-transition transition-colors duration-300">
     
      <MoonIcon />

      
      <div className="stars-bg">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="quoteTriggerEnd"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="row flex flex-col md:flex-row items-center">
          <div className="w100 wwr-content mb-8 md:mb-0 animate-slideInLeft">
            <div className="h-cont">
              <h2 className="hdg1 text-3xl md:text-5xl font-bold text-white dark:text-black leading-tight animate-fadeInUp">
                Let's build something amazing together
              </h2>
            </div>
          </div>
          <div className="w100 wwr-animation animate-slideInRight">
            <div className="h-img quoteImg relative">
              <div id="quoteCanvas" className="absolute inset-0">
                
                <div className="quo quo1 bg-white dark:bg-black rounded-full w-12 h-12 absolute top-10 left-10 animate-bounce"></div>
                <div className="quo quo2 bg-white dark:bg-black rounded-full w-8 h-8 absolute top-20 right-20 animate-pulse"></div>
                <div className="quo quo3 bg-white dark:bg-black rounded-full w-16 h-16 absolute bottom-10 left-1/2 animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-form mt-12 animate-slideInUp animation-delay-400">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white dark:border-black rounded-md bg-black dark:bg-white text-white dark:text-black placeholder-white dark:placeholder-black focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black transition-all duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white dark:border-black rounded-md bg-black dark:bg-white text-white dark:text-black placeholder-white dark:placeholder-black focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black transition-all duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-white dark:border-black rounded-md bg-black dark:bg-white text-white dark:text-black placeholder-white dark:placeholder-black focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black transition-all duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-white dark:border-black transition-all duration-300 animate-bounceIn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})

export default Quote
