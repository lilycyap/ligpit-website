// src/pages/Services.jsx
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Icon from "../components/Icon";
import { coreServices, addOnServices } from "../data/services";

export default function Services() {
  return (
    <div className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            What Ligpit offers
          </p>
          <h1 className="font-serif text-4xl text-charcoal">Services</h1>
          <p className="mt-2 text-charcoal/70">
            Home cleaning, first reset sessions, office cleaning, and light
            organizing — each shaped around your space and priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch mb-16">
          {coreServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Add-ons */}
        <div>
          <h2 className="font-serif text-2xl text-charcoal text-center mb-5">
            Optional Add-ons
          </h2>
          <p className="text-center text-sm text-charcoal/60 mb-6 max-w-xl mx-auto">
            Optional add-ons such as oven, fridge, microwave, windows, balcony,
            inside cabinets, laundry folding, or extra organizing are
            estimated separately depending on the task and time required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOnServices.map((addon) => (
              <div
                key={addon.id}
                className="bg-white rounded-xl border border-olive/15 p-4"
              >
                <p className="font-medium text-charcoal">{addon.name}</p>
                <p className="text-sm text-charcoal/70 mt-1">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
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
