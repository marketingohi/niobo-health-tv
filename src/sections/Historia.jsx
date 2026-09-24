import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Historia({ theme }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-24">
      <div className="relative mb-6 flex flex-col items-center py-4">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(2.2rem,_6vw,_9rem)] font-bold uppercase leading-none tracking-wide"
          style={{ color: '#0D5257', opacity: 0.1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          Our history
        </motion.span>

        <motion.h2
          className="relative z-10 text-4xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Nuestra historia
        </motion.h2>
      </div>

      <Timeline theme={theme} />
    </div>
  );
}
