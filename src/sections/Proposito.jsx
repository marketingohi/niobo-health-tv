import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';
import { getBrandsColor, getLogoIcon, getPhoto } from '../lib/assets';

// Drop the real photo at /src/assets/photos/seccion3-imagen.jpg and it
// replaces the placeholder automatically.
export default function Proposito({ theme }) {
  const image = getPhoto('seccion3-imagen');
  const icon = getLogoIcon(theme.mode);
  const brandsColor = getBrandsColor();

  return (
    <div className="relative flex w-full flex-col md:flex-row">
      <div className="flex flex-1 flex-col justify-center px-6 py-16 text-left sm:px-10 md:py-24 md:pl-20 md:pr-14">
        <div className="relative py-2 sm:py-4">
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2 whitespace-nowrap text-[clamp(2.2rem,_5.5vw,_8rem)] font-bold uppercase leading-none tracking-wide"
            style={{ color: '#0D5257', opacity: 0.1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            Our purpose
          </motion.span>

          <motion.h2
            className="relative z-10 text-3xl font-bold leading-snug tracking-wide sm:text-4xl md:text-5xl"
            style={{ color: theme.text }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            El propósito que nos guía
          </motion.h2>
        </div>

        <motion.p
          className="mt-6 max-w-xl text-lg font-extralight leading-relaxed tracking-wide sm:text-xl md:text-2xl"
          style={{ color: theme.subtext }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
        >
          Nuestro propósito es sencillo de enunciar y exigente de cumplir: que cada persona que
          forma parte de este grupo sienta que pertenece a{' '}
          <span className="font-medium" style={{ color: theme.text }}>
            algo más grande que su día a día
          </span>
          , y que cada paciente que confía en nosotros sepa que, pase lo que pase,{' '}
          <span className="font-medium" style={{ color: theme.text }}>
            siempre estará acompañado
          </span>
          .
        </motion.p>

        {brandsColor && (
          <motion.img
            src={brandsColor}
            alt="OHI · COPU · IPAO · ADHA"
            className="mt-6 w-full max-w-[620px]"
            initial={{ opacity: 0, x: '-6%' }}
            whileInView={{ opacity: 1, x: '0%' }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          />
        )}
      </div>

      <motion.div
        className="relative aspect-[4/3] w-full flex-none overflow-hidden sm:aspect-video md:aspect-auto md:w-[42%]"
        initial={{ opacity: 0, x: '4%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
      >
        {image ? (
          <>
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: '#0D5257', opacity: 0.8, mixBlendMode: 'multiply' }}
            />
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-[#E4E4E4]">
            {icon && <img src={icon} alt="" className="h-24 w-24" style={{ opacity: 0.2 }} />}
            <span className="text-xs font-light uppercase tracking-[0.3em] text-[#4B4E53]">
              Imagen próximamente
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
