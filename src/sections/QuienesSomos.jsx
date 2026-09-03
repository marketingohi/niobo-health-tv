import { motion } from 'framer-motion';

const EASE = [0.65, 0, 0.35, 1];

export default function QuienesSomos({ theme }) {
  return (
    <div className="max-w-4xl px-10 text-center">
      <div className="relative flex flex-col items-center py-6">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[12rem] font-bold uppercase leading-none tracking-wide text-white"
          style={{ opacity: 0.12 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          Who we are
        </motion.span>

        <motion.h2
          className="relative z-10 text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Quiénes somos
        </motion.h2>
      </div>

      <motion.p
        className="mt-8 text-3xl font-light leading-relaxed tracking-wide"
        style={{ color: theme.text }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
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
