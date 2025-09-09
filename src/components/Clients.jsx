import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MoonIcon = () => (
  <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Clients = React.memo(() => {
  useEffect(() => {
    
    gsap.fromTo(
      '.ocs-left p',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ocs-left',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.cli-logo',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.client-swiper',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

  
    gsap.fromTo(
      '.star',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stars-bg',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const clientLogos = [
    { src: './img/logo-l-1.svg', alt: 'Client 1' },
    { src: './img/logo-l-2.svg', alt: 'Client 2' },
    { src: './img/logo-l-14.svg', alt: 'Client 14' },
    { src: './img/logo-l-11.svg', alt: 'Client 11' },
    { src: './img/logo-l-12.svg', alt: 'Client 12' },
    { src: './img/logo-l-9.svg', alt: 'Client 9' },
    { src: './img/logo-l-4.svg', alt: 'Client 4' },
    { src: './img/logo-l-3.svg', alt: 'Client 3' },
    { src: './img/logo-l-5.svg', alt: 'Client 5' },
    { src: './img/logo-l-6.svg', alt: 'Client 6' },
    { src: './img/logo-l-15.svg', alt: 'Client 15', class: 'small' },
    { src: './img/logo-l-16.svg', alt: 'Client 16', class: 'esmall' },
  ]

  return (
    <section className="our-clients-sec bg-black dark:bg-white text-white dark:text-black py-16 animate-fadeIn section-transition transition-colors duration-300">
      
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

      <div className="container mx-auto px-8 relative z-10">
        <div className="ocs-left mb-8 animate-slideInLeft">
          <p className="text-lg font-medium text-white dark:text-black">
            <b>Your trusted UI UX design agency.</b>
          </p>
        </div>
        <div className="ocs-right animate-slideInRight">
          <div className="client-swiper">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
            >
              {clientLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className={`cli-logo ${logo.class || ''} animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-auto filter brightness-0 invert dark:brightness-100 dark:invert-0"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Clients
