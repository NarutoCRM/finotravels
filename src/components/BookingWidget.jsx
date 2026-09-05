import { useState } from "react";

const tabs = [
  {
    name: "Tours",
    icon: "🧳",
  },
  {
    name: "Hotels",
    icon: "🏨",
  },
  {
    name: "Visa",
    icon: "📄",
  },
  {
    name: "Experience",
    icon: "✨",
  },
];

function BookingWidget() {
  const [activeTab, setActiveTab] = useState("Tours");

  return (
    <div className="mx-auto w-full max-w-6xl rounded-2xl bg-white p-3 shadow-2xl shadow-blue-900/15 sm:p-5">

      {/* Tabs */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex min-w-fit items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition sm:px-5 ${
              activeTab === tab.name
                ? "bg-primary text-white shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-light-blue"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="grid gap-3 md:grid-cols-3">

        <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Destination
          </label>

          <div className="flex items-center gap-2">
            <span className="text-primary">⌖</span>

            <input
              type="text"
              placeholder="Select destination"
              className="w-full bg-transparent text-sm font-semibold text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Travel Date
          </label>

          <div className="flex items-center gap-2">
            <span className="text-primary">▣</span>

            <input
              type="date"
              className="w-full bg-transparent text-sm font-semibold text-gray-700 outline-none"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Travel Type
          </label>

          <div className="flex items-center gap-2">
            <span className="text-primary">☰</span>

            <select className="w-full bg-transparent text-sm font-semibold text-gray-700 outline-none">
              <option>Select tour type</option>
              <option>Family Vacation</option>
              <option>Honeymoon</option>
              <option>Business Travel</option>
              <option>Adventure</option>
              <option>Luxury Travel</option>
            </select>
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-xs text-gray-500">
          Can't find what you're looking for?
          <span className="ml-1 font-bold text-primary">
            Create a custom itinerary
          </span>
        </p>

        <button
          className="rounded-xl bg-primary px-8 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:bg-primary-dark"
        >
          🔍 SEARCH
        </button>
      </div>
    </div>
  );
}

export default BookingWidget;