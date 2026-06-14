// src/pages/HowItWorks.jsx
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const steps = [
  {
    title: "Send an inquiry",
    description:
      "Reach out via WhatsApp or the contact form with a few details: your space, what you'd like help with, and your preferred timing.",
  },
  {
    title: "Agree on priorities & scope",
    description:
      "Lily will follow up to confirm scope, priorities, and an estimated time — so you know what to expect before anything is booked.",
  },
  {
    title: "Booking is confirmed",
    description:
      "Once the details are agreed, your session is scheduled. Booking isn't instant yet — every inquiry gets a personal reply.",
  },
  {
    title: "Session day",
    description:
      "Lily arrives and works through the agreed priorities first. If your space needs more time than expected, you'll be told honestly during the session.",
  },
  {
    title: "Pay after the session",
    description:
      "Payment is made after the work is done, by cash or bank transfer.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            Simple &amp; personal
          </p>
          <h1 className="font-serif text-4xl text-charcoal">How It Works</h1>
          <p className="mt-3 text-charcoal/70 max-w-xl mx-auto">
            No apps, no automated booking systems — just a direct
            conversation with Lily.
          </p>
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="bg-white rounded-2xl border border-olive/15 p-6 flex gap-4"
            >
              <div className="flex-shrink-0 h-9 w-9 rounded-full bg-olive text-cream flex items-center justify-center font-serif text-lg">
                {index + 1}
              </div>
              <div>
                <h2 className="font-serif text-xl text-charcoal mb-1">
                  {step.title}
                </h2>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-cream px-8 py-3 text-sm font-medium hover:bg-olive transition-colors"
          >
            Request Availability
          </Link>
          <a
            href="https://wa.me/4915158845018"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-olive text-olive px-8 py-3 text-sm font-medium hover:bg-olive hover:text-cream transition-colors"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Request via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
