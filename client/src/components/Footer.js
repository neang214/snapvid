import{Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="text-center mt-8 mb-4 text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex flex-col sm:flex-row justify-center space-y-1 sm:space-y-0 sm:space-x-4">
            <Link to="/privacy"  className="hover:underline text-inherit">
              Privacy Policy
            </Link>
             <span className="hidden sm:inline">|</span>
            <Link to="/terms" className="hover:underline text-inherit">
              Terms of Service
            </Link>
          </div>
          <p className="mt-1">&copy; {new Date().getFullYear()} snapvid.com . All rights reserved.</p>
      </footer>
    )
}

export default Footer;