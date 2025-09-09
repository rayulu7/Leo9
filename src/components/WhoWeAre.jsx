import React from 'react'

const MoonIcon = () => (
  <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const WhoWeAre = React.memo(() => {
  return (
    <section className="who-we-are-box bg-black dark:bg-white text-white dark:text-black py-16 animate-fadeIn section-transition transition-colors duration-300">
      {/* Half Moon Icon for Dark Theme */}
      <MoonIcon />

      {/* Stars Background */}
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

      <div className="lionAnimTriggerEnd"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="row flex flex-col md:flex-row items-center">
          <div className="w100 wwr-content mb-12 md:mb-0 animate-slideInLeft">
            <div className="h-cont">
              <h2 className="hdg1 text-3xl md:text-5xl font-bold text-white dark:text-black leading-tight animate-fadeInUp">
                We are a global creative agency that combines design expertise with technology and intelligence.
              </h2>
            </div>
          </div>
          <div className="w100 wwr-animation animate-slideInRight">
            <div className="h-img whoWeAreImg relative">
              <div id="whoWeAreCanvas" className="absolute inset-0">
                {/* Animated elements */}
                <div className="wwa wwa1 bg-white dark:bg-black rounded-full w-16 h-16 absolute top-10 left-10 animate-bounce"></div>
                <div className="wwa wwa2 bg-white dark:bg-black rounded-full w-12 h-12 absolute top-20 right-20 animate-pulse"></div>
                <div className="wwa wwa3 bg-white dark:bg-black rounded-full w-20 h-20 absolute bottom-10 left-1/2 animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default WhoWeAre
