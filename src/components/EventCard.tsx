import type { Event } from "../types/Event";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event }: { event: Event }) {
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-5 relative">

      {/* FAVORITE */}
      <button
        onClick={() => setFav(!fav)}
        className="absolute top-3 right-3 text-xl"
      >
        {fav ? "❤️" : "🤍"}
      </button>

      {/* TITLE */}
      <h2 className="text-xl font-bold mb-1">{event.title}</h2>

      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
        {event.category}
      </span>

      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
        {event.description}
      </p>

      <div className="text-sm mt-3 space-y-1 text-gray-700 dark:text-gray-200">
        <p>📅 {event.date}</p>
        <p>⏰ {event.time}</p>
        <p>📍 {event.location}</p>
        <p>👤 {event.organizer}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="font-bold text-green-600">
          {event.price === 0 ? "Free" : `$${event.price}`}
        </p>

        {/* BOOK BUTTON */}
        <button
  onClick={() =>
    navigate("/booking", {
      state: { event }
    })
  }
  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
>
  Book Now
</button>
      </div>
    </div>
  );
}