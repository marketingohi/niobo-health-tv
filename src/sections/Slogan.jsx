import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';
import { getBrandsRow, getPhoto } from '../lib/assets';

// Headline -> subtitle finishes first; the brands row waits until then so
// it never competes with the text for attention.
const HEADLINE_DELAY = 0.1;
const SUBTITLE_DELAY = 0.3;
const BRANDS_DELAY = 0.6;

export default function Slogan({ theme }) {
  const bgPhoto = getPhoto('seccion2-fondo');
  const brandsRow = getBrandsRow();

  return (
    <div className="relative flex w-full flex-col items-center px-6 py-20 sm:px-10 sm:py-28">
      {bgPhoto && (
        <div className="absolute inset-0 overflow-hidden">
          <img src={bgPhoto} alt="" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#0D5257', opacity: 0.8, mixBlendMode: 'multiply' }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-3xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: HEADLINE_DELAY, ease: EASE }}
        >
          De tu sonrisa a tu salud, un mismo ecosistema.
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed tracking-wide sm:mt-8 sm:text-lg"
          style={{ color: theme.subtext }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: SUBTITLE_DELAY, ease: EASE }}
        >
          Nuestro compromiso va más allá de la consulta dental: con clínicas integradas en
          hospitales, formación propia, laboratorio propio y años dedicados a la mejora constante,
          contribuimos también a que la odontología, como sector, siga evolucionando. Porque la
          salud oral no se resuelve solo con un tratamiento, se construye con confianza,
          conocimiento y una mejora que no se detiene. En Niobo Health, somos ese respaldo para el
          paciente y para el sector.
        </motion.p>
      </div>

      {brandsRow && (
        <motion.div
          className="relative z-10 mt-10 w-full overflow-hidden sm:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: BRANDS_DELAY, ease: EASE }}
        >
          <motion.div
            className="flex w-max items-center gap-10 sm:gap-16"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <img
                key={i}
                src={brandsRow}
                alt={i === 0 ? 'OHI · ADHA · IPAO · COPU' : ''}
                aria-hidden={i !== 0}
                className="h-14 w-auto flex-none sm:h-20"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
