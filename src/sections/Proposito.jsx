import { motion } from 'framer-motion';
import { getBrandsColor, getLogoIcon, getPhoto } from '../lib/assets';

const EASE = [0.65, 0, 0.35, 1];

// Drop the real photo at /src/assets/photos/seccion3-imagen.jpg and it
// replaces the placeholder automatically.
export default function Proposito({ theme }) {
  const image = getPhoto('seccion3-imagen');
  const icon = getLogoIcon(theme.mode);
  const brandsColor = getBrandsColor();

  return (
    <div className="absolute inset-0 flex">
      <div className="flex flex-1 flex-col justify-center pl-20 pr-14 text-left">
        <div className="relative py-4">
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2 whitespace-nowrap text-[clamp(3rem,_5.5vw,_8rem)] font-bold uppercase leading-none tracking-wide"
            style={{ color: '#0D5257', opacity: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            Our purpose
          </motion.span>

          <motion.h2
            className="relative z-10 text-5xl font-bold leading-snug tracking-wide"
            style={{ color: theme.text }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            El propósito que nos guía
          </motion.h2>
        </div>

        <motion.p
          className="mt-8 max-w-xl text-2xl font-extralight leading-relaxed tracking-wide"
          style={{ color: theme.subtext }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
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
            className="mt-10 w-full max-w-[1000px]"
            initial={{ opacity: 0, x: '-6%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
          />
        )}
      </div>

      <motion.div
        className="relative w-[42%] flex-none overflow-hidden"
        initial={{ opacity: 0, x: '4%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
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
