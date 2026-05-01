import React from 'react'
import { Link } from 'react-router-dom'
import { coreServices, addOnServices } from '../data/services'
import { PageHeader, GoldRow } from '../components/Components'

const serif = "'Cormorant Garamond', Georgia, serif"
const sans  = "'Montserrat', sans-serif"
const DARK  = '#2B2B2B'
const GREY  = '#555550'
const MID   = '#888880'
const GOLD  = '#B8965A'
const OLIVE = '#6F7A63'
const BEIGE = '#F2EFEA'
const WHITE = '#ffffff'
const BORD  = '#E8E4DC'
const TEAL  = '#5B8A7A'

export default function Services() {
  return (
    <>
      <PageHeader
        overline="What We Offer"
        title="Services built around your home"
        subtitle="Every home is different. Every service is built around yours. Pricing is provided after the Discovery Session."
      />

      {/* ── CORE SERVICES ─────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site">
          <div style={{ marginBottom:'3.5rem' }}>
            <GoldRow />
            <p className="t-over" style={{ marginBottom:'0.75rem' }}>Core Services</p>
            <h2 className="t-heading" style={{ maxWidth:'500px' }}>Every engagement begins with Discovery</h2>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'2.4rem' }}>
            {coreServices.map(s => (
              <div key={s.id} style={{ background:WHITE, border:`1px solid ${BORD}`, padding:'3.5rem', display:'grid', gridTemplateColumns:'1fr auto', gap:'2.4rem', alignItems:'start' }}>
                <div>
                  {s.returningOnly && (
                    <span style={{ display:'inline-block', fontSize:'0.75rem', letterSpacing:'0.14em', textTransform:'uppercase',
                      fontFamily:sans, fontWeight:500, color:TEAL, border:`1px solid ${TEAL}`, padding:'3px 10px', marginBottom:'1rem' }}>
                      Returning clients only
                    </span>
                  )}
                  <p className="t-over" style={{ marginBottom:'0.5rem' }}>{s.duration}</p>
                  <h3 style={{ fontFamily:serif, fontSize:'2.4rem', fontWeight:400, color:DARK, marginBottom:'0.75rem', lineHeight:1.1 }}>
                    {s.name}
                  </h3>
                  <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.75, color:GREY, marginBottom:'1rem', maxWidth:'560px' }}>
                    {s.description}
                  </p>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                    <span className="gold-sq" style={{ marginTop:'3px' }} />
                    <p style={{ fontFamily:sans, fontSize:'1rem', color:MID, fontStyle:'italic', lineHeight:1.6 }}>
                      Best for: {s.bestFor}
                    </p>
                  </div>
                </div>
                <div style={{ minWidth:'140px', textAlign:'right' }}>
                  <Link to="/contact" className="btn btn-olive" style={{ whiteSpace:'nowrap' }}>
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ───────────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:WHITE }}>
        <div className="container-site">
          <div style={{ marginBottom:'3.5rem' }}>
            <GoldRow />
            <p className="t-over" style={{ marginBottom:'0.75rem' }}>Add-On Services</p>
            <h2 className="t-heading" style={{ maxWidth:'400px' }}>Extend your session</h2>
            <p style={{ fontFamily:sans, fontSize:'1.05rem', color:GREY, marginTop:'1rem' }}>
              Add any of the following to your session at the time of booking or on the day.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'1.45rem' }}>
            {addOnServices.map(a => (
              <div key={a.name} style={{ border:`1px solid ${BORD}`, padding:'2.4rem', transition:'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor=GOLD}
                onMouseLeave={e => e.currentTarget.style.borderColor=BORD}>
                <h3 style={{ fontFamily:serif, fontSize:'1.85rem', fontWeight:500, color:DARK, marginBottom:'0.75rem', lineHeight:1.15 }}>
                  {a.name}
                </h3>
                <span className="gold-line" style={{ marginBottom:'1rem', display:'block' }} />
                <p style={{ fontFamily:sans, fontSize:'1rem', lineHeight:1.7, color:GREY }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING NOTE ──────────────────────────────────────────────────── */}
      <section style={{ background:BEIGE, padding:'3rem 0' }}>
        <div className="container-site" style={{ textAlign:'center', maxWidth:'680px', margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', marginBottom:'1.45rem' }}>
            <span className="gold-line" /><span className="gold-sq" /><span className="gold-line" />
          </div>
          <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.8, color:GREY }}>
            Final pricing is confirmed after the Discovery Session, based on the scope, access, number of rooms, and agreed add-ons. The €75 Discovery fee is applied toward your first full service.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background:DARK, padding:'5rem 0', textAlign:'center' }}>
        <div className="container-site">
          <h2 className="t-heading" style={{ color:'#fff', marginBottom:'1rem' }}>
            Not sure which service to choose?
          </h2>
          <p style={{ fontFamily:sans, fontSize:'1.05rem', color:MID, marginBottom:'2.4rem' }}>
            Start with a Discovery Session and receive a personalised recommendation.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem' }}>
            <Link to="/contact" className="btn btn-gold">Request a Quote</Link>
            <a href="https://calendly.com/ligpit/discovery" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {/* Replace with real Calendly link */}
              Book Discovery Session
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
