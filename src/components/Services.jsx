import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = React.memo(() => {
  useEffect(() => {
   
    gsap.fromTo(
      '.hs-service h2',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hs-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

   
    gsap.fromTo(
      '.hsdot',
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.hs-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.h-serv-ul-1 li, .h-serv-ul-2 li, .h-serv-ul-3 li',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hs-box',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.hs-line, .hs-line-mob',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hs-img-box-up',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      '.hs-ellipse, .hs-ellipse-mob',
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '.hs-img-box-up',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section className="hs-box bg-white dark:bg-black text-black dark:text-white py-16 animate-fadeIn section-transition transition-colors duration-300">

      <div className="hs-service-trigger-1"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hs-service hs-service-1 mb-8 sm:mb-12 animate-slideInUp">
          <div className="hs-service-in text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 animate-fadeInUp">
              <span className="hsDotBox">
                <span className="hsdot bg-black dark:bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2 animate-pulse"></span>
              </span>
              <b>Design</b>
            </h2>
            <h2 className="hsTrigBtn cursor-pointer text-xl sm:text-2xl lg:text-3xl font-bold mb-4 animate-fadeInUp animation-delay-200">
              <span className="hsDotBox">
                <span className="hsdot bg-black dark:bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2 animate-pulse"></span>
              </span>
              <b>Technology</b>
            </h2>
            <h2 className="hsTrigBtn cursor-pointer text-xl sm:text-2xl lg:text-3xl font-bold mb-4 animate-fadeInUp animation-delay-400">
              <span className="hsDotBox">
                <span className="hsdot bg-black dark:bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2 animate-pulse"></span>
              </span>
              <b>Marketing</b>
            </h2>
            <span className="h-serv-ul-dummy"></span>
            <ul className="h-serv-ul-1 list-disc list-inside text-black dark:text-white animate-fadeInUp animation-delay-600 text-sm sm:text-base">
              <li><a className="hover:underline transition-all duration-300">UI Design</a></li>
              <li><a className="hover:underline transition-all duration-300">UX Design</a></li>
              <li><a className="hover:underline transition-all duration-300">UX Consultancy</a></li>
              <li><a className="hover:underline transition-all duration-300">Design System</a></li>
              <li><a className="hover:underline transition-all duration-300">Animation</a></li>
              <li><a className="hover:underline transition-all duration-300">Illustrations</a></li>
            </ul>
            <div className="hs-img-mob-up mt-6 sm:mt-8">
              <div className="hs-img-mob hs-img-mob-1">
                <div className="hs-service-mob-canvas" id="hs-service-1-mob-canvas">
                  <div className="hs-line-mob bg-black dark:bg-white h-1 w-full mb-2 animate-expandWidth"></div>
                  <div className="hs-ellipse-mob bg-black dark:bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-service hs-service-mob hs-service-2 mb-8 sm:mb-12 animate-slideInUp animation-delay-200">
          <div className="hs-service-in text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              <span className="hsDotBox">
                <span className="hsdot bg-black dark:bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2 animate-pulse"></span>
              </span>
              <b>Technology</b>
            </h2>
            <ul className="h-serv-ul-2 list-disc list-inside text-black dark:text-white text-sm sm:text-base">
              <li><a className="hover:underline transition-all duration-300">Web Development</a></li>
              <li><a className="hover:underline transition-all duration-300">Softwares</a></li>
              <li><a className="hover:underline transition-all duration-300">Mobile Apps</a></li>
              <li><a className="hover:underline transition-all duration-300">Web Apps</a></li>
              <li><a className="hover:underline transition-all duration-300">Front-end</a></li>
              <li><a className="hover:underline transition-all duration-300">Back-end</a></li>
            </ul>
            <div className="hs-img-mob-up mt-6 sm:mt-8">
              <div className="hs-img-mob hs-img-mob-2">
                <div className="hs-service-mob-canvas" id="hs-service-2-mob-canvas">
                  <div className="hs-line-mob bg-black dark:bg-white h-1 w-full mb-2 animate-expandWidth"></div>
                  <div className="hs-ellipse-mob bg-black dark:bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-service hs-service-mob hs-service-3 animate-slideInUp animation-delay-400">
          <div className="workTriggerStart"></div>
          <div className="hs-service-in text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              <span className="hsDotBox">
                <span className="hsdot bg-black dark:bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2 animate-pulse"></span>
              </span>
              <b>Marketing</b>
            </h2>
            <ul className="h-serv-ul-3 list-disc list-inside text-black dark:text-white text-sm sm:text-base">
              <li><a className="hover:underline transition-all duration-300">Branding</a></li>
              <li><a className="hover:underline transition-all duration-300">Brand Name</a></li>
              <li><a className="hover:underline transition-all duration-300">Brand Guidelines</a></li>
              <li><a className="hover:underline transition-all duration-300">Strategy</a></li>
              <li><a className="hover:underline transition-all duration-300">Digital Marketing</a></li>
              <li><a className="hover:underline transition-all duration-300">S.E.O.</a></li>
            </ul>
            <div className="hs-img-mob-up mt-6 sm:mt-8">
              <div className="hs-img-mob hs-img-mob-3">
                <div className="hs-service-mob-canvas" id="hs-service-3-mob-canvas">
                  <div className="hs-line-mob bg-black dark:bg-white h-1 w-full mb-2 animate-expandWidth"></div>
                  <div className="hs-ellipse-mob bg-black dark:bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-img-box-up mt-12 sm:mt-16 lg:mt-20">
          <div className="hs-img-box">
            <div className="hs-line bg-black dark:bg-white h-1 w-full mb-4 animate-expandWidth"></div>
            <div className="hs-ellipse bg-black dark:bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto animate-spin"></div>
            <div className="hs-img hs-1-img">
              <div id="hs-service-1-canvas">
                {/* Placeholder */}
              </div>
            </div>
            <div className="hs-img hs-2-img">
              <div id="hs-service-2-canvas">
                
              </div>
            </div>
            <div className="hs-img hs-3-img">
              <div id="hs-service-3-canvas">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Services
