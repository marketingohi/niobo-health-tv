import { motion } from 'framer-motion';
import { getLogo } from '../lib/assets';
import Mark from './Mark';

const EASE = [0.65, 0, 0.35, 1];

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
        className="h-auto max-h-40 w-auto"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      />
    );
  }

  return (
    <div className="flex items-center gap-10">
      <Mark color={theme.text} size={148} />
      <div className="flex flex-col items-start gap-3">
        <motion.span
          className="text-5xl font-medium uppercase"
          style={{ letterSpacing: '0.12em', color: theme.text }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.85, ease: EASE }}
        >
          Niobo Health
        </motion.span>
        <motion.span
          className="text-sm font-light uppercase"
          style={{ letterSpacing: '0.25em', color: theme.subtext }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 2.05, ease: EASE }}
        >
          De tu sonrisa a tu salud, un mismo ecosistema
        </motion.span>
      </div>
    </div>
  );
}
