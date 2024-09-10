import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className="w-full mt-16 bg-gray-100 text-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Your Workout Journey with TabaFit</h2>

        {/* First row: Text on the left, image on the right */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
          <h3 className="text-6xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">1</h3>
          <h3 className="text-xl font-semibold mb-2">Create Your Custom Workout</h3>
            <p className="text-gray-600">
              Use our powerful tools to create workouts tailored to your fitness goals.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/favicon.png"
              alt="Share your workout"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 300, height: 300 }} // optional
            />
          </div>
        </div>

        {/* Second row: Image on the left, text on the right */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
          <h3 className="text-6xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">2</h3>
            <h3 className="text-xl font-semibold mb-2">Perform with Guided Videos</h3>
            <p className="text-gray-600">
              Follow along with high-quality video guidance for each workout.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/favicon.png"
              alt="Share your workout"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 300, height: 300 }} // optional
            />
          </div>
        </div>

        {/* Third row: Text on the left, image on the right */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
          <h3 className="text-6xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">3</h3>
            <h3 className="text-xl font-semibold mb-2">Share with the Community</h3>
            <p className="text-gray-600">
              Share your completed workouts and inspire others in the TabaFit community.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/favicon.png"
              alt="Share your workout"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 300, height: 300 }} // optional
            />
          </div>
        </div>
      </div>
    </section>
  );
}
