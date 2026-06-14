// src/pages/FAQ.jsx
import { useState } from "react";
import Icon from "../components/Icon";
import { faqs, faqCategories } from "../data/faqs";

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-olive/15 py-4 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-medium text-charcoal">{item.question}</span>
        <span
          className={`text-olive text-xl flex-shrink-0 transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-charcoal/75 leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);

  const itemsForCategory = faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            Help Center
          </p>
          <h1 className="font-serif text-4xl text-charcoal">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-charcoal/70 max-w-xl mx-auto">
            Browse by topic, or send a message if you'd like to ask
            something directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Category sidebar — becomes horizontal scroll on mobile */}
          <nav
            aria-label="FAQ categories"
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 -mx-1 px-1">
              {faqCategories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex-shrink-0 text-left text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors whitespace-nowrap lg:whitespace-normal ${
                      isActive
                        ? "bg-olive text-cream border-olive"
                        : "bg-white text-charcoal/75 border-olive/15 hover:border-olive"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Active category content */}
          <div className="bg-white rounded-2xl border border-olive/15 p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-charcoal mb-4">
              {activeCategory}
            </h2>
            <div>
              {itemsForCategory.map((item) => (
                <FaqItem key={item.question} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl border border-olive/15 p-8">
          <h3 className="font-serif text-xl text-charcoal mb-2">
            Still have a question?
          </h3>
          <p className="text-sm text-charcoal/70 mb-4">
            Send a message and Lily will get back to you personally.
          </p>
          <a
            href="https://wa.me/4915158845018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-olive text-cream px-6 py-2.5 text-sm font-medium hover:bg-charcoal transition-colors"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Request via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
