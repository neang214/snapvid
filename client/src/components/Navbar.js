import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex justify-center bg-white dark:bg-zinc-900 shadow-md dark:shadow-lg">
      <div className='w-full max-w-4xl p-4 flex flex-wrap justify-between items-center sticky top-0 z-10'>
        <Link to="/" className="text-xl font-bold text-rose-600 hover:text-rose-800 dark:hover:text-rose-300 transition-colors duration-200">
          <p>Snapvid</p>
        </Link>

        <div className="flex gap-2">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>


        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto mt-2 md:mt-0`}>

          <Link
            to="/how-to-use"
            className="text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How to Use
          </Link>

          <Link
            to="/about"
            className="text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <button
            onClick={toggleDarkMode}
            className="hidden md:block p-2 rounded-md text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
