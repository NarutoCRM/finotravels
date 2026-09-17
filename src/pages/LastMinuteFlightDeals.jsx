import { useState } from "react";
import { formatPhoneNumber } from "../utils/helper";
import { appData } from "../data";

const destinations = [
  "New York",
  "Los Angeles",
  "Miami",
  "Las Vegas",
  "London",
  "Dubai",
  "Toronto",
  "Paris",
  "Singapore",
  "Tokyo",
];

const routes = [
  "New York – Los Angeles",
  "Chicago – Miami",
  "Dallas – Las Vegas",
  "Los Angeles – London",
  "San Francisco – Dubai",
  "Boston – Toronto",
  "Seattle – Tokyo",
  "Houston – Singapore",
];

const travelOptions = [
  "Search domestic and international flights.",
  "Compare available fares and schedules.",
  "Review different departure times and routes.",
  "Consider one-way or round-trip options.",
  "Choose an itinerary that fits your plans.",
  "Get phone assistance when needed.",
];

const tripTypes = [
  {
    title: "Domestic Last-Minute Flights",
    description:
      "Explore flights between U.S. cities for urgent business travel, family visits, or spontaneous trips.",
    icon: "🇺🇸",
  },
  {
    title: "International Last-Minute Flights",
    description:
      "Search available international airfare when an overseas journey comes together unexpectedly or your plans change.",
    icon: "🌎",
  },
  {
    title: "Business Travel",
    description:
      "If a meeting, conference, or professional commitment requires quick travel, compare available schedules to find a suitable itinerary.",
    icon: "💼",
  },
  {
    title: "Weekend Getaways",
    description:
      "Looking for a spontaneous break? Explore available flights to popular destinations for short vacations and weekend trips.",
    icon: "🏖️",
  },
];

const faqs = [
  {
    question: "How can I book a last-minute flight with FinoTravels?",
    answer: `Enter your route and travel date to search available flights. Compare the options and complete the applicable booking process online, or call ${appData.phoneNumber} for assistance.`,
  },
  {
    question: "Can I find affordable last-minute flights?",
    answer:
      "Prices vary according to demand, availability, route, airline, and travel dates. Comparing multiple options may help you find a fare that fits your budget.",
  },
  {
    question: "Does FinoTravels offer last-minute international flights?",
    answer:
      "You can search available international flights based on your destination, travel dates, airline routes, and current seat availability.",
  },
  {
    question: "Can I book one-way or round-trip last-minute flights?",
    answer:
      "Yes. Depending on availability, you can search either one-way or round-trip flight options for short-notice travel.",
  },
  {
    question: "Do last-minute flights always cost more?",
    answer:
      "Not necessarily. Last-minute fares can vary significantly depending on demand, remaining inventory, route, season, and travel timing.",
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

      <h2 className="text-2xl font-black text-dark sm:text-3xl">{title}</h2>

      {description && (
        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function LastMinuteFlightDeals() {
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
                Short-Notice Travel
              </span>

              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Last-Minute Flight Deals
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                Find Flight Options When Plans Change Suddenly. Explore
                available last-minute flight options, compare schedules, and
                review current fares with FinoTravels.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Search Last-Minute Flights
                </a>

                <a
                  href={`tel:+${appData.phoneNumber}`}
                  className="rounded-lg border border-white bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  ☎ Call {formatPhoneNumber(appData.phoneNumber)}
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
            eyebrow="Last-Minute Travel"
            title="Find Flight Options When Plans Change Suddenly"
            description="Travel plans do not always come together weeks in advance. Whether you need to attend a business meeting, visit family, handle an unexpected trip, or plan a spontaneous getaway, FinoTravels helps you explore available last-minute flight options."
          />

          <div className="mx-auto max-w-4xl rounded-2xl bg-light-blue p-6 sm:p-8">
            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Search current fares, compare schedules, and review itineraries
              based on your destination and travel dates. Since last-minute
              airfare depends on demand and availability, comparing multiple
              options can help you make a more informed choice.
            </p>
          </div>
        </div>
      </section>

      {/* Make Travel Easier */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <div className="grid items-center gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Easy Flight Search
              </p>

              <h2 className="mt-2 text-2xl font-black text-dark sm:text-3xl">
                Make Short-Notice Travel Easier
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                When your departure date is approaching, finding a suitable
                flight can feel stressful. FinoTravels provides a convenient way
                to review available flights, schedules, and fare options in one
                place.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {travelOptions.map((option) => (
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

      {/* Trip Types */}
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            eyebrow="Travel Options"
            title="Last-Minute Flights For Different Trips"
            description="Explore available flight options for urgent travel, business trips, international journeys, and spontaneous getaways."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tripTypes.map((item) => (
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
          <SectionTitle
            eyebrow="Helpful Tips"
            title="Tips For Comparing Last-Minute Airfare"
          />

          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Last-minute fares can change quickly. Compare several departure
              times and, when possible, check nearby dates. Alternative routes,
              connecting flights, or nearby airports may provide additional
              choices.
            </p>

            <div className="mt-5 rounded-xl bg-light p-5">
              <p className="text-sm leading-7 text-gray-600">
                There is no guaranteed formula for finding the lowest
                last-minute fare. Airline pricing, remaining seats, demand,
                route, season, and travel dates can all influence the final
                price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            eyebrow="Popular Destinations"
            title="Popular Last-Minute Destinations"
            description="Travelers often search for last-minute flights to these popular destinations."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {destinations.map((destination) => (
              <a
                key={destination}
                href={`/destinations?search=${encodeURIComponent(destination)}`}
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-center text-sm font-bold text-dark shadow-sm transition hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                ✈️ {destination}
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-center text-xl font-black text-dark">
              Frequently Searched Routes
            </h3>

            <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* When Should You Book */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl rounded-2xl bg-dark p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-white/70">
              Booking Guide
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              When Should You Book?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              If you know you need to travel soon, begin searching as early as
              possible. Compare multiple flights, remain flexible with departure
              times when practical, and review both nonstop and connecting
              itineraries. Booking once you find an option that meets your needs
              can help avoid losing an available fare or seat.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <SectionTitle
            eyebrow="Book With FinoTravels"
            title="Book Last-Minute Flights With FinoTravels"
          />

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-black text-dark">Online</h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Enter your departure city, destination, and travel date to
                review available flights. Compare the options, select your
                preferred itinerary, provide the required passenger details, and
                complete the applicable booking process.
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
                Call {formatPhoneNumber(appData.phoneNumber)} if you prefer
                assistance while reviewing last-minute flight options.
              </p>

              <a
                href={`tel:+${appData.phoneNumber}`}
                className="mt-5 inline-block font-bold text-primary hover:underline"
              >
                Call {formatPhoneNumber(appData.phoneNumber)} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why FinoTravels */}
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
                FinoTravels offers a straightforward way to explore flight
                options when your travel plans come together at short notice.
                Compare domestic and international itineraries, review available
                schedules, and choose an option based on your travel
                requirements.
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
            description="Find answers to common questions about last-minute flights."
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
                Need To Travel Soon?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80">
                Search available last-minute flights and compare options for
                your upcoming journey.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Search Flights
                </a>

                <a
                  href={`tel:+${appData.phoneNumber}`}
                  className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  ☎ {formatPhoneNumber(appData.phoneNumber)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LastMinuteFlightDeals;
