import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUsPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 flex flex-col items-center transition-colors duration-300`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="m-4 rounded-md sm:mt-10 max-w-4xl bg-white dark:bg-zinc-900 shadow-md dark:shadow-lg p-6 md:p-8 mx-4 flex-grow">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-rose-600 dark:text-rose-400 mb-8">
          Contact Us
        </h1>

        <div className="text-lg text-center text-zinc-700 dark:text-zinc-300 space-y-6">
          <p>
            Have questions, feedback, or need support? You can reach us directly via email.
          </p>
          <p>
            Click the link below to open your email client:
          </p>
          <p>
            <a
              href="mailto:nenneang5000@gmail.com"
              className="inline-block bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 no-underline"
            >
              Email Us at nenneang5000@gmail.com
            </a>
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-8">
            Please note that clicking this link will open your default email application.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
