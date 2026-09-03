import { motion } from 'framer-motion';

const EASE = [0.65, 0, 0.35, 1];

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

// Full-bleed filmstrip: all 4 photos side by side, always visible — no
// cycling. Each falls back to a neutral placeholder until the real photo
// lands at the path passed in.
export default function PhotoStrip({ photos, height = 300 }) {
  return (
    <div className="flex w-full" style={{ height }}>
      {photos.map((src, i) => (
        <motion.div
          key={i}
          className="relative h-full flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
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
