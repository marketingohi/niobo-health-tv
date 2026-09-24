import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Tratarte({ theme }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 text-center sm:px-10 sm:py-24">
      <motion.h2
        className="mb-6 text-3xl leading-snug tracking-wide sm:mb-8 sm:text-4xl"
        style={{ color: theme.text }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <span className="font-bold">Respaldo </span>
        <span className="font-extralight uppercase" style={{ letterSpacing: '0.15em' }}>
          Niobo
        </span>
      </motion.h2>

      <motion.p
        className="text-center text-lg font-light leading-relaxed tracking-wide sm:text-xl"
        style={{ color: theme.text }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE }}
      >
        Tratarte en un centro Niobo Health significa nunca estar solo: profesionales en formación
        constante, la cercanía de siempre, respaldo especializado si tu caso se complica, y una
        prótesis fabricada bajo nuestro propio estándar de calidad.
      </motion.p>
    </div>
  );
}
