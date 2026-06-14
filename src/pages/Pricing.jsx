// src/pages/Pricing.jsx
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { pricingInfo } from "../data/services";

export default function Pricing() {
  return (
    <div className="bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            Clear &amp; honest
          </p>
          <h1 className="font-serif text-4xl text-charcoal">
            Pricing &amp; Estimates
          </h1>
          <p className="mt-3 text-charcoal/70 max-w-xl mx-auto">
            Every space is different. Ligpit reviews your request first so
            the service can match your actual needs, priorities, and time
            required. You will receive a clear estimate before confirming
            your booking.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="font-serif text-2xl text-charcoal">
                {pricingInfo.homeClean.label}
              </h2>
              <span className="text-sm font-semibold text-gold">
                {pricingInfo.homeClean.badge}
              </span>
            </div>
            <p className="text-charcoal/80">{pricingInfo.homeClean.text}</p>
          </div>

          <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="font-serif text-2xl text-charcoal">
                {pricingInfo.officeClean.label}
              </h2>
              <span className="text-sm font-semibold text-gold">
                {pricingInfo.officeClean.badge}
              </span>
            </div>
            <p className="text-charcoal/80">{pricingInfo.officeClean.text}</p>
          </div>

          <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="font-serif text-2xl text-charcoal">
                {pricingInfo.addOns.label}
              </h2>
              <span className="text-sm font-semibold text-gold">
                {pricingInfo.addOns.badge}
              </span>
            </div>
            <p className="text-charcoal/80">{pricingInfo.addOns.text}</p>
          </div>
        </div>

        <div className="mt-10 bg-olive/10 border border-olive/20 rounded-2xl p-6 text-sm text-charcoal/80 leading-relaxed">
          <p>
            <strong>A note on time and priorities:</strong> priorities are
            always agreed together before a session starts. If your space
            needs more time than expected, Lily will tell you honestly
            during the session, so you can decide together how to proceed —
            no surprise charges, ever.
          </p>
        </div>

        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
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
