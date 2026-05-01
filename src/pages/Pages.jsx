import { useState } from 'react'
import { PageHeader, FAQItem } from '../components/Components'
import { faqs } from '../data/faqs'

// ── How It Works ─────────────────────────────────────────────────────────
export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Discovery Call',
      desc: 'A free 20-minute call where we learn about your space, your goals, and what feels overwhelming. No commitment — just a conversation.',
      detail: 'We will ask about the rooms you want to tackle, your timeline, and any specific challenges. This helps us prepare and give you an accurate quote.',
    },
    {
      step: '02',
      title: 'Session Planning',
      desc: 'We create a tailored plan for your sessions — which rooms, in what order, and what supplies we will bring.',
      detail: 'Every home is different. We might recommend starting with the room that stresses you most, or the one that will give you the quickest win.',
    },
    {
      step: '03',
      title: 'Decluttering Session',
      desc: 'We work alongside you, guiding decisions and doing the heavy lifting. You stay in control of every keep-or-let-go choice.',
      detail: 'Sessions are typically 3–4 hours. We bring bags, labels, and a calm, non-judgmental approach. We sort into keep, donate, recycle, and discard.',
    },
    {
      step: '04',
      title: 'Organizing & Systems',
      desc: 'Once the clutter is gone, we set up storage systems and routines that fit how you actually live.',
      detail: 'This is where the magic happens. Everything gets a home. We label, containerize, and create habits that keep your space feeling good long-term.',
    },
    {
      step: '05',
      title: 'Follow-Up',
      desc: 'Two to four weeks later, we check in to see how the systems are holding up and fine-tune anything that needs adjusting.',
      detail: 'This follow-up is included in our packages, or available as an add-on. It is the secret to making changes that actually stick.',
    },
  ]

  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="A clear, supportive process from first call to lasting results."
      />
      <section className="section-padding bg-beige">
        <div className="container-site max-w-3xl">
          <div className="space-y-16">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-8">
                <div className="flex-shrink-0">
                  <span className="text-gold font-serif text-5xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-charcoal/50 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a
              href="https://calendly.com/ligpit/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Free Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── About ───────────────────────────────────────────────────────────────
export function About() {
  return (
    <>
      <PageHeader
        title="About Ligpit"
        subtitle="The story behind your Berlin organizing support."
      />
      <section className="section-padding bg-beige">
        <div className="container-site max-w-3xl">
          <div className="space-y-8 text-charcoal/80 leading-relaxed">
            <p className="text-lg">
              Ligpit was born from a simple observation: moving to a new country is hard enough —
              your home should not add to the stress.
            </p>
            <p>
              Founded in Berlin, we specialize in helping expats, professionals, and busy households
              create calm, functional living spaces. We understand the unique challenges of setting
              up home in a new city — from smaller apartments to different storage norms — and we
              bring a practical, culturally sensitive approach to every project.
            </p>
            <p>
              Our philosophy is simple: less clutter, more calm. We believe that an organized home
              is not about perfection or minimalism — it is about creating a space that supports
              the life you actually live.
            </p>
            <p>
              We work alongside you, never without you. Every decision is yours. We bring the
              guidance, the systems, and the heavy lifting — you bring the vision of how you want
              your home to feel.
            </p>
          </div>

          <div className="mt-16 bg-white p-8 rounded-sm">
            <h3 className="font-serif text-2xl mb-6">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Respect', desc: 'We never judge your stuff. We help you make decisions that feel right.' },
                { title: 'Practicality', desc: 'Beautiful systems that do not work in real life are not solutions. We design for how you actually live.' },
                { title: 'Sustainability', desc: 'We prioritize donating and recycling over discarding. Less waste, more care.' },
                { title: 'Calm', desc: 'The process should feel as good as the result. We bring patience and warmth to every session.' },
              ].map((value) => (
                <div key={value.title}>
                  <h4 className="font-serif text-lg text-olive mb-2">{value.title}</h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── FAQ ─────────────────────────────────────────────────────────────────
export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <PageHeader
        title="FAQ"
        subtitle="Answers to the questions we hear most."
      />
      <section className="section-padding bg-beige">
        <div className="container-site max-w-2xl">
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-charcoal/70 mb-4">Still have questions?</p>
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Contact ─────────────────────────────────────────────────────────────
export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Get in touch — we would love to hear from you."
      />
      <section className="section-padding bg-beige">
        <div className="container-site max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
              {submitted ? (
                <div className="bg-olive/10 p-8 rounded-sm text-center">
                  <h4 className="font-serif text-xl text-olive mb-2">Thank you!</h4>
                  <p className="text-charcoal/70">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm focus:outline-none focus:border-olive transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm focus:outline-none focus:border-olive transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm focus:outline-none focus:border-olive transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-2xl mb-6">Other Ways to Reach Us</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:hello@ligpit.com" className="text-olive hover:text-olive-dark transition-colors">
                    hello@ligpit.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/491234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive hover:text-olive-dark transition-colors"
                  >
                    Send a WhatsApp Message
                  </a>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Book a Call</h4>
                  <a
                    href="https://calendly.com/ligpit/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive hover:text-olive-dark transition-colors"
                  >
                    Schedule a Free Discovery Call
                  </a>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-charcoal/70">Berlin, Germany</p>
                  <p className="text-charcoal/50 text-sm">Serving all neighborhoods within the S-Bahn ring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
