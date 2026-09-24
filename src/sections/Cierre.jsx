import { motion } from 'framer-motion';
import { getBrandsColor } from '../lib/assets';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Cierre({ theme }) {
  const brandsColor = getBrandsColor();

  return (
    <div className="mx-auto flex w-full flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-24">
      <div className="relative mb-6 flex flex-col items-center py-2">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(2.2rem,_6vw,_9rem)] font-bold uppercase leading-none tracking-wide"
          style={{ color: '#0D5257', opacity: 0.1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          New adventure
        </motion.span>

        <motion.h2
          className="relative z-10 text-center text-3xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Una nueva aventura comienza
        </motion.h2>
      </div>

      <motion.p
        className="max-w-xl text-xl font-light leading-relaxed tracking-wide sm:text-2xl"
        style={{ color: theme.subtext }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
      >
        ¿Estáis preparad@s?
      </motion.p>

      {brandsColor && (
        <motion.img
          src={brandsColor}
          alt="OHI · COPU · IPAO · ADHA"
          className="mt-10 w-full max-w-[700px] sm:mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        />
      )}
    </div>
  );
}
