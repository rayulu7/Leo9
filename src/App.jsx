import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'
import Work from './components/Work'
import Expertise from './components/Expertise'
import Founder from './components/Founder'
import Blogs from './components/Blogs'
import Quote from './components/Quote'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  // On mount, check localStorage or system preference for theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  const toggleTheme = (targetTheme) => {
    const newTheme = targetTheme || (theme === 'light' ? 'dark' : 'light')
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="w-full">
        <Hero />
        <Clients />
        <WhoWeAre />
        <Services />
        <Work />
        <Expertise />
        <Founder />
        <Blogs />
        <Quote />
      </main>
      <Footer />
    </div>
  )
}

export default App
