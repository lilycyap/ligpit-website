import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, FAQItem, GoldRow } from '../components/Components'
import { faqs } from '../data/faqs'

const serif = "'Cormorant Garamond', Georgia, serif"
const sans  = "'Montserrat', sans-serif"
const DARK  = '#2B2B2B'; const GREY = '#555550'; const MID = '#888880'
const GOLD  = '#B8965A'; const OLIVE = '#6F7A63'; const BEIGE = '#F2EFEA'
const WHITE = '#ffffff'; const BORD = '#E8E4DC'

// ── HOW IT WORKS ──────────────────────────────────────────────────────────
const steps = [
  { n:1, title:'Inquiry',             summary:'Get in touch',         body:'Contact Ligpit by website, email, Instagram DM, or WhatsApp. A response arrives within 24 hours.' },
  { n:2, title:'Discovery Session',   summary:'60 minutes',           body:'A calm walkthrough of your home. We understand your space, goals, and pace. No pressure, no judgment.' },
  { n:3, title:'Quote and Plan',      summary:'Within 2 business days',body:'A clear written quote and recommended service plan. Everything is transparent before you commit.' },
  { n:4, title:'Booking Confirmation',summary:'Deposit secures slot', body:'Confirm the session. Receive session prep instructions. Your slot is confirmed in the calendar.' },
  { n:5, title:'Session Day',         summary:'The work begins',      body:'Ligpit arrives prepared. Work begins with one clear priority zone. You decide every item.' },
  { n:6, title:'Handover',            summary:'The system is yours',  body:'Every organized area is walked through. Your new system is explained. Maintenance habits introduced.' },
  { n:7, title:'Follow-Up',           summary:'7-day check-in',       body:'A 7-day follow-up message is sent after every session. A 30-minute check-in call is available as an add-on.' },
]

export function HowItWorks() {
  return (
    <>
      <PageHeader overline="The Process" title="Clear from first contact to lasting calm" subtitle="Every step is designed to feel manageable and respectful. No surprises." />

      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site">
          <div style={{ maxWidth:'760px', margin:'0 auto' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display:'flex', gap:'3.5rem', marginBottom:'3.5rem', alignItems:'flex-start' }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                  <span style={{ fontFamily:serif, fontSize:'3.5rem', color:GOLD, lineHeight:1, fontWeight:300 }}>
                    {String(s.n).padStart(2,'0')}
                  </span>
                  {i < steps.length-1 && <div style={{ width:'1px', flex:1, background:BORD, minHeight:'40px', marginTop:'0.75rem' }} />}
                </div>
                <div style={{ paddingBottom:'2.4rem', borderBottom:`1px solid ${i < steps.length-1 ? 'transparent' : BORD}`, flex:1 }}>
                  <p className="t-over" style={{ marginBottom:'0.5rem' }}>{s.summary}</p>
                  <h3 style={{ fontFamily:serif, fontSize:'2.1rem', fontWeight:400, color:DARK, marginBottom:'0.75rem', lineHeight:1.1 }}>{s.title}</h3>
                  <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.8, color:GREY, maxWidth:'500px' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:DARK, padding:'5rem 0', textAlign:'center' }}>
        <div className="container-site">
          <h2 className="t-heading" style={{ color:'#fff', marginBottom:'2.4rem' }}>Begin with a Discovery Session</h2>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem' }}>
            <Link to="/contact" className="btn btn-gold">Request a Quote</Link>
            <a href="https://calendly.com/ligpit/discovery" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Book Online</a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── ABOUT ─────────────────────────────────────────────────────────────────
export function About() {
  return (
    <>
      <PageHeader overline="About Ligpit" title="A service built on structure, care, and respect" subtitle="Ligpit was created to help people restore order in their homes through practical support and calm decision-making." />

      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'5rem', alignItems:'start' }}>
            <div>
              <GoldRow />
              <p className="t-over" style={{ marginBottom:'1rem' }}>The Name</p>
              <h2 className="t-heading" style={{ marginBottom:'2.4rem' }}>
                What does <em style={{ fontWeight:300 }}>Ligpit</em> mean?
              </h2>
              <p style={{ fontFamily:sans, fontSize:'1.5rem', lineHeight:1.8, color:GREY, marginBottom:'1.45rem' }}>
                Ligpit is a Tagalog word meaning "to clear" or "to put in order." It captures both the physical and the emotional work of bringing a home into a state that supports the life you want to live.
              </p>
              <p style={{ fontFamily:sans, fontSize:'1.5rem', lineHeight:1.8, color:GREY }}>
                The name reflects a simple belief: that order is not a luxury, and that a calmer home is available to anyone.
              </p>
            </div>

            <div style={{ background:WHITE, border:`1px solid ${BORD}`, padding:'3.5rem' }}>
              <span className="gold-sq" style={{ display:'block', marginBottom:'2.4rem' }} />
              <p style={{ fontFamily:serif, fontSize:'1.85rem', fontStyle:'italic', color:DARK, lineHeight:1.5, fontWeight:300, marginBottom:'2.4rem' }}>
                "I believe a home should support the life you are trying to build. Ligpit is not about perfection or shame. It is about making your space easier to live in, easier to maintain, and more aligned with what matters now."
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <span className="gold-line" />
                <p style={{ fontFamily:sans, fontSize:'0.82rem', letterSpacing:'0.14em', textTransform:'uppercase', fontWeight:500, color:MID }}>
                  Lily Yap · Founder, Ligpit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background:WHITE }}>
        <div className="container-site">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <GoldRow center />
            <h2 className="t-heading">How every session is delivered</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'2.4rem', maxWidth:'800px', margin:'0 auto' }}>
            {[
              ['Respectfully', 'Every home is met without judgment. The session starts from where things are, not where they should be.'],
              ['Collaboratively', 'Every decision belongs to the client. Ligpit guides — never decides, never pressures.'],
              ['Practically', 'The goal is a system that works for your actual life. Maintainable, real, and lasting.'],
            ].map(([t, b]) => (
              <div key={t} style={{ textAlign:'center' }}>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'8px', marginBottom:'1.45rem' }}>
                  <span className="gold-line" /><span className="gold-sq" /><span className="gold-line" />
                </div>
                <h3 style={{ fontFamily:serif, fontSize:'2.4rem', fontWeight:400, color:DARK, marginBottom:'0.75rem' }}>{t}</h3>
                <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.7, color:GREY }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:BEIGE, padding:'4rem 0', textAlign:'center' }}>
        <div className="container-site">
          <h2 className="t-heading" style={{ marginBottom:'2.4rem' }}>Start with a conversation</h2>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem' }}>
            <Link to="/contact" className="btn btn-olive">Request a Quote</Link>
            <Link to="/services" className="btn btn-dark">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ── FAQ ────────────────────────────────────────────────────────────────────
export function FAQ() {
  return (
    <>
      <PageHeader overline="Common Questions" title="Answers before you reach out" subtitle="Questions not listed here? Email hello@ligpit.de" />

      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site" style={{ maxWidth:'760px', margin:'0 auto' }}>
          <GoldRow />
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} defaultOpen={i===0} />)}
        </div>
      </section>

      <section style={{ background:DARK, padding:'4rem 0', textAlign:'center' }}>
        <div className="container-site">
          <h2 className="t-heading" style={{ color:'#fff', marginBottom:'1rem' }}>Still have a question?</h2>
          <p style={{ fontFamily:sans, fontSize:'1.05rem', color:MID, marginBottom:'2.4rem' }}>A response will arrive within 24 hours.</p>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem' }}>
            <Link to="/contact" className="btn btn-gold">Contact Ligpit</Link>
            <a href="mailto:hello@ligpit.de" style={{ fontFamily:sans, fontSize:'0.95rem', color:MID, display:'flex', alignItems:'center', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e=>e.target.style.color=GOLD} onMouseLeave={e=>e.target.style.color=MID}>
              hello@ligpit.de
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── CONTACT ────────────────────────────────────────────────────────────────
export function Contact() {
  return (
    <>
      <PageHeader overline="Get in Touch" title="Start the conversation" subtitle="Contact Ligpit to request a quote, ask a question, or book a Discovery Session." />

      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'4rem' }}>

            {/* Left */}
            <div>
              <GoldRow />
              <p className="t-over" style={{ marginBottom:'1rem' }}>Contact Details</p>

              {[
                { label:'Email',     content:<a href="mailto:hello@ligpit.de" style={{ fontFamily:sans, fontSize:'1.5rem', color:DARK, textDecoration:'none' }}>hello@ligpit.de</a> },
                { label:'Instagram', content:<a href="https://instagram.com/ligpit.berlin" target="_blank" rel="noopener noreferrer" style={{ fontFamily:sans, fontSize:'1.5rem', color:DARK, textDecoration:'none' }}>@ligpit.berlin</a> },
                { label:'WhatsApp',  content:<a href="https://wa.me/4915158845018" target="_blank" rel="noopener noreferrer" style={{ fontFamily:sans, fontSize:'1.5rem', color:DARK, textDecoration:'none' }}>Send a WhatsApp message</a> }, // Replace number
              ].map(({ label, content }) => (
                <div key={label} style={{ marginBottom:'2.4rem' }}>
                  <p style={{ fontFamily:sans, fontSize:'0.8rem', letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:500, color:MID, marginBottom:'0.4rem' }}>{label}</p>
                  {content}
                </div>
              ))}

              <div style={{ background:DARK, padding:'2.4rem', marginTop:'2.4rem' }}>
                <p style={{ fontFamily:sans, fontSize:'0.8rem', letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:500, color:GOLD, marginBottom:'0.75rem' }}>
                  Book Online
                </p>
                <p style={{ fontFamily:sans, fontSize:'1rem', color:MID, marginBottom:'1.45rem', lineHeight:1.7 }}>
                  Book a Discovery Session directly via the online calendar.
                </p>
                {/* Replace with real Calendly link */}
                <a href="https://calendly.com/ligpit/discovery" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ display:'block', textAlign:'center' }}>
                  Book Discovery Session
                </a>
              </div>
            </div>

            {/* Form */}
            <div style={{ background:WHITE, border:`1px solid ${BORD}`, padding:'3.5rem' }}>
              <h3 style={{ fontFamily:serif, fontSize:'1.85rem', fontWeight:400, color:DARK, marginBottom:'2.4rem', lineHeight:1.1 }}>
                Request a Quote
              </h3>
              {/*
                DEVELOPER: Connect form submission here.
                Option A — Formspree: add action="https://formspree.io/f/YOUR_ID" method="POST"
                Option B — Netlify Forms: add data-netlify="true"
                Option C — Custom: add onSubmit handler with fetch()
              */}
              <form onSubmit={e => e.preventDefault()} style={{ display:'flex', flexDirection:'column', gap:'1.45rem' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                  <div><label className="form-label">Full Name *</label><input type="text" name="name" required className="form-input" placeholder="Your name" /></div>
                  <div><label className="form-label">Email *</label><input type="email" name="email" required className="form-input" placeholder="you@example.com" /></div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                  <div><label className="form-label">Phone / WhatsApp</label><input type="tel" name="phone" className="form-input" placeholder="+49 ..." /></div>
                  <div><label className="form-label">Berlin District</label><input type="text" name="district" className="form-input" placeholder="e.g. Prenzlauer Berg" /></div>
                </div>
                <div>
                  <label className="form-label">Preferred Service</label>
                  <select name="service" className="form-input">
                    <option value="">Not sure yet — I would like advice</option>
                    <option>The Ligpit Discovery</option>
                    <option>The Ligpit Focus</option>
                    <option>The Ligpit Half Day</option>
                    <option>The Ligpit Day</option>
                    <option>The Ligpit Home</option>
                    <option>The Ligpit Reset (returning clients)</option>
                    <option>The Ligpit Move</option>
                  </select>
                </div>
                <div><label className="form-label">Type of Help Needed</label><input type="text" name="help" className="form-input" placeholder="e.g. wardrobe, kitchen, moving..." /></div>
                <div><label className="form-label">Preferred Timeframe</label><input type="text" name="timing" className="form-input" placeholder="e.g. September, weekday mornings..." /></div>
                <div><label className="form-label">Message</label><textarea name="message" rows={4} className="form-input" style={{ resize:'none' }} placeholder="Tell me a little about your space and what you want to achieve..." /></div>
                <div>
                  <label className="form-label">Before & After Photos</label>
                  <select name="photos" className="form-input">
                    <option value="yes">Yes — photos are welcome</option>
                    <option value="cropped">Yes — cropped or anonymous only</option>
                    <option value="no">No — I prefer no photos</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-olive" style={{ marginTop:'0.5rem' }}>Send Request</button>
                <p style={{ fontFamily:sans, fontSize:'0.87rem', color:MID, textAlign:'center', lineHeight:1.6 }}>
                  A response will arrive within 24 hours. All information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
