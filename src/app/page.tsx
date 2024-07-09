"use client";

import Image from 'next/image';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

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
        // const response = await fetch('http://localhost:3000/waitlist', {
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
          {toastType === 'success' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
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
        <p className="text-lg md:text-xl mb-6">
          TabaFit delivers custom Tabata workouts, an active community of support, and the tools to reach your fitness goals.
        </p>
        <div className="flex flex-col items-center w-full">
          <input
            type="email"
            className="input  text-lg input-bordered w-full max-w-md mb-4 bg-white text-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <button
            className="btn
            transition ease-in-out  hover:scale-105 duration-300 
            text-lg w-full max-w-md bg-gradient-to-r from-primary to-secondary border-none flex items-center justify-center"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
            <IconArrowRight />
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
    </main>
  );
}
