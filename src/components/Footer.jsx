import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 section-padding">
      <div className="container-site">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wide">
              Ligpit
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Calm, practical, and respectful home decluttering and organizing support in Berlin.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@ligpit.com" className="hover:text-white transition-colors">
                  hello@ligpit.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>Berlin, Germany</li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Follow & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/ligpit.berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Ligpit. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://calendly.com/ligpit/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Book a Call
            </a>
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
