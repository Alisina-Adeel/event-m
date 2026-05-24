import { useState } from "react";
import EventCard from "./EventCard";
import allEvents from "../data/events.json";

export default function EventList() {
  const [search, setSearch] = useState("");

  const filtered = allEvents.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Discover Events</h1>

        {/* SEARCH */}
        <input
          placeholder="Search events..."
          className="w-full p-3 m-3 border rounded-xl
    text-black dark:text-white
    bg-white dark:bg-gray-800
    placeholder-gray-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}