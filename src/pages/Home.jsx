// src/pages/Home.jsx
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import TrustSection from "../components/TrustSection";
import Icon from "../components/Icon";
import { coreServices, pricingInfo } from "../data/services";

export default function Home() {
  return (
    <div>
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4">
            Berlin · Cleaning & Light Organizing
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight max-w-3xl mx-auto">
            Restore Order. Reclaim Calm.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Practical home and office cleaning support in Berlin — with
            light organizing for calmer, more functional spaces.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </section>

      {/* ============================================================
          SERVICES PREVIEW
          ============================================================ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              How Ligpit can help
            </h2>
            <p className="mt-2 text-charcoal/70">
              From a first reset to ongoing home or office cleaning, plus
              light organizing for calmer everyday spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="text-sm font-medium text-olive hover:text-charcoal"
            >
              See all services and add-ons →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICING & ESTIMATES TEASER
          ============================================================ */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Pricing &amp; Estimates
            </h2>
            <p className="mt-3 text-charcoal/70">
              Every space is different. Ligpit reviews your request first so
              the service can match your actual needs, priorities, and time
              required. You will receive a clear estimate before confirming
              your booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-olive/15 p-6">
              <p className="text-xs text-gold font-semibold mb-2">
                {pricingInfo.homeClean.badge}
              </p>
              <h3 className="font-serif text-xl text-charcoal mb-2">
                {pricingInfo.homeClean.label}
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                {pricingInfo.homeClean.text}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-olive/15 p-6">
              <p className="text-xs text-gold font-semibold mb-2">
                {pricingInfo.officeClean.badge}
              </p>
              <h3 className="font-serif text-xl text-charcoal mb-2">
                {pricingInfo.officeClean.label}
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                {pricingInfo.officeClean.text}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-olive/15 p-6">
              <p className="text-xs text-gold font-semibold mb-2">
                {pricingInfo.addOns.badge}
              </p>
              <h3 className="font-serif text-xl text-charcoal mb-2">
                {pricingInfo.addOns.label}
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                {pricingInfo.addOns.text}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/pricing"
              className="text-sm font-medium text-olive hover:text-charcoal"
            >
              More about Pricing &amp; Estimates →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST SECTION
          ============================================================ */}
      <TrustSection />

      {/* ============================================================
          FINAL CTA SECTION
          ============================================================ */}
      <section className="bg-olive">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream">
            Ready for a calmer space?
          </h2>
          <p className="mt-3 text-cream/85 max-w-xl mx-auto">
            Tell Lily a little about your home, office, or workspace.
            Booking is not instant — every inquiry gets a personal reply
            with a clear estimate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cream text-charcoal px-8 py-3 text-sm font-medium hover:bg-gold hover:text-charcoal transition-colors"
            >
              Request Availability
            </Link>
            <a
              href="https://wa.me/4915158845018"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-cream text-cream px-8 py-3 text-sm font-medium hover:bg-cream hover:text-charcoal transition-colors"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Request via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
