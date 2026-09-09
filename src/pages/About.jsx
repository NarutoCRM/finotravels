const helpItems = [
  {
    title: "Flexible Flight Options",
    text: "Explore a variety of flight possibilities and consider choices based on your preferred travel dates, schedules, and requirements.",
    icon: "✈",
  },
  {
    title: "Straightforward Travel Planning",
    text: "Our platform is designed to make the process of discovering and reviewing flight options simple and easy to navigate.",
    icon: "✓",
  },
  {
    title: "Helpful Assistance",
    text: "Travelers can seek assistance with general questions and concerns related to their flight planning and booking experience.",
    icon: "☎",
  },
  {
    title: "Easy-to-Understand Information",
    text: "We aim to present travel information in a clear and accessible manner, helping you evaluate your options more comfortably.",
    icon: "i",
  },
  {
    title: "A Traveler-First Mindset",
    text: "We keep the needs of travelers at the heart of our approach, with a focus on convenience and a positive planning experience.",
    icon: "♥",
  },
];

function About() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

        <div className="container-main relative text-center">
          <p className="text-xs font-extrabold uppercase tracking-[3px] text-blue-300">
            About FinoTravels
          </p>

          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
            Travel Planning,
            <br />
            <span className="text-blue-400">Made Easier</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
            Making the start of your journey easier, clearer,
            and more convenient.
          </p>
        </div>
      </section>


      {/* About Us */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">

            <SectionLabel text="About Us" />

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Making Flight Planning Easier
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 md:text-base">
              At FinoTravels, operated by TravelFirst LLC, we are
              committed to making flight planning feel easier,
              clearer, and more convenient. We understand that
              arranging a trip often means looking through different
              flight choices, checking fares, considering schedules,
              and taking care of several booking details.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              Our purpose is to simplify that process by giving
              travelers a convenient way to discover flight options
              and move ahead with their travel plans with greater
              confidence.
            </p>

          </div>
        </div>
      </section>


      {/* Travel Planning */}
      <section className="bg-[#f8faff] py-14 md:py-20">
        <div className="container-main">

          <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div className="hidden lg:block">
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-light-blue">
                <div className="flex h-52 w-52 items-center justify-center rounded-full bg-primary shadow-2xl">
                  <span className="text-7xl text-white">
                    ✈
                  </span>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel text="Our Approach" />

              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
                Travel Planning,
                <br />
                Made Easier
              </h2>

              <p className="mt-6 text-sm leading-7 text-gray-600 md:text-base">
                FinoTravels was built around a simple idea, finding
                and planning a flight should not feel complicated.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
                Whether you are preparing for a long-awaited
                vacation, heading out for work, visiting friends or
                relatives, or planning a spontaneous trip, our
                platform helps you explore available flight
                possibilities and make decisions that suit your
                travel needs.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
                We aim to bring convenience into the early stages
                of your journey, when having the right information
                can make planning much easier.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Planning With Confidence */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-main">

          <div className="mx-auto max-w-4xl">

            <SectionLabel text="Our Purpose" />

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Helping You Plan With Confidence
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 md:text-base">
              Every trip is different. Some journeys are planned
              months ahead, while others come together at the last
              minute. Regardless of the reason or destination,
              choosing the right flight is an important part of the
              travel experience.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              At FinoTravels, we focus on creating an approachable
              and convenient environment where travelers can
              explore flight choices, review available fares, and
              seek assistance when they have booking-related
              questions.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              Our objective is straightforward: to make flight
              planning more accessible while providing helpful
              information and dependable travel assistance when
              required.
            </p>

          </div>
        </div>
      </section>


      {/* Created With Travelers In Mind */}
      <section className="bg-light py-14 md:py-20">
        <div className="container-main">

          <div className="mx-auto max-w-4xl">

            <SectionLabel text="For Travelers" />

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Created With Travelers In Mind
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 md:text-base">
              Travel planning can sometimes involve unfamiliar fare
              options, different schedules, and questions about the
              booking process. FinoTravels is designed to help make
              these steps easier to navigate.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              From exploring suitable flight possibilities to
              getting assistance with travel-related concerns, we
              strive to support travelers throughout their planning
              experience.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              We believe a travel platform should do more than
              simply display flight options. It should help people
              feel more informed and comfortable as they prepare
              for their journey.
            </p>

            <div className="mt-7 rounded-2xl border-l-4 border-primary bg-white p-6 shadow-sm">
              <p className="text-sm italic leading-7 text-gray-600 md:text-base">
                For us, every flight represents more than a
                reservation, it is part of a larger experience,
                whether that means reuniting with loved ones,
                pursuing a business opportunity, taking a well-earned
                break, or discovering somewhere new.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* How FinoTravels Helps */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-main">

          <div className="mx-auto max-w-5xl">

            <div className="mb-10 text-center">
              <SectionLabel text="How We Help" />

              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
                How FinoTravels Helps
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">
                Through FinoTravels, travelers can explore
                convenient options for their travel planning needs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <HelpCard text="Discover flight options for a variety of travel plans" />
              <HelpCard text="Explore fares for domestic and international trips" />
              <HelpCard text="Review different choices before deciding how to travel" />
              <HelpCard text="Receive assistance with general booking-related questions" />
              <HelpCard text="Experience a more straightforward approach to flight planning" />

            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-600">
              We work to keep the travel planning process convenient
              so you can focus less on navigating complicated choices
              and more on preparing for the journey ahead.
            </p>

          </div>
        </div>
      </section>


      {/* Looking Ahead */}
      <section className="bg-light-blue py-14 md:py-20">
        <div className="container-main">

          <div className="mx-auto max-w-4xl text-center">

            <SectionLabel text="Our Vision" />

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Looking Ahead
            </h2>

            <p className="mt-6 text-left text-sm leading-7 text-gray-600 md:text-base">
              Our vision is to build FinoTravels into a dependable
              travel resource for people who value simplicity,
              convenience, and accessible travel assistance.
            </p>

            <p className="mt-5 text-left text-sm leading-7 text-gray-600 md:text-base">
              As the way people plan and book travel continues to
              change, we aim to adapt our approach and improve the
              experience we provide. We want travelers to have
              access to useful information and a platform that
              makes the beginning of their journey feel easier.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
              <p className="text-xl font-black text-dark md:text-2xl">
                A great trip starts long before you reach the airport.
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We want to help make those first planning steps
                more comfortable and confident.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Why Travelers */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-main">

          <div className="mb-10 text-center">
            <SectionLabel text="Why FinoTravels" />

            <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">
              Why Travelers Can Turn To FinoTravels
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {helpItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-xl font-bold text-primary transition group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-extrabold text-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Commitment */}
      <section className="bg-dark py-16 md:py-20">
        <div className="container-main">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-extrabold uppercase tracking-[2px] text-blue-300">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Our Commitment
            </h2>

            <p className="mt-6 text-sm leading-7 text-blue-100 md:text-base">
              At FinoTravels, operated by TravelFirst LLC, our
              commitment is to provide a convenient and dependable
              environment for travelers exploring their flight options.
            </p>

            <p className="mt-5 text-sm leading-7 text-blue-100 md:text-base">
              We understand that expectations around travel are
              constantly changing. That is why we continue to look
              for ways to make the planning experience simpler, more
              accessible, and better suited to today's travelers.
            </p>

            <p className="mt-5 text-sm leading-7 text-blue-100 md:text-base">
              Whether your next journey takes you across the country
              or around the world, we are here to help make the
              flight-planning stage feel less complicated and more
              convenient.
            </p>

            <div className="mt-9 border-t border-white/10 pt-8">
              <p className="text-2xl font-black text-white md:text-3xl">
                FinoTravels
              </p>

              <p className="mt-2 text-blue-300">
                making the start of your journey easier.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}


/* Small Components */

function SectionLabel({ text }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[2px] text-primary">
      {text}
    </p>
  );
}

function HelpCard({ text }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light-blue font-bold text-primary">
        ✓
      </div>

      <p className="text-sm font-semibold leading-6 text-gray-700">
        {text}
      </p>
    </div>
  );
}

export default About;