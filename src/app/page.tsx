"use client";

import Image from 'next/image';
import { useState } from 'react';
import { IconArrowRight, IconCheck, IconX } from '@tabler/icons-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState(''); // 'success' or 'error'

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleJoinWaitlist = async () => {
    if (!validateEmail(email)) {
      setToastType('error');
      setToastMessage('Please enter a valid email address.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      return;
    }

    try {
      const response = await fetch('https://tabafit.up.railway.app/waitlist', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setToastType('success');
        setToastMessage('Thanks for joining the waitlist!');
        setShowToast(true);
        setEmail('');
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      } else {
        const errorData = await response.json();
        console.error('Failed to join the waitlist:', errorData);
        setToastType('error');
        setToastMessage(`Failed to join the waitlist: ${errorData.message}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setToastType('error');
      setToastMessage(`Failed to join the waitlist. Please try again. Error: ${JSON.stringify(error)}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900 text-white">
      {showToast && (
        <div className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 rounded shadow-lg flex items-center ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {toastType === 'success' ? (
            <IconCheck className="h-6 w-6 mr-2" />
          ) : (
            <IconX className="h-6 w-6 mr-2" />
          )}
          {toastMessage}
        </div>
      )}
      <div className="relative w-full max-w-5xl p-4">
        {/* Logo Placeholder */}
        <div className="flex justify-start">
          <a href="https://tabafit.com">
            <Image
              src="/header-logo.png"
              alt="TabaFit Logo"
              width={200}
              height={80}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-10 max-w-3xl p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Tabata Workout Community</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          TabaFit delivers custom Tabata workouts, an active community of support, and the tools to reach your fitness goals.
        </p>
        <div className="flex flex-col items-center w-full">
          <input
            type="email"
            className="input text-lg input-bordered w-full max-w-md mb-4 bg-white text-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn text-lg w-full max-w-md bg-gradient-to-r from-primary to-secondary border-none flex items-center justify-center group transition ease-in-out hover:scale-105 duration-300"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
            <IconArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
      {/* App Screenshots Placeholder */}
      <div className="relative mt-10 w-full max-w-5xl h-96 lg:h-[500px]">
        <Image
          src="/workouts-mockup.png"
          alt="App Screenshot"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      {/* FAQ Section */}
      <section className="w-full mt-16 bg-gray-100 text-black py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">What is TabaFit?</summary>
              <div className="mt-2 text-sm text-gray-600">
                TabaFit is an app that delivers custom Tabata workouts, provides a supportive community, and the tools to help you reach your fitness goals.
              </div>
            </details>
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">How does the waitlist work?</summary>
              <div className="mt-2 text-sm text-gray-600">
                By joining the waitlist, you will be among the first to know when TabaFit is available for download.
              </div>
            </details>
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">What kind of workouts does TabaFit offer?</summary>
              <div className="mt-2 text-sm text-gray-600">
                TabaFit offers a variety of Tabata workouts that can be customized to your fitness level and preferences.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
