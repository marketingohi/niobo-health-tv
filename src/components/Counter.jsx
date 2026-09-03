import { animate, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE = [0.65, 0, 0.35, 1];

// Counts up from 0 to `value` on every mount (sections remount each time
// they become active, so this replays every time the viewer arrives here).
// The prefix/suffix only fade in once the count settles, so the eye reads
// the number landing before the unit label confirms what it means.
export default function Counter({ value, prefix = '', suffix = '', duration = 1.3, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplay(0);
    setDone(false);
    const controls = animate(0, value, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [value, duration, delay]);

  return (
    <span className="tabular-nums">
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
