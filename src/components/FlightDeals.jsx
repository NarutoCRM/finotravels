const domesticDeals = [
  ["New York", "ORD", "$123.28"],
  ["Orlando", "TRI", "$141.17"],
  ["West Palm Beach", "ATL", "$173.28"],
  ["San Francisco", "LAS", "$200.62"],
  ["San Diego", "LAX", "$209.74"],
  ["Appleton", "SFO", "$224.55"],
  ["Sarasota", "ATW", "$224.55"],
  ["New Jersey", "FLL", "$226.52"],
  ["Portland", "LAX", "$237.77"],
];

const internationalDeals = [
  ["New York", "LON", "$323"],
  ["Orlando", "PAR", "$341"],
  ["West Palm Beach", "TYO", "$373"],
  ["San Francisco", "LON", "$402"],
  ["San Diego", "PAR", "$409"],
  ["Appleton", "DXB", "$424"],
  ["Sarasota", "LHR", "$445"],
  ["New Jersey", "ROM", "$462"],
  ["Portland", "HKG", "$477"],
];

function DealCard({ deal }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-secondary px-2 py-1 text-[9px] font-bold text-white">
          ONE WAY
        </span>

        <span className="text-[10px] text-gray-400">
          Starting fare
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="font-bold text-gray-900">{deal[0]}</p>
          <p className="text-xs text-gray-400">From {deal[1]}</p>
        </div>

        <span className="text-xl text-primary">✈</span>

        <div className="text-right">
          <p className="text-lg font-black text-red-500">
            {deal[2]}
          </p>
        </div>
      </div>
    </div>
  );
}

function DealGroup({ title, deals }) {
  return (
    <div className="rounded-3xl bg-[#f7f5eb] p-5 md:p-7">
      <h3 className="mb-6 text-xl font-black text-primary-dark md:text-2xl">
        {title}
      </h3>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal, index) => (
          <DealCard key={index} deal={deal} />
        ))}
      </div>
    </div>
  );
}

function FlightDeals() {
  return (
    <section id="deals" className="section-padding bg-light">
      <div className="container-main">

        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Best Flight Deals
          </p>

          <h2 className="text-3xl font-black text-primary-dark md:text-4xl">
            Top Flight Deals For You
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            Discover great flight fares and start planning your
            next adventure with FinoTravels.
          </p>
        </div>

        <div className="space-y-8">
          <DealGroup
            title="Top Domestic Round-Trip Flight Deals For You"
            deals={domesticDeals}
          />

          <DealGroup
            title="Top International Round-Trip Flight Deals For You"
            deals={internationalDeals}
          />
        </div>
      </div>
    </section>
  );
}

export default FlightDeals;