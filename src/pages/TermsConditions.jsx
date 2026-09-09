function TermsConditions() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-dark py-16 text-white">
                <div className="container-main">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        FinoTravels
                    </p>

                    <h1 className="text-4xl font-black md:text-5xl">
                        Terms & Conditions
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                        Please review the terms that apply when you access our website,
                        use our travel-related services, submit an inquiry, or communicate
                        with our support team.
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
                                Welcome to FinoTravels, operated by TravelFirst LLC
                                (“FinoTravels,” “we,” “us,” or “our”). These Terms & Conditions
                                (“Terms”) establish the rules that apply when you access our
                                website, use our travel-related services, submit an inquiry, or
                                communicate with our support team.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                                By visiting or using FinoTravels, you acknowledge that you have
                                read and accepted these Terms. If you do not agree with any
                                provision contained here, please discontinue your use of our
                                website and services.
                            </p>
                        </div>

                        {/* 1 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                1. Who Can Use Our Services
                            </h2>

                            <p className="mt-4 text-gray-600">
                                By using FinoTravels, you represent that:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "You are 18 years of age or older",
                                    "You have the legal capacity to enter into a binding agreement",
                                    "You are using our website and services for legitimate and lawful purposes",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-gray-600"
                                    >
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                When making a booking or submitting information for other
                                passengers, you confirm that the details provided are accurate
                                and that you are authorized to act on behalf of the travelers
                                included in the request.
                            </p>
                        </section>

                        {/* 2 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                2. About Our Travel Services
                            </h2>

                            <p className="mt-4 text-gray-600">
                                FinoTravels is an independent travel service provider that
                                assists travelers in exploring and arranging travel options,
                                including airline tickets and related travel services.
                            </p>

                            <p className="mt-4 text-gray-600">
                                We may facilitate interactions between travelers and
                                third-party travel suppliers, such as airlines and other
                                travel providers. These suppliers independently operate their
                                own services and are responsible for their respective
                                schedules, policies, fares, and service delivery.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Any ticket, itinerary, or travel service obtained through our
                                platform may be subject to the rules and conditions established
                                by the applicable airline or supplier.
                            </p>
                        </section>

                        {/* 3 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                3. Information Provided by Customers
                            </h2>

                            <p className="mt-4 text-gray-600">
                                You are responsible for ensuring that all information submitted
                                during an inquiry or booking is complete and accurate.
                            </p>

                            <p className="mt-4 text-gray-600">This may include:</p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Passenger names as shown on applicable travel documents",
                                    "Travel dates and destinations",
                                    "Contact details",
                                    "Passenger and traveler information",
                                    "Payment-related information",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-gray-600"
                                    >
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                Errors or omissions may lead to additional costs, changes,
                                delays, or difficulties with a reservation. TravelFirst LLC
                                cannot be held responsible for issues resulting from inaccurate
                                or incomplete information supplied by a customer.
                            </p>
                        </section>

                        {/* 4 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                4. Fares, Availability, and Reservations
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Flight availability and pricing can change at any time.
                                Displayed fares or options are not necessarily guaranteed until
                                the applicable booking has been successfully completed and
                                confirmed.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Depending on the transaction, the following conditions may
                                apply:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Payment must be successfully received before a reservation is confirmed",
                                    "Airline or supplier availability may change before confirmation",
                                    "Prices can change because of fare updates, inventory changes, taxes, or technical factors",
                                    "A confirmation may be issued once the booking process has been successfully completed",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                TravelFirst LLC may take reasonable steps to address
                                transactions affected by technical errors, incorrect pricing,
                                suspected fraudulent activity, or security concerns.
                            </p>

                            <p className="mt-4 text-gray-600">
                                We may also request additional information or verification
                                before completing certain transactions. Failure to provide
                                requested verification may result in the transaction being
                                declined or cancelled where appropriate.
                            </p>
                        </section>

                        {/* 5 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                5. Airline Rules and Ticket Restrictions
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Travel products are subject to the rules of the airline or
                                supplier providing them.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Depending on the ticket purchased, restrictions may apply to:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Flight changes",
                                    "Cancellations",
                                    "Refunds",
                                    "Baggage",
                                    "Seat assignments",
                                    "Flight schedules",
                                    "Name corrections or other booking modifications",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                Different fares can have significantly different conditions.
                                Certain tickets may be restricted, non-refundable, or subject
                                to penalties.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Customers are encouraged to review the applicable fare
                                conditions before completing a purchase.
                            </p>
                        </section>

                        {/* 6 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                6. Passports, Visas, and Travel Requirements
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Travelers are responsible for understanding and meeting all
                                entry, exit, immigration, health, and documentation
                                requirements applicable to their trip.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Depending on the itinerary, travelers may need:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "A valid passport or identification document",
                                    "Appropriate visas or travel authorizations",
                                    "Required health documentation",
                                    "Other documents required by airlines, governments, or destination authorities",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                Travel requirements can vary based on nationality, destination,
                                transit points, and applicable regulations.
                            </p>

                            <p className="mt-4 text-gray-600">
                                FinoTravels does not guarantee admission into any country and is
                                not responsible for denied boarding, refused entry, missed
                                travel, or other consequences arising from incomplete, expired,
                                or invalid travel documentation.
                            </p>
                        </section>

                        {/* 7 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                7. Booking Modifications, Cancellations, and Refund Requests
                            </h2>

                            <p className="mt-4 text-gray-600">
                                If you need to change, cancel, or request a refund for a
                                reservation, please contact FinoTravels as soon as possible.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Depending on the applicable booking conditions:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Airline or supplier penalties may apply",
                                    "Additional service or processing charges may apply",
                                    "Some fares may not qualify for a refund",
                                    "Refund eligibility depends on the applicable fare rules",
                                    "Processing time can vary depending on the airline, payment method, and other service providers",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                Any eligible refund will generally be handled according to the
                                applicable airline or travel supplier's policies and the terms
                                associated with the reservation.
                            </p>
                        </section>

                        {/* 8 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                8. External Providers and Websites
                            </h2>

                            <p className="mt-4 text-gray-600">
                                FinoTravels may provide access to or information about
                                third-party websites, travel companies, payment providers,
                                airlines, or other external services.
                            </p>

                            <p className="mt-4 text-gray-600">
                                These third parties operate independently of TravelFirst LLC.
                                We do not control and are not responsible for their:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Website content",
                                    "Privacy practices",
                                    "Terms and conditions",
                                    "Policies",
                                    "Products or services",
                                    "Independent transactions",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                Before engaging with an external provider, you should review
                                its applicable policies and terms.
                            </p>
                        </section>

                        {/* 9 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                9. Account and Access Responsibility
                            </h2>

                            <p className="mt-4 text-gray-600">
                                If account functionality is available and you create or use an
                                account with FinoTravels, you are responsible for protecting
                                your login information and maintaining the confidentiality of
                                your account credentials.
                            </p>

                            <p className="mt-4 text-gray-600">
                                You are also responsible for activity carried out through your
                                account.
                            </p>

                            <p className="mt-4 text-gray-600">
                                If you become aware of unauthorized access, suspicious
                                activity, or a potential security issue involving your account,
                                please notify us promptly.
                            </p>
                        </section>

                        {/* 10 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                10. Acceptable Use
                            </h2>

                            <p className="mt-4 text-gray-600">
                                When using FinoTravels, you agree not to:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Use the website for unlawful or fraudulent activities",
                                    "Submit false, inaccurate, or misleading information",
                                    "Attempt to gain unauthorized access to our systems",
                                    "Introduce viruses, malicious software, or harmful code",
                                    "Disrupt or interfere with website functionality",
                                    "Copy, reproduce, or misuse website materials without authorization",
                                    "Pretend to represent TravelFirst LLC or FinoTravels without permission",
                                    "Use our platform to distribute spam or unauthorized communications",
                                    "Attempt to manipulate, exploit, or circumvent our website or booking systems",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                We may restrict or terminate access, cancel affected
                                transactions, or take other appropriate action if these Terms
                                are violated.
                            </p>
                        </section>

                        {/* 11 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                11. Ownership of Website Content
                            </h2>

                            <p className="mt-4 text-gray-600">
                                The materials available through FinoTravels, including its
                                text, graphics, logos, designs, layouts, images, and other
                                website content, are owned by TravelFirst LLC or used with
                                appropriate authorization.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Unless permitted by law or expressly authorized by us, you may
                                not reproduce, distribute, modify, publish, sell, or otherwise
                                exploit website content without prior written permission.
                            </p>
                        </section>

                        {/* 12 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                12. Limitations and Circumstances Beyond Our Control
                            </h2>

                            <p className="mt-4 text-gray-600">
                                TravelFirst LLC is not responsible for disruptions or losses
                                resulting from circumstances beyond our reasonable control.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Such circumstances may include:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Airline delays or cancellations",
                                    "Schedule or route changes",
                                    "Missed connections",
                                    "Severe weather",
                                    "Natural disasters",
                                    "Government actions or restrictions",
                                    "Strikes or operational disruptions",
                                    "Security events",
                                    "Other force majeure circumstances",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 text-gray-600">
                                Because airlines and other suppliers independently operate
                                their services, we cannot guarantee uninterrupted travel or a
                                particular flight schedule.
                            </p>

                            <p className="mt-4 text-gray-600">
                                To the extent permitted by applicable law, TravelFirst LLC will
                                not be responsible for indirect, incidental, special, or
                                consequential losses arising from circumstances outside the
                                services directly provided by us.
                            </p>
                        </section>

                        {/* 13 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                13. Customer Indemnification
                            </h2>

                            <p className="mt-4 text-gray-600">
                                By using our website and services, you agree, to the extent
                                permitted by law, to indemnify and hold harmless TravelFirst
                                LLC, its affiliates, representatives, employees, and service
                                providers from claims, losses, liabilities, costs, or expenses
                                arising from:
                            </p>

                            <ul className="mt-4 space-y-2">
                                {[
                                    "Your breach of these Terms",
                                    "Your misuse of our website or services",
                                    "Information you knowingly or negligently provide that causes harm",
                                    "Your violation of applicable laws or third-party rights",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 14 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                14. Changes to These Terms
                            </h2>

                            <p className="mt-4 text-gray-600">
                                TravelFirst LLC may modify these Terms & Conditions when
                                necessary to reflect changes in our services, business
                                practices, technology, or legal requirements.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Any revised version may be published on this website with an
                                updated effective date. Your continued use of FinoTravels after
                                changes become effective constitutes acceptance of the revised
                                Terms, to the extent permitted by law.
                            </p>

                            <p className="mt-4 text-gray-600">
                                We recommend reviewing these Terms periodically.
                            </p>
                        </section>

                        {/* 15 */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-dark">
                                15. Applicable Law and Jurisdiction
                            </h2>

                            <p className="mt-4 text-gray-600">
                                These Terms & Conditions shall be interpreted and applied in
                                accordance with applicable laws.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Any dispute arising from or relating to your use of FinoTravels
                                or our services will be subject to the applicable legal
                                procedures and jurisdiction determined under relevant law.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Nothing in these Terms is intended to remove or limit any
                                rights or protections that cannot legally be waived.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="rounded-2xl bg-dark p-7 text-white md:p-9">
                            <h2 className="text-2xl font-bold">
                                16. Contact Information
                            </h2>

                            <p className="mt-4 leading-7 text-white/80">
                                If you have questions about these Terms & Conditions or need
                                assistance concerning our website or services, you may contact
                                us using the information below:
                            </p>

                            <div className="mt-6 space-y-4">
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

export default TermsConditions;