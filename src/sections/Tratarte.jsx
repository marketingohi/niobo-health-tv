import { motion } from 'framer-motion';
import VideoPlaceholder from '../components/VideoPlaceholder';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Tratarte({ theme }) {
  return (
    <div className="w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
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
      <motion.div
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      >
        <VideoPlaceholder />
      </motion.div>
    </div>
  );
}
