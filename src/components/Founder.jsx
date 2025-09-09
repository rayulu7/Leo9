import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Pagination, Autoplay } from 'swiper/modules'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MoonIcon = () => (
  <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Founder = React.memo(() => {
  useEffect(() => {
    
    gsap.fromTo(
      '.meet-founder-box h6',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.meet-founder-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.founder-pic img',
      { opacity: 0, scale: 0.8, rotation: -10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.founder-pic',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.founder-pic-box h4, .founder-pic-box p',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.founder-pic-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

   
    gsap.fromTo(
      '.h-award-box li',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.h-award-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    
    gsap.fromTo(
      '.founder-in h6',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.founder-in',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

   
    gsap.fromTo(
      '.hf-container',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.founder-swiper-container',
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

  const testimonials = [
    {
      name: 'Kamlesh Dixit',
      title: 'Management Consultant - Deloitte',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/kamlesh-dixit.jpg',
      quote: 'Leo9 Studio is a reliable, tech savvy and creative group to work with. Their creative insights, combined with superb technical capabilities make them a great team. I would recommend Leo9 team without hesitation.'
    },
    {
      name: 'Amit Singh',
      title: 'C.E.O. - Investica',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/amit-singh.jpg',
      quote: 'Leo9 Studio is one of the few Design agencies that understand the financial services industry\'s inner workings. They\'re an incredible agency that "knows it". The team Leo9 is killing it and bringing UI/UX Designs to the forefront of a whole industry\'s digital transformation.'
    },
    {
      name: 'Robb Fahrion',
      title: 'C.E.O. - FVG',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/client-rob.jpg',
      quote: 'Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they\'ve continued to deliver quality over and over again.'
    },
    {
      name: 'Kapil Pershad',
      title: 'C.T.O. - Payzli',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/client-kapil.jpg',
      quote: 'I think the most impressive thing is their value proposition. The entire team is quite talented and are able to bring a very level of UX and UI design to the project at very fair pricing.'
    },
    {
      name: 'Tanay Chotani',
      title: 'C.E.O. - Travelxp.com',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/client-tanay.jpg',
      quote: 'Some of the biggest advantages Leo9 Studio has is that design is at the core of their thinking and company.'
    },
    {
      name: 'Ryan Denman',
      title: 'Co-Founder - Homsby',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/ryan-denman.jpg',
      quote: 'They delivered to us exactly what we were looking for. LEO9 was one of the few one stop shops that was able to provide us with an end to end solution and could deliver the results we were expecting.'
    },
    {
      name: 'Yevgen Sokolnikov',
      title: 'C.E.O. - boodmo.com',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/yevgen-sokolnikov.webp',
      quote: 'Thanks to Leo9 Studio\'s work, the website\'s long checkout time has been cut down to one minute helping the client increase its business.'
    },
    {
      name: 'Pradeep Kumaar',
      title: 'C.E.O. - StanVentures',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/pradeep-kumaar.webp',
      quote: 'The way they think from a user\'s point of view is impressive. Great designers and will take your project as their own company project to deliver best Designs from Day One!'
    }
  ]

  return (
    <section className="h-founder-box bg-black dark:bg-white text-white dark:text-black py-16 animate-fadeIn section-transition transition-colors duration-300">
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

      <div className="founderRefPt">
        <div className="frp frp1"></div>
        <div className="frp frp2"></div>
        <div className="frp frp3"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="row flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 animate-slideInLeft mb-8 lg:mb-0">
            <div className="meet-founder-box mb-8 lg:mb-12 text-center lg:text-left">
              <h6 className="text-base sm:text-lg font-semibold text-white dark:text-black mb-4">
                Meet <br className="hidden sm:block" />
                the <br className="hidden sm:block" />
                Founder
              </h6>
              <div className="founder-pic mb-4 flex justify-center lg:justify-start">
                <img
                  className="lazy rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover border-4 border-white dark:border-black"
                  src="https://leo9design.blr1.cdn.digitaloceanspaces.com/img/jugal_web_application_leo9_studio.png"
                  loading="lazy"
                  alt="Leo9Studio Founder"
                />
              </div>
              <div className="founder-pic-box">
                <div className="fndrRefPt">
                  <div className="fndr fndr1"></div>
                  <div className="fndr fndr2"></div>
                  <div className="fndr fndr3"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white dark:text-black mb-2">Jugal Shah</h4>
                <p className="text-white dark:text-black text-sm sm:text-base mb-4">
                  Founder, Head of UX at Leo9 Studio. <br />
                  Behavioral science and Neuromarketing expert.
                </p>
                <div className="mf-flex mb-4 flex justify-center lg:justify-start">
                  <a href="https://in.linkedin.com/in/shahjugal" target="_blank" rel="noopener noreferrer" className="text-white dark:text-black hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white p-2 rounded-full transition-all duration-300">
                    <img
                      src="https://leo9design.blr1.cdn.digitaloceanspaces.com/img/linkedin_cx_leo9_studio.svg"
                      alt="top web development companies in world"
                      className="linkdinIcon w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert dark:brightness-100 dark:invert-0"
                    />
                  </a>
                  <div className="blogTriggerStart"></div>
                </div>
                <ul className="h-award-box flex space-x-2 sm:space-x-4 justify-center lg:justify-start">
                  <li>
                    <img
                      src="https://leo9design.blr1.cdn.digitaloceanspaces.com/img/aw1.svg"
                      className="w-8 h-8 sm:w-12 sm:h-12 filter brightness-0 invert dark:brightness-100 dark:invert-0 animate-pulse"
                      alt="Leo9 Award"
                    />
                  </li>
                  <li>
                    <img
                      src="https://leo9design.blr1.cdn.digitaloceanspaces.com/img/aw2.svg"
                      className="w-8 h-8 sm:w-12 sm:h-12 filter brightness-0 invert dark:brightness-100 dark:invert-0 animate-pulse"
                      alt="Leo9 Award"
                    />
                  </li>
                  <li>
                    <img
                      src="https://leo9design.blr1.cdn.digitaloceanspaces.com/img/aw3.svg"
                      className="w-8 h-8 sm:w-12 sm:h-12 filter brightness-0 invert dark:brightness-100 dark:invert-0 animate-pulse"
                      alt="Leo9 Award"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slideInRight">
            <div className="founder-box">
              <div className="founder-in">
                <h6 className="text-base sm:text-lg font-semibold text-white dark:text-black mb-4 text-center lg:text-left">What Clients say</h6>
                <div className="swiper-container founder-swiper-container">
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="hf-container animate-fadeInUp p-4" style={{ animationDelay: `${index * 0.2}s` }}>
                          <div className="hf-box flex flex-col sm:flex-row items-center sm:items-start mb-4 text-center sm:text-left">
                            <div className="hf-img mb-2 sm:mb-0 sm:mr-4 flex-shrink-0">
                              <img src={testimonial.image} loading="lazy" alt={testimonial.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white dark:border-black mx-auto sm:mx-0" />
                            </div>
                            <div>
                              <p className="text-white dark:text-black font-semibold text-sm sm:text-base">
                                {testimonial.name}
                              </p>
                              <span className="block text-xs sm:text-sm text-white dark:text-black opacity-80">{testimonial.title}</span>
                            </div>
                          </div>
                          <div className="hf-cont text-center sm:text-left">
                            <div className="h-quote mb-2 flex justify-center sm:justify-start">
                              <img src="./img/quote.svg" alt="Quote" loading="lazy" className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert dark:brightness-100 dark:invert-0" />
                            </div>
                            <div className="h-stars mb-2 flex justify-center sm:justify-start">
                              <img src="./img/stars.svg" alt="Stars" loading="lazy" className="w-16 h-4 sm:w-24 sm:h-6 filter brightness-0 invert dark:brightness-100 dark:invert-0" />
                            </div>
                            <p className="text-white dark:text-black text-sm sm:text-base leading-relaxed">{testimonial.quote}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="founder-pagination swiper-pagination mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Founder
