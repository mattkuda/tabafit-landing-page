"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleJoinWaitlist = async () => {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      alert('Successfully joined the waitlist!');
      setEmail('');
    } else {
      alert('Failed to join the waitlist. Please try again.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900 text-white">
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
      <div className="flex flex-col items-center text-center mt-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Tabata Workout Community</h1>
        <p className="text-lg md:text-xl mb-6">
          TabaFit delivers custom Tabata workouts, an active community of support, and the tools to reach your fitness goals.
        </p>
        <div className="flex flex-col items-center w-full">
          <input
            type="email"
            className="input input-bordered w-full max-w-md mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn w-full max-w-md bg-gradient-to-r from-primary to-secondary  border-none"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </button>
        </div>
      </div>
      {/* App Screenshots Placeholder */}
      <div className="relative mt-10 w-full max-w-5xl h-80 md:h-96 lg:h-[500px]">
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
