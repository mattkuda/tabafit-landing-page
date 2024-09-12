export default function FAQSection() {
    return (
      <section id="faq" className="w-full mt-16 bg-gray-100 text-black py-12 px-4">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">What is TabaFit?</summary>
              <div className="mt-2 text-sm text-gray-600">
                TabaFit is a fitness app focused on the growth of the Tabata community. We strive to create a supportive and engaging environment that motivates individuals to push their limits and achieve their fitness goals through high-intensity workouts that offer cardiovascular improvements and fat-burning effects.
                <br /><br />
                By equipping our members with the right tools and resources, we empower them to live an active and healthy lifestyle. Tabata workouts are easily accessible due to their minimal equipment requirements and can be performed anywhere, from the gym to their apartment, to the beach.
              </div>
            </details>
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">How does the waitlist work?</summary>
              <div className="mt-2 text-sm text-gray-600">
                By joining the waitlist, you will be among the first to know when TabaFit is available for download. You will receive exclusive updates and early access to the app, ensuring that you can start your fitness journey with TabaFit as soon as it launches.
              </div>
            </details>
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">What is Tabata?</summary>
              <div className="mt-2 text-sm text-gray-600">
                Tabata is a form of high-intensity interval training (HIIT) that consists of eight rounds of 20 seconds of intense exercise followed by 10 seconds of rest. It was developed by Dr. Izumi Tabata in Japan. The benefits of Tabata include improved cardiovascular health, increased metabolism, and efficient fat burning. This workout can be completed in just four minutes, making it a quick and effective exercise option.
              </div>
            </details>
            <details className="bg-white rounded-lg shadow p-4 group">
              <summary className="font-semibold text-lg cursor-pointer group-hover:text-primary">How do I stay up to date on upcoming features?</summary>
              <div className="mt-2 text-sm text-gray-600">
                Our developer shares updates and news about TabaFit on Twitter. Follow him at <a href="https://x.com/mattkuda" className="text-primary hover:underline">@mattkuda</a>
              </div>
            </details>
          </div>
        </div>
      </section>
    );
  }
  