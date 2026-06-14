// src/components/TrustSection.jsx

const trustItems = [
  {
    title: "Respectful support",
    description:
      "Every space is treated with care, whatever its starting condition.",
  },
  {
    title: "No judgment",
    description:
      "Real homes and offices get messy. That's normal, not something to explain.",
  },
  {
    title: "Nothing discarded without consent",
    description:
      "Items are never thrown away, moved, or decided on without you.",
  },
  {
    title: "Photos only with permission",
    description:
      "Before-and-after photos are only taken and used with your explicit consent.",
  },
  {
    title: "Your home, your pace",
    description:
      "You decide what happens in your space — Ligpit follows your lead.",
  },
  {
    title: "Clear priorities",
    description:
      "Priorities are agreed together before each session, so expectations are clear.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            How Ligpit works with you
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Built on trust
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="bg-cream rounded-2xl border border-olive/15 p-6"
            >
              <h3 className="font-serif text-lg text-charcoal mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
