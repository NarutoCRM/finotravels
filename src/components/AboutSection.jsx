function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              About FinoTravels
            </p>

            <h2 className="text-3xl font-black leading-tight text-primary-dark md:text-4xl">
              Your Ultimate Partner
              <br />
              For Reliable Travel
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              At FinoTravels, we make travel simple, affordable,
              and stress-free. Whether you are traveling for
              business, family, or a special getaway, our team
              is here to help you plan your journey.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From flights and hotels to customized travel
              experiences, we provide convenient solutions
              designed around your plans and budget.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-primary-dark"
            >
              Learn More
            </a>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-[#004b9b] p-8 shadow-2xl">
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-6 text-6xl">🌎</div>

                <h3 className="text-2xl font-black text-white">
                  Travel With Confidence
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  Expert assistance, easy booking and travel
                  solutions designed to make every journey
                  easier.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-black text-white">
                      24/7
                    </p>
                    <p className="text-xs text-blue-100">
                      Travel Support
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-black text-white">
                      Easy
                    </p>
                    <p className="text-xs text-blue-100">
                      Booking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;