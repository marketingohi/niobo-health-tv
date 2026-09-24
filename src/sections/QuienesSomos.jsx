import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';

export default function QuienesSomos({ theme }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-10 sm:py-24">
      <div className="relative flex flex-col items-center py-4 sm:py-6">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(2.6rem,_8vw,_12rem)] font-bold uppercase leading-none tracking-wide text-white"
          style={{ opacity: 0.12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          Who we are
        </motion.span>

        <motion.h2
          className="relative z-10 text-4xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Quiénes somos
        </motion.h2>
      </div>

      <motion.p
        className="mt-6 text-lg font-light leading-relaxed tracking-wide sm:mt-8 sm:text-2xl md:text-3xl"
        style={{ color: theme.text }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
      >
        Niobo Health es el ecosistema de salud que reúne, bajo un mismo respaldo, clínicas
        dentales integradas en hospitales, un instituto de formación de postgrados, un
        laboratorio propio y clínicas dentales universitarias donde el conocimiento se pone al
        servicio del paciente.{' '}
        <span className="font-bold">
          Cuatro formas de trabajar, un mismo estándar: garantizar que cada paciente, sea cual sea
          su caso, reciba siempre el mejor tratamiento posible.
        </span>
      </motion.p>
    </div>
  );
}
