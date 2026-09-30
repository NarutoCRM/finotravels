"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
  numbered?: boolean;
  variant?: "border" | "shadow";
};

function FAQAccordion({
  faqs,
  numbered = false,
  variant = "border",
}: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const itemClassName =
    variant === "shadow"
      ? "overflow-hidden rounded-xl bg-white shadow-sm"
      : "overflow-hidden rounded-xl border border-gray-200 bg-white";

  return (
    <>
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div key={faq.question} className={itemClassName}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenFaq(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-bold text-dark sm:text-base">
                {numbered ? `${index + 1}. ` : ""}
                {faq.question}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl font-bold text-primary"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div id={answerId} className="border-t border-gray-100 px-5 py-4">
                <p className="text-sm leading-7 text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default FAQAccordion;
