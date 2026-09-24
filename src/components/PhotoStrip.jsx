import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';

function ImagePlaceholderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4B4E53" strokeWidth="1.3" />
      <circle cx="8" cy="10" r="1.6" stroke="#4B4E53" strokeWidth="1.3" />
      <path
        d="M4 17l5-5 4 4 3-3 4 4"
        stroke="#4B4E53"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Desktop/tablet: all 4 photos side by side, always visible.
// Mobile: the same strip becomes a horizontally swipeable, scroll-snapped
// carousel (native touch scrolling — no custom gesture code needed).
export default function PhotoStrip({ photos, height = 300 }) {
  return (
    <div
      className="flex w-full snap-x snap-mandatory overflow-x-auto sm:snap-none sm:overflow-visible"
      style={{ height }}
    >
      {photos.map((src, i) => (
        <motion.div
          key={i}
          className="relative h-full w-[85%] flex-none snap-center overflow-hidden sm:w-auto sm:flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
        >
          {src ? (
            <img src={src} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center border-y border-white/10 bg-[#E4E4E4]/80">
              <ImagePlaceholderIcon />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
