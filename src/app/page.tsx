import Image from 'next/image';

export default function Home() {
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
          <button className="btn-lg text-xl mb-10 bg-gradient-to-r from-primary to-secondary border-none rounded-full text-black">Download App</button>
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
