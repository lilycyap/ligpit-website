import React from 'react'

// ── Gold Row (decorative divider) ───────────────────────────────────────
export function GoldRow({ center }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'1.45rem', justifyContent: center ? 'center' : 'flex-start' }}>
      <span className="gold-line" />
      <span className="gold-sq" />
      <span className="gold-line" />
    </div>
  )
}

// ── Page Header ──────────────────────────────────────────────────────────
export function PageHeader({ overline, title, subtitle }) {
  const DARK = '#2B2B2B'
  const GOLD = '#B8965A'
  const serif = "'Cormorant Garamond', Georgia, serif"
  const sans  = "'Montserrat', sans-serif"

  return (
    <section style={{ background:DARK, padding:'7rem 0 4rem' }}>
      <div className="container-site" style={{ textAlign:'center' }}>
        {overline && (
          <p style={{ fontFamily:sans, fontSize:'0.82rem', letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:500, color:GOLD, marginBottom:'1rem' }}>
            {overline}
          </p>
        )}
        <h1 style={{ fontFamily:serif, fontSize:'3.5rem', fontWeight:400, color:'#fff', lineHeight:1.1, marginBottom: subtitle ? '1rem' : 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily:sans, fontSize:'1.05rem', color:'#888880', maxWidth:'560px', margin:'0 auto', lineHeight:1.7 }}>
            {subtitle}
          </p>
        )}
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', marginTop:'2.4rem' }}>
          <span className="gold-line" />
          <span className="gold-sq" />
          <span className="gold-line" />
        </div>
      </div>
    </section>
  )
}

// ── Service Card ─────────────────────────────────────────────────────────
export function ServiceCard({ service }) {
  const serif = "'Cormorant Garamond', Georgia, serif"
  const sans  = "'Montserrat', sans-serif"
  const DARK  = '#2B2B2B'
  const GREY  = '#555550'
  const MID   = '#888880'
  const GOLD  = '#B8965A'
  const BORD  = '#E8E4DC'
  const WHITE = '#ffffff'

  return (
    <div style={{ background:WHITE, border:`1px solid ${BORD}`, padding:'2.4rem', transition:'border-color 0.3s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor=GOLD}
      onMouseLeave={e => e.currentTarget.style.borderColor=BORD}>
      <span className="gold-sq" style={{ display:'block', marginBottom:'1.45rem' }} />
      <p className="t-over" style={{ marginBottom:'0.5rem' }}>{service.duration}</p>
      <h3 style={{ fontFamily:serif, fontSize:'1.85rem', fontWeight:500, color:DARK, marginBottom:'0.75rem', lineHeight:1.15 }}>
        {service.name}
      </h3>
      <p style={{ fontFamily:sans, fontSize:'1rem', lineHeight:1.7, color:GREY }}>
        {service.description}
      </p>
    </div>
  )
}

// ── FAQ Item ─────────────────────────────────────────────────────────────
export function FAQItem({ faq, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const serif = "'Cormorant Garamond', Georgia, serif"
  const sans  = "'Montserrat', sans-serif"
  const DARK  = '#2B2B2B'
  const GREY  = '#555550'
  const GOLD  = '#B8965A'
  const BORD  = '#E8E4DC'

  return (
    <div style={{ borderBottom:`1px solid ${BORD}`, padding:'1.45rem 0' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}
      >
        <span style={{ fontFamily:serif, fontSize:'1.35rem', fontWeight:400, color:DARK, paddingRight:'1rem' }}>{faq.q}</span>
        <span style={{ color:GOLD, transition:'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', flexShrink:0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div style={{ maxHeight: isOpen ? '300px' : '0', overflow:'hidden', transition:'max-height 0.3s ease' }}>
        <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.8, color:GREY, paddingTop:'0.75rem' }}>{faq.a}</p>
      </div>
    </div>
  )
}

// ── Section Divider ─────────────────────────────────────────────────────
export function SectionDivider() {
  return <div className="w-16 h-0.5 bg-gold mx-auto" />
}

// ── Testimonial Card ─────────────────────────────────────────────────────
export function TestimonialCard({ quote, name, role }) {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <svg className="w-8 h-8 text-gold/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-charcoal/80 leading-relaxed mb-6 italic">{quote}</p>
      <div>
        <p className="font-serif text-lg">{name}</p>
        <p className="text-sm text-charcoal/50">{role}</p>
      </div>
    </div>
  )
}
