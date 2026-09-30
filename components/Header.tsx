"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPhoneNumber } from "../utils/helper";
import { appData } from "../data";

function Header() {
  const [menu, setMenu] = useState(false);
  const [travel, setTravel] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="container-main">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FinoTravels"
              width={210}
              height={105}
              priority
              className="h-14 w-[210px] object-cover object-center"
            />
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
                  <Link
                    className="block rounded-lg px-4 py-2 hover:bg-light-blue"
                    href="/flights"
                  >
                    Flights
                  </Link>
                  <Link
                    className="block rounded-lg px-4 py-2 hover:bg-light-blue"
                    href="/hotels"
                  >
                    Hotels
                  </Link>
                  <Link
                    className="block rounded-lg px-4 py-2 hover:bg-light-blue"
                    href="/cruise"
                  >
                    Cruise
                  </Link>
                  <Link
                    className="block rounded-lg px-4 py-2 hover:bg-light-blue"
                    href="/car-rental"
                  >
                    Car
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/deals"
              className="text-sm font-semibold hover:text-primary"
            >
              Deals
            </Link>

            <Link
              href="/destinations"
              className="text-sm font-semibold hover:text-primary"
            >
              Destinations
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold hover:text-primary"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold hover:text-primary"
            >
              Contact Us
            </Link>
          </nav>

          <a
            href={`tel:+${appData.phoneNumber}`}
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-dark md:block"
          >
            ☎ {formatPhoneNumber(appData.phoneNumber)}
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
              <Link
                onClick={() => setMenu(false)}
                href="/deals"
                className="rounded-lg px-4 py-3"
              >
                Deals
              </Link>
              <Link
                onClick={() => setMenu(false)}
                href="/destinations"
                className="rounded-lg px-4 py-3"
              >
                Destinations
              </Link>
              <Link
                onClick={() => setMenu(false)}
                href="/about"
                className="rounded-lg px-4 py-3"
              >
                About
              </Link>
              <Link
                onClick={() => setMenu(false)}
                href="/contact"
                className="rounded-lg px-4 py-3"
              >
                Contact Us
              </Link>

              <a
                href={`tel:+${appData.phoneNumber}`}
                className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-bold text-white"
              >
                ☎ {formatPhoneNumber(appData.phoneNumber)}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
