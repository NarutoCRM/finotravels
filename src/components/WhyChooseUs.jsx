const features = [
  {
    icon: "☎",
    title: "Call Us 24 × 7",
    text: "Our travel experts are available around the clock to help you.",
  },
  {
    icon: "✈",
    title: "We Know Travel",
    text: "Get expert guidance from experienced travel specialists.",
  },
  {
    icon: "☝",
    title: "Easy Booking",
    text: "Simple and convenient booking for your next journey.",
  },
  {
    icon: "G",
    title: "Google Rating",
    text: "Trusted service and great experiences from our travelers.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-black text-primary-dark md:text-4xl">
            Reasons to Book With FinoTravels
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-light-blue text-xl font-black text-primary transition group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mb-2 font-extrabold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;