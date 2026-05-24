import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-xl text-blue-600">Evently</h1>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-500">
          Events
        </Link>
        <Link to="/Booking" className="hover:text-blue-500">
          Bookings
        </Link>

        {/* THEME TOGGLE */}
        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
          className="px-3 py-1 border rounded-lg dark:border-gray-600"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
}