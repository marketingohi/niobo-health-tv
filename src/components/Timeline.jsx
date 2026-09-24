import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TIMELINE } from '../data/timeline';
import { getLogoIcon, getTimelineLogo } from '../lib/assets';
import { EASE } from '../lib/motion';

const LAST = TIMELINE.length - 1;

function LogoBadge({ name, size = 'normal' }) {
  const src = getTimelineLogo(name);
  if (!src) return null;
  return (
    <div className="mb-2 inline-flex items-center justify-center rounded-md bg-white px-2 py-1 shadow-sm">
      <img
        src={src}
        alt=""
        className={size === 'large' ? 'h-6 w-auto max-w-[90px] object-contain' : 'h-5 w-auto max-w-[70px] object-contain'}
      />
    </div>
  );
}

// Desktop/tablet: cumulative zigzag roadmap, driven by click or left/right
// arrow keys — nothing already revealed disappears going forward.
// Mobile: the same data as a simple one-card-at-a-time swipe carousel,
// since the zigzag has no room to breathe below ~640px.
export default function Timeline({ theme }) {
  const [active, setActive] = useState(0);
  const [[mobileIndex, dir], setMobileState] = useState([0, 0]);
  const icon = getLogoIcon(theme.mode);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActive((cur) => Math.min(LAST, cur + 1));
        setMobileState(([cur]) => (cur < LAST ? [cur + 1, 1] : [cur, 0]));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActive((cur) => Math.max(0, cur - 1));
        setMobileState(([cur]) => (cur > 0 ? [cur - 1, -1] : [cur, 0]));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const goMobile = (delta) =>
    setMobileState(([cur]) => {
      const next = Math.max(0, Math.min(LAST, cur + delta));
      return next === cur ? [cur, 0] : [next, delta];
    });

  const goDesktop = (delta) => setActive((cur) => Math.max(0, Math.min(LAST, cur + delta)));

  const progressPct = (active / LAST) * 100;
  const mobileItem = TIMELINE[mobileIndex];

  return (
    <div className="w-full max-w-[1700px] px-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
      {/* Mobile: single-card swipe carousel */}
      <div className="sm:hidden">
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={mobileIndex}
              custom={dir}
              initial={(d) => ({ opacity: 0, x: d >= 0 ? 40 : -40 })}
              animate={{ opacity: 1, x: 0 }}
              exit={(d) => ({ opacity: 0, x: d >= 0 ? -40 : 40 })}
              transition={{ duration: 0.4, ease: EASE }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) goMobile(1);
                else if (info.offset.x > 40) goMobile(-1);
              }}
              className="flex min-h-[220px] flex-col items-center justify-center px-4 text-center"
            >
              {mobileIndex === LAST ? (
                <div
                  className="mb-3 flex items-center justify-center rounded-full"
                  style={{
                    width: 44,
                    height: 44,
                    boxShadow: '0 0 26px 8px rgba(13,82,87,0.4)',
                  }}
                >
                  {icon && <img src={icon} alt="" className="h-full w-full" />}
                </div>
              ) : (
                <LogoBadge name={mobileItem.logo} size="large" />
              )}
              <div className="text-2xl font-bold tracking-wide" style={{ color: '#0D5257' }}>
                {mobileItem.year}
              </div>
              <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-[#4B4E53]">
                {mobileItem.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Hito anterior"
            onClick={() => goMobile(-1)}
            disabled={mobileIndex === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border disabled:opacity-30"
            style={{ borderColor: '#0D5257' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="#0D5257"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {TIMELINE.map((t, i) => (
              <button
                key={t.year}
                aria-label={`Ver hito ${t.year}`}
                onClick={() => setMobileState(([cur]) => [i, i > cur ? 1 : -1])}
                className="h-2 w-2 rounded-full transition-all"
                style={{
                  backgroundColor: '#0D5257',
                  opacity: i === mobileIndex ? 1 : 0.3,
                  transform: i === mobileIndex ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Hito siguiente"
            onClick={() => goMobile(1)}
            disabled={mobileIndex === LAST}
            className="flex h-9 w-9 items-center justify-center rounded-full border disabled:opacity-30"
            style={{ borderColor: '#0D5257' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="#0D5257"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tablet/desktop: cumulative zigzag roadmap */}
      <div className="hidden sm:block">
      <div className="relative h-[380px]">
        <div
          className="absolute left-0 right-0 top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed"
          style={{ borderColor: 'rgba(75,78,83,0.3)' }}
        />
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
                <button
                  type="button"
                  aria-label={`Ver hito ${t.year}`}
                  onClick={() => setActive(i)}
                  className="block cursor-pointer rounded-full"
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

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Hito anterior"
          onClick={() => goDesktop(-1)}
          disabled={active === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-opacity disabled:opacity-30"
          style={{ borderColor: '#0D5257' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6l-6 6 6 6"
              stroke="#0D5257"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-xs font-light uppercase tracking-[0.3em] text-[#4B4E53]">
          {String(active + 1).padStart(2, '0')} / {String(TIMELINE.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          aria-label="Hito siguiente"
          onClick={() => goDesktop(1)}
          disabled={active === LAST}
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-opacity disabled:opacity-30"
          style={{ borderColor: '#0D5257' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="#0D5257"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
}
