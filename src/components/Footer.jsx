const companyLinks = [
  ["Home", "/"],
  ["About Us", "#about"],
  ["Contact Us", "#contact"],
  ["Privacy Policy", "#"],
  ["Terms & Conditions", "#"],
  ["Cancellation & Refund", "#"],
];

const dealLinks = [
  "Domestic Flights",
  "International Flights",
  "One Way Flights",
  "Round Trip Flights",
  "First Class Flights",
  "Business Class Flights",
  "Last Minute Flights",
  "Online Travel Agency",
];

const regions = [
  "Flights to Los Angeles",
  "Flights to San Francisco",
  "Flights to Boston",
  "Flights to New York",
  "Flights to Tokyo",
  "Flights to London",
  "Flights to Paris",
  "Flights to Hong Kong",
];

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#001c42] text-white"
    >
      <div className="container-main py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <div className="mb-5 text-2xl font-black">
              Fino<span className="text-blue-400">Travels</span>
            </div>

            <p className="text-sm leading-6 text-blue-100">
              TravelFirst LLC
              <br />
              FIVE GREENTREE CENTRE
              <br />
              525 ROUTE 73 NORTH STE 104
              <br />
              MARLTON, NEW JERSEY 08053-0805
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href="tel:+18557502746"
                className="block text-blue-100 hover:text-white"
              >
                ☎ (855) 750-2746
              </a>

              <a
                href="mailto:contact@finotravels.com"
                className="block text-blue-100 hover:text-white"
              >
                ✉ contact@finotravels.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-5 font-extrabold">
              Company
            </h3>

            <div className="space-y-2.5">
              {companyLinks.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="block text-sm text-blue-100 transition hover:text-white"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Deals */}
          <div>
            <h3 className="mb-5 font-extrabold">
              Top Deals
            </h3>

            <div className="space-y-2.5">
              {dealLinks.map((item) => (
                <a
                  key={item}
                  href="#deals"
                  className="block text-sm text-blue-100 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div>
            <h3 className="mb-5 font-extrabold">
              Travel By Region
            </h3>

            <div className="space-y-2.5">
              {regions.map((item) => (
                <a
                  key={item}
                  href="#deals"
                  className="block text-sm text-blue-100 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-4 text-center text-xs text-blue-200 md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} TravelFirst LLC.
              All Rights Reserved.
            </p>

            <p>
              Live Fares & Discounts • Prices and availability
              may change.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs font-semibold text-blue-200">
            <span>Accepted Payment Methods</span>
            <span>VISA</span>
            <span>Mastercard</span>
            <span>AMEX</span>
            <span>PayPal</span>
          </div>

        </div>
      </div>

      {/* Call Bar */}
      <a
        href="tel:+18557502746"
        className="block bg-primary py-3 text-center text-sm font-bold text-white"
      >
        ☎ Speak to our travel experts — (855) 750-2746
      </a>
    </footer>
  );
}

export default Footer;