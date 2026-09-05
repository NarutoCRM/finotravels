function Flights() {
  return (
    <section className="section-padding">
      <div className="container-main">

        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Flights
          </p>

          <h1 className="mt-2 text-4xl font-black text-primary-dark">
            Find Your Perfect Flight
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Discover domestic and international flight options
            with convenient booking assistance from FinoTravels.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-light-blue p-5 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">

              <input
                placeholder="From"
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none focus:border-primary"
              />

              <input
                placeholder="To"
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none focus:border-primary"
              />

              <input
                type="date"
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none focus:border-primary"
              />

            </div>

            <button className="mt-4 w-full rounded-xl bg-primary py-4 font-bold text-white hover:bg-primary-dark">
              Search Flights
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Flights;