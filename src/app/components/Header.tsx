import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="https://tabafit.com">
          <Image src="/header-logo.png" alt="TabaFit Logo" width={200} height={80} />
        </a>
        <nav className="space-x-6">
          <a href="#how-it-works" className="text-white hover:text-gray-400">How It Works</a>
          <a href="#testimonials" className="text-white hover:text-gray-400">Testimonials</a>
          <a href="#faq" className="text-white hover:text-gray-400">FAQ</a>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-200"
            >
            Download TabaFit &#10140;
          </a>
        </nav>
      </div>
    </header>
  );
}
