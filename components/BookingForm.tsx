"use client";
import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-lavender/20 rounded-2xl p-8 text-center">
        <div className="text-2xl font-heading font-bold text-coral mb-4">Success!</div>
        <h3 className="font-heading text-2xl font-bold mb-2">Booking Request Sent!</h3>
        <p className="text-dark/70">We&apos;ll confirm your appointment within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5 border border-lavender/30"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1">Your Name</label>
          <input required type="text" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Pet Name</label>
          <input required type="text" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Breed</label>
          <input type="text" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Service</label>
          <select required className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50">
            <option value="">Select a service...</option>
            <option>Bath & Brush</option>
            <option>Full Groom</option>
            <option>Nail Trim</option>
            <option>De-shedding Treatment</option>
            <option>Puppy&apos;s First Groom</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Preferred Date</label>
          <input required type="date" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Preferred Time</label>
          <input required type="time" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Notes</label>
        <textarea rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-coral/50" placeholder="Anything we should know about your pup?" />
      </div>
      <button type="submit" className="w-full bg-coral text-white font-heading font-bold py-3 rounded-xl hover:bg-coral/90 transition-colors text-lg">
        Request Appointment
      </button>
    </form>
  );
}
