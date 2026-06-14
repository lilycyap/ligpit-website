// src/pages/Contact.jsx
//
// NETLIFY FORMS SETUP
// --------------------
// This form is configured for Netlify Forms:
// - <form> has name="ligpit-inquiry", method="POST", data-netlify="true"
// - A hidden input "form-name" matches the form name (required by Netlify)
// - A honeypot field ("bot-field") is included for spam protection
//   (configured via netlify.attributes / data-netlify-honeypot below)
//
// Because this is a client-rendered React app (Vite), Netlify needs a
// static HTML version of this form to detect it at build time. A copy
// of this form's fields is included in /public/forms.html — do not
// delete that file, and keep its fields in sync with this file if you
// add or remove fields.
//
// After deploying to Netlify:
// 1. Go to Site settings → Forms in the Netlify dashboard.
// 2. Set up a notification (Forms → Settings → Form notifications)
//    to send new submissions to hello@ligpit.com.

import { useState } from "react";
import Icon from "../components/Icon";

const FORM_NAME = "ligpit-inquiry";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...data }),
      });
      setSubmitted(true);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            Get in touch
          </p>
          <h1 className="font-serif text-4xl text-charcoal">
            Request Availability
          </h1>
          <p className="mt-3 text-charcoal/70">
            Tell Lily a little about your home, office, or workspace.
            Booking is not instant — every inquiry is reviewed personally
            so the scope, priorities, and estimate are clear before
            confirming.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8 mb-8">
          {submitted ? (
            <div className="text-center py-10">
              <h2 className="font-serif text-2xl text-charcoal mb-2">
                Thank you
              </h2>
              <p className="text-charcoal/70">
                Thank you — your inquiry has been received. Lily will
                review the details and get back to you personally.
              </p>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Required for Netlify Forms */}
              <input type="hidden" name="form-name" value={FORM_NAME} />

              {/* Honeypot field — hidden from real users */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>

              {error && (
                <p className="text-sm text-red-600">
                  Something went wrong sending your inquiry. Please try
                  again, or message via WhatsApp instead.
                </p>
              )}

              {/* ── Contact details ─────────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                />
              </div>

              {/* ── Contact preferences ──────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="preferredContactMethod"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Preferred contact method
                  </label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                  >
                    <option>WhatsApp text</option>
                    <option>WhatsApp call</option>
                    <option>Email</option>
                    <option>Phone call</option>
                    <option>No preference</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredContactTime"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Preferred contact time
                  </label>
                  <select
                    id="preferredContactTime"
                    name="preferredContactTime"
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                  >
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Berlin area or neighborhood
                </label>
                <input
                  id="area"
                  name="area"
                  type="text"
                  placeholder="e.g. Neukölln, Kreuzberg"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                />
              </div>

              {/* ── Service & space details ─────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                  >
                    <option>Ligpit Home Clean</option>
                    <option>Ligpit First Reset Clean</option>
                    <option>Ligpit Office Clean</option>
                    <option>Ligpit Light Organizing</option>
                    <option>Add-ons</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="spaceType"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Is this for a home or office?
                  </label>
                  <select
                    id="spaceType"
                    name="spaceType"
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                  >
                    <option>Home</option>
                    <option>Office</option>
                    <option>Studio / treatment room</option>
                    <option>Coworking room</option>
                    <option>Other workspace</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Approximate size
                  </label>
                  <input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="2-room apartment, approx. 60 m² / small office, approx. 100 m²"
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timing"
                    className="block text-sm font-medium text-charcoal mb-1"
                  >
                    Preferred date or timing
                  </label>
                  <input
                    id="timing"
                    name="timing"
                    type="text"
                    placeholder="e.g. next week, weekday mornings"
                    className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="officeTiming"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  For office / workspace cleaning, preferred cleaning time
                </label>
                <select
                  id="officeTiming"
                  name="officeTiming"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                >
                  <option>Before office hours</option>
                  <option>After office hours</option>
                  <option>During office hours, only if quiet or empty</option>
                  <option>Flexible / to be discussed</option>
                  <option>Not applicable</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="frequency"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  One-time, first reset, or regular support
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                >
                  <option>One-time</option>
                  <option>First reset</option>
                  <option>Weekly</option>
                  <option>Biweekly</option>
                  <option>Monthly</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="focusAreas"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Space or area to focus on
                </label>
                <input
                  id="focusAreas"
                  name="focusAreas"
                  type="text"
                  placeholder="e.g. kitchen, bathroom, whole apartment"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                />
              </div>

              <div>
                <label
                  htmlFor="priorities"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Main priorities
                </label>
                <textarea
                  id="priorities"
                  name="priorities"
                  rows={3}
                  placeholder="What matters most for this session?"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                />
              </div>

              {/* ── Supplies ─────────────────────────────────────── */}
              <div>
                <label
                  htmlFor="supplies"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Do you have basic cleaning supplies and equipment
                  available?
                </label>
                <select
                  id="supplies"
                  name="supplies"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not sure</option>
                </select>
              </div>

              {/* ── Photo/video consent ──────────────────────────── */}
              <fieldset>
                <legend className="block text-sm font-medium text-charcoal mb-2">
                  Photo/video consent
                </legend>
                <div className="space-y-2">
                  {[
                    "Internal records only",
                    "Photos/videos may be used for marketing without personal or identifying details",
                    "Photos only for internal records",
                    "No photos/videos",
                  ].map((option, idx) => (
                    <label
                      key={option}
                      className="flex items-start gap-3 text-sm text-charcoal/80"
                    >
                      <input
                        type="radio"
                        name="photoConsent"
                        value={option}
                        defaultChecked={idx === 0}
                        className="mt-0.5 accent-olive"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* ── Share space photos for booking ───────────────── */}
              <div>
                <label
                  htmlFor="shareSpacePhotos"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Would you be open to sharing photos or videos of your
                  space later if needed?
                </label>
                <select
                  id="shareSpacePhotos"
                  name="shareSpacePhotos"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40 bg-white"
                >
                  <option>Yes, by WhatsApp</option>
                  <option>Yes, by email</option>
                  <option>No, I prefer not to share photos/videos</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* ── Message ──────────────────────────────────────── */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Anything else you'd like Lily to know?"
                  className="w-full rounded-lg border border-olive/25 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40"
                />
              </div>

              {/* ── Consent checkbox ─────────────────────────────── */}
              <label className="flex items-start gap-3 text-sm text-charcoal/80">
                <input
                  type="checkbox"
                  name="contactConsent"
                  required
                  className="mt-0.5 accent-olive"
                />
                <span>I agree to be contacted about my inquiry.</span>
              </label>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium hover:bg-olive transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>

        <div className="text-center">
          <p className="text-sm text-charcoal/60 mb-3">
            Prefer to message directly?
          </p>
          <a
            href="https://wa.me/4915158845018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-olive text-olive px-6 py-2.5 text-sm font-medium hover:bg-olive hover:text-cream transition-colors"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Request via WhatsApp
          </a>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wide text-charcoal/40 mb-3">
              Or find Ligpit here
            </p>
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.instagram.com/ligpit.berlin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ligpit on Instagram"
                className="text-charcoal/50 hover:text-olive transition-colors"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ligpit.berlin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ligpit on Facebook"
                className="text-charcoal/50 hover:text-olive transition-colors"
              >
                <Icon name="facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
