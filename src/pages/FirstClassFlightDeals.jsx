import { useState } from "react";

const destinations = [
  "New York",
  "Los Angeles",
  "London",
  "Dubai",
  "Paris",
  "Tokyo",
  "Singapore",
  "Toronto",
  "Sydney",
  "Frankfurt",
];

const routes = [
  "New York – London",
  "Los Angeles – Dubai",
  "San Francisco – Tokyo",
  "Chicago – Miami",
  "Boston – Paris",
  "Seattle – Singapore",
];

const tripTypes = [
  {
    title: "Domestic First Class Flights",
    description:
      "Travel between major U.S. cities with first class options that may provide additional comfort and services compared with standard economy travel.",
    icon: "🇺🇸",
  },
  {
    title: "International First Class Flights",
    description:
      "For longer journeys, explore first class options to destinations across Europe, Asia, the Middle East, and other popular international regions.",
    icon: "🌎",
  },
  {
    title: "Business & Leisure Travel",
    description:
      "First class can be suitable for important business trips, vacations, celebrations, or occasions when extra comfort matters.",
    icon: "💼",
  },
  {
    title: "Last-Minute First Class Flights",
    description:
      "If your plans change unexpectedly, you can still search available first class seats close to departure. Options depend on remaining inventory and current fares.",
    icon: "✈️",
  },
];

const faqs = [
  {
    question: "How can I book a first class flight with FinoTravels?",
    answer:
      "Search online or call (855) 750-2746 for assistance with available first class options.",
  },
  {
    question: "Can I find first class flight deals with FinoTravels?",
    answer:
      "You can compare available first class fares based on your route, dates, airline, and seat availability.",
  },
  {
    question: "Does FinoTravels offer international first class flights?",
    answer:
      "International first class options may be available depending on the airline, destination, dates, and remaining inventory.",
  },
  {
    question: "Can I book one-way or round-trip first class flights?",
    answer:
      "Yes. Available first class itineraries may include both one-way and round-trip options.",
  },
  {
    question: "Can first class airfare change after I search?",
    answer:
      "Yes. Airfare and availability can change due to demand, inventory, travel dates, and airline pricing.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-black text-dark sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function FirstClassFlightDeals() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[430px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,28,66,.68),rgba(0,28,66,.68)), url('/images/hero-travel.jpg')",
          }}
        >
          <div className="container-main flex min-h-[430px] items-center justify-center py-16 text-center text-white">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Premium Flight Options
              </span>

              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                First Class Flight Deals
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                Enjoy a More Comfortable Way To Fly. Explore first class
                flight options for domestic and international journeys with
                FinoTravels.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Search First Class Flights
                </a>

                <a
                  href="tel:+18557502746"
                  className="rounded-lg border border-white bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  ☎ Call (855) 750-2746
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            eyebrow="First Class Travel"
            title="Enjoy A More Comfortable Way To Fly"
            description="First class flights can make your journey feel more comfortable from the moment you begin planning. Whether you are traveling for business, celebrating a special occasion, or simply prefer a premium cabin, FinoTravels helps you explore first class flight options for domestic and international journeys."
          />

          <div className="mx-auto max-w-4xl rounded-2xl bg-light-blue p-6 sm:p-8">
            <h3 className="text-xl font-black text-dark">
              Explore First Class Airfare Options
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              First class fares can vary based on the airline, route, travel
              dates, availability, and cabin benefits included with the ticket.
              Comparing different options can help you find a flight that
              fits your schedule and travel preferences. FinoTravels makes it
              easier to review available first class options before completing
              your reservation.
            </p>
          </div>
        </div>
      </section>

      {/* Trip Types */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <SectionTitle
            eyebrow="Travel Options"
            title="First Class Flights For Different Trips"
            description="Explore first class options for different types of travel and itineraries."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tripTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-black text-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Helpful Tips
              </p>

              <h2 className="mt-2 text-2xl font-black text-dark sm:text-3xl">
                Tips For Finding First Class Flight Deals
              </h2>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Start your search early when possible and compare multiple
                travel dates. Flexible departure times may reveal additional
                options. You can also compare one-way and round-trip fares,
                check different airports, and consider both domestic and
                international alternatives based on your itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-light-blue">
        <div className="container-main">
          <SectionTitle
            eyebrow="Popular Destinations"
            title="Popular First Class Destinations"
            description="Travelers frequently search for first class flights to destinations such as:"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {destinations.map((destination) => (
              <a
                key={destination}
                href={`/destinations?search=${encodeURIComponent(
                  destination
                )}`}
                className="rounded-xl border border-white bg-white px-4 py-4 text-center text-sm font-bold text-dark shadow-sm transition hover:-translate-y-1 hover:text-primary"
              >
                ✈️ {destination}
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-center text-xl font-black text-dark">
              Popular First Class Routes
            </h3>

            <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <a
                  key={route}
                  href={`/flights?route=${encodeURIComponent(route)}`}
                  className="rounded-xl bg-white p-4 text-center text-sm font-semibold text-gray-700 shadow-sm transition hover:text-primary"
                >
                  {route}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Search */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl rounded-2xl bg-dark p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-white/70">
              Flight Search Tips
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              When Should You Search For First Class Flights?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              There is no single best time that guarantees a lower first class
              fare. Prices can change frequently according to demand,
              availability, seasonality, and travel dates. Searching ahead and
              comparing different options can give you more choices.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <SectionTitle
            eyebrow="Book With FinoTravels"
            title="Book First Class Flights With FinoTravels"
          />

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-black text-dark">
                Online Booking
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Search available flights, review your options, and select a
                first class itinerary that suits your plans.
              </p>

              <a
                href="/flights"
                className="mt-5 inline-block font-bold text-primary hover:underline"
              >
                Search Flights →
              </a>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-xl">
                ☎
              </div>

              <h3 className="mt-5 text-xl font-black text-dark">
                Phone Assistance
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Prefer personal assistance? Call (855) 750-2746 to discuss
                available first class flight options and booking details.
              </p>

              <a
                href="tel:+18557502746"
                className="mt-5 inline-block font-bold text-primary hover:underline"
              >
                Call (855) 750-2746 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why FinoTravels */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              eyebrow="Why FinoTravels"
              title="Why Search With FinoTravels?"
            />

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-blue text-lg">
                  ✓
                </div>

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  FinoTravels offers a convenient way to explore first class
                  airfare for different types of travel. You can compare
                  available options based on your dates, destination, and
                  preferred cabin before making your reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-light-blue">
        <div className="container-main">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about first class flight options."
          />

          <div className="mx-auto max-w-4xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-dark sm:text-base">
                      {index + 1}. {faq.question}
                    </span>

                    <span className="shrink-0 text-xl font-bold text-primary">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 py-4">
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
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main">
          <div
            className="overflow-hidden rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,28,66,.88),rgba(0,28,66,.88)), url('/images/hero-travel.jpg')",
            }}
          >
            <div className="px-6 py-14 text-center text-white sm:px-10">
              <h2 className="text-2xl font-black sm:text-3xl">
                Ready To Explore First Class Flights?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80">
                Compare available first class flight options based on your
                destination, dates, and preferred cabin.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Search Flights
                </a>

                <a
                  href="tel:+18557502746"
                  className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  ☎ (855) 750-2746
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstClassFlightDeals;