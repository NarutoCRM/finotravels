const domesticDeals = [
  { city: "New York", airport: "ORD", date: "Mar 25", price: "$123.28", type: "One Way" },
  { city: "Orlando", airport: "TRI", date: "May 19", price: "$141.17", type: "One Way" },
  { city: "West Palm Beach", airport: "RDU", date: "Apr 15", price: "$173.92", type: "One Way" },
  { city: "San Francisco", airport: "RDD", date: "Jun 27", price: "$200.62", type: "Round Trip" },
  { city: "San Diego", airport: "LAX", date: "Mar 20", price: "$209.74", type: "Round Trip" },
  { city: "Appleton", airport: "SRQ", date: "Apr 28", price: "$224.55", type: "One Way" },
  { city: "Sarasota", airport: "ATW", date: "Apr 28", price: "$224.55", type: "One Way" },
  { city: "New Jersey", airport: "GSP", date: "May 23", price: "$226.52", type: "Round Trip" },
  { city: "Portland", airport: "LAS", date: "Apr 10", price: "$237.97", type: "Round Trip" },
];

const internationalDeals = [
  { city: "New York", airport: "ORD", date: "Mar 25", price: "$123.28", type: "One Way" },
  { city: "Orlando", airport: "TRI", date: "May 19", price: "$141.17", type: "One Way" },
  { city: "West Palm Beach", airport: "RDU", date: "Apr 15", price: "$173.92", type: "One Way" },
  { city: "San Francisco", airport: "RDD", date: "Jun 27", price: "$200.62", type: "Round Trip" },
  { city: "San Diego", airport: "LAX", date: "Mar 20", price: "$209.74", type: "Round Trip" },
  { city: "Appleton", airport: "SRQ", date: "Apr 28", price: "$224.55", type: "One Way" },
  { city: "Sarasota", airport: "ATW", date: "Apr 28", price: "$224.55", type: "One Way" },
  { city: "New Jersey", airport: "GSP", date: "May 23", price: "$226.52", type: "Round Trip" },
  { city: "Portland", airport: "LAS", date: "Apr 10", price: "$237.97", type: "Round Trip" },
];

function DealCard({ deal }) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <span className="absolute right-3 top-3 rounded bg-green px-2 py-1 text-[8px] font-bold uppercase text-white">
        {deal.type}
      </span>

      <div className="flex items-center justify-between pr-16">
        <div>
          <h4 className="text-sm font-extrabold text-dark">
            {deal.city}
          </h4>
          <p className="text-[11px] text-gray-400">
            From {deal.airport}
          </p>
        </div>

        <span className="text-lg text-dark">
          ✈
        </span>

        <div className="text-right">
          <p className="text-[9px] text-gray-400">
            {deal.date}
          </p>

          <p className="text-[9px] text-gray-400">
            Starting from
          </p>

          <p className="text-lg font-black text-red-500">
            {deal.price}
          </p>
        </div>
      </div>
    </div>
  );
}

function DealGroup({ title, deals }) {
  return (
    <div className="rounded-2xl bg-[#f7f4e9] p-4 md:p-6">

      <div className="mb-5">
        <h3 className="text-lg font-black text-dark md:text-xl">
          {title}
        </h3>

        <p className="text-xs text-green">
          from United States
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal, index) => (
          <DealCard key={index} deal={deal} />
        ))}
      </div>
    </div>
  );
}

function FlightDeals() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-main">

        <div className="mb-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[2px] text-primary">
            Flight Deals
          </p>

          <h2 className="mt-2 text-3xl font-black text-dark">
            Popular Flight Deals For You
          </h2>
        </div>

        <div className="space-y-7">

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