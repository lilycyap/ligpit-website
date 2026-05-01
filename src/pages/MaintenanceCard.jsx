import React from 'react'
import { PageHeader } from '../components/Components'

export default function MaintenanceCard() {
  return (
    <>
      <PageHeader
        overline="Client Resources"
        title="My Home Maintenance Card"
        subtitle="Print, laminate, and display. Use a whiteboard marker to check off daily, weekly, and monthly habits."
      />

      <section style={{ background:'#F2EFEA', padding:'3rem 0' }}>
        <div className="container-site">
          <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', alignItems:'center', marginBottom:'1.5rem' }}>
            <button
              onClick={() => window.print()}
              style={{ background:'#6F7A63', color:'#fff', border:'none', padding:'8px 20px', fontSize:'13px', cursor:'pointer', borderRadius:'4px', fontFamily:'Montserrat,sans-serif' }}>
              Print Card
            </button>
            <span style={{ fontSize:'12px', color:'#888', fontStyle:'italic', fontFamily:'Montserrat,sans-serif' }}>
              Print — then laminate or place in a glass frame to use with a whiteboard marker
            </span>
          </div>
        </div>
      </section>

      {/* Inject the card styles and HTML */}
      <section style={{ background:'#F5F4F0', padding:'2rem 0' }}>
        <div className="container-site">
          <style>{`
            .mc-card-bg{background:#F5F4F0;border-radius:12px;padding:1.5rem;border:0.5px solid #ddd}
            .mc-card{background:#FDFCF8;border:2px solid #6F7A63;outline:5px solid #FDFCF8;box-shadow:0 0 0 7px #6F7A63;font-family:Georgia,serif;max-width:720px;margin:0 auto;padding:0;overflow:hidden}
            .mc-card-head{background:#6F7A63;padding:14px 24px 12px;display:flex;align-items:center;justify-content:space-between}
            .mc-brand{color:#fff;font-size:20px;font-weight:700;letter-spacing:.22em}
            .mc-brand-tag{color:#B8965A;font-size:11px;letter-spacing:.15em;font-family:Arial,sans-serif;font-weight:500;margin-top:2px}
            .mc-title-right{text-align:right}
            .mc-title-main{color:#B8965A;font-size:14px;font-weight:700;letter-spacing:.06em;font-family:Arial,sans-serif}
            .mc-title-sub{color:#C8D4C0;font-size:11px;font-family:Arial,sans-serif;margin-top:2px;font-style:italic}
            .mc-gold-bar{height:3px;background:#B8965A}
            .mc-body{padding:20px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
            .mc-col-head{font-size:12px;font-weight:700;letter-spacing:.12em;font-family:Arial,sans-serif;padding:7px 10px;margin-bottom:10px;text-align:center;color:#fff}
            .mc-col-head.olive{background:#6F7A63}
            .mc-col-head.gold{background:#B8965A}
            .mc-col-head.dark{background:#2B2B2B}
            .mc-item{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px}
            .mc-box{width:15px;height:15px;min-width:15px;border:1.5px solid #6F7A63;margin-top:1px;flex-shrink:0}
            .mc-item-text{font-size:12px;color:#2B2B2B;line-height:1.4;font-family:Arial,sans-serif}
            .mc-col-label{font-size:10px;color:#888;letter-spacing:.1em;font-family:Arial,sans-serif;margin:10px 0 5px;text-transform:uppercase}
            .mc-write-line{border-bottom:1px solid #B8965A;margin:7px 0 12px;height:20px}
            .mc-bottom{border-top:1px solid #E8EDE5;display:grid;grid-template-columns:1fr 1fr}
            .mc-bottom-half{padding:14px 20px}
            .mc-bottom-half:first-child{border-right:1px solid #E8EDE5}
            .mc-foot{background:#2B2B2B;padding:8px 20px;display:flex;align-items:center;justify-content:space-between}
            .mc-foot-text{color:#888;font-size:10px;font-family:Arial,sans-serif;letter-spacing:.08em}
            .mc-foot-url{color:#B8965A;font-size:10px;font-family:Arial,sans-serif;letter-spacing:.06em}
            @media print{
              header,footer,section:not(.mc-print-section){ display:none !important; }
              .mc-print-section{ padding:0 !important; }
              .mc-card{ box-shadow:none; outline:none; max-width:100%; }
              .mc-card-bg{ border:none; padding:0; background:white; }
            }
          `}</style>

          <div className="mc-card-bg mc-print-section">
            <div className="mc-card">

              <div className="mc-card-head">
                <div>
                  <div className="mc-brand">LIGPIT</div>
                  <div className="mc-brand-tag">Berlin · ligpit.com</div>
                </div>
                <div className="mc-title-right">
                  <div className="mc-title-main">My Home Maintenance Card</div>
                  <div className="mc-title-sub">Wipe clean · Repeat · Keep the calm</div>
                </div>
              </div>
              <div className="mc-gold-bar" />

              <div className="mc-body">

                {/* Daily */}
                <div>
                  <div className="mc-col-head olive">Daily — 10 min</div>
                  {['Surfaces — everything back to its one home','Floor — nothing left out that belongs elsewhere','Kitchen — counters clear, sink empty','Tomorrow — bag packed, keys in their home'].map(t => (
                    <div key={t} className="mc-item"><div className="mc-box" /><div className="mc-item-text">{t}</div></div>
                  ))}
                  <div className="mc-col-label">My daily extra</div>
                  <div className="mc-item"><div className="mc-box" /><div className="mc-write-line" style={{flex:1}} /></div>
                  <div className="mc-item"><div className="mc-box" /><div className="mc-write-line" style={{flex:1}} /></div>
                </div>

                {/* Weekly */}
                <div>
                  <div className="mc-col-head gold">Weekly — 15 min</div>
                  {['Wardrobe — return any displaced clothing','Kitchen — clear overflow, check dates','Paperwork — sort into Action / Archive / Done','One zone refresh — 15 min in your priority area'].map(t => (
                    <div key={t} className="mc-item"><div className="mc-box" /><div className="mc-item-text">{t}</div></div>
                  ))}
                  <div className="mc-col-label">My weekly extra</div>
                  <div className="mc-item"><div className="mc-box" /><div className="mc-write-line" style={{flex:1}} /></div>
                  <div className="mc-item"><div className="mc-box" /><div className="mc-write-line" style={{flex:1}} /></div>
                </div>

                {/* Monthly */}
                <div>
                  <div className="mc-col-head dark">Monthly — 30 min</div>
                  {['Walk every room — note what has drifted','Donation — one bag of what no longer serves you','Labels — refresh any that have faded or moved','Decide — items you set aside to review'].map(t => (
                    <div key={t} className="mc-item"><div className="mc-box" /><div className="mc-item-text">{t}</div></div>
                  ))}
                  <div className="mc-col-label">My monthly extra</div>
                  <div className="mc-item"><div className="mc-box" /><div className="mc-write-line" style={{flex:1}} /></div>
                  <div className="mc-item"><div className="mc-box" /><div className="mc-write-line" style={{flex:1}} /></div>
                </div>

              </div>

              {/* Bottom */}
              <div className="mc-bottom">
                <div className="mc-bottom-half">
                  <div style={{fontSize:'11px',fontWeight:700,color:'#6F7A63',letterSpacing:'.1em',fontFamily:'Arial,sans-serif',marginBottom:'8px'}}>MY ZONES</div>
                  <div style={{fontSize:'11px',color:'#888',fontFamily:'Arial,sans-serif',marginBottom:'8px',fontStyle:'italic'}}>The spaces Ligpit organized for you — write them here.</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 14px'}}>
                    {[0,1,2,3,4,5].map(i => <div key={i}><div className="mc-write-line" /></div>)}
                  </div>
                </div>
                <div className="mc-bottom-half">
                  <div style={{fontSize:'11px',fontWeight:700,color:'#2B2B2B',letterSpacing:'.1em',fontFamily:'Arial,sans-serif',marginBottom:'8px'}}>MY RESET COMMITMENT</div>
                  {['I will reset my home every','If a space slips, I will','My word for this home is'].map(label => (
                    <div key={label}>
                      <div style={{fontSize:'11px',color:'#888',fontFamily:'Arial,sans-serif',marginBottom:'4px',fontStyle:'italic'}}>{label}</div>
                      <div className="mc-write-line" style={{marginBottom:'10px'}} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mc-foot">
                <span className="mc-foot-text">Restore Order · Reclaim Calm · Thoughtful spaces for intentional lives</span>
                <span className="mc-foot-url">ligpit.com · hello@ligpit.com</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
