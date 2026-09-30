function Hotels() {
  return (
    <section className="section-padding">
      <div className="container-main">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Hotels
          </p>

          <h1 className="mt-2 text-4xl font-black text-primary-dark">
            Find Comfortable Places to Stay
          </h1>

          <p className="mt-4 text-gray-500">
            Find hotel options for business trips, family
            vacations and unforgettable getaways.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-light p-6">
          <div className="grid gap-4 md:grid-cols-3">

            <input
              placeholder="Destination"
              className="rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none"
            />

            <input
              type="date"
              className="rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none"
            />

            <select className="rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none">
              <option>Guests & Rooms</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3+ Guests</option>
            </select>

          </div>

          <button className="mt-4 w-full rounded-xl bg-primary py-4 font-bold text-white">
            Search Hotels
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hotels;