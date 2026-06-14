// src/data/services.js
//
// Core service offerings and add-ons for Ligpit.
//
// Each service has:
// - Short fields (tagline, summary, bullets, priceNote) for the
//   overview cards on Home and Services pages — kept brief and scannable.
// - Longer fields (fullDescription, includes, notIncluded, priorities,
//   pricingExplanation) for the individual service detail pages.
//
// IMPORTANT: No fixed hourly rates are referenced anywhere. All pricing
// is estimate-based and confirmed personally after reviewing the inquiry.

export const coreServices = [
  {
    id: "home-clean",
    name: "Ligpit Home Clean",
    shortName: "Home Clean",
    tagline: "Regular or one-time home cleaning",
    icon: "home",

    // ── Overview card (short) ──────────────────────────────────
    summary:
      "For apartments and homes that need calm, practical cleaning support based on agreed priorities.",
    bullets: [
      "Kitchen and bathroom basics",
      "Floors, dusting, and surfaces",
      "Priority areas agreed first",
    ],
    priceNote: "Personal estimate after reviewing your space and priorities",

    // ── Detail page (long) ─────────────────────────────────────
    fullDescription:
      "Ligpit Home Clean is for regular or one-time cleaning of apartments and homes. It's built around the areas that matter most to you, agreed together before each session, so the time is spent where it counts.",
    includes: [
      "Kitchen surfaces and sink",
      "Bathroom, toilet, shower or bathtub",
      "Dusting, vacuuming, and mopping",
      "Light tidying of agreed priority areas",
    ],
    notIncluded: [
      "Deep oven, fridge, or microwave cleaning (available as add-ons)",
      "Interior window cleaning (available as an add-on)",
      "Heavy decluttering or full reorganizing (see Light Organizing)",
    ],
    prioritiesNote:
      "Before each session, you and Lily agree on which areas matter most. Those priority areas are handled first, so even if time is limited, the things you care about are covered.",
    pricingExplanation:
      "There's no fixed hourly rate listed publicly, because every home is different. After you share a few details about your space — size, condition, and priorities — Lily will give you a personal estimate before anything is booked.",
  },

  {
    id: "first-reset-clean",
    name: "Ligpit First Reset Clean",
    shortName: "First Reset Clean",
    tagline: "A fresh start for homes that need extra care",
    icon: "sparkles",

    // ── Overview card (short) ──────────────────────────────────
    summary:
      "For first sessions, catch-up cleaning, or spaces that need more time before regular maintenance.",
    bullets: [
      "Includes Home Clean basics",
      "Extra time for catch-up areas",
      "Priorities agreed before starting",
    ],
    priceNote: "Personal estimate — may take more time than a regular Home Clean",

    // ── Detail page (long) ─────────────────────────────────────
    fullDescription:
      "Ligpit First Reset Clean is designed for the first time Lily cleans your space — or for homes that have fallen behind and need a proper reset before settling into regular maintenance. First sessions often take longer, simply because the space, its condition, and your priorities all need to be understood properly for the first time.",
    goodFitFor: [
      "Catch-up cleaning after a busy period",
      "Neglected areas that haven't been cleaned in a while",
      "A first session before moving to regular maintenance",
      "A reset before guests, a move, or a new routine",
    ],
    oneSessionNote:
      "Depending on the condition of the space, not everything may be finished in a single session. Lily will be upfront about this from the start — priorities are tackled first, and if a follow-up session would help, you'll know well in advance, not as a surprise.",
    pricingExplanation:
      "Because first sessions vary so much from home to home, pricing is always a personal estimate. Lily reviews your situation, gives you an honest idea of the time involved, and confirms an estimate before booking.",
  },

  {
    id: "office-clean",
    name: "Ligpit Office Clean",
    shortName: "Office Clean",
    tagline: "Reliable cleaning for small offices and workspaces",
    icon: "briefcase",

    // ── Overview card (short) ──────────────────────────────────
    summary:
      "For small offices, studios, treatment rooms, coworking rooms, and private workspaces in Berlin.",
    bullets: [
      "Desks, surfaces, and shared areas",
      "Kitchen, bathroom, and floors",
      "Scope agreed in advance",
    ],
    priceNote: "Custom quote based on scope, access, frequency, and business requirements",

    // ── Detail page (long) ─────────────────────────────────────
    fullDescription:
      "Ligpit Office Clean is for small offices, studios, treatment rooms, coworking rooms, and private workspaces across Berlin. It's a reliable, consistent cleaning service for spaces where a calm, well-kept environment matters — without the overhead of a large commercial cleaning company.",
    includes: [
      "Desks and shared surfaces",
      "Shared kitchen or pantry area",
      "Bathroom cleaning",
      "Floors and general tidying",
      "Trash handling and a general workspace reset",
    ],
    whyQuotedSeparately:
      "Office spaces vary far more than homes do — in size, access arrangements, working hours, and the standards a business needs to meet. Because of this, Office Clean is always quoted separately rather than priced the same as home cleaning.",
    considerations: [
      "Timing: cleaning can often be planned before office hours, after office hours, or — for quiet or empty spaces — during office hours",
      "Access: how and when Lily can enter the space (keys, codes, reception, working hours)",
      "Frequency: one-time, weekly, or another recurring schedule",
      "Supplies: whether the office provides cleaning products and equipment, or this needs to be arranged",
      "Insurance: some workspaces have specific insurance or compliance requirements, which are clarified before confirming",
    ],
    pricingExplanation:
      "Every office is reviewed individually. After sharing some details about your space — size, access, frequency, and any specific requirements — you'll receive a custom quote before anything is confirmed.",
  },

  {
    id: "light-organizing",
    name: "Ligpit Light Organizing",
    shortName: "Light Organizing",
    tagline: "Calmer systems for everyday spaces",
    icon: "layout-grid",

    // ── Overview card (short) ──────────────────────────────────
    summary:
      "For sorting, grouping, folding, arranging, and creating simple systems that are easier to maintain.",
    bullets: [
      "Sorting and grouping",
      "Folding and arranging",
      "Can be combined with cleaning",
    ],
    priceNote: "Estimated based on scope and time",

    // ── Detail page (long) ─────────────────────────────────────
    fullDescription:
      "Ligpit Light Organizing is about creating simple, livable systems for everyday spaces — sorting through what's there, grouping similar items together, folding and arranging things so they're easy to find and easy to put back.",
    whatItIncludes: [
      "Sorting items into groups (keep, donate, unsure, etc.)",
      "Grouping similar items together in drawers, shelves, or cupboards",
      "Folding and arranging clothing, linens, or other items",
      "Setting up simple, low-maintenance systems for daily use",
    ],
    whatItIsNot: [
      "Heavy disposal or large-scale decluttering projects",
      "Renovation or furniture assembly",
      "Professional interior design or styling",
      "Archive management or document organization systems",
    ],
    combinationNote:
      "Light Organizing works well on its own, or combined with a Home Clean or First Reset Clean session — for example, organizing a kitchen or wardrobe while the rest of the space is cleaned.",
    pricingExplanation:
      "Like all Ligpit services, Light Organizing is estimated based on the scope of the space and the time realistically needed — there's no fixed price list, but you'll always know the estimate before booking.",
  },
];

export const addOnServices = [
  {
    id: "oven",
    name: "Oven",
    description: "Deep clean of oven interior and racks.",
  },
  {
    id: "fridge",
    name: "Fridge",
    description: "Interior clean-out and wipe-down of the refrigerator.",
  },
  {
    id: "microwave",
    name: "Microwave",
    description: "Interior and exterior clean of the microwave.",
  },
  {
    id: "windows",
    name: "Interior Windows",
    description: "Interior window cleaning (specify rooms or areas).",
  },
  {
    id: "balcony",
    name: "Balcony",
    description: "Sweeping, wiping, and light tidying of balcony areas.",
  },
  {
    id: "cabinets",
    name: "Inside Cabinets",
    description: "Wipe-down and light organizing inside cabinets or drawers.",
  },
  {
    id: "laundry",
    name: "Laundry Folding",
    description: "Folding and putting away clean laundry.",
  },
  {
    id: "extra-organizing",
    name: "Extra Organizing Support",
    description: "Additional time for organizing beyond the booked session.",
  },
];

// Used for the "Pricing & Estimates" section
export const pricingInfo = {
  homeClean: {
    label: "Home Clean & First Reset Clean",
    badge: "Personal estimate",
    text:
      "For home cleaning and first reset sessions, the estimate depends on the size of the space, current condition, priorities, and whether extra catch-up cleaning is needed. First reset sessions may require more time than regular maintenance.",
  },
  officeClean: {
    label: "Ligpit Office Clean",
    badge: "Custom quote",
    text:
      "Office cleaning is quoted separately based on scope, space size, access, supplies, insurance requirements, cleaning frequency, and whether cleaning happens before, during, or after office hours.",
  },
  addOns: {
    label: "Add-ons",
    badge: "Estimated separately",
    text:
      "Add-ons such as oven, fridge, microwave, interior windows, balcony, inside cabinets, laundry folding, or extra organizing are estimated separately depending on the task and time required.",
  },
};
