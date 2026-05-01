import { Link } from 'react-router-dom'
import { ServiceCard, TestimonialCard } from '../components/Components'
import { coreServices } from '../data/services'

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center bg-beige relative overflow-hidden">
        <div className="container-site py-30 md:py-0">
          <div className="max-w-2xl">
            <p className="text-olive font-medium text-sm tracking-widest uppercase mb-4 animate-fade-up">
              Home Decluttering & Organizing
            </p>
            <h1 className="text-display-sm md:text-display text-charcoal mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Less clutter.<br />More calm.
            </h1>
            <p className="text-lg text-charcoal/70 mb-8 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              Practical, judgment-free support to help you reclaim your space — and your peace of mind. Based in Berlin, for expats, professionals, and busy households.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <a
                href="https://calendly.com/ligpit/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Free Call
              </a>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-olive/5 rounded-l-3xl" />
      </section>

      {/* ── Services Preview ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-olive font-medium text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works Preview ──────────────────────────────────────── */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-olive font-medium text-sm tracking-widest uppercase mb-3">Simple Process</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">How It Works</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Discovery Call', desc: 'A free 20-minute call to understand your space, goals, and timeline.' },
              { step: '02', title: 'Session', desc: 'We work alongside you — decluttering, organizing, and setting up systems that last.' },
              { step: '03', title: 'Enjoy Your Space', desc: 'Walk into a home that feels lighter, calmer, and works the way you need it to.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-gold font-serif text-5xl">{item.step}</span>
                <h3 className="font-serif text-2xl mt-4 mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-olive font-medium text-sm tracking-widest uppercase mb-3">Kind Words</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">What Clients Say</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="I was overwhelmed just thinking about starting. Ligpit made the whole process feel manageable — and even enjoyable. My apartment finally feels like mine again."
              name="Sarah M."
              role="Expat, Kreuzberg"
            />
            <TestimonialCard
              quote="After moving twice in two years, our place was boxes on boxes. They helped us unpack and organize in one weekend. Absolute lifesavers."
              name="Tom & Lena K."
              role="Family, Prenzlauer Berg"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-site text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to feel lighter?</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8 leading-relaxed">
            Book a free discovery call and let us talk about how we can help you reclaim your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/ligpit/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book a Free Call
            </a>
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white/30 text-white hover:bg-white hover:text-charcoal"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
