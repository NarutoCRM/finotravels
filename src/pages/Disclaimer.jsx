function Disclaimer() {
  const List = ({ items }) => (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-gray-600">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const Section = ({ number, title, children }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-dark">
        {number}. {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark py-16 text-white">
        <div className="container-main">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            FinoTravels
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Disclaimer
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            Important information about the use of FinoTravels, travel
            information, pricing, third-party providers, and website services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            {/* 1 */}
            <Section number="1" title="About the Information on FinoTravels">
              <p className="mt-4 text-gray-600">
                The content and information available through FinoTravels are
                provided for general travel information, booking assistance,
                and customer support purposes. FinoTravels is operated by
                TravelFirst LLC.
              </p>

              <p className="mt-4 text-gray-600">
                We make reasonable efforts to keep information on our website,
                including airfare options, pricing, availability, travel
                details, and related content, useful and up to date. However,
                we cannot guarantee that every piece of information will always
                be complete, accurate, current, or free of errors.
              </p>

              <p className="mt-4 text-gray-600">
                Airfares, schedules, seat availability, airline policies, and
                other travel-related details can change without notice based on
                updates from airlines, travel suppliers, market conditions, or
                circumstances outside our control.
              </p>

              <p className="mt-4 text-gray-600">
                Any decision you make based on information available through
                FinoTravels is made at your own discretion and responsibility.
              </p>

              <p className="mt-4 text-gray-600">
                TravelFirst LLC may change, update, remove, or revise website
                content, services, features, or other information at any time
                without advance notice.
              </p>
            </Section>

            {/* 2 */}
            <Section number="2" title="Your Acceptance of This Disclaimer">
              <p className="mt-4 text-gray-600">
                By visiting FinoTravels.com or using any of our services, you
                acknowledge that you have reviewed and accepted this Disclaimer,
                together with our applicable Terms & Conditions and Privacy
                Policy.
              </p>

              <p className="mt-4 text-gray-600">
                If you disagree with any provision contained in this Disclaimer,
                you should stop using the website and our services.
              </p>

              <p className="mt-4 text-gray-600">
                Your continued access to or use of FinoTravels after changes are
                posted constitutes your acceptance of the applicable terms.
              </p>
            </Section>

            {/* 3 */}
            <Section number="3" title="Responsibility & Liability">
              <p className="mt-4 text-gray-600">
                To the fullest extent allowed under applicable law, TravelFirst
                LLC and its affiliates, employees, representatives, partners,
                and service providers will not be liable for losses or damages
                arising from your use of our website or services, including,
                but not limited to:
              </p>

              <List
                items={[
                  "Direct, indirect, incidental, or consequential losses",
                  "Loss of income, revenue, profits, or information",
                  "Flight delays, cancellations, or interruptions",
                  "Changes to airline schedules or operations",
                  "Errors or misunderstandings associated with a booking",
                  "Problems resulting from services provided by third-party travel suppliers",
                ]}
              />

              <p className="mt-4 text-gray-600">
                FinoTravels functions as a travel service intermediary and does
                not operate airlines or control their schedules, aircraft,
                employees, policies, routes, or operational decisions.
              </p>
            </Section>

            {/* 4 */}
            <Section number="4" title="Accuracy of Website Content">
              <p className="mt-4 text-gray-600">
                Although we work to maintain reliable website information,
                occasional inaccuracies may occur. These may include:
              </p>

              <List
                items={[
                  "Typographical or editorial errors",
                  "Pricing discrepancies",
                  "Information that has become outdated",
                  "Technical or system-related errors",
                  "Incorrect availability information",
                ]}
              />

              <p className="mt-4 text-gray-600">
                When an error is identified, TravelFirst LLC may correct or
                update the information without prior notice. Corrections may be
                made before, during, or after a booking request has been
                initiated.
              </p>

              <p className="mt-4 text-gray-600">
                We are not responsible for decisions or losses resulting from
                reliance on information that is incomplete, inaccurate, delayed,
                or no longer current.
              </p>
            </Section>

            {/* 5 */}
            <Section number="5" title="Information Is Not Professional Advice">
              <p className="mt-4 text-gray-600">
                Content published on FinoTravels is intended for general
                informational purposes and should not be treated as
                professional advice.
              </p>

              <p className="mt-4 text-gray-600">
                This includes, without limitation:
              </p>

              <List
                items={[
                  "Legal or regulatory advice",
                  "Financial guidance",
                  "Visa or immigration advice",
                  "Medical or health advice",
                  "Personalized travel insurance advice",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Travel requirements can vary according to individual
                circumstances, destination, nationality, and applicable
                regulations. Travelers should verify important requirements
                directly with appropriate government authorities, airlines,
                insurance providers, or qualified professionals.
              </p>

              <p className="mt-4 text-gray-600">
                Using our website or communicating with our team does not create
                a professional advisory relationship.
              </p>
            </Section>

            {/* 6 */}
            <Section number="6" title="Travel-Related Risks">
              <p className="mt-4 text-gray-600">
                Travel plans can be affected by circumstances that are
                unpredictable or outside the control of FinoTravels. Such
                circumstances may include:
              </p>

              <List
                items={[
                  "Airline delays or cancellations",
                  "Severe weather",
                  "Natural disasters",
                  "Government actions or restrictions",
                  "Political or security conditions",
                  "Public health emergencies",
                  "Changes to entry or travel requirements",
                ]}
              />

              <p className="mt-4 text-gray-600">
                You are responsible for understanding the potential risks
                associated with your journey and taking appropriate precautions.
              </p>

              <p className="mt-4 text-gray-600">
                Before traveling, we encourage you to verify current
                requirements for your destination and consider obtaining
                suitable travel insurance.
              </p>

              <p className="mt-4 text-gray-600">
                If you arrange travel for other passengers, you are also
                responsible for ensuring that those travelers understand the
                applicable fare rules, booking conditions, restrictions, and
                policies.
              </p>
            </Section>

            {/* 7 */}
            <Section number="7" title="Third-Party Websites & Travel Providers">
              <p className="mt-4 text-gray-600">
                FinoTravels may provide links, references, or access to websites
                and services operated by third parties, such as airlines,
                payment processors, travel suppliers, and other service
                providers.
              </p>

              <p className="mt-4 text-gray-600">
                These third parties operate independently of TravelFirst LLC. We
                do not control or guarantee their:
              </p>

              <List
                items={[
                  "Website content",
                  "Services or performance",
                  "Policies and procedures",
                  "Privacy practices",
                  "Availability or security",
                ]}
              />

              <p className="mt-4 text-gray-600">
                If you choose to visit or use a third-party website or service,
                you do so at your own discretion. We recommend reviewing the
                applicable terms, privacy notices, and other policies of the
                third party before proceeding.
              </p>
            </Section>

            {/* 8 */}
            <Section number="8" title="Website Access & Technical Limitations">
              <p className="mt-4 text-gray-600">
                We make reasonable efforts to keep FinoTravels.com accessible
                and functional. However, uninterrupted availability cannot be
                guaranteed.
              </p>

              <p className="mt-4 text-gray-600">
                The website may occasionally experience:
              </p>

              <List
                items={[
                  "Temporary downtime",
                  "Maintenance interruptions",
                  "Technical failures",
                  "Connectivity problems",
                  "Software or system errors",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Such interruptions may result from maintenance, upgrades,
                service-provider issues, security events, or circumstances
                beyond our reasonable control.
              </p>

              <p className="mt-4 text-gray-600">
                TravelFirst LLC will not be responsible for losses, damages, or
                inconvenience resulting from website interruptions or technical
                difficulties to the extent permitted by applicable law.
              </p>
            </Section>

            {/* 9 */}
            <Section number="9" title="Airfare, Pricing, and Availability">
              <p className="mt-4 text-gray-600">
                Travel prices and availability shown on FinoTravels are subject
                to change and may vary at any stage before a reservation is
                finalized.
              </p>

              <p className="mt-4 text-gray-600">
                Please keep in mind that:
              </p>

              <List
                items={[
                  "A displayed fare does not guarantee that the same price will remain available",
                  "Airline inventory can change without notice",
                  "Prices may vary due to availability, demand, taxes, fees, or supplier updates",
                  "A reservation is not considered confirmed until the applicable booking process has been successfully completed",
                ]}
              />

              <p className="mt-4 text-gray-600">
                TravelFirst LLC does not guarantee that a fare or seat shown
                during your search will still be available when you complete
                the purchase.
              </p>
            </Section>

            {/* 10 */}
            <Section
              number="10"
              title="Restriction or Termination of Website Access"
            >
              <p className="mt-4 text-gray-600">
                TravelFirst LLC may limit, suspend, or terminate access to
                FinoTravels or portions of its services when reasonably
                necessary, including where:
              </p>

              <List
                items={[
                  "Website terms or policies are violated",
                  "Fraudulent, abusive, or suspicious activity is identified",
                  "Services or website features are misused",
                  "Applicable laws or regulations are breached",
                ]}
              />

              <p className="mt-4 text-gray-600">
                We may take such action without prior notice where permitted by
                law and may also take steps necessary to protect our website,
                customers, business operations, or third-party partners.
              </p>

              <p className="mt-4 text-gray-600">
                You may stop using FinoTravels at any time if you do not wish to
                accept our policies or terms.
              </p>
            </Section>

            {/* 11 */}
            <Section number="11" title="User Indemnification">
              <p className="mt-4 text-gray-600">
                By accessing or using FinoTravels, you agree, to the extent
                permitted by applicable law, to defend, indemnify, and hold
                harmless TravelFirst LLC, its affiliates, employees,
                representatives, and partners from claims, losses, damages,
                liabilities, costs, or expenses arising from:
              </p>

              <List
                items={[
                  "Your misuse of the website or services",
                  "Your violation of our policies or agreements",
                  "Your violation of applicable laws or regulations",
                  "Disputes between you and third-party travel providers",
                  "Actions or omissions resulting from your use of our services",
                ]}
              />
            </Section>

            {/* 12 Contact */}
            <section className="rounded-2xl bg-dark p-7 text-white md:p-9">
              <h2 className="text-2xl font-bold">
                12. Contact Information
              </h2>

              <p className="mt-4 leading-7 text-white/80">
                If you have questions or concerns regarding this Disclaimer or
                the information provided through FinoTravels, you can contact
                us using the details below:
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold text-primary">Company</p>
                  <p className="mt-1 text-sm text-white/80">
                    TravelFirst LLC
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Brand</p>
                  <p className="mt-1 text-sm text-white/80">
                    FinoTravels
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Address</p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104
                    <br />
                    MARLTON, NEW JERSEY 08053-0805
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Email</p>
                  <a
                    href="mailto:contact@finotravels.com"
                    className="mt-1 inline-block text-sm text-white/80 transition hover:text-white"
                  >
                    contact@finotravels.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Phone</p>
                  <a
                    href="tel:+18557502746"
                    className="mt-1 inline-block text-sm font-semibold text-white transition hover:text-primary"
                  >
                    ☎ (855) 750-2746
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Disclaimer;
