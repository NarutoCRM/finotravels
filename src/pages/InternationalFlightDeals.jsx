import { useState } from "react";
import { formatPhoneNumber } from "../utils/helper";
import { appData } from "../data";

function InternationalFlightDeals() {
  const [openFaq, setOpenFaq] = useState(null);

  const compareOptions = [
    "Search flights to destinations worldwide.",
    "Compare available fares and schedules.",
    "Explore one-way and round-trip options.",
    "Check different travel dates and departure times.",
    "Review options for planned or short-notice trips.",
  ];

  const travelPlans = [
    {
      title: "One-Way International Flights",
      text: "One-way flights can be useful for relocation, studying abroad, extended travel, or trips where your return plans are not finalized.",
      icon: "→",
    },
    {
      title: "Round-Trip International Flights",
      text: "If you know your return date, compare round-trip flights for vacations, family visits, business travel, and overseas trips.",
      icon: "⇄",
    },
    {
      title: "Last-Minute International Flights",
      text: "Need to travel soon? Search available international flights and compare current fares, schedules, and routes.",
      icon: "⚡",
    },
    {
      title: "Holiday & Seasonal Flights",
      text: "Explore available airfare for holidays, seasonal vacations, and special occasions by comparing different travel dates and flight options.",
      icon: "✈",
    },
  ];

  const tips = [
    "Compare multiple travel dates.",
    "Check different departure times.",
    "Review alternative routes.",
    "Consider nearby airports when practical.",
    "Compare one-way and round-trip fares.",
    "Look for available seasonal offers.",
    "Search early when your dates are confirmed.",
  ];

  const destinations = [
    "London",
    "Dubai",
    "Paris",
    "Toronto",
    "Singapore",
    "Tokyo",
    "Sydney",
    "Bangkok",
    "Frankfurt",
    "Amsterdam",
  ];

  const routes = [
    "New York to London",
    "Los Angeles to Dubai",
    "Chicago to Paris",
    "San Francisco to Tokyo",
    "Miami to Toronto",
    "Dallas to Frankfurt",
    "Seattle to Singapore",
    "Boston to Sydney",
  ];

  const bookingSteps = [
    "Visit FinoTravels.",
    "Enter your departure city, destination, and travel dates.",
    "Browse and compare available flights.",
    "Select your preferred itinerary.",
    "Enter passenger details and complete the booking.",
    "Review your confirmation.",
  ];

  const benefits = [
    "Worldwide flight options.",
    "Easy online flight searches.",
    "One-way and round-trip choices.",
    "Multiple schedules and itineraries.",
    "Different fare options to compare.",
    "Booking assistance when needed.",
  ];

  const faqs = [
    {
      question: "How Can I Book an International Flight With FinoTravels?",
      answer:
        "Enter your departure city, destination, and travel dates to search available flights. Compare the options, select your itinerary, provide passenger details, and complete the booking process.",
    },
    {
      question: "How Can I Find More Affordable International Flights?",
      answer:
        "Compare different dates, routes, schedules, and fares. Flexible travel dates may give you more options to consider.",
    },
    {
      question: "Can I Book Last-Minute International Flights?",
      answer:
        "Yes. You can search available flights departing soon, although fares and availability may vary depending on demand and remaining inventory.",
    },
    {
      question: "Can I Book One-Way or Round-Trip International Flights?",
      answer:
        "Yes. You can search for one-way or round-trip international flights based on your travel plans and available options.",
    },
    {
      question: "Can International Airfare Change After I Search?",
      answer:
        "Yes. Fares and seat availability can change due to demand, airline inventory, travel dates, taxes, fees, and other factors. A displayed fare is not guaranteed until the booking is confirmed.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('/images/hero-travel.jpg')",
          }}
        />

        <div className="relative">
          <div className="container-main">
            <div className="max-w-3xl py-20 md:py-24">
              <span className="inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-white">
                International Flight Deals
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Explore International Flights for Your Next Journey
              </h1>

              <p className="mt-5 text-base leading-7 text-white/80 md:text-lg">
                Planning to travel beyond the United States? Whether you're
                going on vacation, visiting family, traveling for work, studying
                abroad, or planning a long-awaited getaway, FinoTravels helps
                you explore international flight options worldwide.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/flights"
                  className="rounded-lg bg-primary px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-dark"
                >
                  Search International Flights
                </a>

                <a
                  href={`tel:+${appData.phoneNumber}`}
                  className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-dark"
                >
                  ☎ {formatPhoneNumber(appData.phoneNumber)}
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
              Worldwide Travel
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Compare International Airfare With Ease
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
              International trips can involve many routes, schedules, and fare
              options. Comparing available flights can help you find an
              itinerary that suits your plans and budget.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {compareOptions.map((item, index) => (
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
              Flexible Options
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              International Flights for Different Travel Plans
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {travelPlans.map((item) => (
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
                Tips for Finding International Flight Deals
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                International airfare can change based on destination, travel
                dates, demand, airline, and availability. Consider these tips
                when searching:
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
              <div className="text-6xl">🌎</div>

              <h3 className="mt-6 text-2xl font-black text-dark">
                Explore Worldwide Flight Options
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Compare different destinations, travel dates, routes, and
                schedules to find an international itinerary that fits your
                travel plans.
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

      {/* Destinations */}
      <section className="bg-dark section-padding">
        <div className="container-main">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Explore The World
            </span>

            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Popular International Destinations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              Travelers frequently search for international flights to:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {destinations.map((destination) => (
              <a
                key={destination}
                href={`/flights?destination=${encodeURIComponent(destination)}`}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center text-sm font-bold text-white transition hover:bg-primary"
              >
                ✈ {destination}
              </a>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-center text-2xl font-bold text-white">
              Popular International Flight Routes
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
                Plan Your Trip
              </span>

              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
                When Should You Search for International Flights?
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                There is no guaranteed time that always offers the lowest
                airfare. Prices may vary according to demand, seasonality,
                route, and available seats. Start comparing early, check
                flexible dates, consider weekday travel, and review multiple
                schedules before selecting your flight.
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
              Easy Booking
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              How to Book an International Flight
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Online Booking */}
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

            {/* Phone Assistance */}
            <div className="rounded-2xl bg-dark p-7 text-white shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl">
                ☎
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Phone Booking Assistance
              </h3>

              <p className="mt-5 leading-7 text-white/75">
                Need help? Call {formatPhoneNumber(appData.phoneNumber)} to
                discuss your destination, dates, available flight options, and
                booking requirements with our travel team.
              </p>

              <a
                href={`tel:+${appData.phoneNumber}`}
                className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-dark transition hover:bg-primary hover:text-white"
              >
                ☎ Call {formatPhoneNumber(appData.phoneNumber)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why FinoTravels */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Why FinoTravels
            </span>

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Why Search International Flights With FinoTravels?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              FinoTravels provides a convenient way to explore international
              airfare with:
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

                <p className="mt-4 font-semibold text-dark">{benefit}</p>
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
                      onClick={() => setOpenFaq(isOpen ? null : index)}
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
                Ready for Your Next International Journey?
              </h2>

              <p className="mt-2 text-sm text-white/80">
                Explore worldwide flight options with FinoTravels.
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
                href={`tel:+${appData.phoneNumber}`}
                className="rounded-lg border border-white px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-dark"
              >
                ☎ {formatPhoneNumber(appData.phoneNumber)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternationalFlightDeals;
