import { motion } from 'framer-motion';
import { VALUES } from '../data/values';

const EASE = [0.65, 0, 0.35, 1];

export default function Valores({ theme }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
      <div className="relative mb-10 flex flex-col items-center py-4">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3.5rem,_6.8vw,_10rem)] font-bold uppercase leading-none tracking-wide"
          style={{ color: '#0D5257', opacity: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          Our values
        </motion.span>

        <motion.h2
          className="relative z-10 text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Los valores que nos definen
        </motion.h2>
      </div>

      <div className="flex w-full max-w-[1800px] items-center justify-between">
        {VALUES.map((v, i) => (
          <motion.div
            key={`${v.letter}-${i}`}
            className="relative flex flex-1 flex-col items-center justify-center px-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(4.2rem,_8.7vw,_13rem)] font-light uppercase leading-none tracking-wide"
              style={{ color: '#0D5257', opacity: 0.1 }}
            >
              {v.letter}
            </span>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold tracking-wide" style={{ color: '#0D5257' }}>
                {v.title}
              </h3>
              <p className="mt-3 text-base font-normal leading-relaxed" style={{ color: '#0D5257' }}>
                {v.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
