import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  return (
    <>
      <section className="bg-lavender-light py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Schedule a Visit</p>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-5">Book an Appointment</h1>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your pup&apos;s spa day!
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <BookingForm />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-7 shadow-md border border-lavender/40">
              <h3 className="font-heading text-xl font-bold mb-3">📍 Visit Us</h3>
              <p className="text-dark/60 leading-relaxed">
                123 Bark Avenue<br />
                Pawsville, TX 75001
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-md border border-lavender/40">
              <h3 className="font-heading text-xl font-bold mb-3">📞 Call Us</h3>
              <p className="text-dark/60">
                (555) PAW-WASH<br />
                (555) 729-9274
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-md border border-lavender/40">
              <h3 className="font-heading text-xl font-bold mb-3">🕐 Hours</h3>
              <div className="text-dark/60 space-y-1.5">
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="bg-yellow-pop/10 rounded-2xl p-7 border border-yellow-pop/30">
              <h3 className="font-heading text-lg font-bold mb-2">🐾 First Visit?</h3>
              <p className="text-dark/60 text-sm leading-relaxed">
                Please arrive 10 minutes early for your first visit so we can get to know you and your pup!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
