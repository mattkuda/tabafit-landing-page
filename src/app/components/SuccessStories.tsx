import Image from 'next/image';

export const SuccessStories = (): JSX.Element => {
  return (
    <section className="w-full mt-16 text-black py-12 px-4 text-white">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column */}
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Cardio is now fun</h3>
            <p className="text-gray-300 italic text-lg">"TabaFit transformed my fitness journey. I feel stronger and more motivated!"</p>
            <p className="text-gray-300 italic text-lg">- Tom C</p>
          </div>

          {/* Second column */}
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Game changer</h3>
            <p className="text-gray-300 italic text-lg">"The custom Tabata routines keep things fresh and engaging, and the flexibility allows me to easily exercise at home or on the road. Plus, the interactive community keeps me motivated. Highly recommend for anyone looking to elevate their fitness routine!"</p>
            <p className="text-gray-300 italic text-lg">- Kim K</p>
          </div>
          {/* Third column */}
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Love the Guided Workouts</h3>
            <p className="text-gray-300 italic text-lg">"The guided workouts are simple and easy to follow. The videos are super helpful and I've seen great results."</p>
            <p className="text-gray-300 italic text-lg">- Will H</p>
          </div>
        </div>
      </div>
    </section>
  );
};
