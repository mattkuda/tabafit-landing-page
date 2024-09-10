"use client";

import Header from './components/Header';
import MainContent from './components/MainContent';
import HowItWorksSection from './components/HowItWorksSection';
import SuccessStories from './components/SuccessStories';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
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
