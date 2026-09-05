import BookingWidget from "./BookingWidget";

function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Hero Background */}
      <div className="relative min-h-[620px] bg-gradient-to-br from-[#062d4f] via-[#0870a0] to-[#1077e3]">

        {/* Decorative circles */}
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        {/* Airplane decoration */}
        <div className="absolute right-[8%] top-[15%] hidden rotate-[-15deg] text-[120px] opacity-10 lg:block">
          ✈
        </div>

        <div className="container-main relative z-10">

          <div className="flex min-h-[620px] flex-col items-center justify-center pb-28 pt-20 text-center">

            <span className="mb-5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-white backdrop-blur-sm">
              Explore The World With FinoTravels
            </span>

            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Ready to Start
              <br />
              <span className="text-blue-200">
                Your Journey?
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Book your next adventure with confidence.
              Our travel experts are here to help you
              plan an unforgettable journey.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#deals"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-primary shadow-xl transition hover:-translate-y-1"
              >
                Explore Deals
              </a>

              <a
                href="tel:+18557502746"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                ☎ Call Us Now
              </a>
            </div>

          </div>
        </div>

        {/* Booking Widget */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[48%] px-4">
          <BookingWidget />
        </div>
      </div>

      {/* Space for overlapping booking widget */}
      <div className="h-52 bg-white md:h-44" />
    </section>
  );
}

export default Hero;