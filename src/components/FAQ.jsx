import { useState } from "react";
import { appData } from "../data";

const faqs = [
  {
    question: "What flight options can I explore with FinoTravels?",
    answer:
      "You can search available domestic and international flights, including one-way and round-trip options. Depending on availability, premium cabin choices such as business class and first class may also be available.",
  },
  {
    question: "Can I search for both domestic and international flights?",
    answer:
      "Yes. FinoTravels allows travelers to explore flight options for destinations within the United States as well as international destinations.",
  },
  {
    question: "How can I book a flight with FinoTravels?",
    answer:
      "Enter your departure city, destination, and travel dates to explore available options. Review the available itineraries and complete the applicable booking process.",
  },
  {
    question: "Can I get help with my flight booking?",
    answer: `Yes. If you prefer assistance while reviewing or booking a flight, you can contact FinoTravels at our ☎ ${appData.phoneNumber}.`,
  },
  {
    question: "Do flight prices change?",
    answer:
      "Yes. Airfare and seat availability can change based on airline inventory, demand, travel dates, route, and other pricing factors. A displayed fare is subject to availability until the booking is confirmed.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[2px] text-primary">
              FAQs
            </p>

            <h2 className="mt-2 text-3xl font-black text-dark md:text-4xl">
              General Questions
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              We're committed to offering more than just products— we provide
              exceptional experiences.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-dark"
                  >
                    <span>{faq.question}</span>

                    <span className="ml-4 text-lg text-primary">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
