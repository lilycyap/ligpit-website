// src/pages/About.jsx
import { Link } from "react-router-dom";
import TrustSection from "../components/TrustSection";
import Icon from "../components/Icon";

export default function About() {
  return (
    <div className="bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            About Ligpit
          </p>
          <h1 className="font-serif text-4xl text-charcoal">
            A personal service for cleaner, calmer spaces
          </h1>
        </div>

        <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch mb-12">
            {/* Photo — taller, left on desktop, above text on mobile */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border border-olive/20 h-64 sm:h-80 md:h-full">
                <img
                  src="/lily.png"
                  alt="Lily, founder of Ligpit"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-s text-charcoal/40 mt-2 text-center md:text-left">
                Lily Yap, founder of Ligpit
              </p>
            </div>

            {/* Text */}
            <div className="md:w-4/5 flex flex-col justify-center">
              <h2 className="font-serif text-2xl text-charcoal mb-3">
                Hi, I'm Lily.
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                Ligpit is a personal cleaning and home reset service in Berlin.
                The word "Ligpit" comes from Tagalog word and can mean to tidy up,
                put things away, clear away, or restore order.
              </p>  
              <p className="text-charcoal/80 leading-relaxed mt-3">
  		I started Ligpit because I know how quickly a space can become
  		overwhelming when life is full — work, family, moving, health,
 		or simply not having enough time. Sometimes what people need is
  		not judgment or pressure, but calm, practical help.
	      </p>
              <p className="text-charcoal/80 leading-relaxed mt-3">
                For this service, Ligpit means helping your home, office,
                or workspace feel cleaner, calmer, and easier to manage —
                one space at a time.
              </p>
            </div>
          </div>

          <div className="border-t border-olive/15 mt-8 pt-6">
            <h3 className="font-serif text-xl text-charcoal mb-2">
              Why Ligpit feels different
            </h3>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              There is no call center, no rotating staff, and no one-size-fits-all
              checklist. Ligpit follows a clear method, but every session is shaped around your space, your priorities, and what can realistically be done in the time available. The goal is not a perfect show home. It is a space that feels cleaner, calmer, and easier to live or work in.
            </p>
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

      <TrustSection />
    </div>
  );
}
