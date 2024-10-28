import Image from 'next/image';

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="w-full mt-16 bg-gray-100 text-black py-12 px-4">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How It Works</h2>

        {/* First row: Text on the left, image on the right */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
            <h3 className="text-6xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">1</h3>
            <h3 className="text-3xl font-semibold mb-2">Create Your Custom Workout</h3>
            <p className="text-lg text-gray-600">
              Use our powerful tools to create workouts tailored to your fitness goals.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              alt="Share your workout"
              height={0}
              sizes="100vw"
              src="/how-it-works-1.png"
              style={{
                height: 600,
                objectFit: 'contain',
                width: '100%',
              }}
              width={0}
            />
          </div>
        </div>
        {/* Second row: Image on the left, text on the right */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
            <h3 className="text-6xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">2</h3>
            <h3 className="text-3xl font-semibold mb-2">Exercise with Guided Videos</h3>
            <p className="text-lg text-gray-600">
              Follow along with high-quality video guidance for each workout.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              alt="Share your workout"
              height={0}
              sizes="100vw"
              src="/how-it-works-2.png"
              style={{
                height: 600,
                objectFit: 'contain',
                width: '100%',
              }}
              width={0}
            />
          </div>
        </div>

        {/* Third row: Text on the left, image on the right */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="300">
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
            <h3 className="text-6xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">3</h3>
            <h3 className="text-3xl font-semibold mb-2">Share with the Community</h3>
            <p className="text-lg text-gray-600">
              Share your completed workouts and inspire others in the TabaFit community.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              alt="Share your workout"
              height={0}
              sizes="100vw"
              src="/how-it-works-3.png"
              style={{
                height: 600,
                objectFit: 'contain',
                width: '100%',
              }}
              width={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
