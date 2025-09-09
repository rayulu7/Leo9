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

const Expertise = React.memo(() => {
  useEffect(() => {
   
    gsap.fromTo(
      '.h-cont h4, .h-cont h5',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.h-cont',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.exp',
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '#mapCanvas',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      'ul li',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: 'ul',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const industries = [
    'Foodtech', 'Fintech', 'Healthtech', 'Ai Bots', 'Traveltech',
    'ECom', 'Realtech', 'Edtech'
  ]

  return (
    <section className="h-expertise-box bg-white dark:bg-black text-black dark:text-white py-16 animate-fadeIn section-transition transition-colors duration-300">
     
      <SunIcon />

      <div className="stopSec stopSecAbs stopSecExpertise"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="founderTriggerStart"></div>
        <div className="founderTriggerEnd"></div>
        <div className="h-cont animate-fadeInUp mb-8">
          <h4 className="text-2xl font-bold text-black dark:text-white">260+ projects delivered</h4>
          <h5 className="text-lg text-black dark:text-white">and counting more..</h5>
        </div>
        <div className="h-img expertiseImg relative mb-8">
          <div id="mapCanvas" className="absolute inset-0">
            
            <div className="exp exp1 bg-black dark:bg-white rounded-full w-8 h-8 absolute top-10 left-10 animate-bounce"></div>
            <div className="exp exp2 bg-black dark:bg-white rounded-full w-6 h-6 absolute top-20 right-20 animate-pulse"></div>
            <div className="exp exp3 bg-black dark:bg-white rounded-full w-10 h-10 absolute bottom-10 left-1/2 animate-spin"></div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center space-x-4 space-y-2">
          {industries.map((industry, index) => (
            <li key={index} className="text-black dark:text-white animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <a className="hover:underline transition-all duration-300">{industry}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})

export default Expertise
