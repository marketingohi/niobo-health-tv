import { motion } from 'framer-motion';

const EASE = [0.65, 0, 0.35, 1];
const POP = [0.34, 1.56, 0.64, 1];

// Hand-rebuilt from the reference lockup: a framed, open loop of three nodes
// joined by two curves — the isotype's own "connection" motif doubles as the
// entrance choreography (frame draws, then each node arrives via the curve
// that leads to it). Swap /src/assets/logo/niobo-health-logo.svg in and
// Logo.jsx renders that instead — this stays as the built-in fallback.
export default function Mark({ color = '#0D5257', size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <motion.rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="10"
        stroke={color}
        strokeWidth="5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      />

      <motion.path
        d="M44,22 C60,20 74,30 70,46"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
      />
      <motion.path
        d="M70,46 C74,64 52,76 28,68"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: EASE }}
      />

      <motion.circle
        cx="44"
        cy="22"
        r="6"
        fill={color}
        style={{ transformOrigin: '44px 22px' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.4, ease: POP }}
      />
      <motion.circle
        cx="70"
        cy="46"
        r="6"
        fill={color}
        style={{ transformOrigin: '70px 46px' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 1.05, ease: POP }}
      />
      <motion.circle
        cx="28"
        cy="68"
        r="6"
        fill={color}
        style={{ transformOrigin: '28px 68px' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 1.65, ease: POP }}
      />
    </svg>
  );
}
