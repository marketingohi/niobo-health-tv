import { motion } from 'framer-motion';
import niElement from '../assets/elements/ni-element.png';
import PhotoStrip from '../components/PhotoStrip';
import { FORMULA_INTRO, FORMULA_PHASES } from '../data/formula';
import { getPhoto } from '../lib/assets';

const EASE = [0.65, 0, 0.35, 1];

export default function Formula({ theme }) {
  const photos = ['modelo-1', 'modelo-2', 'modelo-3', 'modelo-4'].map((name) => getPhoto(name));

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-10">
        <motion.div
          className="mb-6 flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <img src={niElement} alt="" className="h-16 w-16" />
          <p className="text-xl font-light tracking-wide" style={{ color: theme.subtext }}>
            La fórmula ganadora
          </p>
          <h2 className="text-6xl leading-snug tracking-wide" style={{ color: theme.text }}>
            <span className="font-bold">Modelo </span>
            <span className="font-extralight uppercase" style={{ letterSpacing: '0.15em' }}>
              Niobo
            </span>
            <span className="align-super text-2xl font-bold">&reg;</span>
          </h2>
        </motion.div>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-center text-base font-light leading-relaxed tracking-wide"
          style={{ color: theme.subtext }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          {FORMULA_INTRO}
        </motion.p>

        <div className="grid w-full grid-cols-4 gap-x-8 text-center">
          {FORMULA_PHASES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.12, ease: EASE }}
            >
              <span className="block text-4xl font-extralight" style={{ color: theme.text }}>
                {p.n}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-wide" style={{ color: theme.text }}>
                {p.title}
              </h3>
              <p
                className="mt-2 text-base font-light leading-relaxed"
                style={{ color: theme.subtext }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 w-full">
        <PhotoStrip photos={photos} />
      </div>
    </div>
  );
}
