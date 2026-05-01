import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Service Card ────────────────────────────────────────────────────────
export function ServiceCard({ service, index = 0 }) {
  return (
    <div
      className="group bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mb-6">
        <ServiceIcon type={service.icon} />
      </div>
      <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
      <p className="text-charcoal/70 mb-4 leading-relaxed">{service.shortDesc}</p>
      <p className="text-gold font-medium text-sm">{service.price}</p>
    </div>
  )
}

// ── Service Icon ─────────────────────────────────────────────────────────
function ServiceIcon({ type }) {
  const icons = {
    declutter: (
      <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" />
      </svg>
    ),
    organize: (
      <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    moving: (
      <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V15m18 3.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-12.75H7.5m9 0V5.625c0-.621-.504-1.125-1.125-1.125h-7.5c-.621 0-1.125.504-1.125 1.125V6m9 0H9m0 0v4.5" />
      </svg>
    ),
    wardrobe: (
      <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m7.5 0h-7.5m7.5 0l.75 10.5H5.25l.75-10.5" />
      </svg>
    ),
    kitchen: (
      <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    paper: (
      <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  }
  return icons[type] || icons.declutter
}

// ── FAQ Item ─────────────────────────────────────────────────────────────
export function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-serif text-lg pr-4 group-hover:text-olive transition-colors">{faq.q}</span>
        <span className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-charcoal/70 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  )
}

// ── Page Header ──────────────────────────────────────────────────────────
export function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-charcoal text-white section-padding">
      <div className="container-site text-center">
        <h1 className="text-display-sm md:text-display mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-16 h-0.5 bg-gold mx-auto mt-8" />
      </div>
    </section>
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
