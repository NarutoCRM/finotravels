const reasons = [
  {
    number: "01",
    icon: "☎",
    title: "Help When You Need It",
    text: "Have questions about your flight options? Our team is available to provide booking assistance when you need it.",
  },
  {
    number: "02",
    icon: "✈",
    title: "Easy to Explore",
    text: "Search and compare available flights based on your destination, dates, and preferred travel options.",
  },
  {
    number: "03",
    icon: "☝",
    title: "Simple Booking",
    text: "Review your itinerary details and complete your flight reservation through a straightforward booking process.",
  },
  {
    number: "04",
    icon: "↔",
    title: "Flexible Flight Choices",
    text: "Explore available one-way, round-trip, domestic, and international flight options in one convenient place.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white">
      
      <div className="container-main">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center mt-10" >


          <h2 className="text-3xl font-black text-dark md:text-4xl">
            Reasons To Book With FinoTravels
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            We're here to make finding and booking your next
            flight simple and convenient.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Number */}
              <span className="absolute right-4 top-4 text-xs font-black text-gray-200">
                {reason.number}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-extrabold text-dark">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {reason.text}
              </p>

              {/* Bottom line */}
              <div className="mt-5 h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;