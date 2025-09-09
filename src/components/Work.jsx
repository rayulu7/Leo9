import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SunIcon = () => (
  <svg className="sun-icon" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const MoonIcon = () => (
  <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Work = React.memo(() => {
  useEffect(() => {
    // Animate header text
    gsap.fromTo(
      '.hdg1',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.h-work-hdn-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Animate stars
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

    // Animate swiper slides
    gsap.fromTo(
      '.h-work',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.h-work-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Animate view all work button
    gsap.fromTo(
      '.h-work-btn button',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '.h-work-btn',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const projects = [
    {
      id: 'rigi',
      title: 'RIGI',
      description: 'Innovated Community Empowerment Website',
      tags: ['UX-UI', 'Web', 'Mobile'],
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/case-study/rigi/rigi_ux_ui_dev_consultant_leo9_studio_home.webp',
      link: 'our-work/rigi.html'
    },
    {
      id: 'bmw',
      title: 'BMW',
      description: 'Optimized the effortless on-the-go lifestyle',
      tags: ['UX-UI', 'Web', 'Mobile'],
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/bmw_ux_consultant_leo9_studio_home.png',
      link: 'our-work/bmw.html'
    },
    {
      id: 'nirmal-bang',
      title: 'Nirmal Bang',
      description: 'Engineered Investment Experience',
      tags: ['UX-UI', 'Mobile'],
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/niramal_bang_ux_consultant_leo9_studio_home.png',
      link: 'our-work/nirmal-bang.html'
    }
  ]

  return (
    <>
      <section className="h-work-hdn-box bg-black dark:bg-white text-white dark:text-black py-16 animate-fadeIn section-transition transition-colors duration-300">
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

        <div className="stopSec stopSecAbs stopSecWork"></div>
        <div className="workTriggerEnd"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-cont animate-slideInUp">
            <h2 className="hdg1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-black leading-tight">
              As global leaders in UX UI, technology, and marketing solutions, we partner with clients to simplify, strengthen, and transform their businesses.
            </h2>
          </div>
        </div>
      </section>
      <section className="h-work-box bg-white dark:bg-black text-black dark:text-white py-16 animate-fadeIn section-transition transition-colors duration-300">
        {/* Sun Icon for Light Theme */}
        <SunIcon />

        <div className="h-work-up">
          <div className="swiper-container work-swiper-container">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay]}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <a href={project.link} className="d-block animate-slideInUp block" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`h-work h-work-${project.id === 'rigi' ? '1' : project.id === 'bmw' ? '2' : '3'} bg-white dark:bg-black border border-black dark:border-white rounded-lg p-3 sm:p-4 hover:shadow-lg transition-all duration-300`}>
                      <div className={`h-work-pt h-work-pt-${project.id === 'rigi' ? '1' : project.id === 'bmw' ? '2' : '3'}`}></div>
                      <div className={`h-work-pt-end h-work-pt-end-${project.id === 'rigi' ? '1' : project.id === 'bmw' ? '2' : '3'}`}></div>
                      <div className="h-work-cont">
                        <h4 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h4>
                        <p className="text-black dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                        <ul className="flex flex-wrap gap-1 sm:gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <li key={tagIndex} className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs sm:text-sm">{tag}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="hwork-img mt-3 sm:mt-4">
                        <img
                          className="lazy w-full h-auto rounded"
                          loading="lazy"
                          src={project.image}
                          alt={`top web development companies in world - ${project.title}`}
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="h-work-btn text-center mt-6 sm:mt-8">
          <button className="bg-black dark:bg-white text-white dark:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-black dark:border-white transition-all duration-300 animate-bounceIn text-sm sm:text-base">
            View All Work
          </button>
        </div>
      </section>
    </>
  )
})

export default Work
