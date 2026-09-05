const reviews = [
  {
    name: "James",
    text: "The service was well-organized and everything went smoothly. I would definitely recommend FinoTravels.",
  },
  {
    name: "Sarah",
    text: "The booking process was simple and the travel team was very helpful throughout our trip.",
  },
  {
    name: "Michael",
    text: "Great experience from start to finish. The team helped us plan a wonderful vacation.",
  },
];

function Reviews() {
  return (
    <section className="section-padding bg-[#f3f2ff]">
      <div className="container-main">

        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Traveler Reviews
          </p>

          <h2 className="text-3xl font-black text-primary-dark md:text-4xl">
            Hear It From Travelers
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            We go beyond just booking trips — we create
            unforgettable travel experiences.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-light-blue font-black text-primary">
                  {review.name[0]}
                </div>

                <div>
                  <h3 className="font-extrabold text-gray-900">
                    {review.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    FinoTravels Traveler
                  </p>
                </div>
              </div>

              <div className="mb-3 tracking-widest text-green-500">
                ★★★★★
              </div>

              <p className="text-sm leading-6 text-gray-600">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="font-bold text-gray-700">
            ⭐ 4.5
          </span>
          <span className="ml-2 text-sm text-gray-500">
            Traveler Reviews
          </span>
        </div>

      </div>
    </section>
  );
}

export default Reviews;