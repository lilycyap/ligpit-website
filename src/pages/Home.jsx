import React from 'react'
import { Link } from 'react-router-dom'
import { coreServices } from '../data/services'
import { faqs } from '../data/faqs'
import { ServiceCard, FAQItem, GoldRow } from '../components/Components'

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

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background:BEIGE, minHeight:'100vh', display:'flex', alignItems:'center', paddingTop:'50px', overflow:'hidden' }}>
        <div className="container-site" style={{ width:'100%', paddingTop:'4rem', paddingBottom:'4rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }} className="hero-grid">

            {/* Left — text */}
            <div>
              <div className="afu" style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'2.4rem' }}>
                <span className="gold-line" />
                <p className="t-over">Berlin · Home Organizing</p>
              </div>

              <h1 className="t-display afu d1" style={{ color:DARK, marginBottom:'1rem' }}>
                Restore order.<br />
                <em style={{ fontWeight:300 }}>Reclaim calm.</em>
              </h1>

              <p className="afu d2" style={{ fontFamily:sans, fontSize:'0.87rem', letterSpacing:'0.2em', textTransform:'uppercase', color:MID, marginBottom:'2.4rem' }}>
                Thoughtful spaces for intentional lives.
              </p>

              <p className="afu d2" style={{ fontFamily:sans, fontSize:'1rem', lineHeight:1.8, color:GREY, maxWidth:'480px', marginBottom:'3.5rem' }}>
                Ligpit helps busy Berlin households declutter, organize, and reset their homes with calm, practical, and non-judgmental support.
              </p>

              <div className="afu d3" style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
                <Link to="/contact" className="btn btn-olive">Request a Quote</Link>
                <a href="https://calendly.com/ligpit/discovery" target="_blank" rel="noopener noreferrer"
                  className="btn btn-dark">
                  {/* Replace with real Calendly link */}
                  Book Discovery Session
                </a>
              </div>
            </div>

            {/* Right — founder photo */}
            <div className="afu d2" style={{ display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
              <div style={{ position:'relative', width:'100%', maxWidth:'460px' }}>
                {/* Gold border accent */}
                <div style={{
                  position:'absolute', top:'-14px', right:'-14px',
                  width:'100%', height:'100%',
                  border:'1px solid #B8965A',
                  zIndex:0, pointerEvents:'none',
                }} />
                {/* Photo */}
                <img
                  src="/lily.png"
                  alt="Lily Yap — Founder, Ligpit"
                  style={{
                    position:'relative', zIndex:1,
                    width:'100%',
                    height:'700	px',
                    objectFit:'cover',
                    objectPosition:'center top',
                    display:'block',
                  }}
                />
                {/* Name overlay */}
                <div style={{
                  position:'absolute', bottom:0, left:0, right:0, zIndex:2,
                  background:'rgba(43,43,43,0.78)',
                  backdropFilter:'blur(6px)',
                  padding:'1rem 1.5rem',
                }}>
                  <p style={{ fontFamily:serif, fontSize:'1.35rem', color:'#fff', fontWeight:400, marginBottom:'3px', lineHeight:1.2 }}>
                    Lily Yap
                  </p>
                  <p style={{ fontFamily:sans, fontSize:'0.77rem', letterSpacing:'0.18em', textTransform:'uppercase', color:GOLD, fontWeight:500 }}>
                    Founder, Ligpit · Berlin
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .hero-grid{ grid-template-columns:1fr !important; }
          .hero-grid > div:last-child{ display:none !important; }
        }
      `}</style>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section style={{ background:DARK, padding:'1.5rem 0' }}>
        <div className="container-site">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1rem' }}>
            {['Respectful and non-judgmental', 'Private in-home support', 'Practical room-by-room process', 'English-speaking in Berlin'].map(label => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <span className="gold-sq" />
                <span style={{ fontFamily:sans, fontSize:'0.82rem', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:500, color:'#ccc' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:WHITE }}>
        <div className="container-site">
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'4rem', maxWidth:'900px', margin:'0 auto' }}>
            <div style={{ textAlign:'center' }}>
              <GoldRow center />
              <p className="t-over" style={{ marginBottom:'1rem' }}>What Ligpit Is</p>
              <h2 className="t-heading" style={{ marginBottom:'2.4rem' }}>
                Your home can feel calmer.<br />
                <em style={{ fontWeight:300 }}>You do not have to do it alone.</em>
              </h2>
              <p style={{ fontFamily:sans, fontSize:'1.5rem', lineHeight:1.8, color:GREY, maxWidth:'560px', margin:'0 auto' }}>
                Ligpit is a Berlin-based home decluttering and organizing service. Every session is guided, practical, and respectful. You stay in control of every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site">
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:'2.4rem', marginBottom:'3.5rem' }}>
            <div>
              <p className="t-over" style={{ marginBottom:'0.75rem' }}>Services</p>
              <h2 className="t-heading">Built around your home</h2>
            </div>
            <Link to="/services" className="btn btn-dark">View All Services</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'2.4rem' }}>
            {coreServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
          <p style={{ fontFamily:sans, fontSize:'0.93rem', color:MID, marginTop:'2.4rem', textAlign:'center', letterSpacing:'0.05em' }}>
            Pricing is provided following the Discovery Session, personalized to your space and scope.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:DARK }}>
        <div className="container-site">
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:'2.4rem', marginBottom:'3.5rem' }}>
            <div>
              <p style={{ fontFamily:sans, fontSize:'0.82rem', letterSpacing:'0.2em', textTransform:'uppercase', color:GOLD, fontWeight:500, marginBottom:'0.75rem' }}>
                The Process
              </p>
              <h2 className="t-heading" style={{ color:'#fff', maxWidth:'420px' }}>
                Calm from first contact to lasting order
              </h2>
            </div>
            <Link to="/how-it-works" className="btn btn-gold">Full Process</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'3.5rem' }}>
            {[
              { n:'01', t:'Discovery',    d:'A calm 60-minute walkthrough to understand your home, goals, and priorities.' },
              { n:'02', t:'Your Plan',    d:'A clear written recommendation and quote based on your space and needs.' },
              { n:'03', t:'The Reset',    d:'We work together room by room. You decide what stays. Ligpit brings the structure.' },
              { n:'04', t:'Keep the Calm',d:'Simple maintenance guidance so the space remains easier to manage long-term.' },
            ].map(({ n, t, d }) => (
              <div key={n}>
                <div style={{ display:'flex', alignItems:'flex-start', gap:'1rem', marginBottom:'1rem' }}>
                  <span style={{ fontFamily:serif, fontSize:'3.5rem', color:GOLD, lineHeight:1, fontWeight:300, flexShrink:0 }}>{n}</span>
                  <div style={{ width:'1px', height:'2.4rem', background:'#444', marginTop:'0.5rem', flexShrink:0 }} />
                  <h3 style={{ fontFamily:serif, fontSize:'1.5rem', color:'#fff', marginTop:'4px', fontWeight:400 }}>{t}</h3>
                </div>
                <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.75, color:'#888880' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT IS FOR ─────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:WHITE }}>
        <div className="container-site">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <GoldRow center />
            <p className="t-over" style={{ marginBottom:'0.75rem' }}>Who We Help</p>
            <h2 className="t-heading">For anyone ready for a calmer home</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'1.45rem' }}>
            {[
              ['Expats settling into Berlin',          'Start fresh in a new city with a home built as an intentional foundation from day one.'],
              ['Busy professionals',                   'No time to think, let alone organise. One session can free up hours of daily frustration.'],
              ['Families and shared households',       'When more people share a space, systems matter more. Ligpit builds systems that work for everyone.'],
              ['People preparing to move',            'Decide what to take, donate, or release. Arrive at your next home with only what you need.'],
              ['People overwhelmed by one space',     'You do not need to fix everything. Sometimes one room, done well, changes how you feel at home.'],
              ['Returning clients for maintenance',   'Keep the calm you built. Regular resets help the system hold long after the first session.'],
            ].map(([title, body]) => (
              <div key={title} style={{ border:`1px solid ${BORD}`, padding:'2.4rem', transition:'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor=GOLD}
                onMouseLeave={e => e.currentTarget.style.borderColor=BORD}>
                <span className="gold-sq" style={{ display:'block', marginBottom:'1.45rem' }} />
                <h3 style={{ fontFamily:serif, fontSize:'1.85rem', fontWeight:500, color:DARK, marginBottom:'0.75rem', lineHeight:1.2 }}>
                  {title}
                </h3>
                <p style={{ fontFamily:sans, fontSize:'1rem', lineHeight:1.7, color:GREY }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND PROMISE ────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'5rem', alignItems:'center' }}>
            <div>
              <GoldRow />
              <p className="t-over" style={{ marginBottom:'1rem' }}>The Ligpit Standard</p>
              <h2 className="t-heading" style={{ marginBottom:'2.4rem' }}>
                Your home, your decisions.<br />
                <em style={{ fontWeight:300 }}>Always.</em>
              </h2>
              <p style={{ fontFamily:sans, fontSize:'1.5rem', lineHeight:1.8, color:GREY, marginBottom:'1rem' }}>
                Ligpit will never pressure you to discard anything. Every item decision stays with you.
              </p>
              <p style={{ fontFamily:sans, fontSize:'1.5rem', lineHeight:1.8, color:GREY }}>
                Ligpit brings the structure, pace, and system — you stay in control of your home and everything in it.
              </p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
              {[
                ['Privacy',    'All sessions are private. Nothing shared without your explicit permission.'],
                ['Respect',    'No judgment, no shame, no pressure. Your home is met exactly as it is.'],
                ['Structure',  'A clear process, one zone at a time. Manageable from start to finish.'],
                ['English',    'A fully English-speaking service in Berlin for international households.'],
              ].map(([title, body]) => (
                <div key={title} style={{ background:WHITE, border:`1px solid ${BORD}`, padding:'2.4rem' }}>
                  <span className="gold-sq" style={{ display:'block', marginBottom:'1rem' }} />
                  <h4 style={{ fontFamily:serif, fontSize:'1.5rem', fontWeight:500, color:DARK, marginBottom:'0.5rem' }}>{title}</h4>
                  <p style={{ fontFamily:sans, fontSize:'0.93rem', lineHeight:1.6, color:MID }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ───────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background:WHITE }}>
        <div className="container-site">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'4rem' }}>
            <div>
              <GoldRow />
              <p className="t-over" style={{ marginBottom:'1rem' }}>Common Questions</p>
              <h2 className="t-heading" style={{ marginBottom:'2.4rem' }}>Answers before you reach out</h2>
              <Link to="/faq" className="btn btn-dark">Full FAQ</Link>
            </div>
            <div>
              {faqs.slice(0, 5).map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ background:DARK, padding:'6rem 0', textAlign:'center' }}>
        <div className="container-site">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'2.4rem' }}>
            <span className="gold-line" />
            <span className="gold-sq" />
            <span className="gold-line" />
          </div>
          <h2 className="t-heading" style={{ color:'#fff', marginBottom:'1rem' }}>
            Ready to restore order?
          </h2>
          <p style={{ fontFamily:sans, fontSize:'1.5rem', color:'#888880', maxWidth:'400px', margin:'0 auto 2.5rem', lineHeight:1.75 }}>
            Start with a calm Discovery Session and receive a clear plan for your space.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem' }}>
            <Link to="/contact" className="btn btn-gold">Request a Quote</Link>
            <a href="https://calendly.com/ligpit/discovery" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {/* Replace with real Calendly link */}
              Book Discovery Session
            </a>
            <a href="https://wa.me/4915158845018" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {/* Replace with real WhatsApp number */}
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
