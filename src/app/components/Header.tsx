import { useState } from 'react';
import Image from 'next/image';
import { IconArrowRight, IconMenu2, IconX } from '@tabler/icons-react';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <div className="w-full">
        {/* Constrained content container */}
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <a href="https://tabafit.com">
            <Image alt="TabaFit Logo" height={40} src="/header-logo.png" width={160} />
          </a>

          <div className="hidden lg:flex items-center space-x-4">
            <a className="text-white hover:text-gray-400" href="#how-it-works">
              How It Works
            </a>
            <a className="text-white hover:text-gray-400" href="#testimonials">
              Testimonials
            </a>
            <a className="text-white hover:text-gray-400" href="#our-story">
              Our Story
            </a>
            <a className="text-white hover:text-gray-400" href="#faq">
              FAQ
            </a>
            <a
              className="flex bg-gradient-to-br from-primary to-secondary text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-200"
              href="https://apps.apple.com/us/app/tabafit/id6502636924"
            >
              Download TabaFit<IconArrowRight className="ml-2" />
            </a>
          </div>

          {/* Hamburger Icon for Mobile - right aligned */}
          <div className="lg:hidden">
            <button aria-label="Toggle Menu" onClick={toggleMenu}>
              <IconMenu2 className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="drawer drawer-end">
        <input checked={isOpen} className="drawer-toggle" id="my-drawer" readOnly type="checkbox" />

        <div className="drawer-side">
          <label className="drawer-overlay" htmlFor="my-drawer" onClick={toggleMenu} />

          <ul className="menu bg-gray-800 text-white min-h-full w-80 p-4 space-y-4">
            <li className="flex justify-end">
              <div className="ml-auto p-0">
                <button
                  aria-label="Close Menu"
                  className="p-2"
                  onClick={toggleMenu}
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
              <a className="text-xl py-2 px-4 hover:text-gray-400" href="#our-story" onClick={closeMenu}>
                Our Story
              </a>
            </li>
            <li>
              <a className="text-xl py-2 px-4 hover:text-gray-400" href="#faq" onClick={closeMenu}>
                FAQ
              </a>
            </li>
            <li>
              <a
                className="flex  m-auto bg-gradient-to-br from-primary to-secondary text-white font-semibold text-xl py-3 px-6 rounded-full transition duration-300 hover:bg-gray-200"
                onClick={closeMenu}
                href="https://apps.apple.com/us/app/tabafit/id6502636924"
              >
                Download TabaFit<IconArrowRight className="ml-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
