import { motion } from 'framer-motion';
import niElement from '../assets/elements/ni-element.png';
import PhotoStrip from '../components/PhotoStrip';
import { FORMULA_INTRO, FORMULA_PHASES } from '../data/formula';
import { getPhoto } from '../lib/assets';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Formula({ theme }) {
  const photos = ['modelo-1', 'modelo-2', 'modelo-3', 'modelo-4'].map((name) => getPhoto(name));

  return (
    <div className="flex w-full flex-col items-center py-16 sm:py-24">
      <div className="w-full max-w-6xl px-6 sm:px-10">
        <motion.div
          className="mb-4 flex flex-col items-center gap-1 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <img src={niElement} alt="" className="h-12 w-12" />
          <p className="text-lg font-light tracking-wide sm:text-xl" style={{ color: theme.subtext }}>
            La fórmula ganadora
          </p>
          <h2 className="text-4xl leading-snug tracking-wide sm:text-5xl md:text-6xl" style={{ color: theme.text }}>
            <span className="font-bold">Modelo </span>
            <span className="font-extralight uppercase" style={{ letterSpacing: '0.15em' }}>
              Niobo
            </span>
            <span className="align-super text-xl font-bold sm:text-2xl">&reg;</span>
          </h2>
        </motion.div>

        <motion.p
          className="mx-auto mb-6 max-w-2xl text-center text-base font-light leading-relaxed tracking-wide"
          style={{ color: theme.subtext }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
        >
          {FORMULA_INTRO}
        </motion.p>

        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-4 sm:gap-x-8 sm:gap-y-0">
          {FORMULA_PHASES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: EASE }}
            >
              <span className="block text-3xl font-extralight sm:text-4xl" style={{ color: theme.text }}>
                {p.n}
              </span>
              <h3 className="mt-3 text-base font-bold tracking-wide sm:text-lg" style={{ color: theme.text }}>
                {p.title}
              </h3>
              <p
                className="mt-2 text-sm font-light leading-relaxed sm:text-base"
                style={{ color: theme.subtext }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full sm:mt-12">
        <PhotoStrip photos={photos} height={220} />
      </div>
    </div>
  );
}
