// src/components/ServiceCard.jsx
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-olive/15 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-3">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>

      <h3 className="font-serif text-lg text-charcoal leading-snug mb-0.5">
        {service.name}
      </h3>
      <p className="text-xs text-gold font-medium mb-2">{service.tagline}</p>
      <p className="text-sm text-charcoal/80 leading-relaxed mb-3">
        {service.summary}
      </p>

      <ul className="space-y-1.5 mb-4">
        {service.bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-charcoal/80"
          >
            <Icon
              name="check"
              className="h-4 w-4 mt-0.5 text-olive flex-shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p className="text-xs text-charcoal/50 mb-3">{service.priceNote}</p>
        <Link
          to={`/services/${service.id}`}
          className="text-sm font-medium text-olive hover:text-charcoal"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
