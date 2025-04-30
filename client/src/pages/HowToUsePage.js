import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function HowToUsePage() {
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
      <main className="m-4 rounded-md sm:mt-10 max-w-4xl bg-white dark:bg-zinc-900 shadow-md dark:shadow-lg p-6 md:p-8 mx-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-rose-600 mb-8">
          How to Download Facebook Videos
        </h1>

        <p className="text-lg mb-6">
          Downloading videos from Facebook using our tool is quick and easy! Follow these simple steps:
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Step 1: Find the Facebook Video
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Go to Facebook and find the video you want to download.</li>
            <li>Make sure the video is publicly accessible. Our tool cannot download private videos.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Step 2: Copy the Video URL
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div>
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100 mb-2">On Desktop:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Click on the video to open it in full screen or on its dedicated page.</li>
                <li>Look at the address bar in your browser. Copy the entire URL from the address bar.</li>
                <li>Alternatively, right-click on the video itself and look for an option like "Copy video URL at current time" or "Show video URL" (options may vary by browser). Copy the URL provided.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100 mb-2">On Mobile (Facebook App):</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tap on the video to open it.</li>
                <li>Look for the "Share" button below the video.</li>
                <li>Tap "Share", then look for the "Copy Link" option. Tap it to copy the video's URL to your clipboard.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100 mb-2">On Mobile (Mobile Browser):</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Navigate to the video on Facebook in your mobile browser.</li>
                <li>Copy the URL directly from your browser's address bar.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Step 3: Paste the URL into Our Downloader
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Go to our website's homepage.</li>
            <li>Find the input box that says "Paste Facebook Video URL here:".</li>
            <li>Click inside the box and paste the URL you copied in Step 2. You can usually do this by right-clicking and selecting "Paste", or by using keyboard shortcuts (Ctrl+V on Windows/Linux, Cmd+V on Mac).</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Step 4: Click "Download Video"
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>After pasting the URL, click the "Download Video" button.</li>
            <li>Our tool will process the video link. This may take a few moments.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Step 5: Choose Your Download Quality
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Once processing is complete (on the homepage), you will see a list of available download options.</li>
            <li>These options will show different video qualities (like HD, SD) and formats (usually MP4).</li>
            <li>Click the "Download" button next to the quality you prefer.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Step 6: Save the Video
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>The video file will start downloading to your device.</li>
            <li>Your browser might ask you where you want to save the file, or it might automatically save it to your default "Downloads" folder.</li>
            <li>If clicking the download button opens the video in your browser instead of downloading, right-click the download button and select "Save link as..." (or similar) to manually save the file.</li>
          </ul>
        </div>

        <p className="text-lg mb-8">
          That's it! You can now enjoy your downloaded Facebook video offline.
        </p>

        <div className="mb-6 p-4 bg-zinc-100 dark:bg-zinc-700 rounded-md border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
            Important Notes:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Please respect copyright. Only download videos if you have the creator's permission or if it is explicitly allowed.</li>
            <li>This tool is intended for downloading videos for personal, offline use.</li>
            <li>We cannot download videos that are set to private or are part of private groups unless you are logged into Facebook and have permission to view them (and even then, direct download links may not be available).</li>
          </ul>
        </div>

        <p className="text-center text-zinc-600 dark:text-zinc-400 text-sm">
          If you encounter any issues, please visit our {' '}
          <Link to="/contact" className="text-rose-600 dark:text-rose-400 hover:underline">
            Contact Us
          </Link>
          .
        </p>

      </main>
      <Footer />
    </div>
  );
}

export default HowToUsePage;
