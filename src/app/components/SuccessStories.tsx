import Image from 'next/image';

export const SuccessStories = (): JSX.Element => {
  return (
    <section className="w-full mt-16 text-black py-12 px-4 text-white">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Game changer</h3>
            <p className="text-gray-300 italic text-lg">"The custom Tabata routines keep things fresh and engaging, and the flexibility allows me to easily exercise at home or on the road. Plus, the interactive community keeps me motivated."</p>
            <p className="text-gray-300 italic text-lg">- Kim K</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Motivation Builder</h3>
            <p className="text-gray-300 italic text-lg">"Tabata is the easiest workout to go to when your motivation to move is not there. 19 minutes is all you need. Prime for Sundays when you may be prioritizing NFL, apartment cleans, and general reset errands."</p>
            <p className="text-gray-300 italic text-lg">- Will H</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Simple and Easy</h3>
            <p className="text-gray-300 italic text-lg">"The app is great. Easy look and feel. Easy to navigate "</p>
            <p className="text-gray-300 italic text-lg">- Tom C</p>
          </div>
        </div>
      </div>
    </section>
  );
};
