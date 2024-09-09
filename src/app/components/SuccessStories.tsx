import Image from 'next/image';

export default function SuccessStories() {
  return (
    <section className="w-full mt-16 bg-gray-100 text-black py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
                <Image
                src="/favicon.png"
                alt="Share your workout"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 300, height: 300 }} // optional
                />
            </div>
            <h3 className="text-lg font-bold mb-2">John Doe</h3>
            <p className="text-gray-600 italic">"TabaFit transformed my fitness journey. I feel stronger and more motivated!"</p>
          </div>

          {/* Second column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
                <Image
                src="/favicon.png"
                alt="Share your workout"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 300, height: 300 }} // optional
                />
            </div>
            <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
            <p className="text-gray-600 italic">"The community support in TabaFit helped me stay consistent. Highly recommend it!"</p>
          </div>

          {/* Third column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
                <Image
                src="/favicon.png"
                alt="Share your workout"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 300, height: 300 }} // optional
                />
            </div>
            <h3 className="text-lg font-bold mb-2">Emily Clark</h3>
            <p className="text-gray-600 italic">"The guided workouts are a game-changer. I love how easy it is to follow along."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
