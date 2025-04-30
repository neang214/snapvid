import React from 'react';
import { Link } from 'react-router-dom';

function FAQPage() {
  const faqs = [
    {
      question: "What is Snapvid?",
      answer: "We are an online tool that helps you generate direct download links for publicly available videos from Facebook, allowing you to save them to your device."
    },
    {
      question: "Is this service free?",
      answer: "Yes, our basic Facebook video downloading service is completely free to use."
    },
    {
      question: "How do I download a Facebook video?",
      answer: (
        <>
          It's simple! Find the public Facebook video, copy its URL, paste it into the input box on our homepage, click 'Download Video', and then select your preferred quality option from the available links. You can find detailed steps on our {' '}
          <Link to="/how-to-use" className="text-rose-600 dark:text-rose-400 hover:underline">
            How to Use page
          </Link>.
        </>
      )
    },
    {
      question: "What video formats are supported?",
      answer: "Our tool primarily provides download links for videos in MP4 format, as this is the most common format available on Facebook and is widely compatible with devices."
    },
    {
      question: "What download quality options are available?",
      answer: "We provide download links for the video qualities that are available from the original Facebook source. This typically includes SD (Standard Definition) and HD (High Definition). If the video was uploaded in higher resolutions (like 1080p, 2K, or 4K) and Facebook makes those available, our tool should provide links for them as well."
    },
     {
      question: "Can I download private Facebook videos?",
      answer: "No, for privacy and security reasons, our tool can only generate download links for publicly accessible Facebook videos. We cannot access or download videos from private profiles, private groups, or private pages."
    },
    {
      question: "Is it legal to download Facebook videos?",
      answer: (
        <>
          Downloading videos may be subject to copyright. It is your responsibility to ensure you have the necessary rights or permission from the copyright holder before downloading any video. Our service is intended for downloading videos that you have the right to download, such as your own uploads or videos where the creator has granted permission. Please refer to our {' '}
          <Link to="/terms" className="text-rose-600 dark:text-rose-400 hover:underline">
            Terms of Service
          </Link> for more information.
        </>
      )
    },
    {
      question: "Why is a video not downloading?",
      answer: "This could happen for several reasons: The video might be private, the URL might be incorrect, there might be a temporary issue with Facebook or our service, or the video might have been removed. Double-check the URL and ensure the video is public. If the problem persists, please try again later or contact us."
    },
     {
      question: "Do you store the videos I download?",
      answer: (
        <>
          No, we do not store any videos that you download using our service. We only process the URL temporarily to generate the download links. We also do not store the URLs you submit. Please see our {' '}
          <Link to="/privacy" className="text-rose-600 dark:text-rose-400 hover:underline">
            Privacy Policy
          </Link> for more details.
        </>
      )
    },
     {
      question: "Does it work on mobile devices?",
      answer: "Yes, our website is designed to be responsive and should work on most mobile browsers, allowing you to download videos directly to your smartphone or tablet."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 rounded-lg shadow-md mt-10">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-rose-600 mb-8">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-zinc-200 dark:border-zinc-700 pb-4">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
              {faq.question}
            </h2>
            <div className="text-zinc-700 dark:text-zinc-300">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-zinc-600 dark:text-zinc-400 text-sm">
        Didn't find your answer? {' '}
        <Link to="/contact" className="text-rose-600 dark:text-rose-400 hover:underline">
           Contact Us
        </Link>.
      </p>

    </div>
  );
}

export default FAQPage;