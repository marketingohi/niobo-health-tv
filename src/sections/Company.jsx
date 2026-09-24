import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { STATS } from '../data/stats';
import { getBrandsRow } from '../lib/assets';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Company({ theme }) {
  const brandsRow = getBrandsRow();

  return (
    <div className="flex w-full max-w-5xl flex-col items-center px-6 py-16 sm:px-10 sm:py-24">
      <div className="relative mb-10 flex flex-col items-center py-4 sm:mb-16">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(2.4rem,_6.8vw,_10rem)] font-bold uppercase leading-none tracking-wide text-white"
          style={{ opacity: 0.12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          Our company
        </motion.span>

        <motion.h2
          className="relative z-10 text-4xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Our Company
        </motion.h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 text-center sm:grid-cols-3">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: EASE }}
          >
            <span
              className="text-4xl font-extralight tracking-wide sm:text-5xl"
              style={{ color: theme.text }}
            >
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                delay={0.1}
              />
            </span>
            <span
              className="mt-5 max-w-[260px] text-base font-light uppercase tracking-[0.2em]"
              style={{ color: theme.subtext }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>

      {brandsRow && (
        <motion.img
          src={brandsRow}
          alt="OHI · ADHA · IPAO · COPU"
          className="mt-12 w-full max-w-[900px] sm:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        />
      )}
    </div>
  );
}
