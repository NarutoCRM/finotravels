import FlightDeals from "../components/FlightDeals";

function Deals() {
  return (
    <div>
      <section className="bg-primary-dark py-20 text-center">
        <div className="container-main">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            FinoTravels Deals
          </p>

          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Great Travel Deals
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Explore selected flight deals and plan your next trip.
          </p>
        </div>
      </section>

      <FlightDeals />
    </div>
  );
}

export default Deals;