import React, { useState } from 'react'

const Blogs = React.memo(() => {
  const [activeTab, setActiveTab] = useState('Company')
  const [openAccordion, setOpenAccordion] = useState(0)

  const tabs = ['Company', 'Process', 'Service', 'Web']

  const faqs = {
    Company: [
      {
        question: 'What are your areas of focus as a leading UI/UX design company in India?',
        answer: 'We specialize in user research, interaction design, usability testing, and digital product strategy. From mobile applications to enterprise platforms, our solutions combine human neuroscience, psychology, technology, and design thinking to develop intuitive, high-performing experiences.'
      },
      {
        question: 'What separates Leo9 Studio from other top UI/UX design agencies?',
        answer: 'We don\'t just build, we interpret user behavior and predict needs. Our approach combines strategic thinking with creative imagination, and we are not just a service provider but problem solvers who think outside the box.'
      },
      {
        question: 'Does Leo9 Studio have experience working with large corporate organisations in UX/UI design?',
        answer: 'Yes, we\'ve collaborated with global enterprises to optimise digital platforms, improve workflows, and enhance customer experiences through UX-driven innovation.'
      },
      {
        question: 'Does Leo9 Studio work with startups in UX/UI design?',
        answer: 'Yes, we assist startups in converting concepts into scalable and user-friendly products. Our methods ensure lean and iterative design, which grows and adapts in sync with business development.'
      },
      {
        question: 'Why should we onboard Leo9 Studio? What\'s special about you?',
        answer: 'We create experiences that resonate. Our blend of behavioural psychology, strategic thinking, and design innovation makes us a partner in problem-solving. not just another UI UX agency but an extension of your vision.'
      }
    ],
    Process: [
      {
        question: 'How to choose the right UI/UX design agency for a startup?',
        answer: 'Seek out a team that is attuned to your vision, places importance on research, and emphasizes scalability. A good UI UX agency ought to share your business objectives, concentrate on usability, and boast a portfolio showcasing versatility and impact.'
      },
      {
        question: 'What should I look for when choosing a UI/UX design studio for my project?',
        answer: 'Look beyond aesthetics. A strong UI UX studio should have a research-driven approach, a portfolio with diverse industries, a deep understanding of user psychology, and a strategic mindset that aligns design with business goals.'
      }
    ],
    Service: [
      {
        question: 'Do Leo9 Studio provide branding, or should I hire a separate branding agency?',
        answer: 'We specialize in transforming intricate digital interactions into effective experiences. Our services include UX research, interface design, web and mobile application design, and conversion optimization.'
      },
      {
        question: 'Is branding a part of your UI/UX design services in India?',
        answer: 'Yes, branding is an integral part of our process. A unified brand experience is paramount to usability, trust, and engagement. We don\'t just design interfaces but identities that make a lasting impact.'
      },
      {
        question: 'What information does Leo9 Studio need to provide a quote for UX/UI design services?',
        answer: 'Project scope, target audience, key functionalities, design preferences, and technical requirements. The more details, the better we can tailor our proposal to your needs.'
      },
      {
        question: 'Is UX research important for product design?',
        answer: 'It\'s critical. Design without research is guesswork. UX research confirms assumptions, discovers pain points, and makes sure the product is created for actual user needs, not aesthetics.'
      },
      {
        question: 'How can a UI/UX design studio benefit any business or brand?',
        answer: 'A UI UX studio enhances usability, streamlines customer journeys, and boosts engagement, leading to higher conversions and brand loyalty. Great design isn\'t just an aesthetic choice; it\'s a business strategy.'
      },
      {
        question: 'What makes a UI/UX design studio different from a traditional design agency?',
        answer: 'Unlike traditional design agencies that focus primarily on visuals, a UI UX studio prioritises functionality, usability, and user behaviour, ensuring every design decision enhances the overall experience.'
      },
      {
        question: 'How do you define your specialisations as a web design and UX agency?',
        answer: 'We specialize in transforming intricate digital interactions into effective experiences. Our services include UX research, interface design, web and mobile application design, and conversion optimization.'
      }
    ],
    Web: [
      {
        question: 'What are the differences between mobile app UX design and web UX design?',
        answer: 'Mobile UX focuses on touch interactions, limited screen space, and on-the-go usage, requiring streamlined navigation and responsiveness. Web UX provides more flexibility but requires consistency across devices. Both mediums present their respective challenges and opportunities.'
      },
      {
        question: 'How can I keep up with the latest trends and innovations in mobile app UX design?',
        answer: 'Stay up-to-date with industry leaders, blog about UX, go to design conferences, and study successful apps. Testing out new patterns and remaining user-centered means your designs stay current with shifting expectations.'
      },
      {
        question: 'What are the common mistakes to avoid in mobile app UX design?',
        answer: 'Disregarding user research, making navigation overly complex, inconsistent design elements, and making aesthetics a higher priority than function are some important missteps. Data-driven and user-centered work keeps these at bay.'
      },
      {
        question: 'What is the role of user research in mobile app UX design?',
        answer: 'User research informs design decisions, ensuring the product solves real problems. It helps identify user pain points, refine navigation, and create intuitive interactions that improve engagement and retention.'
      },
      {
        question: 'How can I optimise my mobile app UX design for better conversion rates?',
        answer: 'Prioritise a seamless onboarding experience, clear CTAs, intuitive navigation, and fast load times. A/B testing and data-driven refinements help fine-tune the user journey for maximum impact.'
      },
      {
        question: 'What are some of the emerging trends in mobile app UX design?',
        answer: 'Voice interactions, AI-driven personalisation, gesture-based navigation, dark mode, and micro-interactions are reshaping mobile UX. The future is about seamless, adaptive, and inclusive design.'
      }
    ]
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }

  return (
    <section className="h-blog-box bg-white dark:bg-black text-black dark:text-white py-16 animate-fadeIn section-transition transition-colors duration-300">

      <div className="stopSec stopSecAbs stopSecBlog"></div>
      <div className="quoteTriggerUp"></div>
      <div className="blogTriggerEnd"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="sec-title-wrap mb-8 animate-slideInUp">
          <h2 className="sec-title text-3xl font-bold text-black dark:text-white">Faq's</h2>
          <div className="blg blg1"></div>
          <div className="blg blg2"></div>
          <div className="blg blg3"></div>
        </div>
        <ul className="tabs-wrapper flex space-x-4 mb-8 animate-slideInUp animation-delay-200">
          {tabs.map((tab, index) => (
            <li
              key={tab}
              className={`tab cursor-pointer px-4 py-2 rounded-md transition-all duration-300 animate-fadeInUp ${activeTab === tab ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'}`}
              onClick={() => setActiveTab(tab)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="blog-cl-box">
          <div className={`tab-content ${activeTab === 'Company' ? 'block' : 'hidden'}`} id="Company">
            {faqs.Company.map((faq, index) => (
              <div key={index} className="blog-cl mb-4 animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bl-hdn cursor-pointer flex justify-between items-center p-4 bg-white dark:bg-black border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300" onClick={() => toggleAccordion(index)}>
                  <div className={`bl-icon ${openAccordion === index ? 'active' : ''}`}></div>
                  <h2 className="text-lg font-semibold text-black dark:text-white">{faq.question}</h2>
                </div>
                <div className={`bl-cont p-4 bg-white dark:bg-black text-black dark:text-white ${openAccordion === index ? 'block animate-fadeIn' : 'hidden'}`}>
                  <p className="text-black dark:text-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`tab-content ${activeTab === 'Process' ? 'block' : 'hidden'}`} id="Process">
            {faqs.Process.map((faq, index) => (
              <div key={index} className="blog-cl mb-4 animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bl-hdn cursor-pointer flex justify-between items-center p-4 bg-white dark:bg-black border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300" onClick={() => toggleAccordion(index + faqs.Company.length)}>
                  <div className={`bl-icon ${openAccordion === index + faqs.Company.length ? 'active' : ''}`}></div>
                  <h2 className="text-lg font-semibold text-black dark:text-white">{faq.question}</h2>
                </div>
                <div className={`bl-cont p-4 bg-white dark:bg-black text-black dark:text-white ${openAccordion === index + faqs.Company.length ? 'block animate-fadeIn' : 'hidden'}`}>
                  <p className="text-black dark:text-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`tab-content ${activeTab === 'Service' ? 'block' : 'hidden'}`} id="Service">
            {faqs.Service.map((faq, index) => (
              <div key={index} className="blog-cl mb-4 animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bl-hdn cursor-pointer flex justify-between items-center p-4 bg-white dark:bg-black border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300" onClick={() => toggleAccordion(index + faqs.Company.length + faqs.Process.length)}>
                  <div className={`bl-icon ${openAccordion === index + faqs.Company.length + faqs.Process.length ? 'active' : ''}`}></div>
                  <h2 className="text-lg font-semibold text-black dark:text-white">{faq.question}</h2>
                </div>
                <div className={`bl-cont p-4 bg-white dark:bg-black text-black dark:text-white ${openAccordion === index + faqs.Company.length + faqs.Process.length ? 'block animate-fadeIn' : 'hidden'}`}>
                  <p className="text-black dark:text-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`tab-content ${activeTab === 'Web' ? 'block' : 'hidden'}`} id="Web">
            {faqs.Web.map((faq, index) => (
              <div key={index} className="blog-cl mb-4 animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bl-hdn cursor-pointer flex justify-between items-center p-4 bg-white dark:bg-black border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300" onClick={() => toggleAccordion(index + faqs.Company.length + faqs.Process.length + faqs.Service.length)}>
                  <div className={`bl-icon ${openAccordion === index + faqs.Company.length + faqs.Process.length + faqs.Service.length ? 'active' : ''}`}></div>
                  <h2 className="text-lg font-semibold text-black dark:text-white">{faq.question}</h2>
                </div>
                <div className={`bl-cont p-4 bg-white dark:bg-black text-black dark:text-white ${openAccordion === index + faqs.Company.length + faqs.Process.length + faqs.Service.length ? 'block animate-fadeIn' : 'hidden'}`}>
                  <p className="text-black dark:text-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Blogs
