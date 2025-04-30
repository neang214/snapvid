import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TermsOfServicePage() {
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
          Terms of Service
        </h1>

        <div className="text-base space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">

          <p>
            Welcome to [Your Site Name]. These Terms of Service ("Terms") govern your use of our Facebook Video Downloader website (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Use of the Service
          </h2>
          <p>
            Our Service allows you to generate download links for publicly available videos from Facebook. You agree to use the Service only for lawful purposes and in accordance with these Terms.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You agree not to use the Service to download copyrighted material without the express permission of the copyright owner.</li>
            <li>You agree not to use the Service for any illegal or unauthorized purpose.</li>
            <li>You agree not to interfere with or disrupt the Service or servers or networks connected to the Service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            User Conduct
          </h2>
          <p>
            You are solely responsible for your conduct while using the Service. You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Violate any applicable laws or regulations.</li>
            <li>Infringe upon the rights of others.</li>
            <li>Use the Service in a way that could damage, disable, overburden, or impair the Service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Intellectual Property
          </h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Site Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of [Your Site Name].
          </p>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Disclaimer
          </h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. [Your Site Name] makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, [Your Site Name] does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the Service.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Limitation of Liability
          </h2>
          <p>
            In no event shall [Your Site Name] or its affiliates be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Service, even if [Your Site Name] or a [Your Site Name] authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Governing Law
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Changes
          </h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6 mb-3">
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please {' '}
            <Link to="contact" className="text-rose-600 dark:text-rose-400 hover:underline">
              contact us
            </Link>
            .
          </p>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-8">
            Last updated: April 19, 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfServicePage;
