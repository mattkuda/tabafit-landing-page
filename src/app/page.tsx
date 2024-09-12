"use client";

import Header from './components/Header';
import MainContent from './components/MainContent';
import HowItWorksSection from './components/HowItWorksSection';
import SuccessStories from './components/SuccessStories';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once
    });
  }, []);

  return (
    <main className="scroll-smooth bg-gray-900 text-white">
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
      <Footer/>
    </main>
  );
}
