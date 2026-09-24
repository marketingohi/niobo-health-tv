import { motion } from 'framer-motion';
import { getLogo } from '../lib/assets';
import { EASE, VIEWPORT } from '../lib/motion';
import Mark from './Mark';

// Drop the real lockup at /src/assets/logo/niobo-health-logo.svg (or .png)
// and it replaces the hand-built mark + wordmark below with a simple
// fade/scale reveal of the real file.
export default function Logo({ theme }) {
  const src = getLogo(theme.mode);

  if (src) {
    return (
      <motion.img
        src={src}
        alt="Niobo Health"
        className="h-auto max-h-24 w-auto max-w-[88vw] sm:max-h-32 md:max-h-40"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE }}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10">
      <Mark color={theme.text} size={110} />
      <div className="flex flex-col items-center gap-3 sm:items-start">
        <motion.span
          className="text-3xl font-medium uppercase sm:text-4xl md:text-5xl"
          style={{ letterSpacing: '0.12em', color: theme.text }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
        >
          Niobo Health
        </motion.span>
        <motion.span
          className="text-center text-xs font-light uppercase sm:text-left sm:text-sm"
          style={{ letterSpacing: '0.25em', color: theme.subtext }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.55, delay: 0.7, ease: EASE }}
        >
          De tu sonrisa a tu salud, un mismo ecosistema
        </motion.span>
      </div>
    </div>
  );
}
