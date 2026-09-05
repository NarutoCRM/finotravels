function CTA() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary-dark">
        <div className="relative px-6 py-12 text-center md:px-12">

          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-300">
              Start Your Adventure
            </p>

            <h2 className="text-3xl font-black text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Book your next trip with confidence.
              Our travel experts are ready to help you.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#deals"
                className="rounded-xl bg-secondary px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
              >
                Book Your Flight Now
              </a>

              <a
                href="tel:+18557502746"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                ☎ Call (855) 750-2746
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;