import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import Booking from "./components/Booking";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />

      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}