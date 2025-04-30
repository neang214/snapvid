import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUsPage() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-center text-rose-600 mb-8">
          About Us
        </h1>

        <div className="text-lg space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Welcome to [Your Site Name]! We created this tool with a simple goal in mind: to provide a fast, free, and easy way for anyone to download videos from Facebook for personal, offline use.
          </p>
          <p>
            We understand that sometimes you want to save a memorable video shared by a friend, a helpful tutorial, or an interesting clip to watch later without an internet connection. Facebook doesn't offer a built-in download option for most videos, which is where we come in.
          </p>
          <p>
            Our mission is to make the process as straightforward as possible. Just paste the video URL, and we'll help you get the download link quickly and efficiently, offering different quality options when available.
          </p>
          <p>
            We are committed to providing a reliable service while respecting user privacy and copyright. We do not store the videos you download on our servers, and we encourage users to only download videos they have permission to save.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
