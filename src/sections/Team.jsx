import { motion } from 'framer-motion';
import TeamAvatar from '../components/TeamAvatar';
import { TEAM } from '../data/team';
import { getLogoIcon } from '../lib/assets';

const EASE = [0.65, 0, 0.35, 1];
const COLS = 5;
const CENTER_COL = 2;
const CENTER_ROW = 1;

// "Card deal": each slot's entrance offset points from the grid center
// toward that slot, so the whole row-by-row sequence reads as cards being
// dealt outward from the middle rather than a generic fade-up list.
function dealTransform(i) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const x = (CENTER_COL - col) * 50;
  const y = (CENTER_ROW - row) * 50;
  const rotate = col % 2 === 0 ? -10 : 10;
  return { x, y, rotate };
}

export default function Team({ theme }) {
  const icon = getLogoIcon(theme.mode);
  const slots = [...TEAM, { closing: true }];

  return (
    <div className="w-full max-w-[1700px] px-10">
      <div className="relative mb-7 flex flex-col items-center py-2">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3.2rem,_6vw,_9rem)] font-bold uppercase leading-none tracking-wide text-white"
          style={{ opacity: 0.12 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          Our team
        </motion.span>

        <motion.h2
          className="relative z-10 text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Nuestro equipo
        </motion.h2>
      </div>

      <div className="grid grid-cols-5 gap-x-8 gap-y-5">
        {slots.map((m, i) => {
          const { x, y, rotate } = dealTransform(i);
          return (
            <motion.div
              key={m.closing ? 'closing' : m.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x, y, rotate, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: EASE }}
            >
              {m.closing ? (
                <div className="flex flex-col items-center justify-center">
                  {icon && (
                    <img
                      src={icon}
                      alt=""
                      className="h-[90px] w-[90px] object-contain"
                      style={{ opacity: 0.85 }}
                    />
                  )}
                  <p className="mt-3 max-w-[170px] text-sm leading-relaxed">
                    <span className="font-bold" style={{ color: theme.text }}>
                      +150 profesionales más
                    </span>{' '}
                    <span className="font-normal" style={{ color: theme.subtext }}>
                      hacen posible este ecosistema, cada día, en cada clínica.
                    </span>
                  </p>
                </div>
              ) : (
                <>
                  <TeamAvatar name={m.name} size={90} />
                  <span
                    className="mt-3 text-sm font-medium tracking-wide"
                    style={{ color: theme.text }}
                  >
                    {m.name}
                  </span>
                  <span className="mt-1 text-xs font-light" style={{ color: theme.subtext }}>
                    {m.role}
                  </span>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
