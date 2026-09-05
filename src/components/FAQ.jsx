import { useState } from "react";

const questions = [
  {
    q: "What services does FinoTravels provide?",
    a: "We provide flight booking, hotel arrangements, travel experiences, customized itineraries and travel assistance.",
  },
  {
    q: "Do you offer customized travel packages?",
    a: "Yes. Our travel experts can help create a travel plan based on your destination, dates, preferences and budget.",
  },
  {
    q: "How do I book a tour or vacation package?",
    a: "You can contact our travel team by phone or email and our experts will assist you with your booking.",
  },
  {
    q: "Do you provide visa assistance?",
    a: "Our team can provide general assistance and guidance regarding travel and visa-related requirements.",
  },
  {
    q: "Do you provide travel insurance options?",
    a: "Travel insurance options can be discussed with our travel experts based on your trip requirements.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-light" id="faq">
      <div className="container-main">
        <div className="mx-auto max-w-3xl">

          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              FAQs
            </p>

            <h2 className="text-3xl font-black text-primary-dark md:text-4xl">
              General Questions
            </h2>

            <p className="mt-3 text-gray-500">
              We're committed to offering more than just
              products — we provide exceptional experiences.
            </p>
          </div>

          <div className="space-y-3">
            {questions.map((item, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-gray-800"
                  >
                    <span>{item.q}</span>

                    <span className="ml-4 text-primary">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-6 text-gray-500">
                      {item.a}
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