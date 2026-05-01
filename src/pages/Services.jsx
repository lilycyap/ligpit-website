import { ServiceCard } from '../components/Components'
import { PageHeader } from '../components/Components'
import { coreServices, addOnServices } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Practical, respectful support for every room and every stage of your decluttering journey."
      />

      {/* Core Services */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-olive font-medium text-sm tracking-widest uppercase mb-3">Core Services</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">What We Offer</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-olive font-medium text-sm tracking-widest uppercase mb-3">Extras</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Add-On Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon) => (
              <div key={addon.id} className="bg-beige p-6 rounded-sm">
                <h3 className="font-serif text-xl mb-2">{addon.title}</h3>
                <p className="text-charcoal/70 text-sm mb-3 leading-relaxed">{addon.desc}</p>
                <p className="text-gold font-medium text-sm">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-olive text-white text-center">
        <div className="container-site">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Not sure where to start?</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Book a free discovery call and we will figure out the best plan for your space and budget.
          </p>
          <a
            href="https://calendly.com/ligpit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </>
  )
}
