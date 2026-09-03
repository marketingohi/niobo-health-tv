import { motion } from 'framer-motion';
import { getBrandsRow, getPhoto } from '../lib/assets';

const EASE = [0.65, 0, 0.35, 1];

// Headline -> subtitle finishes around 1.25s in; the brands row waits until
// then so it never competes with the text for attention.
const HEADLINE_DELAY = 0.2;
const SUBTITLE_DELAY = 0.55;
const BRANDS_DELAY = 1.55;

export default function Slogan({ theme }) {
  const bgPhoto = getPhoto('seccion2-fondo');
  const brandsRow = getBrandsRow();

  return (
    <>
      {bgPhoto && (
        <div className="absolute inset-0 overflow-hidden">
          <img src={bgPhoto} alt="" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#0D5257', opacity: 0.8, mixBlendMode: 'multiply' }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-4xl px-10 text-center">
        <motion.h1
          className="text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: HEADLINE_DELAY, ease: EASE }}
        >
          De tu sonrisa a tu salud, un mismo ecosistema.
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed tracking-wide"
          style={{ color: theme.subtext }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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
          className="relative z-10 mt-14 w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: BRANDS_DELAY, ease: EASE }}
        >
          <motion.div
            className="flex w-max items-center gap-16"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <img
                key={i}
                src={brandsRow}
                alt={i === 0 ? 'OHI · ADHA · IPAO · COPU' : ''}
                aria-hidden={i !== 0}
                className="h-20 w-auto flex-none"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
