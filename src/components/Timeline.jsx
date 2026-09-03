import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TIMELINE } from '../data/timeline';
import { getLogoIcon, getTimelineLogo } from '../lib/assets';

const EASE = [0.65, 0, 0.35, 1];
const LAST = TIMELINE.length - 1;

function LogoBadge({ name }) {
  const src = getTimelineLogo(name);
  if (!src) return null;
  return (
    <div className="mb-2 inline-flex items-center justify-center rounded-md bg-white px-2 py-1 shadow-sm">
      <img src={src} alt="" className="h-5 w-auto max-w-[70px] object-contain" />
    </div>
  );
}

// Cumulative roadmap: left/right reveals or hides milestones one at a time,
// but nothing already revealed disappears going forward — by the end the
// whole history sits on screen at once, alternating above/below the line.
// Self-contained: owns its own left/right key handling, active only while
// this section is mounted, so it never fights the main up/down navigation.
export default function Timeline({ theme }) {
  const [active, setActive] = useState(0);
  const icon = getLogoIcon(theme.mode);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActive((cur) => Math.min(LAST, cur + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActive((cur) => Math.max(0, cur - 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const progressPct = (active / LAST) * 100;

  return (
    <div className="w-full max-w-[1700px] px-8" onClick={(e) => e.stopPropagation()}>
      <div className="relative h-[380px]">
        {/* full track, muted + dashed: distance not yet reached */}
        <div
          className="absolute left-0 right-0 top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed"
          style={{ borderColor: 'rgba(75,78,83,0.3)' }}
        />
        {/* progress track: distance already covered */}
        <motion.div
          className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2"
          style={{ backgroundColor: '#0D5257' }}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />

        {TIMELINE.map((t, i) => {
          const xPct = (i / LAST) * 100;
          const above = i % 2 === 0;
          const isLast = i === LAST;
          const revealed = i <= active;

          return (
            <div
              key={t.year}
              className="absolute top-1/2"
              style={{ left: `${xPct}%`, transform: 'translate(-50%, -50%)' }}
            >
              {isLast ? (
                <div
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 34,
                    height: 34,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: revealed ? '0 0 26px 8px rgba(13,82,87,0.4)' : 'none',
                    opacity: revealed ? 1 : 0.35,
                  }}
                >
                  {icon && <img src={icon} alt="" className="h-full w-full" />}
                </div>
              ) : (
                <span
                  className="block rounded-full"
                  style={{
                    width: revealed ? 11 : 7,
                    height: revealed ? 11 : 7,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: revealed ? '#0D5257' : '#4B4E53',
                    opacity: revealed ? 1 : 0.35,
                  }}
                />
              )}

              {revealed &&
                (above ? (
                  <motion.div
                    className="absolute bottom-0 left-0 flex -translate-x-1/2 flex-col items-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <div className={isLast ? 'w-[220px] pb-2 text-center' : 'w-[190px] pb-2 text-center'}>
                      <LogoBadge name={t.logo} />
                      <div
                        className={`font-bold tracking-wide ${isLast ? 'text-2xl' : 'text-lg'}`}
                        style={{ color: '#0D5257' }}
                      >
                        {t.year}
                      </div>
                      <p className="mt-1 text-xs font-light leading-relaxed text-[#4B4E53]">
                        {t.text}
                      </p>
                    </div>
                    <div className="h-10 w-px" style={{ backgroundColor: '#0D5257' }} />
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute left-0 top-0 flex -translate-x-1/2 flex-col items-center"
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <div className="h-10 w-px" style={{ backgroundColor: '#0D5257' }} />
                    <div className="w-[190px] pt-2 text-center">
                      <LogoBadge name={t.logo} />
                      <div className="text-lg font-bold tracking-wide" style={{ color: '#0D5257' }}>
                        {t.year}
                      </div>
                      <p className="mt-1 text-xs font-light leading-relaxed text-[#4B4E53]">
                        {t.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
