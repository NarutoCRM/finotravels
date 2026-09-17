import { appData } from "../data";
import { formatPhoneNumber } from "../utils/helper";

function AdvertisementDisclosure() {
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
            Advertisement Disclosure
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            Transparency about advertising, sponsored content, affiliate
            relationships, and third-party promotions on FinoTravels.
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
                At FinoTravels, operated by TravelFirst LLC, we value
                transparency in how advertising and promotional material is
                presented on our website. This Advertisement Disclosure explains
                the types of advertising, sponsored material, affiliate
                relationships, and third-party promotions that may appear across
                our platform.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                By accessing or using FinoTravels, you acknowledge the practices
                described in this disclosure.
              </p>
            </div>

            {/* 1 */}
            <Section number="1" title="Advertisements on FinoTravels">
              <p className="mt-4 text-gray-600">
                FinoTravels may feature advertisements, sponsored placements,
                promotional messages, or travel-related offers from independent
                companies, advertisers, affiliates, and other business partners.
              </p>

              <p className="mt-4 text-gray-600">
                Depending on the website and available campaigns, advertisements
                may relate to:
              </p>

              <List
                items={[
                  "Airline and flight offers",
                  "Travel products and services",
                  "Promotional fares and deals",
                  "Partner services",
                  "Special travel promotions",
                  "Other travel-related products or information",
                ]}
              />

              <p className="mt-4 text-gray-600">
                An advertisement appearing on FinoTravels should not
                automatically be interpreted as an endorsement or recommendation
                by TravelFirst LLC. The display of an advertisement does not
                guarantee the quality, availability, pricing, or performance of
                the advertised product or service.
              </p>
            </Section>

            {/* 2 */}
            <Section number="2" title="Advertising Partners">
              <p className="mt-4 text-gray-600">
                We may work with advertising networks, affiliate partners,
                travel companies, and other third-party businesses to present
                promotional content on our website.
              </p>

              <p className="mt-4 text-gray-600">
                Certain advertising partners may use technologies such as
                cookies, pixels, tags, or similar tools to help them:
              </p>

              <List
                items={[
                  "Deliver advertisements",
                  "Measure campaign performance",
                  "Understand interactions with advertisements",
                  "Analyze advertising activity",
                  "Improve the relevance of promotional content",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Third-party advertising companies may maintain their own privacy
                policies and data practices. Users should review the applicable
                policies of these companies before interacting with their
                websites, advertisements, or services.
              </p>
            </Section>

            {/* 3 */}
            <Section number="3" title="Affiliate Disclosure">
              <p className="mt-4 text-gray-600">
                Some links, offers, or promotional placements available through
                FinoTravels may be associated with affiliate arrangements.
              </p>

              <p className="mt-4 text-gray-600">
                Where an affiliate relationship exists, TravelFirst LLC may
                receive compensation when a visitor clicks on a qualifying link,
                submits an inquiry, or completes an eligible transaction through
                a third-party provider.
              </p>

              <p className="mt-4 text-gray-600">
                Affiliate compensation does not necessarily mean that a
                particular advertiser, offer, or service is suitable for every
                traveler. Users should independently evaluate the information
                and terms associated with any third-party offer.
              </p>
            </Section>

            {/* 4 */}
            <Section number="4" title="Advertised Prices and Availability">
              <p className="mt-4 text-gray-600">
                Travel offers, fares, and promotional information can change
                frequently. While we make reasonable efforts to provide useful
                information, some advertisements are supplied by external
                advertisers or travel providers.
              </p>

              <p className="mt-4 text-gray-600">
                TravelFirst LLC does not guarantee that an advertised offer will
                remain available or that the information supplied by a third
                party will always be current.
              </p>

              <p className="mt-4 text-gray-600">This may include:</p>

              <List
                items={[
                  "Advertised prices",
                  "Flight or service availability",
                  "Promotional terms",
                  "Eligibility requirements",
                  "Restrictions and limitations",
                  "Third-party booking conditions",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Before completing a purchase or making a travel decision, users
                should confirm the current price, availability, restrictions,
                and applicable terms with the relevant provider.
              </p>
            </Section>

            {/* 5 */}
            <Section
              number="5"
              title="External Links and Third-Party Platforms"
            >
              <p className="mt-4 text-gray-600">
                Advertisements and promotional material on FinoTravels may
                direct users to websites operated by independent third parties.
              </p>

              <p className="mt-4 text-gray-600">
                Once you leave FinoTravels and visit an external website, that
                website's own terms, privacy practices, and policies may apply.
              </p>

              <p className="mt-4 text-gray-600">
                TravelFirst LLC does not control or assume responsibility for:
              </p>

              <List
                items={[
                  "Content published on external websites",
                  "Third-party privacy practices",
                  "Products or services offered by external companies",
                  "Promotional claims made by advertisers",
                  "Transactions completed directly with third parties",
                ]}
              />

              <p className="mt-4 text-gray-600">
                We encourage users to review the applicable terms and privacy
                policies before providing information or completing a
                transaction with an external provider.
              </p>
            </Section>

            {/* 6 */}
            <Section number="6" title="No Implied Endorsement">
              <p className="mt-4 text-gray-600">
                The presence of an advertisement, sponsored placement, affiliate
                link, or promotional offer on FinoTravels does not mean that
                TravelFirst LLC:
              </p>

              <List
                items={[
                  "Guarantees the advertiser's products or services",
                  "Certifies the accuracy of an advertised claim",
                  "Guarantees a particular price or availability",
                  "Accepts responsibility for a third party's performance",
                  "Recommends a product solely because it is advertised on our website",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Users are responsible for reviewing and verifying the details of
                any offer before proceeding.
              </p>
            </Section>

            {/* 7 */}
            <Section number="7" title="Changes to This Disclosure">
              <p className="mt-4 text-gray-600">
                TravelFirst LLC may revise this Advertisement Disclosure
                periodically as our advertising relationships, website features,
                technologies, or applicable requirements change.
              </p>

              <p className="mt-4 text-gray-600">
                Any revised disclosure may be published on this page with an
                updated effective date. We encourage visitors to review this
                page from time to time to remain aware of how advertising and
                promotional content may be presented on FinoTravels.
              </p>
            </Section>

            {/* 8 Contact */}
            <section className="rounded-2xl bg-dark p-7 text-white md:p-9">
              <h2 className="text-2xl font-bold">8. Contact Information</h2>

              <p className="mt-4 leading-7 text-white/80">
                If you have questions or concerns about advertising, affiliate
                relationships, or promotional content appearing on FinoTravels,
                please contact us:
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

export default AdvertisementDisclosure;
