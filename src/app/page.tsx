'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import {Header} from './components/Header';
import {MainContent} from './components/MainContent';
import {HowItWorksSection} from './components/HowItWorksSection';
import {SuccessStories} from './components/SuccessStories';
import {FAQSection} from './components/FAQSection';
import {Footer} from './components/Footer';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = (): JSX.Element => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,
    });
  }, []);

  return (
    <main className="scroll-smooth bg-gray-800 text-white">
      <Header />
      <MainContent />
      <section id="how-it-works" className="bg-white">
        <HowItWorksSection />
      </section>
      <section id="testimonials">
        <SuccessStories />
      </section>
      <section id="faq" className="bg-gray-100">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
};

export default Home; // Ensure this is the default export
