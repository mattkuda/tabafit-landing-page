import Image from 'next/image';
import DownloadButton from './DownloadButton';

export const MainContent = (): JSX.Element => (
  <section className="w-full mt-8 py-8 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-0 gap-8">
        {/* Left Column */}
        <div className="lg:w-[60%] text-center lg:text-left lg:pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cardio Made Fun,</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Training Made Yours</h1>
          <p className="text-lg md:text-xl mb-16 text-gray-200">
            TabaFit delivers custom Tabata workouts, an active community of support,
            and the tools to reach your fitness goals.
          </p>
          {<DownloadButton />}
        </div>
        {/* Right Column */}
        <div className="lg:w-[40%]">
          <div className="relative w-full h-96 lg:h-[600px]" data-aos="fade-up">
            <Image
              priority
              alt="App Screenshot"
              height={0}
              width={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
              src="/TF_landing_photo_1.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
