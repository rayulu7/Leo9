import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SunIcon = () => (
  <svg className="sun-icon" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const Hero = React.memo(() => {
  useEffect(() => {
   
    gsap.fromTo(
      '#lionCanvas img',
      { opacity: 0, scale: 0.8, rotation: -10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#lionCanvas',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.lion-content-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.hero-para',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.lion-content-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.scroll_Down_box',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.scroll_Down_box',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.sun-icon',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '.home-banner',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section className="home-banner relative bg-white dark:bg-black text-black dark:text-white py-24 min-h-screen flex items-center animate-fadeIn section-transition transition-colors duration-300">
      
      <SunIcon />

      <div className="lionAnimTriggerStart"></div>
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="lion-box w-full md:w-1/2 flex justify-center mb-12 md:mb-0 animate-slideInLeft">
          <div id="lionCanvas" className="lightAnim">
            <div className="initDot"></div>
          
            <img
              src="https://leo9studio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flion-polygon.3a3a7a3a.png&w=1920&q=75"
              alt="Polygon Lion"
              className="max-w-xs md:max-w-md animate-pulse"
            />
          </div>
          <div id="particles-js" className="absolute inset-0"></div>
        </div>
        <div className="lion-content-box w-full md:w-1/2 text-center md:text-left animate-slideInRight">
          <div className="hb-right">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white animate-fadeInUp">
              Design
            </h1>
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white animate-fadeInUp animation-delay-200">
              Transform
            </h1>
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white animate-fadeInUp animation-delay-400">
              Accelerate
            </h1>
            <p className="hero-para mt-6 text-base sm:text-lg text-black dark:text-white max-w-md mx-auto md:mx-0 animate-fadeInUp animation-delay-600">
              Redefining user experiences through Behavioural Science & AI
            </p>
          </div>
        </div>
      </div>
    
      <div className="scroll_Down_box absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <span className="text-black dark:text-white">Scroll</span>
        <div className="scroll_Down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-white animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
})

export default Hero;
