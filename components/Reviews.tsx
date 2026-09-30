const reviews = [
  {
    name: "Michael R.",
    quote:
      "Finding flight options was straightforward, and I was able to compare different schedules before making my reservation.",
  },
  {
    name: "Sarah M.",
    quote:
      "The booking process was easy to follow. I appreciated being able to review different flight options for my trip.",
  },
  {
    name: "Jessica B.",
    quote:
      "I needed help with my travel plans and found the booking assistance useful. The process was simple and convenient.",
  },
];

function Reviews() {
  return (
    <section className="bg-light py-14 md:py-20">
      <div className="container-main">

        <div className="mb-9 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[2px] text-primary">
            Customer Reviews
          </p>

          <h2 className="mt-2 text-3xl font-black text-dark md:text-4xl">
            Real Experiences From Our Customers
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            We value the experiences and feedback shared by travelers
            who use FinoTravels for their flight-search and booking needs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-light-blue font-black text-primary">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-extrabold text-dark">
                    {review.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    FinoTravels Customer
                  </p>
                </div>
              </div>

              <div className="mt-4 text-sm tracking-widest text-green">
                ★★★★★
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                “{review.quote}”
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;