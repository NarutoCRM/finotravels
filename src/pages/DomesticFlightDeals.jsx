import { useState } from "react";

function DomesticFlightDeals() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How Can I Find Affordable Domestic Flights?",
      answer:
        "Compare different dates, departure times, routes, and available fares. Flexible travel plans may provide more options.",
    },
    {
      question: "Can I Book Last-Minute Domestic Flights?",
      answer:
        "Yes. You can search flights departing soon, although fares and availability may vary significantly.",
    },
    {
      question: "Does FinoTravels Offer One-Way Flights?",
      answer:
        "Yes. You can search available one-way domestic flights based on your destination and travel dates.",
    },
    {
      question: "Can I Book Round-Trip Domestic Flights?",
      answer:
        "Yes. Enter your departure and return dates to explore available round-trip options.",
    },
    {
      question: "Do Domestic Flight Prices Change?",
      answer:
        "Yes. Fares can change based on demand, airline inventory, travel dates, and availability. A displayed fare is not guaranteed until the booking is confirmed.",
    },
  ];

  const destinations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "Las Vegas",
    "Orlando",
    "San Francisco",
    "Seattle",
    "Dallas",
    "Atlanta",
  ];

  const routes = [
    "Los Angeles to New York",
    "Chicago to Miami",
    "Dallas to Las Vegas",
    "Atlanta to Los Angeles",
    "San Francisco to Seattle",
    "New York to Orlando",
    "Houston to Denver",
    "Boston to Washington",
  ];

  const planningOptions = [
    {
      title: "One-Way Domestic Flights",
      text: "Ideal for relocations, open-ended trips, work assignments, or travelers arranging their return separately.",
      icon: "→",
    },
    {
      title: "Round-Trip Domestic Flights",
      text: "Compare outbound and return options for vacations, business travel, family visits, and planned getaways.",
      icon: "⇄",
    },
    {
      title: "Last-Minute Domestic Flights",
      text: "Need to travel soon? Search available flights for your route and compare current fares and schedules.",
      icon: "⚡",
    },
    {
      title: "Weekend & Holiday Flights",
      text: "Explore domestic airfare for weekend breaks, seasonal travel, holidays, and short vacations.",
      icon: "☀",
    },
  ];

  const tips = [
    "Checking flexible travel dates.",
    "Comparing departure and arrival times.",
    "Reviewing one-way and round-trip options.",
    "Considering nearby airports when practical.",
    "Checking available promotions and fare offers.",
    "Booking ahead when your dates are confirmed.",
  ];

  const bookingSteps = [
    "Visit FinoTravels.",
    "Enter your departure and destination cities.",
    "Select your travel dates.",
    "Browse and compare available flights.",
    "Choose your preferred itinerary.",
    "Enter the required passenger details.",
    "Complete the booking process and review your confirmation.",
  ];

  const benefits = [
    "Convenient online flight searches.",
    "Available fare and schedule comparisons.",
    "One-way and round-trip options.",
    "Flexible travel choices.",
    "Domestic routes across the U.S.",
    "Booking assistance when needed.",
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('/images/hero-travel.jpg')",
          }}
        />

        <div className="relative">
          <div className="container-main">
            <div className="max-w-3xl py-20 md:py-24">
              <span className="inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-white">
                Domestic Flight Deals
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Find Great Deals on Flights Across the U.S.
              </h1>

              <p className="mt-5 text-base leading-7 text-white/80 md:text-lg">
                Planning a trip within the United States? Whether it’s a family
                visit, business trip, weekend getaway, or last-minute journey,
                FinoTravels helps you explore domestic flight options in one
                convenient place.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-dark"
                >
                  Search Domestic Flights
                </a>

                <a
                  href="tel:+18557502746"
                  className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-dark"
                >
                  ☎ (855) 750-2746
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Explore Your Options
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Make Domestic Flight Planning Easier
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
              Comparing different flight options can help you make a more
              informed travel decision. With FinoTravels, you can search
              routes, compare available fares and schedules, and find an
              itinerary that fits your travel plans.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Compare available domestic airfare and schedules.",
                "Search one-way and round-trip flights.",
                "Explore different departure dates and times.",
                "Look for budget-friendly flight options.",
                "Review flights based on your destination and schedule.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-100 bg-light-blue/50 p-5 text-left shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <p className="mt-4 text-sm font-semibold leading-6 text-dark">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Plans */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Travel Your Way
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Domestic Flights for Different Travel Plans
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {planningOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-dark">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Smart Search
              </span>

              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
                Tips For Finding Better Domestic Airfare
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                There is no guaranteed formula for finding the lowest fare, but
                comparing different options may help you find a suitable
                flight. Consider:
              </p>

              <div className="mt-7 space-y-4">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {tip}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-light-blue p-8 md:p-10">
              <div className="text-6xl">✈️</div>

              <h3 className="mt-6 text-2xl font-black text-dark">
                Compare Before You Decide
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Explore different departure dates, times, routes, and available
                fares to find an itinerary that works for your travel plans.
              </p>

              <a
                href="/flights"
                className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-dark"
              >
                Explore Flights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-dark section-padding">
        <div className="container-main">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Explore America
            </span>

            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Popular U.S. Flight Destinations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              Travelers frequently search for domestic flights to destinations
              such as:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {destinations.map((destination) => (
              <a
                key={destination}
                href={`/flights?destination=${encodeURIComponent(
                  destination
                )}`}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center text-sm font-bold text-white transition hover:bg-primary"
              >
                ✈ {destination}
              </a>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-center text-2xl font-bold text-white">
              Popular Domestic Routes
            </h3>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {routes.map((route) => (
                <div
                  key={route}
                  className="rounded-xl bg-white/10 px-5 py-4 text-sm font-medium text-white"
                >
                  ✈️ {route}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Search */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-7 shadow-lg md:p-10">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Plan Ahead
              </span>

              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
                When Should You Search for Domestic Flights?
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Domestic airfare can change based on demand, travel dates,
                route, airline, and seat availability. If possible, compare
                several dates and departure times. Weekday travel or less busy
                periods may also provide additional options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Simple Booking
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Book Your Domestic Flight With FinoTravels
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Online */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl text-white">
                💻
              </div>

              <h3 className="mt-5 text-2xl font-bold text-dark">
                Online Booking
              </h3>

              <div className="mt-6 space-y-4">
                {bookingSteps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-light-blue text-sm font-bold text-primary">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/flights"
                className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-dark"
              >
                Book Online
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-dark p-7 text-white shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl">
                ☎
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Phone Booking Assistance
              </h3>

              <p className="mt-5 leading-7 text-white/75">
                Prefer personal assistance? Call (855) 750-2746 to discuss your
                preferred route, dates, and available flight options with our
                travel team.
              </p>

              <a
                href="tel:+18557502746"
                className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-dark transition hover:bg-primary hover:text-white"
              >
                ☎ Call (855) 750-2746
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Why FinoTravels
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Why Choose FinoTravels for Domestic Flights?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              FinoTravels provides a simple way to explore domestic airfare
              with:
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue font-black text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 font-semibold text-dark">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-blue section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                FAQs
              </span>

              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                    >
                      <span className="font-bold text-dark">
                        {index + 1}. {faq.question}
                      </span>

                      <span className="shrink-0 text-xl font-bold text-primary">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container-main">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-3xl font-black text-white">
                Ready to Find Your Domestic Flight?
              </h2>

              <p className="mt-2 text-sm text-white/80">
                Explore available routes, fares, and schedules with
                FinoTravels.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/flights"
                className="rounded-lg bg-white px-7 py-3 text-center text-sm font-bold text-dark transition hover:bg-dark hover:text-white"
              >
                Search Flights
              </a>

              <a
                href="tel:+18557502746"
                className="rounded-lg border border-white px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-dark"
              >
                ☎ (855) 750-2746
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DomesticFlightDeals;