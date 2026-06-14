// src/pages/ServiceDetail.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import Icon from "../components/Icon";
import { coreServices, addOnServices } from "../data/services";

function ListBlock({ title, items, iconName = "check" }) {
  if (!items) return null;

  return (
    <div className="mb-6">
      <h2 className="font-serif text-xl text-charcoal mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-charcoal/80"
          >
            <Icon
              name={iconName}
              className="h-4 w-4 mt-0.5 text-olive flex-shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const officeRoutineItems = [
  "Shared kitchen / pantry surfaces",
  "Dishwasher loading, unloading, and putting clean dishes back",
  "Light coffee machine care: used grounds, removable parts, and exterior",
  "Refilling toilet paper, hand towels, kitchen towels, and hand soap when supplies are provided",
];

function OfficeRoutineBlock() {
  return (
    <div className="mb-6 rounded-xl bg-cream border border-olive/15 p-5 max-w-4xl">
      <h2 className="font-serif text-xl text-charcoal mb-2">
        Office routine support
      </h2>
      <p className="text-sm text-charcoal/75 leading-relaxed mb-4">
        Office Clean can include routine support for shared areas when agreed
        in the scope. This is useful for small offices and workspaces that need
        regular help keeping kitchens, bathrooms, and supplies manageable.
      </p>

      <ul className="space-y-2">
        {officeRoutineItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-charcoal/80"
          >
            <Icon
              name="check"
              className="h-4 w-4 mt-0.5 text-olive flex-shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-charcoal/50 mt-4">
        The exact routine depends on access, equipment, supplies, office rules,
        and what is realistic for the session. Technical maintenance, repair,
        deep descaling, or buying supplies are not included unless separately
        agreed.
      </p>
    </div>
  );
}

const addOnsByService = {
  "office-clean": [
    "interior-windows",
    "inside-cabinets",
    "extra-organizing-support",
    "fridge",
    "microwave",
  ],
  "light-organizing": [
    "inside-cabinets",
    "laundry-folding",
    "extra-organizing-support",
  ],
};

function getVisibleAddOns(serviceId) {
  const allowedAddOns = addOnsByService[serviceId];

  if (!allowedAddOns) {
    return addOnServices;
  }

  return addOnServices.filter((addon) => allowedAddOns.includes(addon.id));
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = coreServices.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const visibleAddOns = getVisibleAddOns(service.id);

  return (
    <div className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Service tabs */}
        <div className="w-full mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {coreServices.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className={`w-full text-center text-sm sm:text-base px-5 py-3 rounded-2xl border transition-colors ${
                  s.id === service.id
                    ? "bg-olive text-cream border-olive"
                    : "bg-white/60 border-olive/20 text-charcoal/70 hover:border-olive hover:bg-white"
                }`}
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>

        {/* Main service card */}
        <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-10 lg:p-12">
          <div className="h-12 w-12 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-5">
            <Icon name={service.icon} className="h-6 w-6" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal mb-2">
            {service.name}
          </h1>

          <p className="text-gold font-medium mb-6">{service.tagline}</p>

          <p className="text-charcoal/80 leading-relaxed mb-6 max-w-4xl">
            {service.fullDescription}
          </p>

          {/* Home Clean & general: includes / not included */}
          <ListBlock
            title="What's typically included"
            items={service.includes}
          />

          <ListBlock
            title="Not automatically included"
            items={service.notIncluded}
            iconName="check"
          />

          {service.prioritiesNote && (
            <div className="mb-6">
              <h2 className="font-serif text-xl text-charcoal mb-2">
                How priorities are agreed
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-4xl">
                {service.prioritiesNote}
              </p>
            </div>
          )}

          {/* First Reset Clean specifics */}
          <ListBlock title="A good fit for" items={service.goodFitFor} />

          {service.oneSessionNote && (
            <div className="mb-6">
              <h2 className="font-serif text-xl text-charcoal mb-2">
                One session isn't always everything
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-4xl">
                {service.oneSessionNote}
              </p>
            </div>
          )}

          {/* Office Clean specifics */}
          {service.whyQuotedSeparately && (
            <div className="mb-6">
              <h2 className="font-serif text-xl text-charcoal mb-2">
                Why it's quoted separately
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-4xl">
                {service.whyQuotedSeparately}
              </p>
            </div>
          )}

          {service.id === "office-clean" && <OfficeRoutineBlock />}

          <ListBlock
            title="What affects the quote"
            items={service.considerations}
          />

          {/* Light Organizing specifics */}
          <ListBlock
            title="What this includes"
            items={service.whatItIncludes}
          />

          <ListBlock
            title="What this is not"
            items={service.whatItIsNot}
          />

          {service.combinationNote && (
            <div className="mb-6">
              <h2 className="font-serif text-xl text-charcoal mb-2">
                Combine with cleaning
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-4xl">
                {service.combinationNote}
              </p>
            </div>
          )}

          {/* Pricing explanation */}
          <div className="rounded-xl bg-cream border border-olive/15 p-5 mb-8 max-w-4xl">
            <p className="text-sm font-medium text-charcoal mb-1">
              Pricing &amp; estimates
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed mb-2">
              {service.pricingExplanation}
            </p>
            <p className="text-xs text-charcoal/50">{service.priceNote}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-cream px-6 py-2.5 text-sm font-medium hover:bg-olive transition-colors"
            >
              Request Availability
            </Link>

            <a
              href="https://wa.me/4915158845018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-olive text-olive px-6 py-2.5 text-sm font-medium hover:bg-olive hover:text-cream transition-colors"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Request via WhatsApp
            </a>
          </div>
        </div>

        {/* Add-ons */}
        {visibleAddOns.length > 0 && (
          <div className="mt-14">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal text-center mb-4">
              Optional Add-on Services
            </h2>

            <p className="text-center text-sm text-charcoal/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Optional add-ons depend on the service type, scope, and time
              required. Mention any relevant extras when booking so they can be
              reviewed before confirming.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
              {visibleAddOns.map((addon) => (
                <div
                  key={addon.id}
                  className="bg-white rounded-2xl border border-olive/15 px-6 py-5"
                >
                  <p className="text-base font-medium text-charcoal">
                    {addon.name}
                  </p>
                  <p className="text-sm text-charcoal/70 mt-2 leading-snug">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="text-sm font-medium text-olive hover:text-charcoal"
          >
            ← Back to all services
          </Link>
        </div>
      </div>
    </div>
  );
}