import { useState } from "react";
import { Link } from "react-router-dom";


const navItems = [
  "Deals",
  "Destinations",
  "About",
  "Contact",
];

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-main">
        <div className="flex h-[76px] items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
              <span className="text-xl">✈</span>
            </div>

            <div className="leading-none">
              <div className="text-xl font-extrabold tracking-tight text-primary-dark">
                Fino<span className="text-primary">Travels</span>
              </div>

              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[2px] text-gray-400">
                Travel With Confidence
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

  <div className="relative">
    <button
      onClick={() => setTravelOpen(!travelOpen)}
      className="flex items-center gap-1 text-sm font-semibold text-gray-700 transition hover:text-primary"
    >
      Travel More
      <span className="text-xs">⌄</span>
    </button>

    {travelOpen && (
      <div className="absolute left-0 top-full mt-4 w-48 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl">

        <Link
          to="/flights"
          className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-light-blue hover:text-primary"
        >
          Flights
        </Link>

        <Link
          to="/hotels"
          className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-light-blue hover:text-primary"
        >
          Hotels
        </Link>

        <Link
          to="/cruise"
          className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-light-blue hover:text-primary"
        >
          Cruise
        </Link>

        <Link
          to="/car-rental"
          className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-light-blue hover:text-primary"
        >
          Car Rental
        </Link>

      </div>
    )}
  </div>

  <Link
    to="/deals"
    className="text-sm font-semibold text-gray-700 hover:text-primary"
  >
    Deals
  </Link>

  <Link
    to="/destinations"
    className="text-sm font-semibold text-gray-700 hover:text-primary"
  >
    Destinations
  </Link>

  <Link
    to="/about"
    className="text-sm font-semibold text-gray-700 hover:text-primary"
  >
    About
  </Link>

  <Link
    to="/contact"
    className="text-sm font-semibold text-gray-700 hover:text-primary"
  >
    Contact
  </Link>

</nav>

          {/* Call Button */}
          <a
            href="tel:+18557502746"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:bg-primary-dark md:flex"
          >
            <span>☎</span>
            <span>(855) 750-2746</span>
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue text-primary lg:hidden"
          >
            <span className="text-2xl">
              {mobileMenu ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="border-t border-gray-100 py-5 lg:hidden">
            <div className="flex flex-col gap-1">

              <button
                onClick={() => setTravelOpen(!travelOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-left font-semibold text-gray-700 hover:bg-light-blue"
              >
                Travel More
                <span>⌄</span>
              </button>

              {travelOpen && (
                <div className="ml-4 border-l-2 border-primary/20 pl-3">
                  {[
                    "Flights",
                    "Hotels",
                    "Cruise",
                    "Car Rental",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg px-4 py-3 font-semibold text-gray-700 hover:bg-light-blue hover:text-primary"
                >
                  {item}
                </a>
              ))}

              <a
                href="tel:+18557502746"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white"
              >
                ☎ Call (855) 750-2746
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;