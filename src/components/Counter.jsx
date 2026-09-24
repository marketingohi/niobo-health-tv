import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EASE } from '../lib/motion';

// Counts up from 0 to `value` the first time it scrolls into view, then
// stays put — the prefix/suffix only fade in once the count settles, so
// the eye reads the number landing before the unit label confirms it.
export default function Counter({ value, prefix = '', suffix = '', duration = 1.3, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [inView, value, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {prefix}
      </motion.span>
      {display}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {suffix}
      </motion.span>
    </span>
  );
}
