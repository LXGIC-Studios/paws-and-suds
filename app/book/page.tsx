"use client";

import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-dark/15 px-4 py-3 text-dark bg-white focus:outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/20 transition-all duration-300 text-sm";

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark mb-4">
          Thank You!
        </h1>
        <p className="text-dark/60">
          We have received your booking request. We will be in touch shortly to
          confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-4xl font-bold text-dark text-center mb-4">
        Book an Appointment
      </h1>
      <p className="text-center text-dark/50 mb-12">
        Fill out the form below and we will confirm your appointment
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-dark/60 mb-1.5">
                  Owner Name
                </label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-dark/60 mb-1.5">
                  Pet Name
                </label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Your pup's name"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-dark/60 mb-1.5">
                  Breed
                </label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="e.g. Golden Retriever"
                />
              </div>
              <div>
                <label className="block text-sm text-dark/60 mb-1.5">
                  Dog Size
                </label>
                <select required className={inputClass}>
                  <option value="">Select size</option>
                  <option>Small (under 25 lbs)</option>
                  <option>Medium (25-50 lbs)</option>
                  <option>Large (50+ lbs)</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-dark/60 mb-1.5">
                  Service
                </label>
                <select required className={inputClass}>
                  <option value="">Select service</option>
                  <option>Bath & Brush</option>
                  <option>Full Groom</option>
                  <option>Nail Trim</option>
                  <option>De-shedding Treatment</option>
                  <option>Puppy&apos;s First Groom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-dark/60 mb-1.5">
                  Preferred Date
                </label>
                <input type="date" required className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-dark/60 mb-1.5">
                Special Notes
              </label>
              <textarea
                rows={4}
                className={inputClass}
                placeholder="Anything we should know about your pup?"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 bg-coral text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Book Now
            </button>
          </form>
        </div>

        <div className="space-y-6 text-sm text-dark/60">
          <div className="flex items-start gap-3">
            <Phone size={16} className="text-coral mt-0.5 shrink-0" />
            <span>(555) PAW-WASH</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-coral mt-0.5 shrink-0" />
            <span>123 Bark Avenue</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={16} className="text-coral mt-0.5 shrink-0" />
            <span>Mon-Sat 8am-6pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
