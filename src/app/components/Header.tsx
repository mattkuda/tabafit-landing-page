import { useState } from 'react';
import Image from 'next/image';
import { IconMenu2, IconX } from '@tabler/icons-react'; // Icons for hamburger and close

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="drawer drawer-end">
        {/* Drawer toggle input */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />

        {/* Main content area (includes navbar) */}
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-gray-800 p-4 shadow-md w-full sticky top-0">
            {/* Centered logo on mobile, right-aligned menu icon */}
            <div className="flex-1 text-center relative">
              <a href="https://tabafit.com" className="absolute left-1/2 transform -translate-x-1/2">
                <Image src="/header-logo.png" alt="TabaFit Logo" width={160} height={40} />
              </a>
            </div>
            {/* Hamburger Icon for Mobile - right aligned */}
            <div className="ml-auto flex-none lg:hidden z-999">
              <button onClick={toggleMenu} aria-label="Toggle Menu">
                <IconMenu2 className="h-8 w-8 text-white" />
              </button>
            </div>
            {/* Desktop navigation (hidden on mobile) */}
            <div className="hidden lg:flex flex-none">
              <ul className="menu menu-horizontal space-x-4">
                <li>
                  <a href="#how-it-works" className="text-white hover:text-gray-400">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white hover:text-gray-400">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white hover:text-gray-400">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block bg-gradient-to-br from-primary to-secondary text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-200"
                  >
                    Download TabaFit &#10140;
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Page content goes here */}
          <div className="p-4">
            {/* Content or page sections */}
          </div>
        </div>

        {/* Drawer sidebar for mobile, sliding out from the right */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay" onClick={toggleMenu}></label>

          <ul className="menu bg-gray-800 text-white min-h-full w-80 p-4 space-y-4">
            {/* "X" Close Button, Right-Aligned */}
            <li className="flex justify-end">
                <div className="ml-auto p-0">
              <button
                onClick={toggleMenu}
                aria-label="Close Menu"
                className="p-2" /* Padding around the icon, but no full-width */
              >
                <IconX className="h-8 w-8 text-white" />
              </button>
              </div>
            </li>
            <li>
              <a href="#how-it-works" className="text-xl py-2 px-4 hover:text-gray-400" onClick={closeMenu}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-xl py-2 px-4 hover:text-gray-400" onClick={closeMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="text-xl py-2 px-4 hover:text-gray-400" onClick={closeMenu}>
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block m-auto bg-gradient-to-br from-primary to-secondary text-xl text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-gray-200"
                onClick={closeMenu}
              >
                Download TabaFit &#10140;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
