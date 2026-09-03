import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { getLogo } from './lib/assets';
import { TRANSITION, verticalVariants } from './lib/motion';
import Cierre from './sections/Cierre';
import Company from './sections/Company';
import Formula from './sections/Formula';
import Historia from './sections/Historia';
import Portada from './sections/Portada';
import Proposito from './sections/Proposito';
import QuienesSomos from './sections/QuienesSomos';
import Slogan from './sections/Slogan';
import Team from './sections/Team';
import Tratarte from './sections/Tratarte';
import Valores from './sections/Valores';

// Order drives everything: nav dots, keyboard paging, index counter.
// 'historia' is the one id with its own left/right sub-navigation (see
// the keydown handler below and components/Timeline.jsx).
const SECTIONS = [
  { id: 'portada', theme: 'light', Content: Portada },
  { id: 'slogan', theme: 'dark', Content: Slogan },
  { id: 'proposito', theme: 'light', Content: Proposito },
  { id: 'quienes-somos', theme: 'dark', Content: QuienesSomos },
  { id: 'historia', theme: 'light', Content: Historia },
  { id: 'company', theme: 'dark', Content: Company },
  { id: 'valores', theme: 'light', Content: Valores },
  { id: 'formula', theme: 'dark', Content: Formula },
  { id: 'tratarte', theme: 'light', Content: Tratarte },
  { id: 'team', theme: 'dark', Content: Team },
  { id: 'cierre', theme: 'light', Content: Cierre },
];

const THEME = {
  light: { mode: 'light', bg: '#F2F2F2', text: '#0D5257', subtext: '#4B4E53' },
  dark: { mode: 'dark', bg: '#0D5257', text: '#FFFFFF', subtext: 'rgba(255,255,255,0.72)' },
};

const clamp = (i) => Math.max(0, Math.min(SECTIONS.length - 1, i));

export default function App() {
  const [[index, direction], setState] = useState([0, 0]);

  const paginate = useCallback((delta) => {
    setState(([current]) => {
      const next = clamp(current + delta);
      return next === current ? [current, 0] : [next, delta];
    });
  }, []);

  const jumpTo = useCallback((target) => {
    setState(([current]) => {
      if (target === current) return [current, 0];
      return [target, target > current ? 1 : -1];
    });
  }, []);

  const currentId = SECTIONS[index].id;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        paginate(1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        paginate(-1);
      } else if (currentId !== 'historia' && e.key === 'ArrowRight') {
        e.preventDefault();
        paginate(1);
      } else if (currentId !== 'historia' && e.key === 'ArrowLeft') {
        e.preventDefault();
        paginate(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentId, paginate]);

  const handleClick = (e) => {
    const goNext = e.clientX > window.innerWidth / 2;
    paginate(goNext ? 1 : -1);
  };

  const current = SECTIONS[index];
  const theme = THEME[current.theme];
  const Content = current.Content;
  const showChrome = index !== 0;

  return (
    <div
      className="relative w-screen h-screen overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.section
          key={current.id}
          custom={direction}
          variants={verticalVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={TRANSITION}
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: theme.bg, color: theme.text }}
        >
          <Content theme={theme} />
        </motion.section>
      </AnimatePresence>

      {/* Persistent chrome: sits above the crossfade, swaps logo variant with the theme */}
      <div
        className="pointer-events-none absolute left-10 top-8 transition-opacity duration-700"
        style={{ opacity: showChrome ? 1 : 0 }}
      >
        <img src={getLogo(theme.mode)} alt="Niobo Health" className="h-9 w-auto" />
      </div>

      <div
        className="pointer-events-none absolute right-10 top-8 text-xs font-light tracking-[0.3em] transition-opacity duration-700"
        style={{ color: theme.subtext, opacity: showChrome ? 1 : 0 }}
      >
        {String(index + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')}
      </div>

      <div
        className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-3 transition-opacity duration-700"
        style={{ opacity: showChrome ? 1 : 0 }}
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Ir a la seccion ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              jumpTo(i);
            }}
            className="h-2 w-2 rounded-full transition-all duration-700"
            style={{
              backgroundColor: theme.text,
              opacity: i === index ? 1 : 0.35,
              transform: i === index ? 'scale(1.4)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {index < SECTIONS.length - 1 && (
        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700"
          style={{ color: theme.text, opacity: showChrome ? 1 : 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
