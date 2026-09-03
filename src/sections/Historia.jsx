import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

const EASE = [0.65, 0, 0.35, 1];

export default function Historia({ theme }) {
  return (
    <div className="flex w-full flex-col items-center px-10">
      <div className="relative mb-6 flex flex-col items-center py-4">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3.2rem,_6vw,_9rem)] font-bold uppercase leading-none tracking-wide"
          style={{ color: '#0D5257', opacity: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          Our history
        </motion.span>

        <motion.h2
          className="relative z-10 text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Nuestra historia
        </motion.h2>
      </div>

      <Timeline theme={theme} />
    </div>
  );
}
