import React, { useState } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-black dark:border-white bg-white dark:bg-black fixed top-0 left-0 z-50 animate-fadeIn transition-colors duration-300">
      <div className="flex items-center space-x-2 sm:space-x-4">
        
        <div className="text-xl sm:text-2xl font-bold cursor-pointer select-none text-black dark:text-white animate-slideInLeft">
          leo9
        </div>

        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base lg:text-lg font-medium text-black dark:text-white animate-slideInRight">
          <li className="cursor-pointer hover:underline transition-all duration-300">Work</li>
          <li className="cursor-pointer hover:underline transition-all duration-300">Services <span className="text-black dark:text-white">•</span></li>
          <li className="cursor-pointer hover:underline transition-all duration-300">Clients</li>
          <li className="cursor-pointer hover:underline transition-all duration-300">About <span className="text-black dark:text-white">•</span></li>
          <li className="cursor-pointer hover:underline transition-all duration-300">Knowledge</li>
        </ul>
      </div>

     
      <div className="flex items-center space-x-2 sm:space-x-4">
      
        <button
          onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle Theme"
          className="p-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 animate-bounceIn"
        >
          {theme === 'dark' ? (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414 1.414M6.05 6.05L4.636 4.636"
              />
            </svg>
          ) : (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

       
        <button className="hidden md:block bg-black text-white dark:bg-white dark:text-black font-semibold px-4 lg:px-6 py-2 rounded-md hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-black dark:border-white transition-all duration-300 animate-bounceIn text-sm lg:text-base">
          Contact
        </button>

      
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-black dark:border-white shadow-lg animate-slideDown">
          <ul className="flex flex-col space-y-3 sm:space-y-4 p-4 text-base sm:text-lg font-medium text-black dark:text-white">
            <li className="cursor-pointer hover:underline transition-all duration-300 py-1">Work</li>
            <li className="cursor-pointer hover:underline transition-all duration-300 py-1">Services</li>
            <li className="cursor-pointer hover:underline transition-all duration-300 py-1">Clients</li>
            <li className="cursor-pointer hover:underline transition-all duration-300 py-1">About</li>
            <li className="cursor-pointer hover:underline transition-all duration-300 py-1">Knowledge</li>
            <li className="pt-2">
              <button className="bg-black text-white dark:bg-white dark:text-black font-semibold px-4 sm:px-6 py-2 rounded-md hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-black dark:border-white transition-all duration-300 w-full text-sm sm:text-base">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
