// src/data/faqs.js
//
// FAQ content for Ligpit, organized into ecommerce-style help-center
// categories. Used by the FAQ page (category tabs + accordions).

export const faqCategories = [
  "Booking & Availability",
  "Services & Scope",
  "Pricing & Estimates",
  "Office Cleaning",
  "Supplies & Equipment",
  "Privacy, Photos & Trust",
  "Payment, Cancellation & Aftercare",
  "Limits & Safety",
];

export const faqs = [
  // ── CATEGORY 1: Booking & Availability ──────────────────────────
  {
    category: "Booking & Availability",
    question: "How do I book a session?",
    answer:
      "Send an inquiry through the contact form or WhatsApp. Lily will review your request, clarify the scope and priorities, and provide an estimate before confirming the booking.",
  },
  {
    category: "Booking & Availability",
    question: "Is booking instant?",
    answer:
      "No. Booking is not instant yet. Every inquiry is reviewed personally so the service can match your space, priorities, and expected time needed.",
  },
  {
    category: "Booking & Availability",
    question: "How quickly will I receive a reply?",
    answer:
      "Ligpit usually replies within 1-2 business days. For time-sensitive requests, please mention your preferred date or timing in your inquiry. Because every request is reviewed personally, booking is not instant - but you will receive a clear response before anything is confirmed.",
  },
  {
    category: "Booking & Availability",
    question: "Can we discuss my inquiry by call?",
    answer:
      "Yes. If a short call would help clarify the space, priorities, timing, or office-cleaning details, Lily can arrange a WhatsApp or phone call after reviewing your inquiry. Text or email is also fine if you prefer that.",
  },
  {
    category: "Booking & Availability",
    question: "Can I book a session for someone else?",
    answer:
      "Yes, in some cases. Please make sure the person receiving the service knows about the booking and agrees to it. Access, priorities, payment, and any photo/video consent must be clear before the session is confirmed.",
  },
  {
    category: "Booking & Availability",
    question: "What areas of Berlin do you serve?",
    answer:
      "Ligpit currently serves Berlin, with focus on central and reachable areas. Please mention your neighborhood when sending an inquiry.",
  },
  {
    category: "Booking & Availability",
    question: "Do you work on weekends?",
    answer:
      "Weekend availability may be limited and depends on the schedule. Please mention your preferred date when sending your inquiry.",
  },
  {
    category: "Booking & Availability",
    question: "Can I book recurring service?",
    answer:
      "Yes, recurring support may be possible after the first session. The first session helps establish the condition of the space, priorities, and realistic maintenance needs.",
  },

  // ── CATEGORY 2: Services & Scope ────────────────────────────────
  {
    category: "Services & Scope",
    question: "What services does Ligpit offer?",
    answer:
      "Ligpit offers Home Clean, First Reset Clean, Office Clean, Light Organizing, and selected add-ons such as oven, fridge, microwave, interior windows, balcony, inside cabinets, laundry folding, and extra organizing support.",
  },
  {
    category: "Services & Scope",
    question: "What is the difference between Home Clean and First Reset Clean?",
    answer:
      "Home Clean is for regular or one-time cleaning when the space is already manageable. First Reset Clean is for first sessions, catch-up cleaning, neglected areas, or homes that need extra time before regular maintenance.",
  },
  {
    category: "Services & Scope",
    question: "What if not everything fits in the booked time?",
    answer:
      "Priorities are agreed before the session starts. The most important areas are handled first. If more time is needed, Lily will communicate honestly so you can decide whether to extend, adjust priorities, or plan a follow-up session.",
  },
  {
    category: "Services & Scope",
    question: "Can I combine cleaning and light organizing?",
    answer:
      "Yes. Light organizing can be combined with a cleaning session or requested separately, depending on the scope and time needed.",
  },
  {
    category: "Services & Scope",
    question: "Do you clean windows?",
    answer:
      "Interior window cleaning may be possible as an add-on, depending on the window type, access, safety, and time available. Please mention it when booking.",
  },
  {
    category: "Services & Scope",
    question: "Do you offer oven or fridge cleaning?",
    answer:
      "Yes, oven, fridge, and microwave cleaning can be requested as add-ons. These should be mentioned before booking so enough time can be planned.",
  },
  {
    category: "Services & Scope",
    question: "What if the service I need is not listed?",
    answer:
      "If your request is not listed, you can still send an inquiry and describe what you need. Lily will review whether it fits within Ligpit's cleaning and light organizing scope. If the request is outside the service scope, unsafe, or requires a specialist, Lily will let you know honestly before anything is confirmed.",
  },
  {
    category: "Services & Scope",
    question: "How long does a session usually take?",
    answer:
      "The time needed depends on the size, condition, priorities, and type of service. First reset sessions usually take longer than regular maintenance cleaning. Before confirming, Lily will review your request and give an honest estimate of the time likely needed.",
  },
  {
    category: "Services & Scope",
    question: "Do I need to tidy up before you arrive?",
    answer:
      "No perfect preparation is needed. If possible, please make sure important personal items, documents, or valuables are kept safely aside. The session will focus on the priorities agreed in advance.",
  },
  {
    category: "Services & Scope",
    question: "Can you help organize paperwork?",
    answer:
      "Light paperwork sorting may be possible, such as grouping papers, creating simple categories, or helping make an area easier to manage. Ligpit does not make legal, financial, tax, or personal decisions about documents, and nothing is thrown away without your consent.",
  },

  // ── CATEGORY 3: Pricing & Estimates ──────────────────────────────
  {
    category: "Pricing & Estimates",
    question: "Why are prices not listed publicly?",
    answer:
      "Every home, office, and reset need is different. Ligpit provides a clear estimate after reviewing the space, priorities, service type, condition, frequency, access, supplies, and any add-ons. This helps avoid unclear expectations and keeps the service fair for both sides.",
  },
  {
    category: "Pricing & Estimates",
    question: "Will I know the price before confirming?",
    answer: "Yes. You will receive a clear estimate before your booking is confirmed.",
  },
  {
    category: "Pricing & Estimates",
    question: "What affects the estimate?",
    answer:
      "The estimate depends on the service type, space size, current condition, priorities, access, supplies and equipment, cleaning frequency, add-ons, and expected time needed.",
  },
  {
    category: "Pricing & Estimates",
    question: "Are add-ons included automatically?",
    answer:
      "No. Add-ons are estimated separately and should be mentioned before booking so time can be planned properly.",
  },

  // ── CATEGORY 4: Office Cleaning ───────────────────────────────────
  {
    category: "Office Cleaning",
    question: "Do you clean offices?",
    answer:
      "Yes. Ligpit Office Clean is available for small offices, studios, treatment rooms, coworking rooms, and private workspaces in Berlin.",
  },
  {
    category: "Office Cleaning",
    question: "Is office cleaning the same price as home cleaning?",
    answer:
      "No. Office cleaning is quoted separately because it may involve different access arrangements, business requirements, supplies, cleaning frequency, insurance considerations, and scope.",
  },
  {
    category: "Office Cleaning",
    question: "What is included in Ligpit Office Clean?",
    answer:
      "Office Clean can include desks and surfaces, shared kitchen or pantry areas, bathroom cleaning, floors, trash handling, and general workspace reset. The exact scope is agreed in advance.",
  },
  {
    category: "Office Cleaning",
    question: "Can office cleaning happen outside business hours?",
    answer:
      "Yes, depending on location, access, safety, and schedule. Many office cleanings are planned before office hours or after office hours. Cleaning during office hours may be possible if the space is quiet, empty, or the task is limited.",
  },

  // ── CATEGORY 5: Supplies & Equipment ─────────────────────────────
  {
    category: "Supplies & Equipment",
    question: "Do I need to provide cleaning supplies?",
    answer:
      "Clients usually provide basic cleaning supplies and equipment such as vacuum, mop, cloths, and standard cleaning products unless agreed otherwise in advance. This keeps the products familiar to your own space.",
  },
  {
    category: "Supplies & Equipment",
    question: "What if I do not have the right supplies?",
    answer:
      "Mention this during the inquiry. Lily can advise what is needed or discuss whether another arrangement is possible.",
  },
  {
    category: "Supplies & Equipment",
    question: "Why do clients usually provide supplies?",
    answer:
      "Homes and offices often have different surfaces, preferences, sensitivities, and product requirements. Using your own supplies helps avoid damage, allergic reactions, or product mismatch.",
  },

  // ── CATEGORY 6: Privacy, Photos & Trust ──────────────────────────
  {
    category: "Privacy, Photos & Trust",
    question: "Do you take before-and-after photos or videos?",
    answer:
      "Only with your explicit permission. Nothing is shared publicly without your direct approval.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "What are the photo/video consent options?",
    answer:
      "You can choose one of four options: internal records only, photos/videos may be used for marketing without personal or identifying details, photos only for internal records, or no photos/videos.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "Will you judge my home or office?",
    answer:
      "No. Real spaces get messy. Every session is handled calmly and respectfully, whatever the starting condition.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "Is your service confidential?",
    answer:
      "Yes. Your home, office, personal belongings, and private details are treated with care and discretion.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "Will you throw away my things?",
    answer: "No. Nothing is discarded without your consent.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "Can I be home while you work?",
    answer:
      "Yes. You can be home during the session if that feels more comfortable. Some clients prefer to be present at the start to explain priorities, then continue with their day while the work is done.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "What if I feel embarrassed about my space?",
    answer:
      "You do not need to feel embarrassed. Real homes and workspaces get messy, especially during busy or difficult seasons. Ligpit focuses on practical help, clear priorities, and respectful support — not judgment.",
  },
  {
    category: "Privacy, Photos & Trust",
    question: "Can I send photos or videos of my space before booking?",
    answer:
      "Yes, if you feel comfortable. Photos or videos can help Lily understand the space, priorities, and estimated time needed. You can send them later by WhatsApp or email after your inquiry. Please avoid including personal documents, faces, children, valuables, or sensitive private details whenever possible. Nothing is shared publicly without your explicit permission.",
  },

  // ── CATEGORY 7: Payment, Cancellation & Aftercare ────────────────
  {
    category: "Payment, Cancellation & Aftercare",
    question: "How do I pay?",
    answer:
      "Payment is made after the session, usually by cash or bank transfer, unless another arrangement is agreed in advance.",
  },
  {
    category: "Payment, Cancellation & Aftercare",
    question: "What if I need to cancel or reschedule?",
    answer:
      "Please give at least 24 hours' notice whenever possible. If something changes, communicate as early as you can so the slot can be adjusted.",
  },
  {
    category: "Payment, Cancellation & Aftercare",
    question: "What happens after the session?",
    answer:
      "After the session, you can share feedback and discuss whether you would like a follow-up or recurring support.",
  },

  // ── CATEGORY 8: Limits & Safety ───────────────────────────────────
  {
    category: "Limits & Safety",
    question: "Are you insured?",
    answer:
      "Ligpit holds business liability insurance with ERGO Versicherung AG. Coverage is subject to the terms and conditions of the insurance policy. Further details can be provided upon request.",
  },
  {
    category: "Limits & Safety",
    question: "Do you handle pest control or hazardous waste?",
    answer:
      "No. Ligpit does not handle pest control, hazardous waste, mold remediation, biohazards, or unsafe cleaning conditions.",
  },
  {
    category: "Limits & Safety",
    question: "Do you clean exterior windows or high-risk areas?",
    answer:
      "No high-risk tasks are accepted. Work depends on safe access, proper equipment, and reasonable conditions.",
  },
  {
    category: "Limits & Safety",
    question: "Do you provide medical care, childcare, or pet care?",
    answer: "No. Ligpit provides cleaning and light organizing support only.",
  },
];
