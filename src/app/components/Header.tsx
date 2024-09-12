import { useState } from 'react';
import Image from 'next/image';
import { IconMenu2, IconX } from '@tabler/icons-react';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="drawer drawer-end">
        {/* Drawer toggle input */}
        <input readOnly checked={isOpen} className="drawer-toggle" id="my-drawer" type="checkbox" />

        {/* Main content area (includes navbar) */}
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-gray-800 p-4 shadow-md w-full sticky top-0">
            {/* Centered logo on mobile, right-aligned menu icon */}
            <div className="flex-1 text-center relative">
              <a className="absolute left-1/2 transform -translate-x-1/2" href="https://tabafit.com">
                <Image alt="TabaFit Logo" height={40} src="/header-logo.png" width={160} />
              </a>
            </div>
            {/* Hamburger Icon for Mobile - right aligned */}
            <div className="ml-auto flex-none lg:hidden z-999">
              <button aria-label="Toggle Menu" onClick={toggleMenu}>
                <IconMenu2 className="h-8 w-8 text-white" />
              </button>
            </div>
            {/* Desktop navigation (hidden on mobile) */}
            <div className="hidden lg:flex flex-none">
              <ul className="menu menu-horizontal space-x-4">
                <li>
                  <a className="text-white hover:text-gray-400" href="#how-it-works">
                                        How It Works
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-400" href="#testimonials">
                                        Testimonials
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-400" href="#faq">
                                        FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block bg-gradient-to-br from-primary to-secondary text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-200"
                    href="#"
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
          <label className="drawer-overlay" htmlFor="my-drawer" onClick={toggleMenu} />

          <ul className="menu bg-gray-800 text-white min-h-full w-80 p-4 space-y-4">
            {/* "X" Close Button, Right-Aligned */}
            <li className="flex justify-end">
              <div className="ml-auto p-0">
                <button
                  aria-label="Close Menu"
                  onClick={toggleMenu}
                  className="p-2" /* Padding around the icon, but no full-width */
                >
                  <IconX className="h-8 w-8 text-white" />
                </button>
              </div>
            </li>
            <li>
              <a className="text-xl py-2 px-4 hover:text-gray-400" href="#how-it-works" onClick={closeMenu}>
                How It Works
              </a>
            </li>
            <li>
              <a className="text-xl py-2 px-4 hover:text-gray-400" href="#testimonials" onClick={closeMenu}>
                    Testimonials
              </a>
            </li>
            <li>
              <a className="text-xl py-2 px-4 hover:text-gray-400" href="#faq" onClick={closeMenu}>
                                FAQ
              </a>
            </li>
            <li>
              <a
                className="inline-block m-auto bg-gradient-to-br from-primary to-secondary text-xl text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-gray-200"
                href="#"
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
};
