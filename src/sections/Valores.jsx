import { motion } from 'framer-motion';
import { VALUES } from '../data/values';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Valores({ theme }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-24">
      <div className="relative mb-10 flex flex-col items-center py-4">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(2.4rem,_6.8vw,_10rem)] font-bold uppercase leading-none tracking-wide"
          style={{ color: '#0D5257', opacity: 0.1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          Our values
        </motion.span>

        <motion.h2
          className="relative z-10 text-4xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Los valores que nos definen
        </motion.h2>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-10 xl:gap-16">
        {VALUES.map((v, i) => (
          <motion.div
            key={`${v.letter}-${i}`}
            className="relative flex w-full flex-1 flex-col items-center justify-center px-3 lg:w-[220px] lg:flex-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: EASE }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(3.2rem,_8.7vw,_13rem)] font-light uppercase leading-none tracking-wide"
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
