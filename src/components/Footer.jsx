import { Link } from "react-router-dom";
import { formatPhoneNumber } from "../utils/helper";
import { appData } from "../data";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-main py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link to="/" className="inline-block">
              <div className="text-2xl font-black tracking-tight">
                Fino<span className="text-primary">Travels</span>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
              Explore flight options, compare available itineraries, and plan
              your next journey with FinoTravels.
            </p>

            <div className="mt-5">
              <a
                href={`tel:+${appData.phoneNumber}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-primary"
              >
                ☎ {formatPhoneNumber(appData.phoneNumber)}
              </a>
            </div>
          </div>

          {/* Travel More */}
          <div>
            <h3 className="text-base font-black">Travel More</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/flights" className="transition hover:text-primary">
                  Flights
                </Link>
              </li>

              <li>
                <Link to="/hotels" className="transition hover:text-primary">
                  Hotels
                </Link>
              </li>

              <li>
                <Link to="/cruise" className="transition hover:text-primary">
                  Cruise
                </Link>
              </li>

              <li>
                <Link
                  to="/car-rental"
                  className="transition hover:text-primary"
                >
                  Car Rental
                </Link>
              </li>

              <li>
                <Link
                  to="/destinations"
                  className="transition hover:text-primary"
                >
                  Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Flight Deals */}
          <div>
            <h3 className="text-base font-black">Flight Deals</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/deals" className="transition hover:text-primary">
                  All Deals
                </Link>
              </li>

              <li>
                <Link
                  to="/domestic-flight-deals"
                  className="transition hover:text-primary"
                >
                  Domestic Flight Deals
                </Link>
              </li>

              <li>
                <Link
                  to="/international-flight-deals"
                  className="transition hover:text-primary"
                >
                  International Flight Deals
                </Link>
              </li>

              <li>
                <Link
                  to="/first-class-flight-deals"
                  className="transition hover:text-primary"
                >
                  First Class Flight Deals
                </Link>
              </li>

              <li>
                <Link
                  to="/business-class-flight-deals"
                  className="transition hover:text-primary"
                >
                  Business Class Flight Deals
                </Link>
              </li>

              <li>
                <Link
                  to="/last-minute-flight-deals"
                  className="transition hover:text-primary"
                >
                  Last-Minute Flight Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-black">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/about" className="transition hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-primary">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="transition hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-conditions"
                  className="transition hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/cancellation-refund"
                  className="transition hover:text-primary"
                >
                  Cancellation & Refund
                </Link>
              </li>

              <li>
                <Link
                  to="/advertisement-disclosure"
                  className="transition hover:text-primary"
                >
                  Advertisement Disclosure
                </Link>
              </li>

              <li>
                <Link
                  to="/cookie-policy"
                  className="transition hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/disclaimer"
                  className="transition hover:text-primary"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider">
                TravelFirst LLC
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104
                <br />
                MARLTON, NEW JERSEY 08053-0805
              </p>
            </div>

            <div className="md:text-right">
              <h3 className="text-sm font-black uppercase tracking-wider">
                Contact
              </h3>

              <div className="mt-3 space-y-2 text-sm text-white/60">
                <p>
                  <a
                    href={`mailto:${appData.email}`}
                    className="transition hover:text-primary"
                  >
                    {appData.email}
                  </a>
                </p>

                <p>
                  <a
                    href={`tel:+${appData.phoneNumber}`}
                    className="transition hover:text-primary"
                  >
                    {formatPhoneNumber(appData.phoneNumber)}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs leading-6 text-white/50">
            FinoTravels is a travel service operated by TravelFirst LLC. Flight
            availability, schedules, fares, and other travel information are
            subject to change and may vary based on airline inventory, travel
            dates, demand, and other conditions. Displayed information does not
            guarantee availability or a particular price until a reservation is
            successfully completed and confirmed. Please review applicable
            airline terms, fare conditions, baggage policies, cancellation
            rules, and other restrictions before booking.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#00162f]">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} TravelFirst LLC. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/50">
            <Link
              to="/privacy-policy"
              className="transition hover:text-primary"
            >
              Privacy
            </Link>

            <Link
              to="/terms-conditions"
              className="transition hover:text-primary"
            >
              Terms
            </Link>

            <Link to="/cookie-policy" className="transition hover:text-primary">
              Cookies
            </Link>

            <Link to="/disclaimer" className="transition hover:text-primary">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
