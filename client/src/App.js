import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';

const fetchDownloadOptions = async (url) => {
  if (!url || !url.trim()) {
    throw new Error('Please enter a video URL.');
  }

  try {
    const response = await axios.get('http://localhost:5000/get-options', {
      params: { url },
    });

    if (response.data && Array.isArray(response.data.options) && typeof response.data.thumbnailUrl !== 'undefined' && typeof response.data.title !== 'undefined') {
      return response.data;
    } else {
      console.error('Backend response has unexpected structure:', response.data);
      throw new Error('Received unexpected data from the server.');
    }

  } catch (error) {
    console.error('Error fetching download options:', error);
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      'Failed to fetch download options from server.'
    );
  }
};


function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [downloadOptions, setDownloadOptions] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');

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

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
    if (error) {
      setError(null);
    }
    if (downloadOptions.length > 0) {
      setDownloadOptions([]);
    }
    if (thumbnailUrl) {
      setThumbnailUrl(null);
    }
    if (videoTitle) {
        setVideoTitle('');
    }
  };

  const handleDownload = async () => {
    setError(null);
    setDownloadOptions([]);
    setThumbnailUrl(null);
    setVideoTitle('');
    setIsLoading(true);

    try {
      const data = await fetchDownloadOptions(videoUrl);
      setDownloadOptions(data.options);
      setThumbnailUrl(data.thumbnailUrl);
      setVideoTitle(data.title);

    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
      setDownloadOptions([]);
      setThumbnailUrl(null);
      setVideoTitle('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadFile = (url, format = 'mp4', quality = 'video', title = 'video') => {
    const safeFormat = String(format || 'mp4').toLowerCase();
    const safeTitle = title.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();

    const suggestedFilename = `${safeTitle}.${safeFormat}`;
    const backendDownloadUrl = `http://localhost:5000/download-file?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(suggestedFilename)}`;

    window.location.href = backendDownloadUrl;
  };

  return (
    <div className={`min-h-screen bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 flex flex-col items-center transition-colors duration-300`}>

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="flex-grow w-full flex justify-center">
        <div className="flex flex-col items-center py-10 px-4 w-full">
          <header className="text-center mb-8 mt-8 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4">
              Universal Video Downloader
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">
              Download your favorite videos from various platforms easily and for free.
            </p>
          </header>

          <main className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-lg p-6 md:p-8 mx-4">
            <div className="mb-6">
              <label htmlFor="videoUrl" className="block text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                Paste Video URL here:
              </label>
              <input
                type="text"
                id="videoUrl"
                className="w-full px-4 py-3 rounded-md border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-400 focus:border-rose-500 dark:focus:border-rose-400 transition-colors duration-300"
                placeholder="e.g., YouTube, Vimeo, TikTok, etc."
                value={videoUrl}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <button
              onClick={handleDownload}
              className="w-full bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isLoading || !videoUrl.trim()}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Download Video'
              )}
            </button>

            {error && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-md text-center">
                {error}
              </div>
            )}

            {videoTitle && (
                <div className="mt-6 text-center text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    {videoTitle}
                </div>
            )}

            {thumbnailUrl && (
              <div className="mt-6 text-center">
                <img
                  src={thumbnailUrl}
                  alt="Video Thumbnail"
                  className="mx-auto rounded-md shadow-sm max-w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x225/E5E7EB/1F2937?text=No+Thumbnail';
                  }}
                />
              </div>
            )}

            {downloadOptions.length > 0 && (
              <div className="mt-6 border-t border-zinc-200 dark:border-zinc-700 pt-6">
                <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4 text-center">Available Downloads:</h2>
                <div className="space-y-3 flex flex-col">
                  {downloadOptions
                    .filter(option => !String(option.quality).includes('--') && !String(option.format).includes('--'))
                    .map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownloadFile(option.url, option.format, option.quality, videoTitle)}
                        className="block bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white font-medium py-3 px-4 rounded-md text-center no-underline transition duration-150 ease-in-out"
                      >
                        Download {option.format} - {option.quality} {option.size ? `(${option.size})` : ''}
                      </button>
                    ))}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 text-center">
                  Tip: If clicking the button doesn't work, try right-clicking and selecting "Save link as...".
                </p>
              </div>
            )}

            {!isLoading && !error && downloadOptions.length === 0 && !thumbnailUrl && !videoTitle && (
              <div className="mt-6 text-center text-zinc-500 dark:text-zinc-400 text-sm">
                <p>Enter the full URL of the video you want to download.</p>
                <p className="mt-2 text-xs">Please ensure you have the necessary permissions to download the video. Downloads are intended for personal offline use only.</p>
              </div>
            )}
          </main>
          <FAQPage />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
