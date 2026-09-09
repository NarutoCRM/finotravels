function AboutSection() {
  return (
    <section className="bg-[#f8faff] py-14 md:py-20">
      <div className="container-main">

        <div className="mx-auto max-w-4xl">
          
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[2px] text-primary">
            About FinoTravels
          </p>

          <h2 className="text-3xl font-black text-dark md:text-4xl">
            FinoTravels — Your Travel Partner for Easy Flight Booking
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
            Planning a flight should not feel complicated. At FinoTravels,
            we help travelers explore available airfare and flight options
            for domestic and international journeys. From choosing your
            destination to reviewing different itineraries, our goal is
            to make the search and booking experience easier to navigate.
          </p>

          <div className="mt-9">
            <h3 className="text-xl font-black text-dark">
              Who We Are
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              FinoTravels is a travel-focused platform operated by
              TravelFirst LLC. We provide travelers with a convenient
              way to explore available flight options based on their
              destinations, travel dates, and preferred itinerary.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              Whether you're arranging a business trip, visiting family,
              planning a vacation, or booking a last-minute journey,
              you can search for flights that match your travel requirements.
            </p>
          </div>

          <div className="mt-9">
            <h3 className="text-xl font-black text-dark">
              What We Offer
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              FinoTravels helps travelers explore a range of flight
              booking options, including:
            </p>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Domestic flights across the United States
              </li>

              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                International flight options
              </li>

              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                One-way and round-trip flights
              </li>

              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Business class and first class options
              </li>

              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Last-minute flight searches
              </li>

              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Different travel dates, routes, and schedules
              </li>

              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Phone assistance for flight booking inquiries
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;