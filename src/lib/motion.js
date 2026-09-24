// Shared motion language for the whole landing page. Every reveal uses the
// same easing curve and the same "once" viewport rule — animations fire the
// first time a section scrolls into view and never replay, so the page
// reads as one consistent piece of motion instead of a different effect
// per section.
export const EASE = [0.65, 0, 0.35, 1];

// amount: how much of the element must be visible before it fires.
export const VIEWPORT = { once: true, amount: 0.3 };
export const VIEWPORT_EARLY = { once: true, amount: 0.15 };

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT,
};
