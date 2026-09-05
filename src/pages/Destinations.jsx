const destinations = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Orlando",
  "London",
  "Paris",
  "Tokyo",
  "Hong Kong",
];

function Destinations() {
  return (
    <section className="section-padding">
      <div className="container-main">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Destinations
          </p>

          <h1 className="mt-2 text-4xl font-black text-primary-dark">
            Explore Popular Destinations
          </h1>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination}
              className="group rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-7 text-white shadow-lg transition hover:-translate-y-1"
            >
              <div className="text-4xl">✈</div>

              <h2 className="mt-8 text-xl font-black">
                {destination}
              </h2>

              <p className="mt-2 text-sm text-blue-100">
                Explore flights and travel options
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Destinations;