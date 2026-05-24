import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const location = useLocation();
  const event = location.state?.event;
  const [step, setStep] = useState(1);

  const [quantity, setQuantity] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<any>({});

  const pricePerTicket = event?.price ?? 0;
  const total = quantity * pricePerTicket;

  const validateStep2 = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.phone.length < 10)
      newErrors.phone = "Valid phone required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 2 && !validateStep2()) return;
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
  <div className="max-w-3xl mx-auto p-6">

    {/* HEADER */}
    <h1 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white">
      Booking Flow
    </h1>

    {/* PROGRESS */}
    <p className="mb-6 text-gray-500 dark:text-gray-300">
      Step {step} of 3
    </p>

    {/* MAIN CARD */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition">

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Select Tickets
          </h2>

          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              setQuantity(value < 1 ? 1 : value);
            }}
            className="
              w-full p-3 border rounded-lg mb-4
              text-black dark:text-white
              bg-white dark:bg-gray-700
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />

          <div className="space-y-1 text-gray-700 dark:text-gray-200">
            <p>Price per ticket: <b>${pricePerTicket}</b></p>
            <p className="text-lg font-bold text-green-600">
              Total: ${total}
            </p>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Attendee Details
          </h2>

          <input
            placeholder="Name"
            className="
              w-full p-3 border rounded-lg mb-2
              text-black dark:text-white
              bg-white dark:bg-gray-700
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}

          <input
            placeholder="Email"
            className="
              w-full p-3 border rounded-lg mb-2
              text-black dark:text-white
              bg-white dark:bg-gray-700
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
          )}

          <input
            placeholder="Phone"
            className="
              w-full p-3 border rounded-lg
              text-black dark:text-white
              bg-white dark:bg-gray-700
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
          )}
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Confirmation
          </h2>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl space-y-2 text-gray-800 dark:text-white">
            <p><b>Name:</b> {form.name}</p>
            <p><b>Email:</b> {form.email}</p>
            <p><b>Phone:</b> {form.phone}</p>
            <p><b>Tickets:</b> {quantity}</p>
            <p><b>Total:</b> ${total}</p>
          </div>

          <p className="text-green-500 font-bold mt-4 text-lg">
            🎉 Booking Successful!
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Reference ID: BK-{Math.floor(Math.random() * 10000)}
          </p>

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
            View My Bookings
          </button>
        </div>
      )}
    </div>

    {/* NAVIGATION */}
    <div className="flex justify-between mt-6">
      <button
        disabled={step === 1}
        onClick={prevStep}
        className="px-5 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg disabled:opacity-50"
      >
        Back
      </button>

      <button
        onClick={step === 3 ? () => alert("Done!") : nextStep}
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        {step === 3 ? "Finish" : "Next"}
      </button>
    </div>
  </div>
  
);}