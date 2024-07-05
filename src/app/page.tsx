import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900 text-white">
      <div className="relative w-full max-w-5xl p-4">
        {/* Logo Placeholder */}
        <div className="flex justify-start">
          <Image
            src="/assets/path-to-your-logo.png" // replace with the correct path to your logo image
            alt="TabaFit Logo"
            width={150}
            height={50}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Tabata Workout Community</h1>
        <p className="text-lg md:text-xl mb-6">
          TabaFit delivers personalized Tabata workouts, tracks your progress, and connects you with a vibrant fitness community.
        </p>
        <button className="btn btn-primary text-lg mb-10">Download App</button>
      </div>

      {/* App Screenshots Placeholder */}
      <div className="relative mt-10 w-full max-w-5xl h-80 md:h-96 lg:h-[500px]">
        <Image
          src="/assets/workouts-mockup.png"
          alt="App Screenshot"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </main>
  );
}
