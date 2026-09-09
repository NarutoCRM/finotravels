import { useState } from "react";

const tabs = ["Tours"];

function BookingWidget() {
  const [active, setActive] = useState("Tours");

  return (
    <div className="w-full rounded-2xl bg-white p-3 shadow-xl sm:p-4">
      {/* Tabs */}
      <div className="mb-4 overflow-x-auto pb-1">
        <div className="flex min-w-max gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold transition sm:text-sm ${active === tab
                ? "bg-primary text-white"
                : "bg-gray-50 text-gray-600 hover:bg-light-blue"
                }`}
            >
              {tab === "Tours" && "✈"}

              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Fields */}
      <div className="grid gap-3 md:grid-cols-[1.3fr_1.3fr_1.3fr_auto]">
        {/* Destination */}
        <div className="min-w-0 rounded-lg border border-gray-300 px-3 py-2.5">
          <label className="block text-[9px] font-bold uppercase tracking-wide text-gray-400">
            Destination
          </label>

          <div className="mt-1 flex items-center gap-2">
            <span className="shrink-0 text-sm text-primary">⌖</span>

            <input
              type="text"
              className="min-w-0 w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              placeholder="Select destination"
            />
          </div>
        </div>

        {/* Date */}
        <div className="min-w-0 rounded-lg border border-gray-300 px-3 py-2.5">
          <label className="block text-[9px] font-bold uppercase tracking-wide text-gray-400">
            Date
          </label>

          <div className="mt-1 flex items-center gap-2">
            <span className="shrink-0 text-sm text-primary">▣</span>

            <input
              type="date"
              className="min-w-0 w-full bg-transparent text-sm text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Tour Type */}
        <div className="min-w-0 rounded-lg border border-gray-300 px-3 py-2.5">
          <label className="block text-[9px] font-bold uppercase tracking-wide text-gray-400">
            Tour Type
          </label>

          <div className="mt-1 flex items-center gap-2">
            <span className="shrink-0 text-sm text-primary">☰</span>

            <select className="min-w-0 w-full bg-transparent text-sm text-gray-700 outline-none">
              <option>Select</option>
              <option>Domestic Flight</option>
              <option>International Flight</option>
              <option>One Way</option>
              <option>Round Trip</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="min-h-[46px] w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-dark md:min-w-[135px]"
        >
          🔍 SEARCH
        </button>
      </div>

      {/* Custom Itinerary */}
      <div className="mt-3">
        <p className="text-center text-[11px] leading-5 text-gray-500 sm:text-left">
          Can't find what you're looking for?
          <span className="ml-1 font-bold text-primary">
            Create your Custom Itinerary
          </span>
        </p>
      </div>
    </div>
  );
}

export default BookingWidget;