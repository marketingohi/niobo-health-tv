import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { STATS } from '../data/stats';
import { getBrandsRow } from '../lib/assets';

const EASE = [0.65, 0, 0.35, 1];

export default function Company({ theme }) {
  const brandsRow = getBrandsRow();

  return (
    <div className="flex w-full max-w-5xl flex-col items-center px-10">
      <div className="relative mb-16 flex flex-col items-center py-4">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3.5rem,_6.8vw,_10rem)] font-bold uppercase leading-none tracking-wide text-white"
          style={{ opacity: 0.12 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          Our company
        </motion.span>

        <motion.h2
          className="relative z-10 text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Our Company
        </motion.h2>
      </div>

      <div className="grid w-full grid-cols-3 gap-10 text-center">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: EASE }}
          >
            <span className="text-5xl font-extralight tracking-wide" style={{ color: theme.text }}>
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                delay={0.5 + i * 0.1}
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
          className="mt-16 w-full max-w-[900px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.9, ease: EASE }}
        />
      )}
    </div>
  );
}
