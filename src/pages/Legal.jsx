import { PageHeader } from '../components/Components'

// ── Impressum ───────────────────────────────────────────────────────────
export function Impressum() {
  return (
    <>
      <PageHeader title="Impressum" subtitle="Legal information as required by German law." />
      <section className="section-padding bg-beige">
        <div className="container-site max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-sm">
            <div className="bg-gold/10 border border-gold/30 p-4 rounded-sm mb-8">
              <p className="text-sm text-charcoal/80">
                <strong>Developer Note:</strong> Replace all placeholder information below with real legal details reviewed by a German legal advisor before publishing.
              </p>
            </div>
            <div className="prose max-w-none text-charcoal/80 leading-relaxed space-y-6">
              <div>
                <h3 className="font-serif text-xl mb-2">Information according to § 5 TMG</h3>
                <p>[Full Name]<br />[Street Address]<br />[Postal Code] Berlin<br />Germany</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Contact</h3>
                <p>Phone: [Phone Number]<br />Email: hello@ligpit.com</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">VAT ID</h3>
                <p>VAT identification number: [VAT Number]</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Responsible for content</h3>
                <p>[Full Name]<br />[Address as above]</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Dispute Resolution</h3>
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR):{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-olive">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Privacy Policy ──────────────────────────────────────────────────────
export function PrivacyPolicy() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="How we handle your data." />
      <section className="section-padding bg-beige">
        <div className="container-site max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-sm">
            <div className="bg-gold/10 border border-gold/30 p-4 rounded-sm mb-8">
              <p className="text-sm text-charcoal/80">
                <strong>Developer Note:</strong> Replace all placeholder content below with a GDPR-compliant privacy policy reviewed by a legal professional before publishing.
              </p>
            </div>
            <div className="prose max-w-none text-charcoal/80 leading-relaxed space-y-6">
              <div>
                <h3 className="font-serif text-xl mb-2">1. Data Controller</h3>
                <p>
                  The data controller responsible for this website is [Full Name], [Address], Berlin, Germany.
                  Email: hello@ligpit.com
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">2. Data We Collect</h3>
                <p>
                  When you contact us via our contact form or email, we collect the information you provide
                  (name, email address, message content). We also collect standard technical information
                  from your browser when you visit our website.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">3. Purpose of Processing</h3>
                <p>
                  We process your data to respond to your inquiries, provide our services, and improve
                  our website. We do not use your data for automated decision-making or profiling.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">4. Legal Basis</h3>
                <p>
                  We process your data based on your consent (Art. 6(1)(a) GDPR), for the performance of
                  a contract (Art. 6(1)(b) GDPR), or for our legitimate interests (Art. 6(1)(f) GDPR).
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">5. Your Rights</h3>
                <p>
                  You have the right to access, rectify, erase, restrict processing, data portability,
                  and object to the processing of your data. To exercise these rights, contact us at
                  hello@ligpit.com.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">6. Data Retention</h3>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes
                  for which it was collected, or as required by law.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">7. Third-Party Services</h3>
                <p>
                  Our website may use third-party services (such as Calendly for booking). These services
                  have their own privacy policies. We encourage you to review them.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">8. Contact</h3>
                <p>
                  For any privacy-related questions, contact us at hello@ligpit.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
