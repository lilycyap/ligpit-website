// src/components/Footer.jsx
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl mb-2">Ligpit</h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Restore Order. Reclaim Calm.
              <br />
              Practical home and office cleaning support in Berlin, with
              light organizing for calmer, more functional spaces.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link to="/services" className="hover:text-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gold">
                  Pricing &amp; Estimates
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-gold">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  href="https://wa.me/4915158845018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Request via WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ligpit.com"
                  className="hover:text-gold"
                >
                  hello@ligpit.com
                </a>
              </li>
              <li>Berlin, Germany</li>
            </ul>

            {/* Social links — simple external links only, no embeds */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/ligpit.berlin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ligpit on Instagram"
                className="text-cream/70 hover:text-gold transition-colors"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ligpit.berlin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ligpit on Facebook"
                className="text-cream/70 hover:text-gold transition-colors"
              >
                <Icon name="facebook" className="h-5 w-5" />
              </a>
            </div>

            <ul className="space-y-2 text-sm text-cream/80 mt-4">
              <li>
                <Link to="/legal/impressum" className="hover:text-gold">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="hover:text-gold">
                  Datenschutz / Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Ligpit. All rights reserved.</span>
          <span>Restore Order. Reclaim Calm.</span>
        </div>
      </div>
    </footer>
  );
}
