import { useState } from "react";

const destinations = [
  "New York",
  "Los Angeles",
  "London",
  "Dubai",
  "Paris",
  "Singapore",
  "Tokyo",
  "Toronto",
  "Frankfurt",
  "Sydney",
];

const routes = [
  "New York – London",
  "Los Angeles – Dubai",
  "San Francisco – Tokyo",
  "Chicago – Paris",
  "Miami – Toronto",
  "Dallas – Frankfurt",
];

const searchOptions = [
  "Domestic and international business class flights",
  "One-way and round-trip itineraries",
  "Different flight schedules and routes",
  "Available premium fare options",
];

const journeyOptions = [
  {
    title: "Domestic Business Class Flights",
    description:
      "Explore premium cabin options for travel between major U.S. cities, whether you're traveling for meetings, family visits, or leisure.",
    icon: "🇺🇸",
  },
  {
    title: "International Business Class Flights",
    description:
      "Search business class options for long-distance trips to destinations across Europe, Asia, the Middle East, and other popular regions.",
    icon: "🌎",
  },
  {
    title: "Corporate Travel",
    description:
      "For professionals with busy schedules, business class can offer a more comfortable way to travel between important destinations.",
    icon: "💼",
  },
  {
    title: "Last-Minute Business Class Flights",
    description:
      "Need to travel soon? Search current availability for your route and compare the business class options still available close to departure.",
    icon: "✈️",
  },
];

const faqs = [
  {
    question: "How can I book business class flights with FinoTravels?",
    answer:
      "Search your route and dates online, compare available options, and complete the applicable booking process. You can also call (855) 750-2746 for assistance.",
  },
  {
    question: "Can I find affordable business class flights?",
    answer:
      "You can compare fares across different dates, routes, and schedules. Pricing varies according to airline, demand, availability, and travel dates.",
  },
  {
    question: "Does FinoTravels offer international business class flights?",
    answer:
      "You can search available international business class options based on the airline routes, destination, dates, and remaining seat inventory.",
  },
  {
    question: "Can I book one-way or round-trip business class flights?",
    answer:
      "Yes. Both one-way and round-trip business class options can be searched depending on availability.",
  },
  {
    question: "Can business class airfare change after I search?",
    answer:
      "Yes. Fares and seat availability can change until the reservation is successfully completed and confirmed.",
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

function BusinessClassFlightDeals() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[430px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,28,66,.70),rgba(0,28,66,.70)), url('/images/hero-travel.jpg')",
          }}
        >
          <div className="container-main flex min-h-[430px] items-center justify-center py-16 text-center text-white">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Premium Travel
              </span>

              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Business Class Flight Deals
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                Discover Better Comfort With Business Class Flights. Explore
                available business class options for domestic and international
                journeys with FinoTravels.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Search Business Class Flights
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
            eyebrow="Business Class Travel"
            title="Discover Better Comfort With Business Class Flights"
            description="Business class can be a practical choice when you want additional comfort and space during your journey. Whether you're traveling for work, attending an important event, or planning a more comfortable vacation, FinoTravels helps you explore available business class flight options."
          />

          <div className="mx-auto max-w-4xl rounded-2xl bg-light-blue p-6 sm:p-8">
            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Compare airfare, review schedules, and explore itineraries based
              on your destination, travel dates, and preferences. From domestic
              routes to long-haul international journeys, you can review
              available options before making your choice.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Airfare */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Compare Options
              </p>

              <h2 className="mt-2 text-2xl font-black text-dark sm:text-3xl">
                Explore Business Class Airfare
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Business class fares can differ based on the airline, route,
                travel dates, demand, and available seats. Comparing multiple
                options can help you find an itinerary that works for your
                schedule and budget.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {searchOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-light-blue font-bold text-primary">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-6 text-gray-700">
                    {option}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Options */}
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            eyebrow="Travel Options"
            title="Business Class Options For Different Journeys"
            description="Explore business class options for work, leisure, domestic travel, international journeys, and last-minute plans."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journeyOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
      <section className="section-padding bg-light-blue">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              eyebrow="Helpful Tips"
              title="Tips For Comparing Business Class Fares"
            />

            <div className="rounded-2xl bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Business class pricing can change frequently. Consider
                searching multiple travel dates, departure times, and routes
                when possible. Booking earlier may provide more choices, while
                flexible travel dates can help you compare a wider range of
                fares.
              </p>

              <div className="mt-5 rounded-xl bg-light p-5">
                <p className="text-sm leading-7 text-gray-600">
                  Also review the complete itinerary, fare conditions, baggage
                  details, and applicable airline policies before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            eyebrow="Popular Destinations"
            title="Popular Business Class Destinations"
            description="Travelers frequently search for business class flights to:"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {destinations.map((destination) => (
              <a
                key={destination}
                href={`/destinations?search=${encodeURIComponent(
                  destination
                )}`}
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-center text-sm font-bold text-dark shadow-sm transition hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                ✈️ {destination}
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-center text-xl font-black text-dark">
              Popular Business Class Searches
            </h3>

            <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <a
                  key={route}
                  href={`/flights?route=${encodeURIComponent(route)}`}
                  className="rounded-xl bg-light-blue p-4 text-center text-sm font-semibold text-gray-700 transition hover:bg-primary hover:text-white"
                >
                  {route}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When Should You Search */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl rounded-2xl bg-dark p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-white/70">
              Flight Search Guide
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              When Should You Search?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              There is no specific booking period that guarantees the lowest
              business class fare. Prices depend on demand, availability,
              seasonality, route, and airline pricing. Searching ahead and
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
            title="Book Business Class Flights With FinoTravels"
          />

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-black text-dark">Online</h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Enter your departure city, destination, travel dates, and
                preferred cabin to review available business class flights.
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

              <h3 className="mt-5 text-xl font-black text-dark">By Phone</h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Call (855) 750-2746 for assistance exploring business class
                options, schedules, and applicable fare choices.
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

      {/* Why Search */}
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            eyebrow="Why FinoTravels"
            title="Why Search With FinoTravels?"
          />

          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-blue text-lg text-primary">
                ✓
              </div>

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                FinoTravels provides a convenient way to explore business class
                airfare for domestic and international travel. Compare
                available itineraries, review different schedules, and choose
                an option that suits your journey.
              </p>
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
            description="Find answers to common questions about business class flight options."
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
                "linear-gradient(rgba(0,28,66,.90),rgba(0,28,66,.90)), url('/images/hero-travel.jpg')",
            }}
          >
            <div className="px-6 py-14 text-center text-white sm:px-10">
              <h2 className="text-2xl font-black sm:text-3xl">
                Ready To Explore Business Class Flights?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80">
                Compare available business class itineraries and find an
                option that suits your travel plans.
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

export default BusinessClassFlightDeals;