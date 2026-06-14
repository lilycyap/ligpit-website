// src/pages/legal/Privacy.jsx
//
// Datenschutzerklärung / Privacy Policy
// German version is primary (legally binding); English text below each
// section is provided for convenience only.
//
// Reflects the current, simple setup:
// - No analytics, marketing pixels, embedded maps, or booking widgets
// - No non-essential cookies, so no cookie banner is shown
// - Contact form is handled via Netlify Forms (hosted on Netlify)
// - Contact also via WhatsApp and email
// - Site may link to Instagram, but does not embed an Instagram feed
// - No external Google Fonts are loaded (system font stack used)

function Section({ n, deTitle, children }) {
  return (
    <div className="border-b border-olive/15 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
      <h2 className="font-serif text-xl text-charcoal mb-3">
        {n}. {deTitle}
      </h2>
      {children}
    </div>
  );
}

function EN({ children }) {
  return (
    <p className="text-xs text-charcoal/50 mt-2 leading-relaxed">
      <span className="font-medium">English: </span>
      {children}
    </p>
  );
}

export default function Privacy() {
  return (
    <div className="bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="font-serif text-4xl text-charcoal mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-charcoal/60 mb-8">
          Privacy Policy — German version is primary; English notes are
          provided for convenience only.
        </p>

        <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8 text-sm text-charcoal/80 leading-relaxed">
          <Section n={1} deTitle="Datenschutz auf einen Blick">
            <p>
              Diese Website nutzt derzeit keine Analyse-Tools, keine
              Marketing-Pixel, keine eingebetteten Karten, keine
              Buchungs-Widgets und keine nicht notwendigen Cookies. Die
              Verarbeitung personenbezogener Daten erfolgt im Wesentlichen
              über das Kontaktformular sowie bei Kontaktaufnahme per E-Mail
              oder WhatsApp.
            </p>
            <EN>
              This website does not currently use analytics tools,
              marketing pixels, embedded maps, booking widgets, or
              non-essential cookies. Personal data is mainly processed
              through the contact form, or when you contact us by email or
              WhatsApp.
            </EN>
          </Section>

          <Section n={2} deTitle="Verantwortliche Stelle">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <p className="mt-2">Ligpit</p>
            <p>Inh. Lily Yap</p>
            <p>Kottbusser Damm 29-30</p>
            <p>c/o Maier, Hinterhaus 1. OG</p>
            <p>10967 Berlin, Germany</p>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:hello@ligpit.com"
                className="text-olive hover:text-charcoal"
              >
                hello@ligpit.com
              </a>
            </p>
            <p>
              Telefon / WhatsApp:{" "}
              <a
                href="tel:+4915158845018"
                className="text-olive hover:text-charcoal"
              >
                +49 151 58845018
              </a>
            </p>
            <EN>
              The controller responsible for data processing on this
              website is Ligpit (Lily Yap), at the address above.
            </EN>
          </Section>

          <Section n={3} deTitle="Welche Daten werden verarbeitet?">
            <p>
              Über das Kontaktformular können folgende Daten verarbeitet
              werden:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefon- / WhatsApp-Nummer</li>
              <li>bevorzugte Kontaktmethode</li>
              <li>bevorzugte Kontaktzeit</li>
              <li>Berliner Stadtteil / Gegend</li>
              <li>gewünschte Leistung</li>
              <li>Angaben zu Wohnung, Büro oder Arbeitsplatz</li>
              <li>ungefähre Größe der Fläche</li>
              <li>gewünschter Termin / Zeitraum</li>
              <li>
                Zeitpräferenz für Büroreinigung (falls zutreffend)
              </li>
              <li>gewünschte Häufigkeit</li>
              <li>Schwerpunkte und Prioritäten</li>
              <li>Angaben zu vorhandenen Reinigungsmitteln/Ausstattung</li>
              <li>Auswahl zur Foto-/Video-Einwilligung</li>
              <li>Nachricht / Freitext</li>
              <li>
                ggf. technische Server-Logdaten, die vom Hosting-Anbieter
                erfasst werden
              </li>
            </ul>
            <EN>
              The contact form may collect: name, email, phone/WhatsApp
              number, preferred contact method and time, Berlin area,
              requested service, home/office details, approximate size,
              preferred date/timing, office cleaning time preference,
              frequency, focus areas and priorities, supplies/equipment
              availability, photo/video consent selection, message content,
              and technical server log data collected by the hosting
              provider.
            </EN>
          </Section>

          <Section n={4} deTitle="Zwecke der Verarbeitung">
            <p>
              	Die erhobenen Daten werden insbesondere zur Bearbeitung Ihrer Anfrage,
  		zur Erstellung einer Schätzung, zur Terminabstimmung, zur allgemeinen
  		eschäftskommunikation sowie zum sicheren Betrieb der Website verwendet.
            </p>
            <EN>
              	The data collected is mainly used to process your inquiry, prepare an
  		estimate, coordinate appointments, communicate with you, and operate the
  		website securely.
            </EN>
          </Section>

          <Section n={5} deTitle="Rechtsgrundlagen">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Art. 6 Abs. 1 lit. b DSGVO — für Anfragen, Kostenvoranschläge
                und vorvertragliche Kommunikation
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO — für die Sicherheit der Website,
                allgemeine Geschäftskommunikation und administrative
                Abwicklung
              </li>
              <li>
                Art. 6 Abs. 1 lit. a DSGVO — für die freiwillige
                Einwilligung zur Nutzung von Fotos/Videos für
                Marketingzwecke
              </li>
              <li>
                Art. 6 Abs. 1 lit. c DSGVO — soweit gesetzliche
                Verpflichtungen bestehen
              </li>
            </ul>
            <EN>
              Legal bases: Art. 6(1)(b) GDPR for inquiries, estimates, and
              pre-contractual communication; Art. 6(1)(f) GDPR for website
              security, business communication, and administration; Art.
              6(1)(a) GDPR for optional photo/video marketing consent; Art.
              6(1)(c) GDPR where legal obligations apply.
            </EN>
          </Section>

          <Section n={6} deTitle="Kontaktformular">
            <p>
              Das Kontaktformular dieser Website wird über Netlify Forms /
              Netlify-Hosting bereitgestellt. Bei Absenden des Formulars
              werden die von Ihnen eingegebenen Daten an Netlify übermittelt
              und an die oben genannte verantwortliche Stelle weitergeleitet,
              um Ihre Anfrage zu bearbeiten.
            </p>
            <p className="mt-2 text-charcoal/60">
              [Insert final Netlify provider details / DPA details after
              Netlify account setup.]
            </p>
            <EN>
              The contact form is provided via Netlify Forms / Netlify
              hosting. When you submit the form, the data you enter is
              transmitted to Netlify and forwarded to the controller above
              to process your inquiry.
            </EN>
          </Section>

          <Section n={7} deTitle="Kontakt über WhatsApp">
            <p>
              Wenn Sie uns über WhatsApp kontaktieren, werden Ihre
              Telefonnummer und der Inhalt Ihrer Nachricht von WhatsApp
              (Meta) verarbeitet, um die Kommunikation zu ermöglichen. Es
              gelten zusätzlich die Datenschutzbestimmungen von WhatsApp /
              Meta.
            </p>
            <EN>
              If you contact us via WhatsApp, your phone number and message
              content are processed by WhatsApp (Meta) to enable
              communication. WhatsApp's / Meta's own privacy terms also
              apply.
            </EN>
          </Section>

          <Section n={8} deTitle="E-Mail-Kommunikation">
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben
              (E-Mail-Adresse, ggf. Name und Inhalt der Nachricht) zur
              Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.
            </p>
            <EN>
              If you contact us by email, the information you provide (your
              email address, and any name and message content) is stored
              and processed to handle your inquiry.
            </EN>
          </Section>

          <Section n={9} deTitle="Foto-/Video-Einwilligung">
            <p>
              Im Kontaktformular können Sie eine Foto-/Video-Einwilligung
              auswählen (z. B. nur interne Dokumentation, Nutzung für
              Marketing ohne personenbezogene/identifizierende Details, oder
              keine Fotos/Videos). Diese Auswahl wird ausschließlich
              entsprechend Ihrer Angabe verwendet. Fotos oder Videos werden
              nur mit Ihrer ausdrücklichen Zustimmung erstellt oder
              verwendet.
            </p>
            <EN>
              The contact form lets you choose a photo/video consent option
              (e.g. internal records only, marketing use without personal
              or identifying details, or no photos/videos). This selection
              is used only as indicated. Photos or videos are only taken or
              used with your explicit consent.
            </EN>
          </Section>

          <Section n={10} deTitle="Hosting und Server-Logs">
            <p>
              Diese Website wird über Netlify gehostet. Beim Aufruf der
              Website können technische Server-Logdaten (z. B. IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
              Browsertyp) durch den Hosting-Anbieter erfasst werden. Diese
              Daten sind für den sicheren und stabilen Betrieb der Website
              erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-2 text-charcoal/60">
              [Insert final Netlify hosting provider details after
              deployment setup.]
            </p>
            <EN>
              This website is hosted via Netlify. When you visit the
              website, technical server log data (e.g. IP address, date and
              time of access, page requested, browser type) may be recorded
              by the hosting provider. This data is necessary for the
              secure and stable operation of the website (Art. 6(1)(f)
              GDPR).
            </EN>
          </Section>

          <Section n={11} deTitle="Cookies und Tracking">
            <p>
              Diese Website kann auf externe Social-Media-Profile von Ligpit
    	verlinken, zum Beispiel Instagram und Facebook. Es werden keine
    	Instagram- oder Facebook-Feeds in diese Website eingebettet. Beim
    	Anklicken eines solchen Links verlassen Sie diese Website; es gelten
    	die Datenschutzbestimmungen der jeweiligen Plattform.
            </p>
            <EN>
              This website may link to Ligpit's external social media profiles, such
    	as Instagram and Facebook. No Instagram or Facebook feeds are embedded
    	on this website. If you click one of these links, you leave this website
    	and the privacy terms of the respective platform apply.
            </EN>
          </Section>

          <Section n={12} deTitle="Externe Links, z. B. Instagram und Facebook">
            <p>
              Diese Website kann auf das Instagram-Profil von Ligpit
              verlinken. Es wird kein Instagram-Feed in die Website
              eingebettet. Beim Anklicken eines solchen Links verlassen Sie
              diese Website; es gelten die Datenschutzbestimmungen von
              Instagram / Meta.
            </p>
            <EN>
              This website may link to Ligpit's Instagram profile. No
              Instagram feed is embedded on the website. Clicking such a
              link takes you to Instagram, where Instagram's / Meta's own
              privacy terms apply.
            </EN>
          </Section>

          <Section n={13} deTitle="Empfänger personenbezogener Daten">
            <p>
              Personenbezogene Daten werden nur an Empfänger weitergegeben, soweit
    	dies zur Bearbeitung Ihrer Anfrage, zur technischen Bereitstellung der
    	Website oder zur Kommunikation erforderlich ist. Dazu können gehören:
    	der Hosting- und Formular-Anbieter Netlify, der E-Mail-Anbieter sowie
    	WhatsApp / Meta, wenn Sie uns über WhatsApp kontaktieren. Eine
    	Weitergabe an sonstige Dritte erfolgt nicht, außer wenn hierzu eine
    	gesetzliche Verpflichtung besteht.
            </p>
		<p className="mt-2 text-charcoal/60">
    		E-Mail-Anbieter: Namecheap Private Email
  		</p>
            <EN>
              Personal data is only shared with recipients where necessary to process
    	your inquiry, provide the website technically, or communicate with you.
    	This may include the hosting and form provider Netlify, the email
    	provider, and WhatsApp / Meta if you contact us via WhatsApp. Data is
    	not shared with other third parties unless required by law.
            </EN>
	<EN>Email provider: Namecheap Private Email</EN>
          </Section>

          <Section n={14} deTitle="Speicherdauer">
            <p>
              Daten aus Anfragen werden so lange aufbewahrt, wie dies zur
              Bearbeitung der Anfrage und einer eventuellen
              Geschäftsbeziehung erforderlich ist, und anschließend
              gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
            <EN>
              Inquiry data is kept for as long as necessary to process the
              inquiry and any resulting business relationship, and is then
              deleted unless legal retention obligations require otherwise.
            </EN>
          </Section>

          <Section n={15} deTitle="Ihre Rechte nach der DSGVO">
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>
                Widerruf einer erteilten Einwilligung mit Wirkung für die
                Zukunft
              </li>
            </ul>
            <p className="mt-2">
              Zur Ausübung dieser Rechte können Sie sich jederzeit an{" "}
              <a
                href="mailto:hello@ligpit.com"
                className="text-olive hover:text-charcoal"
              >
                hello@ligpit.com
              </a>{" "}
              wenden.
            </p>
            <EN>
              You have the right to access, rectify, erase, or restrict
              processing of your data, to data portability, to object to
              processing, and to withdraw any consent given (with effect
              for the future). To exercise these rights, contact
              hello@ligpit.com.
            </EN>
          </Section>

          <Section n={16} deTitle="Aufsichtsbehörde">
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
    	beschweren. Die für Berlin zuständige Aufsichtsbehörde ist:
            </p>
            <div className="mt-2">
   	 <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
  	 <p>Alt-Moabit 59-61</p>
    	 <p>10555 Berlin</p>
    	 <p>Germany</p>
    	 <p className="mt-2">
      	E-Mail:{" "}
      	<a
        	href="mailto:mailbox@datenschutz-berlin.de"
        	className="text-olive hover:text-charcoal"
	>
        mailbox@datenschutz-berlin.de
      </a>
    </p>
    <p>
      Website:{" "}
      <a
        href="https://www.datenschutz-berlin.de"
        target="_blank"
        rel="noopener noreferrer"
        className="text-olive hover:text-charcoal"
      >
        www.datenschutz-berlin.de
      </a>
    </p>
  </div>

  <EN>
    You have the right to lodge a complaint with a data protection
    supervisory authority. The competent authority for Berlin is the Berlin
    Commissioner for Data Protection and Freedom of Information at the
    address above.
  </EN>
</Section>

          <Section n={17} deTitle="Aktualisierung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung wird aktualisiert, wenn sich der
              Umfang der Datenverarbeitung auf dieser Website ändert, z. B.
              durch die Einführung neuer Tools, Analyse-Dienste oder
              Funktionen.
            </p>
            <EN>
              This privacy policy will be updated whenever the scope of data
              processing on this website changes — for example, if new
              tools, analytics services, or features are introduced.
            </EN>
          </Section>
        </div>
      </div>
    </div>
  );
}
