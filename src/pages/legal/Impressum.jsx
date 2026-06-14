// src/pages/legal/Impressum.jsx
//
// Impressum required under German law (§ 5 DDG — Digitale-Dienste-Gesetz).
// German version is primary; English notes are provided for convenience
// only.

export default function Impressum() {
  return (
    <div className="bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="font-serif text-4xl text-charcoal mb-6">Impressum</h1>

        <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8 space-y-6 text-sm text-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-semibold text-charcoal mb-1">
              Angaben gemäß § 5 DDG
            </h2>
            <p>Ligpit</p>
            <p>Inh. Lily Yap</p>
            <p>Kottbusser Damm 29-30</p>
            <p>c/o Maier, Hinterhaus 1. OG</p>
            <p>10967 Berlin</p>
            <p>Germany</p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal mb-1">Kontakt</h2>
            <p>
              Telefon / WhatsApp:{" "}
              <a href="tel:+4915158845018" className="text-olive hover:text-charcoal">
                +49 151 58845018
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:hello@ligpit.com"
                className="text-olive hover:text-charcoal"
              >
                hello@ligpit.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal mb-1">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Lily Yap</p>
            <p>Kottbusser Damm 29-30</p>
            <p>c/o Maier, Hinterhaus 1. OG</p>
            <p>10967 Berlin</p>
            <p>Germany</p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal mb-1">Versicherung</h2>
            <p className="mb-2">
              Ligpit holds business liability insurance with ERGO
              Versicherung AG.
            </p>
            <p>ERGO Versicherung AG</p>
            <p>ERGO-Platz 1</p>
            <p>40477 Düsseldorf</p>
            <p>Germany</p>
            <p className="mt-2">
              <span className="font-medium text-charcoal">
                Type of insurance:
              </span>{" "}
              Gewerbe-Haftpflichtversicherung
            </p>
            <p>
              <span className="font-medium text-charcoal">
                Insured risk:
              </span>{" "}
              Haushaltshilfendienst
            </p>
            <p className="mt-2">
              Coverage is subject to the terms and conditions of the
              insurance policy. Further details can be provided upon
              request.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal mb-1">
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="border-t border-olive/15 pt-4">
            <p className="text-xs text-charcoal/50">
              English note: This Impressum (legal notice) is provided in
              accordance with German law (§ 5 DDG and § 18 (2) MStV). The
              German version above is the legally binding version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
