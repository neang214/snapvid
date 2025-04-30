import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    const memeImageUrl = 'https://i.imgflip.com/1g8my4.jpg';

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-4">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl p-8 md:p-12 text-center max-w-lg w-full">
                <h1 className="text-6xl font-bold text-rose-600 mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
                    Page Not Found
                </h2>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
                    Oops! It looks like the page you're looking for doesn't exist.
                </p>

                <div className="mb-8">
                    <img
                        src={memeImageUrl}
                        alt="Confused meme indicating page not found"
                        className="mx-auto rounded-md max-w-full h-auto shadow-md"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/400x300/E5E7EB/1F2937?text=Meme+Not+Found'; // Fallback placeholder
                        }}
                    />
                </div>

                <Link
                    to="/"
                    className="inline-block bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
