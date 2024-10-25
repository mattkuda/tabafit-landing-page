import Image from 'next/image';
import DownloadButton from './DownloadButton';
import WaitlistForm from './WaitlistForm'; // Import the WaitlistForm component

export const MainContent = (): JSX.Element => (
  <section className="w-full mt-8 py-8 px-4">
    <div className="max-w-3xl mx-auto items-center text-center">
      {/* <div className="flex flex-col items-center text-center max-w-3xl p-4"> */}

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Tabata Workout Community</h1>
      <p className="text-lg md:text-xl mb-6 text-gray-300">
        TabaFit delivers custom Tabata workouts, an active community of support,
        and the tools to reach your fitness goals.
      </p>
      {<DownloadButton />}
      <div className="relative mt-10 w-full max-w-5xl h-96 lg:h-[500px]" data-aos="fade-up">
        <Image
          priority
          alt="App Screenshot"
          layout="fill"
          objectFit="contain"
          src="/workouts-mockup.png"
        />
      </div>
    </div>
  </section>
);
