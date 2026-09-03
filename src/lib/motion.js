// Shared motion language for the whole deck. Every transition in the app —
// the main section change and the timeline's own left/right sub-navigation —
// pulls its duration/easing from here, so the deck reads as one continuous
// piece of motion instead of a different animation per surface.
export const TRANSITION = { duration: 0.9, ease: [0.65, 0, 0.35, 1] };

export const verticalVariants = {
  enter: (direction) => ({ opacity: 0, y: direction > 0 ? '6%' : '-6%' }),
  center: { opacity: 1, y: '0%' },
  exit: (direction) => ({ opacity: 0, y: direction > 0 ? '-6%' : '6%' }),
};

export const horizontalVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? '4%' : '-4%' }),
  center: { opacity: 1, x: '0%' },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? '-4%' : '4%' }),
};
