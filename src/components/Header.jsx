import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  const [travel, setTravel] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="container-main">
        <div className="flex h-[72px] items-center justify-between">

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl text-white">
              ✈
            </div>

            <div>
              <div className="text-xl font-extrabold text-dark">
                Fino<span className="text-primary">Travels</span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-400">
                Travel With Confidence
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <div className="relative">
              <button
                onClick={() => setTravel(!travel)}
                className="text-sm font-semibold text-gray-700 hover:text-primary"
              >
                Travel More ▾
              </button>

              {travel && (
                <div className="absolute left-0 top-9 w-44 rounded-xl border bg-white p-2 shadow-xl">
                  <Link className="block rounded-lg px-4 py-2 hover:bg-light-blue" to="/flights">
                    Flights
                  </Link>
                  <Link className="block rounded-lg px-4 py-2 hover:bg-light-blue" to="/hotels">
                    Hotels
                  </Link>
                  <Link className="block rounded-lg px-4 py-2 hover:bg-light-blue" to="/cruise">
                    Cruise
                  </Link>
                  <Link className="block rounded-lg px-4 py-2 hover:bg-light-blue" to="/car-rental">
                    Car
                  </Link>
                </div>
              )}
            </div>

            <Link to="/deals" className="text-sm font-semibold hover:text-primary">
              Deals
            </Link>

            <Link to="/destinations" className="text-sm font-semibold hover:text-primary">
              Destinations
            </Link>

            <Link to="/about" className="text-sm font-semibold hover:text-primary">
              About
            </Link>

            <Link to="/contact" className="text-sm font-semibold hover:text-primary">
              Contact Us
            </Link>
          </nav>

          <a
            href="tel:+18557502746"
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-dark md:block"
          >
            ☎ (855) 750-2746
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="rounded-lg bg-light-blue px-3 py-2 text-xl text-primary lg:hidden"
          >
            {menu ? "×" : "☰"}
          </button>
        </div>

        {menu && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              <Link onClick={() => setMenu(false)} to="/deals" className="rounded-lg px-4 py-3">
                Deals
              </Link>
              <Link onClick={() => setMenu(false)} to="/destinations" className="rounded-lg px-4 py-3">
                Destinations
              </Link>
              <Link onClick={() => setMenu(false)} to="/about" className="rounded-lg px-4 py-3">
                About
              </Link>
              <Link onClick={() => setMenu(false)} to="/contact" className="rounded-lg px-4 py-3">
                Contact Us
              </Link>

              <a
                href="tel:+18557502746"
                className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-bold text-white"
              >
                ☎ (855) 750-2746
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;