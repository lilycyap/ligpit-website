// src/pages/Services.jsx
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Icon from "../components/Icon";
import { coreServices, addOnServices } from "../data/services";

const officeRoutineItems = [
  "Shared kitchen / pantry surfaces",
  "Dishwasher loading, unloading, and putting dishes back",
  "Light coffee machine care: used grounds, removable parts, and exterior",
  "Refilling toilet paper, hand towels, kitchen towels, and hand soap when supplies are provided",
];

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

        {/* Office routine support */}
        <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8 mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            Office Clean
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
            Office routine support can be included
          </h2>
          <p className="text-sm text-charcoal/70 leading-relaxed max-w-3xl mb-6">
            For small offices and workspaces, routine support tasks can be
            included when agreed in the scope. This helps keep shared areas
            clean, stocked, and easier to use during the working week.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {officeRoutineItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-cream border border-olive/10 px-4 py-3"
              >
                <Icon
                  name="check"
                  className="h-4 w-4 mt-0.5 text-olive flex-shrink-0"
                />
                <span className="text-sm text-charcoal/75">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-charcoal/50 mt-5">
            The exact office routine depends on access, equipment, supplies,
            office rules, and what is realistic for the session.
          </p>
        </div>

        {/* Add-ons */}
        <div>
          <h2 className="font-serif text-2xl text-charcoal text-center mb-5">
            Optional Add-ons
          </h2>
          <p className="text-center text-sm text-charcoal/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Optional add-ons depend on the service type, scope, and time
            required. Mention any relevant extras when booking so they can be
            reviewed before confirming.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {addOnServices.map((addon) => (
              <div
                key={addon.id}
                className="bg-white rounded-2xl border border-olive/15 px-6 py-5"
              >
                <p className="text-md font-medium text-charcoal">
                  {addon.name}
                </p>
                <p className="text-sm text-charcoal/70 mt-2 leading-snug">
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