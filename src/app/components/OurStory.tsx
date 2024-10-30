'use client';

export const OurStory = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-gray-100" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="float-left w-48 mb-6 mr-6" data-aos="fade-right">
          <div className="rounded-lg overflow-hidden border-4 border-gray-700 shadow-xl">
            <img
              src="/mattkuda.png"
              alt="Matt - Creator of TabaFit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6" data-aos="fade-left">
          <p className="text-xl font-bold">Hey, it's Matt 👋</p>
          <p className="text-xl text-gray-300">
            When I started coding TabaFit in 2023, my goal was simple: <i>make cardio fun again.</i>
          </p>
          <p className="text-xl text-gray-300">
            I wanted a workout app that made cardio feel less like a solo grind and more like
            a flexible, community-driven experience.
          </p>

          <p className="text-xl text-gray-300">
            So, I set out to build TabaFit with three goals in mind:
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="font-bold text-xl">1.</span>
              <div className="text-xl">Make cardio something you actually look forward to with quick, custom HIIT routines</div>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-xl">2.</span>
              <div className="text-xl">Create a community where people can share workouts and support each other</div>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-xl">3.</span>
              <div className="text-xl">Keep it accessible. No gym, no fancy gear, just workouts you can do anywhere</div>
            </div>
          </div>

          <p className="text-xl text-gray-300">
            TabaFit isn't just an app. It's a way to bring people together around fitness, one workout at a time.
          </p>
        </div>

        {/* Clear the float before the video section */}
        <div className="clear-both"></div>

        {/* Unlisted video section */}
        <div
          className="mt-16 aspect-[9/16] max-w-[350px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/I5b1KJFuCnw"
            title="App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
