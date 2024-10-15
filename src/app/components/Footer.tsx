import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

export const Footer = (): JSX.Element => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo and Button */}
        <div className="text-center space-y-4 md:text-left mb-6 md:mb-0">
          <Image alt="TabaFit Logo" height={40} src="/header-logo.png" width={160} />
          <a
            className="flex bg-gradient-to-br from-primary to-secondary text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-200"
            href="#"
          >
            Download TabaFit<IconArrowRight className="ml-2" />
          </a>
        </div>
        {/* Right Section - Links and Socials */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          {/* Simplified Links */}
          <div>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-gray-200" href="#">Home</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="#">About Us</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="mailto:tabafitapp@gmail.com">Contact Support</a></li>
            </ul>
          </div>
          {/* Socials - Twitter Only */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a aria-label="Twitter" className="text-gray-400 hover:text-white" href="https://twitter.com/tabafit">
              <svg
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.002.974-3.127 1.195-.897-.957-2.178-1.554-3.594-1.554-2.717 0-4.917 2.201-4.917 4.917 0 .39.045.765.126 1.124C7.688 8.094 4.064 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.68 1.318-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.961-.694 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex justify-center md:justify-start text-gray-400 text-sm">
        <p>©2024 TabaFit</p>
      </div>
    </div>
  </footer>
);
