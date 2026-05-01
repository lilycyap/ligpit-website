import React from 'react'
import { PageHeader } from '../components/Components'

const sans = "'Montserrat', sans-serif"
const serif = "'Cormorant Garamond', Georgia, serif"
const DARK = '#2B2B2B'; const GREY = '#555550'; const GOLD = '#B8965A'; const BEIGE = '#F2EFEA'; const BORD = '#E8E4DC'

const Warning = () => (
  <div style={{ border:`2px solid ${GOLD}`, background:'rgba(184,150,90,0.05)', padding:'1.25rem 1.5rem', marginBottom:'3.5rem' }}>
    <p style={{ fontFamily:sans, fontSize:'0.8rem', letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:500, color:GOLD, marginBottom:'0.5rem' }}>
      ⚠ Developer Note
    </p>
    <p style={{ fontFamily:sans, fontSize:'1.05rem', lineHeight:1.7, color:DARK }}>
      This is placeholder content and must be reviewed by a qualified German legal advisor before this website is published.
    </p>
  </div>
)

export function Impressum() {
  return (
    <>
      <PageHeader overline="Legal" title="Impressum" />
      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site" style={{ maxWidth:'640px' }}>
          <Warning />
          <div style={{ display:'flex', flexDirection:'column', gap:'2.4rem', fontFamily:sans, fontSize:'1.05rem', lineHeight:1.8, color:GREY }}>
            {[
              ['Angaben gemäß § 5 TMG', 'Lily C. Yap Services as Ligpit\nBerlin, Germany\nEmail: hello@ligpit.de\nWebsite: ligpit.de'],
              ['Verantwortlich für den Inhalt', 'Lily C. Yap'],
              ['Steuerliche Angaben', '[Steuernummer / Umsatzsteuer-ID: to be added before publishing]'],
              ['Gewerbeanmeldung', '[Registration details: to be added before publishing]'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 style={{ fontFamily:serif, fontSize:'1.85rem', fontWeight:500, color:DARK, marginBottom:'0.5rem' }}>{title}</h3>
                <p style={{ whiteSpace:'pre-line' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <>
      <PageHeader overline="Legal" title="Datenschutzerklärung" subtitle="Privacy Policy" />
      <section className="section-py" style={{ background:BEIGE }}>
        <div className="container-site" style={{ maxWidth:'640px' }}>
          <Warning />
          <div style={{ display:'flex', flexDirection:'column', gap:'2.4rem', fontFamily:sans, fontSize:'1.05rem', lineHeight:1.8, color:GREY }}>
            {[
              ['1. Data Controller', 'Lily C. Yap Services as Ligpit, Berlin, Germany. Email: hello@ligpit.de'],
              ['2. What Data We Collect', 'Contact form submissions (name, email, phone, message). Email communication. Booking information via third-party calendar (Calendly).'],
              ['3. How We Use Your Data', 'Personal data is used solely to communicate with you, plan and deliver services, and send relevant follow-up information. Your data is never sold or shared with third parties.'],
              ['4. Legal Basis (GDPR)', 'Processing is carried out on the basis of legitimate interest (Art. 6(1)(f) GDPR) and, where applicable, performance of a contract (Art. 6(1)(b) GDPR).'],
              ['5. Data Retention', 'Client data is retained for a maximum of 2 years after the final session or last contact.'],
              ['6. Your Rights', 'You may request access, correction, or deletion of your personal data at any time. Contact: hello@ligpit.de'],
              ['7. Analytics', '[To be completed if analytics tools are added before publishing.]'],
              ['8. Cookies', '[To be completed before publishing.]'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 style={{ fontFamily:serif, fontSize:'1.85rem', fontWeight:500, color:DARK, marginBottom:'0.5rem' }}>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
