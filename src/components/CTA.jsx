function CTA() {
  return (
    <section className="px-3 py-10 md:px-5 md:py-14">
      <div className="container-main">

        <div className="relative overflow-hidden rounded-2xl bg-dark px-6 py-10 text-center md:px-12">

          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">

            <h2 className="text-3xl font-black text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100">
              Book your next flight with confidence.
              Our expert team is here to help you 24/7.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="#booking"
                className="rounded-lg bg-green px-7 py-3.5 text-sm font-bold text-white hover:bg-green/90"
              >
                Book Your Flight Now
              </a>

              <a
                href="tel:+18557502746"
                className="rounded-lg border border-white/50 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
              >
                ☎ Call (855) 750-2746
              </a>

            </div>

          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-black text-dark">
            Your Next Trip Starts With the Right Flight
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            FinoTravels is here to make flight booking easier.
          </p>
        </div>

      </div>
    </section>
  );
}

export default CTA;