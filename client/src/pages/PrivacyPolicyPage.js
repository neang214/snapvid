import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <div className="text-base space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">

          <p>
            Your privacy is important to us. This Privacy Policy explains how [Your Site Name] ("we," "us," or "our") collects, uses, and protects your information when you use our Facebook Video Downloader website (the "Service").
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Information We Collect
          </h2>
          <p>
            We collect very limited information when you use our Service:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              **Video URLs:** When you paste a Facebook video URL into our tool, we process this URL solely for the purpose of fetching the video information and generating download links. We **do not** store these URLs after the processing is complete, nor do we store the video content itself.
            </li>
            <li>
              **Usage Data:** We may collect non-personally identifiable information about how you access and use the Service, such as your browser type, operating system, and access times. This data is used for analytics to improve the Service and is not linked to individual users.
            </li>
            <li>
              **Cookies:** We may use cookies to remember your preferences (like dark mode setting) or for basic website functionality and analytics. You can control cookies through your browser settings.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect solely for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>To provide and operate the Service (processing URLs and generating download links).</li>
            <li>To maintain and improve the Service.</li>
            <li>To understand how the Service is used (via aggregated, non-identifiable usage data).</li>
            <li>To remember your site preferences (via cookies).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Data Retention
          </h2>
          <p>
            As stated above, we do not store the video URLs you submit or the video content. Usage data is retained only as long as necessary for analytics purposes, typically in an aggregated form that does not identify individual users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Third-Party Services
          </h2>
          <p>
            We may use third-party services (e.g., analytics providers like Google Analytics) that may collect information according to their own privacy policies. We are not responsible for the data practices of these third parties.
            We do not use third-party services for processing the video download requests themselves; all URL processing is handled by our own backend infrastructure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Data Security
          </h2>
          <p>
            We take reasonable measures to protect the information we handle from unauthorized access or disclosure. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Children's Privacy
          </h2>
          <p>
            Our Service is not intended for use by individuals under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please {' '}
            <Link to="contact" className="text-rose-600 dark:text-rose-400 hover:underline">
              contact us
            </Link>
            .
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
            Last updated: April 19, 2025
          </p>

        </div>

      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
