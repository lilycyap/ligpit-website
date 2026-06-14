// src/pages/Home.jsx
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import TrustSection from "../components/TrustSection";
import Icon from "../components/Icon";
import { coreServices, pricingInfo } from "../data/services";

// ── Hero illustration ────────────────────────────────────────────────
// Decorative SVG only — aria-hidden, no role attribute.
// Depicts an organized home corner: shelf, folded linens, plant,
// cleaning caddy, botanical frame. Muted brand palette.
// Opacity values slightly increased from previous version for
// better visual presence while remaining soft.
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm md:max-w-md xl:max-w-lg mx-auto"
    >
      {/* Background card */}
      <rect x="16" y="16" width="288" height="248" rx="20" fill="#F0EDE8" />

      {/* Shelf line */}
      <rect x="36" y="186" width="248" height="2" rx="1.25" fill="#6F7A63" fillOpacity="0.3" />

      {/* Books / items on shelf */}
      <rect x="48" y="138" width="22" height="48" rx="3" fill="#6F7A63" fillOpacity="0.52" />
      <rect x="74" y="150" width="14" height="36" rx="3" fill="#B8965A" fillOpacity="0.44" />
      <rect x="92" y="132" width="26" height="54" rx="3" fill="#6F7A63" fillOpacity="0.33" />
      <rect x="122" y="157" width="17" height="29" rx="3" fill="#B8965A" fillOpacity="0.36" />

      {/* Folded linens / towels — stacked */}
      <rect x="158" y="165" width="56" height="14" rx="5" fill="#FFFFFF" stroke="#6F7A63" strokeWidth="1.2" strokeOpacity="0.55" />
      <rect x="162" y="153" width="50" height="14" rx="4" fill="#FFFFFF" stroke="#6F7A63" strokeWidth="1.2" strokeOpacity="0.42" />
      <rect x="166" y="143" width="44" height="12" rx="4" fill="#FFFFFF" stroke="#6F7A63" strokeWidth="1" strokeOpacity="0.3" />

      {/* Small plant */}
      <rect x="236" y="164" width="28" height="22" rx="3" fill="#6F7A63" fillOpacity="0.25" />
      <ellipse cx="250" cy="164" rx="14" ry="4.5" fill="#6F7A63" fillOpacity="0.3" />
      {/* Leaves */}
      <path d="M250 160 C253 147 263 140 266 133" stroke="#6F7A63" strokeWidth="1.75" strokeLinecap="round" strokeOpacity="0.52" />
      <path d="M250 154 C246 142 236 137 233 130" stroke="#6F7A63" strokeWidth="1.75" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M250 162 C255 152 259 145 257 137" stroke="#6F7A63" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.32" />

      {/* Cleaning caddy / basket */}
      <rect x="50" y="72" width="44" height="36" rx="8" stroke="#B8965A" strokeWidth="1.5" strokeOpacity="0.45" />
      <path d="M60 72 C60 63 88 63 88 72" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.45" />
      {/* Brushes / bottles in caddy */}
      <line x1="65" y1="82" x2="65" y2="105" stroke="#6F7A63" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.36" />
      <line x1="74" y1="79" x2="74" y2="105" stroke="#B8965A" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.42" />
      <line x1="83" y1="82" x2="83" y2="105" stroke="#6F7A63" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />

      {/* Botanical framed print on wall */}
      <rect x="176" y="62" width="90" height="62" rx="6" fill="#FAF7F2" stroke="#6F7A63" strokeWidth="1.25" strokeOpacity="0.28" />
      <path d="M221 118 C221 104 228 93 226 80" stroke="#6F7A63" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.38" />
      <path d="M221 111 C215 100 206 97 204 89" stroke="#6F7A63" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.32" />
      <path d="M221 108 C228 98 235 96 237 88" stroke="#6F7A63" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.26" />
      <path d="M221 114 C218 106 213 101 210 94" stroke="#6F7A63" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.22" />

      {/* Small decorative gold dots */}
      <circle cx="145" cy="92" r="4.5" fill="#B8965A" fillOpacity="0.25" />
      <circle cx="158" cy="85" r="3" fill="#6F7A63" fillOpacity="0.25" />
      <circle cx="168" cy="93" r="3.5" fill="#B8965A" fillOpacity="0.2" />
    </svg>
  );
}

// ── Trust strip items ────────────────────────────────────────────────
const trustStrip = [
  "Personal estimate",
  "Clear priorities",
  "Photos only with permission",
  "Berlin homes & workspaces",
];

// ── Feedback notes ───────────────────────────────────────────────────
const feedbackNotes = [
  "2 post-session feedback forms received",
  "Both clients said they would consider booking Ligpit again",
  "Clients highlighted clear communication, cleaning support, organizing/resetting, attention to detail, and practical help with decisions",
];

export default function Home() {
  return (
    <div>
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10 sm:pb-14">

          {/* Two-column grid: text left, illustration right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.85fr] items-center gap-8 lg:gap-6 xl:gap-8">

            {/* Left column: label, headline, subheadline, CTA buttons */}
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4">
                Berlin · Cleaning &amp; Light Organizing
              </p>
              <h1 className="font-serif text-5xl sm:text-5xl lg:text-6xl xl:text-8xl text-charcoal leading-[0.95]">
                <span className="block">Restore Order.</span>
                <span className="block">Reclaim Calm.</span>
              </h1>
              <p className="mt-6 text-lg text-charcoal/80 max-w-xl leading-relaxed">
                Practical home and office cleaning support in Berlin — with
                light organizing for calmer, more functional spaces.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
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

            {/* Right column: illustration (desktop only) */}
            <div className="hidden lg:block">
              <HeroIllustration />
            </div>

            {/* Illustration on mobile — smaller, slightly transparent */}
            <div className="lg:hidden w-full max-w-[260px] mx-auto opacity-80">
              <HeroIllustration />
            </div>
          </div>

          {/* Trust strip — full width, sits below both text and illustration */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {trustStrip.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-2xl bg-white/70 border border-olive/15 px-4 py-3 text-sm text-charcoal/70 shadow-sm"
              >
                <Icon name="check" className="h-4 w-4 text-olive flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-olive/10" />
      </div>

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
          EARLY CLIENT FEEDBACK
          ============================================================ */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
              FROM FIRST CLIENTS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Early Feedback
            </h2>
            <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
              Ligpit is still a young service, but early client feedback has
              been encouraging. Feedback is collected after sessions to
              understand what worked well and how the service can improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quote card */}
            <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8 flex flex-col">
              <p className="text-charcoal/80 leading-relaxed italic flex-1">
                &ldquo;Lily&apos;s communication was incredible. She did
                everything she said she&apos;d do and more. I trusted her
                immediately and left her alone in my apartment. Can&apos;t
                wait for next visit.&rdquo;
              </p>
              <p className="text-sm font-medium text-charcoal mt-6">
                — Georgia, home cleaning client
              </p>
            </div>

            {/* Feedback summary card */}
            <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8">
              <h3 className="font-serif text-lg text-charcoal mb-4">
                Early feedback notes
              </h3>
              <ul className="space-y-2.5">
                {feedbackNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2.5 text-sm text-charcoal/80"
                  >
                    <Icon
                      name="check"
                      className="h-4 w-4 mt-0.5 text-olive flex-shrink-0"
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              </div>
          </div>
		 <p className="md:col-span-2 text-s text-charcoal/50 text-center mt-6">
    Shared only with client permission.
  </p>      
	</div>
      </section>

      {/* ============================================================
          FINAL CTA SECTION
          ============================================================ */}
      <section className="bg-olive">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream">
            Want to know if Ligpit is a fit for your space?
          </h2>
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
