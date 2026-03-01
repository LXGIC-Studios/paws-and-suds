"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-lavender-light rounded-2xl p-10 text-center">
        <CheckCircle className="w-14 h-14 text-coral mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-extrabold mb-3 text-dark">Booking Request Sent!</h3>
        <p className="text-dark/60 text-lg">We&apos;ll confirm your appointment within 24 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full rounded-xl border border-lavender bg-lavender-light/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral/40 transition-all duration-300 text-dark";

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6 border border-lavender/40"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Your Name</label>
          <input required type="text" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Pet Name</label>
          <input required type="text" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Breed</label>
          <input type="text" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Dog Size</label>
          <select required className={inputClass}>
            <option value="">Select size...</option>
            <option>Small (Under 25 lbs)</option>
            <option>Medium (25-50 lbs)</option>
            <option>Large (50+ lbs)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Service</label>
          <select required className={inputClass}>
            <option value="">Select a service...</option>
            <option>Bath &amp; Brush</option>
            <option>Full Groom</option>
            <option>Nail Trim</option>
            <option>De-shedding Treatment</option>
            <option>Puppy&apos;s First Groom</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Preferred Date</label>
          <input required type="date" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-heading font-bold mb-2 text-dark/80">Special Notes</label>
        <textarea rows={3} className={inputClass} placeholder="Anything we should know about your pup?" />
      </div>
      <button type="submit" className="w-full bg-coral text-white font-heading font-bold py-4 rounded-xl hover:bg-coral-dark hover:shadow-lg transition-all duration-300 text-lg">
        Request Appointment
      </button>
    </form>
  );
}
