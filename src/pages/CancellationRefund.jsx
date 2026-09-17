import { appData } from "../data";
import { formatPhoneNumber } from "../utils/helper";

function CancellationRefund() {
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
            Cancellation & Refund Policy
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            Information about cancellation requests, refund eligibility,
            applicable charges, and refund processing times.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-10 rounded-2xl border border-light-blue bg-light-blue/40 p-6 md:p-8">
              <p className="text-sm leading-7 text-gray-700 md:text-base">
                At FinoTravels, operated by TravelFirst LLC, we understand that
                travel plans do not always remain the same. Changes in personal
                circumstances, schedules, or other unexpected situations may
                require travelers to modify or cancel a reservation.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                This policy explains how cancellation requests and refunds are
                handled, including applicable restrictions, charges, eligibility
                requirements, and expected processing times. Since FinoTravels
                works with independent airlines and travel providers, the
                conditions attached to each reservation may differ.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                By using our website or purchasing travel services through
                FinoTravels, you acknowledge and agree to the terms outlined
                below.
              </p>
            </div>

            {/* 1 */}
            <Section number="1" title="Understanding Cancellation Conditions">
              <p className="mt-4 text-gray-600">
                Cancellation terms are generally determined by the airline or
                travel supplier associated with your reservation. The applicable
                conditions may depend on:
              </p>

              <List
                items={[
                  "The airline or travel provider",
                  "The fare purchased",
                  "The route and destination",
                  "Ticket restrictions",
                  "The time of cancellation",
                  "Whether the ticket has already been partially or fully used",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Travelers should review the fare conditions associated with
                their reservation before requesting a cancellation.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Service and Processing Charges
              </h3>

              <p className="mt-4 text-gray-600">
                Any applicable service, processing, administrative, or
                convenience charges collected by FinoTravels may be
                non-refundable, even when the underlying airline ticket
                qualifies for a refund.
              </p>

              <p className="mt-4 text-gray-600">
                Certain discounted, promotional, or highly restricted fares may
                also carry limited or no refund eligibility.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Airline Fare Rules
              </h3>

              <p className="mt-4 text-gray-600">
                Airlines establish the rules governing their tickets. This
                means:
              </p>

              <List
                items={[
                  "The airline determines whether a fare qualifies for a refund",
                  "Cancellation penalties are based on the applicable ticket rules",
                  "Refund amounts are calculated according to the airline's fare conditions",
                  "FinoTravels cannot override or guarantee an airline's cancellation decision",
                ]}
              />

              <h3 className="mt-7 text-xl font-bold text-dark">
                Possible Cancellation Charges
              </h3>

              <p className="mt-4 text-gray-600">
                Depending on the reservation, cancellation costs may include:
              </p>

              <List
                items={[
                  "Airline cancellation penalties",
                  "FinoTravels service or processing charges",
                  "Applicable fare differences",
                  "Other charges specified in the ticket conditions",
                ]}
              />

              <p className="mt-4 text-gray-600">
                The total amount may vary depending on the ticket type and when
                the cancellation is requested.
              </p>
            </Section>

            {/* 2 */}
            <Section number="2" title="Requesting a Cancellation">
              <p className="mt-4 text-gray-600">
                If you need to cancel a reservation, please contact the
                FinoTravels support team as soon as possible.
              </p>

              <p className="mt-4 text-gray-600">
                To help us process your request efficiently:
              </p>

              <List
                items={[
                  "Provide your booking or reservation details",
                  "Submit the request before the scheduled departure whenever possible",
                  "Clearly indicate that you wish to cancel the applicable reservation",
                  "Retain any communication or confirmation received from our team",
                ]}
              />

              <p className="mt-4 text-gray-600">
                A cancellation request should not be considered completed until
                you receive confirmation from FinoTravels or the applicable
                travel provider.
              </p>
            </Section>

            {/* 3 */}
            <Section number="3" title="Cancellations Within 24 Hours">
              <p className="mt-4 text-gray-600">
                Certain airline tickets may qualify for cancellation within 24
                hours of booking under applicable airline policies and
                regulations.
              </p>

              <p className="mt-4 text-gray-600">
                However, 24-hour cancellation availability is not universal.
                Eligibility may depend on factors such as:
              </p>

              <List
                items={[
                  "The airline",
                  "Fare type",
                  "Route",
                  "Time of booking",
                  "Applicable airline terms",
                  "Timing of the cancellation request",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Customers should not assume that every reservation automatically
                qualifies for a penalty-free 24-hour cancellation.
              </p>

              <p className="mt-4 text-gray-600">
                FinoTravels does not independently establish airline-specific
                24-hour cancellation rules.
              </p>
            </Section>

            {/* 4 */}
            <Section number="4" title="Flexible Fares and Additional Options">
              <p className="mt-4 text-gray-600">
                Some airlines and travel providers offer flexible fares, waiver
                options, or other products that may provide greater flexibility
                when plans change.
              </p>

              <p className="mt-4 text-gray-600">
                Depending on the option selected, these may offer benefits such
                as:
              </p>

              <List
                items={[
                  "Lower cancellation penalties",
                  "Greater flexibility for changes",
                  "Different refund conditions",
                  "Additional travel-related benefits",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Any such benefits are governed by the terms attached to the
                specific fare or product. Travelers should review those
                conditions before purchase.
              </p>
            </Section>

            {/* 5 */}
            <Section number="5" title="Conditions That May Affect Cancellation">
              <p className="mt-4 text-gray-600">
                Several circumstances can influence the amount refunded or the
                charges associated with a cancellation.
              </p>

              <p className="mt-4 text-gray-600">For example:</p>

              <List
                items={[
                  "Cancellation charges may be higher as departure approaches",
                  "Removing one passenger from a reservation may affect the remaining fare",
                  "Round-trip and multi-city bookings may have different cancellation conditions",
                  "A partially used ticket may only be eligible for a refund of an unused portion, if permitted",
                  "Certain tickets may lose refund eligibility after travel has commenced",
                  "Failure to cancel before departure may result in a no-show classification",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Because each airline establishes its own rules, the exact
                outcome depends on the conditions of your specific reservation.
              </p>
            </Section>

            {/* 6 */}
            <Section number="6" title="Refund Eligibility">
              <p className="mt-4 text-gray-600">
                FinoTravels can assist eligible customers with the refund
                request process. However, the airline or applicable travel
                supplier generally determines whether a refund is permitted and
                how much may be returned.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Factors Affecting a Refund
              </h3>

              <p className="mt-4 text-gray-600">
                Refund eligibility may depend on:
              </p>

              <List
                items={[
                  "The fare rules attached to the ticket",
                  "The airline's cancellation policy",
                  "When the cancellation request was submitted",
                  "Whether the ticket has been used",
                  "Applicable penalties or deductions",
                  "Any service charges associated with the booking",
                ]}
              />

              <p className="mt-4 text-gray-600">
                We cannot change or guarantee a refund decision made under the
                applicable airline or supplier rules.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Non-Refundable Tickets
              </h3>

              <p className="mt-4 text-gray-600">
                Some tickets may be designated as non-refundable. Depending on
                the fare conditions, such reservations may:
              </p>

              <List
                items={[
                  "Have no cash refund available",
                  "Qualify for a partial refund only",
                  "Be subject to cancellation deductions",
                  "Provide alternative options instead of a monetary refund",
                ]}
              />

              <p className="mt-4 text-gray-600">
                The conditions applicable to your ticket will determine what
                options, if any, are available.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                No-Show Reservations
              </h3>

              <p className="mt-4 text-gray-600">
                A traveler who fails to board a scheduled flight without
                cancelling or otherwise complying with the applicable airline
                requirements may be classified as a no-show.
              </p>

              <p className="mt-4 text-gray-600">
                No-show bookings may have significantly restricted refund or
                change options. Any exception is determined by the airline's
                applicable rules.
              </p>
            </Section>

            {/* 7 */}
            <Section number="7" title="How Approved Refunds Are Returned">
              <p className="mt-4 text-gray-600">
                When a refund has been approved, it will generally be issued
                through the original payment method used for the reservation.
              </p>

              <p className="mt-4 text-gray-600">Examples may include:</p>

              <List
                items={[
                  "Credit or debit card: The eligible amount is generally returned to the card used for payment",
                  "Other electronic payment methods: The refund may be routed through the applicable original payment channel",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Refunds may generally be issued to the original purchaser or
                payment account associated with the reservation, subject to
                applicable payment and verification requirements.
              </p>
            </Section>

            {/* 8 */}
            <Section number="8" title="Refund Processing Time">
              <p className="mt-4 text-gray-600">
                Refunds are not always immediate. The time required to complete
                a refund can depend on several parties involved in the
                transaction.
              </p>

              <p className="mt-4 text-gray-600">
                Processing may require time for:
              </p>

              <List
                items={[
                  "The airline or travel provider to approve and release the refund",
                  "FinoTravels or the applicable payment processor to process the approved amount",
                  "The bank or financial institution to post the funds to the customer's account",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Some refunds may take several business days or longer depending
                on the circumstances.
              </p>

              <p className="mt-4 text-gray-600">
                FinoTravels is not responsible for processing delays caused by
                airlines, banks, card networks, or external payment providers.
                However, our team may assist with providing available status
                information regarding a pending refund.
              </p>
            </Section>

            {/* 9 */}
            <Section number="9" title="FinoTravels' Role">
              <p className="mt-4 text-gray-600">
                FinoTravels acts as an independent travel service provider and
                may facilitate communication between customers and third-party
                travel suppliers.
              </p>

              <p className="mt-4 text-gray-600">
                When applicable, our team can assist by:
              </p>

              <List
                items={[
                  "Receiving cancellation requests",
                  "Explaining available booking information",
                  "Submitting eligible cancellation or refund requests",
                  "Communicating with applicable travel providers",
                  "Providing available updates regarding refund status",
                ]}
              />

              <p className="mt-4 text-gray-600">
                However, FinoTravels does not control airline fare rules, refund
                decisions, or external processing timelines.
              </p>

              <p className="mt-4 text-gray-600">
                We therefore cannot guarantee that a requested cancellation will
                be approved or that a particular refund amount will be issued.
              </p>

              <p className="mt-4 text-gray-600">
                Our objective is to make the process easier to understand and
                provide reasonable assistance throughout the request.
              </p>
            </Section>

            {/* 10 */}
            <Section number="10" title="Important Reminders">
              <p className="mt-4 text-gray-600">
                Before requesting a cancellation, travelers should keep in mind
                that:
              </p>

              <List
                items={[
                  "Cancellation terms differ between airlines and fares",
                  "Some service charges may not be refundable",
                  "Refunds may be reduced by applicable penalties or deductions",
                  "A cancellation request does not automatically guarantee a refund",
                  "No-show conditions may limit available options",
                  "Refund processing can take time after approval",
                  "The applicable airline or supplier rules govern the underlying ticket",
                ]}
              />

              <p className="mt-4 text-gray-600">
                For the most accurate information, customers should review the
                conditions associated with their specific reservation and
                contact FinoTravels promptly when their plans change.
              </p>
            </Section>

            {/* 11 Contact */}
            <section className="rounded-2xl bg-dark p-7 text-white md:p-9">
              <h2 className="text-2xl font-bold">11. Contact FinoTravels</h2>

              <p className="mt-4 leading-7 text-white/80">
                For assistance with a cancellation, refund request, or questions
                about the terms applicable to your reservation, please contact
                us:
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold text-primary">Address</p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104 MARLTON,
                    NEW JERSEY 08053-0805
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Email</p>
                  <a
                    href={`mailto:${appData.email}`}
                    className="mt-1 inline-block text-sm text-white/80 transition hover:text-white"
                  >
                    {appData.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Phone</p>
                  <a
                    href={`tel:+${appData.phoneNumber}`}
                    className="mt-1 inline-block text-sm font-semibold text-white transition hover:text-primary"
                  >
                    ☎ {formatPhoneNumber(appData.phoneNumber)}
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

export default CancellationRefund;
